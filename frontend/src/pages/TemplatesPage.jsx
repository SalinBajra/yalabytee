import PageHero from '../components/PageHero.jsx';
import Templates from '../components/Templates.jsx';
import AddOns from '../components/AddOns.jsx';

export default function TemplatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Templates"
        title="WordPress starting points customized into real business websites"
        text="Use an industry-ready structure as the foundation, then customize branding, copy, forms, pages, hosting, and add-ons for your company."
      />
      <Templates />
      <AddOns />
    </>
  );
}
