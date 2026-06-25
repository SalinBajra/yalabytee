import { createClient } from '@supabase/supabase-js';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getSupabaseServerKey() {
  return (
    process.env.SUPABASE_SERVICE_ROLE_KEY
    || process.env.SUPABASE_SECRET_KEY
    || process.env.SUPABASE_SERVICE_KEY
    || ''
  );
}

function getSupabaseClient() {
  const supabaseUrl = String(process.env.SUPABASE_URL || '').replace(/\/$/, '');
  const serverKey = getSupabaseServerKey();
  if (!supabaseUrl || !serverKey) return null;
  return createClient(supabaseUrl, serverKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

function publicError(error, fallback) {
  const message = error?.message || '';
  if (/permission denied|row-level security|invalid api key|jwt|not authorized/i.test(message)) {
    return `${fallback} Supabase rejected the website server key. In the website Vercel project, SUPABASE_SERVICE_ROLE_KEY must be the service-role/secret key from the same Supabase project that has the chat tables.`;
  }
  if (/does not exist|schema cache/i.test(message)) {
    return `${fallback} The chat tables are missing from the Supabase project used by the website.`;
  }
  return fallback;
}

export default async function handler(request, response) {
  if (!['GET', 'POST'].includes(request.method)) {
    response.setHeader('Allow', 'GET, POST');
    return response.status(405).json({ detail: 'Method not allowed.' });
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    return response.status(503).json({ detail: 'Chat integration is not configured.' });
  }

  if (request.method === 'GET') {
    const conversationId = String(request.query?.conversationId || '').trim();
    if (!conversationId) return response.status(400).json({ detail: 'Conversation id is required.' });

    const { data, error } = await supabase
      .from('website_chat_messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Website chat message load failed', error);
      return response.status(502).json({ detail: publicError(error, 'Unable to load chat messages.') });
    }

    return response.status(200).json({ messages: data || [] });
  }

  const payload = request.body || {};
  const name = String(payload.name || '').trim();
  const email = String(payload.email || '').trim().toLowerCase();
  const phone = String(payload.phone || '').trim();
  const company = String(payload.company || '').trim();
  const message = String(payload.message || '').trim();
  const sourcePath = String(payload.sourcePath || '').trim();
  const conversationId = String(payload.conversationId || '').trim();

  if (!name || !email || !phone || !company || !message) {
    return response.status(400).json({ detail: 'Name, email, phone, company, and message are required.' });
  }
  if (!EMAIL_PATTERN.test(email) || phone.length < 7 || message.length < 20) {
    return response.status(400).json({ detail: 'Invalid chat details.' });
  }

  const now = new Date().toISOString();

  let conversation = { id: conversationId };
  if (!conversationId) {
    const { data, error } = await supabase
      .from('website_chat_conversations')
      .insert({
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
        customer_company: company,
        subject: 'Website chat',
        source_path: sourcePath,
        created_at: now,
        updated_at: now,
        last_activity_at: now
      })
      .select('id')
      .single();

    if (error || !data?.id) {
      console.error('Website chat conversation failed', error);
      return response.status(502).json({ detail: publicError(error, 'Unable to start chat conversation.') });
    }
    conversation = data;
  } else {
    const { error } = await supabase
      .from('website_chat_conversations')
      .update({
        status: 'open',
        customer_phone: phone,
        customer_company: company,
        updated_at: now,
        last_activity_at: now
      })
      .eq('id', conversationId);

    if (error) {
      console.error('Website chat conversation update failed', error);
      return response.status(502).json({ detail: publicError(error, 'Unable to continue chat conversation.') });
    }
  }

  const { error: messageError } = await supabase
    .from('website_chat_messages')
    .insert({
      conversation_id: conversation.id,
      author_type: 'client',
      author_name: name,
      author_email: email,
      body: message,
      created_at: now
    });

  if (messageError) {
    console.error('Website chat message failed', messageError);
    return response.status(502).json({ detail: publicError(messageError, 'Unable to save chat message.') });
  }

  return response.status(201).json({ status: 'saved', conversationId: conversation.id });
}
