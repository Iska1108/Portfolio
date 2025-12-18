import ParticleBackground from "./components/visuals/ParticleBackground";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="antialiased text-slate-200 font-sans selection:bg-brand-accent selection:text-brand-dark">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
