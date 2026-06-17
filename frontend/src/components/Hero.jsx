import { proofPoints } from '../data/siteData.js';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-cyanbrand-400/50" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,17,31,0.98)_0%,rgba(7,26,47,0.94)_42%,rgba(15,53,95,0.72)_100%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-6 sm:py-24 lg:min-h-[760px] lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="mb-5 inline-flex w-fit rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-cyanbrand-100">
            Website development, WordPress, web apps, and digital consulting
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Build a digital presence your customers can trust
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            YalaByte designs and develops professional websites, WordPress experiences, and custom digital products for startups, small businesses, and growing companies that need to look credible and operate smarter.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="rounded-lg bg-cyanbrand-500 px-6 py-3.5 text-center text-sm font-bold text-navy-950 shadow-soft transition hover:bg-cyanbrand-400" href="#contact">
              Start Your Project
            </a>
            <a className="rounded-lg border border-white/20 px-6 py-3.5 text-center text-sm font-bold text-white transition hover:border-cyanbrand-400 hover:bg-white/[0.08]" href="#services">
              View Services
            </a>
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
        <div className="relative self-center">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-2 shadow-soft backdrop-blur">
            <img
              src="/images/yalabyte-hero.png"
              alt="Premium web technology platform visual for YalaByte digital solutions"
              className="h-full max-h-[560px] w-full rounded-lg object-cover object-center"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 left-4 right-4 grid grid-cols-3 gap-2 rounded-lg border border-white/10 bg-navy-950/90 p-3 shadow-soft backdrop-blur sm:left-8 sm:right-8 sm:gap-3 sm:p-4">
            {[
              ['Strategy', 'Scope'],
              ['Design', 'UI/UX'],
              ['Launch', 'Support']
            ].map(([item, detail]) => (
              <div key={item} className="rounded-lg bg-white/[0.08] px-3 py-3 text-center">
                <p className="text-xs font-bold text-white sm:text-sm">{item}</p>
                <p className="mt-1 text-[11px] font-medium text-slate-400">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
