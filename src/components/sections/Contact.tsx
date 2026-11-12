import { useLanguage } from "../../i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-hong text-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">{t("On en parle ?", "Let's talk")}</h2>

        <p className="text-lg max-w-[55ch] mb-12">
          {t(
            "Apprenti ingénieur chez Enedis jusqu'en 2028. N'hésitez pas à me contacter pour discuter de projets innovants ou d'opportunités de collaboration future.",
            "Apprentice engineer at Enedis until 2028. Feel free to reach out to discuss innovative projects or future collaboration opportunities."
          )}
        </p>

        <a
          href="mailto:kaisdilmi2003@gmail.com"
          className="font-display font-black text-[clamp(1.4rem,5vw,4rem)] leading-none underline decoration-4 underline-offset-8 break-all hover:text-black transition-colors"
        >
          kaisdilmi2003@gmail.com
        </a>

        <div className="flex flex-wrap items-center gap-x-10 gap-y-6 mt-14">
          <p className="font-semibold">Bobigny, Île-de-France</p>
          <a
            href="/CV_Kais_Dilmi.pdf"
            download="CV_Kais_Dilmi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 bg-black text-white font-bold hover:bg-white hover:text-black transition-colors"
          >
            {t("Télécharger mon CV", "Download my resume")}
          </a>
        </div>
      </div>
    </section>
  );
}
