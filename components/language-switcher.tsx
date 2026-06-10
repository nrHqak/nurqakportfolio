"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/language-context";
import type { Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

const locales: { id: Locale; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "ru", label: "RU" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-0.5 glass rounded-full p-1 shadow-lg">
        {locales.map((item) => {
          const isActive = locale === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setLocale(item.id)}
              className={cn(
                "relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-colors",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground/80",
              )}
              aria-label={`Switch to ${item.label}`}
              aria-pressed={isActive}
            >
              {isActive && (
                <motion.div
                  layoutId="lang-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
