import SectionHeader from './SectionHeader.jsx';
import { testimonials } from '../data/siteData.js';

export default function Testimonials() {
  return (
    <section className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Testimonials"
          title="Client feedback placeholders ready for real stories"
          text="Replace these placeholders with real client quotes as projects are completed."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <figure key={item.role} className="rounded-lg border border-slate-200 bg-white p-7">
              <blockquote className="text-lg leading-8 text-navy-950">"{item.quote}"</blockquote>
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
