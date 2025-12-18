type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    { title: "Frontend", icon: "fa-code", skills: ["React / Native", "Angular", "TypeScript", "TailwindCSS", "HTML/CSS"] },
    { title: "Backend", icon: "fa-server", skills: ["Node.js", "Spring Boot (Java)", "PHP", "Python", "SQL / PL/SQL"] },
    { title: "Data & DB", icon: "fa-database", skills: ["PostgreSQL", "MongoDB", "Neo4j", "Redis", "Teradata"] },
    { title: "DevOps & Tools", icon: "fa-tools", skills: ["Docker", "Git / GitHub", "CI/CD", "Jira", "CodeCov"] },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-gradient">Arsenal Technique</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-xl hover:bg-slate-800/50 transition-all duration-300 border-t-2 border-t-transparent hover:border-t-brand-accent group"
            >
              <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mb-4 text-brand-accent group-hover:scale-110 transition-transform">
                <i className={`fas ${cat.icon} text-xl`} />
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-slate-400 text-sm">
                    <i className="fas fa-check text-brand-purple mr-2 text-xs" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
