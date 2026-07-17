import PageHero from './PageHero.jsx';
import { services } from '../data/siteData.js';

export default function Services({ showIntro = true }) {
  return (
    <section className={`bg-base-900 px-5 text-ink sm:px-6 lg:px-8 ${showIntro ? 'py-24' : 'py-16 sm:py-20 lg:py-24'}`}>
      <div className="mx-auto max-w-7xl">
        {showIntro ? (
          <PageHero
            variant="sectionLight"
            withSection={false}
            eyebrow="Services"
            title="Website work, scoped around the actual job"
            text="Start with a new company website, improve an existing one, or add the custom tools your team needs."
          />
        ) : null}
        <div className={`${showIntro ? 'mt-14' : ''} grid gap-4 sm:grid-cols-2 lg:grid-cols-3`}>
          {services.map((service, index) => (
            <article key={service.title} className={`motion-soft group rounded-card border p-6 transition hover:-translate-y-1 hover:shadow-hover ${index === 0 ? 'border-accent bg-accent text-base-900 lg:row-span-2' : 'border-border-subtle bg-base-700 text-ink'}`} style={{ animationDelay: `${index * 45}ms` }}>
              <div className="mb-8 flex items-center justify-between">
                <span className={`text-sm font-bold ${index === 0 ? 'text-base-900' : 'text-accent'}`}>{String(index + 1).padStart(2, '0')}</span>
                <span className={`h-px w-16 ${index === 0 ? 'bg-base-900/20' : 'bg-white/10'}`} />
              </div>
              <h3 className={`text-xl font-semibold ${index === 0 ? 'text-base-900' : 'text-ink'}`}>{service.title}</h3>
              <p className={`mt-4 text-sm leading-7 ${index === 0 ? 'text-base-800' : 'text-ink-muted'}`}>{service.text}</p>
              <div className={`mt-6 rounded-card px-4 py-3 text-sm font-semibold ${index === 0 ? 'bg-base-900 text-ink' : 'bg-white/[0.08] text-ink'}`}>
                {service.outcome}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
