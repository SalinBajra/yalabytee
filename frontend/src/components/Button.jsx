import { motion } from 'framer-motion';

const variantClasses = {
  plain: '',
  primary: 'rounded-full bg-navy-950 px-7 py-4 text-sm font-black text-white transition hover:bg-cyanbrand-600',
  secondary: 'rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:border-slate-400 hover:bg-slate-50',
  light: 'rounded-full bg-white px-8 py-4 text-sm font-black text-slate-950 transition hover:bg-slate-100',
  ghostDark: 'rounded-lg border border-white/20 px-4 py-2.5 text-sm font-bold text-white transition hover:border-cyanbrand-400 hover:bg-white/[0.08]',
  link: 'text-xs font-black uppercase tracking-[0.16em] text-white transition hover:text-cyanbrand-300'
};

export default function Button({
  children,
  className = '',
  variant = 'plain',
  motionEnabled = false,
  type = 'button',
  ...props
}) {
  const Component = motionEnabled ? motion.button : 'button';
  const classes = [variantClasses[variant] || '', className].filter(Boolean).join(' ');

  return (
    <Component type={type} className={classes} {...props}>
      {children}
    </Component>
  );
}
