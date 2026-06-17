import PageHero from '../components/PageHero.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Testimonials from '../components/Testimonials.jsx';

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Example website builds shaped around real client use cases"
        text="Browse custom website examples for travel, portfolio, courier, and corporate service businesses. These examples show page structure, conversion flow, and practical features."
      />
      <Portfolio />
      <Testimonials />
    </>
  );
}
