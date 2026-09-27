"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Code2,
  GraduationCap,
  Handshake,
  Trophy,
  Users,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

const spotlightIcons = {
  trophy: Trophy,
  bot: Bot,
  code: Code2,
  leadership: Handshake,
} as const;

const categoryIcons = {
  cs: Code2,
  robotics: Bot,
  products: Trophy,
  programs: GraduationCap,
  leadership: Users,
} as const;

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
              className="glass-card min-w-0 border-white/15 bg-white/[0.045] p-5"
            >
              <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {(() => {
                  const Icon = spotlightIcons[spotlight.icon];
                  return <Icon className="h-4 w-4 text-foreground/70" />;
                })()}
                <span>{spotlight.category}</span>
              </div>
              <p className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                {spotlight.value}
              </p>
              <h3 className="mt-3 font-medium leading-snug text-foreground">
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
              className={`glass-card p-5 md:p-6 ${category.id === "programs" ? "border-white/15 bg-white/[0.04]" : ""}`}
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                {(() => {
                  const Icon = categoryIcons[category.id];
                  return (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                  );
                })()}
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="mt-2 divide-y divide-white/10">
                {category.items.map((item) => (
                  <div key={`${item.title}-${item.subtitle}`} className="flex gap-3 py-4 first:pt-3 last:pb-1">
                    {item.mark ? (
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-foreground/80">
                        {item.mark}
                      </span>
                    ) : (
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/35" />
                    )}
                    <div className="min-w-0">
                      <h4 className="font-medium leading-snug text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.subtitle}
                      </p>
                      {item.detail && (
                        <p className="mt-1 text-sm text-foreground/70">
                          {item.detail}
                        </p>
                      )}
                    </div>
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
