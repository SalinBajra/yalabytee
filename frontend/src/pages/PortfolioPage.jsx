import PageHero from '../components/PageHero.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Testimonials from '../components/Testimonials.jsx';
import { portfolioDemos } from '../data/portfolioDemos.js';
import { navigateTo } from '../utils/routes.js';

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Working website concepts, built around real business needs"
        text="Explore interactive examples for travel, creative, logistics, and service businesses—each shaped around a clear customer journey."
        actions={portfolioDemos.map((demo) => (
          <button key={demo.slug} onClick={() => navigateTo(`/portfolio/${demo.slug}`)} className="rounded-lg border border-white/20 px-4 py-2.5 text-sm font-bold text-white transition hover:border-cyanbrand-400 hover:bg-white/[0.08]">
            {demo.title}
          </button>
        ))}
      />
      <Portfolio showIntro={false} />
      <Testimonials />
    </>
  );
}
