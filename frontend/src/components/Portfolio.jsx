import { navigateTo } from '../utils/routes.js';
import { portfolioDemos } from '../data/portfolioDemos.js';

function ProjectInterface({ project }) {
  return (
    <div className="rounded-lg border border-white/10 bg-navy-950 p-4 text-white shadow-soft">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyanbrand-400">Example build</p>
          <p className="mt-2 text-lg font-semibold">{project.title}</p>
        </div>
        <span className={`h-10 w-10 rounded-md ${project.accent}`} />
      </div>

      <div className="mt-5 grid gap-3">
        <div className="rounded-lg bg-white p-4 text-navy-950">
          <div className="flex items-center justify-between">
            <span className="h-2 w-24 rounded-sm bg-navy-950" />
            <span className="h-7 w-20 rounded-md bg-cyanbrand-500" />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <span className={`h-16 rounded-md ${project.tint}`} />
            <span className="h-16 rounded-md bg-slate-100" />
            <span className={`h-16 rounded-md ${project.tint}`} />
          </div>
          <div className="mt-4 h-2 w-full rounded-sm bg-slate-200" />
          <div className="mt-2 h-2 w-4/5 rounded-sm bg-slate-200" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-white/10 p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Flow</p>
            <p className="mt-2 text-sm font-semibold">Visitor to inquiry</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Build</p>
            <p className="mt-2 text-sm font-semibold">Responsive custom site</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section className="bg-[#111315] px-5 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyanbrand-400">Portfolio</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">Live-style demos your clients can experience</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            These are starter demo experiences you can keep improving over time. Each one shows a different type of website YalaByte can build.
          </p>
        </div>

        <div className="mt-14 grid gap-8">
          {portfolioDemos.map((project, index) => (
            <article
              key={project.title}
              className={`motion-soft grid gap-8 rounded-lg border border-white/10 p-5 md:grid-cols-[0.85fr_1.15fr] md:p-8 ${index % 2 === 1 ? 'bg-[#1f2022] md:[&>*:first-child]:order-2' : 'bg-[#17191c]'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectInterface project={project} />
              <div className="flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">{project.category}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-normal text-white">{project.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{project.summary}</p>

                <div className="mt-7 rounded-lg bg-navy-950 p-5 text-white">
                  <p className="text-sm font-bold text-cyanbrand-400">Business problem</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.challenge}</p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.deliverables.map((item) => (
                    <div key={item} className="rounded-lg border border-white/10 bg-white/[0.05] p-4 text-sm font-semibold text-slate-100">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <button onClick={() => navigateTo(`/portfolio/${project.slug}`)} className="rounded-lg bg-cyanbrand-500 px-5 py-3 text-sm font-bold text-navy-950 transition hover:bg-cyanbrand-400">
                    Open demo
                  </button>
                  <button onClick={() => navigateTo('/contact')} className="rounded-lg border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:border-cyanbrand-500 hover:bg-white hover:text-navy-950">
                    Request similar site
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
