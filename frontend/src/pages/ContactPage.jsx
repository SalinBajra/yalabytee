import PageHero from '../components/PageHero.jsx';
import Contact from '../components/Contact.jsx';
import FAQ from '../components/FAQ.jsx';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell YalaByte what you want to build"
        text="Share your project details, website goals, and whether you need help with domain, hosting, custom features, or ongoing support."
      />
      <Contact />
      <FAQ />
    </>
  );
}
