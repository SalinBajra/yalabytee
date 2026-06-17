import SectionHeader from './SectionHeader.jsx';
import { team } from '../data/siteData.js';

export default function Team() {
  return (
    <section className="bg-slate-50 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Team Approach"
          title="A focused digital team around your business outcome"
          text="YalaByte works as a practical technology partner: strategy, design, development, launch support, and future improvements all stay connected."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {team.map((member, index) => (
            <article key={member.role} className="rounded-lg border border-slate-200 bg-white p-7">
              <p className="text-sm font-bold text-cyan-700">0{index + 1}</p>
              <h3 className="mt-5 text-xl font-semibold text-navy-950">{member.role}</h3>
              <p className="mt-3 text-base font-semibold leading-7 text-slate-800">{member.title}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{member.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
