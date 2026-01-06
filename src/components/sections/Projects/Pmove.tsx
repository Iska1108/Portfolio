import { useEffect } from "react";
import { Link } from "react-router-dom";

import logoPmove from "../../../assets/PmoveLogo.png"; 

export default function Pmove() {
  
  // Scroll automatique vers le haut au chargement
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

        {/* --- HEADER DU PROJET --- */}
        <div className="relative glass-card rounded-3xl p-8 md:p-12 mb-12 overflow-hidden border-t border-slate-700/50">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            {/* LOGO DE L'APP - Remplace src par ton import ou chemin */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-slate-800/80 flex items-center justify-center border border-slate-700 shadow-lg overflow-hidden shrink-0">
               <img src={logoPmove} alt="Logo Pmove" className="w-full h-full object-cover" />
               {/* Si pas d'image pour l'instant, icône par défaut : */}
              
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Pmove
              </h1>
              <p className="text-xl text-brand-accent font-mono mb-4">
                Assistance Mobilité & Agent
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                 <span className="px-3 py-1 text-xs rounded-full bg-slate-700/50 text-slate-300 border border-slate-600">
                    Sept 2024 - Jan 2025
                 </span>
                 <span className="px-3 py-1 text-xs rounded-full bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
                    Projet Académique (5 mois)
                 </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION MÉDIA (VIDÉOS) --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-2 rounded-2xl bg-slate-800/50 border border-slate-700">
                <div className="aspect-video bg-black rounded-xl overflow-hidden relative group">
                    {/* Remplace src par le chemin de ta vidéo 1 */}
                    <video controls className="w-full h-full object-cover">
                        <source src="/videos/demo-pmr.mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                    <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white">Démonstration PMR</div>
                </div>
            </div>
            <div className="glass-card p-2 rounded-2xl bg-slate-800/50 border border-slate-700">
                <div className="aspect-video bg-black rounded-xl overflow-hidden relative group">
                    {/* Remplace src par le chemin de ta vidéo 2 */}
                    <video controls className="w-full h-full object-cover">
                        <source src="/videos/demo-agent.mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                    <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white">Démonstration Agent</div>
                </div>
            </div>
        </div>

        {/* --- CONTENU PRINCIPAL --- */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* COLONNE GAUCHE (2/3) : Contexte & Fonctionnalités */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* CONTEXTE & MISSION */}
            <div className="glass-card p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <i className="fas fa-bullseye text-brand-accent" />
                Contexte & Mission
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">Le besoin :</strong> Faciliter les déplacements des Personnes à Mobilité Réduite (PMR) en leur permettant de réserver un agent accompagnateur pour leurs trajets (RATP, AirFrance, etc.).
                </p>
                <p>
                  <strong className="text-white">La solution :</strong> Un écosystème complet comprenant une <strong>application mobile pour les voyageurs</strong> et une <strong>interface dédiée aux agents</strong> pour la gestion des demandes.
                </p>
              </div>
            </div>

            {/* FONCTIONNALITÉS CLÉS (Split PMR / Agent) */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* APP PMR */}
                <div className="glass-card p-6 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-brand-accent/50 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <i className="fas fa-user text-brand-purple" /> App PMR
                    </h3>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-brand-purple mt-1">•</span> Inscription & Connexion sécurisée
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-purple mt-1">•</span> Vérification de validité du billet
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-purple mt-1">•</span> Demande & Réservation d'agent
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-purple mt-1">•</span> Notifications de confirmation
                        </li>
                    </ul>
                </div>

                {/* APP AGENT */}
                <div className="glass-card p-6 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-brand-accent/50 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <i className="fas fa-user-tie text-brand-accent" /> App Agent
                    </h3>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-brand-accent mt-1">•</span> Recherche filtrée (Arrêt, Date, Heure)
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-accent mt-1">•</span> Acceptation des trajets
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-accent mt-1">•</span> Gestion du planning assigné
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-accent mt-1">•</span> Interface rapide et efficace
                        </li>
                    </ul>
                </div>
            </div>

            {/* LIVRABLES & CONSTRAINTS */}
<div className="glass-card p-8 rounded-2xl border-l-4 border-l-orange-500/50 bg-slate-800/50 border-y border-r border-slate-700">
                <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                   <i className="fas fa-cogs text-orange-500" /> 
                   Challenges Techniques Relevés
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <h4 className="font-bold text-slate-200 mb-2">Performance & Cache</h4>
                        <p className="text-slate-400 leading-relaxed">
                            Implémentation de <strong>Redis</strong> pour la gestion des sessions et la mise en cache des trajets fréquents, réduisant drastiquement le temps de réponse de l'API Agent.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-200 mb-2">Architecture Distribuée</h4>
                        <p className="text-slate-400 leading-relaxed">
                           Conception d'une architecture <strong>Microservices</strong> avec Node.js, conteneurisée via <strong>Docker</strong> pour assurer l'indépendance des services PMR et Agent.
                        </p>
                    </div>
                </div>
            </div>
          </div>

          {/* COLONNE DROITE (1/3) */}
          <div className="space-y-8">
            
            {/* STACK */}
            <div className="glass-card p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <h3 className="text-lg font-bold mb-4 text-white">Stack Technique</h3>
              
              <div className="space-y-6">
                <div>
                    <span className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">Mobile & Web</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">React Native</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">React.js</span>
                    </div>
                </div>

                <div>
                    <span className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">Backend</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">Node.js</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">Express</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-700 text-white border border-slate-600">Docker</span>
                    </div>
                </div>

                <div>
                    <span className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">Data</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">MongoDB</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">Redis</span>
                    </div>
                </div>
              </div>
            </div>

            {/* GitHub Link */}
            <div className="glass-card p-6 rounded-2xl text-center bg-slate-800/50 border border-slate-700">
              <a
                href="https://github.com/PMRSAE5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-slate-800 hover:bg-brand-accent hover:text-brand-dark text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 border border-slate-600 hover:border-brand-accent shadow-lg hover:shadow-brand-accent/20"
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