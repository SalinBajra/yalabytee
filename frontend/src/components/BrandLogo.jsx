export default function BrandLogo({ variant = 'dark' }) {
  const isDark = variant === 'dark';

  return (
    <span className="flex items-center gap-3">
      <span className={`grid h-11 w-11 place-items-center rounded-md ${isDark ? 'bg-white' : 'bg-navy-950'} ring-1 ${isDark ? 'ring-white/20' : 'ring-slate-200'}`}>
        <img src="/images/yalabyte-logo-mark.png" alt="YalaByte logo" className="h-9 w-9 object-contain" />
      </span>
      <span className={`text-xl font-semibold tracking-normal ${isDark ? 'text-white' : 'text-navy-950'}`}>YalaByte</span>
    </span>
  );
}
