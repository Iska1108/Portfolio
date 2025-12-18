import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Layout & Visuals
import ParticleBackground from "./components/visuals/ParticleBackground";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Sections de la Home
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

// Ta nouvelle page de détails (assure-toi que le chemin d'import est bon)
import Pmove from "./components/sections/Projects/Pmove";
import TaxonConnect from "./components/sections/Projects/TaxonConnect";
import AirQualityDash from "./components/sections/Projects/AirQualityDash";

/**
 * Composant utilitaire pour remonter en haut de page
 * à chaque changement de route
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * Composant HOME : regroupe tout ce qui était sur ta page unique avant
 */
function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="antialiased text-slate-200 font-sans selection:bg-brand-accent selection:text-brand-dark min-h-screen flex flex-col">
        {/* Le background et la navbar sont en dehors des Routes pour être visibles partout */}
        <ParticleBackground />
        <Navbar />
        
        {/* Gestion du scroll automatique */}
        <ScrollToTop />

        {/* Le contenu change ici selon l'URL */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/pmove" element={<Pmove />} />
            <Route path="/project/taxon-connect" element={<TaxonConnect />} />
            <Route path="/project/air-quality-dash" element={<AirQualityDash />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}