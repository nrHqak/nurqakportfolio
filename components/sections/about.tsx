"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users } from "lucide-react";
import Image from "next/image";
import { profile } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/language-context";

const highlightIcons = [Code2, Rocket, Users];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] h-full"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-6 md:p-8 h-full flex flex-col justify-between gap-6"
            >
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.profile.about}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 min-h-[18rem] md:min-h-[22rem] h-full"
            >
              <Image
                src="/images/profile.jpg"
                alt={profile.name}
                width={960}
                height={720}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>

          <div className="grid gap-4 h-full">
            {t.about.highlights.map((item, index) => {
              const Icon = highlightIcons[index];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="glass-card p-5 md:p-6 flex items-start gap-4 h-full"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {item.description}
                    </p>
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
