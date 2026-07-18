import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';
import CTASection from '../components/CTASection.jsx';
import MotionSection, { useMotionVariants } from '../components/MotionSection.jsx';
import { navigateTo } from '../utils/routes.js';
import { portfolioDemos } from '../data/portfolioDemos.js';

const homeStats = [
  ['03', 'live demo verticals'],
  ['06', 'core service tracks'],
  ['01', 'team from strategy to launch']
];

const serviceTeasers = [
  ['Company Websites', 'Clear pages for service businesses.'],
  ['Website Redesigns', 'Sharper structure for old sites.'],
  ['Custom Web Applications', 'Focused tools for internal work.']
];

const imagePositions = {
  travel: '50% 48%',
  cafe: '50% 54%',
  logistics: '50% 50%'
};

function EditorialLink({ children, onClick, className = '' }) {
  return (
    <button
      type="button"
      className={`group inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.16em] text-ink ${className}`}
      onClick={onClick}
    >
      <span className="border-b border-accent pb-1 transition group-hover:text-accent">{children}</span>
      <span className="text-accent transition group-hover:translate-x-1">+</span>
    </button>
  );
}

function WorkBand({ project, index }) {
  const { imageReveal } = useMotionVariants();
  const isLead = index === 0;

  return (
    <motion.button
      type="button"
      className={`group relative min-h-[430px] w-full overflow-hidden text-left ${isLead ? 'lg:min-h-[620px]' : 'lg:min-h-[460px]'}`}
      onClick={() => navigateTo(`/portfolio/${project.slug}`)}
      aria-label={`Open ${project.title}`}
      variants={imageReveal}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.99 }}
    >
      <img
        src={project.image}
        alt={`${project.title} website preview`}
        loading={index === 0 ? 'eager' : 'lazy'}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        style={{ objectPosition: imagePositions[project.slug] || '50% 50%' }}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-base-900 via-base-900/20 to-transparent" />
      <span className="absolute left-5 top-5 font-mono text-xs uppercase tracking-[0.18em] text-accent sm:left-8 sm:top-8">
        [{String(index + 1).padStart(2, '0')}]
      </span>
      <span className="absolute bottom-6 left-5 right-5 grid gap-3 sm:bottom-8 sm:left-8 sm:right-8">
        <span className="text-xs font-black uppercase tracking-[0.2em] text-ink-muted">{project.category}</span>
        <strong className={`${isLead ? 'text-5xl sm:text-6xl' : 'text-4xl sm:text-5xl'} max-w-2xl font-black leading-[0.95] tracking-tight text-ink`}>
          {project.title}
        </strong>
      </span>
    </motion.button>
  );
}

export default function HomePage() {
  const { reduceMotion, reveal, revealGroup, imageReveal } = useMotionVariants();
  const [leadProject, secondProject] = portfolioDemos;
  const featuredProjects = [leadProject, secondProject].filter(Boolean);

  return (
    <div className="overflow-hidden bg-base-900 text-ink">
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden border-b border-border-subtle bg-base-900 px-5 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="home-hero-title">
        <motion.div
          className="pointer-events-none absolute -right-[10vw] top-[-18vw] hidden text-[48vw] font-black leading-none tracking-[-0.12em] text-white/[0.035] lg:block"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          YB
        </motion.div>

        <div className="studio-container relative grid min-h-[calc(100vh-220px)] gap-12 lg:grid-cols-[0.82fr_0.36fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={revealGroup}>
            <motion.p variants={reveal} className="font-mono text-sm uppercase tracking-[0.34em] text-accent">
              YalaByte web design and development
            </motion.p>
            <motion.h1
              id="home-hero-title"
              variants={reveal}
              className="mt-10 max-w-6xl text-[clamp(4rem,10vw,10.8rem)] font-black leading-[0.82] tracking-[-0.075em] text-ink"
            >
              A digital studio focused on web.
            </motion.h1>
            <motion.p variants={reveal} className="mt-10 max-w-2xl text-lg leading-8 text-ink-muted sm:text-xl">
              YalaByte plans, designs, and builds sharp websites and digital tools for service businesses that need clearer direction online.
            </motion.p>
            <motion.div variants={reveal} className="mt-10 flex flex-wrap gap-3">
              <Button motionEnabled variant="primary" onClick={() => navigateTo('/contact')}>
                Start a project
              </Button>
              <Button motionEnabled variant="secondary" onClick={() => navigateTo('/portfolio')}>
                View portfolio
              </Button>
            </motion.div>
          </motion.div>

          <motion.aside className="hidden self-end lg:block" initial="hidden" animate="visible" variants={revealGroup} aria-label="Scroll cue and studio notes">
            <motion.div variants={reveal} className="ml-auto grid w-44 gap-12">
              <div className="h-40 w-px bg-border" />
              <p className="[writing-mode:vertical-rl] font-mono text-xs uppercase tracking-[0.32em] text-ink-muted">Scroll</p>
              <div className="grid grid-cols-4 gap-2 text-center font-mono text-sm text-ink-muted" aria-hidden="true">
                {Array.from({ length: 16 }).map((_, index) => (
                  <span key={index} className={index === 9 ? 'text-accent' : ''}>+</span>
                ))}
              </div>
            </motion.div>
          </motion.aside>
        </div>

        <motion.div
          className="studio-container relative mt-12 grid gap-4 border-t border-border-subtle pt-8 sm:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={revealGroup}
        >
          {homeStats.map(([value, label]) => (
            <motion.div key={label} variants={reveal} className="border-border-subtle sm:border-l sm:pl-8 first:sm:border-l-0 first:sm:pl-0">
              <strong className="block text-5xl font-black tracking-[-0.07em] text-ink">{value}</strong>
              <span className="mt-2 block max-w-44 text-sm font-bold leading-5 text-ink-muted">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <MotionSection className="bg-base-800 px-5 py-20 text-ink sm:px-6 lg:px-8 lg:py-28" aria-label="Studio focus">
        <div className="studio-container grid gap-12 lg:grid-cols-[0.4fr_1fr] lg:items-end">
          <p className="font-mono text-sm uppercase tracking-[0.34em] text-accent">What we do</p>
          <h2 className="max-w-5xl text-[clamp(3rem,7vw,7.5rem)] font-black leading-[0.9] tracking-[-0.065em]">
            Driving service brands forward online.
          </h2>
        </div>
      </MotionSection>

      <section className="bg-base-900 px-5 py-20 text-ink sm:px-6 lg:px-8 lg:py-28" aria-labelledby="selected-work-title">
        <motion.div
          className="studio-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={revealGroup}
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_0.32fr] lg:items-end">
            <motion.div variants={reveal}>
              <p className="font-mono text-sm uppercase tracking-[0.34em] text-accent">Selected work</p>
              <h2 id="selected-work-title" className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.045em] text-ink sm:text-7xl">
                Two demos. Two different worlds.
              </h2>
            </motion.div>
            <motion.div variants={reveal} className="lg:justify-self-end">
              <EditorialLink onClick={() => navigateTo('/portfolio')}>View full portfolio</EditorialLink>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-[1.1fr_0.72fr] lg:items-start">
            {featuredProjects.map((project, index) => (
              <WorkBand key={project.slug} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f7fb] px-5 py-20 text-base-900 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="services-title">
        <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] font-mono text-xs uppercase tracking-[0.42em] text-base-900/35 lg:block">
          Services / Scroll
        </div>
        <motion.div
          className="studio-container grid gap-14 lg:grid-cols-[0.52fr_0.9fr] lg:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={revealGroup}
        >
          <motion.div variants={reveal}>
            <p className="font-mono text-sm uppercase tracking-[0.34em] text-accent">Services</p>
            <h2 id="services-title" className="mt-6 max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl">
              Three ways we usually help first.
            </h2>
          </motion.div>

          <motion.div variants={revealGroup} className="border-t border-base-900/15">
            {serviceTeasers.map(([title, line], index) => (
              <motion.button
                key={title}
                type="button"
                className="grid w-full gap-5 border-b border-base-900/15 py-8 text-left transition hover:border-accent sm:grid-cols-[120px_1fr]"
                onClick={() => navigateTo('/services')}
                variants={reveal}
                transition={{ delay: reduceMotion ? 0 : index * 0.05 }}
              >
                <span className="font-mono text-sm text-accent">[{String(index + 1).padStart(2, '0')}]</span>
                <span>
                  <strong className="block text-3xl font-black tracking-[-0.035em]">{title}</strong>
                  <span className="mt-2 block text-base leading-7 text-base-700">{line}</span>
                </span>
              </motion.button>
            ))}
            <EditorialLink className="mt-10 !text-base-900" onClick={() => navigateTo('/services')}>
              See all services
            </EditorialLink>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-base-900 px-5 py-20 text-ink sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          className="studio-container grid gap-10 lg:grid-cols-[0.9fr_0.42fr] lg:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={revealGroup}
        >
          <motion.div variants={reveal}>
            <p className="font-mono text-sm uppercase tracking-[0.34em] text-accent">Why YalaByte</p>
            <h2 className="mt-6 max-w-5xl text-[clamp(3rem,7vw,7.2rem)] font-black leading-[0.9] tracking-[-0.065em]">
              Websites need direction before decoration.
            </h2>
          </motion.div>
          <motion.p variants={reveal} className="max-w-md text-base leading-8 text-ink-muted">
            We shape the offer, page flow, interface, and launch path so the final site feels intentional from the first scroll.
          </motion.p>
        </motion.div>
      </section>

      <CTASection
        eyebrow="Start a project"
        title="Have a website idea or an old site that needs serious redesign?"
        text="Tell us what exists, what needs to change, and what the website should help your business do next."
        buttonText="Start the conversation"
      />
    </div>
  );
}
