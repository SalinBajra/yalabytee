const CRM_ORIGINS = new Set([
  'https://crm.yalabyte.com',
  'https://yalabyte-crm.vercel.app',
  'http://localhost:5173'
]);

function serviceHeaders(serverKey, extra = {}) {
  const headers = { apikey: serverKey, ...extra };
  if (!serverKey.startsWith('sb_secret_')) headers.Authorization = `Bearer ${serverKey}`;
  return headers;
}

function setCors(request, response) {
  const origin = String(request.headers.origin || '');
  if (CRM_ORIGINS.has(origin)) response.setHeader('Access-Control-Allow-Origin', origin);
  response.setHeader('Vary', 'Origin');
  response.setHeader('Access-Control-Allow-Headers', 'authorization, content-type');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
}

async function readJson(result) {
  const text = await result.text();
  if (!text) return {};
  try { return JSON.parse(text); } catch { return { detail: text.slice(0, 500) }; }
}

export default async function handler(request, response) {
  setCors(request, response);
  if (request.method === 'OPTIONS') return response.status(204).end();
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST, OPTIONS');
    return response.status(405).json({ detail: 'Method not allowed.' });
  }

  const origin = String(request.headers.origin || '');
  if (origin && !CRM_ORIGINS.has(origin)) {
    return response.status(403).json({ detail: 'This request origin is not allowed.' });
  }

  const supabaseUrl = String(process.env.SUPABASE_URL || '').replace(/\/$/, '');
  const serverKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  const accessToken = String(request.headers.authorization || '').replace(/^Bearer\s+/i, '');
  const contactId = String(request.body?.contactId || '').trim();
  if (!supabaseUrl || !serverKey) return response.status(503).json({ detail: 'Portal invitations are not configured.' });
  if (!accessToken || !contactId) return response.status(400).json({ detail: 'A signed-in teammate and contact are required.' });

  try {
    const userResult = await fetch(`${supabaseUrl}/auth/v1/user`, {
      headers: { apikey: serverKey, Authorization: `Bearer ${accessToken}` }
    });
    const teamUser = await readJson(userResult);
    const teamEmail = String(teamUser.email || '').toLowerCase();
    if (!userResult.ok || !teamUser.id || !teamEmail.endsWith('@yalabyte.com')) {
      return response.status(403).json({ detail: 'Only signed-in YalaByte teammates can invite clients.' });
    }

    const contactResult = await fetch(
      `${supabaseUrl}/rest/v1/contacts?id=eq.${encodeURIComponent(contactId)}&select=id,name,email,company`,
      { headers: serviceHeaders(serverKey) }
    );
    const contacts = await readJson(contactResult);
    const contact = Array.isArray(contacts) ? contacts[0] : null;
    if (!contactResult.ok || !contact) return response.status(404).json({ detail: 'Contact not found.' });
    const email = String(contact.email || '').trim().toLowerCase();
    if (!email) return response.status(400).json({ detail: 'Add an email address before inviting this client.' });

    const profileResult = await fetch(
      `${supabaseUrl}/rest/v1/client_profiles?contact_id=eq.${encodeURIComponent(contactId)}&select=user_id,status`,
      { headers: serviceHeaders(serverKey) }
    );
    const profiles = await readJson(profileResult);
    if (profileResult.ok && Array.isArray(profiles) && profiles.length) {
      return response.status(200).json({ status: 'already_invited', message: 'This client already has portal access.' });
    }

    const redirectTo = String(process.env.CLIENT_PORTAL_URL || 'https://www.yalabyte.com/client-portal');
    const inviteResult = await fetch(
      `${supabaseUrl}/auth/v1/invite?redirect_to=${encodeURIComponent(redirectTo)}`,
      {
        method: 'POST',
        headers: serviceHeaders(serverKey, { 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          email,
          data: { name: contact.name || email.split('@')[0], role: 'client', contact_id: contact.id }
        })
      }
    );
    const invitedUser = await readJson(inviteResult);
    if (!inviteResult.ok || !invitedUser.id) {
      const alreadyRegistered = /already|registered|exists/i.test(JSON.stringify(invitedUser));
      return response.status(alreadyRegistered ? 409 : 502).json({
        detail: alreadyRegistered
          ? 'This email already has a login. Ask an admin to link it to this contact.'
          : 'Supabase could not send the portal invitation.'
      });
    }

    const saveProfileResult = await fetch(`${supabaseUrl}/rest/v1/client_profiles`, {
      method: 'POST',
      headers: serviceHeaders(serverKey, { 'Content-Type': 'application/json', Prefer: 'return=minimal' }),
      body: JSON.stringify({
        user_id: invitedUser.id,
        contact_id: contact.id,
        name: contact.name || email.split('@')[0],
        email,
        company: contact.company || '',
        status: 'invited',
        invited_by: teamUser.id
      })
    });
    if (!saveProfileResult.ok) {
      console.error('Client profile creation failed', saveProfileResult.status, await saveProfileResult.text());
      return response.status(502).json({ detail: 'The invite was sent, but the CRM profile could not be linked. Please contact an admin.' });
    }

    return response.status(201).json({ status: 'invited', message: `Portal invitation sent to ${email}.` });
  } catch (error) {
    console.error('Client invitation failed', error instanceof Error ? error.message : error);
    return response.status(502).json({ detail: 'Unable to complete the portal invitation.' });
  }
}
