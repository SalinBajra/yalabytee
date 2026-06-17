import SectionHeader from './SectionHeader.jsx';
import { faqs } from '../data/siteData.js';

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="FAQs"
          title="Questions businesses usually ask before starting"
          text="Clear answers before the first call help keep the project practical, scoped, and easier to move forward."
        />
        <div className="mt-12 grid gap-4">
          {faqs.map((item) => (
            <details key={item.question} className="group rounded-lg border border-slate-200 bg-white p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-navy-950">
                {item.question}
                <span className="shrink-0 text-cyan-700 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
