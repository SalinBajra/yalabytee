import { useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import { portfolioDemos } from '../data/portfolioDemos.js';
import { navigateTo } from '../utils/routes.js';

const services = [
  ['01', 'Website Development', 'Fast, responsive websites with polished pages, clear content structure, and reliable launch foundations.', 'Code'],
  ['02', 'SEO', 'Search-ready page architecture, metadata, performance basics, and content structure for better discovery.', 'Rank'],
  ['03', 'UI/UX Design', 'Thoughtful flows, refined interface systems, and mobile-first layouts that make action feel natural.', 'Flow'],
  ['04', 'Business Websites', 'Professional company websites that communicate credibility, services, and next steps clearly.', 'Brand'],
  ['05', 'Landing Pages', 'Focused pages for campaigns, offers, launches, and lead capture with strong calls to action.', 'Lead'],
  ['06', 'Maintenance Support', 'Ongoing updates, improvements, troubleshooting, and technical care after your website goes live.', 'Care']
];

const process = [
  ['01', 'Discover', 'We clarify the business, audience, content, and outcomes your website needs to deliver.'],
  ['02', 'Design', 'We shape the visual direction, page structure, and user experience around real content.'],
  ['03', 'Develop', 'We build a fast, responsive experience with clean implementation and careful quality control.'],
  ['04', 'Launch', 'We test, deploy, connect the essentials, and stay close after your website goes live.']
];

const stats = [
  ['4+', 'Core service areas'],
  ['100%', 'Responsive builds'],
  ['24/7', 'Inquiry-ready forms'],
  ['SEO', 'Launch foundations']
];

const trustPoints = [
  ['Strategy first', 'We clarify your audience, goals, pages, and conversion path before design moves too far.'],
  ['Clean execution', 'Your site is built with practical structure, responsive layouts, and performance-minded code.'],
  ['Long-term support', 'YalaByte stays close after launch for updates, refinements, and growth-focused improvements.']
];

export default function HomePage() {
  useEffect(() => {
    const elements = document.querySelectorAll('.home-reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -48px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />

      <section id="services" aria-labelledby="services-heading" className="studio-section studio-services studio-services--premium">
        <div className="studio-container">
          <div className="home-reveal studio-heading">
            <p>Services / 01</p>
            <h2 id="services-heading">Web experiences built with clarity, character, and purpose.</h2>
          </div>
          <div className="studio-service-grid">
            {services.map(([number, title, text, icon], index) => (
              <article key={title} className="home-reveal studio-service-card" style={{ '--reveal-delay': `${index * 65}ms` }}>
                <div className="studio-service-card__top">
                  <span>{number}</span>
                  <i aria-hidden="true">{icon}</i>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <b aria-hidden="true">↗</b>
              </article>
            ))}
          </div>
          <button type="button" className="home-reveal studio-text-link" onClick={() => navigateTo('/services')}>Explore all services <span>→</span></button>
        </div>
      </section>

      <section id="work" aria-labelledby="work-heading" className="studio-section studio-work studio-work--premium">
        <div className="studio-container">
          <div className="home-reveal studio-heading studio-heading--light">
            <p>Showcase / 02</p>
            <h2 id="work-heading">Website previews shaped for real industries and real conversion paths.</h2>
          </div>
          <div className="studio-showcase-grid">
            {portfolioDemos.map((project, index) => (
              <article key={project.slug} className="home-reveal studio-showcase-card" style={{ '--reveal-delay': `${index * 90}ms` }}>
                <button type="button" onClick={() => navigateTo(`/portfolio/${project.slug}`)}>
                  <span className="studio-showcase-card__screen">
                    <img src={project.image} alt={`${project.title} website preview`} loading="lazy" />
                    <i>{project.category}</i>
                  </span>
                  <span className="studio-showcase-card__meta">
                    <b>{project.title}</b>
                    <small>{project.features.slice(0, 2).join(' / ')}</small>
                  </span>
                </button>
              </article>
            ))}
          </div>
          <button type="button" className="home-reveal studio-text-link studio-text-link--light" onClick={() => navigateTo('/portfolio')}>View portfolio demos <span>→</span></button>
        </div>
      </section>

      <section id="process" aria-labelledby="process-heading" className="studio-section studio-process">
        <div className="studio-container studio-process__grid">
          <div className="home-reveal studio-heading studio-heading--compact">
            <p>Process / 03</p>
            <h2 id="process-heading">From first conversation to confident launch.</h2>
          </div>
          <div className="studio-process__steps">
            {process.map(([number, title, text], index) => (
              <article key={title} className="home-reveal studio-step" style={{ '--reveal-delay': `${index * 65}ms` }}>
                <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" aria-labelledby="why-heading" className="studio-section studio-why">
        <div className="studio-container">
          <div className="home-reveal studio-heading">
            <p>Why YalaByte / 04</p>
            <h2 id="why-heading">A trustworthy partner for websites that need to look sharp and work hard.</h2>
          </div>
          <div className="studio-stats">
            {stats.map(([value, label], index) => (
              <article key={label} className="home-reveal" style={{ '--reveal-delay': `${index * 70}ms` }}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
          <div className="studio-trust-grid">
            {trustPoints.map(([title, text], index) => (
              <article key={title} className="home-reveal studio-trust-card" style={{ '--reveal-delay': `${index * 80}ms` }}>
                <span>{`0${index + 1}`}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" aria-labelledby="about-heading" className="studio-about">
        <div className="studio-container home-reveal studio-about__grid">
          <p>About YalaByte / 05</p>
          <div>
            <h2 id="about-heading">Based in Nepal.<br />Built for everywhere.</h2>
            <p>YalaByte builds premium websites and web platforms for ambitious businesses—from Nepal to clients worldwide. We bring strategy, design, and development together to create digital work with lasting value.</p>
            <button type="button" className="studio-text-link studio-text-link--light" onClick={() => navigateTo('/about')}>Meet YalaByte <span>→</span></button>
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-heading" className="studio-contact-cta">
        <div className="studio-contact-cta__glow" aria-hidden="true" />
        <div className="studio-contact-cta__panel" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="studio-container home-reveal">
          <p>Have a project in mind?</p>
          <div>
            <h2 id="contact-heading">Ready to build<br />your website?</h2>
            <button type="button" onClick={() => navigateTo('/contact')}>Discuss a project <span>↗</span></button>
          </div>
        </div>
      </section>
    </>
  );
}
