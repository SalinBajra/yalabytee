import { navigateTo } from '../utils/routes.js';
import usePageReveal from '../hooks/usePageReveal.js';
import SectionHeader from '../components/SectionHeader.jsx';
import { services, addons, processSteps } from '../data/siteData.js';

export default function ServicesPage() {
  usePageReveal();

  return (
    <>
      <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="studio-container">
          <SectionHeader
            eyebrow="Services"
            title="Digital services built around your business goals"
            text="Strategy, design, development, launch support, and care for websites and web applications that work for your customers."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <article key={service.title} className="page-reveal rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-slate-300">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyanbrand-600">{service.title}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.text}</p>
                <p className="mt-6 text-xs font-black uppercase tracking-[0.28em] text-slate-500">{service.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="studio-container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="page-reveal">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-slate-500">Support</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Launch-ready foundations and ongoing care.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                The website is only the start. We also help with the technical setup, launch checklist, and the systems you need after go-live.
              </p>
            </div>
            <div className="grid gap-4">
              {addons.map((item, index) => (
                <div key={item} className="page-reveal rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6 shadow-sm" style={{ '--page-delay': `${index * 40}ms` }}>
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="studio-container">
          <div className="page-reveal mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyanbrand-600">Process</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">A practical process for every website project.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Every project follows the same clear path: discovery, design, build, and launch. This keeps scope manageable and quality predictable.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.title} className="page-reveal rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-navy-900 text-sm font-black text-white">{step.label}</div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyanbrand-500 px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="studio-container flex flex-col items-start gap-8 rounded-[2rem] border border-white/15 bg-white/10 px-8 py-12 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyanbrand-100">Ready?</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">Let’s turn your next idea into a website that works.</h2>
            <p className="mt-4 text-sm leading-7 text-cyanbrand-100/90 sm:text-base">
              Tell us about your project, timeline, and current challenges. YalaByte will reply with a practical first plan.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigateTo('/contact')}
            className="rounded-full bg-white px-8 py-4 text-sm font-black text-slate-950 transition hover:bg-slate-100"
          >
            Discuss your project
          </button>
        </div>
      </section>
    </>
  );
}
