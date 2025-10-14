export default function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-blue-400">01.</span> About Me
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Hello! My name is Jeffrey and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm mt-4">
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  JavaScript (ES6+)
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  React
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  Next.js
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  Node.js
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  TypeScript
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  Tailwind CSS
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg transform rotate-3"></div>
              <div className="relative w-full h-full bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center">
                <span className="text-slate-400">Your Photo Here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
