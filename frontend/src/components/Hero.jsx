import { navigateTo } from '../utils/routes.js';

const heroImage =
  '/images/yalabyte-hero-workspace.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0b0d10] text-white">
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
          <div className="motion-soft">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-cyanbrand-300">Web design &amp; development · Nepal and remote</p>
            <h1 className="max-w-3xl text-5xl font-medium leading-[0.96] tracking-[-0.045em] text-white sm:text-7xl lg:text-[5.5rem]">
              A website should make your business easier to choose.
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-8 text-slate-400">
              We plan, design, and build focused websites for service businesses—clear on every screen and ready for real inquiries.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={() => navigateTo('/contact')} className="rounded-md bg-cyanbrand-400 px-6 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-white">
                Discuss your website
              </button>
              <button onClick={() => navigateTo('/portfolio')} className="px-2 py-3.5 text-sm font-bold text-white transition hover:text-cyanbrand-200">
                View selected work <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div className="scroll-fade relative min-h-[390px] overflow-hidden border border-white/10 bg-black lg:min-h-[560px]">
            <img
              src={heroImage}
              alt="Modern workspace for website strategy and digital product development"
              className="absolute inset-0 h-full w-full object-cover opacity-85 grayscale-[20%]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 border border-white/15 bg-[#0b0d10]/90 p-5 backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:w-[21rem] sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyanbrand-300">Project blueprint</p>
                <span className="text-xs text-slate-500">01—04</span>
              </div>
              <div className="mt-5 grid grid-cols-4 gap-2" aria-label="Project stages: clarify, structure, build, launch">
                {['Clarify', 'Structure', 'Build', 'Launch'].map((stage, index) => (
                  <div key={stage}>
                    <div className={`h-1 ${index === 3 ? 'bg-cyanbrand-400' : 'bg-white/25'}`} />
                    <p className="mt-2 text-[10px] font-semibold text-slate-300">{stage}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-5 text-slate-400">One clear path from the first conversation to a working website.</p>
            </div>
          </div>
        </div>
        <div className="mt-12 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {['Positioning & content', 'Responsive UI design', 'Frontend development', 'Launch & handover'].map((item, index) => (
            <div key={item} className="flex items-center gap-4 border-white/10 py-4 sm:px-5 sm:even:border-l lg:border-l lg:first:border-l-0">
              <span className="text-xs font-bold text-cyanbrand-400">0{index + 1}</span>
              <span className="text-sm font-semibold text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
