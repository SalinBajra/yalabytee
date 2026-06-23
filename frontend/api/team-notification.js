import nodemailer from 'nodemailer';

const allowedOrigins = new Set(['https://crm.yalabyte.com', 'https://yalabyte-crm.vercel.app']);

function cors(response, origin) {
  if (allowedOrigins.has(origin)) response.setHeader('Access-Control-Allow-Origin', origin);
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  response.setHeader('Vary', 'Origin');
}

export default async function handler(request, response) {
  const origin = request.headers.origin || '';
  cors(response, origin);
  if (request.method === 'OPTIONS') return response.status(204).end();
  if (request.method !== 'POST') return response.status(405).json({ detail: 'Method not allowed.' });
  if (!allowedOrigins.has(origin)) return response.status(403).json({ detail: 'Origin is not allowed.' });

  const accessToken = String(request.headers.authorization || '').replace(/^Bearer\s+/i, '');
  const supabaseUrl = String(process.env.SUPABASE_URL || '').replace(/\/$/, '');
  const serverKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  if (!accessToken || !supabaseUrl || !serverKey) return response.status(401).json({ detail: 'Authentication required.' });

  try {
    const userResponse = await fetch(`${supabaseUrl}/auth/v1/user`, {
      headers: { apikey: serverKey, Authorization: `Bearer ${accessToken}` }
    });
    if (!userResponse.ok) return response.status(401).json({ detail: 'Invalid CRM session.' });
    const user = await userResponse.json();
    if (!String(user.email || '').toLowerCase().endsWith('@yalabyte.com')) {
      return response.status(403).json({ detail: 'Only YalaByte team members can send assignments.' });
    }

    const payload = request.body || {};
    const recipient = String(payload.to || '').trim().toLowerCase();
    if (!recipient.endsWith('@yalabyte.com') || !String(payload.title || '').trim()) {
      return response.status(400).json({ detail: 'A valid YalaByte recipient and task title are required.' });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS;
    if (!smtpUser || !smtpPass) return response.status(503).json({ detail: 'Email delivery is not configured.' });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtppro.zoho.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || 'true').toLowerCase() !== 'false',
      auth: { user: smtpUser, pass: smtpPass }
    });

    const dueDate = payload.dueDate ? `\nDue: ${payload.dueDate}` : '';
    const description = payload.description ? `\n\nInstructions:\n${payload.description}` : '';
    await transporter.sendMail({
      from: smtpUser,
      to: recipient,
      replyTo: user.email,
      subject: `CRM task: ${String(payload.title).trim()}`,
      text: `Hi ${payload.assigneeName || 'team member'},\n\n${payload.assignedByName || user.email} tagged you on a CRM prospect.\n\nContact: ${payload.contactName || 'Prospect'}\nCompany: ${payload.contactCompany || 'Not provided'}\nTask: ${String(payload.title).trim()}${dueDate}${description}\n\nOpen the YalaByte CRM to review and update this task.\nhttps://crm.yalabyte.com`
    });

    return response.status(200).json({ status: 'sent' });
  } catch (error) {
    console.error('Team notification failed', error instanceof Error ? error.message : 'Unknown error');
    return response.status(502).json({ detail: 'Unable to send team notification.' });
  }
}
