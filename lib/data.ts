export const profile = {
  name: "Sadibek Nurmukhambet",
  github: "https://github.com/nrHqak",
  githubHandle: "github.com/nrHqak",
};

export const socialLinks = [
  {
    id: "github" as const,
    url: "https://github.com/nrHqak",
    label: "GitHub",
  },
  {
    id: "instagram" as const,
    url: "https://www.instagram.com/sadibeknn?igsh=NnhtOXR4amg4cjhs&utm_source=qr",
    label: "Instagram",
  },
  {
    id: "linkedin" as const,
    url: "https://www.linkedin.com/in/nurmukhambet-sadibek-2386b82a6/",
    label: "LinkedIn",
  },
  {
    id: "leetcode" as const,
    url: "https://leetcode.com/u/nurcoder",
    label: "LeetCode",
  },
];

export const projects = [
  {
    id: "pharma-track",
    year: "2025",
    stack: ["FastAPI", "PostgreSQL", "React", "Telegram Bot"],
    badges: [
      { key: "first", variant: "gold" as const },
      { key: "prize", variant: "gold" as const },
    ],
    featured: false,
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
  },
  {
    id: "algorhythm",
    year: "2025–2026",
    stack: [
      "FastAPI",
      "React",
      "Supabase",
      "Gemini AI",
      "scikit-learn",
      "Docker",
    ],
    badges: [{ key: "first", variant: "gold" as const }],
    featured: true,
    logo: "/images/algorhythm-logo.png",
  },
  {
    id: "hackx",
    year: "2025",
    stack: ["Organizer & Lead"],
    badges: [],
    featured: false,
  },
];

export const awardIcons = [
  "🥇",
  "🥇",
  "🥇",
  "🥇",
  "🥇",
  "🥇",
  "🥈",
  "🥉",
  "🤖",
  "🤖",
  "🏛",
  "…",
];

export const skills = [
  {
    key: "backend" as const,
    items: [
      "Python",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "SQLite",
      "Supabase",
      "SQLAlchemy",
      "Docker",
      "REST",
    ],
  },
  {
    key: "frontend" as const,
    items: [
      "React.js",
      "Next.js",
      "Vite",
      "Tailwind",
      "Bootstrap",
      "Leaflet",
      "Axios",
    ],
  },
  {
    key: "other" as const,
    items: [
      "ML",
      "scikit-learn",
      "AST",
      "Blockchain",
      "Smart Contracts",
      "C++",
      "C# .NET",
      "MicroPython",
      "Arduino",
      "AI Agents",
    ],
  },
];
