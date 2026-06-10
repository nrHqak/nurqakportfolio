"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/language-context";
import { cn } from "@/lib/utils";

const badgeStyles = {
  gold: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export function ProjectsSection() {
  const { t } = useLanguage();
  const gridProjects = projects.filter((p) => !p.featured);

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

        <div className="grid md:grid-cols-2 gap-5">
          {gridProjects.map((project, index) => {
            const projectT = t.projects.items[project.id];

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "glass-card p-6 flex flex-col",
                  index === 0 && "md:col-span-2",
                )}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold leading-snug">
                    {projectT.title}
                  </h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
                    {project.year}
                  </span>
                </div>

                <p className="text-xs text-primary/80 font-medium mb-3">
                  {project.stack.join(" · ")}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {projectT.description}
                </p>

                {projectT.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {projectT.badges.map((badge, badgeIndex) => (
                      <span
                        key={badge}
                        className={cn(
                          "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium",
                          badgeStyles[
                            project.badges[badgeIndex]?.variant ?? "gold"
                          ],
                        )}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
