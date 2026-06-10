"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/language-context";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative z-30 section-padding pb-32 sm:pb-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative z-30 pointer-events-auto glass-card p-8 md:p-12 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            {t.contact.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            {t.contact.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              {t.profile.location}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap className="w-4 h-4 text-primary" />
              {t.profile.school}
            </div>
          </div>

          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
            {t.contact.cta}
          </p>
          <SocialLinks size="lg" className="relative z-50 pointer-events-auto" />
        </motion.div>

        <footer className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. {t.footer.builtWith}
          </p>
        </footer>
      </div>
    </section>
  );
}
