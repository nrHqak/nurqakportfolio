"use client";

import { motion } from "framer-motion";
import { awardIcons } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/language-context";

export function AwardsSection() {
  const { t } = useLanguage();

  return (
    <section id="awards" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            {t.awards.label}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {t.awards.heading}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {t.awards.items.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card p-5 flex items-start gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg">
                {awardIcons[index]}
              </div>
              <div>
                <h3 className="font-medium text-foreground leading-snug">
                  {award.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {award.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
