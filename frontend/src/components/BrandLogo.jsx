export default function BrandLogo({ variant = 'dark' }) {
  const isDark = variant === 'dark';

  return (
    <span className="flex items-center gap-3">
      <span className={`grid h-12 w-12 place-items-center overflow-hidden rounded-lg ${isDark ? 'bg-white' : 'bg-slate-50'} ring-1 ring-slate-200/60`}>
        <img src="/images/yalabyte-logo-cropped.png" alt="YalaByte logo" className="h-10 w-10 object-contain" />
      </span>
      <span className={`text-xl font-semibold tracking-normal ${isDark ? 'text-white' : 'text-navy-950'}`}>YalaByte</span>
    </span>
  );
}
