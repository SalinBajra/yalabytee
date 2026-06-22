import { useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import FAQ from '../components/FAQ.jsx';
import { services } from '../data/siteData.js';
import { navigateTo } from '../utils/routes.js';

const process = [
  ['01', 'Define the job', 'We agree on the audience, pages, content, required features, and what a useful result looks like.'],
  ['02', 'Set the structure', 'You review the page plan and key layouts before time is spent building the full site.'],
  ['03', 'Build the website', 'We develop the responsive pages, connect forms, and refine the details against real content.'],
  ['04', 'Launch and hand over', 'We test the site, connect the domain and analytics, then show you how everything works.']
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
      { threshold: 0.12, rootMargin: '0px 0px -48px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />

      <section className="bg-[#f2f0e9] px-5 py-20 text-[#111315] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="home-reveal grid gap-10 border-b border-black/15 pb-14 lg:grid-cols-[0.55fr_1.45fr]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">What we do</p>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Design, development, and website support in one place.
            </h2>
          </div>
          <div className="mt-2">
            {services.slice(0, 4).map((service, index) => (
              <article key={service.title} className="home-reveal grid gap-4 border-b border-black/15 py-7 transition hover:pl-2 md:grid-cols-[0.2fr_0.65fr_1fr] md:items-baseline" style={{ '--reveal-delay': `${index * 65}ms` }}>
                <p className="text-xs font-bold text-slate-400">0{index + 1}</p>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="max-w-xl text-base leading-7 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
          <button onClick={() => navigateTo('/services')} className="home-reveal mt-8 text-sm font-bold underline decoration-cyanbrand-500 decoration-2 underline-offset-8">
            Explore all services
          </button>
        </div>
      </section>

      <section className="bg-[#0b0d10] px-5 py-12 text-white sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="home-reveal grid gap-8 border-y border-white/15 py-9 md:grid-cols-[0.55fr_1.25fr_auto] md:items-center md:py-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyanbrand-300">Live demos</p>
              <p className="mt-2 text-sm text-slate-500">Travel · Café · Logistics</p>
            </div>
            <p className="max-w-2xl text-xl leading-8 text-slate-300 sm:text-2xl">
              Explore complete example websites with working pages, navigation, and realistic content.
            </p>
            <button onClick={() => navigateTo('/portfolio')} className="w-fit shrink-0 border border-white/25 px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:border-cyanbrand-300 hover:bg-cyanbrand-400 hover:text-navy-950">
              View portfolio →
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#dff7f8] px-5 py-20 text-[#111315] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="home-reveal lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-800">How it works</p>
            <h2 className="mt-5 max-w-md text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">How a website project runs.</h2>
            <p className="mt-6 max-w-sm leading-7 text-slate-600">Each stage has a clear output to review before the next one begins.</p>
          </div>
          <div>
            {process.map(([number, title, text], index) => (
              <article key={title} className="home-reveal grid gap-5 border-t border-black/20 py-8 sm:grid-cols-[0.15fr_0.55fr_1fr]" style={{ '--reveal-delay': `${index * 65}ms` }}>
                <p className="text-sm font-bold text-cyan-800">{number}</p>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="max-w-lg leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      <section className="bg-[#0b0d10] px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="home-reveal mx-auto max-w-7xl border-t border-white/15 pt-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyanbrand-300">Have a project in mind?</p>
          <div className="mt-7 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-8xl">Tell us what you need.</h2>
            <button onClick={() => navigateTo('/contact')} className="shrink-0 rounded-full bg-cyanbrand-400 px-7 py-4 text-sm font-bold text-navy-950 transition hover:bg-white">
              Start a conversation ↗
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
