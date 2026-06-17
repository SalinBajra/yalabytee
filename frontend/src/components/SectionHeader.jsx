export default function SectionHeader({ eyebrow, title, text, light = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`text-sm font-bold uppercase tracking-[0.18em] ${light ? 'text-cyanbrand-400' : 'text-cyan-700'}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-semibold tracking-normal sm:text-4xl ${light ? 'text-white' : 'text-navy-950'}`}>{title}</h2>
      {text ? <p className={`mt-4 text-base leading-8 ${light ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p> : null}
    </div>
  );
}
