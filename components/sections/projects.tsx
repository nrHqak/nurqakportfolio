"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/language-context";
import { cn } from "@/lib/utils";

const badgeStyles = {
  gold: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

const selectedProjectTones = {
  "digital-security": {
    border: "border-emerald-400/15",
    activeBorder: "border-emerald-300/35",
    eyebrow: "text-emerald-300/80",
    hairline: "from-transparent via-emerald-300/55 to-transparent",
    glow: "from-emerald-500/[0.07]",
  },
  "algorhythm-research": {
    border: "border-violet-400/15",
    activeBorder: "border-violet-300/35",
    eyebrow: "text-violet-300/80",
    hairline: "from-transparent via-violet-300/55 to-transparent",
    glow: "from-violet-500/[0.07]",
  },
  "credit-default": {
    border: "border-sky-400/15",
    activeBorder: "border-sky-300/35",
    eyebrow: "text-sky-300/80",
    hairline: "from-transparent via-sky-300/55 to-transparent",
    glow: "from-sky-500/[0.07]",
  },
} as const;

const selectedProjects = projects.filter(
  (project) => !project.featured && project.group === "selected",
);
const moreProjects = projects.filter(
  (project) => !project.featured && project.group === "more",
);

function SelectedProjectCard({
  project,
  index,
  activeIndex,
}: {
  project: Project;
  index: number;
  activeIndex: number;
}) {
  const { t } = useLanguage();
  const projectT = t.projects.items[project.id];
  const tone =
    selectedProjectTones[project.id as keyof typeof selectedProjectTones];
  const active = index === activeIndex;

  return (
    <motion.article
      data-project-slide
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      animate={{ opacity: active ? 1 : 0.78, scale: active ? 1 : 0.99 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "glass-card relative flex w-[92%] flex-none snap-start flex-col overflow-hidden p-6 transition-colors duration-300 md:w-[80%] md:p-7 lg:w-[68%]",
        tone.border,
        active && tone.activeBorder,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent to-transparent",
          tone.glow,
        )}
      />
      <div
        className={cn(
          "absolute inset-x-8 top-0 h-px bg-gradient-to-r",
          tone.hairline,
        )}
      />

      <div className="relative flex h-full flex-col">
        {projectT.eyebrow ? (
          <p
            className={cn(
              "mb-3 text-xs font-medium uppercase tracking-[0.16em]",
              tone.eyebrow,
            )}
          >
            {projectT.eyebrow}
          </p>
        ) : null}

        <div className="mb-4 flex items-start justify-between gap-4">
          <h4 className="text-xl font-semibold leading-snug md:text-2xl">
            {projectT.title}
          </h4>
          <span className="shrink-0 text-xs text-muted-foreground">
            {project.year}
          </span>
        </div>

        <p className="max-w-2xl text-sm leading-[1.75] text-muted-foreground md:text-base">
          {projectT.description}
        </p>

        <p className="mt-5 text-xs font-medium leading-relaxed text-foreground/75">
          {project.stack.join(" · ")}
        </p>

        {projectT.context ? (
          <p className="mt-3 border-t border-white/10 pt-3 text-xs leading-relaxed text-muted-foreground">
            {projectT.context}
          </p>
        ) : null}

        {project.links?.github ? (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 self-start text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.projects.githubLabel}
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

function MoreProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { t } = useLanguage();
  const projectT = t.projects.items[project.id];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card flex flex-col p-5"
    >
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold leading-snug">
          {projectT.title}
        </h3>
        <span className="shrink-0 whitespace-nowrap text-xs text-muted-foreground">
          {project.year}
        </span>
      </div>

      <p className="mb-3 text-xs font-medium leading-relaxed text-primary/80">
        {project.stack.join(" · ")}
      </p>
      <p className="flex-1 text-sm leading-[1.7] text-muted-foreground">
        {projectT.description}
      </p>

      {projectT.badges.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {projectT.badges.map((badge, badgeIndex) => (
            <span
              key={badge}
              className={cn(
                "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium",
                badgeStyles[project.badges[badgeIndex]?.variant ?? "gold"],
              )}
            >
              {badge}
            </span>
          ))}
        </div>
      ) : null}

      {project.links?.github ? (
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 self-start text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {t.projects.githubLabel}
        </a>
      ) : null}
    </motion.article>
  );
}

export function ProjectsSection() {
  const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToProject = (nextIndex: number) => {
    const boundedIndex = Math.max(
      0,
      Math.min(selectedProjects.length - 1, nextIndex),
    );
    const carousel = carouselRef.current;
    const slide = carousel?.querySelectorAll<HTMLElement>(
      "[data-project-slide]",
    )[boundedIndex];

    if (carousel && slide) {
      carousel.scrollTo({
        left: slide.offsetLeft - carousel.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(boundedIndex);
    }
  };

  const updateActiveProject = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slides = Array.from(
      carousel.querySelectorAll<HTMLElement>("[data-project-slide]"),
    );
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const distance = Math.abs(
        slide.offsetLeft - carousel.offsetLeft - carousel.scrollLeft,
      );
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex((current) =>
      current === nearestIndex ? current : nearestIndex,
    );
  };

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            {t.projects.label}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {t.projects.heading}
          </h2>
        </motion.div>

        <div>
          <div className="mb-5 flex items-center justify-between gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {t.projects.selectedLabel}
            </h3>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollToProject(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label={t.projects.previousLabel}
                className="glass inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="min-w-14 text-center text-xs tabular-nums text-muted-foreground">
                {String(activeIndex + 1).padStart(2, "0")} / {" "}
                {String(selectedProjects.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => scrollToProject(activeIndex + 1)}
                disabled={activeIndex === selectedProjects.length - 1}
                aria-label={t.projects.nextLabel}
                className="glass inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            onScroll={updateActiveProject}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {selectedProjects.map((project, index) => (
              <SelectedProjectCard
                key={project.id}
                project={project}
                index={index}
                activeIndex={activeIndex}
              />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {t.projects.moreLabel}
          </h3>
          <div className="grid gap-5 md:grid-cols-2">
            {moreProjects.map((project, index) => (
              <MoreProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
