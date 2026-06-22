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
        title="Two complete website demos, ready to explore"
        text="Open a travel or café concept and browse it like a real client website. Each can be adapted into an editable WordPress build with your branding and content."
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
