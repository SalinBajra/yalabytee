export default function BrandLogo({ variant = 'dark' }) {
  const isDark = variant === 'dark';

  return (
    <span className="inline-flex items-center gap-3" aria-label="YalaByte">
      <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-md border border-slate-200 bg-white p-1.5" aria-hidden="true">
        <img
          src="/images/yalabyte-yb-logo.png"
          alt=""
          className="h-full w-full object-contain"
        />
      </span>
      <span className={`text-xl font-semibold tracking-[-0.025em] ${isDark ? 'text-white' : 'text-navy-950'}`}>YalaByte</span>
    </span>
  );
}
