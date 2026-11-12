import { useLanguage } from "../../i18n/LanguageContext";

import imgMedaille from "../../assets/taekwondo-medaille.jpeg";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen pt-16 grid md:grid-cols-2">
      <div className="order-2 md:order-1 flex flex-col justify-between gap-12 px-6 md:px-12 lg:pl-[max(3rem,calc((100vw-80rem)/2+1.5rem))] py-12">
        <p className="text-graphite font-medium">{t("Étudiant ingénieur à l'EFREI Paris", "Engineering student at EFREI Paris")}</p>

        <h1 className="font-display font-black uppercase leading-[0.84] tracking-[-0.03em] text-[clamp(3.5rem,min(10vw,17vh),9.5rem)]">
          {["Kaïs", "Dilmi"].map((line, i) => (
            // padding négatif : le masque ne coupe pas le tréma du Ï
            <span key={line} className="block overflow-hidden pt-[0.14em] -mt-[0.14em]">
              <span className="block animate-rise" style={{ animationDelay: `${0.1 + i * 0.12}s` }}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div>
          <div className="grid sm:grid-cols-2 gap-8 border-t-2 border-black pt-6">
            <div>
              <h2 className="text-sm font-bold">{t("Au bureau", "At the office")}</h2>
              <p className="mt-2 text-lg leading-snug">
                {t(
                  "Apprenti ingénieur logiciel chez Enedis. Fullstack, avec une forte compétence DevOps et CI/CD.",
                  "Software engineer apprentice at Enedis. Fullstack, with strong DevOps and CI/CD skills."
                )}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-bold text-hong">{t("Sur le tatami", "On the mat")}</h2>
              <p className="mt-2 text-lg leading-snug">
                {t(
                  "Champion départemental des Hauts-de-Seine en taekwondo, au club d'Asnières.",
                  "Hauts-de-Seine departmental taekwondo champion, at the Asnières club."
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-10">
            <a href="#contact" className="px-7 py-3 bg-black text-paper font-bold hover:bg-hong transition-colors">
              {t("Me contacter", "Contact me")}
            </a>
            <a href="https://github.com/Iska1108" target="_blank" rel="noreferrer" className="font-semibold underline decoration-2 underline-offset-4 hover:text-hong">
              GitHub
            </a>
            <a href="https://linkedin.com/in/kais-dilmi" target="_blank" rel="noreferrer" className="font-semibold underline decoration-2 underline-offset-4 hover:text-hong">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="order-1 md:order-2 relative h-[55vh] md:h-auto">
        <img
          src={imgMedaille}
          alt={t("Kaïs Dilmi avec sa médaille de taekwondo", "Kaïs Dilmi with his taekwondo medal")}
          className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-125"
        />
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-2 md:w-3 bg-hong origin-top animate-bar-in" />
      </div>
    </section>
  );
}
