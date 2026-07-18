import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';
import { useMotionVariants } from '../components/MotionSection.jsx';
import { navigateTo } from '../utils/routes.js';
import { portfolioDemos } from '../data/portfolioDemos.js';

const heroImage = '/images/yalabyte-hero-workspace.jpg';
const featuredWork = portfolioDemos.slice(0, 2);

const focusAreas = [
  ['01', 'Website design', 'Structure, visual direction, responsive page systems.'],
  ['02', 'Frontend build', 'React interfaces, forms, integrations, launch-ready code.'],
  ['03', 'Ongoing support', 'Small improvements, fixes, QA, and practical maintenance.']
];

const process = [
  ['Listen', 'Understand the business, the audience, and what the website needs to make clearer.'],
  ['Shape', 'Turn that into page structure, content hierarchy, and a visual system.'],
  ['Build', 'Develop the site cleanly, test it across screens, and prepare it for launch.']
];

const imagePositions = {
  travel: '50% 48%',
  cafe: '50% 54%',
  logistics: '50% 50%'
};

function Eyebrow({ children }) {
  return <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#43d7ee]">{children}</p>;
}

function StudioButton({ children, onClick, variant = 'solid' }) {
  return (
    <Button
      motionEnabled
      variant={variant === 'solid' ? 'primary' : 'secondary'}
      className={variant === 'solid'
        ? '!rounded-sm !bg-[#43d7ee] !px-5 !py-3 !text-xs !text-[#071015] hover:!bg-white'
        : '!rounded-sm !border-white/18 !bg-transparent !px-5 !py-3 !text-xs !text-white hover:!border-[#43d7ee] hover:!bg-white/[0.04]'}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

function HeroImage() {
  const { imageReveal, reduceMotion } = useMotionVariants();

  return (
    <motion.div
      variants={imageReveal}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#10151b]"
    >
      <img
        src={heroImage}
        alt="YalaByte workspace"
        className="h-full w-full object-cover opacity-78"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-[#090c10]/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#090c10]/76 p-5 backdrop-blur-md">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#43d7ee]">Studio note</p>
        <p className="mt-3 max-w-sm text-lg font-black leading-tight text-white">
          Clear pages, deliberate interfaces, clean implementation.
        </p>
      </div>
    </motion.div>
  );
}

function WorkCard({ project, index, large = false }) {
  const { imageReveal, reduceMotion } = useMotionVariants();

  return (
    <motion.button
      type="button"
      className={`group relative overflow-hidden bg-[#10151b] text-left ${large ? 'min-h-[440px]' : 'min-h-[340px]'}`}
      onClick={() => navigateTo(`/portfolio/${project.slug}`)}
      variants={imageReveal}
      whileHover={reduceMotion ? undefined : { y: -7 }}
      whileTap={{ scale: 0.99 }}
    >
      <img
        src={project.image}
        alt={`${project.title} website preview`}
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
        style={{ objectPosition: imagePositions[project.slug] || '50% 50%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/32 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#43d7ee]">
          0{index + 1} / {project.category}
        </p>
        <h3 className="mt-3 text-3xl font-black leading-none tracking-tight text-white">{project.title}</h3>
      </div>
    </motion.button>
  );
}

export default function HomePage() {
  const { reveal, revealGroup } = useMotionVariants();

  return (
    <div className="bg-[#090c10] text-white">
      <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="pointer-events-none absolute right-[-4vw] top-[-6rem] hidden text-[34rem] font-black leading-none tracking-[-0.09em] text-white/[0.025] lg:block">
          YB
        </div>
        <motion.div
          className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.72fr] lg:items-center"
          initial="hidden"
          animate="visible"
          variants={revealGroup}
        >
          <motion.div variants={reveal}>
            <Eyebrow>YalaByte / website design and development</Eyebrow>
            <h1 className="mt-8 max-w-4xl text-[clamp(3.8rem,8vw,8.8rem)] font-black leading-[0.86] tracking-[-0.075em]">
              Websites with a clear point of view.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/58 sm:text-lg">
              We plan, design, and build focused websites for service businesses that need to look credible and work properly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <StudioButton onClick={() => navigateTo('/contact')}>Start a project</StudioButton>
              <StudioButton variant="ghost" onClick={() => navigateTo('/portfolio')}>View work</StudioButton>
            </div>
          </motion.div>

          <HeroImage />
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-[#15191f] px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {focusAreas.map(([number, title, text]) => (
            <div key={title} className="grid grid-cols-[56px_1fr] gap-5 border-l border-white/12 pl-5">
              <span className="text-sm font-black text-[#43d7ee]">{number}</span>
              <span>
                <strong className="block text-base font-black text-white">{title}</strong>
                <span className="mt-2 block text-sm leading-6 text-white/50">{text}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div
          className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.42fr_1fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={revealGroup}
        >
          <motion.div variants={reveal}>
            <Eyebrow>Process</Eyebrow>
            <h2 className="mt-5 max-w-md text-4xl font-black leading-none tracking-tight sm:text-5xl">
              A simple way to get the site right.
            </h2>
          </motion.div>

          <div className="border-y border-white/10">
            {process.map(([title, text], index) => (
              <motion.article
                key={title}
                variants={reveal}
                className="grid gap-5 border-b border-white/10 py-8 last:border-b-0 sm:grid-cols-[90px_0.65fr_1fr] sm:items-start"
              >
                <span className="text-sm font-black text-[#43d7ee]">0{index + 1}</span>
                <h3 className="text-2xl font-black leading-none tracking-tight text-white">{title}</h3>
                <p className="max-w-xl text-sm leading-7 text-white/55">{text}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-[#15191f] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div
          className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.5fr_1fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={revealGroup}
        >
          <motion.div variants={reveal}>
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-5 max-w-lg text-4xl font-black leading-none tracking-tight sm:text-5xl">
              What we build.
            </h2>
          </motion.div>

          <motion.div variants={revealGroup} className="grid gap-4 md:grid-cols-3">
            {focusAreas.map(([number, title, text]) => (
              <motion.button
                key={title}
                type="button"
                variants={reveal}
                className="group border border-white/10 bg-[#090c10] p-6 text-left transition hover:border-[#43d7ee]"
                onClick={() => navigateTo('/services')}
              >
                <span className="text-sm font-black text-[#43d7ee]">{number}</span>
                <span className="mt-16 block text-2xl font-black leading-none tracking-tight text-white transition group-hover:text-[#43d7ee]">
                  {title}
                </span>
                <span className="mt-4 block text-sm leading-6 text-white/52">{text}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div
          className="mx-auto max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={revealGroup}
        >
          <motion.div variants={reveal} className="grid gap-8 lg:grid-cols-[0.42fr_1fr] lg:items-end">
            <div>
              <Eyebrow>Work</Eyebrow>
              <h2 className="mt-5 text-4xl font-black leading-none tracking-tight sm:text-5xl">
                Selected demos.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/55">
              Two sample directions. The portfolio page carries the full set.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            {featuredWork.map((project, index) => (
              <WorkCard key={project.slug} project={project} index={index} large={index === 0} />
            ))}
          </div>
          <div className="mt-10">
            <StudioButton variant="ghost" onClick={() => navigateTo('/portfolio')}>View full portfolio</StudioButton>
          </div>
        </motion.div>
      </section>

      <section className="border-t border-white/10 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div
          className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={revealGroup}
        >
          <motion.div variants={reveal}>
            <Eyebrow>Start a project</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-none tracking-tight sm:text-5xl">
              Build something that feels specific.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
              Bring the rough idea. We will help turn it into a website people can understand, trust, and use.
            </p>
          </motion.div>
          <motion.div variants={reveal}>
            <StudioButton onClick={() => navigateTo('/contact')}>Let's talk</StudioButton>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
