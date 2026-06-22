import { navigateTo } from '../utils/routes.js';

const heroImage = '/images/yalabyte-hero-digital-system.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100svh-76px)] overflow-hidden bg-[#070716] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(96,49,175,0.18),transparent_38%)]" />
        <div className="absolute -right-[20%] top-[3%] h-[56%] w-[95%] sm:-right-[12%] sm:top-[-4%] sm:h-[76%] sm:w-[80%] lg:-right-[5%] lg:top-[-10%] lg:h-[110%] lg:w-[68%]">
          <img
            src={heroImage}
            alt="Abstract digital system formed from connected three-dimensional rings"
            className="hero-orb h-full w-full object-contain"
            loading="eager"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#070716] via-[#070716]/85 to-transparent lg:via-[#070716]/45" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#070716] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-76px)] w-full max-w-7xl flex-col justify-end px-5 pb-12 pt-72 sm:px-6 sm:pb-16 sm:pt-80 lg:px-8 lg:pb-20 lg:pt-24">
          <div className="hero-copy max-w-3xl">
            <h1 className="text-[clamp(3.2rem,8.4vw,8rem)] font-semibold uppercase leading-[0.82] tracking-[-0.055em]">
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
        </div>
    </section>
  );
}
