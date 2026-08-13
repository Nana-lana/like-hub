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
      {
        title: "Онлайн записи",
        description: "Аналітика записів + дашборд",
        url: "https://docs.google.com/spreadsheets/d/13UXuajgArxGT7viYGuACFO0T_tFIiaJykuHBmoGyrCM/edit?usp=drive_link",
        tag: "Google Sheets",
      },
      {
        title: "Карта перукарень",
        description: "Перукарні м. Полтава",
        url: "https://www.google.com/maps/d/edit?mid=1EX0hDXrliu1aSZ3Rly3P8tiIMVJzP64&usp=drive_link",
        tag: "Google Maps",
      },
      {
        title: "Аналіз 2025",
        description: "Сер. к-ть чеків, бази клієнтів",
        url: "https://drive.google.com/drive/folders/1kI-uvxV-WmaiFhix6vSog8X3p7sE94EN?usp=drive_link",
        tag: "Google Drive",
      },
      {
        title: "Швидкість майстра",
        description: "Середня швидкість 2025",
        url: "https://docs.google.com/spreadsheets/d/1PAWBNjmXqm1nhvFuiyFBLJcEjsTvyslB/edit?usp=drive_link&ouid=112373292964682302363&rtpof=true&sd=true",
        tag: "Google Sheets",
      },
      {
        title: "Аналіз ринку",
        description: "Порівняння цін, конкуренти",
        url: "https://drive.google.com/drive/folders/1dqTEH4v2Dm_eldk88LlEBhTl2Yuqqz6E?usp=drive_link",
        tag: "Google Drive",
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
      { title: "Посадова інструкція СЕО", description: "Обов'язки та зона відповідальності", url: "#", tag: "Документ" },
      { title: "Посадова інструкція менеджера з розвитку", description: "Задачі та регламенти", url: "#", tag: "Документ" },
      { title: "Посадова інструкція адміністратора", description: "Інструкції для роботи на точках", url: "#", tag: "Документ" },
      { title: "Книга перукаря", description: "Стандарти роботи майстрів", url: "#", tag: "Документ" },
    ],
  },
 {
    id: "pos",
    title: "POS матеріали",
    description: "Рекламні та оформлювальні матеріали для точок.",
    icon: "pos",
    accent: "pink",
    links: [
      // Google Диск / Матеріали
      { title: "Перша стрижка", description: "Матеріали та макети", url: "#", tag: "Google Drive" },
      { title: "Трафарет", description: "Макет трафарету", url: "#", tag: "Google Drive" },
      { title: "Іконки соц мереж", description: "Набір іконок", url: "#", tag: "Google Drive" },
      { title: "Прайс", description: "Актуальні прайси", url: "#", tag: "Google Drive" },
      { title: "Карта лояльності", description: "Макет картки", url: "#", tag: "Google Drive" },
      { title: "Аудіо реклаמה", description: "Аудіоматеріали для точок", url: "#", tag: "Google Drive" },
      { title: "Футболки", description: "Брендований одяг", url: "#", tag: "Google Drive" },
      { title: "Лого", description: "Логотипи у різних форматах", url: "#", tag: "Brand" },
      { title: "Брендбук", description: "Керівництво з використання бренду", url: "#", tag: "Document" },
      { title: "ТГ контент", description: "Матеріали для Telegram", url: "#", tag: "Telegram" },
      
      // Canva дизайни
      { title: "Знижки день студента, для військових", description: "Шаблон Canva", url: "#", tag: "Canva" },
      { title: "Плакат по місту А5", description: "Шаблон Canva", url: "#", tag: "Canva" },
      { title: "Акція -30%", description: "Шаблон Canva", url: "#", tag: "Canva" },
      { title: "Акція -30%", description: "Дубль шаблону Canva", url: "#", tag: "Canva" },
      { title: "Цінники косметика", description: "Шаблон Canva", url: "#", tag: "Canva" },
      { title: "Онлайн запис", description: "Шаблон Canva", url: "#", tag: "Canva" },
      { title: "Візитки нові", description: "Шаблон Canva", url: "#", tag: "Canva" },
      { title: "Іконки соцмереж", description: "Шаблон Canva", url: "#", tag: "Canva" },
      { title: "Буду через 10 хв", description: "Шаблон Canva", url: "#", tag: "Canva" },
      { title: "Сертифікати", description: "Шаблон Canva", url: "#", tag: "Canva" },
    ],
  },
  {
    id: "links",
    title: "Посилання",
    description: "Корисні сервіси та швидкі посилання для роботи.",
    icon: "links",
    accent: "teal",
    links: [
      { title: "Трелло", description: "Управління завданнями", url: "#", tag: "Сервіс" },
      { title: "Ноушин", description: "База знань", url: "#", tag: "Сервіс" },
      { title: "Вланч", description: "Основна система", url: "#", tag: "CRM" },
      { title: "Вланч для клієнтів", description: "Клієнтський інтерфейс", url: "#", tag: "CRM" },
      { title: "Вланч для адмінів", description: "Адмін-панель", url: "#", tag: "CRM" },
      { title: "Гугл Диск", description: "Сховище файлів", url: "#", tag: "Google Drive" },
      { title: "Інстаграм", description: "Соцмережа", url: "#", tag: "Social" },
      { title: "Міро", description: "Дошки та схемки", url: "#", tag: "Tools" },
      { title: "Фейсбук", description: "Соцмережа", url: "#", tag: "Social" },
      { title: "Тредс", description: "Соцмережа", url: "#", tag: "Social" },
      { title: "Сайт", description: "Головний сайт мережі", url: "#", tag: "Web" },
      { title: "Онлайн запис", description: "Сторінка бронювання", url: "#", tag: "Booking" },
      { title: "Тік Ток", description: "Відеоконтент", url: "#", tag: "Social" },
      { title: "Гугл Скрипт", description: "Автоматизація", url: "#", tag: "Tools" },
      { title: "Канва", description: "Дизайни", url: "#", tag: "Design" },
    ],
  },
 {
    id: "reports",
    title: "Звіти",
    description: "Форми та шаблони щоденної й місячної звітності.",
    icon: "reports",
    accent: "amber",
    links: [
      { title: "Щоденні продажі", description: "Облік щоденних надходжень", url: "#", tag: "Google Sheets" },
      { title: "Асаічі", description: "цілі та планування", url: "#", tag: "Google Sheets" },
      { title: "Лайк 2", description: "Звіт по лайку", url: "#", tag: "Google Sheets" },
      { title: "Лайк 4", description: "Звіт по лайку", url: "#", tag: "Google Sheets" },
      { title: "Лайк 5", description: "Звіт по лайку", url: "#", tag: "Google Sheets" },
      { title: "Лайк 6", description: "Звіт по лайку", url: "#", tag: "Google Sheets" },
      { title: "Лайк 7", description: "Звіт по лайку", url: "#", tag: "Google Sheets" },
      { title: "Лайк 8", description: "Звіт по лайку", url: "#", tag: "Google Sheets" },
      { title: "Продаж косметики", description: "Облік реалізації продукції", url: "#", tag: "Google Sheets" },
      { title: "Інвентаризація", description: "остання 2026", url: "#", tag: "Google Sheets" },
      { title: "Авансовий звіт старшого перукаря", description: "Аванси", url: "#", tag: "Google Sheets" },
      { title: "ЗП майстрів", description: "Розрахунок заробітної плати", url: "#", tag: "Google Sheets" },
      { title: "Інкасація лайк", description: "Облік готівки та інкасацій", url: "#", tag: "Google Sheets" },
    ],
  },
  {
    id: "payments",
    title: "Платіжний календар",
    description: "Графік платежів, оренди та регулярних витрат.",
    icon: "payments",
    accent: "violet",
    links: [
      { title: "Платіжний календар", description: "Усі планові платежі за датами місяця", url: "#", tag: "Google Sheets" },
      { title: "Оренда та комуналка", description: "Графік розрахунків за приміщення точок", url: "#", tag: "Google Sheets" },
    ],
  },
{
    id: "database",
    title: "Бази даних",
    description: "Клієнтські та робочі бази мережі.",
    icon: "database",
    accent: "green",
    links: [
      { title: "База клієнтів", description: "Загальна клієнтська база мережі", url: "#", tag: "База" },
      { title: "Постачальники", description: "Контакти, прайси та умови співпраці", url: "#", tag: "Google Sheets" },
      { title: "БП відкриття", description: "Бізнес-процеси запуску нової точки", url: "#", tag: "Документ" },
    ],
  },
 
{
    id: "booking",
    title: "Онлайн запис і лояльність",
    description: "Система онлайн-запису та програма лояльності.",
    icon: "booking",
    accent: "purple",
    links: [
      { title: "Вланч для клієнтів", description: "Клієнтський інтерфейс запису", url: "#", tag: "Wlaunch" },
      { title: "Вланч для адмінів", description: "Адмін-панель керування", url: "#", tag: "Wlaunch" },
      { title: "База клієнтів Вланч", description: "CRM-база відвідувачів", url: "#", tag: "Wlaunch" },
      { title: "Гугл скрипт для таблиці клієнтів", description: "Автоматизація та скрипти", url: "#", tag: "Google Script" },
      { title: "Прайс для Вланч завантаження", description: "Файл імпорту прайсу в систему", url: "#", tag: "Upload" },
    ],
  },
]
