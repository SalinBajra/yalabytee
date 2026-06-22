import { useState } from 'react';
import BrandLogo from './BrandLogo.jsx';
import { navigateTo, routes } from '../utils/routes.js';

function NavLink({ item, currentPath }) {
  const isActive = currentPath === item.path;

  return (
    <a
      href={item.path}
      onClick={(event) => {
        event.preventDefault();
        navigateTo(item.path);
      }}
      className={`relative whitespace-nowrap px-3 py-2 text-sm font-semibold transition ${isActive ? 'text-white after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:bg-cyanbrand-400' : 'text-slate-400 hover:text-white'}`}
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070716]/95 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-5 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <a
              href="/"
              aria-label="YalaByte home"
              onClick={(event) => {
                goTo(event, '/');
              }}
            >
              <BrandLogo />
            </a>
            <div className="hidden items-center gap-4 border-l border-white/15 pl-4 xl:flex">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.34em] text-slate-100">Yala Byte</p>
                <p className="mt-0.5 text-xs text-slate-400">Your vision, built for the web.</p>
              </div>
            </div>
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            {routes.map((item) => (
              <NavLink key={item.path} item={item} currentPath={currentPath} />
            ))}
          </div>
          <a
            href="/contact"
            onClick={(event) => {
              goTo(event, '/contact');
            }}
            className="hidden rounded-md bg-cyanbrand-400 px-4 py-2.5 text-sm font-bold text-navy-950 transition hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
          >
            Discuss a project <span aria-hidden="true" className="ml-2">↗</span>
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-white sm:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="text-xl leading-none">{menuOpen ? '×' : '≡'}</span>
          </button>
        </div>
        <div className={`${menuOpen ? 'grid' : 'hidden'} mt-3 gap-1 border-t border-white/10 pt-3 sm:flex sm:overflow-x-auto lg:hidden`}>
          {routes.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(event) => goTo(event, item.path)}
              className={`rounded-md px-3 py-2.5 text-sm font-semibold ${currentPath === item.path ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
