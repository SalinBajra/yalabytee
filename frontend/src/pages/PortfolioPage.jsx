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
          <DemoLauncher key={demo.slug} project={demo} variant="secondary" className="!border-border !bg-white/[0.04] !px-4 !py-2.5 !text-ink hover:!border-accent hover:!bg-accent-muted">
            {demo.title}
          </DemoLauncher>
        ))}
      />
      <Portfolio showIntro={false} />
    </>
  );
}
