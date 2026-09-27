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
      personal:
        "I'm Sadibek. I like breaking complex systems down, understanding why they work the way they do, and turning ideas into real products and experiments.\n\nI enjoy environments where I have to learn fast and test myself in practice — software engineering, research, robotics, hackathons and independent projects.",
      highlights: [
        {
          icon: "systems",
          title: "Systems & Backend",
          description:
            "I usually think about products from the system and data-flow level first. I have built APIs, backend services and integrations with FastAPI, PostgreSQL, Supabase and SQLAlchemy, connecting them to web, mobile and browser-extension clients.",
          tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker"],
        },
        {
          icon: "ai",
          title: "AI & Machine Learning",
          description:
            "My ML work includes classification problems, neural networks, feature engineering, handling imbalanced data, model evaluation and threshold tuning. I also integrate LLMs into products when they solve a concrete interaction or reasoning problem.",
          tags: [
            "scikit-learn",
            "Neural Networks",
            "Feature Engineering",
            "Model Evaluation",
            "LLM APIs",
          ],
        },
        {
          icon: "algorithms",
          title: "Algorithms & Research",
          description:
            "AlgoRythm led me deeper into program analysis: runtime execution tracing, AST parsing and algorithm behaviour. I am now extending that work through an independent pilot research project built around reproducible experiments and program traces.",
          tags: [
            "DSA",
            "AST",
            "Execution Tracing",
            "Program Analysis",
            "Experimental Design",
          ],
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
          title: "Qorqau Ecosystem",
          eyebrow: "Digital Security · Anti-Fraud",
          description:
            "A digital-security ecosystem built to interrupt social-engineering attacks before a victim is pushed into a high-risk action. The system combines Android call and notification analysis, temporary app shielding, phone-risk checks, a Chromium security extension and an AI-assisted security flow.",
          badges: [],
        },
        "algorhythm-research": {
          title: "AlgoRythm Research",
          eyebrow: "Independent Research · Pilot Study",
          description:
            "A pilot independent scientific research project extending AlgoRythm beyond product development. The research studies whether source-code structure and execution traces can be used to characterize algorithm behaviour through a reproducible experimental pipeline.",
          context:
            "Focus: sampling protocol · dataset construction · runtime traces · controlled experiments",
          badges: [],
        },
        "credit-default": {
          title: "Credit Card Default Prediction",
          eyebrow: "Veritas AI Scholars · Final Project",
          description:
            "Final machine-learning project completed and successfully defended during the Veritas AI Scholars program. We developed and tuned a neural-network classifier for credit-card default prediction, working with class imbalance, regularization, feature engineering, model evaluation and decision-threshold optimization.",
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
          icon: "trophy",
          category: "Hackathon",
          value: "500,000 ₸",
          title: "Atyrau Youth Hackathon",
          subtitle: "1st Place · 2025",
        },
        {
          icon: "bot",
          category: "Robotics",
          value: "1st",
          title: "World Robot Olympiad",
          subtitle: "Regional · Future Engineers · 2026",
        },
        {
          icon: "code",
          category: "Computer Science",
          value: "3rd",
          title: "NIS Network Informatics Olympiad",
          subtitle: "Network / Republic level · 2024",
        },
        {
          icon: "leadership",
          category: "Leadership",
          value: "1.2M+ ₸",
          title: "Sponsorship raised",
          subtitle: "Student Government",
        },
      ],
      categories: [
        {
          id: "cs",
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
          id: "robotics",
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
          id: "products",
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
          id: "programs",
          title: "Programs & Communities",
          items: [
            {
              title: "The Knowledge Society (TKS)",
              subtitle: "Selected Member · 2026–2027",
              mark: "TKS",
            },
            {
              title: "Veritas AI Scholars",
              subtitle: "AI Scholars Bootcamp · Summer 2026",
              detail: "Completed July 24, 2026",
              mark: "V",
            },
          ],
        },
        {
          id: "leadership",
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
        backend: "Backend & Data",
        frontend: "Frontend & Web",
        ai: "AI & Machine Learning",
        systems: "Systems, Algorithms & Hardware",
      },
      toolsLabel: "Tools & Workflow",
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
      personal:
        "Я Садыбек. Мне нравится разбирать сложные системы, понимать, почему они работают именно так, а затем превращать идеи в реальные продукты и эксперименты.\n\nМне близка среда, где нужно быстро учиться и проверять себя на практике — программирование, исследования, робототехника, хакатоны и работа над собственными проектами.",
      highlights: [
        {
          icon: "systems",
          title: "Systems & Backend",
          description:
            "Обычно я начинаю думать о продукте с архитектуры системы и потоков данных. Я создавал API, backend-сервисы и интеграции на FastAPI, PostgreSQL, Supabase и SQLAlchemy, связывая их с web-, mobile- и browser-extension клиентами.",
          tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker"],
        },
        {
          icon: "ai",
          title: "AI & Machine Learning",
          description:
            "В ML я работал с задачами классификации, нейронными сетями, feature engineering, дисбалансом классов, оценкой моделей и threshold tuning. Также интегрирую LLM в продукты, когда они решают конкретную задачу взаимодействия или анализа.",
          tags: [
            "scikit-learn",
            "Neural Networks",
            "Feature Engineering",
            "Model Evaluation",
            "LLM APIs",
          ],
        },
        {
          icon: "algorithms",
          title: "Algorithms & Research",
          description:
            "Работа над AlgoRythm привела меня глубже в program analysis: runtime execution tracing, AST-анализ и поведение алгоритмов. Сейчас я развиваю это направление через пилотное независимое научное исследование с воспроизводимыми экспериментами и execution traces.",
          tags: [
            "DSA",
            "AST",
            "Execution Tracing",
            "Program Analysis",
            "Experimental Design",
          ],
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
          title: "Qorqau Ecosystem",
          eyebrow: "Digital Security · Anti-Fraud",
          description:
            "Экосистема цифровой безопасности, созданная для прерывания атак социальной инженерии до того, как пользователь совершит рискованное действие. Система объединяет анализ звонков и уведомлений на Android, временную блокировку приложений, проверку риска номера, Chromium-расширение и AI-assisted security flow.",
          badges: [],
        },
        "algorhythm-research": {
          title: "AlgoRythm Research",
          eyebrow: "Независимое исследование · Pilot Study",
          description:
            "Пилотное независимое научное исследование, развивающее AlgoRythm уже за пределами продуктовой разработки. Исследование проверяет, можно ли использовать структуру исходного кода и execution traces для характеристики поведения алгоритмов через воспроизводимый экспериментальный pipeline.",
          context:
            "Фокус: sampling protocol · построение dataset · runtime traces · контролируемые эксперименты",
          badges: [],
        },
        "credit-default": {
          title: "Credit Card Default Prediction",
          eyebrow: "Veritas AI Scholars · Final Project",
          description:
            "Финальный ML-проект, выполненный и успешно защищённый в рамках программы Veritas AI Scholars. Мы разработали и настроили нейросетевой классификатор для прогнозирования дефолта по кредитным картам, работая с дисбалансом классов, регуляризацией, feature engineering, оценкой модели и оптимизацией decision threshold.",
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
          icon: "trophy",
          category: "Хакатон",
          value: "500 000 ₸",
          title: "Молодёжный хакатон Атырау",
          subtitle: "1-е место · 2025",
        },
        {
          icon: "bot",
          category: "Робототехника",
          value: "1-е",
          title: "World Robot Olympiad",
          subtitle: "Региональный этап · Future Engineers · 2026",
        },
        {
          icon: "code",
          category: "Информатика",
          value: "3-е",
          title: "Сетевая олимпиада НИШ по информатике",
          subtitle: "Республиканский уровень · 2024",
        },
        {
          icon: "leadership",
          category: "Лидерство",
          value: "1.2M+ ₸",
          title: "Привлечено спонсорских средств",
          subtitle: "Студенческое правительство",
        },
      ],
      categories: [
        {
          id: "cs",
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
          id: "robotics",
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
          id: "products",
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
          id: "programs",
          title: "Программы и сообщества",
          items: [
            {
              title: "The Knowledge Society (TKS)",
              subtitle: "Отобран в программу · 2026–2027",
              mark: "TKS",
            },
            {
              title: "Veritas AI Scholars",
              subtitle: "AI Scholars Bootcamp · Summer 2026",
              detail: "Завершено 24 июля 2026",
              mark: "V",
            },
          ],
        },
        {
          id: "leadership",
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
        backend: "Backend и данные",
        frontend: "Frontend и веб",
        ai: "AI и Machine Learning",
        systems: "Системы, алгоритмы и hardware",
      },
      toolsLabel: "Инструменты и процесс",
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
    },
  },
};
