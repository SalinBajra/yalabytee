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
      className="yb-nav-link"
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
    <header className="yb-site-header">
      <nav className="yb-site-nav" aria-label="Primary navigation">
        <a href="/" className="yb-brand-link" aria-label="YalaByte home" onClick={(event) => goTo(event, '/')}>
          <BrandLogo />
          <span>YalaByte</span>
        </a>

        <div className="yb-desktop-nav" aria-label="Main menu">
          {routes.map((item) => (
            <NavLink key={item.path} item={item} currentPath={currentPath} onNavigate={goTo} />
          ))}
        </div>

        <a href="/contact" className="yb-nav-cta" onClick={(event) => goTo(event, '/contact')}>
          Discuss a project
        </a>

        <button
          type="button"
          className="yb-menu-button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </nav>

      <div id="mobile-navigation" className={`yb-mobile-nav ${menuOpen ? 'is-open' : ''}`}>
        {routes.map((item) => (
          <a
            key={item.path}
            href={item.path}
            aria-current={currentPath === item.path ? 'page' : undefined}
            onClick={(event) => goTo(event, item.path)}
          >
            {item.label}
          </a>
        ))}
        <a href="/contact" onClick={(event) => goTo(event, '/contact')}>
          Discuss a project
        </a>
      </div>
    </header>
  );
}
