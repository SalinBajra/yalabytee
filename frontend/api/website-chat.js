import { createHash } from 'node:crypto';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function serverHeaders(serverKey, prefer = 'return=representation') {
  const headers = {
    apikey: serverKey,
    'Content-Type': 'application/json',
    Prefer: prefer
  };
  if (!serverKey.startsWith('sb_secret_')) headers.Authorization = `Bearer ${serverKey}`;
  return headers;
}

export default async function handler(request, response) {
  if (!['GET', 'POST'].includes(request.method)) {
    response.setHeader('Allow', 'GET, POST');
    return response.status(405).json({ detail: 'Method not allowed.' });
  }

  const supabaseUrl = String(process.env.SUPABASE_URL || '').replace(/\/$/, '');
  const serverKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  if (!supabaseUrl || !serverKey) {
    return response.status(503).json({ detail: 'Chat integration is not configured.' });
  }

  if (request.method === 'GET') {
    const conversationId = String(request.query?.conversationId || '').trim();
    if (!conversationId) return response.status(400).json({ detail: 'Conversation id is required.' });

    try {
      const messagesResponse = await fetch(
        `${supabaseUrl}/rest/v1/website_chat_messages?conversation_id=eq.${encodeURIComponent(conversationId)}&select=*&order=created_at.asc`,
        { headers: serverHeaders(serverKey) }
      );
      if (!messagesResponse.ok) {
        const detail = (await messagesResponse.text()).slice(0, 500);
        console.error('Website chat message load failed', messagesResponse.status, detail);
        return response.status(502).json({ detail: 'Unable to load chat messages.' });
      }
      const messages = await messagesResponse.json();
      return response.status(200).json({ messages });
    } catch (error) {
      console.error('Website chat message load failed', error instanceof Error ? error.message : 'Unknown error');
      return response.status(502).json({ detail: 'Unable to reach the chat database.' });
    }
  }

  const payload = request.body || {};
  const name = String(payload.name || '').trim();
  const email = String(payload.email || '').trim().toLowerCase();
  const message = String(payload.message || '').trim();
  const sourcePath = String(payload.sourcePath || '').trim();
  const conversationId = String(payload.conversationId || '').trim();

  if (!name || !email || !message) {
    return response.status(400).json({ detail: 'Name, email, and message are required.' });
  }
  if (!EMAIL_PATTERN.test(email) || message.length < 20) {
    return response.status(400).json({ detail: 'Invalid chat details.' });
  }

  const now = new Date().toISOString();
  const fingerprint = createHash('sha256').update(email).digest('hex').slice(0, 32);

  try {
    let conversation = { id: conversationId };

    if (!conversationId) {
      const conversationResponse = await fetch(`${supabaseUrl}/rest/v1/website_chat_conversations`, {
        method: 'POST',
        headers: serverHeaders(serverKey),
        body: JSON.stringify({
          customer_name: name,
          customer_email: email,
          subject: 'Website chat',
          source_path: sourcePath,
          created_at: now,
          updated_at: now,
          last_activity_at: now
        })
      });

      const conversationRows = await conversationResponse.json().catch(() => []);
      conversation = Array.isArray(conversationRows) ? conversationRows[0] : conversationRows;
      if (!conversationResponse.ok || !conversation?.id) {
        const detail = JSON.stringify(conversationRows).slice(0, 500);
        console.error('Website chat conversation failed', conversationResponse.status, detail);
        return response.status(502).json({ detail: 'Unable to start chat conversation.' });
      }
    } else {
      await fetch(`${supabaseUrl}/rest/v1/website_chat_conversations?id=eq.${encodeURIComponent(conversationId)}`, {
        method: 'PATCH',
        headers: serverHeaders(serverKey, 'return=minimal'),
        body: JSON.stringify({
          status: 'open',
          updated_at: now,
          last_activity_at: now
        })
      });
    }

    const messageResponse = await fetch(`${supabaseUrl}/rest/v1/website_chat_messages`, {
      method: 'POST',
      headers: serverHeaders(serverKey, 'return=minimal'),
      body: JSON.stringify({
        conversation_id: conversation.id,
        author_type: 'client',
        author_name: name,
        author_email: email,
        body: message,
        created_at: now
      })
    });
    if (!messageResponse.ok) {
      const detail = (await messageResponse.text()).slice(0, 500);
      console.error('Website chat message failed', messageResponse.status, detail);
      return response.status(502).json({ detail: 'Unable to save chat message.' });
    }

    if (!conversationId) {
      const leadId = `lead-chat-${fingerprint}`;
      const crmLead = {
        id: leadId,
        name,
        email,
        phone: '',
        company: '',
        service: 'Website Chat',
        message,
        status: 'new',
        priority: 'Medium',
        owner: '',
        value: '',
        followUpDate: '',
        source: 'Website Chat',
        notes: `Chat conversation: ${conversation.id}`,
        createdAt: now,
        updatedAt: now,
        activities: [
          {
            id: `activity-chat-${fingerprint}`,
            type: 'Created',
            text: 'Lead created automatically from website chat.',
            at: now
          }
        ]
      };

      await fetch(`${supabaseUrl}/rest/v1/leads`, {
        method: 'POST',
        headers: serverHeaders(serverKey, 'resolution=merge-duplicates,return=minimal'),
        body: JSON.stringify({
          id: leadId,
          data: crmLead,
          created_at: now,
          updated_at: now
        })
      });
    }

    return response.status(201).json({ status: 'saved', conversationId: conversation.id });
  } catch (error) {
    console.error('Website chat failed', error instanceof Error ? error.message : 'Unknown error');
    return response.status(502).json({ detail: 'Unable to reach the chat database.' });
  }
}
