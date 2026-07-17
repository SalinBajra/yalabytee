import { navigateTo } from '../utils/routes.js';
import Button from './Button.jsx';
import Section from './Section.jsx';

export default function CTASection({
  eyebrow,
  title,
  text,
  buttonText,
  to = '/contact',
  sectionClassName = 'bg-cyanbrand-500 px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24',
  panelClassName = 'studio-container flex flex-col items-start gap-8 rounded-[2rem] border border-white/15 bg-white/10 px-8 py-12 shadow-soft sm:flex-row sm:items-center sm:justify-between',
  contentClassName = 'max-w-3xl',
  eyebrowClassName = 'text-xs font-black uppercase tracking-[0.28em] text-cyanbrand-100',
  titleClassName = 'mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl',
  textClassName = 'mt-4 text-sm leading-7 text-cyanbrand-100/90 sm:text-base',
  buttonClassName = '',
  onClick
}) {
  return (
    <Section className={sectionClassName} withContainer={false}>
      <div className={panelClassName}>
        <div className={contentClassName}>
          <p className={eyebrowClassName}>{eyebrow}</p>
          <h2 className={titleClassName}>{title}</h2>
          <p className={textClassName}>{text}</p>
        </div>
        <Button variant="primary" className={buttonClassName} onClick={onClick || (() => navigateTo(to))}>
          {buttonText}
        </Button>
      </div>
    </Section>
  );
}
