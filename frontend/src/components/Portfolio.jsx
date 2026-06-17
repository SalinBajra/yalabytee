import SectionHeader from './SectionHeader.jsx';

const portfolioSites = [
  {
    id: 'travel-wordpress',
    title: 'TrailVista Travel',
    category: 'WordPress travel website',
    summary:
      'A complete travel agency sample with destination pages, tour packages, itinerary highlights, inquiry forms, and SEO-friendly content areas.',
    pages: ['Home', 'Destinations', 'Tour Packages', 'Trip Details', 'Inquiry'],
    features: ['Package listing', 'Trip inquiry form', 'Seasonal offer blocks', 'Travel blog structure'],
    accent: 'bg-cyan-600',
    pale: 'bg-cyan-50'
  },
  {
    id: 'portfolio-wordpress',
    title: 'Northline Studio',
    category: 'WordPress portfolio website',
    summary:
      'A polished portfolio sample for creative professionals, agencies, consultants, and personal brands that need selected work and a clear contact path.',
    pages: ['Home', 'Case Studies', 'Services', 'About', 'Contact'],
    features: ['Case-study layout', 'Service positioning', 'Testimonial blocks', 'Lead capture CTA'],
    accent: 'bg-navy-800',
    pale: 'bg-slate-100'
  },
  {
    id: 'courier-wordpress',
    title: 'RapidRoute Courier',
    category: 'WordPress courier website',
    summary:
      'A logistics website sample with service zones, quote requests, shipment support content, tracking-ready layout, and trust-focused conversion sections.',
    pages: ['Home', 'Services', 'Coverage', 'Get Quote', 'Support'],
    features: ['Quote request flow', 'Coverage area sections', 'Delivery service pages', 'Support and FAQ blocks'],
    accent: 'bg-blue-700',
    pale: 'bg-blue-50'
  }
];

function WordPressSiteMockup({ site }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <span className={`h-8 w-8 rounded-md ${site.accent}`} />
          <span className="text-xs font-bold text-navy-950">{site.title}</span>
        </div>
        <div className="hidden gap-2 sm:flex">
          {site.pages.slice(0, 4).map((page) => (
            <span key={page} className="rounded-sm bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-500">
              {page}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-3 pt-4">
        <div className={`rounded-lg ${site.accent} p-5 text-white`}>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">{site.category}</p>
          <div className="mt-4 h-3 w-44 rounded-sm bg-white" />
          <div className="mt-3 h-2 w-64 max-w-full rounded-sm bg-white/60" />
          <div className="mt-5 inline-flex rounded-md bg-white px-3 py-2 text-[10px] font-bold text-navy-950">Primary CTA</div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {site.features.slice(0, 3).map((feature) => (
            <div key={feature} className={`${site.pale} rounded-md p-3`}>
              <div className="h-8 rounded-sm bg-white" />
              <p className="mt-2 text-[10px] font-semibold leading-4 text-slate-600">{feature}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-2 rounded-md border border-slate-100 p-3">
          <div className="h-2 w-full rounded-sm bg-slate-200" />
          <div className="h-2 w-5/6 rounded-sm bg-slate-200" />
          <div className="h-2 w-2/3 rounded-sm bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Website Portfolio"
          title="WordPress website examples clients can actually understand"
          text="These are complete sample builds, not random cards. Each example shows the kind of WordPress website structure YalaByte can customize with your brand, content, domain, hosting, forms, and add-ons."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {portfolioSites.map((site) => (
            <a key={site.id} href={`#${site.id}`} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyanbrand-500 hover:text-navy-950">
              {site.title}
            </a>
          ))}
        </div>

        <div className="mt-14 grid gap-8">
          {portfolioSites.map((site, index) => (
            <article
              id={site.id}
              key={site.id}
              className="motion-soft grid scroll-mt-32 gap-8 rounded-lg border border-slate-200 bg-slate-50 p-4 md:grid-cols-[0.95fr_1.05fr] md:p-6 lg:p-8"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <WordPressSiteMockup site={site} />
              <div className="flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">{site.category}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-normal text-navy-950">{site.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-600">{site.summary}</p>

                <div className="mt-6">
                  <p className="text-sm font-bold text-navy-950">Pages included</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {site.pages.map((page) => (
                      <span key={page} className="rounded-md bg-white px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                        {page}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {site.features.map((feature) => (
                    <div key={feature} className="rounded-lg bg-white p-4 text-sm font-semibold text-navy-950 ring-1 ring-slate-200">
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
