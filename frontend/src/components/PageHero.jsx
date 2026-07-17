import { motion } from 'framer-motion';
import Section from './Section.jsx';
import { useMotionVariants } from './MotionSection.jsx';

const variants = {
  page: {
    section: 'bg-base-900 px-5 py-20 text-ink sm:px-6 lg:px-8 lg:py-28',
    container: 'studio-container motion-soft',
    shell: 'grid gap-8 lg:grid-cols-[0.9fr_0.7fr] lg:items-end',
    eyebrow: 'text-eyebrow uppercase text-accent',
    title: 'text-display text-ink',
    textWrap: 'border-t border-border pt-6',
    text: 'text-sm leading-7 text-ink-muted sm:text-base',
    actions: 'mt-7 flex flex-wrap gap-3'
  },
  section: {
    section: '',
    container: 'mx-auto max-w-3xl text-center',
    shell: '',
    eyebrow: 'text-eyebrow uppercase text-accent',
    title: 'mt-4 text-headline text-ink',
    textWrap: '',
    text: 'mt-4 text-base leading-8 text-ink-muted',
    actions: 'mt-7 flex flex-wrap justify-center gap-3'
  },
  sectionLight: {
    section: '',
    container: 'mx-auto max-w-3xl text-center',
    shell: '',
    eyebrow: 'text-eyebrow uppercase text-accent',
    title: 'mt-4 text-headline text-ink',
    textWrap: '',
    text: 'mt-4 text-base leading-8 text-ink-muted',
    actions: 'mt-7 flex flex-wrap justify-center gap-3'
  },
  home: {
    section: '',
    container: '',
    shell: '',
    eyebrow: 'text-eyebrow uppercase text-accent',
    title: 'mt-5 max-w-5xl text-display text-ink',
    textWrap: '',
    text: 'mt-7 max-w-2xl text-base leading-8 text-ink-muted sm:text-lg',
    actions: 'mt-9 flex flex-wrap gap-3'
  }
};

export default function PageHero({
  eyebrow,
  title,
  text,
  actions,
  variant = 'page',
  level = variant === 'page' || variant === 'home' ? 1 : 2,
  as: Component = 'div',
  className = '',
  sectionClassName = '',
  containerClassName = '',
  eyebrowClassName = '',
  titleClassName = '',
  textClassName = '',
  actionsClassName = '',
  withSection = variant === 'page',
  ...props
}) {
  const config = variants[variant] || variants.page;
  const Heading = level === 1 ? 'h1' : 'h2';
  const MotionComponent = typeof Component === 'string' ? motion[Component] || Component : Component;
  const { reveal, revealGroup } = useMotionVariants();
  const content = (
    <MotionComponent className={[config.container, className].filter(Boolean).join(' ')} variants={props.variants || revealGroup} {...props}>
      <div className={config.shell}>
        <div>
          {eyebrow ? <motion.p variants={reveal} className={[config.eyebrow, eyebrowClassName].filter(Boolean).join(' ')}>{eyebrow}</motion.p> : null}
          <motion.div variants={reveal}>
            <Heading className={[config.title, titleClassName].filter(Boolean).join(' ')}>{title}</Heading>
          </motion.div>
        </div>
        {(text || actions) ? (
          <div className={config.textWrap}>
            {text ? <motion.p variants={reveal} className={[config.text, textClassName].filter(Boolean).join(' ')}>{text}</motion.p> : null}
            {actions ? <motion.div variants={reveal} className={[config.actions, actionsClassName].filter(Boolean).join(' ')}>{actions}</motion.div> : null}
          </div>
        ) : null}
      </div>
    </MotionComponent>
  );

  if (!withSection) return content;

  return (
    <Section className={[config.section, sectionClassName].filter(Boolean).join(' ')} withContainer={false}>
      {content}
    </Section>
  );
}
