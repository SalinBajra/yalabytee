import SectionHeader from './SectionHeader.jsx';
import { services } from '../data/siteData.js';

export default function Services() {
  return (
    <section id="services" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Complete digital capability for modern businesses"
          text="YalaByte helps startups, small businesses, and growing teams move from a basic online presence to a polished digital platform."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group rounded-lg border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-cyanbrand-500 hover:shadow-soft">
              <div className="mb-5 h-10 w-10 rounded-lg bg-navy-950 text-center text-lg font-black leading-10 text-cyanbrand-400">
                {service.title.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold text-navy-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
