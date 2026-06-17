export default function PageHero({ eyebrow, title, text, actions }) {
  return (
    <section className="bg-navy-950 px-5 py-20 text-white sm:px-6 lg:px-8">
      <div className="motion-soft mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyanbrand-400">{eyebrow}</p>
        <div className="mt-5 grid gap-6 lg:grid-cols-[0.9fr_0.7fr] lg:items-end">
          <h1 className="text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">{title}</h1>
          <div>
            <p className="text-base leading-8 text-slate-300">{text}</p>
            {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
