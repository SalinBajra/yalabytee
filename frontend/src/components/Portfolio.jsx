import SectionHeader from './SectionHeader.jsx';
import { showcase } from '../data/siteData.js';

function BrowserMockup({ item }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-sm bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-sm bg-emerald-300" />
        </div>
        <span className="h-2 w-28 rounded-sm bg-slate-200" />
      </div>
      <div className="pt-4">
        <div className={`rounded-lg ${item.accent} p-4 text-white`}>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">{item.type}</p>
          <div className="mt-4 h-2 w-32 rounded-sm bg-white" />
          <div className="mt-2 h-2 w-24 rounded-sm bg-white/50" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <span className="h-14 rounded-md bg-slate-50" />
          <span className="h-14 rounded-md bg-slate-100" />
          <span className="h-14 rounded-md bg-slate-50" />
        </div>
        <div className="mt-3 rounded-md border border-slate-100 p-3">
          <div className="h-2 w-full rounded-sm bg-slate-200" />
          <div className="mt-2 h-2 w-4/5 rounded-sm bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Website Portfolio"
          title="Portfolio-style website samples for the businesses YalaByte serves"
          text="These sample portfolio concepts show the type of professional websites we can customize for your brand, industry, content, domain, hosting setup, and growth plan."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {showcase.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:shadow-soft">
              <BrowserMockup item={item} />
              <div className="p-3 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">{item.type}</p>
                <h3 className="mt-3 text-2xl font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-white px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
