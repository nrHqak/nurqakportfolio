"use client";

import { motion } from "framer-motion";
import { skills, workflowTools } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/language-context";

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            {t.skills.label}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {t.skills.heading}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-5 mb-5">
          {skills.map((group, index) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-5 md:p-6 ${
                group.key === "languages" || group.key === "backend" || group.key === "ai"
                  ? "lg:col-span-2"
                  : "lg:col-span-3"
              }`}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {t.skills.groups[group.key]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:bg-primary/10 hover:border-primary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="glass-card mb-5 flex flex-wrap items-center gap-x-5 gap-y-3 px-5 py-4"
        >
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t.skills.toolsLabel}
          </h3>
          {workflowTools.map((tool) => (
            <span key={tool} className="text-sm text-foreground/85">
              {tool}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="glass-card px-5 py-4"
        >
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {t.skills.languagesLabel}
          </h3>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {t.skills.spokenLanguages.map((lang) => (
              <span
                key={lang.name}
                className="text-sm"
              >
                <span className="font-medium text-foreground">{lang.name}</span>
                <span className="text-muted-foreground"> — {lang.level}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
