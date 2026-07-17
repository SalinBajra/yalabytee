import { portfolioDemos } from '../data/portfolioDemos.js';
import { navigateTo } from '../utils/routes.js';
import DemoLauncher from './DemoLauncher.jsx';

function PortfolioProject({ project, index }) {
  const isFlipped = index % 2 === 1;

  return (
    <article className={`yb-portfolio-project ${isFlipped ? 'is-flipped' : ''}`}>
      <div className="yb-portfolio-project__media">
        <button type="button" onClick={() => navigateTo(`/portfolio/${project.slug}`)} aria-label={`Open ${project.title} project`}>
          <img src={project.image} alt={`${project.title} website preview`} loading="lazy" />
        </button>
      </div>

      <div className="yb-portfolio-project__copy">
        <div className="yb-portfolio-project__meta">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <p>{project.category}</p>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <div className="yb-portfolio-features" aria-label={`${project.title} features`}>
          {project.features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>

        <div className="yb-portfolio-actions">
          <DemoLauncher project={project} className="yb-portfolio-link yb-portfolio-link--primary">
            View demo
          </DemoLauncher>
          <button type="button" className="yb-portfolio-link" onClick={() => navigateTo('/contact')}>
            Request similar
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio({ showIntro = true }) {
  return (
    <section className={`yb-portfolio ${showIntro ? 'has-intro' : ''}`}>
      <div className="yb-shell">
        {showIntro ? (
          <div className="yb-portfolio-intro">
            <p className="yb-kicker">Portfolio</p>
            <h2>Live demos designed as complete website experiences.</h2>
            <p>
              Explore industry-specific demos with page structure, navigation, content direction, and inquiry paths already considered.
            </p>
          </div>
        ) : null}

        <div className="yb-portfolio-list">
          {portfolioDemos.map((project, index) => (
            <PortfolioProject key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
