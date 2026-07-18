import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';
import { useMotionVariants } from '../components/MotionSection.jsx';
import { navigateTo } from '../utils/routes.js';
import { portfolioDemos } from '../data/portfolioDemos.js';

const brandNames = ['Aster', 'Morrow', 'Northstar', 'FinByte', 'ChatByte'];

const studioImages = {
  hero: '/images/yalabyte-hero-workspace.jpg',
  design: '/images/yalabyte-feature-design.jpg',
  build: '/images/yalabyte-feature-build.jpg',
  growth: '/images/yalabyte-feature-growth.jpg',
  support: '/images/yalabyte-feature-support.jpg'
};

const capabilities = [
  {
    number: '01',
    title: 'Clear website strategy',
    text: 'Offer, audience, sitemap, page goals, and conversion path before design starts.',
    image: studioImages.design
  },
  {
    number: '02',
    title: 'Modern visual systems',
    text: 'Distinct typography, reusable components, responsive layouts, and polished page rhythm.',
    image: studioImages.growth
  },
  {
    number: '03',
    title: 'Custom web development',
    text: 'React builds, forms, portals, dashboards, integrations, and performance-minded delivery.',
    image: studioImages.build
  },
  {
    number: '04',
    title: 'Launch and support',
    text: 'Deployment, DNS guidance, QA, analytics, maintenance, and useful post-launch improvements.',
    image: studioImages.support
  }
];

const results = [
  ['500K', 'tracked page views'],
  ['95%', 'mobile-ready score'],
  ['2,400', 'support requests handled'],
  ['1.2M', 'demo interactions']
];

const services = [
  ['01', 'Website design and development', 'Sharp marketing sites for service businesses.'],
  ['02', 'Website redesign systems', 'Modern rebuilds without losing business context.'],
  ['03', 'Custom portals and dashboards', 'Useful web tools for internal and client workflows.'],
  ['04', 'SEO-ready launch foundations', 'Clean structure, performance, QA, and launch support.']
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
  const { imageReveal, reveal, revealGroup, reduceMotion } = useMotionVariants();

  return (
    <motion.div className="relative min-h-[470px] lg:min-h-[610px]" initial="hidden" animate="visible" variants={revealGroup}>
      <motion.div
        variants={imageReveal}
        className="absolute inset-x-0 top-0 overflow-hidden rounded-sm border border-white/10 bg-[#0d1117] shadow-[0_34px_90px_rgba(0,0,0,0.42)]"
        whileHover={reduceMotion ? undefined : { y: -8 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={studioImages.hero}
          alt="YalaByte development workspace"
          className="h-[430px] w-full object-cover opacity-85 sm:h-[540px] lg:h-[610px]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0d12] via-[#0a0d12]/30 to-transparent" />
        <div className="absolute left-5 top-5 border border-white/12 bg-black/40 px-4 py-3 backdrop-blur-md">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#49d6f3]">Live studio</p>
          <p className="mt-2 text-sm font-black text-white">Design + build in one track</p>
        </div>
      </motion.div>

      <motion.div
        variants={reveal}
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-4 left-5 right-8 border border-white/10 bg-[#191d23]/95 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.36)] backdrop-blur-xl sm:left-8 sm:right-16"
      >
        <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#49d6f3]">Project cockpit</p>
            <p className="mt-4 max-w-sm text-xl font-black leading-tight text-white">Strategy, interface design, responsive development, and launch QA.</p>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {['UX', 'UI', 'QA'].map((item) => (
              <span key={item} className="border border-white/10 bg-black/25 px-3 py-2 text-xs font-black text-white/70">{item}</span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={reveal}
        className="absolute right-0 top-16 hidden w-36 bg-[#49d6f3] p-4 text-[#071015] shadow-[0_22px_70px_rgba(73,214,243,0.22)] xl:block"
      >
        <strong className="block text-4xl font-black leading-none">95%</strong>
        <span className="mt-2 block text-[10px] font-black uppercase tracking-[0.18em]">mobile QA score</span>
      </motion.div>
    </motion.div>
  );
}

function CapabilityCard({ item, featured = false }) {
  const { imageReveal, reveal, reduceMotion } = useMotionVariants();

  return (
    <motion.article
      variants={reveal}
      className={`group overflow-hidden border border-white/10 bg-[#11151b] ${featured ? 'lg:row-span-2' : ''}`}
      whileHover={reduceMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div variants={imageReveal} className={`relative overflow-hidden ${featured ? 'h-[430px]' : 'h-56'}`}>
        <img src={item.image} alt={`${item.title} workspace`} className="h-full w-full object-cover opacity-78 transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11151b] via-transparent to-transparent" />
      </motion.div>
      <div className="p-6">
        <p className="text-xs font-black text-[#49d6f3]">{item.number}</p>
        <h3 className="mt-6 max-w-md text-3xl font-black leading-none tracking-tight text-white">{item.title}</h3>
        <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">{item.text}</p>
      </div>
    </motion.article>
  );
}

function WorkCard({ project, index }) {
  const { imageReveal, reduceMotion } = useMotionVariants();

  return (
    <motion.button
      type="button"
      className="group relative min-h-[370px] overflow-hidden bg-[#0d1117] text-left"
      onClick={() => navigateTo(`/portfolio/${project.slug}`)}
      variants={imageReveal}
      whileHover={reduceMotion ? undefined : { y: -8 }}
      whileTap={{ scale: 0.99 }}
    >
      <img src={project.image} alt={`${project.title} website preview`} className="absolute inset-0 h-full w-full object-cover opacity-78 transition duration-700 group-hover:scale-105" style={{ objectPosition: imagePositions[project.slug] || '50% 50%' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#49d6f3]">0{index + 1} / {project.category}</p>
        <h3 className="mt-3 text-3xl font-black leading-none tracking-tight text-white">{project.title}</h3>
      </div>
    </motion.button>
  );
}

export default function HomePage() {
  const { reveal, revealGroup, imageReveal, reduceMotion } = useMotionVariants();

  return (
    <div className="bg-[#0a0d12] text-white">
      <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="pointer-events-none absolute right-[-5vw] top-0 hidden text-[36rem] font-black leading-none tracking-[-0.09em] text-white/[0.025] lg:block">YB</div>
        <motion.div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.9fr_0.7fr] lg:items-center" initial="hidden" animate="visible" variants={revealGroup}>
          <div>
            <motion.div variants={reveal}>
              <Eyebrow>YalaByte website development</Eyebrow>
              <h1 className="mt-8 max-w-4xl text-[clamp(3.7rem,7.4vw,8.4rem)] font-black leading-[0.86] tracking-[-0.075em]">
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
          <motion.div variants={reveal} className="grid gap-8 lg:grid-cols-[0.55fr_1fr] lg:items-end">
            <div>
            <Eyebrow>Features</Eyebrow>
              <h2 className="mt-5 text-4xl font-black leading-none tracking-tight sm:text-5xl">Features built for business success</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/55">Everything needed to take a website from idea to launch-ready system, shaped by strategy and finished in code.</p>
          </motion.div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <CapabilityCard item={capabilities[0]} featured />
            <div className="grid gap-4">
              {capabilities.slice(1).map((item) => <CapabilityCard key={item.title} item={item} />)}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#191d23] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={revealGroup}>
          <motion.div variants={imageReveal} className="relative min-h-[520px] overflow-hidden bg-[#0d1117]">
            <img src={studioImages.build} alt="YalaByte development desk" className="absolute inset-0 h-full w-full object-cover opacity-72" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/18 to-transparent" />
            <motion.div
              className="absolute bottom-6 left-6 right-6 border border-white/10 bg-black/45 p-5 backdrop-blur-xl"
              animate={reduceMotion ? undefined : { x: [0, 10, 0] }}
              transition={reduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#49d6f3]">Build desk</p>
              <p className="mt-4 max-w-md text-2xl font-black leading-tight">Design decisions translated into production-ready pages.</p>
            </motion.div>
          </motion.div>
          <motion.div variants={reveal}>
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-5 text-4xl font-black leading-none tracking-tight sm:text-5xl">Digital solutions for growing brands</h2>
            <p className="mt-6 text-sm leading-7 text-white/55">Focused services for businesses that need clear pages, strong UX, and dependable code.</p>
            <motion.div variants={revealGroup} className="mt-10 grid gap-0 border-y border-white/10">
              {services.map(([number, title, text]) => (
                <motion.button key={title} type="button" variants={reveal} className="group grid gap-4 border-b border-white/10 py-6 text-left last:border-b-0 sm:grid-cols-[84px_1fr] sm:items-start" onClick={() => navigateTo('/services')}>
                  <span className="text-sm font-black text-[#49d6f3]">{number}</span>
                  <span>
                    <span className="block text-2xl font-black leading-none transition group-hover:text-[#49d6f3]">{title}</span>
                    <span className="mt-3 block text-sm leading-6 text-white/52">{text}</span>
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-stretch" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={revealGroup}>
          <motion.div variants={reveal} className="bg-[#11151b] p-6 sm:p-8 lg:p-10">
            <div>
              <Eyebrow>Results</Eyebrow>
              <h2 className="mt-5 text-4xl font-black leading-none tracking-tight sm:text-5xl">Business results at a glance</h2>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">A website should do more than look current. It should clarify the business, make action easier, and stay reliable after launch.</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {results.map(([value, label]) => (
                <motion.div key={label} variants={reveal} className="border border-white/10 bg-black/20 p-5">
                  <strong className="text-4xl font-black tracking-tight">{value}</strong>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-white/45">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={imageReveal} className="relative min-h-[430px] overflow-hidden">
            <img src={studioImages.growth} alt="Website growth dashboard workspace" className="absolute inset-0 h-full w-full object-cover opacity-76" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#49d6f3]">Launch proof</p>
              <p className="mt-4 max-w-md text-2xl font-black leading-tight">Cleaner pages, faster decisions, stronger post-launch support.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-[#191d23] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div className="mx-auto max-w-[1440px]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={revealGroup}>
          <motion.div variants={reveal} className="mx-auto max-w-2xl text-center">
            <Eyebrow>Work</Eyebrow>
            <h2 className="mt-5 text-4xl font-black leading-none tracking-tight sm:text-5xl">See our recent client work</h2>
          </motion.div>
          <div className="mt-12 grid gap-4 md:grid-cols-[1.1fr_0.9fr_1fr]">
            {portfolioDemos.map((project, index) => <WorkCard key={project.slug} project={project} index={index} />)}
          </div>
          <div className="mt-10 text-center">
            <WebflowButton variant="ghost" onClick={() => navigateTo('/portfolio')}>View full portfolio</WebflowButton>
          </div>
        </motion.div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] overflow-hidden border border-white/10 bg-[#11151b] md:grid-cols-[1fr_0.48fr]">
          <div className="p-6 md:p-8 lg:p-10">
            <div>
              <Eyebrow>Start a project</Eyebrow>
              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-none tracking-tight sm:text-5xl">Build your business online with YalaByte.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">Tell us what you need, and we’ll help shape the website structure, design system, and build plan.</p>
            </div>
            <div className="mt-8">
              <WebflowButton onClick={() => navigateTo('/contact')}>Let’s talk</WebflowButton>
            </div>
          </div>
          <div className="relative min-h-[300px]">
            <img src={studioImages.support} alt="YalaByte project support workspace" className="absolute inset-0 h-full w-full object-cover opacity-78" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#11151b] via-[#11151b]/25 to-transparent md:bg-gradient-to-l" />
          </div>
        </div>
      </section>
    </div>
  );
}
