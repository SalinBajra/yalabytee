import { navigateTo } from '../utils/routes.js';

const services = [
  { number: '01', title: 'Website Development', text: 'Polished websites with thoughtful page structure—fast, accessible, and conversion-focused.' },
  { number: '02', title: 'UI & Product Design', text: 'Purposeful interfaces and interaction systems that scale across pages and platforms.' },
  { number: '03', title: 'SEO & Launch Foundations', text: 'Search-ready architecture and performance basics so launch day is dependable.' },
  { number: '04', title: 'Maintenance & Support', text: 'Ongoing care, updates, and iterative improvements after your site goes live.' }
];

export default function ServicesPanel() {
  return (
    <section className="services-panel" aria-labelledby="services-heading">
      <div className="studio-container">
        <div className="services-panel__heading">
          <p>Services / 01</p>
          <h2 id="services-heading">What we do, clearly</h2>
        </div>
        <div className="services-panel__list">
          {services.map((s) => (
            <button key={s.title} type="button" className="service-row" onClick={() => navigateTo('/services')}>
              <div className="service-row__left"><span>{s.number}</span></div>
              <div className="service-row__main">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
