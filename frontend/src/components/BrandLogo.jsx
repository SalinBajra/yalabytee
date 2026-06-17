export default function BrandLogo({ variant = 'dark' }) {
  const isDark = variant === 'dark';

  return (
    <span className="flex items-center gap-3">
      <span className={`grid h-14 w-20 place-items-center overflow-hidden rounded-md ${isDark ? 'bg-white/95' : 'bg-white'} ring-1 ${isDark ? 'ring-white/20' : 'ring-slate-200'}`}>
        <img src="/images/yalabyte-logo-transparent.png" alt="YalaByte logo" className="h-16 w-20 object-contain" />
      </span>
      <span className={`text-xl font-semibold tracking-normal ${isDark ? 'text-white' : 'text-navy-950'}`}>YalaByte</span>
    </span>
  );
}
