import { portfolioDemos } from '../data/portfolioDemos.js';
import { navigateTo } from '../utils/routes.js';

function PortfolioCard({ project, index }) {
  return (
    <article className="group grid gap-0 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0d1016] lg:grid-cols-[0.95fr_1.05fr]">
      <div className={`min-h-[360px] bg-gradient-to-br ${project.imageTone} p-6 ${index % 2 ? 'lg:order-2' : ''}`}>
        <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/20 bg-black/35 p-5 backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">Live demo</p>
            <span className="h-9 w-9 rounded-lg bg-white/80" />
          </div>
          <div>
            <div className="h-3 w-32 rounded-full bg-white/80" />
            <div className="mt-5 grid grid-cols-3 gap-3">
              <span className="h-24 rounded-xl bg-white/80" />
              <span className="h-24 rounded-xl bg-white/30" />
              <span className="h-24 rounded-xl bg-white/60" />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {project.stats.map(([value, label]) => (
              <div key={label} className="rounded-xl bg-black/35 p-3">
                <p className="text-lg font-black text-white">{value}</p>
                <p className="mt-1 text-[11px] font-semibold text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center p-7 sm:p-10">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-cyanbrand-300">{project.category}</p>
        <h3 className="mt-5 max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl">{project.title}</h3>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">{project.summary}</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {project.features.map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-slate-200">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => navigateTo(`/portfolio/${project.slug}`)} className="rounded-xl bg-cyanbrand-400 px-5 py-3 text-sm font-black text-navy-950 transition hover:bg-white">
            View live demo
          </button>
          <button onClick={() => navigateTo('/contact')} className="rounded-xl border border-white/25 px-5 py-3 text-sm font-black text-white transition hover:border-cyanbrand-300 hover:text-cyanbrand-200">
            Request similar site
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section className="bg-[#111315] px-5 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyanbrand-300">Portfolio</p>
          <h2 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
            Example websites with real user flow
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300">
            Each demo opens as a simple live website experience, giving clients a clearer sense of page structure, content flow, and conversion paths.
          </p>
        </div>
        <div className="mt-16 grid gap-8">
          {portfolioDemos.map((project, index) => (
            <PortfolioCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
