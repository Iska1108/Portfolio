export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-bg-card">
      <div className="section py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Dilmi Kaïs — Portfolio
          </p>

          <nav className="flex items-center gap-4">
            <a href="#home" className="text-sm text-text-muted hover:text-text">
              Accueil
            </a>
            <a href="#projects" className="text-sm text-text-muted hover:text-text">
              Projets
            </a>
            <a href="#skills" className="text-sm text-text-muted hover:text-text">
              Compétences
            </a>
            <a href="#education" className="text-sm text-text-muted hover:text-text">
              Formations
            </a>
            <a
              href="mailto:kaisdilmi2003@gmail.com"
              className="text-sm text-text-muted hover:text-text"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
