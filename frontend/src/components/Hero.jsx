import { navigateTo } from '../utils/routes.js';

const capabilities = ['Digital products', 'Web platforms', 'AI-ready systems'];

function SystemVisual() {
  return (
    <div className="system-visual" aria-hidden="true">
      <div className="system-aura" />
      <div className="system-orbit system-orbit--outer">
        <span className="orbit-node orbit-node--one" />
        <span className="orbit-node orbit-node--two" />
      </div>
      <div className="system-orbit system-orbit--middle">
        <span className="orbit-label">YB / 26</span>
      </div>
      <div className="system-orbit system-orbit--inner" />
      <div className="system-core">
        <span className="system-core__glow" />
        <span className="system-core__mark">YB</span>
      </div>
      <div className="system-sweep" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero-shell">
      <div className="hero-ambient" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow--violet" />
        <div className="hero-glow hero-glow--cyan" />
        <div className="hero-noise" />
      </div>

      <div className="hero-system-wrap">
        <SystemVisual />
      </div>

      <div className="hero-coordinates hero-coordinates--top" aria-hidden="true">
        <span>27.7172° N</span><span>85.3240° E</span>
      </div>

      <div className="hero-layout">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="hero-live-dot" />
            Independent digital studio · Nepal / Worldwide
          </div>

          <h1 className="hero-title">
            We engineer
            <span>digital momentum.</span>
          </h1>

          <p className="hero-intro">
            Strategy, design, and development for ambitious companies ready to move from a good idea to a category-defining digital product.
          </p>

          <div className="hero-actions">
            <button onClick={() => navigateTo('/contact')} className="hero-button hero-button--primary">
              Start a project <span aria-hidden="true">↗</span>
            </button>
            <button onClick={() => navigateTo('/portfolio')} className="hero-button hero-button--secondary">
              Explore our work <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="hero-bottom">
          <p className="hero-bottom__label">Built for what’s next</p>
          <div className="hero-capabilities">
            {capabilities.map((item, index) => (
              <span key={item}><b>0{index + 1}</b>{item}</span>
            ))}
          </div>
          <a href="#capabilities" className="hero-scroll" onClick={(event) => {
            event.preventDefault();
            document.querySelector('#capabilities')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Scroll to discover <i aria-hidden="true">↓</i>
          </a>
        </div>
      </div>
    </section>
  );
}
