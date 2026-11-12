import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";

import imgPmove from "../../assets/PmoveLogo.png";
import imgTaxon from "../../assets/taxon-accueil.png";
import imgDashboard from "../../assets/dashboard-main.png";

type Project = {
  title: string;
  type: string;
  desc: string;
  stack: string[];
  icon: string;
  href?: string;
  internalLink?: string;
  preview: string;
};

export default function Projects() {
  const { t } = useLanguage();
  const previewRef = useRef<HTMLImageElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [lastPreview, setLastPreview] = useState(imgPmove);

  const showPreview = (src: string) => {
    setPreview(src);
    setLastPreview(src);
  };

  // L'aperçu suit la souris sans re-render React
  const movePreview = (e: React.MouseEvent) => {
    if (previewRef.current) previewRef.current.style.transform = `translate(${e.clientX + 28}px, ${e.clientY - 110}px)`;
  };

  const projects: Project[] = [
    {
      title: "Pmove",
      type: t("App Mobile & Web", "Mobile & Web App"),
      desc: t(
        "Application facilitant les déplacements des PMR en transport avec gestion d'agents en temps réel.",
        "App making public transport easier for people with reduced mobility, with real-time agent management."
      ),
      stack: ["React Native", "Neo4j", "Microservices", "Docker"],
      icon: "fa-wheelchair",
      href: "https://github.com/PMRSAE5",
      internalLink: "/project/pmove",
      preview: imgPmove,
    },
    {
      title: "Taxon Connect",
      type: t("App Web", "Web App"),
      desc: t(
        "Calcul d'itinéraire optimisé (métro parisien) et consommation d'API externes.",
        "Optimized route computation (Paris metro) and external API consumption."
      ),
      stack: ["PHP", t("Algorithmique", "Algorithms"), "API REST", "SQL"],
      icon: "fa-leaf",
      href: "#",
      internalLink: "/project/taxon-connect",
      preview: imgTaxon,
    },
    {
      title: "Qualit'Air",
      type: t("Dashboard Web", "Web Dashboard"),
      desc: t(
        "Tableau de bord interactif analysant les polluants, la météo et les vents.",
        "Interactive dashboard analyzing pollutants, weather and winds."
      ),
      stack: ["React.js", "Tailwind CSS", "Node.js", "SQL"],
      icon: "fa-wind",
      href: "https://github.com/Leele09/dashboard",
      internalLink: "/project/air-quality-dash",
      preview: imgDashboard,
    },
  ];

  return (
    <section id="projects" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">{t("Projets", "Projects")}</h2>

        <img
          ref={previewRef}
          src={lastPreview}
          alt=""
          aria-hidden="true"
          className={`hidden lg:block fixed top-0 left-0 z-40 w-80 aspect-[4/3] object-cover pointer-events-none border-2 border-black transition-opacity duration-200 ${
            preview ? "opacity-100" : "opacity-0"
          }`}
        />

        <ul onMouseMove={movePreview} onMouseLeave={() => setPreview(null)}>
          {projects.map((proj) => {
            const content = (
              <div className="grid md:grid-cols-12 gap-4 md:gap-8 py-10 items-baseline">
                <h3 className="md:col-span-5 font-display font-black uppercase text-4xl md:text-6xl leading-none group-hover:text-hong transition-colors">
                  {proj.title}
                </h3>
                <div className="md:col-span-7">
                  <p className="font-bold">{proj.type}</p>
                  <p className="text-graphite leading-relaxed mt-2 max-w-[60ch]">{proj.desc}</p>
                  <p className="text-sm font-semibold mt-4">{proj.stack.join(", ")}</p>
                </div>
              </div>
            );

            return (
              <li key={proj.title} className="border-t-2 border-black last:border-b-2" onMouseEnter={() => showPreview(proj.preview)}>
                {proj.internalLink ? (
                  <Link to={proj.internalLink} className="group block">
                    {content}
                  </Link>
                ) : (
                  <a
                    href={proj.href || "#"}
                    target={proj.href?.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    {content}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
