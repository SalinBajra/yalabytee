import { navigateTo } from '../utils/routes.js';

const heroImage =
  '/images/yalabyte-hero-workspace.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0b0d10] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(91,215,255,0.16),transparent_24%),linear-gradient(180deg,#0b0d10_0%,#101318_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-cyanbrand-400/70" />
      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="motion-soft">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyanbrand-300">
              Website development and digital solutions
            </p>
            <h1 className="mt-7 max-w-5xl text-6xl font-semibold leading-[0.95] tracking-normal text-slate-100 sm:text-7xl lg:text-8xl">
              Websites that grow your business
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              YalaByte builds sharp, reliable websites and digital products for businesses that need a stronger online presence without unnecessary complexity.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={() => navigateTo('/contact')} className="rounded-xl bg-cyanbrand-400 px-6 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-white">
                Start project
              </button>
              <button onClick={() => navigateTo('/portfolio')} className="rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyanbrand-300 hover:text-cyanbrand-200">
                See work
              </button>
            </div>
          </div>

          <div className="scroll-fade relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.45)] lg:min-h-[520px]">
            <img
              src={heroImage}
              alt="Modern workspace for website strategy and digital product development"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/5" />
            <div className="absolute bottom-5 left-5 right-5 max-w-md rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur-md sm:bottom-7 sm:left-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyanbrand-300">YalaByte delivery</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">Strategy, design, development, and launch support.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                We build the brand, pages, forms, domain setup, and hosting path around one practical business goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
