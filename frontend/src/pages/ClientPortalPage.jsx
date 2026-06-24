import { useEffect, useMemo, useState } from 'react';
import { portalConfigured, supabase } from '../lib/supabase';

const statusLabels = { new: 'New', in_progress: 'In progress', waiting_client: 'Waiting for you', resolved: 'Resolved', closed: 'Closed' };
const inputClass = 'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyanbrand-500 focus:ring-4 focus:ring-cyanbrand-100';

function date(value) {
  if (!value) return '—';
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(value));
}

export default function ClientPortalPage() {
  const [session, setSession] = useState(null);
  const [ready, setReady] = useState(false);
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [creating, setCreating] = useState(false);
  const [draft, setDraft] = useState({ subject: '', description: '', category: 'Technical issue', priority: 'normal' });
  const [reply, setReply] = useState('');
  const [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);

  const selected = tickets.find((ticket) => ticket.id === selectedId) || null;
  const openCount = useMemo(() => tickets.filter((ticket) => !['resolved', 'closed'].includes(ticket.status)).length, [tickets]);

  useEffect(() => {
    if (!supabase) { setReady(true); return; }
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => setSession(nextSession));
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session?.user) { setProfile(null); setTickets([]); return; }
    setBusy(true);
    Promise.all([
      supabase.from('client_profiles').select('*').eq('user_id', session.user.id).maybeSingle(),
      supabase.from('support_tickets').select('*').order('last_activity_at', { ascending: false })
    ]).then(([profileResult, ticketResult]) => {
      if (profileResult.error) throw profileResult.error;
      if (ticketResult.error) throw ticketResult.error;
      setProfile(profileResult.data);
      setTickets(ticketResult.data || []);
      setSelectedId(ticketResult.data?.[0]?.id || null);
    }).catch(() => setNotice('Your portal profile is not active yet. Please contact your YalaByte project manager.')).finally(() => setBusy(false));
  }, [session?.user?.id]);

  useEffect(() => {
    if (!selectedId || !supabase) { setMessages([]); return; }
    supabase.from('support_ticket_messages').select('*').eq('ticket_id', selectedId).order('created_at')
      .then(({ data, error }) => { if (error) setNotice(error.message); else setMessages(data || []); });
  }, [selectedId]);

  useEffect(() => {
    if (!supabase || !session?.user) return undefined;
    const channel = supabase.channel(`client-tickets-${session.user.id}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'support_tickets', filter: `client_user_id=eq.${session.user.id}` }, () => {
        supabase.from('support_tickets').select('*').order('last_activity_at', { ascending: false })
          .then(({ data }) => setTickets(data || []));
      })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [session?.user?.id]);

  useEffect(() => {
    if (!supabase || !selectedId) return undefined;
    const channel = supabase.channel(`client-messages-${selectedId}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'support_ticket_messages', filter: `ticket_id=eq.${selectedId}` }, () => {
        supabase.from('support_ticket_messages').select('*').eq('ticket_id', selectedId).order('created_at')
          .then(({ data }) => setMessages(data || []));
      })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [selectedId]);

  const requestLink = async (event) => {
    event.preventDefault();
    if (!email.trim() || !supabase) return;
    setBusy(true); setNotice('');
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: { shouldCreateUser: false, emailRedirectTo: `${window.location.origin}/client-portal` }
    });
    setNotice(error ? error.message : 'Check your email for a secure portal link.');
    setBusy(false);
  };

  const createTicket = async () => {
    if (!profile || !draft.subject.trim() || !draft.description.trim()) { setNotice('Please complete the subject and description.'); return; }
    setBusy(true); setNotice('');
    const { data: ticket, error } = await supabase.from('support_tickets').insert({
      client_user_id: session.user.id,
      contact_id: profile.contact_id,
      subject: draft.subject.trim(),
      description: draft.description.trim(),
      category: draft.category,
      priority: draft.priority
    }).select().single();
    if (error) { setNotice(error.message); setBusy(false); return; }
    const { data: message, error: messageError } = await supabase.from('support_ticket_messages').insert({
      ticket_id: ticket.id,
      author_user_id: session.user.id,
      author_name: profile.name,
      author_email: profile.email,
      author_type: 'client',
      body: draft.description.trim(),
      is_internal: false
    }).select().single();
    if (messageError) setNotice(messageError.message);
    setTickets((current) => [ticket, ...current]);
    setSelectedId(ticket.id);
    setMessages(message ? [message] : []);
    setDraft({ subject: '', description: '', category: 'Technical issue', priority: 'normal' });
    setCreating(false); setBusy(false);
  };

  const sendReply = async () => {
    if (!reply.trim() || !selected || !profile) return;
    setBusy(true);
    const { data, error } = await supabase.from('support_ticket_messages').insert({
      ticket_id: selected.id,
      author_user_id: session.user.id,
      author_name: profile.name,
      author_email: profile.email,
      author_type: 'client',
      body: reply.trim(),
      is_internal: false
    }).select().single();
    if (error) setNotice(error.message); else { setMessages((current) => [...current, data]); setReply(''); }
    setBusy(false);
  };

  if (!ready) return <div className="flex min-h-screen items-center justify-center bg-[#061828] text-sm font-bold text-white">Opening your secure portal…</div>;
  if (!portalConfigured) return <div className="flex min-h-screen items-center justify-center bg-[#061828] px-5 text-center text-white"><div><h1 className="text-2xl font-black">Client portal setup required</h1><p className="mt-3 text-slate-300">Supabase portal variables are not configured.</p></div></div>;

  if (!session) return <div className="min-h-screen bg-[#061828] px-5 py-16 text-white"><div className="mx-auto max-w-md"><a href="/" className="flex items-center gap-3"><img className="h-12 w-12 rounded-xl bg-white object-contain p-1" src="/favicon.png" alt="" /><div><p className="text-xl font-black">YalaByte</p><p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyanbrand-300">Client Portal</p></div></a><div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur sm:p-8"><p className="text-xs font-black uppercase tracking-[0.2em] text-cyanbrand-300">Secure access</p><h1 className="mt-4 text-3xl font-black">Welcome back.</h1><p className="mt-3 text-sm leading-7 text-slate-300">Enter the email your YalaByte project manager invited. We’ll send a secure sign-in link—no password needed.</p><form className="mt-7" onSubmit={requestLink}><label className="text-sm font-bold">Email address<input className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyanbrand-400" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" /></label><button className="mt-4 w-full rounded-xl bg-cyanbrand-400 px-4 py-3.5 text-sm font-black text-[#061828] disabled:opacity-50" disabled={busy}>Send secure link</button></form>{notice ? <p className="mt-4 rounded-xl bg-white/10 px-4 py-3 text-sm text-slate-200">{notice}</p> : null}</div></div></div>;

  return <div className="min-h-screen bg-slate-100 text-slate-950"><header className="border-b border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6"><a className="flex items-center gap-3" href="/"><img className="h-10 w-10 rounded-lg object-contain" src="/favicon.png" alt="" /><div><p className="font-black">YalaByte</p><p className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-700">Client portal</p></div></a><div className="flex items-center gap-3"><div className="hidden text-right sm:block"><p className="text-sm font-bold">{profile?.name || session.user.email}</p><p className="text-xs text-slate-400">{profile?.company || 'Client workspace'}</p></div><button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600" onClick={() => supabase.auth.signOut()}>Sign out</button></div></div></header><main className="mx-auto max-w-7xl px-4 py-6 sm:px-6"><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-700">Support workspace</p><h1 className="mt-2 text-3xl font-black">Hi, {profile?.name?.split(' ')[0] || 'there'}.</h1><p className="mt-2 text-sm text-slate-500">Track technical support directly with your YalaByte team.</p></div><button className="rounded-xl bg-cyanbrand-500 px-5 py-3 text-sm font-black text-[#061828]" onClick={() => setCreating(true)}>Create ticket</button></div>{notice ? <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">{notice}</p> : null}<div className="mt-6 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-slate-200 bg-white p-4"><p className="text-xs font-bold text-slate-400">Open tickets</p><p className="mt-2 text-2xl font-black">{openCount}</p></div><div className="rounded-2xl border border-slate-200 bg-white p-4"><p className="text-xs font-bold text-slate-400">Resolved</p><p className="mt-2 text-2xl font-black">{tickets.filter((ticket) => ticket.status === 'resolved').length}</p></div><div className="rounded-2xl border border-slate-200 bg-white p-4"><p className="text-xs font-bold text-slate-400">Total requests</p><p className="mt-2 text-2xl font-black">{tickets.length}</p></div></div>{creating ? <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center justify-between"><h2 className="text-xl font-black">New support ticket</h2><button className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold" onClick={() => setCreating(false)}>Cancel</button></div><div className="mt-5 grid gap-4 sm:grid-cols-2"><label className="text-sm font-bold">Category<select className={inputClass} value={draft.category} onChange={(event) => setDraft((current) => ({ ...current, category: event.target.value }))}>{['Technical issue', 'Website update', 'Hosting', 'Domain & DNS', 'Billing', 'General support'].map((item) => <option key={item}>{item}</option>)}</select></label><label className="text-sm font-bold">Priority<select className={inputClass} value={draft.priority} onChange={(event) => setDraft((current) => ({ ...current, priority: event.target.value }))}><option value="normal">Normal</option><option value="high">High</option><option value="urgent">Urgent</option><option value="low">Low</option></select></label><label className="text-sm font-bold sm:col-span-2">Subject<input className={inputClass} value={draft.subject} onChange={(event) => setDraft((current) => ({ ...current, subject: event.target.value }))} /></label><label className="text-sm font-bold sm:col-span-2">Tell us what’s happening<textarea className={`${inputClass} min-h-32`} value={draft.description} onChange={(event) => setDraft((current) => ({ ...current, description: event.target.value }))} /></label></div><button className="mt-4 rounded-xl bg-[#061828] px-5 py-3 text-sm font-black text-white disabled:opacity-50" disabled={busy} onClick={createTicket}>Submit ticket</button></section> : null}<div className="mt-6 grid gap-5 lg:grid-cols-[330px_1fr]"><aside className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="border-b border-slate-100 px-4 py-3"><h2 className="font-black">Your tickets</h2></div>{tickets.map((ticket) => <button className={`block w-full border-b border-slate-100 p-4 text-left ${ticket.id === selectedId ? 'bg-cyan-50' : 'hover:bg-slate-50'}`} key={ticket.id} onClick={() => setSelectedId(ticket.id)}><div className="flex justify-between gap-2"><span className="text-xs font-black text-cyan-700">{ticket.ticket_number}</span><span className="text-[10px] font-black uppercase text-slate-400">{statusLabels[ticket.status]}</span></div><p className="mt-2 truncate text-sm font-bold">{ticket.subject}</p><p className="mt-1 text-xs text-slate-400">Updated {date(ticket.last_activity_at)}</p></button>)}{!tickets.length ? <p className="p-6 text-center text-sm text-slate-400">No support tickets yet.</p> : null}</aside><section className="min-h-[480px] overflow-hidden rounded-2xl border border-slate-200 bg-white">{selected ? <><div className="border-b border-slate-200 p-5"><p className="text-xs font-black text-cyan-700">{selected.ticket_number}</p><h2 className="mt-2 text-xl font-black">{selected.subject}</h2><div className="mt-3 flex flex-wrap gap-2"><span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-bold">{statusLabels[selected.status]}</span><span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-bold">{selected.category}</span></div></div><div className="space-y-3 p-5">{messages.map((message) => <div className={`max-w-[88%] rounded-2xl px-4 py-3 ${message.author_type === 'client' ? 'ml-auto bg-[#061828] text-white' : 'bg-slate-100'}`} key={message.id}><p className="text-[10px] font-black uppercase tracking-[0.1em] opacity-50">{message.author_name}</p><p className="mt-1 whitespace-pre-wrap text-sm leading-6">{message.body}</p><p className="mt-1 text-[10px] opacity-40">{date(message.created_at)}</p></div>)}</div>{!['closed'].includes(selected.status) ? <div className="border-t border-slate-200 p-4"><textarea className={`${inputClass} min-h-24`} placeholder="Reply to the YalaByte team…" value={reply} onChange={(event) => setReply(event.target.value)} /><button className="mt-2 rounded-lg bg-cyanbrand-500 px-4 py-2.5 text-sm font-black text-[#061828] disabled:opacity-50" disabled={busy || !reply.trim()} onClick={sendReply}>Send reply</button></div> : null}</> : <div className="flex min-h-[480px] items-center justify-center text-sm text-slate-400">Select a ticket to view the conversation.</div>}</section></div></main></div>;
}
