import { createHash } from 'node:crypto';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ detail: 'Method not allowed.' });
  }

  const payload = request.body || {};
  const lead = {
    name: String(payload.name || '').trim(),
    email: String(payload.email || '').trim().toLowerCase(),
    phone: String(payload.phone || '').trim(),
    company: String(payload.company || '').trim(),
    service: String(payload.service || '').trim(),
    message: String(payload.message || '').trim()
  };

  if (!lead.name || !lead.email || !lead.service || !lead.message) {
    return response.status(400).json({ detail: 'Missing required inquiry details.' });
  }
  if (!EMAIL_PATTERN.test(lead.email) || lead.message.length < 20) {
    return response.status(400).json({ detail: 'Invalid inquiry details.' });
  }

  const supabaseUrl = String(process.env.SUPABASE_URL || '').replace(/\/$/, '');
  const serverKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  if (!supabaseUrl || !serverKey) {
    return response.status(503).json({ detail: 'CRM integration is not configured.' });
  }

  const receivedAt = new Date().toISOString();
  const fingerprint = createHash('sha256')
    .update(`${receivedAt}|${lead.email}|${lead.phone}|${lead.message}`)
    .digest('hex')
    .slice(0, 32);
  const leadId = `lead-web-${fingerprint}`;
  const crmLead = {
    id: leadId,
    ...lead,
    status: 'new',
    priority: 'Medium',
    owner: '',
    value: '',
    followUpDate: '',
    source: 'Website',
    notes: '',
    createdAt: receivedAt,
    updatedAt: receivedAt,
    activities: [
      {
        id: `activity-web-${fingerprint}`,
        type: 'Created',
        text: 'Lead created automatically from website inquiry.',
        at: receivedAt
      }
    ]
  };

  const headers = {
    apikey: serverKey,
    'Content-Type': 'application/json',
    Prefer: 'return=minimal'
  };
  if (!serverKey.startsWith('sb_secret_')) {
    headers.Authorization = `Bearer ${serverKey}`;
  }

  try {
    const supabaseResponse = await fetch(`${supabaseUrl}/rest/v1/leads`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        id: leadId,
        data: crmLead,
        created_at: receivedAt,
        updated_at: receivedAt
      })
    });

    if (!supabaseResponse.ok) {
      const detail = (await supabaseResponse.text()).slice(0, 500);
      console.error('CRM delivery failed', supabaseResponse.status, detail);
      return response.status(502).json({ detail: `CRM rejected the inquiry (${supabaseResponse.status}).` });
    }

    return response.status(201).json({ status: 'saved', leadId });
  } catch (error) {
    const cause = error instanceof Error && error.cause instanceof Error ? error.cause : null;
    console.error(
      'CRM delivery failed',
      error instanceof Error ? error.message : 'Unknown error',
      cause?.name || '',
      cause?.message || '',
      'code:',
      cause && 'code' in cause ? cause.code : ''
    );
    return response.status(502).json({ detail: 'Unable to reach the CRM database.' });
  }
}
