import Section from './Section.jsx';

const variants = {
  page: {
    section: 'bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28',
    container: 'studio-container motion-soft',
    shell: 'grid gap-8 lg:grid-cols-[0.9fr_0.7fr] lg:items-end',
    eyebrow: 'text-xs font-black uppercase tracking-[0.28em] text-cyanbrand-300',
    title: 'text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl',
    textWrap: 'border-t border-white/15 pt-6',
    text: 'text-sm leading-7 text-slate-300 sm:text-base',
    actions: 'mt-7 flex flex-wrap gap-3'
  },
  section: {
    section: '',
    container: 'mx-auto max-w-3xl text-center',
    shell: '',
    eyebrow: 'text-sm font-bold uppercase tracking-[0.18em] text-cyan-700',
    title: 'mt-4 text-3xl font-semibold tracking-normal text-navy-950 sm:text-4xl',
    textWrap: '',
    text: 'mt-4 text-base leading-8 text-slate-600',
    actions: 'mt-7 flex flex-wrap justify-center gap-3'
  },
  sectionLight: {
    section: '',
    container: 'mx-auto max-w-3xl text-center',
    shell: '',
    eyebrow: 'text-sm font-bold uppercase tracking-[0.18em] text-cyanbrand-400',
    title: 'mt-4 text-3xl font-semibold tracking-normal text-white sm:text-4xl',
    textWrap: '',
    text: 'mt-4 text-base leading-8 text-slate-300',
    actions: 'mt-7 flex flex-wrap justify-center gap-3'
  },
  home: {
    section: '',
    container: '',
    shell: '',
    eyebrow: 'text-xs font-black uppercase tracking-[0.24em] text-cyanbrand-600',
    title: 'mt-5 max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.055em] text-slate-950 sm:text-7xl lg:text-8xl',
    textWrap: '',
    text: 'mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg',
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
  const content = (
    <Component className={[config.container, className].filter(Boolean).join(' ')} {...props}>
      <div className={config.shell}>
        <div>
          {eyebrow ? <p className={[config.eyebrow, eyebrowClassName].filter(Boolean).join(' ')}>{eyebrow}</p> : null}
          <Heading className={[config.title, titleClassName].filter(Boolean).join(' ')}>{title}</Heading>
        </div>
        {(text || actions) ? (
          <div className={config.textWrap}>
            {text ? <p className={[config.text, textClassName].filter(Boolean).join(' ')}>{text}</p> : null}
            {actions ? <div className={[config.actions, actionsClassName].filter(Boolean).join(' ')}>{actions}</div> : null}
          </div>
        ) : null}
      </div>
    </Component>
  );

  if (!withSection) return content;

  return (
    <Section className={[config.section, sectionClassName].filter(Boolean).join(' ')} withContainer={false}>
      {content}
    </Section>
  );
}
