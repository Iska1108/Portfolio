import { useLanguage } from "../../i18n/LanguageContext";

type SkillCategory = {
  title: string;
  skills: string[];
};

export default function Skills() {
  const { t } = useLanguage();

  // Liste des compétences à mettre en avant (exactement comme écrites dans ton tableau)
  const highlightedSkills = [
    "React / Native",
    "TailwindCSS",
    "Node.js",
    "Spring Boot (Java)",
    "PostgreSQL",
    "Teradata",
    "CI/CD (Gitlab CI)",
    "Git / GitHub"
  ];

  const skillCategories: SkillCategory[] = [
    { title: "Frontend", skills: ["React / Native", "Angular", "TypeScript", "TailwindCSS", "HTML/CSS"] },
    { title: "Backend", skills: ["Node.js", "Spring Boot (Java)", "PHP", "Python", "SQL / PL/SQL"] },
    { title: "Data & DB", skills: ["PostgreSQL", "MongoDB", "Neo4j", "Redis", "Teradata"] },
    { title: "DevOps & Tools", skills: ["Docker", "Git / GitHub", "CI/CD (Gitlab CI)", "Kubernetes", "AWS"] },
  ];

  return (
    <section id="skills" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">{t("Compétences", "Skills")}</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="border-t-2 border-black pt-5">
              <h3 className="font-display text-2xl mb-4">{cat.title}</h3>
              <ul className="space-y-1.5">
                {cat.skills.map((skill) => (
                  <li key={skill} className={highlightedSkills.includes(skill) ? "font-bold" : "text-graphite"}>
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
