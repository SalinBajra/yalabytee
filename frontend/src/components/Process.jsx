import SectionHeader from './SectionHeader.jsx';
import { processSteps } from '../data/siteData.js';

export default function Process() {
  return (
    <section id="process" className="bg-navy-950 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          light
          eyebrow="Process"
          title="A disciplined process that keeps the project moving"
          text="Every website has a lot of small decisions. We organize them into a clear path so your team knows what is happening, why it matters, and what comes next."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article key={step.label} className="relative rounded-lg border border-white/10 bg-white/[0.06] p-6">
              <p className="grid h-12 w-12 place-items-center rounded-lg bg-cyanbrand-500 text-sm font-black text-navy-950">{step.label}</p>
              <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
              <div className="mt-7 h-px bg-white/10" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">YalaByte delivery</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
