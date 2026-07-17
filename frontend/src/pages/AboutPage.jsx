import usePageReveal from '../hooks/usePageReveal.js';
import CardGrid from '../components/CardGrid.jsx';
import ContentCard from '../components/ContentCard.jsx';
import CTASection from '../components/CTASection.jsx';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import { proofPoints, team } from '../data/siteData.js';

export default function AboutPage() {
  usePageReveal();

  return (
    <>
      <Section variant="whiteLarge">
          <PageHero
            variant="section"
            withSection={false}
            eyebrow="About"
            title="Based in Nepal, built for teams everywhere"
            text="YalaByte creates premium websites and digital tools for ambitious businesses that want a strong online presence with fewer handoffs."
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="page-reveal">
              <h2 className="text-4xl font-black tracking-tight text-ink sm:text-5xl">Small enough to stay close. Experienced enough to deliver.</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-muted">
                We keep the working relationship direct from the first conversation through launch. Fewer handoffs mean faster decisions, better context, and a website that feels considered as a complete experience.
              </p>
            </div>
            <CardGrid className="page-reveal grid gap-4 rounded-card border border-border-subtle bg-base-800 p-8">
              <ContentCard as="div" variant="panel">
                <p className="text-eyebrow uppercase text-accent">Studio roots</p>
                <p className="mt-4 text-sm leading-7 text-ink-muted">We work with service businesses and growing teams from Nepal and beyond, focusing on thoughtful design, responsive engineering, and long-term stability.</p>
              </ContentCard>
              <ContentCard as="div" variant="panel">
                <p className="text-eyebrow uppercase text-accent">Project approach</p>
                <p className="mt-4 text-sm leading-7 text-ink-muted">Every website gets a clear scope, practical UX, polished visuals, and a launch-ready implementation that is easy to maintain.</p>
              </ContentCard>
            </CardGrid>
          </div>
      </Section>

      <Section variant="slate">
          <PageHero
            variant="section"
            withSection={false}
            eyebrow="Who we are"
            title="One connected team from strategy to delivery."
            text="Our process keeps strategy, design, and development working together so the website is thoughtfully built, easy to use, and ready to launch."
            className="page-reveal mx-auto max-w-3xl text-center"
            eyebrowClassName="text-eyebrow uppercase text-accent"
            titleClassName="mt-4 text-headline text-ink"
            textClassName="mt-4 text-sm leading-7 text-ink-muted sm:text-base"
          />

          <CardGrid variant="team">
            {team.map((item, index) => (
              <ContentCard key={item.role} variant="plain" style={{ '--page-delay': `${index * 50}ms` }}>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-accent">{item.role}</p>
                <h3 className="mt-4 text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-muted">{item.text}</p>
              </ContentCard>
            ))}
          </CardGrid>
      </Section>

      <Section variant="dark">
          <PageHero
            variant="section"
            withSection={false}
            eyebrow="What guides us"
            title="Simple principles. Better work."
            text="We focus on clear goals, coherent design, and launch-ready development so websites are useful for the business and easy to maintain."
            className="page-reveal mx-auto max-w-3xl text-center"
            eyebrowClassName="text-eyebrow uppercase text-accent"
            titleClassName="mt-4 text-headline text-ink"
            textClassName="mt-4 text-sm leading-7 text-ink-muted sm:text-base"
          />

          <CardGrid variant="proof">
            {proofPoints.map((point) => (
              <ContentCard as="div" key={point.label} variant="proofDark">
                <p className="text-3xl font-black tracking-tight text-ink">{point.value}</p>
                <p className="mt-4 text-sm leading-7 text-ink-muted">{point.label}</p>
              </ContentCard>
            ))}
          </CardGrid>
      </Section>

      <CTASection
        eyebrow="From Nepal to worldwide"
        title="Let’s make something useful."
        text="Whether your audience is local or global, we can shape the website, pages, and systems around your business priorities."
        buttonText="Start a conversation"
      />
    </>
  );
}
