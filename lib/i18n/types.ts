export type Locale = "en" | "ru";

export interface ProjectTranslation {
  title: string;
  description: string;
  badges: string[];
  eyebrow?: string;
  researchNote?: string;
}

export interface HighlightTranslation {
  title: string;
  description: string;
}

export interface RecognitionItemTranslation {
  title: string;
  subtitle: string;
}

export interface RecognitionCategoryTranslation {
  title: string;
  items: RecognitionItemTranslation[];
}

export interface RecognitionSpotlightTranslation {
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
      ai: string;
      algorithms: string;
    };
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
    about: string;
  };
}
