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
    ],
  },
  {
    id: "analytics",
    title: "Аналітика",
    description: "Дашборди й показники ефективності мережі.",
    icon: "analytics",
    accent: "purple",
    links: [
      {
        title: "Онлайн записи",
        description: "Аналітика записів + дашборд",
        url: "https://docs.google.com/spreadsheets/d/13UXuajgArxGT7viYGuACFO0T_tFIiaJykuHBmoGyrCM/edit?usp=drive_link",
        tag: "Google Sheets",
      },
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
    ],
  },
]
export const kpis = {
  totalBookings: 4628,
  cancelledBookings: 823,
  successfulOnlineBookings: 3805,
};
