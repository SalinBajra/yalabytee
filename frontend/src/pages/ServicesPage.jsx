import usePageReveal from '../hooks/usePageReveal.js';
import CardGrid from '../components/CardGrid.jsx';
import ContentCard from '../components/ContentCard.jsx';
import CTASection from '../components/CTASection.jsx';
import PageHero from '../components/PageHero.jsx';
import Section from '../components/Section.jsx';
import { services, addons, processSteps } from '../data/siteData.js';

export default function ServicesPage() {
  usePageReveal();

  return (
    <>
      <Section variant="slate">
          <PageHero
            variant="section"
            withSection={false}
            eyebrow="Services"
            title="Digital services built around your business goals"
            text="Strategy, design, development, launch support, and care for websites and web applications that work for your customers."
          />

          <CardGrid variant="services">
            {services.slice(0, 6).map((service) => (
              <ContentCard key={service.title} variant="service">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">{service.title}</p>
                <p className="mt-4 text-sm leading-7 text-ink-muted">{service.text}</p>
                <p className="mt-6 text-xs font-black uppercase tracking-[0.28em] text-ink-faint">{service.outcome}</p>
              </ContentCard>
            ))}
          </CardGrid>
      </Section>

      <Section variant="white">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="page-reveal">
              <p className="text-eyebrow uppercase text-accent">Support</p>
              <h2 className="mt-4 text-headline text-ink">Launch-ready foundations and ongoing care.</h2>
              <p className="mt-4 text-sm leading-7 text-ink-muted sm:text-base">
                The website is only the start. We also help with the technical setup, launch checklist, and the systems you need after go-live.
              </p>
            </div>
            <CardGrid variant="stack">
              {addons.map((item, index) => (
                <ContentCard as="div" key={item} variant="soft" style={{ '--page-delay': `${index * 40}ms` }}>
                  <p className="text-sm leading-7 text-ink-muted">{item}</p>
                </ContentCard>
              ))}
            </CardGrid>
          </div>
      </Section>

      <Section variant="slate">
          <PageHero
            variant="section"
            withSection={false}
            eyebrow="Process"
            title="A practical process for every website project."
            text="Every project follows the same clear path: discovery, design, build, and launch. This keeps scope manageable and quality predictable."
            className="page-reveal mx-auto max-w-3xl text-center"
            eyebrowClassName="text-eyebrow uppercase text-accent"
            titleClassName="mt-4 text-headline text-ink"
            textClassName="mt-4 text-sm leading-7 text-ink-muted sm:text-base"
          />

          <CardGrid variant="process">
            {processSteps.map((step) => (
              <ContentCard key={step.title} variant="plain">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-card bg-accent-muted text-sm font-black text-accent">{step.label}</div>
                <h3 className="mt-6 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-muted">{step.text}</p>
              </ContentCard>
            ))}
          </CardGrid>
      </Section>

      <CTASection
        eyebrow="Ready?"
        title="Let’s turn your next idea into a website that works."
        text="Tell us about your project, timeline, and current challenges. YalaByte will reply with a practical first plan."
        buttonText="Discuss your project"
      />
    </>
  );
}
