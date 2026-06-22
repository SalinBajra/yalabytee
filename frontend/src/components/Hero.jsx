import { navigateTo } from '../utils/routes.js';

const heroImage = '/images/yalabyte-hero-workspace.jpg';

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-[#0b0d10] text-white">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-6 sm:pb-14 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
          <div className="hero-copy max-w-3xl">
            <p className="text-sm font-semibold text-cyanbrand-300">YalaByte — websites and web applications</p>
            <h1 className="mt-7 text-[clamp(3rem,7vw,6.3rem)] font-medium leading-[0.98] tracking-[-0.05em] text-white">
              We design and build business websites.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              New websites, redesigns, and custom web tools—from planning and interface design through development and launch.
            </p>
            <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center">
              <button onClick={() => navigateTo('/contact')} className="rounded-md bg-cyanbrand-400 px-6 py-3.5 text-sm font-bold text-navy-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white">
                Start a project
              </button>
              <button onClick={() => navigateTo('/portfolio')} className="px-2 py-3.5 text-left text-sm font-bold text-white transition hover:text-cyanbrand-200">
                See our work <span aria-hidden="true">→</span>
              </button>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-5 text-xs text-slate-500 sm:text-sm">
              <span>Based in Nepal</span>
              <span>Working remotely</span>
              <span>Available for new projects</span>
            </div>
          </div>

          <figure className="hero-visual relative lg:justify-self-end">
            <div className="relative aspect-[4/5] min-h-[430px] overflow-hidden border border-white/10 bg-slate-900 sm:aspect-[5/4] lg:aspect-[4/5] lg:min-h-[610px] lg:w-[30rem]">
              <img
                src={heroImage}
                alt="A modern workspace with glass meeting rooms"
                className="hero-image-drift absolute inset-0 h-full w-full object-cover grayscale-[15%]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
              <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 border-t border-white/25 pt-4 text-xs text-white/75 sm:inset-x-7 sm:bottom-7">
                <span>Design · Development · Support</span>
                <span className="text-cyanbrand-300">YB / 2026</span>
              </figcaption>
            </div>
            <div className="hero-accent absolute -bottom-3 -left-3 h-24 w-24 border-b border-l border-cyanbrand-400/60" aria-hidden="true" />
          </figure>
        </div>
      </div>
    </section>
  );
}
