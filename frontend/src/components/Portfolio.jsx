import SectionHeader from './SectionHeader.jsx';

const portfolioSites = [
  {
    title: 'Yala Travel Co.',
    category: 'Travel and tour website',
    summary:
      'A polished travel website concept with destination storytelling, package detail pages, seasonal offers, and a direct trip inquiry path.',
    challenge: 'A travel business needs to show destinations clearly, explain packages, build trust, and convert visitors into trip inquiries.',
    deliverables: ['Destination landing pages', 'Tour package detail flow', 'Trip inquiry form', 'SEO-ready content structure'],
    accent: 'bg-cyan-500',
    tint: 'bg-cyan-50'
  },
  {
    title: 'Northline Studio',
    category: 'Portfolio and personal brand website',
    summary:
      'A refined portfolio concept for consultants, creators, and agencies that need clear positioning, selected work, and a confident contact path.',
    challenge: 'A professional portfolio needs to feel selective, credible, and easy to scan without becoming a generic gallery.',
    deliverables: ['Case study pages', 'Service positioning', 'About and credibility blocks', 'Lead capture CTA'],
    accent: 'bg-slate-700',
    tint: 'bg-slate-100'
  },
  {
    title: 'RapidRoute Courier',
    category: 'Courier and logistics website',
    summary:
      'A logistics website concept with service coverage, quote requests, delivery support content, and a practical customer journey.',
    challenge: 'A courier company needs service clarity, trust signals, coverage details, and a fast way for customers to request pricing.',
    deliverables: ['Service zone sections', 'Quote request flow', 'Delivery service pages', 'Support and FAQ structure'],
    accent: 'bg-blue-600',
    tint: 'bg-blue-50'
  }
];

function ProjectInterface({ project }) {
  return (
    <div className="rounded-lg border border-white/10 bg-navy-950 p-4 text-white shadow-soft">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyanbrand-400">Example build</p>
          <p className="mt-2 text-lg font-semibold">{project.title}</p>
        </div>
        <span className={`h-10 w-10 rounded-md ${project.accent}`} />
      </div>

      <div className="mt-5 grid gap-3">
        <div className="rounded-lg bg-white p-4 text-navy-950">
          <div className="flex items-center justify-between">
            <span className="h-2 w-24 rounded-sm bg-navy-950" />
            <span className="h-7 w-20 rounded-md bg-cyanbrand-500" />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <span className={`h-16 rounded-md ${project.tint}`} />
            <span className="h-16 rounded-md bg-slate-100" />
            <span className={`h-16 rounded-md ${project.tint}`} />
          </div>
          <div className="mt-4 h-2 w-full rounded-sm bg-slate-200" />
          <div className="mt-2 h-2 w-4/5 rounded-sm bg-slate-200" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-white/10 p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Flow</p>
            <p className="mt-2 text-sm font-semibold">Visitor to inquiry</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Build</p>
            <p className="mt-2 text-sm font-semibold">Responsive custom site</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Portfolio"
          title="Example website builds with real business logic"
          text="These example directions show how YalaByte can structure custom websites around industry needs, user journeys, and conversion goals."
        />

        <div className="mt-14 grid gap-8">
          {portfolioSites.map((project, index) => (
            <article
              key={project.title}
              className={`motion-soft grid gap-8 rounded-lg border border-slate-200 p-5 md:grid-cols-[0.85fr_1.15fr] md:p-8 ${index % 2 === 1 ? 'bg-slate-50 md:[&>*:first-child]:order-2' : 'bg-white'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectInterface project={project} />
              <div className="flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">{project.category}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-normal text-navy-950">{project.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-600">{project.summary}</p>

                <div className="mt-7 rounded-lg bg-navy-950 p-5 text-white">
                  <p className="text-sm font-bold text-cyanbrand-400">Business problem</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.challenge}</p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.deliverables.map((item) => (
                    <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-navy-950">
                      {item}
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
