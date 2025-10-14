export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <p className="text-lg bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100">
            Jeffrey Patey.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-300">
            I build things for the web.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            I'm a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on building accessible, human-centered products.
          </p>
          <div className="pt-8">
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Check out my work!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
