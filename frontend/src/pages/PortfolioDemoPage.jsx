import { portfolioDemos } from '../data/portfolioDemos.js';
import { navigateTo } from '../utils/routes.js';

function DemoShell({ demo, children }) {
  return (
    <section className="min-h-screen bg-[#0d0f11] px-5 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyanbrand-400">Live demo experience</p>
            <h1 className="mt-2 text-3xl font-semibold">{demo.title}</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => navigateTo('/portfolio')} className="rounded-md border border-white/20 px-4 py-2.5 text-sm font-bold text-white transition hover:border-cyanbrand-400">
              Back to portfolio
            </button>
            <button onClick={() => navigateTo('/contact')} className="rounded-md bg-cyanbrand-500 px-4 py-2.5 text-sm font-bold text-navy-950 transition hover:bg-cyanbrand-400">
              Request this style
            </button>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function DemoNav({ demo, dark = false }) {
  return (
    <div className={`flex items-center justify-between border-b px-5 py-4 ${dark ? 'border-white/10 bg-[#101214] text-white' : 'border-slate-200 bg-white text-navy-950'}`}>
      <div className="flex items-center gap-3">
        <span className={`h-9 w-9 rounded-md ${demo.accent}`} />
        <span className="text-sm font-black">{demo.title}</span>
      </div>
      <div className="hidden gap-5 md:flex">
        {demo.nav.map((item) => (
          <span key={item} className={`text-xs font-bold uppercase tracking-[0.12em] ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{item}</span>
        ))}
      </div>
      <span className={`rounded-md px-3 py-2 text-xs font-bold ${dark ? 'bg-white text-navy-950' : 'bg-navy-950 text-white'}`}>{demo.cta}</span>
    </div>
  );
}

function TravelDemo({ demo }) {
  return (
    <DemoShell demo={demo}>
      <div className="overflow-hidden rounded-lg bg-[#f4fbfc] text-navy-950 shadow-soft">
        <DemoNav demo={demo} />
        <div className="grid gap-10 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-700">Curated travel planning</p>
            <h2 className="mt-5 text-5xl font-semibold leading-none tracking-normal">Find the route that feels made for you.</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              A travel company demo focused on destinations, packages, trip details, and a simple inquiry journey.
            </p>
            <div className="mt-8 flex gap-3">
              <span className="rounded-md bg-cyan-600 px-5 py-3 text-sm font-bold text-white">Explore trips</span>
              <span className="rounded-md border border-slate-300 px-5 py-3 text-sm font-bold">Ask an advisor</span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Himalayan trails', 'Coastal escapes', 'City culture routes', 'Private family tours'].map((item, index) => (
              <div key={item} className={`rounded-lg p-5 ${index === 0 ? 'bg-cyan-600 text-white sm:row-span-2' : 'bg-white'}`}>
                <p className="text-xs font-bold uppercase tracking-[0.14em] opacity-70">Destination</p>
                <h3 className="mt-8 text-2xl font-semibold">{item}</h3>
                <p className="mt-3 text-sm leading-6 opacity-80">Package pages, seasonal offers, and inquiry CTAs built into the flow.</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 border-t border-cyan-100 px-6 py-8 md:grid-cols-3 lg:px-10">
          {demo.heroStats.map((stat) => (
            <div key={stat} className="rounded-lg bg-white p-5 text-sm font-bold shadow-sm">{stat}</div>
          ))}
        </div>
      </div>
    </DemoShell>
  );
}

function StudioDemo({ demo }) {
  return (
    <DemoShell demo={demo}>
      <div className="overflow-hidden rounded-lg bg-[#161719] text-white shadow-soft">
        <DemoNav demo={demo} dark />
        <div className="grid gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyanbrand-400">Independent creative studio</p>
            <h2 className="mt-5 max-w-4xl text-6xl font-semibold leading-none tracking-normal">Selected work with a point of view.</h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-base leading-8 text-slate-300">
              A portfolio demo for creators, consultants, and studios that need case studies, positioning, proof, and a clean contact path.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {['Identity', 'Web', 'Launch'].map((item) => (
                <span key={item} className="rounded-md bg-white/10 px-3 py-3 text-center text-sm font-bold">{item}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-4 px-6 pb-10 md:grid-cols-3 lg:px-10">
          {['Brand system refresh', 'Product launch site', 'Editorial portfolio'].map((item, index) => (
            <div key={item} className={`rounded-lg border border-white/10 p-5 ${index === 1 ? 'bg-cyanbrand-500 text-navy-950' : 'bg-white/[0.04]'}`}>
              <p className="text-xs font-bold uppercase tracking-[0.14em] opacity-70">Case study</p>
              <h3 className="mt-20 text-2xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </DemoShell>
  );
}

function CourierDemo({ demo }) {
  return (
    <DemoShell demo={demo}>
      <div className="overflow-hidden rounded-lg bg-white text-navy-950 shadow-soft">
        <DemoNav demo={demo} />
        <div className="grid gap-8 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Courier and logistics</p>
            <h2 className="mt-5 text-5xl font-semibold leading-none tracking-normal">Fast delivery pages built around quote requests.</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              A logistics demo with service coverage, quick quote actions, support content, and delivery-focused service pages.
            </p>
          </div>
          <div className="rounded-lg bg-navy-950 p-5 text-white">
            <p className="text-sm font-bold text-cyanbrand-400">Get a delivery quote</p>
            <div className="mt-5 grid gap-3">
              {['Pickup location', 'Delivery location', 'Package type'].map((item) => (
                <div key={item} className="rounded-md bg-white/10 px-4 py-4 text-sm text-slate-300">{item}</div>
              ))}
              <div className="rounded-md bg-blue-600 px-4 py-4 text-center text-sm font-bold">Calculate route</div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 border-t border-slate-100 px-6 py-8 md:grid-cols-3 lg:px-10">
          {['Same-day courier', 'Business parcels', 'Cargo coordination'].map((item) => (
            <div key={item} className="rounded-lg bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900">{item}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Clear service pages and customer support paths.</p>
            </div>
          ))}
        </div>
      </div>
    </DemoShell>
  );
}

export default function PortfolioDemoPage({ slug }) {
  const demo = portfolioDemos.find((item) => item.slug === slug) || portfolioDemos[0];

  if (demo.slug === 'portfolio') return <StudioDemo demo={demo} />;
  if (demo.slug === 'courier') return <CourierDemo demo={demo} />;
  return <TravelDemo demo={demo} />;
}
