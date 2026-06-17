import { services } from '../data/siteData.js';
import BrandLogo from './BrandLogo.jsx';
import { navigateTo, routes } from '../utils/routes.js';

function FooterLink({ to, children }) {
  return (
    <a
      href={to}
      onClick={(event) => {
        event.preventDefault();
        navigateTo(to);
      }}
      className="hover:text-white"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.7fr_1fr_0.8fr]">
        <div>
          <BrandLogo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            Professional websites and complete digital solutions for businesses ready to build a stronger online presence.
          </p>
        </div>
        <div>
          <p className="font-semibold">Quick links</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            {routes.map((route) => (
              <FooterLink key={route.path} to={route.path}>{route.label}</FooterLink>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Services</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            {services.slice(0, 5).map((service) => (
              <FooterLink key={service.title} to="/services">{service.title}</FooterLink>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <p className="mt-4 text-sm leading-7 text-slate-300">info@yalabyte.com</p>
          <p className="text-sm leading-7 text-slate-300">Business inquiries and project consultations</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-400">
        &copy; {new Date().getFullYear()} YalaByte. All rights reserved.
      </div>
    </footer>
  );
}
