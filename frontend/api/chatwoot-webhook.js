const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function verifyWebhookToken(request) {
  const token = process.env.CHATWOOT_WEBHOOK_TOKEN || '';
  if (!token) return true;
  return request.query?.token === token || request.headers['x-chatwoot-webhook-token'] === token;
}

function pickContact(payload) {
  return payload.contact || payload.conversation?.contact || payload.meta?.sender || payload.sender || {};
}

function pickConversation(payload) {
  return payload.conversation || payload;
}

function pickMessage(payload) {
  return payload.message || payload.messages?.[0] || payload.conversation?.messages?.[0] || {};
}

function headers(serverKey) {
  const value = {
    apikey: serverKey,
    'Content-Type': 'application/json',
    Prefer: 'return=minimal'
  };
  if (!serverKey.startsWith('sb_secret_')) value.Authorization = `Bearer ${serverKey}`;
  return value;
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ detail: 'Method not allowed.' });
  }

  if (!verifyWebhookToken(request)) {
    return response.status(401).json({ detail: 'Invalid webhook token.' });
  }

  const payload = request.body || {};
  const event = String(payload.event || payload.event_name || '').toLowerCase();
  if (event && !['conversation_created', 'message_created', 'conversation_updated'].includes(event)) {
    return response.status(200).json({ status: 'ignored' });
  }

  const contact = pickContact(payload);
  const conversation = pickConversation(payload);
  const message = pickMessage(payload);
  const email = String(contact.email || conversation.meta?.sender?.email || '').trim().toLowerCase();
  const name = String(contact.name || conversation.meta?.sender?.name || 'Website visitor').trim();
  const body = String(message.content || conversation.messages?.[0]?.content || conversation.additional_attributes?.description || 'Chat started on website.').trim();

  if (!email || !EMAIL_PATTERN.test(email)) {
    return response.status(200).json({ status: 'ignored', reason: 'missing customer email' });
  }

  const supabaseUrl = String(process.env.SUPABASE_URL || '').replace(/\/$/, '');
  const serverKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  if (!supabaseUrl || !serverKey) {
    return response.status(503).json({ detail: 'CRM integration is not configured.' });
  }

  const receivedAt = new Date().toISOString();
  const conversationId = String(conversation.id || payload.id || email);
  const leadId = `lead-chatwoot-${conversationId}`;
  const crmLead = {
    id: leadId,
    name,
    email,
    phone: String(contact.phone_number || contact.phone || '').trim(),
    company: '',
    service: 'Website Chat',
    message: body || 'Chat started on website.',
    status: 'new',
    priority: 'Medium',
    owner: '',
    value: '',
    followUpDate: '',
    source: 'Chatwoot',
    notes: `Chatwoot conversation: ${conversationId}`,
    createdAt: receivedAt,
    updatedAt: receivedAt,
    activities: [
      {
        id: `activity-chatwoot-${conversationId}`,
        type: 'Created',
        text: 'Lead created automatically from Chatwoot website chat.',
        at: receivedAt
      }
    ]
  };

  try {
    const supabaseResponse = await fetch(`${supabaseUrl}/rest/v1/leads`, {
      method: 'POST',
      headers: headers(serverKey),
      body: JSON.stringify({
        id: leadId,
        data: crmLead,
        created_at: receivedAt,
        updated_at: receivedAt
      })
    });

    if (!supabaseResponse.ok && supabaseResponse.status !== 409) {
      const detail = (await supabaseResponse.text()).slice(0, 500);
      console.error('Chatwoot CRM sync failed', supabaseResponse.status, detail);
      return response.status(502).json({ detail: `CRM rejected the Chatwoot event (${supabaseResponse.status}).` });
    }

    return response.status(200).json({ status: 'synced', leadId });
  } catch (error) {
    console.error('Chatwoot CRM sync failed', error instanceof Error ? error.message : 'Unknown error');
    return response.status(502).json({ detail: 'Unable to reach the CRM database.' });
  }
}
