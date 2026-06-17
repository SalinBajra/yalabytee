export default function BrandLogo({ variant = 'dark' }) {
  const isDark = variant === 'dark';

  return (
    <span className="flex items-center gap-3">
      <span className={`grid h-12 w-12 place-items-center overflow-hidden rounded-md ${isDark ? 'bg-white' : 'bg-white'} ring-1 ${isDark ? 'ring-white/20' : 'ring-slate-200'}`}>
        <img src="/images/yalabyte-logo-web.png" alt="YalaByte logo" className="h-11 w-11 object-contain" />
      </span>
      <span className={`text-xl font-semibold tracking-normal ${isDark ? 'text-white' : 'text-navy-950'}`}>YalaByte</span>
    </span>
  );
}
