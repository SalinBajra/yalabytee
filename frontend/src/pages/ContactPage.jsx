import PageHero from '../components/PageHero.jsx';
import Contact from '../components/Contact.jsx';
import FAQ from '../components/FAQ.jsx';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are building."
        text="Share your project details, timeline, and the kind of support you need. YalaByte will review your message and respond with a practical starting point."
      />
      <Contact />
      <FAQ />
    </>
  );
}
