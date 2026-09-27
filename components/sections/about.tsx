"use client";

import { motion } from "framer-motion";
import { Binary, BrainCircuit, Code2 } from "lucide-react";
import Image from "next/image";
import { profile } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/language-context";

const highlightIcons = {
  systems: Code2,
  ai: BrainCircuit,
  algorithms: Binary,
} as const;

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            {t.about.label}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">
            {t.about.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-6 lg:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card h-full overflow-hidden"
          >
            <div className="relative aspect-[4/3] max-h-[380px] w-full overflow-hidden bg-white/5">
              <Image
                src="/images/profile.jpg"
                alt={profile.name}
                width={960}
                height={720}
                className="h-full w-full object-cover object-[44%_24%]"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="text-lg font-semibold text-foreground">
                {profile.name}
              </h3>
              <p className="mt-1 mb-4 text-xs text-muted-foreground">
                {t.profile.school}
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                {t.about.personal}
              </p>
            </div>
          </motion.div>

          <div className="grid h-full grid-rows-3 gap-4">
            {t.about.highlights.map((item, index) => {
              const Icon = highlightIcons[item.icon];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="glass-card min-w-0 p-5 md:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5 pl-14">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
