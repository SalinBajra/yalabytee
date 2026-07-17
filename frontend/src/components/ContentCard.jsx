import { motion, useReducedMotion } from 'framer-motion';
import { useMotionVariants } from './MotionSection.jsx';

const cardVariants = {
  none: '',
  service: 'page-reveal rounded-card border border-border-subtle bg-base-700 p-7 transition',
  plain: 'page-reveal rounded-card border border-border-subtle bg-base-700 p-7',
  soft: 'page-reveal rounded-card border border-border-subtle bg-base-700 p-6',
  panel: 'rounded-card bg-base-700 p-7',
  proofDark: 'page-reveal rounded-card border border-border-subtle bg-white/[0.04] p-7'
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
