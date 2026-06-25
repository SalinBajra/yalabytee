import { useEffect, useState } from 'react';

const phoneNumber = '+9779705501969';
const displayPhoneNumber = '+977 9705501969';
const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}`;
const initialChat = { name: '', email: '', message: '' };
const CHAT_SESSION_KEY = 'yalabyte-website-chat-session';

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
    email: chatSession?.email || ''
  }));
  const [messages, setMessages] = useState([]);
  const [chatStatus, setChatStatus] = useState({ type: 'idle', message: '' });
  const [chatSending, setChatSending] = useState(false);

  const loadMessages = async (conversationId = chatSession?.conversationId) => {
    if (!conversationId) return;
    try {
      const response = await fetch(`/api/website-chat?conversationId=${encodeURIComponent(conversationId)}`);
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.detail || 'Unable to load messages.');
      setMessages(Array.isArray(result.messages) ? result.messages : []);
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

  const sendChat = async (event) => {
    event.preventDefault();
    const name = chatForm.name.trim();
    const email = chatForm.email.trim().toLowerCase();
    const message = chatForm.message.trim();

    if (!name || !email || !message) {
      setChatStatus({ type: 'error', message: 'Please add your name, email, and message.' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setChatStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    if (message.length < 20) {
      setChatStatus({ type: 'error', message: 'Please share a little more context so we can help properly.' });
      return;
    }

    setChatSending(true);
    setChatStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/website-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          sourcePath: window.location.pathname,
          conversationId: chatSession?.conversationId || ''
        })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.detail || 'Unable to send your chat right now.');
      const session = { conversationId: result.conversationId, name, email };
      window.localStorage.setItem(CHAT_SESSION_KEY, JSON.stringify(session));
      setChatSession(session);
      setChatStatus({ type: 'success', message: 'Message sent.' });
      setChatForm({ name, email, message: '' });
      await loadMessages(result.conversationId);
    } catch (error) {
      setChatStatus({ type: 'error', message: error.message || 'Unable to send your chat right now.' });
    } finally {
      setChatSending(false);
    }
  };

  return (
    <div
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
    >
      {chatOpen ? (
        <section className="mb-1 w-[min(92vw,380px)] overflow-hidden rounded-2xl border border-slate-200 bg-white text-navy-950 shadow-2xl" aria-label="YalaByte website chat">
          <header className="flex items-start justify-between gap-3 bg-navy-950 px-4 py-4 text-white">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyanbrand-400">YalaByte Chat</p>
              <h2 className="mt-1 text-lg font-bold">How can we help?</h2>
            </div>
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-lg leading-none text-white hover:bg-white/10"
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
            >
              x
            </button>
          </header>
          <div className="bg-slate-50 px-4 py-4">
            <div className="max-w-[86%] rounded-2xl rounded-tl-sm border border-slate-200 bg-white px-3 py-2 text-sm leading-6 shadow-sm">
              Hi, tell us what you need and the YalaByte team will get back to you.
            </div>
            {messages.length ? (
              <div className="mt-3 max-h-56 space-y-2 overflow-y-auto pr-1">
                {messages.map((item) => (
                  <div className={`flex ${item.author_type === 'client' ? 'justify-end' : 'justify-start'}`} key={item.id}>
                    <div className={`max-w-[86%] rounded-2xl px-3 py-2 text-sm leading-6 shadow-sm ${item.author_type === 'client' ? 'rounded-tr-sm bg-cyanbrand-100 text-navy-950' : 'rounded-tl-sm border border-slate-200 bg-white text-slate-700'}`}>
                      <p className="text-[11px] font-bold text-slate-500">{item.author_type === 'client' ? 'You' : item.author_name || 'YalaByte'}</p>
                      <p>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <form className="space-y-3 p-4" onSubmit={sendChat}>
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-cyanbrand-500 focus:ring-4 focus:ring-cyanbrand-100" name="name" onChange={handleChatChange} placeholder="Name" value={chatForm.name} />
              <input className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-cyanbrand-500 focus:ring-4 focus:ring-cyanbrand-100" name="email" onChange={handleChatChange} placeholder="Email" type="email" value={chatForm.email} />
            </div>
            <textarea className="min-h-24 w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-cyanbrand-500 focus:ring-4 focus:ring-cyanbrand-100" name="message" onChange={handleChatChange} placeholder="Write your message..." value={chatForm.message} />
            {chatStatus.message ? (
              <p className={`rounded-lg px-3 py-2 text-sm font-medium ${chatStatus.type === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-700'}`}>
                {chatStatus.message}
              </p>
            ) : null}
            <button className="w-full rounded-lg bg-cyanbrand-500 px-4 py-3 text-sm font-bold text-navy-950 transition hover:bg-cyanbrand-400 disabled:cursor-not-allowed disabled:opacity-60" disabled={chatSending} type="submit">
              {chatSending ? 'Sending...' : 'Send Message'}
            </button>
            <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
              <a className="rounded-lg border border-slate-200 px-3 py-2 text-center text-xs font-bold text-slate-700 transition hover:border-cyanbrand-400 hover:text-navy-950" href={`tel:${phoneNumber}`}>
                Call us
              </a>
              <a className="rounded-lg border border-slate-200 px-3 py-2 text-center text-xs font-bold text-slate-700 transition hover:border-[#25D366] hover:text-navy-950" href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </form>
        </section>
      ) : null}
      <button
        type="button"
        aria-label="Open website chat"
        title="Open website chat"
        onClick={() => setChatOpen((open) => !open)}
        className="group flex h-14 items-center gap-3 rounded-full bg-cyanbrand-500 px-4 text-navy-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-cyanbrand-400"
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
