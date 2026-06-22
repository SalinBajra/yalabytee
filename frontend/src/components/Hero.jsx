import { navigateTo } from '../utils/routes.js';

const heroImage =
  '/images/yalabyte-hero-workspace.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0b0d10] text-white">
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
          <div className="motion-soft">
            <h1 className="max-w-3xl text-5xl font-medium leading-[0.96] tracking-[-0.045em] text-white sm:text-7xl lg:text-[5.5rem]">
              Your business deserves a better website.
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-8 text-slate-400">
              YalaByte designs and builds clear, fast websites for service businesses and growing teams—without the agency theatre.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={() => navigateTo('/contact')} className="rounded-md bg-cyanbrand-400 px-6 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-white">
                Tell us about your project
              </button>
              <button onClick={() => navigateTo('/portfolio')} className="px-2 py-3.5 text-sm font-bold text-white transition hover:text-cyanbrand-200">
                View selected work <span aria-hidden="true">→</span>
              </button>
            </div>
            <p className="mt-14 border-t border-white/10 pt-5 text-sm text-slate-500">Design · Development · Launch support</p>
          </div>

          <div className="scroll-fade relative min-h-[390px] overflow-hidden border border-white/10 bg-black lg:min-h-[560px]">
            <img
              src={heroImage}
              alt="Modern workspace for website strategy and digital product development"
              className="absolute inset-0 h-full w-full object-cover opacity-85 grayscale-[20%]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
