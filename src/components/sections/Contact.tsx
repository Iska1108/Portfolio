export default function Contact() {
  return (
    <section id="contact" className="py-20 mb-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="glass-card p-10 rounded-3xl border border-brand-accent/20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-brand-accent/5 blur-3xl -z-10" />

          <h2 className="text-4xl font-bold mb-6">Prêt à collaborer ?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Apprenti Ingénieur chez Enedis pour les 3 prochaines années. N'hésitez pas à me contacter pour discuter de projets innovants ou d'opportunités de collaboration future.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <a
              href="mailto:kaisdilmi2003@gmail.com"
              className="flex items-center gap-3 text-xl font-bold hover:text-brand-accent transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-brand-accent">
                <i className="fas fa-envelope" />
              </div>
              kaisdilmi2003@gmail.com
            </a>

            <div className="hidden md:block w-px h-12 bg-slate-700" />

            <div className="flex items-center gap-3 text-xl font-bold">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-brand-purple">
                <i className="fas fa-map-marker-alt" />
              </div>
              Bobigny / Île-de-France
            </div>
          </div>

          <a
            href="#"
            className="inline-block px-10 py-4 bg-gradient-to-r from-brand-accent to-brand-secondary text-brand-dark font-bold rounded-full hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all transform hover:-translate-y-1"
          >
            Télécharger mon CV <i className="fas fa-download ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
