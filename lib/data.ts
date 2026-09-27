export const profile = {
  name: "Nurmukhambet Sadibek",
};

export const socialLinks = [
  {
    id: "github" as const,
    url: "https://github.com/nrHqak",
    label: "GitHub",
    showInHero: true,
  },
  {
    id: "instagram" as const,
    url: "https://www.instagram.com/sadibeknn/",
    label: "Instagram",
    showInHero: true,
  },
  {
    id: "linkedin" as const,
    url: "https://www.linkedin.com/in/nurmukhambet-sadibek-2386b82a6/",
    label: "LinkedIn",
    showInHero: true,
  },
  {
    id: "leetcode" as const,
    url: "https://leetcode.com/u/nurcoder",
    label: "LeetCode",
    showInHero: true,
  },
];

export type SocialLinkId = (typeof socialLinks)[number]["id"];

export interface Project {
  id: string;
  year: string;
  stack: string[];
  core?: string[];
  badges: Array<{
    key: string;
    variant: "gold" | "blue";
  }>;
  featured: boolean;
  group?: "selected" | "more";
  logo?: string;
  links?: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: "algorhythm",
    year: "2025–2026",
    core: [
      "Python Runtime Tracing",
      "AST Analysis",
      "Program Analysis",
      "Algorithm Visualization",
      "AI Tutor",
    ],
    stack: ["FastAPI", "React", "Supabase", "scikit-learn", "Docker"],
    badges: [{ key: "first", variant: "gold" as const }],
    featured: true,
    logo: "/images/algorhythm-logo.png",
    links: {
      github: "https://github.com/nrHqak/AlgoRythm",
    },
  },
  {
    id: "digital-security",
    year: "2026",
    stack: [
      "Android",
      "Kotlin",
      "Call Screening",
      "Notification Listener",
      "Chromium Extension",
      "Risk Analysis",
    ],
    badges: [],
    featured: false,
    group: "selected",
  },
  {
    id: "algorhythm-research",
    year: "2026",
    stack: [
      "Python",
      "AST",
      "Execution Traces",
      "Program Analysis",
      "Dataset Design",
      "Experiments",
    ],
    badges: [],
    featured: false,
    group: "selected",
  },
  {
    id: "credit-default",
    year: "2026",
    stack: [
      "Python",
      "Neural Networks",
      "scikit-learn",
      "Feature Engineering",
      "Model Evaluation",
    ],
    badges: [],
    featured: false,
    group: "selected",
  },
  {
    id: "pharma-track",
    year: "2025",
    stack: ["FastAPI", "PostgreSQL", "React", "Telegram Bot"],
    badges: [
      { key: "first", variant: "gold" as const },
      { key: "prize", variant: "gold" as const },
    ],
    featured: false,
    group: "more",
  },
  {
    id: "komektez",
    year: "2026",
    stack: ["FastAPI", "SQLAlchemy", "React", "Tailwind", "Leaflet", "SQLite"],
    badges: [
      { key: "first", variant: "gold" as const },
      { key: "quota", variant: "blue" as const },
    ],
    featured: false,
    group: "more",
    links: {
      github: "https://github.com/nrHqak/komektez",
    },
  },
];

export const skills = [
  {
    key: "languages" as const,
    items: ["Python", "C++", "JavaScript", "TypeScript", "SQL", "Kotlin"],
  },
  {
    key: "backend" as const,
    items: [
      "FastAPI",
      "Django",
      "PostgreSQL",
      "SQLite",
      "Supabase",
      "SQLAlchemy",
      "REST APIs",
      "Docker",
    ],
  },
  {
    key: "ai" as const,
    items: [
      "scikit-learn",
      "Neural Networks",
      "Classification",
      "Feature Engineering",
      "Class Imbalance",
      "Model Evaluation",
      "Threshold Optimization",
      "LLM APIs",
      "AI Agents",
    ],
  },
  {
    key: "frontend" as const,
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Vite",
      "Leaflet",
      "Chromium Extensions",
    ],
  },
  {
    key: "systems" as const,
    items: [
      "Data Structures & Algorithms",
      "AST",
      "Execution Tracing",
      "Program Analysis",
      "Android",
      "Call Screening",
      "Notification Listener",
      "Arduino",
      "MicroPython",
    ],
  },
];

export const workflowTools = ["Git", "GitHub", "Vercel", "Android Studio"];
