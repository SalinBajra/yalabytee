import { useEffect } from 'react';
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

export default function HomePage() {
  useEffect(() => {
    const elements = document.querySelectorAll('.yb-reveal');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -64px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const [featuredProject, ...supportingProjects] = portfolioDemos;

  return (
    <div className="yb-home">
      <section className="yb-hero" aria-labelledby="home-hero-title">
        <div className="yb-shell yb-hero__grid">
          <div className="yb-hero__copy yb-reveal">
            <p className="yb-kicker">YalaByte web design and development</p>
            <h1 id="home-hero-title">Custom websites with the clarity of good editorial design.</h1>
            <p>
              YalaByte plans, designs, and builds websites and digital tools for service businesses that need a sharper online presence and reliable launch support.
            </p>
            <div className="yb-actions" aria-label="Primary actions">
              <button type="button" className="yb-button yb-button--dark" onClick={() => navigateTo('/contact')}>
                Start a project
              </button>
              <button type="button" className="yb-button yb-button--quiet" onClick={() => navigateTo('/portfolio')}>
                View portfolio
              </button>
            </div>
          </div>

          <div className="yb-hero__work yb-reveal" style={{ '--reveal-delay': '120ms' }} aria-label="Featured YalaByte website examples">
            <button type="button" className="yb-work-stack__primary" onClick={() => navigateTo(`/portfolio/${featuredProject.slug}`)}>
              <img src={featuredProject.image} alt={`${featuredProject.title} website preview`} loading="eager" />
              <span>
                <small>{featuredProject.category}</small>
                <strong>{featuredProject.title}</strong>
              </span>
            </button>
            <button type="button" className="yb-work-stack__secondary" onClick={() => navigateTo(`/portfolio/${supportingProjects[0].slug}`)}>
              <img src={supportingProjects[0].image} alt={`${supportingProjects[0].title} website preview`} loading="eager" />
            </button>
            <button type="button" className="yb-work-stack__tertiary" onClick={() => navigateTo(`/portfolio/${supportingProjects[1].slug}`)}>
              <img src={supportingProjects[1].image} alt={`${supportingProjects[1].title} website preview`} loading="eager" />
            </button>
          </div>
        </div>
      </section>

      <section className="yb-section yb-work" aria-labelledby="selected-work-title">
        <div className="yb-shell">
          <div className="yb-section-heading yb-reveal">
            <p className="yb-kicker">Selected work</p>
            <h2 id="selected-work-title">Portfolio-led websites for real business categories.</h2>
            <p>
              These demos use existing YalaByte project assets to show how content, page flow, and visual tone can change by industry.
            </p>
          </div>

          <div className="yb-featured-work yb-reveal">
            <button type="button" className="yb-featured-work__image" onClick={() => navigateTo(`/portfolio/${featuredProject.slug}`)}>
              <img src={featuredProject.image} alt={`${featuredProject.title} homepage preview`} loading="lazy" />
            </button>
            <div className="yb-featured-work__content">
              <p className="yb-kicker">{featuredProject.category}</p>
              <h3>{featuredProject.headline}</h3>
              <p>{featuredProject.summary}</p>
              <ul aria-label={`${featuredProject.title} features`}>
                {featuredProject.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button type="button" className="yb-text-link" onClick={() => navigateTo(`/portfolio/${featuredProject.slug}`)}>
                Open project
              </button>
            </div>
          </div>

          <div className="yb-supporting-work">
            {supportingProjects.map((project, index) => (
              <article className="yb-work-row yb-reveal" key={project.slug} style={{ '--reveal-delay': `${index * 90}ms` }}>
                <button type="button" onClick={() => navigateTo(`/portfolio/${project.slug}`)}>
                  <img src={project.image} alt={`${project.title} website preview`} loading="lazy" />
                </button>
                <div>
                  <p className="yb-kicker">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <button type="button" className="yb-text-link" onClick={() => navigateTo(`/portfolio/${project.slug}`)}>
                    View demo
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="yb-section yb-positioning" aria-labelledby="positioning-title">
        <div className="yb-shell yb-positioning__grid">
          <div className="yb-reveal">
            <p className="yb-kicker">Positioning</p>
            <h2 id="positioning-title">Good websites are built from decisions, not decoration.</h2>
          </div>
          <div className="yb-positioning__content yb-reveal" style={{ '--reveal-delay': '100ms' }}>
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
      </section>

      <section className="yb-section yb-services" aria-labelledby="services-title">
        <div className="yb-shell">
          <div className="yb-section-heading yb-reveal">
            <p className="yb-kicker">Services</p>
            <h2 id="services-title">A focused set of website and digital support services.</h2>
          </div>

          <div className="yb-service-list">
            {services.slice(0, 6).map((service, index) => (
              <article className="yb-service-row yb-reveal" key={service.title} style={{ '--reveal-delay': `${index * 45}ms` }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <strong>{service.outcome}</strong>
              </article>
            ))}
          </div>

          <div className="yb-service-groups yb-reveal">
            {serviceGroups.map((group) => (
              <article key={group.label}>
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="yb-section yb-process" aria-labelledby="process-title">
        <div className="yb-shell yb-process__grid">
          <div className="yb-process__intro yb-reveal">
            <p className="yb-kicker">Process</p>
            <h2 id="process-title">A calm path from first conversation to launch.</h2>
            <p>
              The process stays simple enough to follow, with enough structure to keep decisions, design, development, and launch moving in the same direction.
            </p>
          </div>
          <div className="yb-process__steps">
            {processSteps.map((step, index) => (
              <article className="yb-process-step yb-reveal" key={step.title} style={{ '--reveal-delay': `${index * 65}ms` }}>
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="yb-section yb-approach" aria-labelledby="approach-title">
        <div className="yb-shell yb-approach__grid">
          <div className="yb-reveal">
            <p className="yb-kicker">Approach</p>
            <h2 id="approach-title">Designed for the visitor. Built for the team that has to maintain it.</h2>
          </div>
          <div className="yb-approach__list yb-reveal" style={{ '--reveal-delay': '100ms' }}>
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
      </section>

      <section className="yb-contact-panel" aria-labelledby="home-contact-title">
        <div className="yb-shell yb-contact-panel__grid yb-reveal">
          <div>
            <p className="yb-kicker">Start a project</p>
            <h2 id="home-contact-title">Have a website idea or an old site that needs careful redesign?</h2>
          </div>
          <div>
            <p>
              Tell us what exists, what needs to change, and what the website should help your business do next.
            </p>
            <button type="button" className="yb-button yb-button--light" onClick={() => navigateTo('/contact')}>
              Start the conversation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
