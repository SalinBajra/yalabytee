import PageHero from '../components/PageHero.jsx';
import Services from '../components/Services.jsx';
import AddOns from '../components/AddOns.jsx';
import Process from '../components/Process.jsx';
import FAQ from '../components/FAQ.jsx';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="The design and development your website actually needs"
        text="Company websites, redesigns, custom tools, hosting, and ongoing support—scoped around the job rather than a fixed package."
      />
      <Services showIntro={false} />
      <AddOns />
      <Process />
      <FAQ />
    </>
  );
}
