import PageHero from '../components/PageHero.jsx';
import About from '../components/About.jsx';
import Team from '../components/Team.jsx';
import Process from '../components/Process.jsx';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Practical digital work, thoughtfully delivered"
        text="YalaByte brings strategy, design, development, launch, and long-term support into one clear working relationship."
      />
      <About showIntro={false} />
      <Team />
      <Process />
    </>
  );
}
