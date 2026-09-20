"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Apple, Github, ExternalLink } from "lucide-react";
import MediaCarousel, { type MediaItem } from "./MediaCarousel";
import SectionTitleRule from "./SectionTitleRule";
import {
  asideShadow,
  ghostCtaClass,
  panelClass,
  primaryCtaClass,
} from "@/lib/surfaceStyles";

const heroEase = [0.21, 0.47, 0.32, 0.98] as const;

const DETAIL_PANEL_ID = "projects-detail-panel";

const PROJECTS = [
  {
    id: "chairside",
    name: "Chairside",
    tagline: "Canadian dental staffing — permanent roles & same-day fill-ins",
    cover: "/chairside_web_1.png",
    latest: true,
  },
  {
    id: "streamln",
    name: "StreamLn",
    tagline: "Productivity workspace — canvas, notes, tasks",
    cover: "/streamln1.png",
  },
  {
    id: "homekeep",
    name: "HomeKeep",
    tagline: "Guided maintenance plans, tasks & reminders",
    cover: "/homekeep3.PNG",
  },
  {
    id: "oralcheckr",
    name: "OralCheckr",
    tagline: "Oral health assessment & habit tracking",
    cover: "/oralcheckr1.png",
  },
  {
    id: "burdens",
    name: "Freelance Web Development",
    tagline: "Burden's General Store — responsive site & integrations",
    cover: "/burdens1.png",
  },
] as const;

type ProjectId = (typeof PROJECTS)[number]["id"];

function isProjectId(raw: string): raw is ProjectId {
  return PROJECTS.some((project) => project.id === raw);
}

function projectIsLatest(project: (typeof PROJECTS)[number]) {
  return "latest" in project && project.latest === true;
}

const latestBadgeClass =
  "inline-flex shrink-0 items-center rounded-full border border-rose-400/30 bg-rose-500/10 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide text-rose-200/90 sm:text-[0.65rem]";

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

function LatestProjectBadge() {
  return <span className={latestBadgeClass}>Latest project</span>;
}

function ProjectMediaBlock({
  items,
  alt,
}: {
  items: MediaItem[];
  alt: string;
}) {
  return (
    <div className="min-w-0">
      <MediaCarousel items={items} alt={alt} />
    </div>
  );
}

function ProjectCopy({
  about,
  tech,
  links,
}: {
  about: React.ReactNode;
  tech: string[];
  links: React.ReactNode;
}) {
  return (
    <div className="min-w-0 space-y-5">
      <div>
        <h4 className="text-lg font-semibold text-white md:text-xl">About</h4>
        <div className="mt-3 text-base leading-relaxed text-slate-400 md:text-lg">
          {about}
        </div>
        <div className="mt-5">
          <h5 className="mb-2 text-base font-semibold text-white md:text-lg">
            Tech stack
          </h5>
          <TechChips items={tech} />
        </div>
      </div>
      <div>
        <h4 className="mb-3 text-lg font-semibold text-white md:text-xl">
          Links
        </h4>
        <div className="flex flex-col gap-3 sm:max-w-md">{links}</div>
      </div>
    </div>
  );
}

function ChairsideDetail() {
  return (
    <div className="min-w-0 space-y-5">
      <ProjectMediaBlock
        alt="Chairside web screenshots"
        items={[
          { type: "image", src: "/chairside_web_1.png" },
          { type: "image", src: "/chairside_web_2.png" },
          { type: "image", src: "/chairside_web_3.png" },
          { type: "image", src: "/chairside_web_4.png" },
          { type: "image", src: "/chairside_web_5.png" },
        ]}
      />
      <ProjectCopy
        about={
          <p>
            A live dental staffing platform for Canadian clinics and dental
            professionals—born from a real hiring problem: clinics struggle to
            fill permanent roles and last-minute chairside shifts. Clinics post
            openings and same-day fill-ins; professionals browse roles, set
            availability, apply with structured profiles, and coordinate hiring
            through explainable match scoring, messaging, and interviews. Web is
            live now; the iOS app is coming soon.
          </p>
        }
        tech={[
          "React Native",
          "TypeScript",
          "Expo",
          "Supabase",
          "Mapbox",
          "Pingram",
        ]}
        links={
          <>
            <a
              href="https://chairsidedental.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={primaryCtaClass}
              style={{ backgroundColor: "var(--cta-solid)" }}
            >
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
              Live site
            </a>
            <a
              href="https://github.com/jvpatey/chairside"
              target="_blank"
              rel="noopener noreferrer"
              className={ghostCtaClass}
            >
              <Github className="h-4 w-4 shrink-0" aria-hidden />
              GitHub
            </a>
            <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-slate-400">
              <Apple className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
              iOS app coming soon
            </span>
          </>
        }
      />
    </div>
  );
}

function StreamLnDetail() {
  return (
    <div className="min-w-0 space-y-5">
      <ProjectMediaBlock
        alt="StreamLn media"
        items={[
          { type: "image", src: "/streamln1.png" },
          { type: "image", src: "/streamln2.png" },
          { type: "image", src: "/streamln3.png" },
          {
            type: "video",
            src: "/streamln_video_1.mp4",
            poster: "/streamln1.png",
          },
          {
            type: "video",
            src: "/streamln_video_2.mp4",
            poster: "/streamln2.png",
          },
        ]}
      />
      <ProjectCopy
        about={
          <p>
            Productivity workspace for developers. Infinite 2D canvas with notes,
            documents, tasks, and export—built for structure and clarity. Map out
            your projects, notes, and tasks on a limitless workspace.
          </p>
        }
        tech={[
          "Next.js",
          "React",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "Clerk",
          "Tailwind CSS",
          "Framer Motion",
        ]}
        links={
          <>
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
            <a
              href="https://github.com/jvpatey/StreamLn"
              target="_blank"
              rel="noopener noreferrer"
              className={ghostCtaClass}
            >
              <Github className="h-4 w-4 shrink-0" aria-hidden />
              GitHub
            </a>
          </>
        }
      />
    </div>
  );
}

function HomeKeepDetail() {
  return (
    <div className="min-w-0 space-y-5">
      <ProjectMediaBlock
        alt="HomeKeep media"
        items={[
          { type: "image", src: "/homekeep3.PNG" },
          { type: "image", src: "/homekeep4.PNG" },
          { type: "image", src: "/homekeep5.PNG" },
          { type: "image", src: "/homekeep6.PNG" },
          {
            type: "video",
            src: "/homekeep-video-1.mp4",
            poster: "/homekeep3.PNG",
          },
        ]}
      />
      <ProjectCopy
        about={
          <p>
            A mobile app for staying on top of home maintenance—from everyday
            chores to seasonal prep. Create recurring tasks with push reminders,
            follow guided plans for spring refresh, cold-weather prep, safety
            checks, and more, and keep equipment manuals and completion history
            in one place.
          </p>
        }
        tech={["React Native", "TypeScript", "Expo", "Supabase"]}
        links={
          <>
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
            <a
              href="https://homekeep-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={ghostCtaClass}
            >
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
              Website
            </a>
            <a
              href="https://github.com/jvpatey/homekeep-mobile"
              target="_blank"
              rel="noopener noreferrer"
              className={ghostCtaClass}
            >
              <Github className="h-4 w-4 shrink-0" aria-hidden />
              GitHub
            </a>
          </>
        }
      />
    </div>
  );
}

function OralCheckrDetail() {
  return (
    <div className="min-w-0 space-y-5">
      <ProjectMediaBlock
        alt="OralCheckr media"
        items={[
          { type: "image", src: "/oralcheckr1.png" },
          { type: "image", src: "/oralcheckr2.png" },
          { type: "image", src: "/oralcheckr3.png" },
          { type: "image", src: "/oralcheckr4.png" },
          { type: "image", src: "/oralcheckr5.png" },
        ]}
      />
      <ProjectCopy
        about={
          <p>
            A comprehensive web app for oral health assessment and habit tracking
            with personalized recommendations and progress analytics.
          </p>
        }
        tech={[
          "React",
          "TypeScript",
          "Vite",
          "Node.js",
          "Express",
          "MySQL",
        ]}
        links={
          <>
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
            <a
              href="https://github.com/jvpatey/OralCheckr"
              target="_blank"
              rel="noopener noreferrer"
              className={ghostCtaClass}
            >
              <Github className="h-4 w-4 shrink-0" aria-hidden />
              GitHub
            </a>
          </>
        }
      />
    </div>
  );
}

function BurdensDetail() {
  return (
    <div className="min-w-0 space-y-5">
      <ProjectMediaBlock
        alt="Burden's General Store screenshots"
        items={[
          { type: "image", src: "/burdens1.png" },
          { type: "image", src: "/burdens2.png" },
          { type: "image", src: "/burdens3.png" },
          { type: "image", src: "/burdens4.png" },
        ]}
      />
      <ProjectCopy
        about={
          <p>
            A freelance web development project featuring modern design,
            responsive layouts, dark/light mode, and seamless third-party
            integrations.
          </p>
        }
        tech={[
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "Vercel",
        ]}
        links={
          <>
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
            <a
              href="https://github.com/jvpatey/burdens-general-store"
              target="_blank"
              rel="noopener noreferrer"
              className={ghostCtaClass}
            >
              <Github className="h-4 w-4 shrink-0" aria-hidden />
              GitHub
            </a>
          </>
        }
      />
    </div>
  );
}

function ProjectDetailBody({ id }: { id: ProjectId }) {
  switch (id) {
    case "chairside":
      return <ChairsideDetail />;
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
      if (isProjectId(raw)) {
        setSelectedId(raw);
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

        <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-12 lg:items-stretch lg:gap-x-6 xl:gap-x-7">
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
            className={`min-w-0 max-w-md p-1.5 sm:p-2 lg:col-span-4 lg:max-w-none ${panelClass}`}
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
                    className={`w-full scroll-mt-28 rounded-xl px-2 py-2.5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)] sm:rounded-2xl sm:px-2.5 sm:py-3 ${
                      isSelected
                        ? "bg-white/[0.08] text-white ring-1 ring-white/12"
                        : "text-slate-300 hover:bg-white/[0.04] hover:text-slate-100"
                    }`}
                  >
                    <span className="flex min-w-0 items-start gap-2.5">
                      <span className="relative mt-0.5 h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
                        <Image
                          src={p.cover}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="44px"
                        />
                      </span>
                      <span className="flex min-w-0 flex-col gap-0.5">
                        <span className="flex min-w-0 flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold leading-snug text-white sm:text-base">
                            {p.name}
                          </span>
                          {projectIsLatest(p) ? <LatestProjectBadge /> : null}
                        </span>
                        <span className="text-xs leading-snug text-slate-400 sm:text-sm">
                          {p.tagline}
                        </span>
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
            className={`min-w-0 p-4 sm:p-6 lg:col-span-8 lg:p-7 ${panelClass}`}
            style={asideShadow}
          >
            <div className="mb-5 border-b border-white/10 pb-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {selectedMeta.name}
                </h3>
                {projectIsLatest(selectedMeta) ? <LatestProjectBadge /> : null}
              </div>
              <p className="mt-1 text-sm text-slate-400">
                {selectedMeta.tagline}
              </p>
            </div>
            <ProjectDetailBody id={selectedId} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
