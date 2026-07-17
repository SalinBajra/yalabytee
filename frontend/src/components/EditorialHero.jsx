import { useMemo } from 'react';
import { navigateTo } from '../utils/routes.js';
import { portfolioDemos } from '../data/portfolioDemos.js';

export default function EditorialHero() {
  const featured = useMemo(() => portfolioDemos[0], []);

  return (
    <header id="home" className="editorial-hero">
      <div className="studio-container editorial-hero__grid">
        <div className="editorial-hero__copy">
          <p className="editorial-eyebrow">Premium websites and product systems</p>
          <h1 className="editorial-title">We design and build websites that make offers clear and decisions easy.</h1>
          <p className="editorial-lead">From focused landing pages to full platform builds, YalaByte combines strategic structure with purposeful design so your site works for people and for business.</p>
          <div className="editorial-cta">
            <button type="button" className="studio-button studio-button--solid" onClick={() => navigateTo('/portfolio')}>View portfolio</button>
            <a href="/contact" onClick={(e) => { e.preventDefault(); navigateTo('/contact'); }} className="editorial-link">Start a project →</a>
          </div>
          <p className="editorial-note">Available for new projects — let's talk scope and timing.</p>
        </div>

        <div className="editorial-hero__visual" aria-hidden="true">
          <div className="editorial-frame">
            <img src={featured.image} alt={featured.title} className="editorial-featured-image" loading="lazy" />
            <div className="editorial-featured-meta">
              <span className="category">{featured.category}</span>
              <strong className="headline">{featured.title}</strong>
              <small className="features">{featured.features.slice(0, 3).join(' · ')}</small>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
