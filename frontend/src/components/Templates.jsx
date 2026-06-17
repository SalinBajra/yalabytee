import SectionHeader from './SectionHeader.jsx';

const templates = [
  {
    domain: 'Travel',
    title: 'Travel and tour booking website',
    description:
      'A WordPress concept for travel agencies, trekking companies, tour operators, and destination guide businesses.',
    features: ['Destination pages', 'Tour packages', 'Inquiry forms', 'SEO blog structure'],
    stats: ['Featured tours', 'Seasonal offers', 'Trip details'],
    accent: 'bg-cyan-600',
    panel: 'bg-cyan-50'
  },
  {
    domain: 'Portfolio',
    title: 'Personal brand and creative portfolio',
    description:
      'A refined portfolio layout for consultants, designers, photographers, agencies, and professionals presenting work with credibility.',
    features: ['Case studies', 'Service profile', 'Testimonials', 'Lead capture CTA'],
    stats: ['Selected work', 'About profile', 'Contact CTA'],
    accent: 'bg-navy-800',
    panel: 'bg-slate-100'
  },
  {
    domain: 'Courier',
    title: 'Courier and logistics business site',
    description:
      'An operations-focused concept for courier companies, delivery providers, cargo services, and local logistics brands.',
    features: ['Shipment inquiry', 'Service zones', 'Pricing blocks', 'Support contact'],
    stats: ['Track order', 'Service zones', 'Fast quote'],
    accent: 'bg-blue-700',
    panel: 'bg-blue-50'
  }
];

export default function Templates() {
  return (
    <section id="templates" className="bg-slate-50 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="WordPress Template Samples"
          title="Industry-ready WordPress concepts with a custom brand feel"
          text="These sample directions show how YalaByte can shape WordPress websites for different business domains without making them feel like generic templates."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {templates.map((template) => (
            <article key={template.domain} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className={`${template.panel} p-4`}>
                <div className="rounded-lg border border-white bg-white p-3 shadow-sm">
                  <div className={`flex items-center justify-between rounded-lg ${template.accent} px-4 py-3 text-white`}>
                    <p className="text-sm font-bold">{template.domain}</p>
                    <span className="h-2 w-16 rounded-full bg-white/40" />
                  </div>
                  <div className="mt-4 grid gap-3">
                    <div className="h-20 rounded-lg bg-slate-900 p-4">
                      <div className="h-2 w-20 rounded-full bg-cyanbrand-400" />
                      <div className="mt-4 h-2 w-36 rounded-full bg-white/70" />
                      <div className="mt-2 h-2 w-28 rounded-full bg-white/30" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {template.stats.map((stat) => (
                        <div key={stat} className="rounded-lg bg-slate-50 p-2">
                          <div className="h-8 rounded-md bg-white" />
                          <p className="mt-2 text-[10px] font-semibold leading-4 text-slate-500">{stat}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">{template.domain} sample</p>
                <h3 className="text-xl font-semibold text-navy-950">{template.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{template.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {template.features.map((feature) => (
                    <span key={feature} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                      {feature}
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
