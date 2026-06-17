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
      <nav className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex items-center justify-between gap-5">
          <a href="#home" aria-label="YalaByte home">
            <BrandLogo />
          </a>
          <div className="hidden items-center gap-7 lg:flex">
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
        </div>
        <div className="mt-4 flex gap-4 overflow-x-auto border-t border-white/10 pt-3 lg:hidden">
          {navItems.map((item) => (
            <a key={item.href} className="whitespace-nowrap text-sm font-medium text-slate-300 transition hover:text-white" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
