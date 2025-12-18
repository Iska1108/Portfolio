import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AirQualityDash() {
  
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
          {/* Effets de fond (Bleu aérien) */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-20 h-20 rounded-2xl bg-slate-800/80 flex items-center justify-center border border-slate-700 shadow-lg text-sky-400 shrink-0">
              <i className="fas fa-wind text-4xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Air Quality Dash
              </h1>
              <p className="text-xl text-sky-400 font-mono">
                Dashboard Environnemental Interactif
              </p>
            </div>
          </div>
        </div>

        {/* --- CONTENU --- */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Colonne Gauche : Description & Features */}
          <div className="md:col-span-2 space-y-8">
            <div className="glass-card p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Description du Projet
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Ce projet est un <strong>tableau de bord innovant</strong> développé avec React et Tailwind CSS. Il a pour but d'analyser et de présenter des données environnementales complexes (polluants, météo, vents) de manière claire et intuitive.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                Il propose un véritable système d'information graphique permettant aux utilisateurs de visualiser l'état de l'atmosphère en temps réel.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-sky-500/50 bg-slate-800/50 border-y border-r border-slate-700">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Fonctionnalités Clés
              </h2>
              <ul className="text-slate-300 space-y-4 list-none">
                <li className="flex items-start">
                  <div className="mt-1 mr-3 min-w-[20px] text-center">
                    <i className="fas fa-smog text-sky-400 text-sm"></i>
                  </div>
                  <div>
                    <strong className="text-white">Analyse des Polluants :</strong> Visualisation des niveaux de divers polluants dans l'atmosphère via des jauges interactives.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 min-w-[20px] text-center">
                    <i className="fas fa-wind text-sky-400 text-sm"></i>
                  </div>
                  <div>
                    <strong className="text-white">Carte des Vents :</strong> Affichage des courants de vent actuels sur une carte interactive intégrée (Leaflet/Mapbox).
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 min-w-[20px] text-center">
                    <i className="fas fa-cloud-sun text-sky-400 text-sm"></i>
                  </div>
                  <div>
                    <strong className="text-white">Données Météorologiques :</strong> Mises à jour et prévisions détaillées directement accessibles depuis le dashboard.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 min-w-[20px] text-center">
                    <i className="fas fa-chart-area text-sky-400 text-sm"></i>
                  </div>
                  <div>
                    <strong className="text-white">Visualisations Graphiques :</strong> Utilisation de diagrammes (Recharts/Chart.js) pour une analyse facile des tendances.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Colonne Droite : Stack & Infos */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <h3 className="text-lg font-bold mb-4 text-white">Stack Technique</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Tailwind CSS",
                  "Node.js",
                  "SQL",
                  "API Météo"
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono rounded bg-slate-800 text-sky-400 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center bg-slate-800/50 border border-slate-700">
              <a
                href="https://github.com/Leele09/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-slate-800 hover:bg-sky-500 hover:text-white text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 border border-slate-600 hover:border-sky-500 mb-6"
              >
                <i className="fab fa-github text-xl" />
                Voir sur GitHub
              </a>

              <div className="text-left space-y-4 pt-4 border-t border-slate-700/50">
                 <div>
                    <div className="text-slate-400 text-xs uppercase font-mono mb-1">Période</div>
                    <div className="text-white font-bold text-sm">Févr. 2024 - Avr. 2024</div>
                 </div>
                 <div>
                    <div className="text-slate-400 text-xs uppercase font-mono mb-1">Contexte</div>
                    <div className="text-white font-bold text-sm">IUT Créteil-Vitry (UPEC)</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}