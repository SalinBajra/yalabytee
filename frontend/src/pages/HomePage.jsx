import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';
import CardGrid from '../components/CardGrid.jsx';
import ContentCard from '../components/ContentCard.jsx';
import CTASection from '../components/CTASection.jsx';
import MotionSection, { useMotionVariants } from '../components/MotionSection.jsx';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import { navigateTo } from '../utils/routes.js';
import { portfolioDemos } from '../data/portfolioDemos.js';
import { services } from '../data/siteData.js';

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

function ProjectVisual({ project, index, featured = false }) {
  const { imageReveal } = useMotionVariants();

  return (
    <motion.button
      type="button"
      className={`group relative min-h-[300px] overflow-hidden rounded-[1.35rem] border border-slate-200 bg-slate-200 text-left shadow-sm ${featured ? 'lg:min-h-[470px]' : ''}`}
      onClick={() => navigateTo(`/portfolio/${project.slug}`)}
      aria-label={`Open ${project.title}`}
      variants={imageReveal}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.99 }}
    >
      <img
        src={project.image}
        alt={`${project.title} website preview`}
        loading={index === 0 ? 'eager' : 'lazy'}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        style={{ objectPosition: imagePositions[project.slug] || '50% 50%' }}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
      <span className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/25 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur">
        {project.category}
      </span>
    </motion.button>
  );
}

export default function HomePage() {
  const { reduceMotion, reveal, revealGroup, imageReveal } = useMotionVariants();
  const [featuredProject, ...supportingProjects] = portfolioDemos;
  const featuredProjects = portfolioDemos.slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <div className="overflow-hidden bg-slate-50 text-slate-950">
      <Section
        className="relative bg-[linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[length:96px_96px] px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
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

            <motion.dl className="mt-10 grid border border-slate-200 bg-slate-200 sm:grid-cols-3" variants={revealGroup} aria-label="YalaByte core work">
              {heroNotes.map(([term, description]) => (
                <motion.div key={term} variants={reveal} className="bg-white/80 p-5">
                  <dt className="text-sm font-black text-slate-950">{term}</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-600">{description}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          <motion.div className="grid gap-4" variants={reveal}>
            <motion.button
              type="button"
              className="group relative min-h-[520px] overflow-hidden rounded-[1.35rem] border border-slate-200 bg-slate-200 text-left shadow-2xl shadow-slate-950/15"
              onClick={() => navigateTo(`/portfolio/${featuredProject.slug}`)}
              aria-label={`Open ${featuredProject.title}`}
              variants={imageReveal}
              whileHover={reduceMotion ? {} : { y: -8 }}
            >
              <img src={featuredProject.image} alt={`${featuredProject.title} website preview`} loading="eager" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" style={{ objectPosition: imagePositions[featuredProject.slug] || '50% 50%' }} />
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute inset-x-6 bottom-6 grid gap-2 text-white">
                <small className="text-xs font-black uppercase tracking-[0.18em] text-white/70">{featuredProject.category}</small>
                <strong className="text-3xl font-black tracking-tight">{featuredProject.title}</strong>
              </span>
            </motion.button>

            <CardGrid className="grid gap-4 sm:grid-cols-2" aria-label="More website examples">
              {supportingProjects.map((project) => (
                <motion.button
                  type="button"
                  key={project.slug}
                  className="group relative min-h-40 overflow-hidden rounded-[1.1rem] border border-slate-200 bg-slate-900 text-left"
                  onClick={() => navigateTo(`/portfolio/${project.slug}`)}
                  aria-label={`Open ${project.title}`}
                  variants={reveal}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <img src={project.image} alt={`${project.title} website preview`} loading="eager" className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105" style={{ objectPosition: imagePositions[project.slug] || '50% 50%' }} />
                  <span className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/10" />
                  <span className="absolute inset-x-4 bottom-4 grid gap-1 text-white">
                    <small className="text-xs font-black uppercase tracking-[0.14em] text-white/65">{project.category}</small>
                    <strong className="text-base font-black">{project.title}</strong>
                  </span>
                </motion.button>
              ))}
            </CardGrid>
          </motion.div>
        </motion.div>
      </Section>

      <MotionSection className="border-y border-slate-200 bg-white/70" aria-label="YalaByte project metrics">
        <div className="studio-container grid sm:grid-cols-3">
          {homeStats.map(([value, label]) => (
            <div key={label} className="border-slate-200 px-6 py-7 sm:border-l sm:last:border-r">
              <strong className="text-5xl font-black tracking-[-0.06em] text-slate-950">{value}</strong>
              <span className="ml-4 inline-block max-w-44 align-baseline text-sm font-bold leading-5 text-slate-600">{label}</span>
            </div>
          ))}
        </div>
      </MotionSection>

      <Section variant="white" aria-labelledby="selected-work-title">
        <motion.div
          className="grid gap-8 lg:grid-cols-[0.95fr_0.52fr] lg:items-end"
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
            titleClassName="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
            className="mx-0 max-w-4xl text-left"
            variants={reveal}
          />
          <motion.p variants={reveal} className="text-base leading-8 text-slate-600">
            Each sample shows how YalaByte can shape navigation, service pages, content hierarchy, and inquiry flow around a specific business type.
          </motion.p>
        </motion.div>

        <CardGrid className="mt-14 grid gap-8">
          {featuredProjects.map((project, index) => (
            <ContentCard
              as={motion.article}
              className="grid overflow-hidden border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.86fr_0.48fr] even:lg:grid-cols-[0.48fr_0.86fr]"
              key={project.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={revealGroup}
            >
              <ProjectVisual project={project} index={index} featured={index === 0} />
              <motion.div className="flex flex-col justify-center p-7 lg:p-12 even:lg:order-first" variants={reveal}>
                <span className="text-xs font-black uppercase tracking-[0.18em] text-cyanbrand-600">{String(index + 1).padStart(2, '0')} / {project.category}</span>
                <h3 className="mt-5 text-4xl font-black leading-none tracking-tight text-slate-950 sm:text-5xl">{project.title}</h3>
                <p className="mt-5 text-base leading-8 text-slate-600">{project.summary}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.features.slice(0, index === 0 ? 4 : 3).map((feature) => (
                    <small key={feature} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700">{feature}</small>
                  ))}
                </div>
                <Button className="mt-8 self-start" variant="primary" onClick={() => navigateTo(`/portfolio/${project.slug}`)}>
                  View project
                </Button>
              </motion.div>
            </ContentCard>
          ))}
        </CardGrid>

        <div className="mt-10 flex justify-center">
          <Button variant="secondary" onClick={() => navigateTo('/portfolio')}>
            View full portfolio →
          </Button>
        </div>
      </Section>

      <MotionSection className="bg-navy-950 px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24" aria-labelledby="positioning-title">
        <div className="studio-container grid gap-10 lg:grid-cols-[0.72fr_0.9fr]">
          <PageHero
            variant="sectionLight"
            withSection={false}
            eyebrow="Positioning"
            title="Good websites are built from decisions, not decoration."
            titleClassName="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl"
            className="mx-0 max-w-3xl text-left"
          />
          <div>
            <p className="text-base leading-8 text-slate-300">
              We make the important choices visible: what the business offers, who the page is for, what visitors need to understand, and what should happen next. Then we design and build around those decisions.
            </p>
            <Button variant="secondary" className="mt-8 !border-white/20 !bg-white/[0.04] !text-white hover:!border-cyanbrand-400 hover:!bg-white/[0.08]" onClick={() => navigateTo('/about')}>
              Learn about our approach →
            </Button>
          </div>
        </div>
      </MotionSection>

      <Section variant="slate" aria-labelledby="services-title">
        <PageHero
          variant="section"
          withSection={false}
          eyebrow="Services"
          title="Focused website services for the parts that matter first."
          titleClassName="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl"
          text="A short look at the work YalaByte handles most often. The complete service breakdown lives on the services page."
        />

        <CardGrid className="mt-12 grid gap-5 md:grid-cols-3">
          {featuredServices.map((service, index) => (
            <ContentCard
              as={motion.article}
              className="rounded-[1.4rem] border border-slate-200 bg-white p-7 shadow-sm"
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.24 }}
              variants={reveal}
              transition={{ delay: reduceMotion ? 0 : index * 0.04 }}
            >
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl bg-cyanbrand-100 text-sm font-black text-cyanbrand-800">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-7 text-2xl font-black tracking-tight text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
            </ContentCard>
          ))}
        </CardGrid>

        <div className="mt-10 flex justify-center">
          <Button variant="secondary" onClick={() => navigateTo('/services')}>
            See all services →
          </Button>
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
