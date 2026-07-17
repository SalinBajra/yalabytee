import { motion } from 'framer-motion';

const variantClasses = {
  primary: 'rounded-card bg-accent px-7 py-4 text-sm font-black text-base-900 transition hover:bg-accent-hover',
  secondary: 'rounded-card border border-border bg-white/[0.03] px-7 py-4 text-sm font-black text-ink transition hover:border-accent hover:bg-accent-muted'
};

export default function Button({
  children,
  className = '',
  variant = 'primary',
  motionEnabled = false,
  type = 'button',
  ...props
}) {
  const Component = motionEnabled ? motion.button : 'button';
  const classes = [variantClasses[variant] || '', className].filter(Boolean).join(' ');

  return (
    <Component
      type={type}
      className={classes}
      whileHover={motionEnabled ? { scale: 1.02, y: -1 } : undefined}
      whileTap={motionEnabled ? { scale: 0.98 } : undefined}
      transition={motionEnabled ? { duration: 0.18, ease: [0.22, 1, 0.36, 1] } : undefined}
      {...props}
    >
      {children}
    </Component>
  );
}
