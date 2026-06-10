"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { projects } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/language-context";

const featured = projects.find((p) => p.featured)!;

export function FeaturedProjectSection() {
  const { t } = useLanguage();
  const projectT = t.projects.items[featured.id];

  return (
    <section id="featured" className="relative overflow-hidden scroll-mt-28">
      <ContainerScroll
        titleComponent={
          <>
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              {t.featured.label}
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-2">
              {projectT.title.split(" — ")[0]}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              {projectT.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {featured.stack.map((tech) => (
                <span
                  key={tech}
                  className="glass rounded-full px-3 py-1 text-xs font-medium text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </>
        }
        >
        <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-br from-[#0d1f1a] via-[#0a0a0a] to-[#0a0a0a] rounded-2xl overflow-hidden p-6 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(161,161,170,0.08),transparent_70%)]" />
          <Image
            src={featured.logo!}
            alt={projectT.title}
            height={720}
            width={1400}
            className="relative z-10 mx-auto max-h-full w-auto object-contain"
            draggable={false}
          />
        </div>
      </ContainerScroll>
    </section>
  );
}
