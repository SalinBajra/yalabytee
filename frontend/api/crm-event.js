const allowedOrigins = new Set(['https://crm.yalabyte.com', 'https://yalabyte-crm.vercel.app']);

function applyCors(response, origin) {
  if (allowedOrigins.has(origin)) response.setHeader('Access-Control-Allow-Origin', origin);
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  response.setHeader('Vary', 'Origin');
}

export default async function handler(request, response) {
  const origin = request.headers.origin || '';
  applyCors(response, origin);
  if (request.method === 'OPTIONS') return response.status(204).end();
  if (request.method !== 'POST') return response.status(405).json({ detail: 'Method not allowed.' });
  if (!allowedOrigins.has(origin)) return response.status(403).json({ detail: 'Origin is not allowed.' });

  const accessToken = String(request.headers.authorization || '').replace(/^Bearer\s+/i, '');
  const supabaseUrl = String(process.env.SUPABASE_URL || '').replace(/\/$/, '');
  const serverKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  const webhookUrl = process.env.CLIQ_WEBHOOK_URL || process.env.ZOHO_CLIQ_WEBHOOK_URL || '';
  if (!accessToken || !supabaseUrl || !serverKey) return response.status(401).json({ detail: 'Authentication required.' });
  if (!webhookUrl) return response.status(503).json({ detail: 'Cliq notifications are not configured.' });

  try {
    const userResponse = await fetch(`${supabaseUrl}/auth/v1/user`, {
      headers: { apikey: serverKey, Authorization: `Bearer ${accessToken}` }
    });
    if (!userResponse.ok) return response.status(401).json({ detail: 'Invalid CRM session.' });
    const user = await userResponse.json();
    const actorEmail = String(user.email || '').toLowerCase();
    if (!actorEmail.endsWith('@yalabyte.com')) return response.status(403).json({ detail: 'YalaByte access required.' });

    const payload = request.body || {};
    const lead = payload.lead || {};
    if (payload.type !== 'new_lead' || !String(lead.name || '').trim()) {
      return response.status(400).json({ detail: 'Invalid CRM event.' });
    }

    const actorName = user.user_metadata?.name || actorEmail.split('@')[0];
    const ownerName = String(lead.owner || '').trim();
    const hasDifferentOwner = ownerName
      && ownerName.localeCompare(actorName, undefined, { sensitivity: 'base' }) !== 0;
    const text = [
      'Hi Team! 🚀',
      '',
      `**${actorName}** has added a new lead: **${lead.name}**.`,
      ...(hasDifferentOwner ? [`This lead is assigned to **${ownerName}**.`] : []),
      '',
      "Please take a look and let's rock and roll! 🤘",
      '',
      `**Company:** ${lead.company || 'Not provided'}`,
      `**Service:** ${lead.service || 'Not specified'}`,
      `**Email:** ${lead.email || 'Not provided'}`,
      `**Phone:** ${lead.phone || 'Not provided'}`,
      `**Source:** ${lead.source || 'Manual entry'}`,
      'Open CRM: https://crm.yalabyte.com'
    ].join('\n');

    const cliqResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'crm_new_lead',
        title: 'New CRM lead added',
        name: lead.name,
        email: lead.email || 'Not provided',
        phone: lead.phone || 'Not provided',
        company: lead.company || 'Not provided',
        service: lead.service || 'Not specified',
        source: lead.source || 'Manual entry',
        owner: ownerName || actorName,
        actor_name: actorName,
        actor_email: actorEmail,
        lead_name: lead.name,
        added_by: actorEmail,
        message: text,
        text
      })
    });
    if (!cliqResponse.ok) {
      console.error('Cliq CRM notification failed', cliqResponse.status);
      return response.status(502).json({ detail: 'Cliq rejected the notification.' });
    }

    return response.status(200).json({ status: 'sent' });
  } catch (error) {
    console.error('Cliq CRM notification failed', error instanceof Error ? error.message : 'Unknown error');
    return response.status(502).json({ detail: 'Unable to send Cliq notification.' });
  }
}
