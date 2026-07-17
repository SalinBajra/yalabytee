const cardVariants = {
  none: '',
  service: 'page-reveal rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-slate-300',
  plain: 'page-reveal rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm',
  soft: 'page-reveal rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6 shadow-sm',
  panel: 'rounded-3xl bg-white p-7 shadow-sm',
  proofDark: 'page-reveal rounded-[1.75rem] border border-white/10 bg-white/5 p-7'
};

export default function ContentCard({
  as: Component = 'article',
  children,
  className = '',
  variant = 'none',
  ...props
}) {
  const classes = [cardVariants[variant] || '', className].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
