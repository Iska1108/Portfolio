import { useState } from "react";
import { useLanguage, type Lang } from "../../i18n/LanguageContext";

type NavLink = { name: string; href: string };

function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();
  const options: Lang[] = ["fr", "en", "ko"];

  return (
    <div role="group" aria-label={t("Choisir la langue", "Choose language")} className="flex items-center border border-white/30 text-xs">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => setLang(opt)}
          aria-pressed={lang === opt}
          className={`px-2.5 py-1 uppercase font-bold transition-colors ${
            lang === opt ? "bg-white text-black" : "text-white/70 hover:text-white"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // liens absolus : ils fonctionnent aussi depuis les pages projets
  const navLinks: NavLink[] = [
    { name: t("Expérience", "Experience"), href: "/#experience" },
    { name: t("Formation", "Education"), href: "/#education" },
    { name: t("Taekwondo", "Taekwondo"), href: "/#about" },
    { name: t("Projets", "Projects"), href: "/#projects" },
    { name: t("Compétences", "Skills"), href: "/#skills" },
    { name: t("Contact", "Contact"), href: "/#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <a href="/#home" className="font-display font-black text-lg uppercase tracking-tight">
          Kaïs Dilmi
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold hover:text-brand-accent transition-colors">
              {link.name}
            </a>
          ))}
          <LanguageToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`} aria-hidden="true" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/15 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display font-extrabold text-2xl uppercase hover:text-brand-accent"
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
