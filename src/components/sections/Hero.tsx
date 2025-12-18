export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-purple opacity-20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent font-mono text-sm mb-2 animate-fade-in-up">
            Étudiant Ingénieur • EFREI Paris
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Bonjour, je suis <br />
            <span className="text-gradient">Kais Dilmi</span>
          </h1>

          <p
            className="text-xl text-slate-400 max-w-lg leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Développeur Fullstack passionné par le Big Data et les architectures modernes. À la
            recherche d&apos;une <strong className="text-brand-light">alternance de 36 mois</strong>{" "}
            dès septembre 2025.
          </p>

          <div
            className="flex flex-wrap gap-4 pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-brand-accent text-brand-dark font-bold rounded-lg hover:bg-brand-secondary transition-colors shadow-lg shadow-brand-accent/25"
            >
              Me contacter
            </a>

            <a
              href="https://github.com/Iska1108"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 glass-card text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <i className="fab fa-github" /> GitHub
            </a>

            <a
              href="https://linkedin.com/in/kais-dilmi"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 glass-card text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <i className="fab fa-linkedin" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="relative hidden md:block animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="glass-card rounded-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500 border-l-4 border-l-brand-accent">
            <div className="flex space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="font-mono text-sm space-y-2 text-slate-300">
              <p>
                <span className="text-brand-purple">const</span>{" "}
                <span className="text-brand-accent">developer</span> ={" "}
                <span className="text-brand-purple">new</span> Engineer();
              </p>
              <p>
                developer.<span className="text-blue-400">education</span> ={" "}
                <span className="text-green-400">&quot;EFREI Paris&quot;</span>;
              </p>
              <p>
                developer.<span className="text-blue-400">stack</span> = [
                <span className="text-green-400">&quot;Angular&quot;</span>,{" "}
                <span className="text-green-400">&quot;React&quot;</span>,{" "}
                <span className="text-green-400">&quot;Spring Boot&quot;</span>];
              </p>
              <p>
                developer.<span className="text-blue-400">status</span> ={" "}
                <span className="text-green-400">&quot;Open to Work&quot;</span>;
              </p>
              <p className="text-slate-500">// Ready to deploy in September 2025</p>
              <p>
                <span className="text-brand-purple">return</span> developer.
                <span className="text-blue-400">createAmazingThings</span>();
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#skills"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-500 hover:text-white transition-colors animate-bounce"
      >
        <i className="fas fa-chevron-down text-2xl" />
      </a>
    </section>
  );
}
