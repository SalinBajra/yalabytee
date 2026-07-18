import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';
import CTASection from '../components/CTASection.jsx';
import { useMotionVariants } from '../components/MotionSection.jsx';
import { navigateTo } from '../utils/routes.js';
import { portfolioDemos } from '../data/portfolioDemos.js';

const proofPoints = [
  ['01', 'Strategy'],
  ['02', 'Interface'],
  ['03', 'Development'],
  ['04', 'Launch']
];

const serviceTeasers = [
  ['Company websites', 'Messaging, pages, and responsive implementation.'],
  ['Redesign systems', 'New structure for websites that feel unclear or dated.'],
  ['Web applications', 'Portals, dashboards, tools, and workflow screens.']
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
      className={`group inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.14em] ${dark ? 'text-[#101820]' : 'text-white'}`}
      onClick={onClick}
    >
      <span className="border-b border-[#2dd4e0] pb-1">{children}</span>
      <span className="text-[#2dd4e0] transition group-hover:translate-x-1">→</span>
    </button>
  );
}

function BuildBoard() {
  const { reveal, revealGroup } = useMotionVariants();

  return (
    <motion.div
      className="relative min-h-[540px]"
      initial="hidden"
      animate="visible"
      variants={revealGroup}
      aria-hidden="true"
    >
      <motion.div variants={reveal} className="absolute left-0 top-12 w-[74%] rounded-[2.2rem] bg-[#101820] p-5 text-white shadow-[0_24px_70px_rgba(16,24,32,0.18)]">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#2dd4e0]">Project cockpit</span>
          <span className="h-3 w-3 rounded-full bg-[#e3b778]" />
        </div>
        <div className="mt-6 grid gap-3">
          {['Offer clarity', 'Page architecture', 'Responsive build', 'Launch support'].map((item, index) => (
            <div key={item} className="grid grid-cols-[42px_1fr] items-center gap-4 rounded-2xl bg-white/[0.06] p-4">
              <span className="font-mono text-xs text-white/45">0{index + 1}</span>
              <span className="text-sm font-black">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={reveal}
        className="absolute right-0 top-0 w-[48%] overflow-hidden rounded-[2rem] bg-white shadow-[0_22px_80px_rgba(16,24,32,0.12)]"
        whileHover={{ y: -8 }}
      >
        <img src="/images/yalabyte-demo-travel.jpg" alt="" className="aspect-[4/5] w-full object-cover" style={{ objectPosition: imagePositions.travel }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/75 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2dd4e0]">Live demo</p>
          <p className="mt-2 text-xl font-black text-white">Aster Travels</p>
        </div>
      </motion.div>

      <motion.div variants={reveal} className="absolute bottom-14 right-8 w-[58%] rounded-[2rem] border border-[#101820]/10 bg-[#f8efe0] p-5 shadow-[0_18px_60px_rgba(16,24,32,0.12)]">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9b6a2f]">Motion brief</p>
        <div className="mt-5 grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, index) => (
            <span key={index} className={`h-2 rounded-full ${index < 11 ? 'bg-[#101820]' : 'bg-[#101820]/15'}`} />
          ))}
        </div>
        <p className="mt-5 text-sm font-bold leading-6 text-[#38414a]">Design direction, page flow, build system, and launch handoff in one connected track.</p>
      </motion.div>

      <motion.div
        variants={reveal}
        className="absolute bottom-0 left-8 w-[44%] rounded-[2rem] bg-[#2dd4e0] p-5 text-[#061528]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <p className="text-4xl font-black tracking-[-0.06em]">24px</p>
        <p className="mt-2 text-xs font-black uppercase tracking-[0.18em]">Responsive spacing system</p>
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
      className={`group relative w-full overflow-hidden text-left ${isLead ? 'min-h-[560px]' : 'min-h-[400px] lg:mt-24'}`}
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
      <span className="absolute inset-0 bg-gradient-to-t from-[#101820]/90 via-[#101820]/12 to-transparent" />
      <span className="absolute bottom-6 left-6 right-6">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#2dd4e0]">[{String(index + 1).padStart(2, '0')}] {project.category}</span>
        <strong className="mt-3 block text-4xl font-black leading-none tracking-tight text-white sm:text-5xl">{project.title}</strong>
      </span>
    </motion.button>
  );
}

export default function HomePage() {
  const { reduceMotion, reveal, revealGroup } = useMotionVariants();
  const featuredProjects = portfolioDemos.slice(0, 2);

  return (
    <div className="overflow-hidden bg-[#f6f1e8] text-[#101820]">
      <section className="relative overflow-hidden px-5 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="home-hero-title">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#101820]/10" />
        <motion.div
          className="pointer-events-none absolute -right-[12vw] top-12 hidden text-[38vw] font-black leading-none tracking-[-0.14em] text-[#101820]/[0.035] lg:block"
          initial={reduceMotion ? false : { opacity: 0, x: 90 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          WEB
        </motion.div>

        <div className="studio-container relative grid min-h-[calc(100svh-150px)] gap-14 lg:grid-cols-[0.78fr_0.72fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={revealGroup}>
            <motion.p variants={reveal} className="font-mono text-sm uppercase tracking-[0.34em] text-[#0d95a5]">
              YalaByte / website design and development
            </motion.p>
            <motion.div variants={reveal} className="mt-14 max-w-3xl border-l border-[#101820]/18 pl-7">
              <h1 id="home-hero-title" className="text-[clamp(1.2rem,1.8vw,1.7rem)] font-black uppercase tracking-[0.14em] text-[#101820]">
                Professional website studio
              </h1>
              <p className="mt-7 text-[clamp(2.8rem,6.2vw,6.8rem)] font-black leading-[0.92] tracking-[-0.065em]">
                Strategy, design, code, launch.
              </p>
            </motion.div>
            <motion.p variants={reveal} className="mt-8 max-w-xl text-lg leading-8 text-[#5f6670]">
              We build business websites that feel custom, load fast, explain the offer clearly, and give visitors a confident next step.
            </motion.p>
            <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-3">
              <Button motionEnabled variant="primary" className="!bg-[#101820] !text-white hover:!bg-[#26313b]" onClick={() => navigateTo('/contact')}>
                Start a project
              </Button>
              <Button motionEnabled variant="secondary" className="!border-[#101820]/20 !bg-white/45 !text-[#101820] hover:!border-[#0d95a5] hover:!bg-white" onClick={() => navigateTo('/portfolio')}>
                View portfolio
              </Button>
            </motion.div>
          </motion.div>

          <BuildBoard />
        </div>

        <motion.div
          className="studio-container relative grid gap-5 border-t border-[#101820]/12 pt-8 sm:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={revealGroup}
        >
          {proofPoints.map(([value, label]) => (
            <motion.div key={label} variants={reveal} className="flex items-baseline gap-4">
              <span className="font-mono text-sm text-[#0d95a5]">[{value}]</span>
              <span className="text-sm font-black uppercase tracking-[0.14em]">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-[#101820] px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          className="studio-container grid gap-12 lg:grid-cols-[0.52fr_1fr] lg:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={revealGroup}
        >
          <motion.p variants={reveal} className="font-mono text-sm uppercase tracking-[0.34em] text-[#2dd4e0]">Selected work</motion.p>
          <motion.div variants={reveal}>
            <p className="max-w-5xl text-[clamp(2.8rem,6.4vw,7rem)] font-black leading-[0.9] tracking-[-0.065em]">
              Complete demos, built like real client sites.
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

      <section className="relative overflow-hidden bg-[#f8fbfd] px-5 py-20 text-[#101820] sm:px-6 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] font-mono text-xs uppercase tracking-[0.42em] text-[#101820]/30 lg:block">
          Services / Scroll
        </div>
        <motion.div
          className="studio-container grid gap-14 lg:grid-cols-[0.45fr_0.95fr] lg:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={revealGroup}
        >
          <motion.div variants={reveal}>
            <p className="font-mono text-sm uppercase tracking-[0.34em] text-[#0d95a5]">Services</p>
            <p className="mt-6 max-w-md text-4xl font-black leading-none tracking-[-0.045em] sm:text-5xl">
              Website work with fewer handoffs.
            </p>
          </motion.div>

          <motion.div variants={revealGroup} className="border-t border-[#101820]/15">
            {serviceTeasers.map(([title, line], index) => (
              <motion.button
                key={title}
                type="button"
                className="grid w-full gap-5 border-b border-[#101820]/15 py-8 text-left transition hover:border-[#0d95a5] sm:grid-cols-[120px_1fr]"
                onClick={() => navigateTo('/services')}
                variants={reveal}
                transition={{ delay: reduceMotion ? 0 : index * 0.05 }}
              >
                <span className="font-mono text-sm text-[#0d95a5]">[{String(index + 1).padStart(2, '0')}]</span>
                <span>
                  <strong className="block text-3xl font-black tracking-[-0.035em]">{title}</strong>
                  <span className="mt-2 block max-w-xl text-base leading-7 text-[#5f6670]">{line}</span>
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
