import Hero from '../components/Hero.jsx';
import FAQ from '../components/FAQ.jsx';
import { portfolioDemos } from '../data/portfolioDemos.js';
import { services } from '../data/siteData.js';
import { navigateTo } from '../utils/routes.js';

const process = [
  ['01', 'Get aligned', 'A focused conversation about your business, customers, content, and what the website needs to accomplish.'],
  ['02', 'Shape the site', 'We set the direction, write a clear page structure, and design the key screens before the full build.'],
  ['03', 'Build and refine', 'Responsive development, thoughtful details, and practical feedback rounds—kept in one clear workflow.'],
  ['04', 'Launch properly', 'Final checks, forms, analytics, domain connection, and a clean handoff. We stay available afterward.']
];

function ProjectCard({ project, featured }) {
  return (
    <article className={`group ${featured ? 'lg:col-span-2' : ''}`}>
      <button
        type="button"
        onClick={() => navigateTo(`/portfolio/${project.slug}`)}
        className="block w-full text-left"
        aria-label={`View ${project.title}`}
      >
        <div className={`relative overflow-hidden bg-slate-900 ${featured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
          <img src={project.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <span className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white text-lg text-black transition group-hover:bg-cyanbrand-300">↗</span>
        </div>
        <div className="flex items-start justify-between gap-5 border-b border-white/15 py-5">
          <div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-1 text-sm text-slate-500">{project.category}</p>
          </div>
          <p className="hidden max-w-sm text-right text-sm leading-6 text-slate-400 sm:block">{project.summary}</p>
        </div>
      </button>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-[#f2f0e9] px-5 py-20 text-[#111315] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-black/15 pb-14 lg:grid-cols-[0.55fr_1.45fr]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">What we do</p>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              We turn your ideas into a website that customers understand and your business can rely on.
            </h2>
          </div>
          <div className="mt-2">
            {services.slice(0, 4).map((service, index) => (
              <article key={service.title} className="grid gap-4 border-b border-black/15 py-7 transition hover:pl-2 md:grid-cols-[0.2fr_0.65fr_1fr] md:items-baseline">
                <p className="text-xs font-bold text-slate-400">0{index + 1}</p>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="max-w-xl text-base leading-7 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
          <button onClick={() => navigateTo('/services')} className="mt-8 text-sm font-bold underline decoration-cyanbrand-500 decoration-2 underline-offset-8">
            Explore all services
          </button>
        </div>
      </section>

      <section className="bg-[#0b0d10] px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyanbrand-300">Selected work</p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.035em] sm:text-6xl">Built to be explored.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-400">A few working concepts that show how content, interaction, and visual direction come together.</p>
          </div>
          <div className="mt-14 grid gap-x-6 gap-y-12 lg:grid-cols-2">
            {portfolioDemos.map((project, index) => (
              <ProjectCard key={project.slug} project={project} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#dff7f8] px-5 py-20 text-[#111315] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-800">How it works</p>
            <h2 className="mt-5 max-w-md text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">Clear enough to keep moving.</h2>
            <p className="mt-6 max-w-sm leading-7 text-slate-600">You always know what we are working on, what we need from you, and what comes next.</p>
          </div>
          <div>
            {process.map(([number, title, text]) => (
              <article key={title} className="grid gap-5 border-t border-black/20 py-8 sm:grid-cols-[0.15fr_0.55fr_1fr]">
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
        <div className="mx-auto max-w-7xl border-t border-white/15 pt-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyanbrand-300">Have a project in mind?</p>
          <div className="mt-7 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-8xl">Let’s make it feel like you.</h2>
            <button onClick={() => navigateTo('/contact')} className="shrink-0 rounded-full bg-cyanbrand-400 px-7 py-4 text-sm font-bold text-navy-950 transition hover:bg-white">
              Start a conversation ↗
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
