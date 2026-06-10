"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
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

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {skills.map((group, index) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6"
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
          className="glass-card p-6"
        >
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {t.skills.languagesLabel}
          </h3>
          <div className="flex flex-wrap gap-3">
            {t.skills.spokenLanguages.map((lang) => (
              <span
                key={lang.name}
                className="glass rounded-full px-4 py-2 text-sm"
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
