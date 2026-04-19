import { Github, Linkedin } from "lucide-react";
import SectionTitleRule from "./SectionTitleRule";

export default function Footer() {
  return (
    <footer
      className="relative z-20 border-t border-white/15 bg-[var(--hero-base)] px-4 py-8 shadow-[0_-12px_40px_rgba(0,0,0,0.35)] sm:px-6 sm:py-10 lg:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div className="min-w-0 text-left">
          <SectionTitleRule className="mb-3" />
          <p className="text-sm text-slate-400">
            Built with Next.js & Tailwind CSS
          </p>
          <p className="mt-1 text-sm font-medium text-slate-200">
            Designed &amp; Built by Jeffrey Patey
          </p>
        </div>

        <div className="flex shrink-0 gap-4 sm:justify-end sm:gap-5">
          <a
            href="https://github.com/jvpatey"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md text-slate-400 transition-colors hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)]"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          </a>
          <a
            href="https://www.linkedin.com/in/jeffreypatey/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md text-slate-400 transition-colors hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)]"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
