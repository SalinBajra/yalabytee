import Hero from '../components/Hero.jsx';
import FAQ from '../components/FAQ.jsx';
import Team from '../components/Team.jsx';
import { portfolioDemos } from '../data/portfolioDemos.js';
import { navigateTo } from '../utils/routes.js';

const featureCards = [
  {
    title: 'Clean, modern design',
    text: 'Professional page systems that reflect your brand and make your business easy to understand.',
    size: 'lg:col-span-1',
    image: '/images/yalabyte-feature-design.jpg'
  },
  {
    title: 'Fast, reliable builds',
    text: 'Responsive frontend, SEO-ready structure, contact forms, and launch support handled with care.',
    size: 'lg:col-span-2',
    image: '/images/yalabyte-feature-build.jpg'
  },
  {
    title: 'Flexible for growth',
    text: 'Start with the pages you need now, then add service pages, dashboards, automations, and integrations later.',
    size: 'lg:col-span-2',
    image: '/images/yalabyte-feature-growth.jpg'
  },
  {
    title: 'Ongoing support',
    text: 'Maintenance, hosting guidance, domain setup, content updates, and practical digital consulting.',
    size: 'lg:col-span-1',
    image: '/images/yalabyte-feature-support.jpg'
  }
];

const process = [
  ['01', 'Scope', 'We define the pages, content, goals, forms, domain, hosting, and launch needs.'],
  ['02', 'Design', 'We shape a clean visual system that feels credible and works across devices.'],
  ['03', 'Build', 'We develop responsive pages, SEO metadata, contact flows, and reusable components.'],
  ['04', 'Launch', 'We help with deployment, domain connection, handoff, and ongoing improvements.']
];

const metrics = [
  ['Fast', 'mobile-first website experience'],
  ['SEO', 'metadata and content structure'],
  ['Forms', 'connected contact workflow'],
  ['Support', 'domain, hosting, and maintenance help']
];

function WorkCard({ demo }) {
  return (
    <article className="group overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0d1016] transition hover:-translate-y-1 hover:border-cyanbrand-300/50">
      <div className="relative h-64 overflow-hidden">
        <img src={demo.image} alt={`${demo.title} website example`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1016] via-black/15 to-transparent" />
        <p className="absolute left-5 top-5 rounded-full bg-black/55 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur">
          {demo.category}
        </p>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white">{demo.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">{demo.summary}</p>
        <button onClick={() => navigateTo(`/portfolio/${demo.slug}`)} className="mt-6 rounded-xl bg-cyanbrand-400 px-5 py-3 text-sm font-black text-navy-950 transition hover:bg-white">
          Open live demo
        </button>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-[#202226] px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyanbrand-300">What YalaByte does</p>
            <h2 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl">
              Digital presence that feels considered, not assembled.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-9 text-slate-300">
            We help startups, local companies, service businesses, and growing teams build websites that explain the business clearly, earn trust quickly, and make the next step easy.
          </p>
        </div>
      </section>

      <section className="bg-[#111315] px-5 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              Features built for business success
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300">
              The essentials every serious business website needs: a confident brand feel, clear content, fast performance, and dependable support.
            </p>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-3">
            {featureCards.map((card) => (
              <article key={card.title} className={`${card.size} overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0c0f14]`}>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">{card.text}</p>
                </div>
                <div className="mx-4 mb-4 h-72 overflow-hidden rounded-[1.1rem] bg-black">
                  <img src={card.image} alt={card.title} className="h-full w-full object-cover opacity-80 transition duration-700 hover:scale-105" loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#202226] px-5 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyanbrand-300">Process</p>
            <h2 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl">
              A clear path from idea to launch.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              No cluttered process, no confusing handoff. We keep the build practical, visible, and ready for real business use.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/10 md:grid-cols-2">
            {process.map(([number, title, text]) => (
              <article key={title} className="bg-[#0d1016] p-7">
                <p className="text-sm font-black text-cyanbrand-300">{number}</p>
                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111315] px-5 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyanbrand-300">Portfolio</p>
              <h2 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl">
                Live demos clients can explore.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              These examples are built as browsable mini-sites, so clients can experience the type of structure, flow, and polish YalaByte can create.
            </p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {portfolioDemos.map((demo) => (
              <WorkCard key={demo.slug} demo={demo} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#202226] px-5 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mx-auto max-w-4xl text-center text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl">
            Business-ready from the first version
          </h2>
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {metrics.map(([value, label]) => (
              <div key={value} className="rounded-[1.4rem] border border-white/10 bg-[#0d1016] p-7">
                <p className="text-3xl font-black text-white">{value}</p>
                <p className="mt-6 text-sm leading-7 text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team />
      <FAQ />

      <section className="bg-[#0b0d10] px-5 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#101318] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="min-h-[360px] bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(91,215,255,0.28),rgba(0,0,0,0.92))]" />
          <div className="p-8 sm:p-12">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyanbrand-300">Start today</p>
            <h2 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl">
              Launch a sharper business website.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Tell us what you need. We can help with design, development, domain connection, hosting guidance, forms, SEO setup, and ongoing updates.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={() => navigateTo('/contact')} className="rounded-xl bg-cyanbrand-400 px-6 py-3.5 text-sm font-black text-navy-950 transition hover:bg-white">
                Start project
              </button>
              <button onClick={() => navigateTo('/portfolio')} className="rounded-xl border border-white/25 px-6 py-3.5 text-sm font-black text-white transition hover:border-cyanbrand-300">
                See examples
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
