export default function BrandLogo({ variant = 'dark' }) {
  const isDark = variant === 'dark';

  return (
    <span className="inline-flex items-center gap-2.5" aria-label="YalaByte">
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-md bg-cyanbrand-400 text-[13px] font-black tracking-[-0.08em] text-navy-950" aria-hidden="true">
        YB
        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-white/45" />
      </span>
      <span className={`text-xl font-semibold tracking-[-0.025em] ${isDark ? 'text-white' : 'text-navy-950'}`}>YalaByte</span>
    </span>
  );
}
