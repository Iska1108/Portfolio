import { useLanguage } from "../../i18n/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  const steps = [
    {
      period: "2025 - 2028",
      title: t("Diplôme d'ingénieur, majeure Logiciels et Systèmes d'information", "Master of Engineering, major in Software & Information Systems"),
      place: "Efrei Paris",
    },
    {
      period: "2022 - 2025",
      title: t("BUT Informatique", "Bachelor of Technology in Computer Science (BUT)"),
      place: "UPEC Créteil",
    },
    {
      period: "2019 - 2022",
      title: t("Baccalauréat, spécialités Mathématiques et SVT, avec mention", "French Baccalaureate, Mathematics & Biology, with honours"),
      place: "Pantin",
    },
  ];

  return (
    <section id="education" className="pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">{t("Formation", "Education")}</h2>
        <ol>
          {steps.map((s) => (
            <li key={s.period} className="border-t-2 border-black last:border-b-2 py-8 grid md:grid-cols-12 gap-4 md:gap-8">
              <p className="md:col-span-3 font-bold">{s.period}</p>
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl md:text-3xl leading-tight">{s.title}</h3>
                <p className="text-graphite mt-1">{s.place}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
