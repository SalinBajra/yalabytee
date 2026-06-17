export default function About() {
  return (
    <section id="about" className="bg-slate-50 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">About YalaByte</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-navy-950 sm:text-4xl lg:text-5xl">
            A reliable IT partner for businesses that need more than a basic website
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              ['Premium', 'Brand-first presentation'],
              ['Practical', 'Built for real workflows'],
              ['Responsive', 'Every screen considered'],
              ['Scalable', 'Ready for next steps']
            ].map(([title, text]) => (
              <div key={title} className="rounded-lg border border-slate-200 bg-white p-5">
                <p className="font-semibold text-navy-950">{title}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 text-base leading-8 text-slate-600">
            <p>
              YalaByte provides website development services and one-stop digital solutions for businesses that want a professional digital presence without scattered vendors or unclear execution. We combine strategy, design, development, and support into a clear delivery process.
            </p>
            <p>
              Whether you are launching a business website, planning a WordPress site, improving an existing platform, or building a custom web application, YalaByte helps translate your services into a credible digital experience that customers can understand and trust.
            </p>
          </div>
          <div className="mt-8 border-t border-slate-100 pt-6">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">What you can expect</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {['Clear scope', 'Premium execution', 'Long-term support'].map((item) => (
                <div key={item} className="rounded-lg bg-slate-50 p-4 text-sm font-semibold text-navy-900">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
