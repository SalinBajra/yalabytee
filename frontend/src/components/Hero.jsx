import { navigateTo } from '../utils/routes.js';

const heroImage = '/images/yalabyte-hero-digital-system.png';

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-[#b9cce4] px-3 py-3 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="hero-frame relative mx-auto min-h-[680px] max-w-[1500px] overflow-hidden bg-[#070716] text-white shadow-[0_35px_100px_rgba(14,24,48,0.28)] sm:min-h-[760px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(96,49,175,0.18),transparent_38%)]" />
        <div className="absolute -right-[12%] top-[9%] h-[58%] w-[76%] sm:-right-[7%] sm:top-[3%] sm:h-[72%] sm:w-[70%] lg:-right-[5%] lg:top-[-8%] lg:h-[105%] lg:w-[68%]">
          <img
            src={heroImage}
            alt="Abstract digital system formed from connected three-dimensional rings"
            className="hero-orb h-full w-full object-contain"
            loading="eager"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#070716] via-[#070716]/85 to-transparent lg:via-[#070716]/45" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#070716] to-transparent" />

        <div className="relative z-10 flex min-h-[680px] flex-col p-6 sm:min-h-[760px] sm:p-10 lg:p-14">
          <div className="hero-copy flex items-center justify-between border-b border-white/15 pb-5">
            <p className="text-sm font-black tracking-[0.18em]">YALABYTE<span className="text-cyanbrand-300">/</span></p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 sm:text-xs">Digital design &amp; development</p>
          </div>

          <div className="hero-copy mt-auto max-w-3xl pb-12 pt-52 sm:pt-64 lg:pb-16 lg:pt-32">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyanbrand-300">Websites · Web applications</p>
            <h1 className="mt-5 text-[clamp(3.2rem,8.4vw,8rem)] font-semibold uppercase leading-[0.82] tracking-[-0.055em]">
              Design.<br />Build.<br /><span className="text-white/35">Launch.</span>
            </h1>
            <div className="mt-8 flex max-w-2xl flex-col gap-7 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-sm leading-7 text-white/60 sm:text-base">
                Business websites and custom web applications, designed and developed by YalaByte in Nepal.
              </p>
              <div className="flex shrink-0 gap-3">
                <button onClick={() => navigateTo('/portfolio')} className="border border-white/30 px-5 py-3 text-xs font-black uppercase tracking-[0.12em] transition hover:border-white hover:bg-white hover:text-[#070716]">
                  View work
                </button>
                <button onClick={() => navigateTo('/contact')} className="bg-cyanbrand-400 px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#070716] transition hover:bg-white">
                  Contact
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/15 pt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35 sm:text-xs">
            <span>Nepal / Worldwide</span>
            <span>Web · UI/UX · Development</span>
            <span className="hidden sm:inline">2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
