"use client";

import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/language-context";
import { cn } from "@/lib/utils";

const badgeStyles = {
  gold: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

const selectedProjects = projects.filter(
  (project) => !project.featured && project.group === "selected",
);
const moreProjects = projects.filter(
  (project) => !project.featured && project.group === "more",
);

function ProjectCard({
  project,
  index,
  compact = false,
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  const { t } = useLanguage();
  const projectT = t.projects.items[project.id];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "glass-card flex flex-col",
        compact ? "p-5" : "p-6 md:p-7",
      )}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          {projectT.eyebrow && (
            <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
              {projectT.eyebrow}
            </p>
          )}
          <h3 className={cn("font-semibold leading-snug", compact ? "text-base" : "text-lg")}>
            {projectT.title}
          </h3>
        </div>
        <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
          {project.year}
        </span>
      </div>

      {compact && (
        <p className="text-xs text-primary/80 font-medium mb-3 leading-relaxed">
          {project.stack.join(" · ")}
        </p>
      )}

      <p className="text-sm text-muted-foreground leading-[1.7] flex-1">
        {projectT.description}
      </p>

      {projectT.context && (
        <p className="mt-3 text-xs leading-relaxed text-foreground/65">
          {projectT.context}
        </p>
      )}

      {!compact && (
        <p className="text-xs text-primary/80 font-medium mt-4 leading-relaxed">
          {project.stack.join(" · ")}
        </p>
      )}

      {projectT.badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
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
      )}

      {project.links?.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 self-start text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {t.projects.githubLabel}
        </a>
      )}
    </motion.article>
  );
}

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            {t.projects.label}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {t.projects.heading}
          </h2>
        </motion.div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {t.projects.selectedLabel}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {selectedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {t.projects.moreLabel}
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {moreProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                compact
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
