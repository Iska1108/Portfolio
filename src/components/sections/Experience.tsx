type Job = {
  company: string;
  role: string;
  period: string;
  loc: string;
  desc: string;
  tags: string[];
};

export default function Experience() {
  const jobs: Job[] = [
    {
      company: "Enedis - DSI",
      role: "Alternance Ingénieur Logiciel",
      period: "Sept 2025 - Présent",
      loc: "Courbevoie",
      desc: "Poursuite des missions en alternance : Conception avancée et industrialisation de solutions Fullstack dans un environnement Big Data critique.",
      tags: ["Angular", "Spring Boot", "Architecture", "CI/CD"],
    },
    {
      company: "Enedis - DSI",
      role: "Stage Dév. Fullstack IHM Big Data",
      period: "Mars 2025 - Août 2025",
      loc: "Courbevoie",
      desc: "Développement d'une IHM fullstack (Angular / Spring Boot) pour la visualisation d'un méta-modèle Big Data.",
      tags: ["Angular", "Spring Boot", "Teradata", "Big Data"],
    },
    {
      company: "Comutitres - DSI",
      role: "Stage Dév. Web React JS",
      period: "Avril 2024 - Juin 2024",
      loc: "Paris",
      desc: "Intégration et développement de modules pour l'abonnement Navigo. Amélioration de l'accessibilité.",
      tags: ["React JS", "UI/UX", "Accessibilité"],
    },
  ];

  return (
    <section id="experience" className="py-20 relative bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-gradient">Expérience</span>
          <div className="h-px bg-slate-700 flex-grow ml-4" />
        </h2>

        <div className="space-y-12 relative before:content-[''] before:absolute before:left-4 md:before:left-1/2 before:top-0 before:w-0.5 before:h-full before:bg-slate-700">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-accent rounded-full border-4 border-slate-900 z-10 mt-6 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />

              <div className="hidden md:block w-1/2 text-right pt-6 px-8">
                <span className={`font-mono text-sm text-brand-accent ${idx % 2 === 0 ? "text-left" : "text-right"}`}>
                  {job.period}
                </span>
              </div>

              <div className="ml-12 md:ml-0 w-full md:w-1/2">
                <div className="glass-card p-6 rounded-xl card-hover transition-all">
                  <span className="md:hidden font-mono text-xs text-brand-accent mb-2 block">{job.period}</span>

                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-brand-purple font-semibold">{job.company}</h4>
                    <span className="text-xs text-slate-500">
                      <i className="fas fa-map-marker-alt mr-1" />
                      {job.loc}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{job.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-300 border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
