const Home = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden text-text py-28"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-10">
        <div className="grid items-center gap-24 lg:grid-cols-2">
          {/* Colonne gauche */}
          <div>
            <h1 className="text-6xl sm:text-7xl text-text font-extrabold tracking-tight">
              Dilmi Kaïs
            </h1>

            <p className="mt-6 text-3xl sm:text-4xl text-text-muted">
              Développeur Full-Stack
            </p>

            <p className="mt-8 max-w-3xl text-xl sm:text-2xl text-text opacity-80 leading-relaxed">
              React / TypeScript côté front — Spring Boot côté back.  
              UIs propres, performantes et maintenables.
            </p>

            <div className="mt-10 flex flex-wrap gap-6">
              <a
                href="https://linkedin.com/in/kais-dilmi"
                target="_blank"
                className="btn-primary text-lg px-8 py-4"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Iska1108"
                target="_blank"
                className="btn-ghost text-lg px-8 py-4"
              >
                GitHub
              </a>
              <a
                href="mailto:kaisdilmi2003@gmail.com"
                className="btn-ghost text-lg px-8 py-4"
              >
                Email
              </a>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary blur-3xl opacity-30" />
              <img
                src="../assets/profile.jpg"
                className="relative h-[22rem] w-[22rem] sm:h-[26rem] sm:w-[26rem] rounded-full object-cover ring-[10px] ring-primary ring-opacity-60"
                alt="portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
