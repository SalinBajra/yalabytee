import { portfolioDemos } from '../data/portfolioDemos.js';
import { navigateTo } from '../utils/routes.js';

function DemoTopBar({ demo }) {
  return (
    <div className="border-b border-white/10 bg-[#070a0f]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8">
        <button onClick={() => navigateTo('/portfolio')} className="text-sm font-semibold text-slate-300 transition hover:text-white">
          Back to work
        </button>
        <p className="hidden text-xs font-bold uppercase tracking-[0.2em] text-cyanbrand-300 sm:block">
          Live portfolio demo
        </p>
        <button onClick={() => navigateTo('/contact')} className="rounded-full bg-cyanbrand-400 px-4 py-2 text-sm font-bold text-navy-950 transition hover:bg-white">
          Request this style
        </button>
      </div>
    </div>
  );
}

function SiteNavigation({ demo }) {
  return (
    <nav className="flex items-center justify-between gap-5 border-b border-white/10 px-5 py-5 sm:px-8" aria-label={`${demo.title} demo navigation`}>
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-md bg-white text-lg font-black text-[#080b10]">Y</span>
        <span className="text-sm font-bold text-white">{demo.title}</span>
      </div>
      <div className="hidden items-center gap-6 md:flex">
        {demo.nav.map((item) => (
          <a key={item} href="#demo-sections" className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400 transition hover:text-white">
            {item}
          </a>
        ))}
      </div>
      <a href="#demo-contact" className="rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-white transition hover:border-cyanbrand-300 hover:text-cyanbrand-200">
        {demo.cta}
      </a>
    </nav>
  );
}

function DevicePreview({ demo }) {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-black p-4 shadow-[0_34px_90px_rgba(0,0,0,0.45)]">
      <img src={demo.image} alt={`${demo.title} website concept`} className="absolute inset-0 h-full w-full object-cover opacity-85" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/10" />
      <div className="relative ml-auto mt-14 w-[84%] rounded-2xl border border-white/20 bg-black/45 p-5 text-white shadow-2xl backdrop-blur sm:w-[76%]">
        <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: demo.accent }}>
          Featured page
        </p>
        <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight">{demo.title}</h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-slate-200">{demo.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {demo.nav.slice(0, 3).map((item) => (
            <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-white">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
        {demo.stats.map(([value, label]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur">
            <p className="text-2xl font-black text-white">{value}</p>
            <p className="mt-1 text-xs font-semibold text-slate-300">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DemoSections({ demo }) {
  return (
    <section id="demo-sections" className="grid gap-px bg-white/10 md:grid-cols-2">
      {demo.sections.map((section) => (
        <article key={section.title} className="bg-[#0d1016] p-6 sm:p-10">
          <p className="text-xs font-black uppercase tracking-[0.22em]" style={{ color: demo.accent }}>
            {section.eyebrow}
          </p>
          <h3 className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl">{section.title}</h3>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{section.text}</p>
        </article>
      ))}
    </section>
  );
}

function FeatureBand({ demo }) {
  return (
    <section className="bg-[#171a20] px-6 py-12 sm:px-10">
      <div className="grid gap-4 md:grid-cols-4">
        {demo.features.map((feature) => (
          <div key={feature} className="rounded-2xl border border-white/10 bg-black/25 p-5">
            <span className="block h-1 w-10 rounded-full" style={{ backgroundColor: demo.accent }} />
            <p className="mt-8 text-lg font-semibold text-white">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DemoContact({ demo }) {
  return (
    <section id="demo-contact" className="grid gap-px bg-white/10 md:grid-cols-[1fr_0.9fr]">
      <div className="bg-[#f2f8ff] p-6 text-navy-950 sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Demo conversion section</p>
        <h3 className="mt-5 text-4xl font-semibold leading-tight">Ready for a website like this?</h3>
        <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
          YalaByte can customize the structure, branding, pages, domain, hosting, forms, and launch support around your business.
        </p>
      </div>
      <div className="bg-[#090c12] p-6 sm:p-10">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          {['Name', 'Email', 'Project type'].map((field) => (
            <div key={field} className="mb-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm text-slate-400">
              {field}
            </div>
          ))}
          <button onClick={() => navigateTo('/contact')} className="mt-2 w-full rounded-xl px-5 py-4 text-sm font-black text-navy-950 transition hover:bg-white" style={{ backgroundColor: demo.accent }}>
            Start a similar project
          </button>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioDemoPage({ slug }) {
  const demo = portfolioDemos.find((item) => item.slug === slug) || portfolioDemos[0];

  return (
    <div className="bg-[#070a0f] text-white">
      <DemoTopBar demo={demo} />
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1016] shadow-[0_40px_120px_rgba(0,0,0,0.42)]">
          <SiteNavigation demo={demo} />
          <div className="grid gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-20">
            <div className="motion-soft">
              <p className="text-xs font-black uppercase tracking-[0.22em]" style={{ color: demo.accent }}>
                {demo.category}
              </p>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
                {demo.headline}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{demo.summary}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#demo-contact" className="rounded-full px-6 py-3 text-sm font-black text-navy-950 transition hover:bg-white" style={{ backgroundColor: demo.accent }}>
                  {demo.cta}
                </a>
                <a href="#demo-sections" className="rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:border-cyanbrand-300">
                  {demo.secondaryCta}
                </a>
              </div>
            </div>
            <DevicePreview demo={demo} />
          </div>
          <DemoSections demo={demo} />
          <FeatureBand demo={demo} />
          <DemoContact demo={demo} />
        </div>
      </section>
    </div>
  );
}
