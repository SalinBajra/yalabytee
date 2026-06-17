import SectionHeader from './SectionHeader.jsx';
import { showcase } from '../data/siteData.js';

export default function Portfolio() {
  return (
    <section id="work" className="bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Project Showcase"
          title="Website and product directions YalaByte can build around your business"
          text="Until live case studies are published, this section shows the kinds of project outcomes YalaByte is structured to deliver for service businesses, startups, and growing teams."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-6">
            <div className="aspect-[16/10] rounded-lg bg-navy-950 p-4 text-white sm:p-6">
              <div className="flex h-full flex-col justify-between rounded-lg border border-white/10 bg-white/[0.05] p-5 sm:p-7">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyanbrand-400">Featured direction</p>
                  <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">Conversion-focused business website with service pages, inquiry flow, and CMS-ready content</h3>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
                    A premium company website designed to explain your services clearly, guide visitors toward contact, and give your team a professional foundation for marketing.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {['Responsive build', 'SEO-ready pages', 'Inquiry workflow'].map((item) => (
                    <span key={item} className="rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {showcase.map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 transition hover:border-cyanbrand-500 hover:shadow-soft">
                <p className="text-lg font-semibold text-navy-950">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
