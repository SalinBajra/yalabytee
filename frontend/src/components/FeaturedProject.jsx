import { navigateTo } from '../utils/routes.js';
import { portfolioDemos } from '../data/portfolioDemos.js';

export default function FeaturedProject({ index = 0 }) {
  const project = portfolioDemos[index] || portfolioDemos[0];

  return (
    <section className="featured-project" aria-labelledby="featured-heading">
      <div className="studio-container featured-project__grid">
        <div className="featured-project__visual">
          <button className="featured-project__link" onClick={() => navigateTo(`/portfolio/${project.slug}`)}>
            <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
          </button>
        </div>
        <div className="featured-project__copy">
          <p className="kicker">Featured project</p>
          <h2 id="featured-heading">{project.title}</h2>
          <p className="lede">{project.summary}</p>
          <p className="meta">{project.category} · {project.features.slice(0,2).join(' / ')}</p>
          <div className="featured-actions">
            <button onClick={() => navigateTo(`/portfolio/${project.slug}`)} className="studio-button studio-button--outline">View demo</button>
            <button onClick={() => navigateTo('/portfolio')} className="studio-button">More work</button>
          </div>
        </div>
      </div>
    </section>
  );
}
