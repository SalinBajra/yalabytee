import SectionHeader from './SectionHeader.jsx';
import { showcase } from '../data/siteData.js';

export default function Portfolio() {
  return (
    <section id="work" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Project Showcase"
          title="Built for the kinds of digital products growing companies actually need"
          text="Use this area to feature selected YalaByte projects, outcomes, screenshots, and launch stories as the portfolio grows."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="aspect-[16/10] rounded-lg bg-navy-950 p-5 text-white">
              <div className="flex h-full flex-col justify-between rounded-lg border border-white/12 bg-white/[0.05] p-6">
                <div>
                  <p className="text-sm font-semibold text-cyanbrand-400">Featured placeholder</p>
                  <h3 className="mt-4 max-w-lg text-3xl font-semibold">Business website and conversion-focused digital presence</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {['Responsive', 'SEO-ready', 'Maintainable'].map((item) => (
                    <span key={item} className="rounded-lg bg-white/10 px-4 py-3 text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {showcase.map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-6">
                <p className="text-lg font-semibold text-navy-950">{item}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">Placeholder for case study details, business context, and measurable improvements.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
