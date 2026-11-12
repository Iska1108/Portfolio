import { useLanguage } from "../../i18n/LanguageContext";

type Job = {
  company: string;
  role: string;
  period: string;
  loc: string;
  points: string[];
  tags: string[];
};

export default function Experience() {
  const { t } = useLanguage();

  const jobs: Job[] = [
    {
      company: t("Enedis, DSI (division Data)", "Enedis, IT Department (Data division)"),
      role: t("Alternant concepteur-développeur logiciel & support solution", "Apprentice software designer/developer & solution support"),
      period: t("Sept 2025 - Présent", "Sept 2025 - Present"),
      loc: "Courbevoie",
      points: [
        t("Industrialisation d'une application web et sécurisation de l'accès à des données stratégiques.", "Industrialised a web application and secured access to strategic data."),
        t("Mise en place de pipelines CI/CD et de déploiements Kubernetes, migration de microservices vers la nouvelle plateforme Haddock V2.", "Set up CI/CD pipelines and Kubernetes deployments; migrated microservices to the new Haddock V2 platform."),
        t("Accompagnement des équipes produit sur les déploiements et migrations : pipelines, résolution d'incidents, adaptation des solutions.", "Supported product teams through deployments and migrations: pipelines, incident resolution and solution adaptation."),
      ],
      tags: ["React JS", "Spring Boot", "Teradata", "CI/CD (Gitlab CI)", "Kubernetes"],
    },
    {
      company: t("Enedis, DSI (division Data)", "Enedis, IT Department (Data division)"),
      role: t("Stage développeur fullstack, application web Big Data", "Full-stack developer intern, Big Data web application"),
      period: t("Mars 2025 - Juin 2025", "Mar 2025 - Jun 2025"),
      loc: "Courbevoie",
      points: [
        t("Application fullstack (React / Spring Boot) pour visualiser et enrichir un méta-modèle dans un environnement Big Data (Teradata).", "Built a full-stack web application (React / Spring Boot) to visualise and enrich a metamodel in a Big Data environment (Teradata)."),
        t("Conception d'une interface graphique ergonomique, conforme à la charte de l'entreprise, pour afficher les dépendances entre objets.", "Designed an ergonomic graphical interface following the corporate design guidelines to display dependencies between objects."),
        t("Traitement des logs Teradata pour enrichir le méta-modèle dynamiquement.", "Processed Teradata logs to enrich the metamodel dynamically."),
        t("Participation aux réunions d'équipe et aux décisions techniques et fonctionnelles, recueil des besoins avec les Product Owners.", "Took part in team meetings and technical and functional decisions; gathered user requirements with the Product Owners."),
      ],
      tags: ["React JS", "Spring Boot", "Teradata", "CI/CD (Gitlab CI)"],
    },
    {
      company: "Comutitres - DSI",
      role: t("Stage développeur web React JS", "Web developer intern, React JS"),
      period: t("Avril 2024 - Juin 2024", "Apr 2024 - Jun 2024"),
      loc: "Paris",
      points: [
        t("Intégration et développement de modules pour l'abonnement Navigo. Amélioration de l'accessibilité.", "Integrated and developed modules for the Navigo pass subscription. Improved accessibility."),
      ],
      tags: ["React JS", "TailwindCSS", "UI/UX", t("Accessibilité", "Accessibility")],
    },
  ];

  return (
    <section id="experience" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">{t("Expérience", "Experience")}</h2>

        <ol>
          {jobs.map((job) => (
            <li key={job.role} className="border-t-2 border-black py-10 grid md:grid-cols-12 gap-4 md:gap-8">
              <div className="md:col-span-3 text-graphite">
                <p className="font-bold text-black">{job.period}</p>
                <p>{job.loc}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-3xl md:text-4xl leading-tight">{job.role}</h3>
                <p className="font-semibold mt-1">{job.company}</p>
                <ul className="mt-4 space-y-2 max-w-[66ch]">
                  {job.points.map((pt) => (
                    <li key={pt} className="text-graphite leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2.5 before:h-0.5 before:bg-hong">
                      {pt}
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold mt-4">{job.tags.join(", ")}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
