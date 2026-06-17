export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute inset-x-0 top-0 h-px bg-cyanbrand-400/40" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-cyanbrand-500/16 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/12 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.98fr_1.02fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="mb-5 inline-flex w-fit rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm font-medium text-cyanbrand-100">
            Premium websites and one-stop digital solutions
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Build Your Digital Presence with YalaByte
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Professional websites and digital solutions designed to help your business grow, stand out, and operate smarter.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="rounded-lg bg-cyanbrand-500 px-6 py-3.5 text-center text-sm font-bold text-navy-950 shadow-soft transition hover:bg-cyanbrand-400" href="#contact">
              Start Your Project
            </a>
            <a className="rounded-lg border border-white/16 px-6 py-3.5 text-center text-sm font-bold text-white transition hover:border-cyanbrand-400 hover:bg-white/8" href="#services">
              View Services
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8 text-white">
            <div>
              <p className="text-2xl font-semibold">7</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">core service areas</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">1</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">digital partner</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">100%</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">business-focused</p>
            </div>
          </div>
        </div>
        <div className="relative self-center">
          <div className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] p-2 shadow-soft backdrop-blur">
            <img
              src="/images/yalabyte-hero.png"
              alt="Premium web technology platform visual for YalaByte digital solutions"
              className="h-full max-h-[560px] w-full rounded-xl object-cover object-center"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 grid grid-cols-3 gap-2 rounded-xl border border-white/12 bg-navy-950/88 p-3 shadow-soft backdrop-blur sm:left-8 sm:right-8 sm:gap-3 sm:p-4">
            {['Strategy', 'Design', 'Launch'].map((item) => (
              <div key={item} className="rounded-lg bg-white/[0.08] px-3 py-3 text-center text-xs font-semibold text-slate-100 sm:text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
