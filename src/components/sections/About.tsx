import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";

import imgCombat from "../../assets/taekwondo-combat.jpeg";
import imgMedaille from "../../assets/taekwondo-medaille.jpeg";
import imgPrep from "../../assets/taekwondo-pics.jpg";
import imgSparring from "../../assets/taekwondo-pics2.jpg";

type Milestone = {
  date: string;
  title: string;
  desc: string;
  highlight?: boolean;
};

export default function About() {
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLOListElement>(null);
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimelineVisible(true);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const milestones: Milestone[] = [
    {
      date: t("Sept. 2025", "Sept 2025"),
      title: t("Premiers pas sur le tatami", "First steps on the mat"),
      desc: t(
        "Je rejoins le club d'Asnières, l'un des meilleurs clubs de France. Découverte totale, puis je commence à me faire remarquer dans le groupe adulte.",
        "I join the Asnières club, one of the best in France. A complete discovery at first, then I start standing out in the adult group."
      ),
    },
    {
      date: t("Mai 2026", "May 2026"),
      title: t("Finaliste de l'Open International (94)", "International Open (94) finalist"),
      desc: t(
        "Victoire au premier tour contre une ceinture rouge, finale perdue face à un combattant de l'équipe de France.",
        "First-round win against a red belt, final lost to a French national team fighter."
      ),
    },
    {
      date: t("Juin 2026", "June 2026"),
      title: t("Vainqueur de l'Open 93", "Open 93 winner"),
      desc: t(
        "Inscrit dans la catégorie au-dessus, seul ceinture blanche : aucun round concédé et un KO sur coup de pied retourné dès le premier combat.",
        "Entered in the higher category as the only white belt: not a single round lost, and a spinning-kick KO in the very first fight."
      ),
      highlight: true,
    },
    {
      date: t("Août 2026", "Aug 2026"),
      title: t("Un mois à 3 entraînements par jour", "A month of 3 sessions a day"),
      desc: t(
        "Stage international face à des olympiens et des champions de France. Je suis de plus en plus intégré au groupe élite du club.",
        "International camp sparring with Olympians and French champions. I'm increasingly part of the club's elite group."
      ),
    },
    {
      date: t("Nov. 2026", "Nov 2026"),
      title: t("Champion départemental des Hauts-de-Seine", "Hauts-de-Seine departmental champion"),
      desc: t("Vainqueur des départementaux : champion du 92.", "Won the departmental championship: 92 champion."),
      highlight: true,
    },
  ];

  const photos = [
    { src: imgMedaille, alt: t("Kaïs avec sa médaille", "Kaïs with his medal"), pos: "object-top" },
    { src: imgCombat, alt: t("Kaïs en plein combat", "Kaïs during a fight"), pos: "object-bottom" },
    { src: imgSparring, alt: t("Sparring à l'entraînement au club", "Sparring in training at the club"), pos: "object-center" },
    { src: imgPrep, alt: t("Kaïs enfile ses protections avant un combat", "Kaïs putting on his gear before a fight"), pos: "object-center" },
  ];

  return (
    <section id="about" className="bg-black text-paper py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">{t("Taekwondo", "Taekwondo")}</h2>

        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <p className="lg:col-span-8 text-xl leading-relaxed max-w-[60ch]">
            {t(
              "En septembre 2025, j'ai poussé pour la première fois la porte d'un club de taekwondo. Un an plus tard, je m'entraîne avec le groupe élite du club d'Asnières et je suis champion départemental des Hauts-de-Seine. Je mène ça de front avec mon alternance, l'école et un job étudiant le week-end.",
              "In September 2025, I walked into a taekwondo club for the very first time. One year later, I train with the elite group of the Asnières club and I'm the Hauts-de-Seine departmental champion. I balance it with my apprenticeship, school and a weekend student job."
            )}
          </p>
          <div className="lg:col-span-4 border-t-2 border-paper pt-4 self-start">
            <p className="text-slate-400 text-sm">{t("Mon coach", "My coach")}</p>
            <p className="font-display font-black text-2xl uppercase leading-tight mt-1">Ekvara Kamkasouphou</p>
            <p className="text-slate-300">{t("Club d'Asnières", "Asnières club")}</p>
          </div>
        </div>

        {/* Photos en noir et blanc, couleur au survol */}
        <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-2 mb-24 lg:grid lg:grid-cols-4 lg:overflow-visible lg:mx-0 lg:px-0">
          {photos.map((p) => (
            <img
              key={p.alt}
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className={`snap-start shrink-0 w-[70%] sm:w-[40%] lg:w-full aspect-[3/4] object-cover ${p.pos} grayscale hover:grayscale-0 transition-[filter] duration-500`}
            />
          ))}
        </div>

        <h3 className="font-display text-3xl mb-10">{t("Mon parcours", "My journey")}</h3>
        <ol ref={timelineRef} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10">
          {milestones.map((m, i) => (
            <li key={m.title} className="relative pt-5">
              <span
                aria-hidden="true"
                className={`absolute top-0 left-0 h-1 w-full origin-left transition-transform duration-700 ease-out ${
                  m.highlight ? "bg-brand-accent" : "bg-slate-700"
                } ${timelineVisible ? "scale-x-100" : "scale-x-0"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              />
              <p className={`font-bold ${m.highlight ? "text-brand-accent" : "text-slate-400"}`}>{m.date}</p>
              <h4 className="font-display font-extrabold text-xl leading-tight mt-2">{m.title}</h4>
              <p className="text-slate-300 text-sm leading-relaxed mt-3">{m.desc}</p>
            </li>
          ))}
        </ol>

        <div className="grid lg:grid-cols-12 gap-10 mt-24 pt-10 border-t-2 border-paper">
          <p className="lg:col-span-7 text-2xl leading-snug max-w-[40ch]">
            {t(
              "Le tatami m'apprend la régularité, la remise en question et la gestion de la pression. Je retrouve ces mêmes réflexes dans mon travail d'ingénieur.",
              "The mat teaches me consistency, self-questioning and handling pressure. I bring those same reflexes to my engineering work."
            )}
          </p>
          <div className="lg:col-span-5">
            <p className="text-slate-400 text-sm mb-3">Instagram</p>
            <ul className="space-y-3">
              {[
                { handle: "iska.dlm", label: t("athlète", "athlete") },
                { handle: "iska.builds", label: "pro" },
              ].map((ig) => (
                <li key={ig.handle}>
                  <a
                    href={`https://www.instagram.com/${ig.handle}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-baseline gap-3 hover:text-brand-accent transition-colors"
                  >
                    <span className="font-display font-black text-2xl">@{ig.handle}</span>
                    <span className="text-slate-400 text-sm">{ig.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
