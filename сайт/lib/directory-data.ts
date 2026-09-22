/**
 * ┌─────────────────────────────────────────────────────────────────────┐
 * │  ЯК РЕДАГУВАТИ ЦЕЙ ФАЙЛ                                             │
 * │                                                                     │
 * │  Це єдине місце, де зберігаються всі розділи та посилання довідника.  │
 * │  Щоб додати посилання — знайдіть потрібний розділ (section) і        │
 * │  замініть url: "#" на своє посилання (або додайте новий обʼєкт):     │
 * │                                                                     │
 * │    {                                                                │
 * │      title: "Назва посилання",                                      │
 * │      description: "Короткий опис (необовʼязково)",                   │
 * │      url: "https://...",   // вставте своє посилання                  │
 * │      tag: "Google Drive",  // необовʼязкова мітка                   │
 * │    }                                                                │
 * │                                                                     │
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
        title: "паролі", 
        description: "остання 2026", 
        url: "https://drive.google.com/drive/folders/1jNNUatyG4Rbmdozju-I6iNxGJEhreK6z?usp=drive_link", 
        tag: "Secure" 
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
      {
        title: "Щотижнева аналітика",
        description: "Оперативні фінансові показники та завантаженість філій мережі Лайк.",
        url: "https://docs.google.com/spreadsheets/d/1TWfidOoWRaUtmXuEJg2U9OTGJ7D2WnWKXSEs__UwuZ4/edit?gid=0#gid=0",
        tag: "Google Sheets"
      }
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
      { title: "Перша стрижка", description: "Матеріали та макети акції", url: "https://drive.google.com/drive/folders/1QCirT-wiCN5-50D_9Z2IlQEaRMxeAr01?usp=drive_link", tag: "Google Drive" },
      { title: "Трафарет", description: "Брендовані трафарети", url: "https://drive.google.com/drive/folders/1I06j2knVrsK07meLTfmMXKt8Lo3MTxdy?usp=drive_link", tag: "Google Drive" },
      { title: "Іконки соцмереж", description: "Набір іконок для соцмереж", url: "https://drive.google.com/drive/folders/1fiOvDopJAGJnn4NUMNmg2XCxtFrpt9yJ?usp=drive_link", tag: "Google Drive" },
      { title: "Прайс", description: "Актуальні прайси мережі", url: "https://drive.google.com/drive/folders/1rnqPjLVjcPCbcx5h1OzxXV6ZTsFqUyrm?usp=drive_link", tag: "Google Drive" },
      { title: "Аудіо реклама", description: "Рекламні аудіоролики", url: "https://drive.google.com/drive/folders/1axA2yHbvxAKVaxkX8eOtlK3wRzG3W_O6?usp=drive_link", tag: "Google Drive" },
      { title: "Бейдж", description: "Маккети бейджів", url: "https://drive.google.com/drive/folders/1SlQM6v1WK5ZHyW_a8YsMq-Dpqb6ZfWkS?usp=drive_link", tag: "Google Drive" },
      { title: "Візитівка", description: "Корпоративні візитки", url: "https://drive.google.com/drive/folders/1jKaTzhe2ajdLHkTrWUFQAFh9OqHo1iY-?usp=drive_link", tag: "Google Drive" },
      { title: "Візуалізації", description: "Дизайн-проєкти інтер'єрів", url: "https://drive.google.com/drive/folders/1T2UNH4KsWQj98IOVjg2eyz2GoR7XZaXM?usp=drive_link", tag: "Google Drive" },
      { title: "Фотопам'ять", description: "Архів фотоматеріалів", url: "https://drive.google.com/drive/folders/1DMXnjvMRVaYHf5UZ1bmBTnL_N0q-wyOR?usp=drive_link", tag: "Google Drive" },
      { title: "Графік роботи", description: "Шаблони графіків роботи", url: "https://drive.google.com/drive/folders/1xKHK5ukOP2nl1zolqB3qrtTcdsTPBQbe?usp=drive_link", tag: "Google Drive" },
      { title: "Карта лояльності", description: "Маккети бонусних карт", url: "https://drive.google.com/drive/folders/1DQxnjc_cOvewTThhnK9UWDAxqEmmoQ9o?usp=drive_link", tag: "Google Drive" },
      { title: "Конструктив вивіска", description: "Технічні вимоги до вивісок", url: "https://drive.google.com/drive/folders/1vdaB7T7xksJyMONzyrv6itLpNu3vaZVI?usp=drive_link", tag: "Google Drive" },
      { title: "Лого", description: "Офіційні логотипи", url: "https://drive.google.com/drive/folders/1y66RknbNu3_fISwiw2peuHbG4SYoVIyf?usp=drive_link", tag: "Google Drive" },
      { title: "Знижки на під'їзд", description: "Матеріали для під'їздів", url: "https://drive.google.com/file/d/1PWGNcc_e290KGQo8FM_R9AnQseaIQfhY/view?usp=drive_link", tag: "Google Drive" },
      { title: "Кьюар вайфай", description: "QR-коди для Wi-Fi", url: "https://drive.google.com/file/d/11PPrSbg5JlxWQvDbvAriiBl1GV5MIAH2/view?usp=drive_link", tag: "Google Drive" },
      { title: "День захисту дітей", description: "Святкові макети", url: "https://drive.google.com/file/d/1XCugIdlP6yLHQn8APufyc5CcWjBj8GeB/view?usp=drive_link", tag: "Google Drive" },
      { title: "Сертифікати", description: "Подарункові сертифікати", url: "https://drive.google.com/file/d/1oFA0iuImfsmRYkmBUAY9LilNn-UnaHO0/view?usp=drive_link", tag: "Google Drive" },
      { title: "Флаєри різні (формат візитки)", description: "Збірка міні-флаєрів", url: "https://drive.google.com/file/d/1Hq0hqSTx9ktBqYY73VdYblKbJojFp2zz/view?usp=drive_link", tag: "Google Drive" },
      { title: "Цінники Л4 Л7", description: "Фірмові цінники для вітрин", url: "https://drive.google.com/file/d/1YugQeUVe9IuX5ovbLrRHUnqSKOLFNhNL/view?usp=drive_link", tag: "Google Drive" },
      { title: "Лого (Canva)", description: "Редагований логотип у Canva", url: "https://canva.link/h8zqv0q95yfb86m", tag: "Canva" },
      { title: "Флаєр відкриття", description: "Макет для відкриття нових точок", url: "https://canva.link/3kn06qmeieksgjg", tag: "Canva" },
      { title: "Л8 відкриття на під'їзд", description: "Спеціальні макети для Л8", url: "https://canva.link/8v336dzhia2ygk3", tag: "Canva" },
      { title: "Пам'ятка для лідів + керуючої", description: "Інструкції та регламенти", url: "https://canva.link/5r27lcayf33etbf", tag: "Canva" },
      { title: "Карти (Canva)", description: "Дизайн дисконтних карт", url: "https://canva.link/72cp8mfy2wdk36b", tag: "Canva" },
      { title: "Графік роботи (Canva)", description: "Шаблон графіку роботи", url: "https://canva.link/z8xv1nppsng5lmt", tag: "Canva" },
      { title: "Сертифікати (Canva)", description: "Шаблони подарункових карт", url: "https://canva.link/6pm39braf3ujrc2", tag: "Canva" },
      { title: "Плакати А4 різні", description: "Інформаційні плакати формату А4", url: "https://canva.link/yx5pj0pnkv5s0kl", tag: "Canva" },
      { title: "Флаєри формат візитки різні (Canva)", description: "Добірка міні-флаєрів у Canva", url: "https://canva.link/30zp7t53hlklzdt", tag: "Canva" },
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
      { 
        title: "щоденні продажі", 
        description: "Облік щоденних надходжень", 
        url: "https://docs.google.com/spreadsheets/d/1QqQvHg18vb0wYXDxp8WfqE-4rSrTPkepVIoD4fMWKWo/edit?usp=drive_link", 
        tag: "Google Sheets" 
      },
      { 
        title: "асаічі", 
        description: "цілі та планування", 
        url: "https://docs.google.com/spreadsheets/d/1D7AOqymAHxpFnNzFcPXi15op8snWHZRoNj8L_tup2Jk/edit?usp=drive_link", 
        tag: "Google Sheets" 
      },
      { 
        title: "лайк 2", 
        description: "Звіт по лайку", 
        url: "https://docs.google.com/spreadsheets/d/1tofNO0sWYp2q8kbs8QSzG4Nh_aevX0WZ9Tlc-2TwZNU/edit?usp=drive_link", 
        tag: "Google Sheets" 
      },
      { 
        title: "лайк 4", 
        description: "Звіт по лайку", 
        url: "https://docs.google.com/spreadsheets/d/1_LoUHhbMKYCmD1rzp7WdhlCZn6MhCQXVQDgQDCkf5rg/edit?usp=drive_link", 
        tag: "Google Sheets" 
      },
      { 
        title: "лайк 5", 
        description: "Звіт по лайку", 
        url: "https://docs.google.com/spreadsheets/d/1M7UeMGDai8t2fY99LIZO59nNzf_kCKPfprcZ5gfBk3Q/edit?usp=drive_link", 
        tag: "Google Sheets" 
      },
      { 
        title: "лайк 6", 
        description: "Звіт по лайку", 
        url: "https://docs.google.com/spreadsheets/d/1vxAqTsSXzOB4ImkbzqYJ2zTDawLcigy9Zc2QIqYgD-M/edit?usp=drive_link", 
        tag: "Google Sheets" 
      },
      { 
        title: "лайк 7", 
        description: "Звіт по лайку", 
        url: "https://docs.google.com/spreadsheets/d/1glL9bXI4wV9c-WweNgtdRpFoG-oxVRFMlxgKYyac9as/edit?usp=drive_link", 
        tag: "Google Sheets" 
      },
      { 
        title: "лайк 8", 
        description: "Звіт по лайку", 
        url: "https://docs.google.com/spreadsheets/d/1kmpUcZDH-5cFafPWelPD5b4dfb-nhVc6xg9CwwXlUb0/edit?usp=drive_link", 
        tag: "Google Sheets" 
      },
      { 
        title: "продаж косметики", 
        description: "Облік реалізації продукції", 
        url: "https://docs.google.com/spreadsheets/d/1jU29lCR1DIah13DA_5Xy4ha5DdakyOKv9MgJ6jhq5Ok/edit?usp=drive_link", 
        tag: "Google Sheets" 
      },
      { 
        title: "дашборд лайк", 
        description: "Зведений дашборд мережі", 
        url: "https://docs.google.com/spreadsheets/d/1OUzlJ-mZ4M31B25Vv_M3PeDXJVS1etqqd4nuQtNi7tA/edit?usp=drive_link", 
        tag: "Google Sheets" 
      },
      { 
        title: "реклама гугл", 
        description: "Аналітика рекламних кампаній", 
        url: "https://docs.google.com/spreadsheets/d/1hnC88msLsPvYkSKqeEZGiMfNNGPM2R99/edit?usp=drive_link&ouid=112373292964682302363&rtpof=true&sd=true", 
        tag: "Google Sheets" 
      },
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
