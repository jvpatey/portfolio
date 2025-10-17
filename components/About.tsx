import Image from "next/image";

// About section component - includes bio, portrait, and skills
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
                I&apos;m a full-stack software developer with a background in
                healthcare and a passion for building practical, purpose-built
                tools. After 10 years in patient care, I bring a detail-oriented
                mindset and genuine interest in health tech and SaaS products
                that simplify everyday tasks.
              </p>
              <p>
                I love bringing ideas to life through responsive, accessible
                design that makes complex tasks feel simple. My projects range
                from mobile apps like HomeKeep (available on the App Store) to
                web applications like OralCheckr, each solving real problems
                with clean, user-friendly interfaces.
              </p>
              <p>Here are the technologies I&apos;ve been working with:</p>
              <div className="grid grid-cols-2 gap-2 text-sm mt-4">
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  React & React Native
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  Next.js & TypeScript
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  Node.js & Express
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  PostgreSQL & Supabase
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  RESTful API Design
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">▸</span>
                  Auth (JWT, OAuth)
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg transform rotate-3"></div>
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src="/jeffrey-patey.jpg"
                  alt="Jeffrey Patey"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
