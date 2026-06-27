import { useRef } from 'react';
import { navigateTo } from '../utils/routes.js';

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
    <section id="home" className="studio-hero" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      <div className="studio-hero__scene" aria-hidden="true">
        <div className="studio-hero__grid" />
        <div className="studio-hero__beam" />
        <div className="studio-hero__particles">
          {Array.from({ length: 10 }, (_, index) => <i key={index} />)}
        </div>
      </div>

      <div ref={visualRef} className="studio-visual" aria-hidden="true">
        <div className="studio-visual__float">
          <div className="studio-visual__halo" />
          <img
            src="/images/yalabyte-hero-abstract-vortex.png"
            alt=""
            className="studio-visual__image"
            loading="eager"
            fetchPriority="high"
          />
          <div className="studio-visual__light" />
        </div>
      </div>

      <div className="studio-hero__fade" aria-hidden="true" />

      <div className="studio-hero__inner">
        <div className="studio-hero__copy">
          <h1 className="studio-hero__title">
            DESIGN.<br />BUILD.<br /><em>LAUNCH.</em>
          </h1>
          <div className="studio-hero__intro-row">
            <p>Premium business websites and custom web applications with clear structure, polished design, and reliable launch support.</p>
            <div className="studio-hero__actions">
              <button onClick={() => navigateTo('/portfolio')} className="studio-button studio-button--outline">View Work</button>
              <button onClick={() => navigateTo('/contact')} className="studio-button studio-button--solid">Start Project</button>
            </div>
          </div>
        </div>

        <div />
      </div>
    </section>
  );
}
