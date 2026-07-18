import { useState } from 'react';
import BrandLogo from './BrandLogo.jsx';
import { navigateTo, routes } from '../utils/routes.js';

function NavLink({ item, currentPath, onNavigate }) {
  const isActive = currentPath === item.path;

  return (
    <a
      href={item.path}
      aria-current={isActive ? 'page' : undefined}
      onClick={(event) => onNavigate(event, item.path)}
      className={`text-sm font-bold transition ${isActive ? 'text-white' : 'text-white/58 hover:text-white'}`}
    >
      {item.label}
    </a>
  );
}

export default function Header({ currentPath }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (event, path) => {
    event.preventDefault();
    setMenuOpen(false);
    navigateTo(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090c10]/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10" aria-label="Primary navigation">
        <a href="/" className="flex items-center gap-3" aria-label="YalaByte home" onClick={(event) => goTo(event, '/')}>
          <BrandLogo />
          <span className="text-sm font-black uppercase tracking-[0.22em] text-white">YalaByte</span>
        </a>

        <div className="hidden items-center gap-9 lg:flex" aria-label="Main menu">
          {routes.map((item) => (
            <NavLink key={item.path} item={item} currentPath={currentPath} onNavigate={goTo} />
          ))}
        </div>

        <a href="/contact" className="hidden rounded-md bg-[#49d6f3] px-4 py-2 text-xs font-black text-[#071015] transition hover:bg-white lg:inline-flex" onClick={(event) => goTo(event, '/contact')}>
          Discuss a project
        </a>

        <button
          type="button"
          className="rounded-md border border-white/12 px-3 py-2 text-xs font-black text-white lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      <div id="mobile-navigation" className={`${menuOpen ? 'grid' : 'hidden'} gap-1 border-t border-white/10 bg-[#090c10] px-5 py-4 lg:hidden`}>
        {routes.map((item) => (
          <a
            key={item.path}
            href={item.path}
            aria-current={currentPath === item.path ? 'page' : undefined}
            className="rounded-md px-3 py-3 text-sm font-bold text-white/72 hover:bg-white/[0.06] hover:text-white"
            onClick={(event) => goTo(event, item.path)}
          >
            {item.label}
          </a>
        ))}
        <a href="/contact" className="mt-2 rounded-md bg-[#49d6f3] px-3 py-3 text-sm font-black text-[#071015]" onClick={(event) => goTo(event, '/contact')}>
          Discuss a project
        </a>
      </div>
    </header>
  );
}
