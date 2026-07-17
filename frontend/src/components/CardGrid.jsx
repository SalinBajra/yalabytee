import { motion } from 'framer-motion';
import { useMotionVariants } from './MotionSection.jsx';

const gridVariants = {
  none: '',
  services: 'mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3',
  stack: 'grid gap-4',
  process: 'mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4',
  team: 'mt-12 grid gap-6 md:grid-cols-2',
  proof: 'mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4'
};

export default function CardGrid({ as: Component = motion.div, children, className = '', variant = 'none', reveal = true, ...props }) {
  const { revealGroup } = useMotionVariants();
  const MotionComponent = typeof Component === 'string' ? motion[Component] || Component : Component;
  const classes = [gridVariants[variant] || '', className].filter(Boolean).join(' ');

  return (
    <MotionComponent
      className={classes}
      initial={reveal ? 'hidden' : undefined}
      whileInView={reveal ? 'visible' : undefined}
      viewport={reveal ? { once: true, amount: 0.16, margin: '0px 0px -72px 0px' } : undefined}
      variants={reveal ? revealGroup : undefined}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
