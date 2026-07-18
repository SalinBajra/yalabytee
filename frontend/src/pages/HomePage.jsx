import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';
import { useMotionVariants } from '../components/MotionSection.jsx';
import { navigateTo } from '../utils/routes.js';
import { portfolioDemos } from '../data/portfolioDemos.js';

const heroImage = '/images/yalabyte-hero-workspace.jpg';
const workItems = portfolioDemos.slice(0, 2);

const services = [
  ['01', 'Website redesign', 'Old site. New direction.'],
  ['02', 'Design and build', 'Pages, components, launch.'],
  ['03', 'Client portals', 'Dashboards, forms, tools.']
];

const method = [
  ['Brief', 'What matters'],
  ['Map', 'What goes where'],
  ['Design', 'What it feels like'],
  ['Build', 'What ships']
];

const imagePositions = {
  travel: '50% 48%',
  cafe: '50% 54%',
  logistics: '50% 50%'
};

function Label({ children }) {
  return <p className="text-[11px] font-black uppercase tracking-[0.26em] text-[#43d7ee]">{children}</p>;
}

function SiteButton({ children, onClick, variant = 'solid' }) {
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

function HeroPanel() {
  const { imageReveal, reduceMotion } = useMotionVariants();

  return (
    <motion.div
      variants={imageReveal}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#11161c]"
    >
      <img src={heroImage} alt="YalaByte workspace" className="h-full w-full object-cover opacity-76" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 border-t border-white/10 bg-[#090c10]/78 text-center backdrop-blur-md">
        {['Plan', 'Design', 'Build'].map((item) => (
          <span key={item} className="border-r border-white/10 px-4 py-4 text-xs font-black uppercase tracking-[0.18em] text-white/70 last:border-r-0">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function WorkTile({ project, index, large = false }) {
  const { imageReveal, reduceMotion } = useMotionVariants();

  return (
    <motion.button
      type="button"
      variants={imageReveal}
      whileHover={reduceMotion ? undefined : { y: -7 }}
      whileTap={{ scale: 0.99 }}
      className={`group relative overflow-hidden bg-[#11161c] text-left ${large ? 'min-h-[430px]' : 'min-h-[320px]'}`}
      onClick={() => navigateTo(`/portfolio/${project.slug}`)}
    >
      <img
        src={project.image}
        alt={`${project.title} website preview`}
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
        style={{ objectPosition: imagePositions[project.slug] || '50% 50%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/28 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#43d7ee]">0{index + 1} / {project.category}</p>
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
        <div className="pointer-events-none absolute right-[-6vw] top-[-8rem] hidden text-[34rem] font-black leading-none tracking-[-0.09em] text-white/[0.025] lg:block">
          YB
        </div>

        <motion.div
          className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.72fr] lg:items-center"
          initial="hidden"
          animate="visible"
          variants={revealGroup}
        >
          <motion.div variants={reveal}>
            <Label>YalaByte studio</Label>
            <h1 className="mt-8 max-w-5xl text-[clamp(4rem,8.8vw,9.4rem)] font-black leading-[0.84] tracking-[-0.08em]">
              Your website should sell before you do.
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-7 text-white/56">
              Web design, frontend build, and launch support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <SiteButton onClick={() => navigateTo('/contact')}>Start a project</SiteButton>
              <SiteButton variant="ghost" onClick={() => navigateTo('/portfolio')}>See work</SiteButton>
            </div>
          </motion.div>

          <HeroPanel />
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-[#15191f] px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.42fr_1fr] lg:items-start">
          <div>
            <Label>Services</Label>
            <h2 className="mt-5 text-4xl font-black leading-none tracking-tight sm:text-5xl">What we build.</h2>
          </div>
          <div className="grid gap-0 border-y border-white/10">
            {services.map(([number, title, line]) => (
              <button
                key={title}
                type="button"
                className="group grid gap-4 border-b border-white/10 py-7 text-left last:border-b-0 sm:grid-cols-[90px_1fr_auto] sm:items-center"
                onClick={() => navigateTo('/services')}
              >
                <span className="text-sm font-black text-[#43d7ee]">{number}</span>
                <span className="text-3xl font-black leading-none tracking-tight text-white transition group-hover:text-[#43d7ee]">{title}</span>
                <span className="text-sm font-bold text-white/46">{line}</span>
              </button>
            ))}
          </div>
        </div>
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
              <Label>Work</Label>
              <h2 className="mt-5 text-4xl font-black leading-none tracking-tight sm:text-5xl">Live directions.</h2>
            </div>
            <p className="max-w-md text-sm font-bold uppercase tracking-[0.16em] text-white/42">
              Two previews. Full portfolio inside.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            {workItems.map((project, index) => (
              <WorkTile key={project.slug} project={project} index={index} large={index === 0} />
            ))}
          </div>
          <div className="mt-10">
            <SiteButton variant="ghost" onClick={() => navigateTo('/portfolio')}>View portfolio</SiteButton>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#15191f] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div
          className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.42fr_1fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={revealGroup}
        >
          <motion.div variants={reveal}>
            <Label>Method</Label>
            <h2 className="mt-5 max-w-md text-4xl font-black leading-none tracking-tight sm:text-5xl">
              No mystery. No bloated process.
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-4">
            {method.map(([title, line], index) => (
              <motion.div key={title} variants={reveal} className="border border-white/10 bg-[#090c10] p-5">
                <span className="text-sm font-black text-[#43d7ee]">0{index + 1}</span>
                <h3 className="mt-16 text-2xl font-black leading-none tracking-tight text-white">{title}</h3>
                <p className="mt-3 text-sm font-bold text-white/46">{line}</p>
              </motion.div>
            ))}
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
            <Label>Start</Label>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-none tracking-tight sm:text-5xl">
              Bring the rough idea.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-7 text-white/56">
              We will turn it into a site people understand.
            </p>
          </motion.div>
          <motion.div variants={reveal}>
            <SiteButton onClick={() => navigateTo('/contact')}>Let's talk</SiteButton>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
