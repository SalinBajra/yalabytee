import { useEffect } from 'react';
import { navigateTo } from '../utils/routes.js';
import { portfolioDemos } from '../data/portfolioDemos.js';
import { services, processSteps, proofPoints } from '../data/siteData.js';

const heroMetrics = [
  ['01', 'Plan the pages'],
  ['02', 'Design the experience'],
  ['03', 'Build and launch']
];

const capabilityNotes = [
  'Website structure, offers, and calls to action',
  'Responsive layouts that feel clear on phone and desktop',
  'Forms, portals, dashboards, and useful business features',
  'Hosting, DNS, analytics, SEO basics, and support'
];

export default function HomePage() {
  useEffect(() => {
    const elements = document.querySelectorAll('.home-reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const featuredProject = portfolioDemos[0];

  return (
    <>
      <section className="relative isolate min-h-[calc(100svh-88px)] overflow-hidden bg-navy-950 text-white">
        <img
          src="/images/yalabyte-hero-workspace.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-55"
          loading="eager"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,17,31,0.96)_0%,rgba(6,17,31,0.82)_48%,rgba(6,17,31,0.48)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950 to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(100svh-88px)] max-w-[1500px] flex-col justify-between px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.55fr)]">
            <div className="max-w-5xl home-reveal">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyanbrand-200">
                YalaByte web design and development
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                Custom websites for growing service businesses.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                We help companies turn their services, content, and customer journey into a clean website that is easy to use, easy to manage, and ready to launch.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => navigateTo('/contact')}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyanbrand-400 px-6 text-sm font-black text-navy-950 shadow-soft transition hover:-translate-y-0.5 hover:bg-cyanbrand-300"
                >
                  Start a project
                </button>
                <button
                  type="button"
                  onClick={() => navigateTo('/portfolio')}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  View work
                </button>
              </div>
            </div>

            <aside className="home-reveal border border-white/14 bg-white/[0.08] p-5 shadow-soft backdrop-blur-xl [--reveal-delay:120ms] sm:p-6">
              <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-cyanbrand-200">What we handle</p>
                  <h2 className="mt-3 text-2xl font-black leading-tight text-white">Website planning, design, build, and launch support.</h2>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cyanbrand-300 text-sm font-black text-navy-950">YB</span>
              </div>
              <div className="mt-5 grid gap-3">
                {capabilityNotes.map((note, index) => (
                  <div key={note} className="grid grid-cols-[44px_1fr] items-center gap-4 border border-white/10 bg-navy-950/45 p-4">
                    <span className="text-xs font-black text-cyanbrand-200">{String(index + 1).padStart(2, '0')}</span>
                    <p className="text-sm leading-6 text-slate-200">{note}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-10 grid border-y border-white/12 md:grid-cols-3">
            {heroMetrics.map(([value, label]) => (
              <div key={label} className="flex items-center gap-4 border-white/12 py-5 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
                <span className="text-sm font-black text-cyanbrand-200">{value}</span>
                <span className="text-sm font-semibold text-slate-200">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="home-reveal grid gap-6 border-b border-slate-200 pb-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyanbrand-600">Services</p>
            <h2 className="max-w-4xl text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Practical website services for companies that need clear pages and reliable tools.
            </h2>
          </div>

          <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <article key={service.title} className="home-reveal bg-white p-6 transition hover:bg-slate-50 sm:p-8" style={{ '--reveal-delay': `${index * 45}ms` }}>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-black text-slate-400">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-xs font-black text-cyanbrand-600">{service.outcome}</span>
                </div>
                <h3 className="mt-8 text-2xl font-black tracking-tight text-slate-950">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-slate-950 px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="home-reveal grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-cyanbrand-200">Selected work</p>
              <h2 className="mt-5 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl">
                Website examples built around real business needs.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-300 lg:justify-self-end">
              These demos show how we organize content, service pages, inquiry paths, and brand presentation for different industries.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <button
              type="button"
              onClick={() => navigateTo(`/portfolio/${featuredProject.slug}`)}
              className="group home-reveal relative min-h-[520px] overflow-hidden text-left"
            >
              <img src={featuredProject.image} alt={featuredProject.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-cyanbrand-200">{featuredProject.category}</p>
                <h3 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">{featuredProject.title}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200">{featuredProject.summary}</p>
              </div>
            </button>

            <div className="grid gap-5">
              {portfolioDemos.slice(1).map((project, index) => (
                <button
                  key={project.slug}
                  type="button"
                  onClick={() => navigateTo(`/portfolio/${project.slug}`)}
                  className="group home-reveal grid overflow-hidden border border-white/10 bg-white/[0.06] text-left transition hover:-translate-y-1 hover:bg-white/[0.09] sm:grid-cols-[180px_1fr]"
                  style={{ '--reveal-delay': `${(index + 1) * 80}ms` }}
                >
                  <img src={project.image} alt={project.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-full" />
                  <div className="p-6">
                    <p className="text-xs font-black uppercase tracking-[0.26em] text-cyanbrand-200">{project.category}</p>
                    <h3 className="mt-4 text-2xl font-black text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="border border-white/10 px-3 py-1 text-xs font-semibold text-slate-200">{feature}</span>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
              <button
                type="button"
                onClick={() => navigateTo('/portfolio')}
                className="home-reveal min-h-16 border border-cyanbrand-300/40 bg-cyanbrand-300 px-6 text-left text-sm font-black text-navy-950 transition hover:bg-cyanbrand-200"
                style={{ '--reveal-delay': '240ms' }}
              >
                Explore full portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#f3f7fb] px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="home-reveal grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-500">Process</p>
            <h2 className="max-w-4xl text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              A clear path from first conversation to live website.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="home-reveal border border-slate-200 bg-white p-6 shadow-sm sm:p-7" style={{ '--reveal-delay': `${index * 70}ms` }}>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-cyanbrand-600">{step.label}</span>
                <h3 className="mt-10 text-2xl font-black tracking-tight text-slate-950">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="home-reveal">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyanbrand-600">Why YalaByte</p>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Design that looks professional and helps people take the next step.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              We focus on the basics that matter: clear copy, responsive layouts, reliable forms, fast pages, clean handoff, and support after launch.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {proofPoints.map((point, index) => (
              <div key={point.label} className="home-reveal bg-white p-7" style={{ '--reveal-delay': `${index * 55}ms` }}>
                <p className="text-5xl font-black tracking-tight text-slate-950">{point.value}</p>
                <p className="mt-5 text-sm font-semibold leading-7 text-slate-600">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative isolate overflow-hidden bg-navy-950 px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <img src="/images/yalabyte-hero-digital-system.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-22" aria-hidden="true" />
        <div className="absolute inset-0 bg-navy-950/86" />
        <div className="home-reveal relative mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyanbrand-200">Build with YalaByte</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">
              Have a website idea or an old site that needs work?
            </h2>
          </div>
          <button
            type="button"
            onClick={() => navigateTo('/contact')}
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-sm font-black text-navy-950 transition hover:-translate-y-0.5 hover:bg-cyanbrand-100"
          >
            Start the conversation
          </button>
        </div>
      </section>
    </>
  );
}
