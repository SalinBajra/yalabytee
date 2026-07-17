import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: ''
};

const serviceOptions = [
  'Company Website',
  'Website Redesign',
  'Custom Web Applications',
  'UX and Interface Design',
  'SEO-ready Website Setup',
  'Maintenance and Support',
  'Digital Consulting'
];

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.service.trim() || !form.message.trim()) {
      return 'Please complete your name, email, service, and message.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return 'Please enter a valid email address.';
    }
    if (form.message.trim().length < 20) {
      return 'Please share a little more context so we can respond properly.';
    }
    return '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationError = validate();
    if (validationError) {
      setStatus({ type: 'error', message: validationError });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const configuredApiUrl = import.meta.env.VITE_API_URL || '';
      const isLocalApiUrl = configuredApiUrl.includes('localhost') || configuredApiUrl.includes('127.0.0.1');
      const apiUrl = configuredApiUrl && !(import.meta.env.PROD && isLocalApiUrl)
        ? configuredApiUrl
        : import.meta.env.DEV
          ? 'http://localhost:8000'
          : '';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.detail || 'Unable to send message right now.');
      }

      setStatus({ type: 'success', message: result.message });
      setForm(initialState);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Unable to send your inquiry right now. Please email us directly at info@yalabyte.com.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyanbrand-600">Contact</p>
            <div className="rounded-[1.35rem] border border-slate-200 bg-slate-50 p-8 shadow-soft">
              <p className="text-sm font-semibold text-slate-900">Project inquiries</p>
              <a className="mt-3 block text-sm leading-7 text-cyanbrand-600 transition hover:text-cyanbrand-700" href="mailto:info@yalabyte.com">info@yalabyte.com</a>
              <p className="mt-3 text-sm leading-7 text-slate-600">Available for website, web app, and digital consulting inquiries.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.35rem] border border-slate-200 bg-slate-50 p-6 shadow-soft">
                <p className="text-sm font-semibold text-slate-900">Response timing</p>
                <p className="mt-2 text-3xl font-black text-slate-950">24h</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">A practical response path for qualified project inquiries.</p>
              </div>
              <div className="rounded-[1.35rem] border border-slate-200 bg-slate-50 p-6 shadow-soft">
                <p className="text-sm font-semibold text-slate-900">Ready to start</p>
                <p className="mt-2 text-xl font-bold text-slate-950">Scope, launch, and post-launch support.</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">Tell us what you need and we’ll suggest the most practical next step.</p>
              </div>
            </div>
          </div>
          <form className="rounded-[1.6rem] border border-slate-200 bg-slate-100 p-6 shadow-soft sm:p-8" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-navy-950">
              Name
              <input className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyanbrand-500 focus:bg-white focus:ring-4 focus:ring-cyanbrand-100" name="name" value={form.name} onChange={handleChange} autoComplete="name" />
            </label>
            <label className="text-sm font-semibold text-navy-950">
              Email
              <input className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyanbrand-500 focus:bg-white focus:ring-4 focus:ring-cyanbrand-100" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" />
            </label>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-navy-950">
              Contact number
              <input className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyanbrand-500 focus:bg-white focus:ring-4 focus:ring-cyanbrand-100" name="phone" value={form.phone} onChange={handleChange} autoComplete="tel" inputMode="tel" placeholder="+977 98XXXXXXXX" />
            </label>
            <label className="text-sm font-semibold text-navy-950">
              Company
              <input className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyanbrand-500 focus:bg-white focus:ring-4 focus:ring-cyanbrand-100" name="company" value={form.company} onChange={handleChange} autoComplete="organization" />
            </label>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-navy-950">
              Service needed
              <select className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyanbrand-500 focus:bg-white focus:ring-4 focus:ring-cyanbrand-100" name="service" value={form.service} onChange={handleChange}>
                <option value="">Select a service</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-navy-950">
            Message
            <textarea className="mt-2 min-h-36 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyanbrand-500 focus:bg-white focus:ring-4 focus:ring-cyanbrand-100" name="message" value={form.message} onChange={handleChange} />
          </label>
          {status.message ? (
            <p className={`mt-5 rounded-lg px-4 py-3 text-sm font-medium ${status.type === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-700'}`} role="status">
              {status.message}
            </p>
          ) : null}
          <button className="mt-6 w-full rounded-xl bg-cyanbrand-500 px-6 py-4 text-sm font-black text-navy-950 shadow-[0_18px_38px_rgba(19,200,222,0.24)] transition hover:-translate-y-0.5 hover:bg-cyanbrand-400 disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Project Inquiry'}
          </button>
        </form>
      </div>
    </div>
    </section>
  );
}
