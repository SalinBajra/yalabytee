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
        title="Websites and digital systems built for growing businesses"
        text="From a polished company website to custom tools, hosting, and ongoing support—choose the help your business needs now, with room to grow later."
      />
      <Services showIntro={false} />
      <AddOns />
      <Process />
      <FAQ />
    </>
  );
}
