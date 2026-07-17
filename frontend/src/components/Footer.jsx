import { services } from '../data/siteData.js';
import BrandLogo from './BrandLogo.jsx';
import { navigateTo, routes } from '../utils/routes.js';
import { whatsappUrl } from './ContactShortcuts.jsx';

function FooterLink({ to, children }) {
  return (
    <a
      href={to}
      onClick={(event) => {
        event.preventDefault();
        navigateTo(to);
      }}
      className="yb-footer-link"
    >
      {children}
    </a>
  );
}

function SocialLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={children}
      className="yb-social-link"
    >
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="7" r="1.1" fill="currentColor" />
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="yb-footer">
      <div className="yb-footer__grid">
        <div className="yb-footer__brand">
          <BrandLogo />
          <p>
            Focused websites and digital tools for service businesses and growing teams.
          </p>
        </div>
        <div>
          <p className="yb-footer-title">Quick links</p>
          <div className="yb-footer-list">
            {routes.map((route) => (
              <FooterLink key={route.path} to={route.path}>{route.label}</FooterLink>
            ))}
          </div>
        </div>
        <div>
          <p className="yb-footer-title">Services</p>
          <div className="yb-footer-list">
            {services.slice(0, 5).map((service) => (
              <FooterLink key={service.title} to="/services">{service.title}</FooterLink>
            ))}
          </div>
        </div>
        <div>
          <p className="yb-footer-title">Contact</p>
          <a className="yb-footer-link" href="mailto:info@yalabyte.com">info@yalabyte.com</a>
          <p className="yb-footer-note">Business inquiries and project consultations</p>
          <div className="yb-footer-socials">
            <SocialLink href="https://www.instagram.com/yalabyte/">Instagram</SocialLink>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="yb-social-link"
            >
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2a9.84 9.84 0 0 0-8.51 14.77L2 22l5.38-1.49A9.98 9.98 0 0 0 12.04 22 9.96 9.96 0 0 0 22 12.04 9.96 9.96 0 0 0 12.04 2Zm0 18.32a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.2.89.85-3.12-.2-.32a8.2 8.2 0 0 1-1.27-4.4 8.32 8.32 0 1 1 8.32 8.28Zm4.56-6.23c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.57.12-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.12-1.06-.39-2.01-1.24a7.53 7.53 0 0 1-1.39-1.73c-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.43.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.57-1.38-.78-1.89-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.12.16 1.78 2.71 4.3 3.8.6.26 1.07.41 1.44.52.6.19 1.15.16 1.58.1.48-.08 1.48-.61 1.69-1.19.21-.59.21-1.09.15-1.19-.06-.11-.23-.17-.48-.29Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="yb-footer__bottom">
        &copy; {new Date().getFullYear()} YalaByte. All rights reserved.
      </div>
    </footer>
  );
}
