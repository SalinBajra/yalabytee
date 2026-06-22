import { useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import FAQ from '../components/FAQ.jsx';
import { portfolioDemos } from '../data/portfolioDemos.js';
import { services } from '../data/siteData.js';
import { navigateTo } from '../utils/routes.js';

const process = [
  ['01', 'Define the job', 'We agree on the audience, pages, content, required features, and what a useful result looks like.'],
  ['02', 'Set the structure', 'You review the page plan and key layouts before time is spent building the full site.'],
  ['03', 'Build the website', 'We develop the responsive pages, connect forms, and refine the details against real content.'],
  ['04', 'Launch and hand over', 'We test the site, connect the domain and analytics, then show you how everything works.']
];

function ProjectCard({ project }) {
  return (
    <article className="group">
      <button
        type="button"
        onClick={() => navigateTo(`/portfolio/${project.slug}`)}
        className="block w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] text-left transition hover:border-cyanbrand-400/50"
        aria-label={`View ${project.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
          <img src={project.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-cyanbrand-300">{project.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
            </div>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-black transition group-hover:bg-cyanbrand-300">↗</span>
          </div>
        </div>
      </button>
    </article>
  );
}

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

      <section className="bg-[#0b0d10] px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="home-reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyanbrand-300">Selected work</p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.035em] sm:text-5xl">Three websites you can explore.</h2>
            </div>
            <button onClick={() => navigateTo('/portfolio')} className="w-fit text-sm font-bold text-white underline decoration-cyanbrand-400 decoration-2 underline-offset-8 transition hover:text-cyanbrand-200">
              View all Live Demos
            </button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {portfolioDemos.map((project, index) => (
              <div key={project.slug} className="home-reveal" style={{ '--reveal-delay': `${index * 90}ms` }}>
                <ProjectCard project={project} />
              </div>
            ))}
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
