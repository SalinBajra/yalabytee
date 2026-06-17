import { proofPoints } from '../data/siteData.js';
import { navigateTo } from '../utils/routes.js';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-cyanbrand-400/50" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,17,31,1)_0%,rgba(7,26,47,0.96)_48%,rgba(11,37,65,0.92)_100%)]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-6 sm:py-24 lg:min-h-[720px] lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:px-8 lg:py-24">
        <div className="motion-soft flex flex-col justify-center">
          <p className="mb-5 inline-flex w-fit rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-cyanbrand-100">
            Website development, web apps, hosting, and digital consulting
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Build a digital presence your customers can trust
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            YalaByte designs and develops professional websites and custom digital products for startups, small businesses, and growing companies that need to look credible and operate smarter.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-lg bg-cyanbrand-500 px-6 py-3.5 text-center text-sm font-bold text-navy-950 shadow-soft transition hover:bg-cyanbrand-400" onClick={() => navigateTo('/contact')}>
              Start Your Project
            </button>
            <button className="rounded-lg border border-white/20 px-6 py-3.5 text-center text-sm font-bold text-white transition hover:border-cyanbrand-400 hover:bg-white/[0.08]" onClick={() => navigateTo('/services')}>
              View Services
            </button>
          </div>
          <div className="mt-10 grid max-w-2xl gap-3 border-t border-white/10 pt-8 text-white sm:grid-cols-2">
            {proofPoints.map((item) => (
              <div key={item.value} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.05] p-4">
                <span className="text-sm font-bold text-cyanbrand-400">{item.value}</span>
                <p className="text-sm leading-6 text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="motion-soft relative self-center [animation-delay:120ms]">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 shadow-soft">
            <div className="rounded-lg bg-slate-950 p-4 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyanbrand-400">YalaByte delivery board</p>
                  <h2 className="mt-2 text-xl font-semibold text-white">Website launch system</h2>
                </div>
                <span className="rounded-lg bg-cyanbrand-500 px-3 py-2 text-xs font-bold text-navy-950">Ready to build</span>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
                <div className="grid gap-3">
                  {['Discovery and scope', 'Brand and page structure', 'Responsive development', 'Domain, hosting, launch'].map((item, index) => (
                    <div key={item} className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                      <p className="text-xs font-bold text-cyanbrand-400">0{index + 1}</p>
                      <p className="mt-2 text-sm font-semibold text-slate-100">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg bg-navy-950 p-5 text-white">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyanbrand-400">Project preview</p>
                  <div className="mt-5 rounded-lg bg-white p-4 text-navy-950">
                    <div className="h-3 w-28 rounded-sm bg-navy-950" />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <span className="h-16 rounded-md bg-cyan-50" />
                      <span className="h-16 rounded-md bg-slate-100" />
                      <span className="h-16 rounded-md bg-blue-50" />
                    </div>
                    <div className="mt-4 h-2 w-full rounded-sm bg-slate-200" />
                    <div className="mt-2 h-2 w-4/5 rounded-sm bg-slate-200" />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {['SEO', 'Content', 'Support'].map((item) => (
                      <div key={item} className="rounded-lg bg-white/10 px-3 py-3 text-center text-xs font-bold">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
