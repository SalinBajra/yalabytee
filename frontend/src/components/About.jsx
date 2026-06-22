export default function About({ showIntro = true }) {
  return (
    <section className="bg-slate-50 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          {showIntro ? (
            <>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">About YalaByte</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-navy-950 sm:text-4xl lg:text-5xl">
                A reliable IT partner for businesses that need a complete digital foundation
              </h2>
            </>
          ) : (
            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl">One connected partner, from first plan to launch day.</h2>
          )}
          <div className="mt-8 grid gap-3 min-[420px]:grid-cols-2">
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
              YalaByte provides website development, custom web applications, domain and hosting support, and ongoing digital improvements for businesses that want one dependable partner instead of scattered vendors.
            </p>
            <p>
              Whether you are launching a business website, planning an industry-specific digital presence, improving an existing platform, or building a custom workflow, YalaByte helps translate your services into a credible digital experience that customers can understand and trust.
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
