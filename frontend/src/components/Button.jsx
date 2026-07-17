import { motion } from 'framer-motion';

const variantClasses = {
  primary: 'rounded-full bg-navy-950 px-7 py-4 text-sm font-black text-white shadow-sm transition hover:bg-cyanbrand-600',
  secondary: 'rounded-full border border-slate-300 bg-white/80 px-7 py-4 text-sm font-black text-slate-950 transition hover:border-cyanbrand-500 hover:bg-cyanbrand-50'
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
