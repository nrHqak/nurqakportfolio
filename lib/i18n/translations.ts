import type { Locale, Translations } from "./types";

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      awards: "Awards",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      viewProjects: "View Projects",
    },
    about: {
      label: "About",
      heading: "Building products that win",
      highlights: [
        {
          title: "Backend-Heavy",
          description: "Python · FastAPI · PostgreSQL",
        },
        {
          title: "Ship Fast",
          description: "3× Hackathon 1st Places",
        },
        {
          title: "Lead Well",
          description: "Prime Minister · HackX Organizer",
        },
      ],
    },
    featured: {
      label: "Featured Project",
    },
    projects: {
      label: "Projects",
      heading: "What I've built",
      items: {
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
        algorhythm: {
          title: "AlgoRythm — Algorithm Learning Platform",
          description:
            "Students paste Python code → step-by-step tracer (sys.settrace) → SVG bar chart animation → AI mentor hints (Socratic style). ML classifier detects algorithm type via AST analysis. XP, streaks, daily quiz, Algorithm Pet for retention.",
          badges: ["🥇 1st place · NIS Project Fest (International)"],
        },
        hackx: {
          title: "HackX — City Hackathon",
          description:
            "Founded and ran a city-level hackathon in Atyrau with support from BIL, NIS, and the Regional Hub. 10+ teams, 50+ participants. Managed partnerships, logistics, and jury from scratch.",
          badges: [],
        },
      },
    },
    awards: {
      label: "Awards",
      heading: "Achievements & recognition",
      items: [
        {
          title: "1st — World Robotics Olympiad (Regional Stage)",
          subtitle: "Future Engineers category · 2026",
        },
        {
          title: "1st — Atyrau Youth Hackathon",
          subtitle: "Pharma Track · 500,000 KZT · 2025",
        },
        {
          title: "1st — NIS Hackathon 2026",
          subtitle: "KomekTez · Quota to Republic stage",
        },
        {
          title: "1st — NIS Project Fest",
          subtitle: "AlgoRythm · International level · 2025",
        },
        {
          title: "1st — School Olympiad, Informatics",
          subtitle: "NIS Atyrau · 2025",
        },
        {
          title: "1st — JasRepublic CUP (Regional)",
          subtitle: "Debate · Respublica · 2024",
        },
        {
          title: "Silver — Owlympia Regional Olympiad",
          subtitle: "2024",
        },
        {
          title: "3rd — NIS Network Olympiad, Informatics",
          subtitle: "Republic level · 2024",
        },
        {
          title: "Robot Design Award Finalist",
          subtitle: "BATYS Robotics & Drones · Quota to Central Asia",
        },
        {
          title: "Adaptive Strategy Award",
          subtitle: "Central Asia FIRST Championship 2026",
        },
        {
          title: "Prime Minister — Student Government",
          subtitle: "NIS Atyrau · 2025–2026 · Attracted 1.2M+ KZT from sponsors",
        },
        {
          title: "Coming soon...",
          subtitle: "New achievements are on the way",
        },
      ],
    },
    skills: {
      label: "Skills",
      heading: "Technical expertise",
      groups: {
        backend: "Backend",
        frontend: "Frontend",
        other: "Other",
      },
      languagesLabel: "Languages",
      spokenLanguages: [
        { name: "Kazakh", level: "Native" },
        { name: "Russian", level: "Fluent" },
        { name: "English", level: "Upper-Intermediate" },
      ],
    },
    contact: {
      label: "Contact",
      heading: "Let's build something together",
      description:
        "Open to collaborations, hackathons, and interesting projects. Reach out via social media or GitHub.",
      cta: "Get in touch",
    },
    footer: {
      builtWith: "Built with Next.js & Framer Motion.",
    },
    profile: {
      title: "Fullstack Developer · Builder · Leader",
      location: "Atyrau, Kazakhstan",
      school: "NIS Atyrau · Grade 10 · 16 y.o.",
      about:
        "Fullstack developer (backend-heavy) specializing in Python. I don't just build products — I win with them. Three hackathon 1st places, two robotics awards, republic-level olympiad medals, and a city hackathon I organized from scratch. I ship fast and lead well.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      projects: "Проекты",
      awards: "Награды",
      skills: "Навыки",
      contact: "Контакты",
    },
    hero: {
      viewProjects: "Смотреть проекты",
    },
    about: {
      label: "Обо мне",
      heading: "Создаю продукты, которые побеждают",
      highlights: [
        {
          title: "Бэкенд-фокус",
          description: "Python · FastAPI · PostgreSQL",
        },
        {
          title: "Быстрые релизы",
          description: "3× 1-е место на хакатонах",
        },
        {
          title: "Лидерство",
          description: "Премьер-министр · Организатор HackX",
        },
      ],
    },
    featured: {
      label: "Избранный проект",
    },
    projects: {
      label: "Проекты",
      heading: "Что я создал",
      items: {
        "pharma-track": {
          title: "Pharma Track — Платформа контроля качества лекарств",
          description:
            "Веб-приложение для граждан и государства: отслеживание качества лекарств и полной истории препаратов. Telegram-бот для мобильного доступа. Разработан и представлен как тимлид.",
          badges: [
            "🥇 1-е место · Молодёжный хакатон Атырау",
            "Приз 500 000 тг",
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
        algorhythm: {
          title: "AlgoRythm — Платформа изучения алгоритмов",
          description:
            "Студенты вставляют Python-код → пошаговый трейсер (sys.settrace) → SVG-анимация столбчатой диаграммы → AI-наставник (сократический стиль). ML-классификатор определяет тип алгоритма через AST. XP, стрики, ежедневная викторина, Algorithm Pet для удержания.",
          badges: ["🥇 1-е место · NIS Project Fest (Международный)"],
        },
        hackx: {
          title: "HackX — Городской хакатон",
          description:
            "Основал и провёл городской хакатон в Атырау при поддержке BIL, НИШ и Регионального хаба. 10+ команд, 50+ участников. Партнёрства, логистика и жюри — с нуля.",
          badges: [],
        },
      },
    },
    awards: {
      label: "Награды",
      heading: "Достижения и признание",
      items: [
        {
          title: "1-е место — World Robotics Olympiad (региональный этап)",
          subtitle: "Категория Future Engineers · 2026",
        },
        {
          title: "1-е место — Молодёжный хакатон Атырау",
          subtitle: "Pharma Track · 500 000 тг · 2025",
        },
        {
          title: "1-е место — Хакатон НИШ 2026",
          subtitle: "KomekTez · Квота на республиканский этап",
        },
        {
          title: "1-е место — NIS Project Fest",
          subtitle: "AlgoRythm · Международный уровень · 2025",
        },
        {
          title: "1-е место — Школьная олимпиада по информатике",
          subtitle: "НИШ Атырау · 2025",
        },
        {
          title: "1-е место — JasRepublic CUP (Региональный)",
          subtitle: "Дебаты · Respublica · 2024",
        },
        {
          title: "Серебро — Региональная олимпиада Owlympia",
          subtitle: "2024",
        },
        {
          title: "3-е место — Сетевая олимпиада НИШ по информатике",
          subtitle: "Республиканский уровень · 2024",
        },
        {
          title: "Финалист Robot Design Award",
          subtitle: "BATYS Robotics & Drones · Квота в Центральную Азию",
        },
        {
          title: "Adaptive Strategy Award",
          subtitle: "Central Asia FIRST Championship 2026",
        },
        {
          title: "Премьер-министр — Студенческое правительство",
          subtitle: "НИШ Атырау · 2025–2026 · Привлек 1.2M+ KZT от спонсоров",
        },
        {
          title: "Скоро...",
          subtitle: "Новые достижения уже в пути",
        },
      ],
    },
    skills: {
      label: "Навыки",
      heading: "Техническая экспертиза",
      groups: {
        backend: "Бэкенд",
        frontend: "Фронтенд",
        other: "Другое",
      },
      languagesLabel: "Языки",
      spokenLanguages: [
        { name: "Казахский", level: "Родной" },
        { name: "Русский", level: "Свободно" },
        { name: "Английский", level: "Upper-Intermediate" },
      ],
    },
    contact: {
      label: "Контакты",
      heading: "Давайте создадим что-то вместе",
      description:
        "Открыт к сотрудничеству, хакатонам и интересным проектам. Свяжитесь через соцсети или GitHub.",
      cta: "Связаться",
    },
    footer: {
      builtWith: "Создано на Next.js и Framer Motion.",
    },
    profile: {
      title: "Fullstack-разработчик · Создатель · Лидер",
      location: "Атырау, Казахстан",
      school: "НИШ Атырау · 10 класс · 16 лет",
      about:
        "Fullstack-разработчик (с упором на бэкенд), специализируюсь на Python. Я не просто создаю продукты — я выигрываю с ними. Три первых места на хакатонах, две награды в робототехнике, медали республиканских олимпиад и городской хакатон, который я организовал с нуля. Быстро выпускаю продукты и умею вести команду.",
    },
  },
};
