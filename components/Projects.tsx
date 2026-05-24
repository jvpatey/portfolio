"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Apple, Github, ExternalLink } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import MediaCarousel from "./MediaCarousel";
import SectionTitleRule from "./SectionTitleRule";
import {
  asideShadow,
  detailSectionClass,
  ghostCtaClass,
  panelClass,
  primaryCtaClass,
} from "@/lib/surfaceStyles";

const heroEase = [0.21, 0.47, 0.32, 0.98] as const;

const DETAIL_PANEL_ID = "projects-detail-panel";

const HASH_IDS = ["streamln", "homekeep", "oralcheckr", "burdens"] as const;

type ProjectId = (typeof HASH_IDS)[number];

type ProjectMeta = {
  id: ProjectId;
  name: string;
  tagline: string;
};

const PROJECTS: ProjectMeta[] = [
  {
    id: "streamln",
    name: "StreamLn",
    tagline: "Productivity workspace — canvas, notes, tasks",
  },
  {
    id: "homekeep",
    name: "HomeKeep",
    tagline: "Home maintenance reminders & tracking",
  },
  {
    id: "oralcheckr",
    name: "OralCheckr",
    tagline: "Oral health assessment & habit tracking",
  },
  {
    id: "burdens",
    name: "Freelance Web Development",
    tagline: "Burden's General Store — responsive site & integrations",
  },
];

const chipClass =
  "rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300";

function TechChips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((tech) => (
        <span key={tech} className={chipClass}>
          {tech}
        </span>
      ))}
    </div>
  );
}

function StreamLnDetail() {
  return (
    <div className="space-y-4 min-w-0">
      <div className="min-w-0">
        <MediaCarousel
          images={[
            "/streamln1.png",
            "/streamln2.png",
            "/streamln3.png",
            "/streamln4.png",
            "/streamln5.png",
            "/streamln6.png",
            "/streamln7.png",
            "/streamln8.png",
          ]}
          videos={[
            "/streamln_video_1.mp4",
            "/streamln_video_2.mp4",
            "/streamln_video_3.mp4",
            "/streamln_video_4.mp4",
            "/streamln_video_5.mp4",
            "/streamln_video_6.mp4",
            "/streamln_video_7.mp4",
            "/streamln_video_8.mp4",
            "/streamln_video_9.mp4",
          ]}
          alt="StreamLn media"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 min-w-0">
        <div className={detailSectionClass}>
          <h4 className="text-lg font-semibold text-white md:text-xl">
            About
          </h4>
          <p className="mt-3 text-base leading-relaxed text-slate-400 md:text-lg">
            Productivity workspace for developers. Infinite 2D canvas with
            notes, documents, tasks, and export—built for structure and
            clarity. Map out your projects, notes, and tasks on a limitless
            workspace.
          </p>
          <div className="mt-5">
            <h5 className="mb-2 text-base font-semibold text-white md:text-lg">
              Tech stack
            </h5>
            <TechChips
              items={[
                "Next.js",
                "React",
                "TypeScript",
                "Prisma",
                "PostgreSQL",
                "Clerk",
                "Tailwind CSS",
                "Framer Motion",
              ]}
            />
          </div>
        </div>
        <div className={detailSectionClass}>
          <h4 className="text-lg font-semibold text-white md:text-xl">Links</h4>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="https://github.com/jvpatey/StreamLn"
              target="_blank"
              rel="noopener noreferrer"
              className={ghostCtaClass}
            >
              <Github className="h-4 w-4 shrink-0" aria-hidden />
              GitHub
            </a>
            <a
              href="https://streamln.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={primaryCtaClass}
              style={{ backgroundColor: "var(--cta-solid)" }}
            >
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
              Live demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeKeepDetail() {
  return (
    <div className="space-y-4 min-w-0">
      <div className="min-w-0">
        <MediaCarousel
          images={[
            "/homekeep1.PNG",
            "/homekeep2.PNG",
            "/homekeep3.PNG",
            "/homekeep4.PNG",
            "/homekeep5.PNG",
            "/homekeep6.PNG",
            "/homekeep7.PNG",
            "/homekeep8.PNG",
            "/homekeep9.PNG",
            "/homekeep10.PNG",
          ]}
          videos={[
            "/homekeep-video-1.mp4",
            "/homekeep-video-2.mp4",
            "/homekeep-video-3.mp4",
            "/homekeep-video-4.mp4",
          ]}
          alt="HomeKeep media"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 min-w-0">
        <div className={detailSectionClass}>
          <h4 className="text-lg font-semibold text-white md:text-xl">
            About
          </h4>
          <p className="mt-3 text-base leading-relaxed text-slate-400 md:text-lg">
            A mobile app that makes home maintenance manageable. Create
            recurring tasks, get reminders when things are due, and track your
            progress—all with a clean, intuitive interface.
          </p>
          <div className="mt-5">
            <h5 className="mb-2 text-base font-semibold text-white md:text-lg">
              Tech stack
            </h5>
            <TechChips
              items={["React Native", "TypeScript", "Expo", "Supabase"]}
            />
          </div>
        </div>
        <div className={detailSectionClass}>
          <h4 className="text-lg font-semibold text-white md:text-xl">Links</h4>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="https://github.com/jvpatey/homekeep-mobile"
              target="_blank"
              rel="noopener noreferrer"
              className={ghostCtaClass}
            >
              <Github className="h-4 w-4 shrink-0" aria-hidden />
              GitHub
            </a>
            <a
              href="https://apps.apple.com/ca/app/homekeep/id6751912377"
              target="_blank"
              rel="noopener noreferrer"
              className={primaryCtaClass}
              style={{ backgroundColor: "var(--cta-solid)" }}
            >
              <Apple className="h-4 w-4 shrink-0" aria-hidden />
              App Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function OralCheckrDetail() {
  return (
    <div className="space-y-4 min-w-0">
      <div className="min-w-0">
        <MediaCarousel
          images={[
            "/oralcheckr1.png",
            "/oralcheckr2.png",
            "/oralcheckr3.png",
            "/oralcheckr4.png",
            "/oralcheckr5.png",
            "/oralcheckr6.png",
            "/oralcheckr7.png",
            "/oralcheckr8.png",
            "/oralcheckr9.png",
            "/oralcheckr10.png",
          ]}
          videos={[
            "/oralcheckr-recording-1.mov",
            "/oralcheckr-recording-2.mov",
            "/oralcheckr-recording-3.mov",
            "/oralcheckr-recording-4.mov",
            "/oralcheckr-recording-5.mov",
            "/oralcheckr-recording-6.mov",
          ]}
          alt="OralCheckr media"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 min-w-0">
        <div className={detailSectionClass}>
          <h4 className="text-lg font-semibold text-white md:text-xl">
            About
          </h4>
          <p className="mt-3 text-base leading-relaxed text-slate-400 md:text-lg">
            A comprehensive web app for oral health assessment and habit
            tracking with personalized recommendations and progress analytics.
          </p>
          <div className="mt-5">
            <h5 className="mb-2 text-base font-semibold text-white md:text-lg">
              Tech stack
            </h5>
            <TechChips
              items={[
                "React",
                "TypeScript",
                "Vite",
                "Node.js",
                "Express",
                "MySQL",
              ]}
            />
          </div>
        </div>
        <div className={detailSectionClass}>
          <h4 className="text-lg font-semibold text-white md:text-xl">Links</h4>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="https://github.com/jvpatey/OralCheckr"
              target="_blank"
              rel="noopener noreferrer"
              className={ghostCtaClass}
            >
              <Github className="h-4 w-4 shrink-0" aria-hidden />
              GitHub
            </a>
            <a
              href="https://jvpatey.github.io/OralCheckr/"
              target="_blank"
              rel="noopener noreferrer"
              className={primaryCtaClass}
              style={{ backgroundColor: "var(--cta-solid)" }}
            >
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
              Live demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function BurdensDetail() {
  return (
    <div className="space-y-4 min-w-0">
      <div className="min-w-0">
        <ImageCarousel
          images={[
            "/burdens1.png",
            "/burdens2.png",
            "/burdens3.png",
            "/burdens4.png",
            "/burdens5.png",
            "/burdens6.png",
          ]}
          alt="Burden's General Store screenshots"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 min-w-0">
        <div className={detailSectionClass}>
          <h4 className="text-lg font-semibold text-white md:text-xl">
            About
          </h4>
          <p className="mt-3 text-base leading-relaxed text-slate-400 md:text-lg">
            A freelance web development project featuring modern design,
            responsive layouts, dark/light mode, and seamless third-party
            integrations.
          </p>
          <div className="mt-5">
            <h5 className="mb-2 text-base font-semibold text-white md:text-lg">
              Tech stack
            </h5>
            <TechChips
              items={[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "shadcn/ui",
                "Vercel",
              ]}
            />
          </div>
        </div>
        <div className={detailSectionClass}>
          <h4 className="text-lg font-semibold text-white md:text-xl">Links</h4>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="https://github.com/jvpatey/burdens-general-store"
              target="_blank"
              rel="noopener noreferrer"
              className={ghostCtaClass}
            >
              <Github className="h-4 w-4 shrink-0" aria-hidden />
              GitHub
            </a>
            <a
              href="https://burdensgeneralstore.com"
              target="_blank"
              rel="noopener noreferrer"
              className={primaryCtaClass}
              style={{ backgroundColor: "var(--cta-solid)" }}
            >
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
              Live demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectDetailBody({ id }: { id: ProjectId }) {
  switch (id) {
    case "streamln":
      return <StreamLnDetail />;
    case "homekeep":
      return <HomeKeepDetail />;
    case "oralcheckr":
      return <OralCheckrDetail />;
    case "burdens":
      return <BurdensDetail />;
    default:
      return null;
  }
}

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const [selectedId, setSelectedId] = useState<ProjectId>(PROJECTS[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectedMeta = useMemo(
    () => PROJECTS.find((p) => p.id === selectedId) ?? PROJECTS[0],
    [selectedId],
  );

  useEffect(() => {
    const applyHash = () => {
      const raw = window.location.hash.replace(/^#/, "");
      if (HASH_IDS.includes(raw as ProjectId)) {
        setSelectedId(raw as ProjectId);
        requestAnimationFrame(() => {
          document.getElementById(raw)?.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
            block: "start",
          });
        });
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [reduceMotion]);

  const focusTab = useCallback((index: number) => {
    const i = (index + PROJECTS.length) % PROJECTS.length;
    queueMicrotask(() => tabRefs.current[i]?.focus());
  }, []);

  const onTabKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      switch (e.key) {
        case "ArrowDown":
        case "ArrowRight":
          e.preventDefault();
          setSelectedId(PROJECTS[(index + 1) % PROJECTS.length].id);
          focusTab(index + 1);
          break;
        case "ArrowUp":
        case "ArrowLeft":
          e.preventDefault();
          setSelectedId(
            PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length].id,
          );
          focusTab(index - 1);
          break;
        case "Home":
          e.preventDefault();
          setSelectedId(PROJECTS[0].id);
          focusTab(0);
          break;
        case "End":
          e.preventDefault();
          setSelectedId(PROJECTS[PROJECTS.length - 1].id);
          focusTab(PROJECTS.length - 1);
          break;
        default:
          break;
      }
    },
    [focusTab],
  );

  return (
    <section
      id="projects"
      className="mb-12 scroll-mt-[60px] overflow-hidden px-4 py-8 sm:mb-16 sm:px-6 sm:py-10 md:mb-20 md:py-14 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-6xl overflow-hidden">
        <motion.header
          initial={
            reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            ease: heroEase,
          }}
          className="mb-6 space-y-2 text-left sm:mb-10 sm:space-y-3 lg:mb-8"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Projects
          </h2>
          <SectionTitleRule />
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Things I&apos;ve built and shipped—products, mobile apps, and client
            sites.
          </p>
        </motion.header>

        <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-x-6 xl:gap-x-7 lg:items-stretch">
          <motion.div
            initial={
              reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              delay: reduceMotion ? 0 : 0.06,
              ease: heroEase,
            }}
            className={`min-w-0 max-w-md lg:max-w-none lg:col-span-4 ${panelClass} p-1.5 sm:p-2`}
            style={asideShadow}
          >
            <p className="px-2 pb-0.5 pt-1.5 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-400 sm:text-xs">
              Work
            </p>
            <div
              role="tablist"
              aria-label="Projects"
              aria-orientation="vertical"
              className="flex flex-col gap-0.5"
            >
              {PROJECTS.map((p, index) => {
                const isSelected = selectedId === p.id;
                return (
                  <button
                    key={p.id}
                    id={p.id}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls={DETAIL_PANEL_ID}
                    tabIndex={isSelected ? 0 : -1}
                    onClick={() => setSelectedId(p.id)}
                    onKeyDown={(e) => onTabKeyDown(e, index)}
                    className={`w-full scroll-mt-28 rounded-xl px-2 py-2.5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)] sm:rounded-2xl sm:px-2.5 sm:py-3 ${
                      isSelected
                        ? "bg-white/[0.08] text-white ring-1 ring-white/12"
                        : "text-slate-300 hover:bg-white/[0.04] hover:text-slate-100"
                    }`}
                  >
                    <span className="flex min-w-0 flex-col gap-0.5">
                      <span className="text-sm font-semibold leading-snug text-white sm:text-base">
                        {p.name}
                      </span>
                      <span className="text-xs leading-snug text-slate-400 sm:text-sm">
                        {p.tagline}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            key={selectedId}
            initial={
              reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.35,
              ease: heroEase,
            }}
            id={DETAIL_PANEL_ID}
            role="tabpanel"
            aria-labelledby={`${selectedId}`}
            className={`min-w-0 lg:col-span-8 ${panelClass} p-4 sm:p-6 lg:p-7`}
            style={asideShadow}
          >
            <div className="mb-6 border-b border-white/10 pb-5">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {selectedMeta.name}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{selectedMeta.tagline}</p>
            </div>
            <ProjectDetailBody id={selectedId} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
