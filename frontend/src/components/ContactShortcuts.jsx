import { useEffect, useState } from 'react';

const phoneNumber = '+9779705501969';
const displayPhoneNumber = '+977 9705501969';
const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}`;
const initialChat = { name: '', email: '', phone: '', company: '', projectRequirement: '', contactTime: '', message: '' };
const CHAT_SESSION_KEY = 'yalabyte-website-chat-session';
const quickReplies = [
  'I need a business website',
  'I want pricing details',
  'I need website maintenance',
  'I want to contact the team',
  'I need SEO help'
];
const contactTimeOptions = ['Anytime', 'Morning', 'Afternoon', 'Evening'];

export { displayPhoneNumber, phoneNumber, whatsappUrl };

export default function ContactShortcuts() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatSession, setChatSession] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem(CHAT_SESSION_KEY) || 'null');
    } catch {
      return null;
    }
  });
  const [chatForm, setChatForm] = useState(() => ({
    ...initialChat,
    name: chatSession?.name || '',
    email: chatSession?.email || '',
    phone: chatSession?.phone || '',
    company: chatSession?.company || '',
    projectRequirement: chatSession?.projectRequirement || '',
    contactTime: chatSession?.contactTime || ''
  }));
  const [messages, setMessages] = useState([]);
  const [chatStatus, setChatStatus] = useState({ type: 'idle', message: '' });
  const [chatSending, setChatSending] = useState(false);
  const hasConversation = Boolean(chatSession?.conversationId);
  const chatEnded = Boolean(chatSession?.endedAt);
  const showDetails = !hasConversation;
  const hasThread = messages.length > 0;

  const syncConversationSession = (conversation, conversationId = chatSession?.conversationId) => {
    if (!conversation || !conversationId) return null;
    const endedAt = conversation.ended_at || (conversation.status === 'resolved' ? new Date().toISOString() : '');
    const nextSession = {
      conversationId,
      name: conversation.customer_name || chatSession?.name || '',
      email: conversation.customer_email || chatSession?.email || '',
      phone: conversation.customer_phone || chatSession?.phone || '',
      company: conversation.customer_company || chatSession?.company || '',
      projectRequirement: chatSession?.projectRequirement || '',
      contactTime: chatSession?.contactTime || '',
      endedAt
    };
    window.localStorage.setItem(CHAT_SESSION_KEY, JSON.stringify(nextSession));
    setChatSession(nextSession);
    setChatForm((current) => ({
      ...current,
      name: nextSession.name,
      email: nextSession.email,
      phone: nextSession.phone,
      company: nextSession.company
    }));
    if (endedAt) {
      setChatStatus({ type: 'success', message: 'This chat has been closed by the YalaByte team.' });
    }
    return nextSession;
  };

  const loadMessages = async (conversationId = chatSession?.conversationId) => {
    if (!conversationId) return;
    try {
      const response = await fetch(`/api/website-chat?conversationId=${encodeURIComponent(conversationId)}`);
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.detail || 'Unable to load messages.');
      setMessages(Array.isArray(result.messages) ? result.messages : []);
      if (result.conversation) {
        syncConversationSession(result.conversation, conversationId);
      }
    } catch {
      // Keep the current thread visible; the next poll can recover.
    }
  };

  useEffect(() => {
    if (!chatOpen || !chatSession?.conversationId) return undefined;
    loadMessages(chatSession.conversationId);
    const timer = window.setInterval(() => loadMessages(chatSession.conversationId), 5000);
    return () => window.clearInterval(timer);
  }, [chatOpen, chatSession?.conversationId]);

  const handleChatChange = (event) => {
    const { name, value } = event.target;
    setChatForm((current) => ({ ...current, [name]: value }));
  };

  const useQuickReply = (reply) => {
    setChatForm((current) => ({
      ...current,
      projectRequirement: current.projectRequirement || reply,
      message: current.message ? `${current.message}\n${reply}` : reply
    }));
    setChatStatus({ type: 'idle', message: '' });
  };

  const sendChat = async (event) => {
    event.preventDefault();
    if (chatEnded) {
      setChatStatus({ type: 'error', message: 'This chat has ended. Start a new chat to send another message.' });
      return;
    }

    const name = (showDetails ? chatForm.name : chatSession?.name || chatForm.name || 'Website visitor').trim();
    const email = (showDetails ? chatForm.email : chatSession?.email || chatForm.email || '').trim().toLowerCase();
    const phone = (showDetails ? chatForm.phone : chatSession?.phone || chatForm.phone || '').trim();
    const company = (showDetails ? chatForm.company : chatSession?.company || chatForm.company || '').trim();
    const projectRequirement = (showDetails ? chatForm.projectRequirement : chatSession?.projectRequirement || chatForm.projectRequirement || '').trim();
    const contactTime = (showDetails ? chatForm.contactTime : chatSession?.contactTime || chatForm.contactTime || '').trim();
    const message = chatForm.message.trim();

    if (showDetails && (!name || !email || !phone || !company || !projectRequirement)) {
      setChatStatus({ type: 'error', message: 'Please add your name, email, phone, business name, and project requirement.' });
      return;
    }
    if (!message) {
      setChatStatus({ type: 'error', message: 'Please write a message.' });
      return;
    }
    if (showDetails && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setChatStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    if (showDetails && phone.length < 7) {
      setChatStatus({ type: 'error', message: 'Please add a valid contact number.' });
      return;
    }
    if (!hasConversation && message.length < 20) {
      setChatStatus({ type: 'error', message: 'Please share a little more context so we can help properly.' });
      return;
    }

    setChatSending(true);
    setChatStatus({ type: 'idle', message: '' });

    try {
      const firstMessage = hasConversation ? message : [
        message,
        projectRequirement ? `Project requirement: ${projectRequirement}` : '',
        contactTime ? `Preferred contact time: ${contactTime}` : ''
      ].filter(Boolean).join('\n\n');
      const response = await fetch('/api/website-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          message: firstMessage,
          sourcePath: window.location.pathname,
          conversationId: chatSession?.conversationId || ''
        })
      });
      const result = await response.json().catch(() => ({}));
      if (response.status === 409 && result.conversation) {
        syncConversationSession(result.conversation, chatSession?.conversationId);
        await loadMessages(chatSession?.conversationId);
        return;
      }
      if (!response.ok) throw new Error(result.detail || 'Unable to send your chat right now.');
      const session = { conversationId: result.conversationId, name, email, phone, company, projectRequirement, contactTime, endedAt: '' };
      window.localStorage.setItem(CHAT_SESSION_KEY, JSON.stringify(session));
      setChatSession(session);
      setChatStatus({ type: 'success', message: 'Message sent.' });
      setChatForm({ name, email, phone, company, projectRequirement, contactTime, message: '' });
      await loadMessages(result.conversationId);
    } catch (error) {
      console.error('Website chat send failed', error);
      setChatStatus({ type: 'error', message: 'Unable to send right now. Please call or WhatsApp us and we will help.' });
    } finally {
      setChatSending(false);
    }
  };

  const startNewChat = () => {
    window.localStorage.removeItem(CHAT_SESSION_KEY);
    setChatSession(null);
    setMessages([]);
    setChatForm(initialChat);
    setChatStatus({ type: 'idle', message: '' });
  };

  const endChat = async () => {
    if (!chatSession?.conversationId || chatSending) return;
    setChatSending(true);
    setChatStatus({ type: 'idle', message: '' });
    try {
      const response = await fetch('/api/website-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'end', conversationId: chatSession.conversationId })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.detail || 'Unable to end chat.');
      const session = { ...chatSession, endedAt: result.conversation?.ended_at || new Date().toISOString() };
      window.localStorage.setItem(CHAT_SESSION_KEY, JSON.stringify(session));
      setChatSession(session);
      setChatStatus({ type: 'success', message: 'Chat ended. Start a new chat whenever you need us.' });
    } catch (error) {
      console.error('Website chat end failed', error);
      setChatStatus({ type: 'error', message: 'Unable to end chat right now.' });
    } finally {
      setChatSending(false);
    }
  };

  return (
    <div
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-[90] flex flex-col items-end gap-3 sm:bottom-[calc(1.25rem+env(safe-area-inset-bottom))] sm:right-5"
    >
      {chatOpen ? (
        <section className="mb-1 flex max-h-[min(640px,calc(100vh-7.25rem))] w-[min(94vw,390px)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-navy-950 shadow-[0_24px_70px_rgba(24,22,18,0.22)] ring-1 ring-slate-950/5" aria-label="ChatByte website chat">
          <header className="relative overflow-hidden bg-[#1e211f] px-4 py-4 text-white">
            <div className="relative flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.14)]" />
                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-cyanbrand-400">ChatByte</p>
              </div>
              <h2 className="mt-1 text-lg font-extrabold tracking-tight">Hi, welcome to YalaByte.</h2>
              <p className="mt-1 text-xs font-medium leading-5 text-slate-300">{chatEnded ? 'This conversation is closed.' : 'How can we help you today?'}</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/45">Powered by YalaByte</p>
            </div>
            <button
              type="button"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/15 text-lg leading-none text-white transition hover:bg-white/10"
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
            </div>
          </header>
          <div className={`min-h-0 flex-1 overflow-y-auto bg-[linear-gradient(180deg,#f8fafc,#eef7f9)] px-4 ${showDetails && !chatEnded ? 'py-3' : 'py-4'}`}>
            {showDetails && !chatEnded ? (
              <div className="rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-sm leading-6 text-slate-700 shadow-sm">
                <p className="font-extrabold text-navy-950">Chat with the YalaByte team</p>
                <p className="mt-1 text-xs font-medium leading-5 text-slate-500">
                  Ask about website development, project inquiries, pricing, support, SEO, or consultations.
                </p>
              </div>
            ) : (
              <div className="max-w-[86%] rounded-2xl rounded-tl-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm leading-6 shadow-sm">
                {hasConversation ? 'You can continue the conversation here.' : 'Hi, share your details and what you need. We will reply here.'}
              </div>
            )}
            {!hasThread && !chatEnded ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    className="rounded-full border border-cyanbrand-500/20 bg-white px-3 py-2 text-left text-xs font-extrabold text-navy-950 shadow-sm transition hover:-translate-y-0.5 hover:border-cyanbrand-400 hover:bg-cyanbrand-100"
                    key={reply}
                    onClick={() => useQuickReply(reply)}
                    type="button"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            ) : null}
            {!chatEnded ? (
              <div className="mt-3 rounded-2xl border border-cyanbrand-500/20 bg-white/90 px-3.5 py-3 shadow-sm">
                <p className="text-sm font-extrabold text-navy-950">Would you like our team to contact you?</p>
                <p className="mt-1 text-xs font-medium leading-5 text-slate-500">Share your details and we will follow up with the right next step.</p>
                <button
                  className="mt-2 rounded-full bg-navy-950 px-3 py-2 text-xs font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-navy-800"
                  onClick={() => useQuickReply('I want the YalaByte team to contact me')}
                  type="button"
                >
                  Contact me
                </button>
              </div>
            ) : null}
            {hasThread ? (
              <div className="mt-3 space-y-2 pr-1">
                {messages.map((item) => (
                  <div className={`flex ${item.author_type === 'client' ? 'justify-end' : 'justify-start'}`} key={item.id}>
                    <div className={`max-w-[86%] animate-[chat-message-in_.24s_ease_both] rounded-2xl px-3.5 py-2.5 text-sm leading-6 shadow-sm ${item.author_type === 'client' ? 'rounded-tr-md bg-cyanbrand-100 text-navy-950' : 'rounded-tl-md border border-slate-200 bg-white text-slate-700'}`}>
                      <p className="mb-0.5 text-[11px] font-extrabold text-slate-500">{item.author_type === 'client' ? 'You' : item.author_name || 'YalaByte'}</p>
                      <p className="whitespace-pre-line">{item.body}</p>
                      {item.created_at ? <p className="mt-1 text-[10px] font-bold text-slate-400">{new Date(item.created_at).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
            {chatSending && hasConversation ? (
              <div className="mt-3 flex justify-start">
                <div className="rounded-2xl rounded-tl-md border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-1.5" aria-label="Preparing response">
                    <span className="h-2 w-2 animate-[typing-dot_1s_infinite] rounded-full bg-slate-400" />
                    <span className="h-2 w-2 animate-[typing-dot_1s_.14s_infinite] rounded-full bg-slate-400" />
                    <span className="h-2 w-2 animate-[typing-dot_1s_.28s_infinite] rounded-full bg-slate-400" />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <form className="shrink-0 space-y-2.5 border-t border-slate-200 bg-white p-3.5" onSubmit={sendChat}>
            {showDetails && !chatEnded ? (
              <div className="grid gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <input className="min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold outline-none transition placeholder:text-slate-400 focus:border-cyanbrand-500 focus:bg-white focus:ring-4 focus:ring-cyanbrand-100" name="name" onChange={handleChatChange} placeholder="Name" value={chatForm.name} />
                  <input className="min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold outline-none transition placeholder:text-slate-400 focus:border-cyanbrand-500 focus:bg-white focus:ring-4 focus:ring-cyanbrand-100" name="email" onChange={handleChatChange} placeholder="Email" type="email" value={chatForm.email} />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input className="min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold outline-none transition placeholder:text-slate-400 focus:border-cyanbrand-500 focus:bg-white focus:ring-4 focus:ring-cyanbrand-100" name="phone" onChange={handleChatChange} placeholder="Phone" value={chatForm.phone} />
                  <input className="min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold outline-none transition placeholder:text-slate-400 focus:border-cyanbrand-500 focus:bg-white focus:ring-4 focus:ring-cyanbrand-100" name="company" onChange={handleChatChange} placeholder="Business name" value={chatForm.company} />
                </div>
                <input className="min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold outline-none transition placeholder:text-slate-400 focus:border-cyanbrand-500 focus:bg-white focus:ring-4 focus:ring-cyanbrand-100" name="projectRequirement" onChange={handleChatChange} placeholder="Project requirement" value={chatForm.projectRequirement} />
                <select className="min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold outline-none transition focus:border-cyanbrand-500 focus:bg-white focus:ring-4 focus:ring-cyanbrand-100" name="contactTime" onChange={handleChatChange} value={chatForm.contactTime}>
                  <option value="">Preferred contact time</option>
                  {contactTimeOptions.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>
            ) : null}
            {chatEnded ? (
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                <p className="text-sm font-extrabold text-navy-950">Chat ended</p>
                <p className="mt-1 text-xs font-medium leading-5 text-slate-500">This conversation is closed. Start a new chat if you need more help.</p>
              </div>
            ) : (
              <textarea className="min-h-16 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-semibold outline-none transition placeholder:text-slate-400 focus:border-cyanbrand-500 focus:bg-white focus:ring-4 focus:ring-cyanbrand-100" name="message" onChange={handleChatChange} placeholder={hasThread ? 'Type your message here...' : 'Type your message here...'} value={chatForm.message} />
            )}
            {chatStatus.message ? (
              <p className={`rounded-lg px-3 py-2 text-xs font-bold leading-5 ${chatStatus.type === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-700'}`}>
                {chatStatus.message}
              </p>
            ) : null}
            {chatEnded ? (
              <button className="w-full rounded-xl bg-cyanbrand-500 px-4 py-3 text-sm font-extrabold text-navy-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-cyanbrand-400 hover:shadow-md" onClick={startNewChat} type="button">
                Start New Chat
              </button>
            ) : (
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyanbrand-500 px-4 py-2.5 text-sm font-extrabold text-navy-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-cyanbrand-400 hover:shadow-md disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60 disabled:shadow-none" disabled={chatSending} type="submit">
                {chatSending ? 'Sending...' : hasConversation ? 'Send Reply' : 'Start Chat'}
                <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path d="m5 12 14-7-4 14-3-5-7-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </button>
            )}
            <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-2.5">
              <div className="flex gap-2">
                <a className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-cyanbrand-400 hover:bg-slate-50 hover:text-navy-950" href={`tel:${phoneNumber}`} title="Call us" aria-label="Call us">
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path d="M7.5 4.5 10 9l-1.8 1.8a12.2 12.2 0 0 0 5 5L15 14l4.5 2.5-.8 3.2c-.2.7-.8 1.1-1.5 1A16.5 16.5 0 0 1 3.3 6.8c-.1-.7.3-1.3 1-1.5l3.2-.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-[#25D366] hover:bg-slate-50 hover:text-navy-950" href={whatsappUrl} target="_blank" rel="noreferrer" title="WhatsApp" aria-label="WhatsApp">
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path d="M5 19 6.2 15.8A7.6 7.6 0 1 1 9 18.4L5 19Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.5 8.8c.3 2.7 2 4.4 4.7 4.7l1-1.1c.2-.2.5-.3.8-.2l1.5.5c.3.1.5.4.5.7v1.4c0 .4-.3.8-.7.8-5.1.2-8.9-3.6-8.7-8.7 0-.4.4-.7.8-.7h1.4c.3 0 .6.2.7.5l.5 1.5c.1.3 0 .6-.2.8l-1.1 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </a>
              </div>
              {hasConversation && !chatEnded ? (
                <button className="rounded-xl border border-slate-200 px-3 py-2.5 text-xs font-extrabold text-slate-500 transition hover:bg-slate-50 hover:text-navy-950" disabled={chatSending} onClick={endChat} type="button">
                  End chat
                </button>
              ) : null}
            </div>
          </form>
        </section>
      ) : null}
      <button
        type="button"
        aria-label="Open website chat"
        title="Open website chat"
        onClick={() => setChatOpen((open) => !open)}
        className="group flex h-12 items-center gap-2 rounded-xl border border-slate-200 bg-[#fffdf8] px-3 text-[#1e211f] shadow-[0_14px_38px_rgba(24,22,18,0.16)] transition hover:-translate-y-0.5 hover:border-cyanbrand-500 focus:outline-none focus:ring-2 focus:ring-cyanbrand-500 focus:ring-offset-2"
      >
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
          <path d="M5 6.5h14v9H9.5L5 19.5v-13Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.5 10h7M8.5 12.8h4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-sm font-bold">{chatOpen ? 'Close' : 'Chat'}</span>
      </button>
    </div>
  );
}
