export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-blue-400">03.</span> Some Things I've Built
        </h2>
        <div className="space-y-20">
          {/* Project 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <p className="text-blue-400 text-sm mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold mb-4">Project Name</h3>
              <div className="bg-slate-800 p-6 rounded-lg mb-4">
                <p className="text-slate-300 leading-relaxed">
                  A web app for visualizing personalized Spotify data built with
                  React, Node.js, Express, and the Spotify Web API. Users can
                  view their top artists, top tracks, recently played tracks,
                  and detailed audio information about each track.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm mb-4">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>Spotify API</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                <div className="aspect-video bg-slate-700 rounded flex items-center justify-center">
                  <span className="text-slate-400">Project Screenshot</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                <div className="aspect-video bg-slate-700 rounded flex items-center justify-center">
                  <span className="text-slate-400">Project Screenshot</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-blue-400 text-sm mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold mb-4">Another Project</h3>
              <div className="bg-slate-800 p-6 rounded-lg mb-4">
                <p className="text-slate-300 leading-relaxed">
                  A clean, simple and responsive portfolio template built with
                  Next.js and styled with Tailwind CSS. Perfect for developers
                  who want to showcase their work in a professional way.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm mb-4">
                <span>Next.js</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
