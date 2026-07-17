import { navigateTo } from '../utils/routes.js';
import Button from './Button.jsx';
import Section from './Section.jsx';

export default function CTASection({
  eyebrow,
  title,
  text,
  buttonText,
  to = '/contact',
  sectionClassName = 'bg-base-800 px-5 py-16 text-ink sm:px-6 lg:px-8 lg:py-24',
  panelClassName = 'studio-container flex flex-col items-start gap-8 rounded-card border border-border bg-base-700 px-8 py-12 sm:flex-row sm:items-center sm:justify-between',
  contentClassName = 'max-w-3xl',
  eyebrowClassName = 'text-eyebrow uppercase text-accent',
  titleClassName = 'mt-4 text-headline text-ink',
  textClassName = 'mt-4 text-sm leading-7 text-ink-muted sm:text-base',
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
