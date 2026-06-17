import BrandLogo from './BrandLogo.jsx';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Templates', href: '#templates' },
  { label: 'Contact', href: '#contact' }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/92 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#home" aria-label="YalaByte home">
          <BrandLogo />
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 shadow-line transition hover:bg-cyanbrand-100 sm:inline-flex"
        >
          Start Your Project
        </a>
      </nav>
    </header>
  );
}
