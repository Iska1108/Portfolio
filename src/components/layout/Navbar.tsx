import { useEffect, useState } from "react";

type NavLink = { name: string; href: string };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: "Accueil", href: "#home" },
    { name: "Compétences", href: "#skills" },
    { name: "Expérience", href: "#experience" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-mono tracking-tighter">
          <span className="text-brand-accent">~/</span> KD<span className="text-brand-accent">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-brand-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-slate-300 focus:outline-none"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav absolute w-full left-0 top-full p-4 flex flex-col space-y-4 shadow-xl border-t border-slate-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-brand-accent block px-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
