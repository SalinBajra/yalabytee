import PageHero from '../components/PageHero.jsx';
import About from '../components/About.jsx';
import Team from '../components/Team.jsx';
import Process from '../components/Process.jsx';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A small web team with a straightforward process"
        text="Strategy, design, development, launch, and ongoing support stay in one working relationship from start to finish."
      />
      <About showIntro={false} />
      <Team />
      <Process />
    </>
  );
}
