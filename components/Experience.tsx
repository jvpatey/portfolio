export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">
              <span className="text-blue-400">02.</span> Where I&apos;ve Worked
            </h2>
        <div className="space-y-8">
          <div className="border-l-2 border-blue-400 pl-6">
            <h3 className="text-xl font-semibold text-slate-100">
              Software Engineer
            </h3>
            <p className="text-blue-400">Company Name • 2023 - Present</p>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">▸</span>
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">▸</span>
                Work with a variety of different languages, platforms,
                frameworks, and content management systems
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">▸</span>
                Communicate with multi-disciplinary teams of engineers,
                designers, producers, and clients
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
