import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">JP</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8 text-sm">
            <Link
              href="#about"
              className="text-slate-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              01. About
            </Link>
            <Link
              href="#experience"
              className="text-slate-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              02. Experience
            </Link>
            <Link
              href="#projects"
              className="text-slate-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              03. Work
            </Link>
            <Link
              href="#contact"
              className="text-slate-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              04. Contact
            </Link>
            <a
              href="#resume"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-blue-500/25"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
