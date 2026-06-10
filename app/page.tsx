import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { FeaturedProjectSection } from "@/components/sections/featured-project";
import { ProjectsSection } from "@/components/sections/projects";
import { AwardsSection } from "@/components/sections/awards";
import { SkillsSection } from "@/components/sections/skills";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProjectSection />
      <ProjectsSection />
      <AwardsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
