import { useRef } from 'react';
import { navigateTo } from '../utils/routes.js';

const heroServices = ['Websites', 'SEO', 'UI/UX', 'Support'];

export default function Hero() {
  const visualRef = useRef(null);

  const handlePointerMove = (event) => {
    if (!visualRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    visualRef.current.style.setProperty('--parallax-x', `${x * 14}px`);
    visualRef.current.style.setProperty('--parallax-y', `${y * 10}px`);
  };

  const resetPointer = () => {
    visualRef.current?.style.setProperty('--parallax-x', '0px');
    visualRef.current?.style.setProperty('--parallax-y', '0px');
  };

  return (
    <section
      id="home"
      className="studio-hero"
      aria-labelledby="home-hero-title"
      aria-describedby="home-hero-description"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="studio-hero__scene" aria-hidden="true">
        <div className="studio-hero__grid" />
        <div className="studio-hero__beam" />
        <div className="studio-hero__particles">
          {Array.from({ length: 10 }, (_, index) => <i key={index} />)}
        </div>
      </div>

      <div className="studio-container">
        <div ref={visualRef} className="studio-hero__visual studio-visual studio-visual--mockup" aria-hidden="true">
          <div className="studio-visual__orb studio-visual__orb--cyan" />
          <div className="studio-visual__orb studio-visual__orb--violet" />
          <div className="studio-mockup-stage">
            <div className="studio-browser-card studio-browser-card--main">
              <div className="studio-browser-card__bar">
                <span />
                <span />
                <span />
                <i>yalabyte.com</i>
              </div>
              <div className="studio-browser-card__hero">
                <div>
                  <small>Premium website system</small>
                  <strong>Launch-ready digital presence.</strong>
                </div>
                <b>98</b>
              </div>
              <div className="studio-browser-card__grid">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="studio-browser-card studio-browser-card--panel">
              <small>Conversion Flow</small>
              <strong>+42%</strong>
              <span>Clear content, faster inquiry path, mobile-first sections.</span>
            </div>

            <div className="studio-browser-card studio-browser-card--stack">
              {heroServices.map((item, index) => (
                <p key={item} style={{ '--item-delay': `${index * 120}ms` }}>
                  <span>{`0${index + 1}`}</span>
                  {item}
                </p>
              ))}
            </div>

            <div className="studio-browser-card studio-browser-card--metric">
              <span>Live support</span>
              <strong>Build. Launch. Improve.</strong>
            </div>
          </div>
        </div>

        <div className="studio-hero__inner">
          <div className="studio-hero__copy">
            <p className="studio-hero__eyebrow"><span /> Digital website systems for service brands</p>
            <h1 id="home-hero-title" className="studio-hero__title">
              Websites that feel premium and convert with momentum.
            </h1>
            <div id="home-hero-description" className="studio-hero__intro">
              <p>
                Launch a polished site with intentional structure, clear messaging, and dependable support that helps your business grow.
              </p>
              <div className="studio-hero__chips">
                {heroServices.map((item) => (
                  <span key={item} className="studio-hero__chip">{item}</span>
                ))}
              </div>
            </div>
            <div className="studio-hero__actions">
              <button type="button" onClick={() => navigateTo('/portfolio')} className="studio-button studio-button--outline">
                View work
              </button>
              <button type="button" onClick={() => navigateTo('/contact')} className="studio-button studio-button--solid">
                Start project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
