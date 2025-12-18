import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TaxonConnect() {
  
  // Scroll en haut au chargement
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="pt-24 min-h-screen pb-20 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* BOUTON RETOUR */}
        <Link
          to="/" 
          className="mb-8 inline-flex items-center text-slate-400 hover:text-brand-accent transition-colors group font-mono text-sm"
        >
          <i className="fas fa-arrow-left mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Retour aux projets
        </Link>

        {/* --- HEADER --- */}
        <div className="relative glass-card rounded-3xl p-8 md:p-12 mb-12 overflow-hidden border-t border-slate-700/50">
          {/* Effets de fond (Glow) */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-20 h-20 rounded-2xl bg-slate-800/80 flex items-center justify-center border border-slate-700 shadow-lg text-emerald-400 shrink-0">
              <i className="fas fa-leaf text-4xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Taxon Connect
              </h1>
              <p className="text-xl text-emerald-400 font-mono">
                Bibliothèque de Taxons & API
              </p>
            </div>
          </div>
        </div>

        {/* --- CONTENU --- */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Colonne Gauche : Infos principales */}
          <div className="md:col-span-2 space-y-8">
            <div className="glass-card p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Contexte & Mission
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Projet universitaire réalisé en équipe de 3 (IUT Créteil-Vitry). L'objectif était de concevoir une application web permettant aux utilisateurs de créer et gérer leur propre <strong>bibliothèque de taxons</strong>.
              </p>
              <p className="text-slate-300 leading-relaxed">
                L'application s'appuie sur l'API officielle de l'<strong>INPN (TaxRef)</strong> pour récupérer et afficher en temps réel les informations sur l'ensemble des espèces vivantes recensées.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-emerald-500/50 bg-slate-800/50 border-y border-r border-slate-700">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Mes Responsabilités
              </h2>
              <ul className="text-slate-300 space-y-3 list-none">
                <li className="flex items-start">
                  <i className="fas fa-check text-emerald-500 mt-1.5 mr-3 text-xs"></i>
                  <span><strong>Chef de projet :</strong> Gestion de l'équipe, répartition des tâches et suivi du cahier des charges.</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-emerald-500 mt-1.5 mr-3 text-xs"></i>
                  <span><strong>Développement Backend :</strong> Conception en PHP natif (POO) et optimisation des temps d'exécution.</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-emerald-500 mt-1.5 mr-3 text-xs"></i>
                  <span><strong>Intégration API :</strong> Analyse et exploitation de l'API TaxRef pour récupérer les données biologiques.</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-emerald-500 mt-1.5 mr-3 text-xs"></i>
                  <span><strong>Qualité :</strong> Rédaction de la documentation technique et mise en place de tests unitaires.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Colonne Droite : Stack Technique */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <h3 className="text-lg font-bold mb-4 text-white">Stack Technique</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "PHP 8",
                  "JavaScript",
                  "API REST (TaxRef)",
                  "MySQL",
                  "Bootstrap",
                  "POO",
                  "MVC"
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono rounded bg-slate-800 text-emerald-400 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Note : Pas de lien GitHub public mentionné, donc j'affiche juste le contexte */}
            <div className="glass-card p-6 rounded-2xl text-center bg-slate-800/50 border border-slate-700">
                <div className="text-slate-400 text-sm mb-2">Période</div>
                <div className="text-white font-bold">Sept. 2023 - Janv. 2024</div>
                <div className="w-full h-px bg-slate-700 my-4"></div>
                <div className="text-slate-400 text-sm mb-2">Contexte</div>
                <div className="text-white font-bold">IUT Créteil-Vitry (UPEC)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}