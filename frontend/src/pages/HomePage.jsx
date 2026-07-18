import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';
import { useMotionVariants } from '../components/MotionSection.jsx';
import { navigateTo } from '../utils/routes.js';
import { portfolioDemos } from '../data/portfolioDemos.js';

const brandNames = ['Aster', 'Morrow', 'Northstar', 'FinByte', 'ChatByte'];

const features = [
  ['Clear website strategy', 'Offer, audience, sitemap, page goals, and conversion path before design starts.'],
  ['Modern visual systems', 'Distinct typography, reusable components, responsive layouts, and polished page rhythm.'],
  ['Custom web development', 'React builds, forms, portals, dashboards, integrations, and performance-minded delivery.'],
  ['Launch and support', 'Deployment, DNS guidance, QA, analytics, maintenance, and useful post-launch improvements.']
];

const results = [
  ['500K', 'tracked page views'],
  ['95%', 'mobile-ready score'],
  ['2,400', 'support requests handled'],
  ['1.2M', 'demo interactions']
];

const services = [
  ['01', 'Website design and development'],
  ['02', 'Website redesign systems'],
  ['03', 'Custom portals and dashboards'],
  ['04', 'SEO-ready launch foundations']
];

const imagePositions = {
  travel: '50% 48%',
  cafe: '50% 54%',
  logistics: '50% 50%'
};

function Eyebrow({ children }) {
  return <p className="text-xs font-black uppercase tracking-[0.22em] text-[#49d6f3]">{children}</p>;
}

function WebflowButton({ children, onClick, variant = 'solid' }) {
  return (
    <Button
      motionEnabled
      variant={variant === 'solid' ? 'primary' : 'secondary'}
      className={variant === 'solid'
        ? '!rounded-md !bg-[#49d6f3] !px-4 !py-3 !text-xs !text-[#071015] hover:!bg-white'
        : '!rounded-md !border-white/18 !bg-white/[0.03] !px-4 !py-3 !text-xs !text-white hover:!border-[#49d6f3] hover:!bg-white/[0.06]'}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

function HeroVisual() {
  const { imageReveal, reveal, revealGroup } = useMotionVariants();
  const project = portfolioDemos[0];

  return (
    <motion.div className="relative min-h-[420px]" initial="hidden" animate="visible" variants={revealGroup}>
      <motion.div variants={imageReveal} className="absolute inset-x-0 top-10 overflow-hidden rounded-sm border border-white/10 bg-[#0d1117]">
        <img
          src={project.image}
          alt={`${project.title} website preview`}
          className="h-[330px] w-full object-cover opacity-80"
          style={{ objectPosition: imagePositions[project.slug] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12] via-[#0a0d12]/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <Eyebrow>{project.category}</Eyebrow>
          <p className="mt-3 text-3xl font-black tracking-tight text-white">{project.title}</p>
        </div>
      </motion.div>

      <motion.div variants={reveal} className="absolute -bottom-4 left-6 right-10 rounded-sm border border-white/10 bg-[#191d23] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.36)]">
        <div className="grid grid-cols-3 gap-3">
          {['Strategy', 'Design', 'Build'].map((item, index) => (
            <div key={item} className="border border-white/10 bg-black/20 p-4">
              <p className="text-xs font-black text-[#49d6f3]">0{index + 1}</p>
              <p className="mt-8 text-sm font-black text-white">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function WorkCard({ project, index }) {
  const { imageReveal } = useMotionVariants();

  return (
    <motion.button
      type="button"
      className="group min-h-[360px] overflow-hidden rounded-sm border border-white/10 bg-[#0d1117] text-left"
      onClick={() => navigateTo(`/portfolio/${project.slug}`)}
      variants={imageReveal}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="relative h-56 overflow-hidden">
        <img src={project.image} alt={`${project.title} website preview`} className="h-full w-full object-cover opacity-82 transition duration-700 group-hover:scale-105" style={{ objectPosition: imagePositions[project.slug] || '50% 50%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent" />
      </div>
      <div className="p-5">
        <p className="text-xs font-black text-[#49d6f3]">0{index + 1}</p>
        <h3 className="mt-4 text-2xl font-black leading-none text-white">{project.title}</h3>
        <p className="mt-4 text-sm leading-6 text-white/58">{project.summary}</p>
      </div>
    </motion.button>
  );
}

export default function HomePage() {
  const { reveal, revealGroup } = useMotionVariants();

  return (
    <div className="bg-[#0a0d12] text-white">
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <motion.div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.9fr_0.7fr] lg:items-center" initial="hidden" animate="visible" variants={revealGroup}>
          <div>
            <motion.div variants={reveal}>
              <Eyebrow>YalaByte website development</Eyebrow>
              <h1 className="mt-8 max-w-4xl text-[clamp(3.5rem,7vw,7.8rem)] font-black leading-[0.88] tracking-[-0.07em]">
                Websites that grow your business
              </h1>
              <p className="mt-8 max-w-xl text-base leading-7 text-white/58 sm:text-lg">
                Strategy, design, development, and launch support for companies that need a professional website built with care.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <WebflowButton onClick={() => navigateTo('/contact')}>Start a project</WebflowButton>
                <WebflowButton variant="ghost" onClick={() => navigateTo('/portfolio')}>View work</WebflowButton>
              </div>
            </motion.div>
          </div>

          <HeroVisual />
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-[#191d23] px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.55fr_1fr] lg:items-center">
          <h2 className="max-w-sm text-3xl font-black leading-none tracking-tight">Brands that trust our work</h2>
          <div className="grid grid-cols-2 gap-4 text-sm font-black uppercase tracking-[0.14em] text-white/45 sm:grid-cols-5">
            {brandNames.map((brand) => <span key={brand}>{brand}</span>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div className="mx-auto max-w-[1440px]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={revealGroup}>
          <motion.div variants={reveal} className="mx-auto max-w-2xl text-center">
            <Eyebrow>Features</Eyebrow>
            <h2 className="mt-5 text-4xl font-black leading-none tracking-tight sm:text-5xl">Features built for business success</h2>
            <p className="mt-5 text-sm leading-7 text-white/55">Everything needed to take a website from idea to launch-ready system.</p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {features.map(([title, text], index) => (
              <motion.article key={title} variants={reveal} className="min-h-[250px] border border-white/10 bg-[#11151b] p-6">
                <p className="text-xs font-black text-[#49d6f3]">0{index + 1}</p>
                <h3 className="mt-16 text-2xl font-black text-white">{title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">{text}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-[#191d23] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.55fr_1fr] lg:items-start" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={revealGroup}>
          <motion.div variants={reveal}>
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-5 text-4xl font-black leading-none tracking-tight sm:text-5xl">Digital solutions for growing brands</h2>
            <p className="mt-6 text-sm leading-7 text-white/55">Focused services for businesses that need clear pages, strong UX, and dependable code.</p>
          </motion.div>
          <motion.div variants={revealGroup} className="grid gap-3">
            {services.map(([number, title]) => (
              <motion.button key={title} type="button" variants={reveal} className="grid grid-cols-[70px_1fr] border border-white/10 bg-[#0d1117] p-5 text-left transition hover:border-[#49d6f3]" onClick={() => navigateTo('/services')}>
                <span className="text-sm font-black text-[#49d6f3]">{number}</span>
                <span className="text-xl font-black">{title}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div className="mx-auto max-w-[1440px]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={revealGroup}>
          <motion.div variants={reveal} className="grid gap-8 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <div>
              <Eyebrow>Results</Eyebrow>
              <h2 className="mt-5 text-4xl font-black leading-none tracking-tight sm:text-5xl">Business results at a glance</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/55">A website should do more than look current. It should clarify the business and make action easier.</p>
          </motion.div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {results.map(([value, label]) => (
              <motion.div key={label} variants={reveal} className="border border-white/10 bg-[#11151b] p-6">
                <strong className="text-4xl font-black tracking-tight">{value}</strong>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-white/45">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-[#191d23] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div className="mx-auto max-w-[1440px]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={revealGroup}>
          <motion.div variants={reveal} className="mx-auto max-w-2xl text-center">
            <Eyebrow>Work</Eyebrow>
            <h2 className="mt-5 text-4xl font-black leading-none tracking-tight sm:text-5xl">See our recent client work</h2>
          </motion.div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {portfolioDemos.map((project, index) => <WorkCard key={project.slug} project={project} index={index} />)}
          </div>
          <div className="mt-10 text-center">
            <WebflowButton variant="ghost" onClick={() => navigateTo('/portfolio')}>View full portfolio</WebflowButton>
          </div>
        </motion.div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-8 border border-white/10 bg-[#11151b] p-6 md:grid-cols-[1fr_auto] md:items-center lg:p-10">
          <div>
            <Eyebrow>Start a project</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-none tracking-tight sm:text-5xl">Build your business online with YalaByte.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">Tell us what you need, and we’ll help shape the website structure, design system, and build plan.</p>
          </div>
          <WebflowButton onClick={() => navigateTo('/contact')}>Let’s talk</WebflowButton>
        </div>
      </section>
    </div>
  );
}
