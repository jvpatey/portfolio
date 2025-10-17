// Hero section component - includes name, title, and work button
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
            I&apos;m a full stack software developer.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            I build web and mobile applications that solve real problems.
            Passionate about creating intuitive user experiences and clean,
            efficient code.
          </p>
          <div className="pt-8">
            <a
              href="#projects"
              className="relative group inline-block px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-full font-medium text-lg shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Check out my work!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
