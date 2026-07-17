import { navigateTo } from '../utils/routes.js';
import usePageReveal from '../hooks/usePageReveal.js';
import SectionHeader from '../components/SectionHeader.jsx';
import { proofPoints, team } from '../data/siteData.js';

export default function AboutPage() {
  usePageReveal();

  return (
    <>
      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="studio-container">
          <SectionHeader
            eyebrow="About"
            title="Based in Nepal, built for teams everywhere"
            text="YalaByte creates premium websites and digital tools for ambitious businesses that want a strong online presence with fewer handoffs."
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="page-reveal">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Small enough to stay close. Experienced enough to deliver.</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                We keep the working relationship direct from the first conversation through launch. Fewer handoffs mean faster decisions, better context, and a website that feels considered as a complete experience.
              </p>
            </div>
            <div className="page-reveal grid gap-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="rounded-3xl bg-white p-7 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-cyanbrand-600">Studio roots</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">We work with service businesses and growing teams from Nepal and beyond, focusing on thoughtful design, responsive engineering, and long-term stability.</p>
              </div>
              <div className="rounded-3xl bg-white p-7 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-cyanbrand-600">Project approach</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">Every website gets a clear scope, practical UX, polished visuals, and a launch-ready implementation that is easy to maintain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="studio-container">
          <div className="page-reveal mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-slate-500">Who we are</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">One connected team from strategy to delivery.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Our process keeps strategy, design, and development working together so the website is thoughtfully built, easy to use, and ready to launch.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {team.map((item, index) => (
              <article key={item.role} className="page-reveal rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm" style={{ '--page-delay': `${index * 50}ms` }}>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-cyanbrand-600">{item.role}</p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111315] px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="studio-container">
          <div className="page-reveal mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyanbrand-200">What guides us</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">Simple principles. Better work.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              We focus on clear goals, coherent design, and launch-ready development so websites are useful for the business and easy to maintain.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {proofPoints.map((point) => (
              <div key={point.label} className="page-reveal rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
                <p className="text-3xl font-black tracking-tight text-white">{point.value}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyanbrand-500 px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="studio-container flex flex-col items-start gap-8 rounded-[2rem] border border-white/15 bg-white/10 px-8 py-12 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyanbrand-100">From Nepal to worldwide</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">Let’s make something useful.</h2>
            <p className="mt-4 text-sm leading-7 text-cyanbrand-100/90 sm:text-base">
              Whether your audience is local or global, we can shape the website, pages, and systems around your business priorities.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigateTo('/contact')}
            className="rounded-full bg-white px-8 py-4 text-sm font-black text-slate-950 transition hover:bg-slate-100"
          >
            Start a conversation
          </button>
        </div>
      </section>
    </>
  );
}
