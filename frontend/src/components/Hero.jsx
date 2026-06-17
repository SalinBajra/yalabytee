import { proofPoints } from '../data/siteData.js';
import { navigateTo } from '../utils/routes.js';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-cyanbrand-400/50" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,17,31,1)_0%,rgba(7,26,47,0.96)_48%,rgba(11,37,65,0.92)_100%)]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="code-grid absolute inset-0 opacity-40" />
        <div className="scan-line absolute left-0 top-0 h-px w-full bg-cyanbrand-400/45" />
        <div className="dev-halo absolute right-[-10rem] top-24 hidden h-[32rem] w-[32rem] rounded-full border border-cyanbrand-400/10 lg:block" />
        <div className="dev-ribbon absolute bottom-24 right-[6%] hidden h-28 w-[34rem] rotate-[-8deg] rounded-lg border border-cyanbrand-400/15 bg-cyanbrand-500/[0.05] lg:block" />
        <div className="dev-code-lines absolute right-[10%] top-32 hidden w-80 opacity-70 lg:grid">
          {['const launch = true;', 'build.pages()', 'connect.forms()', 'deploy.hosting()'].map((line) => (
            <span key={line} className="font-mono text-xs text-cyanbrand-100/70">{line}</span>
          ))}
        </div>
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
        <div className="motion-soft scroll-fade relative self-center [animation-delay:120ms]">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-soft">
            <img
              src="/images/hero-technology-visual.png"
              alt="Website development workspace with responsive web design screens"
              className="h-full max-h-[560px] w-full rounded-md object-cover object-center"
              loading="eager"
            />
          </div>
          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2 rounded-lg border border-white/10 bg-navy-950/90 p-3 shadow-soft backdrop-blur sm:left-8 sm:right-8">
            {['Design', 'Develop', 'Launch'].map((item) => (
              <div key={item} className="rounded-md bg-white/[0.08] px-3 py-3 text-center text-xs font-bold text-white">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
