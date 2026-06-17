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
        title="Website development, WordPress builds, hosting support, and custom add-ons"
        text="Explore the services YalaByte can provide for businesses that need a professional website and the setup required to launch it correctly."
      />
      <Services />
      <AddOns />
      <Process />
      <FAQ />
    </>
  );
}
