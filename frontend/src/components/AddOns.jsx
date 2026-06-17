import SectionHeader from './SectionHeader.jsx';
import { addons } from '../data/siteData.js';

export default function AddOns() {
  return (
    <section id="addons" className="bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Customization and Add-ons"
          title="More than design: we help with the pieces needed to go live"
          text="A professional website often needs more than pages. YalaByte can support the setup, configuration, integrations, and add-ons that help your business operate online."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {addons.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <span className="block h-1 w-10 rounded-sm bg-cyanbrand-500" />
              <p className="mt-5 text-sm font-semibold leading-6 text-navy-950">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
