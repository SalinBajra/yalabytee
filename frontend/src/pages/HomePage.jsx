import { useEffect } from 'react';
import { navigateTo } from '../utils/routes.js';
import { portfolioDemos } from '../data/portfolioDemos.js';
import { services, processSteps, proofPoints } from '../data/siteData.js';

const heroHighlights = [
  { value: 'Strategy-led', label: 'Offer clarity before design' },
  { value: 'Responsive', label: 'Built for every screen' },
  { value: 'Fast launch', label: 'Practical pages and polished details' }
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
      { threshold: 0.14, rootMargin: '0px 0px -72px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const heroProject = portfolioDemos[0];

  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full bg-cyanbrand-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyanbrand-700 shadow-sm">
              Digital products made simple
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Websites and business systems that guide visitors to the next right step.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                YalaByte builds fast, easy-to-navigate websites for service brands, agencies, and growing teams. We balance strong visual direction with clear structure and practical launch-ready implementation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => navigateTo('/contact')}
                className="inline-flex items-center justify-center rounded-full bg-navy-900 px-7 py-3 text-sm font-black text-white transition hover:bg-navy-800"
              >
                Start a project
              </button>
              <button
                type="button"
                onClick={() => navigateTo('/portfolio')}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                View portfolio
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item.value} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-slate-900">{item.value}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyanbrand-200/50 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
              <img
                src={heroProject.image}
                alt={heroProject.title}
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="bg-slate-950/85 px-6 py-5 text-white backdrop-blur-sm sm:px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyanbrand-200">{heroProject.category}</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight">{heroProject.headline}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-200">{heroProject.summary}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => navigateTo(`/portfolio/${heroProject.slug}`)}
                    className="rounded-full bg-white px-5 py-2 text-sm font-black text-slate-950 transition hover:bg-slate-100"
                  >
                    {heroProject.cta}
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateTo('/portfolio')}
                    className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    {heroProject.secondaryCta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr] sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-cyanbrand-600">Services / 01</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">What YalaByte does best for ambitious websites.</h2>
            </div>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              We build business websites, redesign existing sites, and deliver custom web applications that support sales, service, and growth.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <article key={service.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white">
                <p className="text-sm font-semibold text-slate-900">{service.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.28em] text-slate-500">{service.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr] sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-slate-500">Portfolio / 02</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Work samples built for clarity, speed, and conversion.</h2>
            </div>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Explore live demo sites designed for travel, hospitality, logistics, and service businesses.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {portfolioDemos.map((project) => (
              <article key={project.slug} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
                <button type="button" onClick={() => navigateTo(`/portfolio/${project.slug}`)} className="block text-left">
                  <div className="overflow-hidden bg-slate-900">
                    <img src={project.image} alt={project.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="space-y-4 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">{project.category}</p>
                    <h3 className="text-2xl font-semibold text-slate-950">{project.title}</h3>
                    <p className="text-sm leading-7 text-slate-600">{project.summary}</p>
                    <div className="grid gap-2 text-sm text-slate-500 sm:grid-cols-2">
                      {project.stats.map(([value, label]) => (
                        <div key={label} className="rounded-2xl bg-slate-100 p-3">
                          <span className="block text-lg font-black text-slate-900">{value}</span>
                          <span className="block leading-5">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr] sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-cyanbrand-600">Process / 03</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">A simple process from concept to launch.</h2>
            </div>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              We map goals, craft design, build the site, and keep the launch smooth with practical quality checks.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-navy-900 text-sm font-black text-white">{step.label}</div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="bg-slate-950 px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr] sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-cyanbrand-200">Why YalaByte / 04</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">A dependable partner for websites that perform.</h2>
            </div>
            <p className="text-sm leading-7 text-slate-300 sm:text-base">
              We match practical strategy, polished design, and reliable development for websites that are easy to manage after launch.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point.label} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
                <p className="text-3xl font-black tracking-tight text-white">{point.value}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-cyanbrand-500 px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 rounded-[2rem] border border-white/10 bg-white/5 px-8 py-12 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyanbrand-100">Contact / 05</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">Ready to build something you can actually use?</h2>
            <p className="mt-4 text-sm leading-7 text-cyanbrand-100/90 sm:text-base">
              Let’s talk scope, pages, launch timing, and the best way to turn your website into a working business asset.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigateTo('/contact')}
            className="rounded-full bg-white px-8 py-4 text-sm font-black text-slate-950 transition hover:bg-slate-100"
          >
            Start the conversation
          </button>
        </div>
      </section>
    </>
  );
}
