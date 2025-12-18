import { Link } from "react-router-dom"; 

type Project = {
  title: string;
  type: string;
  desc: string;
  stack: string[];
  icon: string;
  href?: string;
  internalLink?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Pmove",
      type: "App Mobile & Web",
      desc: "Application facilitant les déplacements des PMR en transport avec gestion d'agents en temps réel.",
      stack: ["React Native", "Neo4j", "Microservices", "Docker"],
      icon: "fa-wheelchair",
      href: "https://github.com/PMRSAE5",
      internalLink: "/project/pmove",
    },
    {
      title: "Taxon Connect",
      type: "App Web",
      desc: "Calcul d'itinéraire optimisé (métro parisien) et consommation d'API externes.",
      stack: ["PHP", "Algorithmique", "API REST", "SQL"],
      icon: "fa-leaf",
      href: "#",
      internalLink: "/project/taxon-connect",
    },
    {
      title: "Air Quality Dash",
      type: "Dashboard Web",
      desc: "Tableau de bord interactif analysant les polluants, la météo et les vents.",
      stack: ["React.js", "Tailwind CSS", "Node.js", "SQL"],
      icon: "fa-wind",
      href: "https://github.com/Leele09/dashboard",
      internalLink: "/project/air-quality-dash",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Projets <span className="text-gradient">Réalisés</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => {
            const CardContent = () => (
              <>
                <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <i className={`fas ${proj.icon} text-6xl text-slate-700 group-hover:text-brand-accent/50 transition-colors transform group-hover:scale-110 duration-500`} />
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-brand-accent transition-colors">
                        {proj.title}
                      </h3>
                      <span className="text-sm text-brand-purple font-mono">{proj.type}</span>
                    </div>

                    {/* CORRECTION ICI : Toujours la flèche */}
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-colors">
                      <i className="fas fa-arrow-right" />
                    </div>
                  </div>

                  <p className="text-slate-400 mb-6 min-h-[3rem]">{proj.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {proj.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-mono rounded-full border border-slate-700 text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );

            if (proj.internalLink) {
              return (
                <Link
                  key={proj.title}
                  to={proj.internalLink}
                  className="glass-card rounded-2xl overflow-hidden group hover:border-brand-accent/50 transition-colors block cursor-pointer"
                >
                  <CardContent />
                </Link>
              );
            }

            return (
              <a
                key={proj.title}
                href={proj.href || "#"}
                target={proj.href?.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="glass-card rounded-2xl overflow-hidden group hover:border-brand-accent/50 transition-colors block cursor-pointer"
              >
                <CardContent />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}