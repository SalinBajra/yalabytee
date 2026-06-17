import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Process from './components/Process.jsx';
import Portfolio from './components/Portfolio.jsx';
import Templates from './components/Templates.jsx';
import AddOns from './components/AddOns.jsx';
import Team from './components/Team.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-ink antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Portfolio />
        <Templates />
        <AddOns />
        <Team />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
