import Hero from '../components/Hero.jsx';
import { services, showcase } from '../data/siteData.js';
import { navigateTo } from '../utils/routes.js';

const metrics = [
  ['500K', 'monthly traffic ready architecture'],
  ['95%', 'performance-first build target'],
  ['2,400', 'lead actions supported'],
  ['88%', 'clearer inquiry journey']
];

const brandTypes = ['Startups', 'Local service firms', 'Creative teams', 'Logistics', 'Travel brands', 'Consultants'];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-[#1f2022] px-5 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyanbrand-400">Trusted Digital Build Partner</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">Brands that trust our work start with clarity.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              YalaByte helps businesses move from a scattered online presence to a clean, trustworthy website and digital workflow.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {brandTypes.map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/[0.04] p-5 text-sm font-semibold text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#141618] px-5 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyanbrand-400">Features</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">Features built for business success</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              A polished website should not only look better. It should explain your business, support customer decisions, and make the next step obvious.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {services.slice(0, 4).map((service, index) => (
              <button
                key={service.title}
                onClick={() => navigateTo('/services')}
                className={`motion-soft rounded-lg border border-white/10 p-6 text-left transition hover:-translate-y-1 hover:border-cyanbrand-500 ${index === 1 ? 'bg-cyanbrand-500 text-navy-950' : 'bg-white/[0.04] text-white'}`}
              >
                <p className={`text-xs font-bold uppercase tracking-[0.16em] ${index === 1 ? 'text-navy-800' : 'text-cyanbrand-400'}`}>0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-semibold">{service.title}</h3>
                <p className={`mt-4 text-sm leading-7 ${index === 1 ? 'text-navy-900' : 'text-slate-300'}`}>{service.text}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#202225] px-5 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyanbrand-400">Work</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">See recent website directions</h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Browse example builds that show how YalaByte structures custom sites for different business models.
            </p>
            <button onClick={() => navigateTo('/portfolio')} className="mt-8 rounded-md bg-cyanbrand-500 px-5 py-3 text-sm font-bold text-navy-950 transition hover:bg-cyanbrand-400">
              View Portfolio
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {showcase.map((item) => (
              <button key={item.title} onClick={() => navigateTo('/portfolio')} className="rounded-lg border border-white/10 bg-[#111315] p-5 text-left transition hover:-translate-y-1 hover:border-cyanbrand-500">
                <span className={`block h-1 w-10 rounded-sm ${item.accent}`} />
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-cyanbrand-400">{item.type}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111315] px-5 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyanbrand-400">Results</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">Business results at a glance</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map(([value, label]) => (
              <div key={value} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <p className="text-4xl font-semibold text-white">{value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f2022] px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-lg border border-white/10 bg-[#0d0f11] p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyanbrand-400">Start Today</p>
            <h2 className="mt-3 text-3xl font-semibold">Grow your business online with a sharper website.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">Tell us what you need and we will help shape the right pages, features, domain, hosting, and launch plan.</p>
          </div>
          <button onClick={() => navigateTo('/contact')} className="rounded-md bg-cyanbrand-500 px-6 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-cyanbrand-400">
            Start Your Project
          </button>
        </div>
      </section>
    </>
  );
}
