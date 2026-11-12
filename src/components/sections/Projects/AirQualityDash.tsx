import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../i18n/LanguageContext";

// --- IMPORTS DES ASSETS ---
import imgMain from "../../../assets/dashboard-main.png"; 
import imgMap from "../../../assets/dashboard-map.png";
import imgList from "../../../assets/dashboard-list.png";
import logoQualitair from "../../../assets/qualitair-logo.png";

export default function AirQualityDash() {
  const { t } = useLanguage();
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
          {t("Retour aux projets", "Back to projects")}
        </Link>

        {/* --- HEADER --- */}
        <div className="relative glass-card rounded-3xl p-8 md:p-12 mb-12 overflow-hidden border-t border-slate-700/50">
          {/* Effets de fond (Thème Aérien : Sky/Blue) */}

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
                {t("Dashboard Environnemental & Météo", "Environmental & Weather Dashboard")}
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                 <span className="px-3 py-1 text-xs rounded-full bg-slate-700/50 text-slate-300 border border-slate-600">
                    {t("Févr. 2024 - Avr. 2024", "Feb 2024 - Apr 2024")}
                 </span>
                 <span className="px-3 py-1 text-xs rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30">
                    {t("Projet Académique (2 mois)", "Academic Project (2 months)")}
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
                        alt={t("Vue globale du dashboard", "Dashboard overview")}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <span className="text-white text-sm font-medium">{t("Monitoring des Polluants", "Pollutant Monitoring")}</span>
                    </div>
                </div>
            </div>

            {/* Image 2 : Carte */}
            <div className="glass-card p-2 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-sky-500/50 transition-all group">
                <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden relative">
                    <img 
                        src={imgMap} 
                        alt={t("Carte des vents interactive", "Interactive wind map")}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <span className="text-white text-sm font-medium">{t("Carte Interactive", "Interactive Map")}</span>
                    </div>
                </div>
            </div>

            {/* Image 3 : Liste / Données */}
            <div className="glass-card p-2 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-sky-500/50 transition-all group">
                <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden relative">
                    <img 
                        src={imgList} 
                        alt={t("Liste des données détaillées", "Detailed data list")}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <span className="text-white text-sm font-medium">{t("Données Détaillées", "Detailed Data")}</span>
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
                {t(
                  <>Ce projet est un tableau de bord développé avec <strong>React</strong> et <strong>Tailwind CSS</strong>, destiné à analyser et présenter des données sur les polluants, la météo et les cartes des vents .</>,
                  <>This project is a dashboard built with <strong>React</strong> and <strong>Tailwind CSS</strong>, designed to analyze and present data on pollutants, weather and wind maps.</>,
<>이 프로젝트는 <strong>React</strong>와 <strong>Tailwind CSS</strong>로 개발한 대시보드로, 오염 물질, 날씨, 바람 지도 데이터를 분석하고 보여줍니다.</>
                )}
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                {t(
                  <>Il propose un <strong>système d'information graphique</strong> complet pour une visualisation claire et intuitive des données environnementales en temps réel.</>,
                  <>It provides a complete <strong>graphical information system</strong> for clear, intuitive visualization of real-time environmental data.</>,
<>환경 데이터를 실시간으로 명확하고 직관적으로 시각화하는 완전한 <strong>그래픽 정보 시스템</strong>을 제공합니다.</>
                )}
              </p>
            </div>

            {/* FONCTIONNALITÉS */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-2xl bg-slate-800/30 border border-slate-700">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <i className="fas fa-chart-bar text-sky-500" /> {t("Analyse & Visu", "Analysis & Viz")}
                    </h3>
                    <ul className="space-y-3 text-slate-400 text-sm">
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check text-sky-500 mt-1"></i>
                            <span>{t(
                              <><strong>Analyse des Polluants :</strong> Visualisation des niveaux de divers polluants dans l'atmosphère.</>,
                              <><strong>Pollutant Analysis:</strong> Visualization of the levels of various pollutants in the atmosphere.</>,
<><strong>오염 물질 분석:</strong> 대기 중 다양한 오염 물질 농도 시각화.</>
                            )}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check text-sky-500 mt-1"></i>
                            <span>{t(
                              <><strong>Graphiques :</strong> Présentation des données sous forme de diagrammes interactifs.</>,
                              <><strong>Charts:</strong> Data presented as interactive diagrams.</>,
<><strong>그래프:</strong> 인터랙티브 차트로 데이터 표시.</>
                            )}</span>
                        </li>
                    </ul>
                </div>

                <div className="glass-card p-6 rounded-2xl bg-slate-800/30 border border-slate-700">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <i className="fas fa-cloud-sun-rain text-sky-500" /> {t("Météo & Vents", "Weather & Winds")}
                    </h3>
                    <ul className="space-y-3 text-slate-400 text-sm">
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check text-sky-500 mt-1"></i>
                            <span>{t(
                              <><strong>Carte des Vents :</strong> Affichage des courants de vent sur une carte interactive.</>,
                              <><strong>Wind Map:</strong> Wind currents displayed on an interactive map.</>,
<><strong>바람 지도:</strong> 인터랙티브 지도에 바람의 흐름 표시.</>
                            )}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check text-sky-500 mt-1"></i>
                            <span>{t(
                              <><strong>Données Météo :</strong> Mises à jour et prévisions détaillées.</>,
                              <><strong>Weather Data:</strong> Detailed updates and forecasts.</>,
<><strong>기상 데이터:</strong> 상세한 업데이트와 예보.</>
                            )}</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* CHALLENGES TECHNIQUES */}
            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-sky-500/50 bg-slate-800/50 border-y border-r border-slate-700">
                <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                   <i className="fas fa-cogs text-sky-500" /> 
                   {t("Challenges Techniques", "Technical Challenges")}
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <h4 className="font-bold text-slate-200 mb-2">Data Visualization</h4>
                        <p className="text-slate-400 leading-relaxed">
                            {t(
                              "Intégration de bibliothèques graphiques pour transformer des données JSON complexes en indicateurs visuels (Jauges, Courbes) clairs et réactifs.",
                              "Integrated charting libraries to turn complex JSON data into clear, responsive visual indicators (gauges, curves)."
                            )}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-200 mb-2">UX & Responsive Design</h4>
                        <p className="text-slate-400 leading-relaxed">
                           {t(
                             <>Utilisation avancée de <strong>Tailwind CSS</strong> pour créer une interface modulaire qui s'adapte aux différents écrans tout en conservant la lisibilité des cartes.</>,
                             <>Advanced use of <strong>Tailwind CSS</strong> to build a modular interface that adapts to different screens while keeping the maps readable.</>,
<>지도의 가독성을 유지하면서 다양한 화면에 맞춰지는 모듈형 인터페이스를 만들기 위해 <strong>Tailwind CSS</strong>를 적극 활용.</>
                           )}
                        </p>
                    </div>
                </div>
            </div>
          </div>

          {/* COLONNE DROITE (1/3) : Stack & Liens */}
          <div className="space-y-8">
            
            {/* STACK */}
            <div className="glass-card p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <h3 className="text-lg font-bold mb-4 text-white">{t("Stack Technique", "Tech Stack")}</h3>
              
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
                {t("Accéder au Repo", "View Repository")}
              </a>
          
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}