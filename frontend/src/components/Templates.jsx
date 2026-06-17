import SectionHeader from './SectionHeader.jsx';

const templates = [
  {
    domain: 'Travel',
    title: 'Travel and tour booking website',
    description:
      'A WordPress-ready concept for travel agencies, tour operators, destination guides, and booking-focused service businesses.',
    features: ['Destination pages', 'Tour packages', 'Inquiry forms', 'SEO blog structure'],
    accent: 'from-cyan-500 to-blue-600'
  },
  {
    domain: 'Portfolio',
    title: 'Personal brand and creative portfolio',
    description:
      'A refined portfolio layout for consultants, designers, photographers, agencies, and professionals presenting work with credibility.',
    features: ['Case studies', 'Service profile', 'Testimonials', 'Lead capture CTA'],
    accent: 'from-slate-700 to-cyan-600'
  },
  {
    domain: 'Courier',
    title: 'Courier and logistics business site',
    description:
      'A practical operations-focused concept for courier companies, delivery providers, cargo services, and local logistics brands.',
    features: ['Shipment inquiry', 'Service zones', 'Pricing blocks', 'Support contact'],
    accent: 'from-blue-700 to-cyan-500'
  }
];

export default function Templates() {
  return (
    <section id="templates" className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="WordPress Template Samples"
          title="Starter concepts for businesses that need to launch quickly"
          text="These sample directions show how YalaByte can shape WordPress websites for different industries while keeping each brand polished, responsive, and easy to manage."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {templates.map((template) => (
            <article key={template.domain} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className={`h-36 bg-gradient-to-br ${template.accent} p-5 text-white`}>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/80">{template.domain}</p>
                <div className="mt-7 grid grid-cols-3 gap-2">
                  <span className="h-14 rounded-lg bg-white/24" />
                  <span className="h-14 rounded-lg bg-white/16" />
                  <span className="h-14 rounded-lg bg-white/24" />
                </div>
              </div>
              <div className="p-6">
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
