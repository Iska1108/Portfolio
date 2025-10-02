type Formation = {
  title: string;       // école ou diplôme
  subtitle: string;    // programme / spécialité
  period: string;      // dates
  details?: string[];  // compétences ou matières clés
};

const formations: Formation[] = [
  {
    title: "EFREI Paris",
    subtitle: "Cycle Ingénieur — Logiciels & Systèmes d’Information",
    period: "2025 – 2028",
    details: ["DevOps", "Cloud", "Fullstack", "Projet Big Data"],
  },
  {
    title: "BUT Informatique",
    subtitle: "Université Gustave Eiffel",
    period: "2022 – 2025",
    details: ["Java", "React", "Spring Boot", "Bases de données"],
  },
  {
    title: "Baccalauréat Scientifique",
    subtitle: "Lycée … (remplace par ton lycée)",
    period: "2020 – 2022",
    details: ["Maths", "Physique", "Informatique"],
  },
];

function FormationCard({ f }: { f: Formation }) {
  return (
    <article className="card p-6 hover:border-border-hover transition">
      <header>
        <h3 className="text-lg font-semibold text-text">{f.title}</h3>
        <p className="mt-1 text-sm text-text-muted">{f.subtitle}</p>
        <p className="mt-1 text-xs text-text opacity-70">{f.period}</p>
      </header>

      {f.details && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {f.details.map((d) => (
            <li
              key={d}
              className="text-xs px-2 py-1 rounded-lg border border-border bg-bg-card text-text"
            >
              {d}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="text-2xl sm:text-3xl font-bold text-text text-center">
        Formations
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {formations.map((f) => (
          <FormationCard key={f.title} f={f} />
        ))}
      </div>
    </section>
  );
}
