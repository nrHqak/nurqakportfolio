export type Locale = "en" | "ru";

export interface ProjectTranslation {
  title: string;
  description: string;
  badges: string[];
}

export interface AwardTranslation {
  title: string;
  subtitle: string;
}

export interface HighlightTranslation {
  title: string;
  description: string;
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
    viewProjects: string;
  };
  about: {
    label: string;
    heading: string;
    highlights: HighlightTranslation[];
  };
  featured: {
    label: string;
  };
  projects: {
    label: string;
    heading: string;
    items: Record<string, ProjectTranslation>;
  };
  awards: {
    label: string;
    heading: string;
    items: AwardTranslation[];
  };
  skills: {
    label: string;
    heading: string;
    groups: {
      backend: string;
      frontend: string;
      other: string;
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
