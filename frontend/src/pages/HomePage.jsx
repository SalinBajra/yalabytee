import Hero from '../components/Hero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { services, showcase } from '../data/siteData.js';
import { navigateTo } from '../utils/routes.js';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What We Do"
            title="A clean digital partner for websites, WordPress, and launch support"
            text="The full details now live on dedicated pages so the site is easier to browse. Start with a quick overview, then open the area that matches your project."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <button key={service.title} onClick={() => navigateTo('/services')} className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-left transition hover:-translate-y-1 hover:border-cyanbrand-500 hover:shadow-soft">
                <h2 className="text-lg font-semibold text-navy-950">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Portfolio Preview"
            title="WordPress website examples for real business domains"
            text="Preview the types of client-ready sites YalaByte can customize for travel, portfolio, courier, and service businesses."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {showcase.map((item) => (
              <button key={item.title} onClick={() => navigateTo('/portfolio')} className="rounded-lg border border-slate-200 bg-white p-6 text-left transition hover:-translate-y-1 hover:shadow-soft">
                <span className={`block h-1 w-10 rounded-sm ${item.accent}`} />
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-cyan-700">{item.type}</p>
                <h2 className="mt-3 text-xl font-semibold text-navy-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-lg bg-navy-950 p-8 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyanbrand-400">Start with clarity</p>
            <h2 className="mt-3 text-3xl font-semibold">Ready to plan your website?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">Tell us what you need and we will help shape the right pages, platform, domain, hosting, and add-ons.</p>
          </div>
          <button onClick={() => navigateTo('/contact')} className="rounded-lg bg-cyanbrand-500 px-6 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-cyanbrand-400">
            Start Your Project
          </button>
        </div>
      </section>
    </>
  );
}
