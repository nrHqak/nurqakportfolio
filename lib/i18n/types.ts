export type Locale = "en" | "ru";

export interface ProjectTranslation {
  title: string;
  description: string;
  badges: string[];
  eyebrow?: string;
  researchNote?: string;
  context?: string;
}

export interface HighlightTranslation {
  icon: "systems" | "ai" | "algorithms";
  title: string;
  description: string;
  tags: string[];
}

export interface RecognitionItemTranslation {
  title: string;
  subtitle: string;
  detail?: string;
  mark?: string;
}

export interface RecognitionCategoryTranslation {
  id: "cs" | "robotics" | "products" | "programs" | "leadership";
  title: string;
  items: RecognitionItemTranslation[];
}

export interface RecognitionSpotlightTranslation {
  icon: "trophy" | "bot" | "code" | "leadership";
  category: string;
  value: string;
  title: string;
  subtitle: string;
}

export interface SpokenLanguageTranslation {
  name: string;
  level: string;
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    awards: string;
    skills: string;
    contact: string;
  };
  hero: {
    cta: string;
    tagline: string;
  };
  about: {
    label: string;
    heading: string;
    personal: string;
    highlights: HighlightTranslation[];
  };
  featured: {
    label: string;
    coreLabel: string;
    stackLabel: string;
    githubLabel: string;
  };
  projects: {
    label: string;
    heading: string;
    selectedLabel: string;
    moreLabel: string;
    githubLabel: string;
    items: Record<string, ProjectTranslation>;
  };
  awards: {
    label: string;
    heading: string;
    spotlights: RecognitionSpotlightTranslation[];
    categories: RecognitionCategoryTranslation[];
  };
  skills: {
    label: string;
    heading: string;
    groups: {
      languages: string;
      backend: string;
      frontend: string;
      ai: string;
      systems: string;
    };
    toolsLabel: string;
    languagesLabel: string;
    spokenLanguages: SpokenLanguageTranslation[];
  };
  contact: {
    label: string;
    heading: string;
    description: string;
    cta: string;
  };
  footer: {
    builtWith: string;
  };
  profile: {
    title: string;
    location: string;
    school: string;
  };
}
