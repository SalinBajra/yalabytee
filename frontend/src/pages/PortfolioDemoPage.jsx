import { portfolioDemos } from '../data/portfolioDemos.js';
import { navigateTo } from '../utils/routes.js';

function DemoHeader({ demo }) {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className={`h-10 w-10 rounded-lg ${demo.accent}`} />
          <div>
            <p className="text-sm font-bold text-navy-950">{demo.title}</p>
            <p className="text-xs text-slate-500">Demo website by YalaByte</p>
          </div>
        </div>
        <div className="hidden items-center gap-5 md:flex">
          {demo.nav.map((item) => (
            <span key={item} className="text-sm font-semibold text-slate-600">{item}</span>
          ))}
        </div>
        <button onClick={() => navigateTo('/portfolio')} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold text-navy-950 transition hover:border-cyanbrand-500">
          Back
        </button>
      </div>
    </div>
  );
}

function DemoWebsite({ demo }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
      <DemoHeader demo={demo} />
      <section className="grid gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-16">
        <div>
          <p className={`text-sm font-bold uppercase tracking-[0.16em] ${demo.textAccent}`}>{demo.category}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-navy-950 sm:text-5xl">{demo.tagline}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">{demo.summary}</p>
          <button className={`mt-8 rounded-lg ${demo.accent} px-6 py-3.5 text-sm font-bold text-white`}>
            {demo.cta}
          </button>
        </div>
        <div className={`${demo.tint} rounded-lg p-5`}>
          <div className="rounded-lg bg-white p-5">
            <div className="flex items-center justify-between">
              <span className="h-3 w-32 rounded-sm bg-navy-950" />
              <span className={`h-9 w-24 rounded-md ${demo.accent}`} />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <span className="h-24 rounded-lg bg-slate-100" />
              <span className="h-24 rounded-lg bg-slate-50" />
              <span className="h-24 rounded-lg bg-slate-100" />
            </div>
            <div className="mt-6 grid gap-2">
              <span className="h-2 rounded-sm bg-slate-200" />
              <span className="h-2 w-4/5 rounded-sm bg-slate-200" />
              <span className="h-2 w-2/3 rounded-sm bg-slate-200" />
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-slate-100 px-5 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {demo.heroStats.map((stat) => (
            <div key={stat} className="rounded-lg bg-slate-50 p-5">
              <p className="text-sm font-bold text-navy-950">{stat}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-5 border-t border-slate-100 px-5 py-10 sm:px-8 md:grid-cols-2 lg:px-10">
        {demo.sections.map((section) => (
          <div key={section.title} className="rounded-lg border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-navy-950">{section.title}</h2>
            <div className="mt-5 grid gap-3">
              {section.items.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md bg-slate-50 p-3 text-sm font-semibold text-slate-700">
                  <span className={`h-2 w-2 rounded-sm ${demo.accent}`} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="border-t border-slate-100 bg-navy-950 px-5 py-10 text-white sm:px-8 lg:px-10">
        <p className="text-sm font-bold text-cyanbrand-400">Built-in conversion path</p>
        <div className="mt-5 grid gap-3 md:grid-cols-4">
          {demo.deliverables.map((item) => (
            <div key={item} className="rounded-lg bg-white/10 p-4 text-sm font-semibold">
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function PortfolioDemoPage({ slug }) {
  const demo = portfolioDemos.find((item) => item.slug === slug) || portfolioDemos[0];

  return (
    <section className="bg-slate-50 px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-700">Live Demo</p>
            <h1 className="mt-2 text-3xl font-semibold text-navy-950">{demo.title}</h1>
          </div>
          <button onClick={() => navigateTo('/contact')} className="rounded-lg bg-navy-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800">
            Request a site like this
          </button>
        </div>
        <DemoWebsite demo={demo} />
      </div>
    </section>
  );
}
