import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../i18n/LanguageContext";

// --- IMPORTS DES IMAGES ---
import logoTaxon from "../../../assets/TaxonConnect.png";
// Assure-toi que les extensions (.png ou .jpg) sont correctes !
import imgHome from "../../../assets/taxon-accueil.png";
import imgSearch from "../../../assets/taxon-search.png";

export default function TaxonConnect() {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);

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

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            
            {/* LOGO */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-slate-800/80 flex items-center justify-center border border-slate-700 shadow-lg shrink-0 overflow-hidden">
                {!imageError ? (
                    <img 
                        src={logoTaxon} 
                        alt="Logo Taxon Connect" 
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <i className="fas fa-leaf text-5xl text-emerald-500" />
                )}
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Taxon Connect
              </h1>
              <p className="text-xl text-emerald-400 font-mono mb-4">
                {t("Bibliothèque Taxonomique & API INPN", "Taxonomic Library & INPN API")}
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                 <span className="px-3 py-1 text-xs rounded-full bg-slate-700/50 text-slate-300 border border-slate-600">
                    Sept 2023 - Jan 2024
                 </span>
                 <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {t("Projet Académique (5 mois)", "Academic Project (5 months)")}
                 </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- GALERIE / APERÇU --- */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
            
            {/* Image 1 : Accueil */}
            <div className="glass-card p-2 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-all group">
                <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden relative">
                    <img 
                        src={imgHome} 
                        alt={t("Page d'accueil Taxon Connect", "Taxon Connect home page")}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <span className="text-white text-sm font-medium">{t("Page d'Accueil & Dashboard", "Home Page & Dashboard")}</span>
                    </div>
                </div>
            </div>

            {/* Image 2 : Recherche */}
            <div className="glass-card p-2 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-all group">
                <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden relative">
                    <img 
                        src={imgSearch} 
                        alt={t("Recherche de taxons", "Taxon search")}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <span className="text-white text-sm font-medium">{t("Recherche API & Filtres", "API Search & Filters")}</span>
                    </div>
                </div>
            </div>

        </div>

        {/* --- CONTENU --- */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* COLONNE GAUCHE (2/3) : Mission & Challenges */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* MISSION */}
            <div className="glass-card p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <i className="fas fa-bullseye text-emerald-500" />
                Mission
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                {t(
                  "Développement d'une plateforme web permettant aux passionnés de biologie de constituer et gérer une collection personnelle d'espèces vivantes (taxons). L'application s'interface avec les données scientifiques officielles pour garantir l'exactitude des informations biologiques.",
                  "Development of a web platform allowing biology enthusiasts to build and manage a personal collection of living species (taxa). The app connects to official scientific data to guarantee the accuracy of biological information."
                )}
              </p>
            </div>

            {/* FONCTIONNALITÉS */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-2xl bg-slate-800/30 border border-slate-700">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <i className="fas fa-book-open text-emerald-500" /> {t("Gestion de Collection", "Collection Management")}
                    </h3>
                    <ul className="space-y-3 text-slate-400 text-sm">
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-500 mt-1"></i>
                            <span>{t("Création de bibliothèques personnelles", "Personal library creation")}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-500 mt-1"></i>
                            <span>{t("Organisation et classement des taxons", "Taxon organization and classification")}</span>
                        </li>
                    </ul>
                </div>

                <div className="glass-card p-6 rounded-2xl bg-slate-800/30 border border-slate-700">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <i className="fas fa-network-wired text-emerald-500" /> {t("Données Temps Réel", "Real-Time Data")}
                    </h3>
                    <ul className="space-y-3 text-slate-400 text-sm">
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-500 mt-1"></i>
                            <span>{t("Connexion à l'API INPN (TaxRef)", "Connection to the INPN API (TaxRef)")}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check text-emerald-500 mt-1"></i>
                            <span>{t("Récupération des fiches espèces complètes", "Retrieval of full species records")}</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* CHALLENGES TECHNIQUES */}
            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-emerald-500/50 bg-slate-800/50 border-y border-r border-slate-700">
                <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                   <i className="fas fa-cogs text-emerald-500" /> 
                   {t("Challenges & Responsabilités", "Challenges & Responsibilities")}
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <h4 className="font-bold text-slate-200 mb-2">{t("Performance Backend", "Backend Performance")}</h4>
                        <p className="text-slate-400 leading-relaxed">
                            {t(
                              <>Conception d'une architecture <strong>PHP Orienté Objet</strong> optimisée pour réduire les temps d'exécution lors du traitement des données volumineuses renvoyées par l'API externe.</>,
                              <>Designed an optimized <strong>Object-Oriented PHP</strong> architecture to reduce execution time when processing the large datasets returned by the external API.</>,
<>외부 API가 반환하는 대용량 데이터의 처리 시간을 줄이도록 최적화된 <strong>객체 지향 PHP</strong> 아키텍처 설계.</>
                            )}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-200 mb-2">{t("Qualité & Leadership", "Quality & Leadership")}</h4>
                        <p className="text-slate-400 leading-relaxed">
                           {t(
                             <>Pilotage de l'équipe (3 pers.), mise en place de <strong>Tests Unitaires</strong> pour fiabiliser le code et rédaction d'une documentation technique exhaustive.</>,
                             <>Led the team (3 people), set up <strong>Unit Tests</strong> to make the code reliable and wrote comprehensive technical documentation.</>,
<>팀(3명) 리드, 코드 신뢰성을 위한 <strong>단위 테스트</strong> 도입, 상세 기술 문서 작성.</>
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
                    <span className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">Core & Backend</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">PHP 8 (POO)</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">JavaScript</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-700 text-white border border-slate-600">MVC</span>
                    </div>
                </div>

                <div>
                    <span className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">Data & API</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">MySQL</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">API REST (TaxRef)</span>
                    </div>
                </div>

                <div>
                    <span className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">UI & Tools</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">Bootstrap</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-700 text-slate-300 border border-slate-600">Unit Tests</span>
                    </div>
                </div>
              </div>
            </div>

            {/* GitHub Link */}
            <div className="glass-card p-6 rounded-2xl text-center bg-slate-800/50 border border-slate-700">
              <a
                href="https://github.com/HugoMolinier/SAE-Site-Bibliotheque-Taxon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-slate-800 hover:bg-emerald-500 hover:text-white text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 border border-slate-600 hover:border-emerald-500 shadow-lg"
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