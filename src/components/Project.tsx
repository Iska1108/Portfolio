type Project = {
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "Pmove",
    description:
      "Web & mobile pour l’assistance en déplacement. Stack React/React Native, microservices, CI/CD.",
    tags: ["React", "React Native", "Node.js", "Docker", "CI/CD"],
    demo: "#",
    repo: "https://github.com/Iska1108", // remplace par le bon lien
  },
  {
    title: "NatureConnect",
    description:
      "Application web de calcul d’itinéraires (métro parisien) avec intégration d’API.",
    tags: ["PHP", "MySQL", "REST API"],
    demo: "#",
    repo: "https://github.com/Iska1108",
  },
  {
    title: "Clicker Game SQL",
    description:
      "Jeu avec upgrades, statistiques et persistance (base SQL). UI simple et responsive.",
    tags: ["React", "TypeScript", "SQL"],
    demo: "#",
    repo: "https://github.com/Iska1108",
  },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card p-6 hover:border-border-hover transition">
      <header className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-text">{p.title}</h3>

        {/* petite icône externe inline */}
        {p.demo ? (
          <a
            href={p.demo}
            target="_blank"
            className="inline-flex items-center gap-1 text-text-muted hover:text-text transition"
            aria-label={`Voir la démo de ${p.title}`}
            title="Ouvrir la démo"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
              <path d="M5 5h6v2H7v10h10v-4h2v6H5z" />
            </svg>
          </a>
        ) : null}
      </header>

      <p className="mt-2 text-sm text-text opacity-80">{p.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <li
            key={t}
            className="text-xs px-2 py-1 rounded-lg border border-border bg-bg-card text-text"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-3">
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            className="btn-primary"
            aria-label={`Ouvrir la démo ${p.title}`}
          >
            Demo
          </a>
        )}
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            className="btn-ghost"
            aria-label={`Voir le repo GitHub ${p.title}`}
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="text-2xl sm:text-3xl font-bold text-text text-center">
        Projets
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
