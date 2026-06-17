import SectionHeader from './SectionHeader.jsx';
import { processSteps } from '../data/siteData.js';

export default function Process() {
  return (
    <section id="process" className="bg-navy-950 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          light
          eyebrow="Process"
          title="Structured delivery without unnecessary complexity"
          text="A clear process keeps the work focused, transparent, and easy to manage from first conversation to launch."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article key={step.label} className="rounded-lg border border-white/12 bg-white/[0.06] p-6">
              <p className="text-sm font-bold text-cyanbrand-400">{step.label}</p>
              <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
