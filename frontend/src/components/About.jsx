export default function About() {
  return (
    <section id="about" className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">About YalaByte</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-navy-950 sm:text-4xl">
            A reliable IT partner for businesses building a stronger digital presence
          </h2>
        </div>
        <div className="grid gap-6 text-base leading-8 text-slate-600">
          <p>
            YalaByte provides website development services and complete one-stop digital solutions for companies that need a professional, dependable technology partner. We focus on clear strategy, practical execution, and digital experiences that support real business outcomes.
          </p>
          <p>
            Whether you are launching a new company website, improving an existing platform, or planning a custom web application, YalaByte helps you build a polished online presence with the structure, performance, and support your team needs to move forward confidently.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {['Clear scope', 'Premium execution', 'Long-term support'].map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-navy-900">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
