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
    <section className="bg-base-900 px-5 py-20 text-ink sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-eyebrow uppercase text-accent">Contact</p>
            <div className="rounded-card border border-border-subtle bg-base-700 p-8">
              <p className="text-sm font-semibold text-ink">Project inquiries</p>
              <a className="mt-3 block text-sm leading-7 text-accent transition hover:text-accent-hover" href="mailto:info@yalabyte.com">info@yalabyte.com</a>
              <p className="mt-3 text-sm leading-7 text-ink-muted">Available for website, web app, and digital consulting inquiries.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-card border border-border-subtle bg-base-700 p-6">
                <p className="text-sm font-semibold text-ink">Response timing</p>
                <p className="mt-2 text-3xl font-black text-ink">24h</p>
                <p className="mt-3 text-sm leading-7 text-ink-muted">A practical response path for qualified project inquiries.</p>
              </div>
              <div className="rounded-card border border-border-subtle bg-base-700 p-6">
                <p className="text-sm font-semibold text-ink">Ready to start</p>
                <p className="mt-2 text-xl font-bold text-ink">Scope, launch, and post-launch support.</p>
                <p className="mt-3 text-sm leading-7 text-ink-muted">Tell us what you need and we’ll suggest the most practical next step.</p>
              </div>
            </div>
          </div>
          <form className="rounded-card border border-border bg-base-700 p-6 sm:p-8" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-ink">
              Name
              <input className="mt-2 w-full rounded-card border border-border-subtle bg-base-800 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-accent-muted" name="name" value={form.name} onChange={handleChange} autoComplete="name" />
            </label>
            <label className="text-sm font-semibold text-ink">
              Email
              <input className="mt-2 w-full rounded-card border border-border-subtle bg-base-800 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-accent-muted" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" />
            </label>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-ink">
              Contact number
              <input className="mt-2 w-full rounded-card border border-border-subtle bg-base-800 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-accent-muted" name="phone" value={form.phone} onChange={handleChange} autoComplete="tel" inputMode="tel" placeholder="+977 98XXXXXXXX" />
            </label>
            <label className="text-sm font-semibold text-ink">
              Company
              <input className="mt-2 w-full rounded-card border border-border-subtle bg-base-800 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-accent-muted" name="company" value={form.company} onChange={handleChange} autoComplete="organization" />
            </label>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-ink">
              Service needed
              <select className="mt-2 w-full rounded-card border border-border-subtle bg-base-800 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-accent-muted" name="service" value={form.service} onChange={handleChange}>
                <option value="">Select a service</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-ink">
            Message
            <textarea className="mt-2 min-h-36 w-full rounded-card border border-border-subtle bg-base-800 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-accent-muted" name="message" value={form.message} onChange={handleChange} />
          </label>
          {status.message ? (
            <p className={`mt-5 rounded-lg px-4 py-3 text-sm font-medium ${status.type === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-700'}`} role="status">
              {status.message}
            </p>
          ) : null}
          <button className="mt-6 w-full rounded-card bg-accent px-6 py-4 text-sm font-black text-base-900 transition hover:-translate-y-0.5 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Project Inquiry'}
          </button>
        </form>
      </div>
    </div>
    </section>
  );
}
