import { motion, useReducedMotion } from 'framer-motion';
import { navigateTo } from '../utils/routes.js';
import { portfolioDemos } from '../data/portfolioDemos.js';
import { services, processSteps } from '../data/siteData.js';

const principles = [
  {
    title: 'Clear thinking before decoration',
    text: 'We start with the offer, audience, page structure, and actions the website needs to support.'
  },
  {
    title: 'Design and frontend in the same conversation',
    text: 'Layouts are shaped with responsiveness, performance, content, and maintainability in mind from the start.'
  },
  {
    title: 'Launch work that remains useful',
    text: 'The finished site should be easy to navigate, easy to explain, and practical to improve after launch.'
  }
];

const serviceGroups = [
  {
    label: 'Planning',
    items: ['Discovery', 'Page architecture', 'Content hierarchy']
  },
  {
    label: 'Design',
    items: ['Interface direction', 'Responsive layouts', 'Visual systems']
  },
  {
    label: 'Build',
    items: ['Frontend development', 'Forms and portals', 'Launch support']
  }
];

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

function useMotionVariants() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const revealGroup = {
    hidden: {},
    visible: {
      transition: reduceMotion ? {} : { staggerChildren: 0.09, delayChildren: 0.08 }
    }
  };

  const imageReveal = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
    visible: {
      opacity: 1,
      clipPath: 'inset(0 0 0% 0)',
      transition: { duration: 0.86, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return { reduceMotion, reveal, revealGroup, imageReveal };
}

function MotionSection({ children, className = '', ...props }) {
  const { reveal } = useMotionVariants();

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: '0px 0px -80px 0px' }}
      variants={reveal}
      {...props}
    >
      {children}
    </motion.section>
  );
}

function ProjectVisual({ project, index, featured = false }) {
  const { imageReveal } = useMotionVariants();

  return (
    <motion.button
      type="button"
      className={`yb-showcase-card__media ${featured ? 'is-featured' : ''}`}
      onClick={() => navigateTo(`/portfolio/${project.slug}`)}
      aria-label={`Open ${project.title}`}
      variants={imageReveal}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.99 }}
    >
      <img src={project.image} alt={`${project.title} website preview`} loading={index === 0 ? 'eager' : 'lazy'} />
      <span>{project.category}</span>
    </motion.button>
  );
}

export default function HomePage() {
  const { reduceMotion, reveal, revealGroup, imageReveal } = useMotionVariants();
  const [featuredProject, ...supportingProjects] = portfolioDemos;

  return (
    <div className="yb-home yb-home-premium">
      <section className="yb-premium-hero" aria-labelledby="home-hero-title">
        <motion.div
          className="yb-shell yb-premium-hero__grid"
          initial="hidden"
          animate="visible"
          variants={revealGroup}
        >
          <motion.div className="yb-premium-hero__copy" variants={reveal}>
            <p className="yb-kicker">YalaByte web design and development</p>
            <h1 id="home-hero-title">Websites with a clear point of view.</h1>
            <p>
              YalaByte plans, designs, and builds websites and digital tools for service businesses that need sharper positioning, cleaner user journeys, and reliable launch support.
            </p>
            <div className="yb-actions" aria-label="Primary actions">
              <motion.button
                type="button"
                className="yb-button yb-button--dark"
                onClick={() => navigateTo('/contact')}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a project
              </motion.button>
              <motion.button
                type="button"
                className="yb-button yb-button--quiet"
                onClick={() => navigateTo('/portfolio')}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View portfolio
              </motion.button>
            </div>
          </motion.div>

          <motion.div className="yb-premium-hero__visual" variants={reveal}>
            <motion.button
              type="button"
              className="yb-hero-feature"
              onClick={() => navigateTo(`/portfolio/${featuredProject.slug}`)}
              aria-label={`Open ${featuredProject.title}`}
              variants={imageReveal}
              whileHover={reduceMotion ? {} : { y: -8 }}
            >
              <img src={featuredProject.image} alt={`${featuredProject.title} website preview`} loading="eager" />
              <span>
                <small>{featuredProject.category}</small>
                <strong>{featuredProject.title}</strong>
              </span>
            </motion.button>

            <div className="yb-hero-sidecars" aria-label="More website examples">
              {supportingProjects.map((project, index) => (
                <motion.button
                  type="button"
                  key={project.slug}
                  onClick={() => navigateTo(`/portfolio/${project.slug}`)}
                  aria-label={`Open ${project.title}`}
                  variants={reveal}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <img src={project.image} alt={`${project.title} website preview`} loading="eager" />
                  <span>
                    <small>{project.category}</small>
                    <strong>{project.title}</strong>
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.dl className="yb-premium-hero__notes" variants={revealGroup} aria-label="YalaByte core work">
            {heroNotes.map(([term, description]) => (
              <motion.div key={term} variants={reveal}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>
      </section>

      <MotionSection className="yb-home-proof" aria-label="YalaByte project metrics">
        <div className="yb-shell yb-home-proof__grid">
          {homeStats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </MotionSection>

      <section className="yb-showcase" aria-labelledby="selected-work-title">
        <div className="yb-shell">
          <motion.div
            className="yb-showcase__intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.28 }}
            variants={revealGroup}
          >
            <motion.div variants={reveal}>
              <p className="yb-kicker">Selected work</p>
              <h2 id="selected-work-title">Demo websites with structure, not just screens.</h2>
            </motion.div>
            <motion.p variants={reveal}>
              Each sample shows how YalaByte can shape navigation, service pages, content hierarchy, and inquiry flow around a specific business type.
            </motion.p>
          </motion.div>

          <div className="yb-showcase__grid">
            {portfolioDemos.map((project, index) => (
              <motion.article
                className={`yb-showcase-card ${index === 0 ? 'is-featured' : ''}`}
                key={project.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={revealGroup}
              >
                <ProjectVisual project={project} index={index} featured={index === 0} />
                <motion.div className="yb-showcase-card__body" variants={reveal}>
                  <span>{String(index + 1).padStart(2, '0')} / {project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="yb-showcase-card__features">
                    {project.features.slice(0, index === 0 ? 4 : 3).map((feature) => (
                      <small key={feature}>{feature}</small>
                    ))}
                  </div>
                  <button type="button" onClick={() => navigateTo(`/portfolio/${project.slug}`)}>
                    View project
                  </button>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <MotionSection className="yb-section yb-positioning" aria-labelledby="positioning-title">
        <div className="yb-shell yb-positioning__grid">
          <div>
            <p className="yb-kicker">Positioning</p>
            <h2 id="positioning-title">Good websites are built from decisions, not decoration.</h2>
          </div>
          <div className="yb-positioning__content">
            <p>
              We make the important choices visible: what the business offers, who the page is for, what visitors need to understand, and what should happen next. Then we design and build around those decisions.
            </p>
            <div className="yb-principles">
              {principles.map((principle) => (
                <article key={principle.title}>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <section className="yb-section yb-services" aria-labelledby="services-title">
        <div className="yb-shell">
          <motion.div
            className="yb-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <p className="yb-kicker">Services</p>
            <h2 id="services-title">A focused set of website and digital support services.</h2>
          </motion.div>

          <div className="yb-service-list">
            {services.slice(0, 6).map((service, index) => (
              <motion.article
                className="yb-service-row"
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.24 }}
                variants={reveal}
                transition={{ delay: reduceMotion ? 0 : index * 0.04 }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <strong>{service.outcome}</strong>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="yb-service-groups"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            variants={revealGroup}
          >
            {serviceGroups.map((group) => (
              <motion.article key={group.label} variants={reveal}>
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <MotionSection className="yb-section yb-process" aria-labelledby="process-title">
        <div className="yb-shell yb-process__grid">
          <div className="yb-process__intro">
            <p className="yb-kicker">Process</p>
            <h2 id="process-title">A calm path from first conversation to launch.</h2>
            <p>
              The process stays simple enough to follow, with enough structure to keep decisions, design, development, and launch moving in the same direction.
            </p>
          </div>
          <div className="yb-process__steps">
            {processSteps.map((step) => (
              <article className="yb-process-step" key={step.title}>
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="yb-section yb-approach" aria-labelledby="approach-title">
        <div className="yb-shell yb-approach__grid">
          <div>
            <p className="yb-kicker">Approach</p>
            <h2 id="approach-title">Designed for the visitor. Built for the team that has to maintain it.</h2>
          </div>
          <div className="yb-approach__list">
            {[
              'Responsive layouts are considered early, not patched late.',
              'Performance, metadata, and content structure are part of the build.',
              'Forms, support paths, and integrations keep their real behavior.',
              'Support after launch is treated as part of the website, not an afterthought.'
            ].map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="yb-contact-panel" aria-labelledby="home-contact-title">
        <div className="yb-shell yb-contact-panel__grid">
          <div>
            <p className="yb-kicker">Start a project</p>
            <h2 id="home-contact-title">Have a website idea or an old site that needs careful redesign?</h2>
          </div>
          <div>
            <p>
              Tell us what exists, what needs to change, and what the website should help your business do next.
            </p>
            <motion.button
              type="button"
              className="yb-button yb-button--light"
              onClick={() => navigateTo('/contact')}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start the conversation
            </motion.button>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
