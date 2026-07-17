import { portfolioDemos } from '../data/portfolioDemos.js';
import { navigateTo } from '../utils/routes.js';
import Button from './Button.jsx';
import CardGrid from './CardGrid.jsx';
import ContentCard from './ContentCard.jsx';
import DemoLauncher from './DemoLauncher.jsx';
import PageHero from './PageHero.jsx';
import Section from './Section.jsx';

function PortfolioProject({ project, index }) {
  const isFlipped = index % 2 === 1;

  return (
    <ContentCard className="grid gap-8 border-t border-slate-200 py-12 lg:grid-cols-2 lg:items-center">
      <div className={`${isFlipped ? 'lg:order-2' : ''}`}>
        <Button className="group block w-full overflow-hidden rounded-[1.25rem] bg-slate-200" onClick={() => navigateTo(`/portfolio/${project.slug}`)} aria-label={`Open ${project.title} project`}>
          <img src={project.image} alt={`${project.title} website preview`} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
        </Button>
      </div>

      <div>
        <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.18em] text-cyanbrand-700">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <p>{project.category}</p>
        </div>
        <h3 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{project.title}</h3>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{project.summary}</p>

        <div className="mt-7 flex flex-wrap gap-2" aria-label={`${project.title} features`}>
          {project.features.map((feature) => (
            <span key={feature} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700">{feature}</span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <DemoLauncher project={project} variant="primary">
            View demo
          </DemoLauncher>
          <Button variant="secondary" onClick={() => navigateTo('/contact')}>
            Request similar
          </Button>
        </div>
      </div>
    </ContentCard>
  );
}

export default function Portfolio({ showIntro = true }) {
  return (
    <Section className={`bg-white px-5 text-slate-950 sm:px-6 lg:px-8 ${showIntro ? 'py-16 lg:py-24' : 'pb-16 lg:pb-24'}`} containerClassName="studio-container">
        {showIntro ? (
          <PageHero
            variant="section"
            withSection={false}
            eyebrow="Portfolio"
            title="Live demos designed as complete website experiences."
            text="Explore industry-specific demos with page structure, navigation, content direction, and inquiry paths already considered."
          />
        ) : null}

        <CardGrid className={showIntro ? 'mt-12' : ''}>
          {portfolioDemos.map((project, index) => (
            <PortfolioProject key={project.slug} project={project} index={index} />
          ))}
        </CardGrid>
    </Section>
  );
}
