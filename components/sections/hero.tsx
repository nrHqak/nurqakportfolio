"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, MapPin } from "lucide-react";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { profile } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-0"
    >
      <ShaderAnimation />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-background pointer-events-none" />

      <div className="relative z-10 section-padding w-full max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-muted-foreground"
        >
            <MapPin className="w-3.5 h-3.5 text-primary" />
            {t.profile.location}
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-gradient leading-[1.05]">
            {profile.name}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide uppercase">
            {t.profile.title}
          </p>

          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {t.profile.school}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <a
              href="#projects"
              className="pointer-events-auto relative z-20 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
            >
              {t.hero.viewProjects}
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto relative z-20 inline-flex items-center gap-2 glass rounded-full px-6 py-3 text-sm font-semibold transition-all hover:bg-white/10 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              {profile.githubHandle}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
