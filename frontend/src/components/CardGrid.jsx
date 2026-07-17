const gridVariants = {
  none: '',
  services: 'mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3',
  stack: 'grid gap-4',
  process: 'mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4',
  team: 'mt-12 grid gap-6 md:grid-cols-2',
  proof: 'mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4'
};

export default function CardGrid({ as: Component = 'div', children, className = '', variant = 'none', ...props }) {
  const classes = [gridVariants[variant] || '', className].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
