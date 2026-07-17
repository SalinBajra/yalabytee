import { motion, useReducedMotion } from 'framer-motion';

export function useMotionVariants() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const revealGroup = {
    hidden: {},
    visible: {
      transition: reduceMotion ? {} : { staggerChildren: 0.09, delayChildren: 0.08 }
    }
  };

  const imageReveal = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
    visible: {
      opacity: 1,
      clipPath: 'inset(0 0 0% 0)',
      transition: { duration: 0.86, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return { reduceMotion, reveal, revealGroup, imageReveal };
}

export default function MotionSection({ children, className = '', ...props }) {
  const { reveal } = useMotionVariants();

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: '0px 0px -80px 0px' }}
      variants={reveal}
      {...props}
    >
      {children}
    </motion.section>
  );
}
