import type { Locale, Translations } from "./types";

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Work",
      awards: "Recognition",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      cta: "Explore my work",
      tagline:
        "I build software systems around algorithms, AI and real-world problems.",
    },
    about: {
      label: "About",
      heading: "Engineering, research & products",
      highlights: [
        {
          title: "Systems & Backend",
          description: "Python · FastAPI · PostgreSQL",
        },
        {
          title: "AI & Machine Learning",
          description: "ML · Neural Networks · LLM Systems",
        },
        {
          title: "Algorithms & Research",
          description: "Execution Tracing · AST · Experimentation",
        },
      ],
    },
    featured: {
      label: "Featured Project",
      coreLabel: "Core",
      stackLabel: "Stack",
      githubLabel: "GitHub ↗",
    },
    projects: {
      label: "Work",
      heading: "Selected work",
      selectedLabel: "Selected Work",
      moreLabel: "More Projects",
      githubLabel: "GitHub ↗",
      items: {
        algorhythm: {
          title: "AlgoRythm — Algorithm Learning Platform",
          description:
            "An interactive platform for understanding algorithms through their actual execution. AlgoRythm traces Python programs at runtime, converts execution states into structured visual steps, and uses program analysis to recognize algorithmic patterns. An AI mentor helps explain what happens during execution instead of simply presenting a solution.",
          researchNote:
            "Current work: research on program behavior using execution traces and source-code structure.",
          badges: ["🥇 1st place · NIS Project Fest (International)"],
        },
        "digital-security": {
          title: "Digital Security / Anti-Fraud System",
          description:
            "A multi-layer anti-fraud system designed to interrupt social-engineering attacks in real time. It combines Android call and notification monitoring, temporary app shielding, a Chromium security extension and automated risk analysis.",
          badges: [],
        },
        "algorhythm-research": {
          title: "AlgoRythm Research",
          eyebrow: "Research · Ongoing",
          description:
            "Exploring how program structure and execution traces can be used to characterize algorithm behavior. The work focuses on runtime traces, source-code structure, reproducible sampling and experimental comparison.",
          badges: [],
        },
        "credit-default": {
          title: "Credit Default Prediction",
          description:
            "Built and tuned a neural-network classifier for credit-default prediction, focusing on imbalanced data, regularization, feature engineering and decision-threshold optimization.",
          badges: [],
        },
        "pharma-track": {
          title: "Pharma Track — Drug Quality & Lifecycle Platform",
          description:
            "Web app helping citizens and government track medication quality and full drug history. Telegram bot for mobile accessibility. Built and presented as team lead.",
          badges: [
            "🥇 1st place · Atyrau Youth Hackathon",
            "500,000 KZT prize",
          ],
        },
        komektez: {
          title: "KomekTez — City Problem & Contractor Management",
          description:
            "MVP civic platform: residents submit geo-tagged issues, admins assign contractors with auto-scoring, contractors close tasks with photo proof. Three roles, SLA dashboard, analytics.",
          badges: [
            "🥇 1st place · NIS Hackathon 2026",
            "Quota to Republic stage",
          ],
        },
      },
    },
    awards: {
      label: "Recognition",
      heading: "Selected recognition",
      spotlights: [
        {
          value: "500,000 ₸",
          title: "Atyrau Youth Hackathon",
          subtitle: "1st Place",
        },
        {
          value: "1st",
          title: "World Robot Olympiad",
          subtitle: "Regional · Future Engineers",
        },
        {
          value: "3rd",
          title: "NIS Network Informatics Olympiad",
          subtitle: "Network / Republic level",
        },
        {
          value: "1.2M+ ₸",
          title: "Sponsorship raised",
          subtitle: "Student Government",
        },
      ],
      categories: [
        {
          title: "Computer Science & AI",
          items: [
            {
              title: "3rd — NIS Network Olympiad, Informatics",
              subtitle: "Republic level · 2024",
            },
            {
              title: "1st — School Olympiad, Informatics",
              subtitle: "NIS Atyrau · 2025",
            },
            {
              title: "1st — NIS Project Fest",
              subtitle: "AlgoRythm · International level · 2025",
            },
          ],
        },
        {
          title: "Robotics & Engineering",
          items: [
            {
              title: "1st — World Robotics Olympiad",
              subtitle: "Regional Stage · Future Engineers · 2026",
            },
            {
              title: "Robot Design Award Finalist",
              subtitle: "BATYS Robotics & Drones · Quota to Central Asia",
            },
            {
              title: "Adaptive Strategy Award",
              subtitle: "Central Asia FIRST Championship 2026",
            },
          ],
        },
        {
          title: "Products & Hackathons",
          items: [
            {
              title: "1st — Atyrau Youth Hackathon",
              subtitle: "Pharma Track · 500,000 ₸ · 2025",
            },
            {
              title: "1st — NIS Hackathon 2026",
              subtitle: "KomekTez · Quota to Republic stage",
            },
          ],
        },
        {
          title: "Programs & Communities",
          items: [
            {
              title: "The Knowledge Society (TKS)",
              subtitle: "Selected Member · 2026–2027",
            },
            {
              title: "Veritas AI Scholars",
              subtitle: "AI Scholars Bootcamp · Summer 2026 · Completed July 24, 2026",
            },
          ],
        },
        {
          title: "Leadership & Initiatives",
          items: [
            {
              title: "HackX",
              subtitle:
                "Founder & Organizer · City-level hackathon in Atyrau · 10+ teams · 50+ participants",
            },
            {
              title: "Prime Minister — Student Government",
              subtitle:
                "NIS Atyrau · 2025–2026 · 1.2M+ KZT raised from sponsors",
            },
            {
              title: "1st — JasRepublic CUP",
              subtitle: "Regional debate · Respublica · 2024",
            },
          ],
        },
      ],
    },
    skills: {
      label: "Skills",
      heading: "Technical expertise",
      groups: {
        languages: "Languages",
        backend: "Backend & Systems",
        ai: "AI & Machine Learning",
        algorithms: "Algorithms & Research",
      },
      languagesLabel: "Spoken languages",
      spokenLanguages: [
        { name: "Kazakh", level: "Native" },
        { name: "Russian", level: "Fluent" },
        { name: "English", level: "Upper-Intermediate" },
      ],
    },
    contact: {
      label: "Contact",
      heading: "Let's connect.",
      description:
        "Open to technical collaborations, research, software projects and interesting engineering problems.",
      cta: "Get in touch",
    },
    footer: {
      builtWith: "Built with Next.js & Framer Motion.",
    },
    profile: {
      title: "Software Engineer · AI/ML · Backend",
      location: "Atyrau, Kazakhstan",
      school: "NIS Atyrau · Class of 2028",
      about:
        "My main focus is Python, backend systems, AI/ML and algorithms. I enjoy going beyond interfaces and understanding how systems work underneath — from execution tracing and AST analysis to machine-learning models, APIs and product architecture.\n\nI use projects to explore technical ideas and turn them into working systems: from algorithm visualization and program analysis to machine learning and digital-security tools.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      projects: "Работы",
      awards: "Достижения",
      skills: "Навыки",
      contact: "Контакты",
    },
    hero: {
      cta: "Смотреть работы",
      tagline:
        "Создаю программные системы на стыке алгоритмов, AI и реальных задач.",
    },
    about: {
      label: "Обо мне",
      heading: "Инженерия, исследования и продукты",
      highlights: [
        {
          title: "Systems & Backend",
          description: "Python · FastAPI · PostgreSQL",
        },
        {
          title: "AI & Machine Learning",
          description: "ML · Neural Networks · LLM Systems",
        },
        {
          title: "Algorithms & Research",
          description: "Execution Tracing · AST · Experimentation",
        },
      ],
    },
    featured: {
      label: "Избранный проект",
      coreLabel: "Основа",
      stackLabel: "Стек",
      githubLabel: "GitHub ↗",
    },
    projects: {
      label: "Работы",
      heading: "Избранные работы",
      selectedLabel: "Избранные работы",
      moreLabel: "Другие проекты",
      githubLabel: "GitHub ↗",
      items: {
        algorhythm: {
          title: "AlgoRythm — Платформа изучения алгоритмов",
          description:
            "Интерактивная платформа для изучения алгоритмов через их реальное выполнение. AlgoRythm отслеживает выполнение Python-программ, преобразует состояния программы в структурированные пошаговые визуализации и использует анализ кода для определения алгоритмических паттернов. AI-наставник помогает понять происходящее во время выполнения программы, а не просто показывает готовое решение.",
          researchNote:
            "Текущая работа: исследование поведения программ через execution traces и структуру исходного кода.",
          badges: ["🥇 1-е место · NIS Project Fest (Международный)"],
        },
        "digital-security": {
          title: "Digital Security / Anti-Fraud System",
          description:
            "Многоуровневая anti-fraud система для прерывания атак социальной инженерии в реальном времени. Объединяет анализ звонков и уведомлений на Android, временную блокировку приложений, Chromium-расширение и автоматическую оценку риска.",
          badges: [],
        },
        "algorhythm-research": {
          title: "AlgoRythm Research",
          eyebrow: "Исследование · В работе",
          description:
            "Исследование того, как структура исходного кода и execution traces могут использоваться для анализа поведения алгоритмов. Работа включает runtime traces, анализ структуры программ, воспроизводимый sampling и экспериментальное сравнение.",
          badges: [],
        },
        "credit-default": {
          title: "Credit Default Prediction",
          description:
            "Разработал и настроил нейросетевой классификатор для прогнозирования кредитного дефолта с фокусом на дисбаланс классов, регуляризацию, feature engineering и оптимизацию decision threshold.",
          badges: [],
        },
        "pharma-track": {
          title: "Pharma Track — Платформа контроля качества лекарств",
          description:
            "Веб-приложение для граждан и государства: отслеживание качества лекарств и полной истории препаратов. Telegram-бот для мобильного доступа. Разработан и представлен как тимлид.",
          badges: [
            "🥇 1-е место · Молодёжный хакатон Атырау",
            "Приз 500 000 ₸",
          ],
        },
        komektez: {
          title: "KomekTez — Управление городскими проблемами",
          description:
            "MVP гражданской платформы: жители отправляют геометки проблем, админы назначают подрядчиков с авто-скорингом, подрядчики закрывают задачи с фотоотчётом. Три роли, SLA-дашборд, аналитика.",
          badges: [
            "🥇 1-е место · Хакатон НИШ 2026",
            "Квота на республиканский этап",
          ],
        },
      },
    },
    awards: {
      label: "Достижения",
      heading: "Избранные достижения",
      spotlights: [
        {
          value: "500 000 ₸",
          title: "Молодёжный хакатон Атырау",
          subtitle: "1-е место",
        },
        {
          value: "1-е",
          title: "World Robot Olympiad",
          subtitle: "Региональный этап · Future Engineers",
        },
        {
          value: "3-е",
          title: "Сетевая олимпиада НИШ по информатике",
          subtitle: "Республиканский уровень",
        },
        {
          value: "1.2M+ ₸",
          title: "Привлечено спонсорских средств",
          subtitle: "Студенческое правительство",
        },
      ],
      categories: [
        {
          title: "Computer Science & AI",
          items: [
            {
              title: "3-е место — Сетевая олимпиада НИШ по информатике",
              subtitle: "Республиканский уровень · 2024",
            },
            {
              title: "1-е место — Школьная олимпиада по информатике",
              subtitle: "НИШ Атырау · 2025",
            },
            {
              title: "1-е место — NIS Project Fest",
              subtitle: "AlgoRythm · Международный уровень · 2025",
            },
          ],
        },
        {
          title: "Робототехника и инженерия",
          items: [
            {
              title: "1-е место — World Robotics Olympiad",
              subtitle: "Региональный этап · Future Engineers · 2026",
            },
            {
              title: "Финалист Robot Design Award",
              subtitle: "BATYS Robotics & Drones · Квота в Центральную Азию",
            },
            {
              title: "Adaptive Strategy Award",
              subtitle: "Central Asia FIRST Championship 2026",
            },
          ],
        },
        {
          title: "Продукты и хакатоны",
          items: [
            {
              title: "1-е место — Молодёжный хакатон Атырау",
              subtitle: "Pharma Track · 500 000 ₸ · 2025",
            },
            {
              title: "1-е место — Хакатон НИШ 2026",
              subtitle: "KomekTez · Квота на республиканский этап",
            },
          ],
        },
        {
          title: "Программы и сообщества",
          items: [
            {
              title: "The Knowledge Society (TKS)",
              subtitle: "Отобран в программу · 2026–2027",
            },
            {
              title: "Veritas AI Scholars",
              subtitle:
                "AI Scholars Bootcamp · Summer 2026 · Завершено 24 июля 2026",
            },
          ],
        },
        {
          title: "Лидерство и инициативы",
          items: [
            {
              title: "HackX",
              subtitle:
                "Основатель и организатор · Городской хакатон в Атырау · 10+ команд · 50+ участников",
            },
            {
              title: "Премьер-министр — Студенческое правительство",
              subtitle:
                "НИШ Атырау · 2025–2026 · 1.2M+ KZT привлечено от спонсоров",
            },
            {
              title: "1-е место — JasRepublic CUP",
              subtitle: "Региональные дебаты · Respublica · 2024",
            },
          ],
        },
      ],
    },
    skills: {
      label: "Навыки",
      heading: "Техническая экспертиза",
      groups: {
        languages: "Языки программирования",
        backend: "Backend и системы",
        ai: "AI и Machine Learning",
        algorithms: "Алгоритмы и исследования",
      },
      languagesLabel: "Разговорные языки",
      spokenLanguages: [
        { name: "Казахский", level: "Родной" },
        { name: "Русский", level: "Свободно" },
        { name: "Английский", level: "Upper-Intermediate" },
      ],
    },
    contact: {
      label: "Контакты",
      heading: "Будем на связи.",
      description:
        "Открыт к техническим коллаборациям, исследованиям, software-проектам и интересным инженерным задачам.",
      cta: "Связаться",
    },
    footer: {
      builtWith: "Создано на Next.js и Framer Motion.",
    },
    profile: {
      title: "Software Engineer · AI/ML · Backend",
      location: "Атырау, Казахстан",
      school: "НИШ Атырау · Выпуск 2028",
      about:
        "Мой основной фокус — Python, backend-системы, AI/ML и алгоритмы. Мне интересно не только собирать интерфейсы, но и разбираться в том, как системы работают изнутри — от execution tracing и AST-анализа до ML-моделей, API и архитектуры продукта.\n\nЯ использую проекты как способ исследовать технические идеи и превращать их в работающие системы: от визуализации алгоритмов и анализа программ до машинного обучения и инструментов цифровой безопасности.",
    },
  },
};
