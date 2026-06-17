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
      className="transition hover:text-navy-950"
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
      className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyanbrand-500 hover:bg-white hover:text-navy-950"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-100 px-5 py-12 text-navy-950 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.7fr_1fr_0.8fr]">
        <div>
          <BrandLogo variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
            Custom websites and digital solutions for businesses ready to build a stronger online presence.
          </p>
        </div>
        <div>
          <p className="font-semibold">Quick links</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            {routes.map((route) => (
              <FooterLink key={route.path} to={route.path}>{route.label}</FooterLink>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Services</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            {services.slice(0, 5).map((service) => (
              <FooterLink key={service.title} to="/services">{service.title}</FooterLink>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <p className="mt-4 text-sm leading-7 text-slate-600">info@yalabyte.com</p>
          <p className="text-sm leading-7 text-slate-600">Business inquiries and project consultations</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <SocialLink href="https://www.instagram.com/yalabyte/">Instagram</SocialLink>
            <SocialLink href="https://www.facebook.com/profile.php?id=61590901624020&mibextid=wwXIfr">Facebook</SocialLink>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-200 pt-6 text-sm text-slate-500">
        &copy; {new Date().getFullYear()} YalaByte. All rights reserved.
      </div>
    </footer>
  );
}
