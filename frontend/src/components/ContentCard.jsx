import { motion, useReducedMotion } from 'framer-motion';
import { useMotionVariants } from './MotionSection.jsx';

const cardVariants = {
  none: '',
  service: 'page-reveal rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-slate-300',
  plain: 'page-reveal rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm',
  soft: 'page-reveal rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6 shadow-sm',
  panel: 'rounded-3xl bg-white p-7 shadow-sm',
  proofDark: 'page-reveal rounded-[1.75rem] border border-white/10 bg-white/5 p-7'
};

export default function ContentCard({
  as: Component = motion.article,
  children,
  className = '',
  variant = 'none',
  hover = true,
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const { reveal } = useMotionVariants();
  const MotionComponent = typeof Component === 'string' ? motion[Component] || Component : Component;
  const classes = [cardVariants[variant] || '', className].filter(Boolean).join(' ');

  return (
    <MotionComponent
      className={classes}
      variants={props.variants || reveal}
      whileHover={hover && !reduceMotion ? { y: -4, boxShadow: '0 18px 52px rgba(15, 23, 42, 0.12)' } : undefined}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
