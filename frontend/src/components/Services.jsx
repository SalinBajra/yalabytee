import SectionHeader from './SectionHeader.jsx';
import { services } from '../data/siteData.js';

export default function Services() {
  return (
    <section id="services" className="bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="A complete digital team for the work that moves your business forward"
          text="From the first website impression to the systems behind your operations, YalaByte gives businesses a practical path to better digital infrastructure."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className={`motion-soft group rounded-lg border p-6 transition hover:-translate-y-1 hover:shadow-soft ${index === 0 ? 'border-navy-950 bg-navy-950 text-white lg:row-span-2' : 'border-slate-200 bg-white'}`} style={{ animationDelay: `${index * 45}ms` }}>
              <div className="mb-8 flex items-center justify-between">
                <span className={`text-sm font-bold ${index === 0 ? 'text-cyanbrand-400' : 'text-cyan-700'}`}>{String(index + 1).padStart(2, '0')}</span>
                <span className={`h-px w-16 ${index === 0 ? 'bg-white/20' : 'bg-slate-200'}`} />
              </div>
              <h3 className={`text-xl font-semibold ${index === 0 ? 'text-white' : 'text-navy-950'}`}>{service.title}</h3>
              <p className={`mt-4 text-sm leading-7 ${index === 0 ? 'text-slate-300' : 'text-slate-600'}`}>{service.text}</p>
              <div className={`mt-6 rounded-lg px-4 py-3 text-sm font-semibold ${index === 0 ? 'bg-white/10 text-cyanbrand-100' : 'bg-slate-50 text-navy-900'}`}>
                {service.outcome}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
