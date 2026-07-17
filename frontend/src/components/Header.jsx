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
      className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? 'bg-slate-100 text-slate-900 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.08)]' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
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
    <header className="site-header sticky top-0 z-50">
      <nav className="mx-auto max-w-[1500px] px-4 py-2 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-2 py-1 shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:gap-4 sm:px-3">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <a
              href="/"
              aria-label="YalaByte home"
              onClick={(event) => {
                goTo(event, '/');
              }}
            >
              <BrandLogo />
            </a>
            <div className="flex min-w-0 items-center border-l border-white/15 pl-3 sm:pl-4">
              <p className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.24em] text-slate-100 sm:text-xs sm:tracking-[0.28em]">YalaByte</p>
            </div>
          </div>
          <div className="hidden items-center gap-1 rounded-full border border-white/8 bg-transparent p-1 lg:flex">
            {routes.map((item) => (
              <NavLink key={item.path} item={item} currentPath={currentPath} />
            ))}
          </div>
          <a
            href="/contact"
            onClick={(event) => {
              goTo(event, '/contact');
            }}
            className="hidden rounded-full bg-cyanbrand-500 px-5 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-cyanbrand-600 sm:inline-flex"
          >
            Discuss a Project <span aria-hidden="true" className="ml-2">↗</span>
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/[0.04] text-white sm:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="text-xl leading-none">{menuOpen ? '×' : '≡'}</span>
          </button>
        </div>
        <div className={`${menuOpen ? 'grid' : 'hidden'} mt-3 gap-1 rounded-2xl border border-white/10 bg-black/25 p-2 sm:flex sm:justify-between sm:overflow-x-auto lg:hidden`}>
          {routes.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(event) => goTo(event, item.path)}
              className={`whitespace-nowrap rounded-xl px-3 py-2.5 text-sm font-semibold sm:px-3 ${currentPath === item.path ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
