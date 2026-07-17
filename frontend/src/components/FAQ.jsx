import PageHero from './PageHero.jsx';
import { faqs } from '../data/siteData.js';

export default function FAQ() {
  return (
    <section className="bg-base-800 px-5 py-24 text-ink sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <PageHero
          variant="section"
          withSection={false}
          eyebrow="FAQs"
          title="Useful answers before we start"
          text="The basics on scope, hosting, custom features, and support after launch."
        />
        <div className="mt-12 grid gap-4">
          {faqs.map((item) => (
            <details key={item.question} className="group rounded-card border border-border-subtle bg-base-700 p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink">
                {item.question}
                <span className="shrink-0 text-accent transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-ink-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
