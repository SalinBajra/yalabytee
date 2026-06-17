import PageHero from '../components/PageHero.jsx';
import About from '../components/About.jsx';
import Team from '../components/Team.jsx';
import Process from '../components/Process.jsx';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A practical IT partner for businesses building a serious digital presence"
        text="Learn how YalaByte approaches strategy, design, development, launch, and long-term support for growing businesses."
      />
      <About />
      <Team />
      <Process />
    </>
  );
}
