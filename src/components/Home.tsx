const Home = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-bg-app text-text">
      {/* halos de fond subtils */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary blur-3xl opacity-10" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary-hover blur-3xl opacity-10" />
      </div>

      <div className="section">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Colonne gauche : texte */}
          <div>
            <h1 className="text-4xl sm:text-5xl text-text font-extrabold tracking-tight">
              Dilmi Kaïs
            </h1>

            <p className="mt-3 text-xl sm:text-2xl text-text-muted">
              Développeur Full-Stack
            </p>

            <p className="mt-4 max-w-xl text-text opacity-80">
              React / TypeScript côté front — Spring Boot côté back. UIs propres,
              performantes et maintenables.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://linkedin.com/in/kais-dilmi"
                target="_blank"
                className="btn-primary"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Iska1108"
                target="_blank"
                className="btn-ghost"
              >
                GitHub
              </a>
              <a
                href="mailto:kaisdilmi2003@gmail.com"
                className="btn-ghost"
              >
                Email
              </a>
            </div>
          </div>

          {/* Colonne droite : photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary blur-2xl opacity-20" />
              <img
                src="../assets/profile.jpeg"    
                className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-full object-cover ring-4 ring-primary ring-opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;