import { motion } from 'framer-motion';
import { useMotionVariants } from './MotionSection.jsx';

const sectionVariants = {
  none: '',
  slate: 'bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-24',
  white: 'bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24',
  whiteLarge: 'bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28',
  dark: 'bg-navy-950 px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24'
};

export default function Section({
  children,
  className = '',
  variant = 'none',
  containerClassName = 'studio-container',
  withContainer = true,
  reveal = true,
  ...props
}) {
  const { reveal: revealVariant } = useMotionVariants();
  const classes = [sectionVariants[variant] || '', className].filter(Boolean).join(' ');

  return (
    <motion.section
      className={classes}
      initial={reveal ? 'hidden' : undefined}
      whileInView={reveal ? 'visible' : undefined}
      viewport={reveal ? { once: true, amount: 0.16, margin: '0px 0px -72px 0px' } : undefined}
      variants={reveal ? revealVariant : undefined}
      {...props}
    >
      {withContainer ? <div className={containerClassName}>{children}</div> : children}
    </motion.section>
  );
}
