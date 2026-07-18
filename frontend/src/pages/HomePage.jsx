import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';
import CTASection from '../components/CTASection.jsx';
import { useMotionVariants } from '../components/MotionSection.jsx';
import { navigateTo } from '../utils/routes.js';
import { portfolioDemos } from '../data/portfolioDemos.js';

const proofPoints = [
  ['Strategy', 'Clear offer, audience, pages'],
  ['Design', 'Modern interface system'],
  ['Build', 'Responsive, fast, maintainable'],
  ['Launch', 'Deployment and support']
];

const serviceTeasers = [
  ['Company websites', 'Positioning, page structure, UI design, and responsive development.'],
  ['Website redesigns', 'A stronger system for sites that feel dated, unclear, or hard to trust.'],
  ['Custom web tools', 'Portals, dashboards, forms, and workflow screens built around operations.']
];

const imagePositions = {
  travel: '50% 48%',
  cafe: '50% 54%',
  logistics: '50% 50%'
};

function TextLink({ children, onClick, dark = false }) {
  return (
    <button
      type="button"
      className={`group inline-flex items-center gap-3 text-sm font-bold ${dark ? 'text-slate-950' : 'text-white'}`}
      onClick={onClick}
    >
      <span className="border-b border-sky-500 pb-1">{children}</span>
      <span className="text-sky-500 transition group-hover:translate-x-1">→</span>
    </button>
  );
}

function WebsiteSystemPreview() {
  const { reveal, revealGroup } = useMotionVariants();

  return (
    <motion.div
      className="relative"
      initial="hidden"
      animate="visible"
      variants={revealGroup}
      aria-label="Website system preview"
    >
      <motion.div variants={reveal} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div className="flex gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
          <span className="text-xs font-bold text-slate-400">yalabyte.com/build</span>
        </div>

        <div className="grid gap-px bg-slate-200 lg:grid-cols-[0.78fr_0.42fr]">
          <div className="bg-slate-950 p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-400">Launch page</p>
            <div className="mt-8 max-w-xl">
              <div className="h-4 w-32 rounded-full bg-white/20" />
              <div className="mt-5 h-10 w-[88%] rounded-full bg-white" />
              <div className="mt-3 h-10 w-[64%] rounded-full bg-white" />
              <div className="mt-7 grid max-w-md gap-2">
                <div className="h-3 rounded-full bg-white/25" />
                <div className="h-3 w-[82%] rounded-full bg-white/25" />
              </div>
            </div>
            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {['Pages', 'Flow', 'Content'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <div className="h-8 w-8 rounded-xl bg-sky-400/20" />
                  <p className="mt-5 text-sm font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Delivery board</p>
            <div className="mt-8 space-y-4">
              {proofPoints.map(([title, text], index) => (
                <motion.div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                  variants={reveal}
                  transition={{ delay: index * 0.04 }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-black text-slate-950">{title}</span>
                    <span className="text-xs font-bold text-sky-600">0{index + 1}</span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-8 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_22px_60px_rgba(15,23,42,0.12)] sm:block"
        variants={reveal}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <p className="text-3xl font-black tracking-tight text-slate-950">92</p>
        <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Performance target</p>
      </motion.div>
    </motion.div>
  );
}

function WorkTile({ project, index }) {
  const { imageReveal } = useMotionVariants();
  const isLead = index === 0;

  return (
    <motion.button
      type="button"
      className={`group relative w-full overflow-hidden rounded-[1.75rem] bg-slate-900 text-left ${isLead ? 'min-h-[540px]' : 'min-h-[390px] lg:mt-20'}`}
      onClick={() => navigateTo(`/portfolio/${project.slug}`)}
      aria-label={`Open ${project.title}`}
      variants={imageReveal}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.99 }}
    >
      <img
        src={project.image}
        alt={`${project.title} website preview`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        style={{ objectPosition: imagePositions[project.slug] || '50% 50%' }}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
      <span className="absolute bottom-6 left-6 right-6">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-sky-300">{project.category}</span>
        <strong className="mt-3 block text-4xl font-black leading-none tracking-tight text-white sm:text-5xl">{project.title}</strong>
      </span>
    </motion.button>
  );
}

export default function HomePage() {
  const { reduceMotion, reveal, revealGroup } = useMotionVariants();
  const featuredProjects = portfolioDemos.slice(0, 2);

  return (
    <div className="overflow-hidden bg-[#f8fafc] text-slate-950">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-5 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="home-hero-title">
        <div className="pointer-events-none absolute left-1/2 top-24 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="studio-container relative grid min-h-[calc(100svh-150px)] gap-14 lg:grid-cols-[0.72fr_0.78fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={revealGroup}>
            <motion.p variants={reveal} className="text-sm font-bold uppercase tracking-[0.14em] text-sky-700">
              YalaByte website studio
            </motion.p>
            <motion.h1
              id="home-hero-title"
              variants={reveal}
              className="mt-7 max-w-3xl text-[clamp(3.6rem,7vw,7.8rem)] font-black leading-[0.88] tracking-[-0.07em] text-slate-950"
            >
              Serious websites for serious businesses.
            </motion.h1>
            <motion.p variants={reveal} className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              We design and build company websites, redesigns, and web tools with clear structure, strong interfaces, and reliable launch support.
            </motion.p>
            <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-3">
              <Button motionEnabled variant="primary" className="!rounded-2xl !bg-slate-950 !text-white hover:!bg-slate-800" onClick={() => navigateTo('/contact')}>
                Start a project
              </Button>
              <Button motionEnabled variant="secondary" className="!rounded-2xl !border-slate-300 !bg-white !text-slate-950 hover:!border-sky-500 hover:!bg-sky-50" onClick={() => navigateTo('/portfolio')}>
                View portfolio
              </Button>
            </motion.div>
          </motion.div>

          <WebsiteSystemPreview />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-8 sm:px-6 lg:px-8">
        <motion.div className="studio-container grid gap-5 sm:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.24 }} variants={revealGroup}>
          {proofPoints.map(([title, text], index) => (
            <motion.div key={title} variants={reveal} className="flex gap-4 sm:block">
              <span className="text-sm font-black text-sky-700">0{index + 1}</span>
              <p className="text-sm font-black text-slate-950 sm:mt-3">{title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          className="studio-container grid gap-12 lg:grid-cols-[0.42fr_1fr] lg:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={revealGroup}
        >
          <motion.p variants={reveal} className="text-sm font-bold uppercase tracking-[0.14em] text-sky-300">Selected work</motion.p>
          <motion.div variants={reveal}>
            <p className="max-w-5xl text-[clamp(2.7rem,6vw,6.5rem)] font-black leading-[0.92] tracking-[-0.06em]">
              Complete demos with real page structure.
            </p>
            <TextLink className="mt-9" onClick={() => navigateTo('/portfolio')}>View full portfolio</TextLink>
          </motion.div>
        </motion.div>

        <motion.div
          className="studio-container mt-16 grid gap-5 lg:grid-cols-[1.08fr_0.72fr] lg:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={revealGroup}
        >
          {featuredProjects.map((project, index) => (
            <WorkTile key={project.slug} project={project} index={index} />
          ))}
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-[#f8fafc] px-5 py-20 text-slate-950 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          className="studio-container grid gap-14 lg:grid-cols-[0.45fr_0.95fr] lg:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={revealGroup}
        >
          <motion.div variants={reveal}>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-sky-700">Services</p>
            <p className="mt-6 max-w-md text-4xl font-black leading-none tracking-[-0.045em] sm:text-5xl">
              Built around the work your site has to do.
            </p>
          </motion.div>

          <motion.div variants={revealGroup} className="border-t border-slate-200">
            {serviceTeasers.map(([title, line], index) => (
              <motion.button
                key={title}
                type="button"
                className="grid w-full gap-5 border-b border-slate-200 py-8 text-left transition hover:border-sky-500 sm:grid-cols-[120px_1fr]"
                onClick={() => navigateTo('/services')}
                variants={reveal}
                transition={{ delay: reduceMotion ? 0 : index * 0.05 }}
              >
                <span className="text-sm font-black text-sky-700">0{index + 1}</span>
                <span>
                  <strong className="block text-3xl font-black tracking-[-0.035em]">{title}</strong>
                  <span className="mt-2 block max-w-xl text-base leading-7 text-slate-600">{line}</span>
                </span>
              </motion.button>
            ))}
            <TextLink dark className="mt-10" onClick={() => navigateTo('/services')}>See all services</TextLink>
          </motion.div>
        </motion.div>
      </section>

      <CTASection
        eyebrow="Start a project"
        title="Have a website that needs to feel serious, custom, and ready for growth?"
        text="Tell us what exists, what needs to change, and what the website should help your business do next."
        buttonText="Start the conversation"
      />
    </div>
  );
}
