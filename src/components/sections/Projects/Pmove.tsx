import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Pmove() {
  
  // On garde juste le scroll automatique vers le haut
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // PLUS DE useState, PLUS DE CONDITION if (!open) ...
  // On affiche DIRECTEMENT le contenu détaillé.

  return (
    <div className="pt-24 min-h-screen pb-20 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* BOUTON RETOUR vers l'accueil */}
        <Link
          to="/" 
          className="mb-8 inline-flex items-center text-slate-400 hover:text-brand-accent transition-colors group font-mono text-sm"
        >
          <i className="fas fa-arrow-left mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Retour aux projets
        </Link>

        {/* --- HEADER DU PROJET --- */}
        <div className="relative glass-card rounded-3xl p-8 md:p-12 mb-12 overflow-hidden border-t border-slate-700/50">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-20 h-20 rounded-2xl bg-slate-800/80 flex items-center justify-center border border-slate-700 shadow-lg text-brand-accent shrink-0">
              <i className="fas fa-wheelchair text-4xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Pmove
              </h1>
              <p className="text-xl text-brand-accent font-mono">
                App Mobile & Web
              </p>
            </div>
          </div>
        </div>

        {/* --- CONTENU DU PROJET --- */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Colonne Gauche : Infos */}
          <div className="md:col-span-2 space-y-8">
            <div className="glass-card p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Mission & Impact
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Pmove est une solution d’assistance à la mobilité pour les
                personnes à mobilité réduite, basée sur une architecture
                microservices temps réel.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-brand-accent/50 bg-slate-800/50 border-y border-r border-slate-700">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Architecture
              </h2>
              <ul className="text-slate-300 space-y-2 list-none">
                <li>• API Gateway centrale</li>
                <li>• Microservices indépendants</li>
                <li>• Persistance polyglotte</li>
                <li>• CI/CD avec Docker & GitHub Actions</li>
              </ul>
            </div>
          </div>

          {/* Colonne Droite : Stack & Liens */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <h3 className="text-lg font-bold mb-4 text-white">Stack Technique</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React Native",
                  "Node.js",
                  "Neo4j",
                  "MongoDB",
                  "Redis",
                  "Docker",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono rounded bg-slate-800 text-brand-accent border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center bg-slate-800/50 border border-slate-700">
              <a
                href="https://github.com/PMRSAE5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-slate-800 hover:bg-brand-accent hover:text-brand-dark text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 border border-slate-600 hover:border-brand-accent"
              >
                <i className="fab fa-github text-xl" />
                Voir sur GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}