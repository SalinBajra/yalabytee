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
      className={`whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-semibold transition ${isActive ? 'bg-slate-100 text-navy-950' : 'text-slate-600 hover:bg-slate-50 hover:text-navy-950'}`}
    >
      {item.label}
    </a>
  );
}

export default function Header({ currentPath }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
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
            <BrandLogo variant="light" />
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
            className="hidden rounded-lg bg-navy-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800 sm:inline-flex"
          >
            Start Your Project
          </a>
        </div>
        <div className="mt-3 flex gap-4 overflow-x-auto border-t border-slate-100 pt-3 lg:hidden">
          {routes.map((item) => (
            <NavLink key={item.path} item={item} currentPath={currentPath} />
          ))}
        </div>
      </nav>
    </header>
  );
}
