"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Apple, Github, ExternalLink } from "lucide-react";
import MediaCarousel, { type MediaItem } from "./MediaCarousel";
import SectionTitleRule from "./SectionTitleRule";
import { ghostCtaClass, primaryCtaClass } from "@/lib/surfaceStyles";

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
    id: "homekeep",
    name: "HomeKeep",
    tagline: "A maintenance schedule built around your actual home",
    cover: "/homekeep1.png",
  },
  {
    id: "burdens",
    name: "Freelance web development",
    tagline: "Burden's General Store — client site for a NL family business",
    cover: "/burdens1.png",
  },
  {
    id: "streamln",
    name: "StreamLn",
    tagline: "Productivity workspace — canvas, notes, tasks",
    cover: "/streamln1.png",
  },
] as const;

type ProjectId = (typeof PROJECTS)[number]["id"];

type ProjectDetail = {
  alt: string;
  media: MediaItem[];
  about: string;
  tech: string[];
  links: ReactNode;
};

function isProjectId(raw: string): raw is ProjectId {
  return PROJECTS.some((project) => project.id === raw);
}

function projectIsLatest(project: (typeof PROJECTS)[number]) {
  return "latest" in project && project.latest === true;
}

const latestBadgeClass =
  "inline-flex shrink-0 items-center rounded-full border border-[var(--accent-primary)]/35 bg-[var(--accent-primary)]/10 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide text-[var(--accent-2)]";

const chipClass =
  "rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300";

const linkRowClass = "flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3";

const DETAILS: Record<ProjectId, ProjectDetail> = {
  chairside: {
    alt: "Chairside screenshots",
    media: [
      { type: "image", src: "/chairside_web_1.png", device: "web" },
      { type: "image", src: "/chairside_web_2.png", device: "web" },
      { type: "image", src: "/chairside_web_3.png", device: "web" },
      { type: "image", src: "/chairside_web_4.png", device: "web" },
      { type: "image", src: "/chairside_mobile_1.png", device: "mobile" },
      { type: "image", src: "/chairside_mobile_2.png", device: "mobile" },
      { type: "image", src: "/chairside_mobile_3.png", device: "mobile" },
      { type: "image", src: "/chairside_mobile_4.png", device: "mobile" },
      { type: "image", src: "/chairside_mobile_5.png", device: "mobile" },
    ],
    about:
      "A live dental staffing platform for Canadian clinics and dental professionals—born from a real hiring problem: clinics struggle to fill permanent roles and last-minute chairside shifts. Clinics post openings and same-day fill-ins; professionals browse roles, set availability, apply with structured profiles, and coordinate hiring through explainable match scoring, messaging, and interviews. Web and iOS are both live now.",
    tech: [
      "React Native",
      "TypeScript",
      "Expo",
      "Supabase",
      "Mapbox",
      "Pingram",
    ],
    links: (
      <>
        <a
          href="https://apps.apple.com/ca/app/chairside-app/id6772834242"
          target="_blank"
          rel="noopener noreferrer"
          className={`${primaryCtaClass} sm:w-auto`}
          style={{ backgroundColor: "var(--cta-solid)" }}
        >
          <Apple className="h-4 w-4 shrink-0" aria-hidden />
          App Store
        </a>
        <a
          href="https://chairsidedental.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${ghostCtaClass} sm:w-auto`}
        >
          <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
          Live site
        </a>
        <a
          href="https://github.com/jvpatey/chairside"
          target="_blank"
          rel="noopener noreferrer"
          className={`${ghostCtaClass} sm:w-auto`}
        >
          <Github className="h-4 w-4 shrink-0" aria-hidden />
          GitHub
        </a>
      </>
    ),
  },
  streamln: {
    alt: "StreamLn media",
    media: [
      { type: "image", src: "/streamln1.png" },
      { type: "image", src: "/streamln2.png" },
      { type: "image", src: "/streamln3.png" },
      { type: "image", src: "/streamln4.png" },
    ],
    about:
      "Productivity workspace for developers. Infinite 2D canvas with notes, documents, tasks, and export—built for structure and clarity. Map out your projects, notes, and tasks on a limitless workspace.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Tailwind CSS",
      "Framer Motion",
    ],
    links: (
      <>
        <a
          href="https://streamln.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${primaryCtaClass} sm:w-auto`}
          style={{ backgroundColor: "var(--cta-solid)" }}
        >
          <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
          Live demo
        </a>
        <a
          href="https://github.com/jvpatey/StreamLn"
          target="_blank"
          rel="noopener noreferrer"
          className={`${ghostCtaClass} sm:w-auto`}
        >
          <Github className="h-4 w-4 shrink-0" aria-hidden />
          GitHub
        </a>
      </>
    ),
  },
  homekeep: {
    alt: "HomeKeep screenshots",
    media: [
      { type: "image", src: "/homekeep1.png", device: "mobile" },
      { type: "image", src: "/homekeep2.png", device: "mobile" },
      { type: "image", src: "/homekeep3.png", device: "mobile" },
      { type: "image", src: "/homekeep4.png", device: "mobile" },
      { type: "image", src: "/homekeep5.png", device: "mobile" },
      { type: "image", src: "/homekeep6.png", device: "mobile" },
    ],
    about:
      "A mobile app that treats the home as the product—set up address and systems once, and HomeKeep builds a recurring schedule for that house. It surfaces what to do next, tracks completion history, and sends tunable reminders, while keeping practical records in one place: weather and season on the dashboard, a home systems map, emergency shutoff notes and photos, and equipment manuals.",
    tech: [
      "React Native",
      "TypeScript",
      "Expo",
      "Supabase",
      "RevenueCat",
      "Expo Notifications",
    ],
    links: (
      <>
        <a
          href="https://apps.apple.com/ca/app/homekeep/id6751912377"
          target="_blank"
          rel="noopener noreferrer"
          className={`${primaryCtaClass} sm:w-auto`}
          style={{ backgroundColor: "var(--cta-solid)" }}
        >
          <Apple className="h-4 w-4 shrink-0" aria-hidden />
          App Store
        </a>
        <a
          href="https://homekeep-website.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${ghostCtaClass} sm:w-auto`}
        >
          <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
          Website
        </a>
        <a
          href="https://github.com/jvpatey/homekeep-mobile"
          target="_blank"
          rel="noopener noreferrer"
          className={`${ghostCtaClass} sm:w-auto`}
        >
          <Github className="h-4 w-4 shrink-0" aria-hidden />
          GitHub
        </a>
      </>
    ),
  },
  burdens: {
    alt: "Burden's General Store screenshots",
    media: [
      { type: "image", src: "/burdens1.png", device: "web" },
      { type: "image", src: "/burdens2.png", device: "web" },
      { type: "image", src: "/burdens3.png", device: "web" },
      { type: "image", src: "/burdens4.png", device: "web" },
      { type: "image", src: "/burdens5.png", device: "web" },
    ],
    about:
      "Freelance web work for Burden's General Store in St. Lunaire-Griquet, NL—a modern marketing site with dark/light mode, story and visit pages, a searchable product ledger, live store hours, and map directions for a family business open since 1959.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vercel"],
    links: (
      <>
        <a
          href="https://burdensgeneralstore.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${primaryCtaClass} sm:w-auto`}
          style={{ backgroundColor: "var(--cta-solid)" }}
        >
          <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
          Live site
        </a>
        <a
          href="https://github.com/jvpatey/burdens-general-store"
          target="_blank"
          rel="noopener noreferrer"
          className={`${ghostCtaClass} sm:w-auto`}
        >
          <Github className="h-4 w-4 shrink-0" aria-hidden />
          GitHub
        </a>
      </>
    ),
  },
};

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const [selectedId, setSelectedId] = useState<ProjectId>(PROJECTS[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectedMeta = useMemo(
    () => PROJECTS.find((p) => p.id === selectedId) ?? PROJECTS[0],
    [selectedId],
  );
  const detail = DETAILS[selectedId];

  useEffect(() => {
    const applyHash = () => {
      const raw = window.location.hash.replace(/^#/, "");
      if (isProjectId(raw)) {
        setSelectedId(raw);
        requestAnimationFrame(() => {
          document.getElementById("projects")?.scrollIntoView({
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
    (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
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
      className="relative mb-12 scroll-mt-[60px] overflow-x-clip px-4 py-10 sm:mb-16 sm:px-6 sm:py-12 md:mb-20 md:py-16 lg:px-8"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
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
          className="mb-8 space-y-3 text-left sm:mb-10"
        >
          <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            <span
              className="inline-block h-2 w-2 shrink-0 rounded-[2px] bg-[var(--accent-primary)]"
              aria-hidden
            />
            Selected work
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Projects
          </h2>
          <SectionTitleRule />
          <p className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Products, mobile apps, and client sites I&apos;ve shipped.
          </p>
        </motion.header>

        {/* Project switcher — above stage so it’s reachable on mobile */}
        <div
          role="tablist"
          aria-label="Projects"
          aria-orientation="horizontal"
          className="-mx-1 mb-6 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:thin] sm:mb-8"
        >
          {PROJECTS.map((p, index) => {
            const isSelected = selectedId === p.id;
            return (
              <button
                key={p.id}
                id={`project-tab-${p.id}`}
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
                className={`group flex min-w-[9.25rem] shrink-0 items-center gap-2.5 rounded-lg border px-2.5 py-2 text-left transition-[colors,transform,border-color,background-color] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-base)] sm:min-w-[11rem] ${
                  isSelected
                    ? "border-[var(--accent-primary)]/40 bg-white/[0.07] text-white"
                    : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/18 hover:bg-white/[0.04] hover:text-slate-200"
                }`}
              >
                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md border border-white/10">
                  <Image
                    src={p.cover}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold leading-snug text-inherit">
                    {p.name}
                  </span>
                  {projectIsLatest(p) ? (
                    <span className="mt-0.5 block text-[0.65rem] font-medium uppercase tracking-wide text-[var(--accent-primary)]">
                      Latest
                    </span>
                  ) : (
                    <span className="mt-0.5 block truncate text-xs text-slate-500 group-hover:text-slate-400">
                      {p.tagline}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured media stage */}
        <motion.div
          key={`stage-${selectedId}`}
          initial={
            reduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.985 }
          }
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.4,
            ease: heroEase,
          }}
          className="relative mb-8 overflow-visible"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[120%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle at center, rgba(224,122,95,0.28) 0%, rgba(224,122,95,0.1) 40%, transparent 68%)",
            }}
            aria-hidden
          />
          <div
            id={DETAIL_PANEL_ID}
            role="tabpanel"
            aria-labelledby={`project-tab-${selectedId}`}
            className="relative z-10 overflow-hidden rounded-lg border border-white/12 bg-white/[0.02] p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-2"
          >
            <MediaCarousel items={detail.media} alt={detail.alt} />
          </div>
        </motion.div>

        {/* Meta + story + CTAs */}
        <motion.div
          key={`meta-${selectedId}`}
          initial={
            reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.35,
            ease: heroEase,
          }}
          className="grid gap-8 lg:grid-cols-12 lg:gap-10"
        >
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2.5">
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {selectedMeta.name}
              </h3>
              {projectIsLatest(selectedMeta) ? (
                <span className={latestBadgeClass}>Latest</span>
              ) : null}
            </div>
            <p className="mt-2 text-base text-slate-400 sm:text-lg">
              {selectedMeta.tagline}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg">
              {detail.about}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {detail.tech.map((tech) => (
                <span key={tech} className={chipClass}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Links
            </p>
            <div className={linkRowClass}>{detail.links}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
