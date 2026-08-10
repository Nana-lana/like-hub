/**
 * ┌─────────────────────────────────────────────────────────────────────┐
 * │  ЯК РЕДАГУВАТИ ЦЕЙ ФАЙЛ                                                │
 * │                                                                       │
 * │  Це єдине місце, де зберігаються всі розділи та посилання довідника.  │
 * │  Щоб додати посилання — знайдіть потрібний розділ (section) і         │
 * │  замініть url: "#" на своє посилання (або додайте новий обʼєкт):      │
 * │                                                                       │
 * │    {                                                                  │
 * │      title: "Назва посилання",                                        │
 * │      description: "Короткий опис (необовʼязково)",                    │
 * │      url: "https://...",   // вставте своє посилання                  │
 * │      tag: "Google Drive",  // необовʼязкова мітка                     │
 * │    }                                                                  │
 * │                                                                       │
 * │  Щоб прибрати посилання — просто видаліть відповідний обʼєкт.         │
 * └─────────────────────────────────────────────────────────────────────┘
 */

export type DirectoryLink = {
  title: string
  description?: string
  url: string
  tag?: string
}

export type DirectorySection = {
  id: string
  title: string
  description: string
  /** Ключ іконки з lucide-react (див. components/section-card.tsx) */
  icon:
    | "documents"
    | "analytics"
    | "structure"
    | "pos"
    | "links"
    | "reports"
    | "payments"
    | "database"
    | "process"
    | "booking"
    | "repair"
  /** Колірний акцент розділу */
  accent: "green" | "purple" | "teal" | "amber" | "pink" | "blue" | "lime" | "violet"
  links: DirectoryLink[]
}

export const directory: DirectorySection[] = [
  {
    id: "documents",
    title: "Документи",
    description: "Шаблони договорів, бланки та інші документи на Google Диску.",
    icon: "documents",
    accent: "green",
    links: [
      { 
        title: "Таблиця оренди", 
        description: "зведена адреси, вартості, термін дії", 
        url: "https://drive.google.com/drive/folders/1jUgVc2NvwF_rE4glyFjlo-jZEB1RAfD5?usp=drive_link", 
        tag: "Google Drive" 
      },
      { 
        title: "Документи майстрів", 
        description: "документи та договори оренди з майстрами", 
        url: "https://drive.google.com/drive/folders/1myvZDZIz0FT6ufRDV00HGUF9f_UNlEI5?usp=sharing", 
        tag: "Google Drive" 
      },
      { 
        title: "ФОП Мокляк А.Ю.", 
        description: "установчі по ФОП", 
        url: "https://drive.google.com/drive/folders/1UQS73cLGyuigKAY6Q2Z2Ig6PQ1tKHJKA?usp=drive_link", 
        tag: "Google Drive" 
      },
      { 
        title: "Затоплення А2", 
        description: "", 
        url: "https://drive.google.com/drive/folders/1vmvfnRsDvQz-T0YaQTgMbymgTpdSknsJ?usp=drive_link", 
        tag: "Google Drive" 
      },
      { 
        title: "гугл форми", 
        description: "для майстрів та клієнтів", 
        url: "https://drive.google.com/drive/folders/1fcQDBz06bBGBdGnao6vLrel8BKAKv4ch?usp=drive_link", 
        tag: "Google Forms" 
      },
      { 
        title: "інвентаризація", 
        description: "остання 2026", 
        url: "https://drive.google.com/drive/folders/1xt4Qa7fkLbarXcI_KD4kwpIxorb0V4d1?usp=drive_link", 
        tag: "Google Sheets" 
      },
      { 
        title: "паролі", 
        description: "остання 2026", 
        url: "https://drive.google.com/drive/folders/1jNNUatyG4Rbmdozju-I6iNxGJEhreK6z?usp=drive_link", 
        tag: "Secure" 
      },
      { 
        title: "старший перукар", 
        description: "", 
        url: "https://drive.google.com/drive/folders/1ZMPCElRbuIhnWNsGwUjsSnfaTJAvTav2?usp=drive_link", 
        tag: "Google Drive" 
      },
      { 
        title: "перевірка лайк", 
        description: "камери та чек лист", 
        url: "https://drive.google.com/drive/folders/1SAJCg0lWdpWcMN50XJRtVl91CMkutKuT?usp=drive_link", 
        tag: "Checklist" 
      },
      { 
        title: "Шаблони документів", 
        description: "для друку", 
        url: "https://drive.google.com/drive/folders/1UXuf91q9s56q7AIRXhG-R7wosRYWEFk0?usp=drive_link", 
        tag: "Google Docs" 
      },
    ],
  },
  {
    id: "analytics",
    title: "Аналітика",
    description: "Дашборди й показники ефективності мережі.",
    icon: "analytics",
    accent: "purple",
    links: [
      { title: "Загальний дашборд", description: "Ключові показники по мережі", url: "#", tag: "Дашборд" },
      { title: "Аналітика по точках", description: "Порівняння перукарень", url: "#", tag: "Google Sheets" },
    ],
  },
  {
    id: "structure",
    title: "Оргструктура та посадові",
    description: "Схема організації, ролі та посадові інструкції.",
    icon: "structure",
    accent: "blue",
    links: [
      { title: "Оргструктура мережі", description: "Хто за що відповідає", url: "#", tag: "Схема" },
      { title: "Посадові інструкції", description: "Обовʼязки за посадами", url: "#", tag: "Google Drive" },
    ],
  },
  {
    id: "pos",
    title: "POS матеріали",
    description: "Рекламні та оформлювальні матеріали для точок.",
    icon: "pos",
    accent: "pink",
    links: [
      { title: "Папка POS-матеріалів", description: "Макети, банери, наклейки", url: "#", tag: "Google Drive" },
      { title: "Брендбук", description: "Логотипи, кольори, шрифти", url: "#", tag: "Документ" },
    ],
  },
  {
    id: "links",
    title: "Посилання",
    description: "Корисні сервіси та швидкі посилання для роботи.",
    icon: "links",
    accent: "teal",
    links: [
      { title: "Загальний Google Диск", description: "Головна папка мережі", url: "#", tag: "Google Drive" },
      { title: "Корисні сервіси", description: "Інструменти, якими користуємось", url: "#", tag: "Список" },
    ],
  },
  {
    id: "reports",
    title: "Звіти",
    description: "Форми та шаблони щоденної й місячної звітності.",
    icon: "reports",
    accent: "amber",
    links: [
      { title: "Щоденні звіти", description: "Форма для адміністраторів", url: "#", tag: "Google Sheets" },
      { title: "Місячні звіти", description: "Підсумки по точках", url: "#", tag: "Google Sheets" },
    ],
  },
  {
    id: "payments",
    title: "Платіжний календар",
    description: "Графік платежів, оренди та регулярних витрат.",
    icon: "payments",
    accent: "violet",
    links: [
      { title: "Платіжний календар", description: "Усі платежі за датами", url: "#", tag: "Google Sheets" },
      { title: "Оренда та комуналка", description: "Регулярні платежі по точках", url: "#", tag: "Google Sheets" },
    ],
  },
  {
    id: "database",
    title: "Бази даних",
    description: "Клієнтські та робочі бази мережі.",
    icon: "database",
    accent: "green",
    links: [
      { title: "База клієнтів", description: "Загальна клієнтська база", url: "#", tag: "База" },
      { title: "База постачальників", description: "Контакти та умови", url: "#", tag: "Google Sheets" },
    ],
  },
  {
    id: "process",
    title: "БП лайк",
    description: "Бізнес-процеси та регламенти роботи.",
    icon: "process",
    accent: "lime",
    links: [
      { title: "Опис бізнес-процесів", description: "Як влаштована робота", url: "#", tag: "Документ" },
      { title: "Регламенти", description: "Правила та стандарти", url: "#", tag: "Google Drive" },
    ],
  },
  {
    id: "booking",
    title: "Онлайн запис і лояльність",
    description: "Система онлайн-запису та програма лояльності.",
    icon: "booking",
    accent: "purple",
    links: [
      { title: "Система онлайн-запису", description: "Кабінет адміністрування", url: "#", tag: "Сервіс" },
      { title: "Програма лояльності", description: "Умови та налаштування", url: "#", tag: "Документ" },
    ],
  },
  {
    id: "repair",
    title: "Ремонт та відкриття точки",
    description: "Чек-листи ремонту, запуску та контакти підрядників.",
    icon: "repair",
    accent: "teal",
    links: [
      { title: "Чек-лист відкриття точки", description: "Кроки до запуску", url: "#", tag: "Чек-лист" },
      { title: "Довідник з ремонту", description: "Що робити при поломках", url: "#", tag: "Документ" },
      { title: "Контакти підрядників", description: "Сантехнік, електрик, майстри", url: "#", tag: "Контакти" },
    ],
  },
]
