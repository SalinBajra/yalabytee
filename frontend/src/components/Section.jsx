const sectionVariants = {
  none: '',
  slate: 'bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-24',
  white: 'bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24',
  whiteLarge: 'bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28',
  dark: 'bg-[#111315] px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24'
};

export default function Section({
  children,
  className = '',
  variant = 'none',
  containerClassName = 'studio-container',
  withContainer = true,
  ...props
}) {
  const classes = [sectionVariants[variant] || '', className].filter(Boolean).join(' ');

  return (
    <section className={classes} {...props}>
      {withContainer ? <div className={containerClassName}>{children}</div> : children}
    </section>
  );
}
