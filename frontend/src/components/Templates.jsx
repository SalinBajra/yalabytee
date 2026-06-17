import SectionHeader from './SectionHeader.jsx';

const templates = [
  {
    domain: 'Travel',
    brand: 'TrailVista',
    title: 'Travel agency and tour booking website',
    description:
      'A WordPress structure for travel agencies, trekking companies, and tour operators that need destination pages, package detail pages, inquiry forms, and seasonal campaigns.',
    cta: 'Plan a trip',
    layout: ['Destinations', 'Packages', 'Guides', 'Inquiry'],
    highlights: ['Package detail pages', 'Trip inquiry workflow', 'Destination SEO pages'],
    accent: 'bg-cyan-600',
    soft: 'bg-cyan-50',
    metric: '12 featured tours'
  },
  {
    domain: 'Portfolio',
    brand: 'Northline Studio',
    title: 'Portfolio and personal brand website',
    description:
      'A refined WordPress concept for consultants, designers, creators, and agencies that need selected work, service positioning, credibility, and a strong contact path.',
    cta: 'View work',
    layout: ['Work', 'Services', 'About', 'Contact'],
    highlights: ['Case-study pages', 'Service positioning', 'Client proof blocks'],
    accent: 'bg-navy-800',
    soft: 'bg-slate-100',
    metric: '8 case studies'
  },
  {
    domain: 'Courier',
    brand: 'RapidRoute',
    title: 'Courier and logistics business website',
    description:
      'A practical WordPress layout for delivery, cargo, and courier companies with quote requests, service coverage, shipment support, and customer trust sections.',
    cta: 'Get a quote',
    layout: ['Services', 'Coverage', 'Tracking', 'Support'],
    highlights: ['Quote request form', 'Service zone pages', 'Tracking-ready layout'],
    accent: 'bg-blue-700',
    soft: 'bg-blue-50',
    metric: '24/7 support'
  }
];

function TemplatePreview({ template }) {
  return (
    <div className={`${template.soft} p-4`}>
      <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className={`h-8 w-8 rounded-md ${template.accent}`} />
            <span className="text-xs font-bold text-navy-950">{template.brand}</span>
          </div>
          <div className="hidden gap-3 sm:flex">
            {template.layout.slice(0, 3).map((item) => (
              <span key={item} className="h-2 w-12 rounded-sm bg-slate-200" />
            ))}
          </div>
        </div>

        <div className="grid gap-3 pt-4">
          <div className="rounded-lg bg-navy-950 p-4 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyanbrand-400">{template.domain}</p>
                <div className="mt-3 h-2 w-32 rounded-sm bg-white" />
                <div className="mt-2 h-2 w-24 rounded-sm bg-white/50" />
              </div>
              <span className="rounded-md bg-cyanbrand-500 px-3 py-2 text-[10px] font-bold text-navy-950">{template.cta}</span>
            </div>
          </div>

          <div className="grid grid-cols-[1.15fr_0.85fr] gap-3">
            <div className="grid gap-2">
              {template.highlights.map((item) => (
                <div key={item} className="rounded-md border border-slate-100 bg-slate-50 p-3">
                  <div className="h-2 w-16 rounded-sm bg-slate-300" />
                  <p className="mt-2 text-[10px] font-semibold leading-4 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
            <div className="rounded-md border border-slate-100 bg-white p-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">Conversion block</p>
              <div className="mt-3 grid gap-2">
                <span className="h-7 rounded-md bg-slate-100" />
                <span className="h-7 rounded-md bg-slate-100" />
                <span className={`h-8 rounded-md ${template.accent}`} />
              </div>
              <p className="mt-3 text-[10px] font-semibold text-navy-950">{template.metric}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Templates() {
  return (
    <section className="bg-slate-50 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="WordPress Website Templates"
          title="Domain-specific WordPress packages that can be customized for your brand"
          text="YalaByte can start from proven structures for common business domains, then customize layout, copy, pages, colors, forms, hosting setup, and add-ons for your real company."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {templates.map((template) => (
            <article key={template.domain} className="motion-soft overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <TemplatePreview template={template} />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">{template.domain} website sample</p>
                <h3 className="mt-3 text-xl font-semibold text-navy-950">{template.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{template.description}</p>
                <div className="mt-5 grid gap-2">
                  {template.highlights.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <span className={`h-2 w-2 rounded-sm ${template.accent}`} />
                      {feature}
                    </div>
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
