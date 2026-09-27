"use client";

import { motion } from "framer-motion";
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.awards.spotlights.map((spotlight, index) => (
            <motion.article
              key={`${spotlight.value}-${spotlight.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="glass-card p-5 min-w-0"
            >
              <p className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                {spotlight.value}
              </p>
              <h3 className="mt-4 font-medium leading-snug text-foreground">
                {spotlight.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {spotlight.subtitle}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-5">
          {t.awards.categories.map((category, categoryIndex) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: categoryIndex * 0.05 }}
              className="glass-card p-5 md:p-6"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {category.title}
              </h3>
              <div className="mt-5 divide-y divide-white/10">
                {category.items.map((item) => (
                  <div key={`${item.title}-${item.subtitle}`} className="py-4 first:pt-0 last:pb-0">
                    <h4 className="font-medium leading-snug text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
