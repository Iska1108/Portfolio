import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// --- IMPORTS DES ASSETS ---
import imgMain from "../../../assets/dashboard-main.png"; 
import imgMap from "../../../assets/dashboard-map.png";
import imgList from "../../../assets/dashboard-list.png";
import logoQualitair from "../../../assets/qualitair-logo.png";

export default function AirQualityDash() {
  
  // States pour gérer les erreurs de chargement d'images
  const [logoError, setLogoError] = useState(false);

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
          {/* Effets de fond (Thème Aérien : Sky/Blue) */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            
            {/* LOGO DU PROJET */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-slate-800/80 flex items-center justify-center border border-slate-700 shadow-lg shrink-0 overflow-hidden">
               {!logoError ? (
                  <img 
                    src={logoQualitair} 
                    alt="Logo Qualitair" 
                    className="w-full h-full object-cover"
                    onError={() => setLogoError(true)}
                  />
               ) : (
                  // Fallback si l'image ne charge pas
                  <i className="fas fa-wind text-5xl text-sky-400" />
               )}
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Qualit'Air
              </h1>
              <p className="text-xl text-sky-400 font-mono mb-4">
                Dashboard Environnemental & Météo
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                 <span className="px-3 py-1 text-xs rounded-full bg-slate-700/50 text-slate-300 border border-slate-600">
                    Févr. 2024 - Avr. 2024
                 </span>
                 <span className="px-3 py-1 text-xs rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30">
                    Projet Académique (2 mois)
                 </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- GALERIE (3 IMAGES) --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
            
            {/* Image 1 : Vue Globale Dashboard */}
            <div className="glass-card p-2 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-sky-500/50 transition-all group">
                <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden relative">
                    <img 
                        src={imgMain} 
                        alt="Vue globale du dashboard" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <span className="text-white text-sm font-medium">Monitoring des Polluants</span>
                    </div>
                </div>
            </div>

            {/* Image 2 : Carte */}
            <div className="glass-card p-2 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-sky-500/50 transition-all group">
                <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden relative">
                    <img 
                        src={imgMap} 
                        alt="Carte des vents interactive" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <span className="text-white text-sm font-medium">Carte Interactive</span>
                    </div>
                </div>
            </div>

            {/* Image 3 : Liste / Données */}
            <div className="glass-card p-2 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-sky-500/50 transition-all group">
                <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden relative">
                    <img 
                        src={imgList} 
                        alt="Liste des données détaillées" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <span className="text-white text-sm font-medium">Données Détaillées</span>
                    </div>
                </div>
            </div>
        </div>

        {/* --- CONTENU --- */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* COLONNE GAUCHE (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* MISSION */}
            <div className="glass-card p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <i className="fas fa-bullseye text-sky-500" />
                Mission
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg mb-4">
                Ce projet est un tableau de bord développé avec <strong>React</strong> et <strong>Tailwind CSS</strong>, destiné à analyser et présenter des données sur les polluants, la météo et les cartes des vents .
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                Il propose un <strong>système d'information graphique</strong> complet pour une visualisation claire et intuitive des données environnementales en temps réel.
              </p>
            </div>

            {/* FONCTIONNALITÉS */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-2xl bg-slate-800/30 border border-slate-700">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <i className="fas fa-chart-bar text-sky-500" /> Analyse & Visu
                    </h3>
                    <ul className="space-y-3 text-slate-400 text-sm">
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check text-sky-500 mt-1"></i>
                            <span><strong>Analyse des Polluants :</strong> Visualisation des niveaux de divers polluants dans l'atmosphère.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check text-sky-500 mt-1"></i>
                            <span><strong>Graphiques :</strong> Présentation des données sous forme de diagrammes interactifs.</span>
                        </li>
                    </ul>
                </div>

                <div className="glass-card p-6 rounded-2xl bg-slate-800/30 border border-slate-700">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <i className="fas fa-cloud-sun-rain text-sky-500" /> Météo & Vents
                    </h3>
                    <ul className="space-y-3 text-slate-400 text-sm">
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check text-sky-500 mt-1"></i>
                            <span><strong>Carte des Vents :</strong> Affichage des courants de vent sur une carte interactive.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check text-sky-500 mt-1"></i>
                            <span><strong>Données Météo :</strong> Mises à jour et prévisions détaillées.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* CHALLENGES TECHNIQUES */}
            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-sky-500/50 bg-slate-800/50 border-y border-r border-slate-700">
                <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                   <i className="fas fa-cogs text-sky-500" /> 
                   Challenges Techniques
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <h4 className="font-bold text-slate-200 mb-2">Data Visualization</h4>
                        <p className="text-slate-400 leading-relaxed">
                            Intégration de bibliothèques graphiques pour transformer des données JSON complexes en indicateurs visuels (Jauges, Courbes) clairs et réactifs.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-200 mb-2">UX & Responsive Design</h4>
                        <p className="text-slate-400 leading-relaxed">
                           Utilisation avancée de <strong>Tailwind CSS</strong> pour créer une interface modulaire qui s'adapte aux différents écrans tout en conservant la lisibilité des cartes.
                        </p>
                    </div>
                </div>
            </div>
          </div>

          {/* COLONNE DROITE (1/3) : Stack & Liens */}
          <div className="space-y-8">
            
            {/* STACK */}
            <div className="glass-card p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <h3 className="text-lg font-bold mb-4 text-white">Stack Technique</h3>
              
              <div className="space-y-6">
                <div>
                    <span className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">Frontend</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">React.js</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">Tailwind CSS</span>
                    </div>
                </div>

                <div>
                    <span className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">Backend & Data</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">Node.js</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">SQL</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-700 text-white border border-slate-600">REST API</span>
                    </div>
                </div>
              </div>
            </div>

            {/* GitHub Link */}
            <div className="glass-card p-6 rounded-2xl text-center bg-slate-800/50 border border-slate-700">
              <a
                href="https://github.com/Leele09/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-slate-800 hover:bg-sky-500 hover:text-white text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 border border-slate-600 hover:border-sky-500 shadow-lg"
              >
                <i className="fab fa-github text-xl" />
                Accéder au Repo
              </a>
          
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}