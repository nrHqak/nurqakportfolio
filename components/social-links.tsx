"use client";

import { Github, Instagram, Linkedin } from "lucide-react";
import { LeetCodeIcon } from "@/components/icons/leetcode-icon";
import { socialLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap = {
  github: Github,
  instagram: Instagram,
  linkedin: Linkedin,
  leetcode: LeetCodeIcon,
} as const;

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-12 w-12",
};

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-5 w-5",
};

export function SocialLinks({
  className,
  iconClassName,
  size = "md",
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.id];

        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={cn(
              "pointer-events-auto relative z-50 inline-flex items-center justify-center rounded-full glass transition-all hover:bg-white/10 hover:scale-105 hover:border-white/20",
              sizeClasses[size],
              iconClassName,
            )}
          >
            <Icon className={iconSizes[size]} />
          </a>
        );
      })}
    </div>
  );
}
