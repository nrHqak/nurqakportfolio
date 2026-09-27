"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { projects } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/language-context";

const featured = projects.find((project) => project.featured)!;

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
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
              {projectT.description}
            </p>
            {projectT.researchNote && (
              <p className="text-sm text-foreground/60 mt-3 max-w-2xl mx-auto">
                {projectT.researchNote}
              </p>
            )}

            <div className="mt-6 space-y-3">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="mr-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  {t.featured.coreLabel}
                </span>
                {featured.core?.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="mr-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {t.featured.stackLabel}
                </span>
                {featured.stack.map((tech) => (
                  <span
                    key={tech}
                    className="glass rounded-full px-3 py-1 text-xs font-medium text-foreground/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {featured.links?.github && (
              <a
                href={featured.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.featured.githubLabel}
              </a>
            )}
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
