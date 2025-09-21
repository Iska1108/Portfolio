type Skills = {
  title: string;
  items: string[];
};

type SkillsProps = {
  title: string;
  items: string[];
};

const SkillGroup = ({ title, items }: SkillsProps) => (
  <div className="space-y-3">
    <h3 className="text-sm font-semibold tracking-wide text-text-muted">
      {title}
    </h3>
    <ul className="grid grid-cols-2 gap-2">
      {items.map((s) => (
        <li
          key={s}
          className="text-xs px-3 py-1 rounded-lg border border-border bg-bg-card text-text"
        >
          {s}
        </li>
      ))}
    </ul>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-text text-center">
        Skills
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <SkillGroup
          title="Design"
          items={["TailwindCSS", "React Flow", "Redux", "Figma"]}
        />
        <SkillGroup
          title="Front-end"
          items={["React", "TypeScript", "Angular", "React Native"]}
        />
        <SkillGroup
          title="Back-end"
          items={["Spring Boot", "Node.js", "Java", "PHP"]}
        />
        <SkillGroup
          title="Database"
          items={["MySQL", "PostgreSQL", "MongoDB", "Redis"]}
        />
      </div>
    </section>
  );
}
