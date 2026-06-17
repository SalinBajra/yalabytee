import SectionHeader from './SectionHeader.jsx';
import { testimonials } from '../data/siteData.js';

export default function Testimonials() {
  return (
    <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Testimonials"
          title="The kind of client experience YalaByte is built to deliver"
          text="Use this section for real client stories as projects launch. The current copy sets the tone for confident, practical, business-focused feedback."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-7">
              <blockquote className="text-base leading-8 text-navy-950">"{item.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-slate-100 pt-5">
                <p className="font-semibold text-navy-950">{item.name}</p>
                <p className="mt-1 text-sm text-slate-500">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
