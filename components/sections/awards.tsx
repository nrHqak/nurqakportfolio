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
import { cn } from "@/lib/utils";

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

const spotlightTones = {
  trophy: {
    card: "border-amber-400/20 bg-gradient-to-br from-amber-500/[0.07] to-white/[0.015] hover:border-amber-300/30",
    icon: "text-amber-300",
    value: "text-amber-100",
  },
  bot: {
    card: "border-cyan-400/20 bg-gradient-to-br from-cyan-500/[0.07] to-white/[0.015] hover:border-cyan-300/30",
    icon: "text-cyan-300",
    value: "text-cyan-100",
  },
  code: {
    card: "border-violet-400/20 bg-gradient-to-br from-violet-500/[0.07] to-white/[0.015] hover:border-violet-300/30",
    icon: "text-violet-300",
    value: "text-violet-100",
  },
  leadership: {
    card: "border-emerald-400/20 bg-gradient-to-br from-emerald-500/[0.07] to-white/[0.015] hover:border-emerald-300/30",
    icon: "text-emerald-300",
    value: "text-emerald-100",
  },
} as const;

const categoryTones = {
  cs: {
    line: "bg-violet-300/45",
    icon: "text-violet-300",
    title: "text-violet-200/85",
    dot: "bg-violet-300/55",
    hover: "hover:border-violet-300/25",
  },
  robotics: {
    line: "bg-cyan-300/45",
    icon: "text-cyan-300",
    title: "text-cyan-200/85",
    dot: "bg-cyan-300/55",
    hover: "hover:border-cyan-300/25",
  },
  products: {
    line: "bg-amber-300/45",
    icon: "text-amber-300",
    title: "text-amber-200/85",
    dot: "bg-amber-300/55",
    hover: "hover:border-amber-300/25",
  },
  programs: {
    line: "bg-blue-300/45",
    icon: "text-blue-300",
    title: "text-blue-200/85",
    dot: "bg-blue-300/55",
    hover: "hover:border-blue-300/25",
  },
  leadership: {
    line: "bg-emerald-300/45",
    icon: "text-emerald-300",
    title: "text-emerald-200/85",
    dot: "bg-emerald-300/55",
    hover: "hover:border-emerald-300/25",
  },
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
          {t.awards.spotlights.map((spotlight, index) => {
            const Icon = spotlightIcons[spotlight.icon];
            const tone = spotlightTones[spotlight.icon];

            return (
              <motion.article
                key={`${spotlight.value}-${spotlight.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className={cn(
                  "glass-card min-w-0 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.055]",
                  tone.card,
                )}
              >
                <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  <Icon className={cn("h-4 w-4", tone.icon)} />
                  <span>{spotlight.category}</span>
                </div>
                <p
                  className={cn(
                    "text-3xl font-semibold tracking-tight md:text-4xl",
                    tone.value,
                  )}
                >
                  {spotlight.value}
                </p>
                <h3 className="mt-3 font-medium leading-snug text-foreground">
                  {spotlight.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {spotlight.subtitle}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-5">
          {t.awards.categories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.id];
            const tone = categoryTones[category.id];

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: categoryIndex * 0.05 }}
                className={cn(
                  "glass-card relative overflow-hidden p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.055] md:p-6",
                  tone.hover,
                  category.id === "programs" &&
                    "border-white/15 bg-white/[0.04]",
                )}
              >
              <div
                className={cn(
                  "absolute inset-x-8 top-0 h-px opacity-70",
                  tone.line,
                )}
              />
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5",
                    tone.icon,
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <h3
                  className={cn(
                    "text-sm font-semibold uppercase tracking-[0.12em]",
                    tone.title,
                  )}
                >
                  {category.title}
                </h3>
              </div>
              <div className="mt-2 divide-y divide-white/10">
                {category.items.map((item) => (
                  <div
                    key={`${item.title}-${item.subtitle}`}
                    className="flex gap-3 py-4 first:pt-3 last:pb-1"
                  >
                    {item.mark ? (
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-foreground/80">
                        {item.mark}
                      </span>
                    ) : (
                      <span
                        className={cn(
                          "mt-2 h-2 w-2 shrink-0 rounded-full",
                          tone.dot,
                        )}
                      />
                    )}
                    <div className="min-w-0">
                      <h4 className="font-medium leading-snug text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.subtitle}
                      </p>
                      {item.detail ? (
                        <p className="mt-1 text-sm text-foreground/70">
                          {item.detail}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
