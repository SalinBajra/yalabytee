import BrandLogo from './BrandLogo.jsx';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Templates', href: '#templates' },
  { label: 'Add-ons', href: '#addons' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-5 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex items-center justify-between gap-5">
          <a href="#home" aria-label="YalaByte home">
            <BrandLogo variant="light" />
          </a>
          <div className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} className="text-sm font-semibold text-slate-600 transition hover:text-navy-950" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-lg bg-navy-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800 sm:inline-flex"
          >
            Start Your Project
          </a>
        </div>
        <div className="mt-3 flex gap-4 overflow-x-auto border-t border-slate-100 pt-3 lg:hidden">
          {navItems.map((item) => (
            <a key={item.href} className="whitespace-nowrap text-sm font-semibold text-slate-600 transition hover:text-navy-950" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
