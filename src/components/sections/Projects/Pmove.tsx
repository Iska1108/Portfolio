import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../i18n/LanguageContext";

import logoPmove from "../../../assets/PmoveLogo.png"; 

export default function Pmove() {
  const { t } = useLanguage();

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
          {t("Retour aux projets", "Back to projects")}
        </Link>

        {/* --- HEADER DU PROJET --- */}
        <div className="relative glass-card rounded-3xl p-8 md:p-12 mb-12 overflow-hidden border-t border-slate-700/50">

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
                {t("Assistance Mobilité & Agent", "Mobility Assistance & Agent")}
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                 <span className="px-3 py-1 text-xs rounded-full bg-slate-700/50 text-slate-300 border border-slate-600">
                    Sept 2024 - Jan 2025
                 </span>
                 <span className="px-3 py-1 text-xs rounded-full bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
                    {t("Projet Académique (5 mois)", "Academic Project (5 months)")}
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
                        {t("Votre navigateur ne supporte pas la vidéo.", "Your browser does not support video.")}
                    </video>
                    <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white">{t("Démonstration PMR", "PRM Demo")}</div>
                </div>
            </div>
            <div className="glass-card p-2 rounded-2xl bg-slate-800/50 border border-slate-700">
                <div className="aspect-video bg-black rounded-xl overflow-hidden relative group">
                    {/* Remplace src par le chemin de ta vidéo 2 */}
                    <video controls className="w-full h-full object-cover">
                        <source src="/videos/demo-agent.mp4" type="video/mp4" />
                        {t("Votre navigateur ne supporte pas la vidéo.", "Your browser does not support video.")}
                    </video>
                    <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-xs text-white">{t("Démonstration Agent", "Agent Demo")}</div>
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
                {t("Contexte & Mission", "Context & Mission")}
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                {t(
                  <>
                    <p>
                      <strong className="text-white">Le besoin :</strong> Faciliter les déplacements des Personnes à Mobilité Réduite (PMR) en leur permettant de réserver un agent accompagnateur pour leurs trajets (RATP, AirFrance, etc.).
                    </p>
                    <p>
                      <strong className="text-white">La solution :</strong> Un écosystème complet comprenant une <strong>application mobile pour les voyageurs</strong> et une <strong>interface dédiée aux agents</strong> pour la gestion des demandes.
                    </p>
                  </>,
                  <>
                    <p>
                      <strong className="text-white">The need:</strong> Make travel easier for People with Reduced Mobility (PRM) by letting them book an assistance agent for their journeys (RATP, Air France, etc.).
                    </p>
                    <p>
                      <strong className="text-white">The solution:</strong> A complete ecosystem including a <strong>mobile app for travelers</strong> and a <strong>dedicated interface for agents</strong> to manage requests.
                    </p>
                  </>,
                  <>
                    <p>
                      <strong className="text-white">필요:</strong> 교통약자(PMR)가 이동 시(RATP, 에어프랑스 등) 동행 에이전트를 예약할 수 있게 해 이동을 돕습니다.
                    </p>
                    <p>
                      <strong className="text-white">해결책:</strong> <strong>여행자용 모바일 앱</strong>과 요청 관리를 위한 <strong>에이전트 전용 인터페이스</strong>로 구성된 통합 서비스.
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* FONCTIONNALITÉS CLÉS (Split PMR / Agent) */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* APP PMR */}
                <div className="glass-card p-6 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-brand-accent/50 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <i className="fas fa-user text-brand-purple" /> {t("App PMR", "PRM App")}
                    </h3>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-brand-purple mt-1">•</span> {t("Inscription & Connexion sécurisée", "Secure sign-up & login")}
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-purple mt-1">•</span> {t("Vérification de validité du billet", "Ticket validity check")}
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-purple mt-1">•</span> {t("Demande & Réservation d'agent", "Agent request & booking")}
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-purple mt-1">•</span> {t("Notifications de confirmation", "Confirmation notifications")}
                        </li>
                    </ul>
                </div>

                {/* APP AGENT */}
                <div className="glass-card p-6 rounded-2xl bg-slate-800/30 border border-slate-700 hover:border-brand-accent/50 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <i className="fas fa-user-tie text-brand-accent" /> {t("App Agent", "Agent App")}
                    </h3>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-brand-accent mt-1">•</span> {t("Recherche filtrée (Arrêt, Date, Heure)", "Filtered search (Stop, Date, Time)")}
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-accent mt-1">•</span> {t("Acceptation des trajets", "Trip acceptance")}
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-accent mt-1">•</span> {t("Gestion du planning assigné", "Assigned schedule management")}
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-brand-accent mt-1">•</span> {t("Interface rapide et efficace", "Fast and efficient interface")}
                        </li>
                    </ul>
                </div>
            </div>

            {/* LIVRABLES & CONSTRAINTS */}
<div className="glass-card p-8 rounded-2xl border-l-4 border-l-orange-500/50 bg-slate-800/50 border-y border-r border-slate-700">
                <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                   <i className="fas fa-cogs text-orange-500" /> 
                   {t("Challenges Techniques Relevés", "Technical Challenges Tackled")}
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <h4 className="font-bold text-slate-200 mb-2">Performance & Cache</h4>
                        <p className="text-slate-400 leading-relaxed">
                            {t(
                              <>Implémentation de <strong>Redis</strong> pour la gestion des sessions et la mise en cache des trajets fréquents, réduisant drastiquement le temps de réponse de l'API Agent.</>,
                              <>Implemented <strong>Redis</strong> for session management and caching of frequent trips, drastically reducing the Agent API response time.</>,
<>세션 관리와 자주 이용하는 경로 캐싱에 <strong>Redis</strong>를 도입해 에이전트 API 응답 시간을 크게 단축.</>
                            )}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-200 mb-2">{t("Architecture Distribuée", "Distributed Architecture")}</h4>
                        <p className="text-slate-400 leading-relaxed">
                           {t(
                             <>Conception d'une architecture <strong>Microservices</strong> avec Node.js, conteneurisée via <strong>Docker</strong> pour assurer l'indépendance des services PMR et Agent.</>,
                             <>Designed a <strong>Microservices</strong> architecture with Node.js, containerized with <strong>Docker</strong> to keep the PRM and Agent services independent.</>,
<>Node.js 기반 <strong>마이크로서비스</strong> 아키텍처를 설계하고 <strong>Docker</strong>로 컨테이너화해 교통약자 서비스와 에이전트 서비스를 독립적으로 운영.</>
                           )}
                        </p>
                    </div>
                </div>
            </div>
          </div>

          {/* COLONNE DROITE (1/3) */}
          <div className="space-y-8">
            
            {/* STACK */}
            <div className="glass-card p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <h3 className="text-lg font-bold mb-4 text-white">{t("Stack Technique", "Tech Stack")}</h3>
              
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
                {t("Accéder au Repo", "View Repository")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}