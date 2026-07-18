import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';
import CardGrid from '../components/CardGrid.jsx';
import CTASection from '../components/CTASection.jsx';
import MotionSection, { useMotionVariants } from '../components/MotionSection.jsx';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import { navigateTo } from '../utils/routes.js';
import { portfolioDemos } from '../data/portfolioDemos.js';

const heroNotes = [
  ['Website development', 'Business websites and redesigns'],
  ['UI/UX', 'Page flow, hierarchy, and interfaces'],
  ['Support', 'Launch, maintenance, and improvements']
];

const homeStats = [
  ['03', 'live demo verticals'],
  ['06', 'core service tracks'],
  ['01', 'team from strategy to launch']
];

const imagePositions = {
  travel: '50% 48%',
  cafe: '50% 54%',
  logistics: '50% 50%'
};

const serviceTeasers = [
  ['Company Websites', 'Clear pages for service businesses.'],
  ['Website Redesigns', 'Sharper structure for old sites.'],
  ['Custom Web Applications', 'Useful tools for internal work.']
];

function FeaturedWorkTile({ project, index }) {
  const { imageReveal } = useMotionVariants();
  const isPrimary = index === 0;

  return (
    <motion.button
      type="button"
      className={`group relative block min-h-[360px] w-full overflow-hidden text-left ${isPrimary ? 'lg:min-h-[620px]' : 'lg:mt-24 lg:min-h-[430px]'}`}
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
      <span className="absolute inset-0 bg-gradient-to-t from-base-900/95 via-base-900/20 to-transparent" />
      <span className="absolute inset-x-5 bottom-5 grid gap-2 sm:inset-x-8 sm:bottom-8">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">[{String(index + 1).padStart(2, '0')}] {project.category}</span>
        <strong className={`${isPrimary ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'} font-black leading-none tracking-tight text-ink`}>
          {project.title}
        </strong>
      </span>
    </motion.button>
  );
}

export default function HomePage() {
  const { reduceMotion, reveal, revealGroup, imageReveal } = useMotionVariants();
  const [featuredProject, ...supportingProjects] = portfolioDemos;
  const featuredProjects = portfolioDemos.slice(0, 2);

  return (
    <div className="overflow-hidden bg-base-900 text-ink">
      <Section
        className="relative bg-[radial-gradient(circle_at_70%_20%,rgba(45,212,224,0.12),transparent_34%),linear-gradient(180deg,#061528_0%,#0B1D33_100%)] px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
        containerClassName="studio-container"
        aria-labelledby="home-hero-title"
      >
        <motion.div
          className="grid gap-12 lg:grid-cols-[0.9fr_0.74fr] lg:items-center"
          initial="hidden"
          animate="visible"
          variants={revealGroup}
        >
          <div>
            <PageHero
              as={motion.div}
              variant="home"
              withSection={false}
              eyebrow="YalaByte web design and development"
              title="Websites with a clear point of view."
              text="YalaByte plans, designs, and builds websites and digital tools for service businesses that need sharper positioning, cleaner user journeys, and reliable launch support."
              className=""
              titleClassName="max-w-5xl"
              variants={reveal}
              actions={[
                <Button
                  key="start"
                  motionEnabled
                  variant="primary"
                  onClick={() => navigateTo('/contact')}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start a project
                </Button>,
                <Button
                  key="portfolio"
                  motionEnabled
                  variant="secondary"
                  onClick={() => navigateTo('/portfolio')}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View portfolio
                </Button>
              ]}
            />

            <motion.dl className="mt-10 grid overflow-hidden rounded-card border border-border-subtle bg-base-700 sm:grid-cols-3" variants={revealGroup} aria-label="YalaByte core work">
              {heroNotes.map(([term, description]) => (
                <motion.div key={term} variants={reveal} className="border-border-subtle p-5 sm:border-l first:sm:border-l-0">
                  <dt className="text-sm font-black text-ink">{term}</dt>
                  <dd className="mt-2 text-sm leading-6 text-ink-muted">{description}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          <motion.div className="grid gap-4" variants={reveal}>
            <motion.button
              type="button"
              className="group relative min-h-[520px] overflow-hidden rounded-card border border-border bg-base-700 text-left"
              onClick={() => navigateTo(`/portfolio/${featuredProject.slug}`)}
              aria-label={`Open ${featuredProject.title}`}
              variants={imageReveal}
              whileHover={reduceMotion ? {} : { y: -8 }}
            >
              <img src={featuredProject.image} alt={`${featuredProject.title} website preview`} loading="eager" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" style={{ objectPosition: imagePositions[featuredProject.slug] || '50% 50%' }} />
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute inset-x-6 bottom-6 grid gap-2 text-ink">
                <small className="text-xs font-black uppercase tracking-[0.18em] text-ink-muted">{featuredProject.category}</small>
                <strong className="text-3xl font-black tracking-tight">{featuredProject.title}</strong>
              </span>
            </motion.button>

            <CardGrid className="grid gap-4 sm:grid-cols-2" aria-label="More website examples">
              {supportingProjects.map((project) => (
                <motion.button
                  type="button"
                  key={project.slug}
                  className="group relative min-h-40 overflow-hidden rounded-card border border-border-subtle bg-base-700 text-left"
                  onClick={() => navigateTo(`/portfolio/${project.slug}`)}
                  aria-label={`Open ${project.title}`}
                  variants={reveal}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <img src={project.image} alt={`${project.title} website preview`} loading="eager" className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105" style={{ objectPosition: imagePositions[project.slug] || '50% 50%' }} />
                  <span className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/10" />
                  <span className="absolute inset-x-4 bottom-4 grid gap-1 text-ink">
                    <small className="text-xs font-black uppercase tracking-[0.14em] text-ink-muted">{project.category}</small>
                    <strong className="text-base font-black">{project.title}</strong>
                  </span>
                </motion.button>
              ))}
            </CardGrid>
          </motion.div>
        </motion.div>
      </Section>

      <MotionSection className="border-y border-border-subtle bg-base-800" aria-label="YalaByte project metrics">
        <div className="studio-container grid sm:grid-cols-3">
          {homeStats.map(([value, label]) => (
            <div key={label} className="border-border-subtle px-6 py-7 sm:border-l sm:last:border-r">
              <strong className="text-5xl font-black tracking-[-0.06em] text-ink">{value}</strong>
              <span className="ml-4 inline-block max-w-44 align-baseline text-sm font-bold leading-5 text-ink-muted">{label}</span>
            </div>
          ))}
        </div>
      </MotionSection>

      <Section variant="white" aria-labelledby="selected-work-title">
        <motion.div
          className="grid gap-8 lg:grid-cols-[0.82fr_0.52fr] lg:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
          variants={revealGroup}
        >
          <PageHero
            as={motion.div}
            variant="section"
            withSection={false}
            eyebrow="Selected work"
            title="Demo websites with structure, not just screens."
            titleClassName="text-headline"
            className="mx-0 max-w-4xl text-left"
            variants={reveal}
          />
          <motion.button
            type="button"
            variants={reveal}
            className="justify-self-start border-b border-accent pb-1 text-sm font-black text-accent transition hover:border-accent-hover hover:text-accent-hover lg:justify-self-end"
            onClick={() => navigateTo('/portfolio')}
          >
            View full portfolio →
          </motion.button>
        </motion.div>

        <CardGrid className="mt-14 grid gap-5 lg:grid-cols-[1.08fr_0.72fr] lg:items-start">
          {featuredProjects.map((project, index) => (
            <FeaturedWorkTile key={project.slug} project={project} index={index} />
          ))}
        </CardGrid>
      </Section>

      <MotionSection className="bg-base-800 px-5 py-16 text-ink sm:px-6 lg:px-8 lg:py-24" aria-labelledby="positioning-title">
        <div className="studio-container grid gap-10 lg:grid-cols-[0.72fr_0.9fr]">
          <PageHero
            variant="sectionLight"
            withSection={false}
            eyebrow="Positioning"
            title="Good websites are built from decisions, not decoration."
            titleClassName="mt-4 text-headline"
            className="mx-0 max-w-3xl text-left"
          />
          <div>
            <p className="text-base leading-8 text-ink-muted">
              We make the important choices visible: what the business offers, who the page is for, what visitors need to understand, and what should happen next. Then we design and build around those decisions.
            </p>
            <Button variant="secondary" className="mt-8" onClick={() => navigateTo('/about')}>
              Learn about our approach →
            </Button>
          </div>
        </div>
      </MotionSection>

      <Section variant="slate" aria-labelledby="services-title">
        <div className="grid gap-12 lg:grid-cols-[0.56fr_0.9fr] lg:items-start">
          <PageHero
            variant="section"
            withSection={false}
            eyebrow="Services"
            title="Three ways we usually help first."
            titleClassName="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl"
            className="mx-0 max-w-xl text-left"
          />

          <motion.div
            className="border-t border-border-subtle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.24 }}
            variants={revealGroup}
          >
            {serviceTeasers.map(([title, line], index) => (
              <motion.button
                key={title}
                type="button"
                className="grid w-full gap-4 border-b border-border-subtle py-7 text-left transition hover:border-accent sm:grid-cols-[96px_1fr]"
                onClick={() => navigateTo('/services')}
                variants={reveal}
                transition={{ delay: reduceMotion ? 0 : index * 0.04 }}
              >
                <span className="font-mono text-sm text-accent">[{String(index + 1).padStart(2, '0')}]</span>
                <span>
                  <strong className="block text-2xl font-black tracking-tight text-ink">{title}</strong>
                  <span className="mt-2 block text-sm leading-6 text-ink-muted">{line}</span>
                </span>
              </motion.button>
            ))}

            <button
              type="button"
              className="mt-8 border-b border-accent pb-1 text-sm font-black text-accent transition hover:border-accent-hover hover:text-accent-hover"
              onClick={() => navigateTo('/services')}
            >
              See all services →
            </button>
          </motion.div>
        </div>
      </Section>

      <CTASection
        eyebrow="Start a project"
        title="Have a website idea or an old site that needs careful redesign?"
        text="Tell us what exists, what needs to change, and what the website should help your business do next."
        buttonText="Start the conversation"
      />
    </div>
  );
}
