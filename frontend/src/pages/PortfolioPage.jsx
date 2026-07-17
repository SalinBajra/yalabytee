import PageHero from '../components/PageHero.jsx';
import Portfolio from '../components/Portfolio.jsx';
import { portfolioDemos } from '../data/portfolioDemos.js';
import DemoLauncher from '../components/DemoLauncher.jsx';

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Website demos with full-page thinking."
        text="Explore complete demo websites shaped around industry-specific content, navigation, service pages, and inquiry paths."
        actions={portfolioDemos.map((demo) => (
          <DemoLauncher key={demo.slug} project={demo} variant="ghostDark">
            {demo.title}
          </DemoLauncher>
        ))}
      />
      <Portfolio showIntro={false} />
    </>
  );
}
