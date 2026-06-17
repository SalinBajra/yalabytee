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
      className={`whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-semibold transition ${isActive ? 'bg-white text-navy-950' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
    >
      {item.label}
    </a>
  );
}

export default function Header({ currentPath }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111315]/95 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
      <nav className="mx-auto max-w-7xl px-5 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex items-center justify-between gap-5">
          <a
            href="/"
            aria-label="YalaByte home"
            onClick={(event) => {
              event.preventDefault();
              navigateTo('/');
            }}
          >
            <BrandLogo />
          </a>
          <div className="hidden items-center gap-5 lg:flex">
            {routes.map((item) => (
              <NavLink key={item.path} item={item} currentPath={currentPath} />
            ))}
          </div>
          <a
            href="/contact"
            onClick={(event) => {
              event.preventDefault();
              navigateTo('/contact');
            }}
            className="hidden rounded-md bg-cyanbrand-500 px-4 py-2.5 text-sm font-bold text-navy-950 transition hover:bg-cyanbrand-400 sm:inline-flex"
          >
            Start Your Project
          </a>
        </div>
        <div className="mt-3 flex gap-4 overflow-x-auto border-t border-white/10 pt-3 lg:hidden">
          {routes.map((item) => (
            <NavLink key={item.path} item={item} currentPath={currentPath} />
          ))}
        </div>
      </nav>
    </header>
  );
}
