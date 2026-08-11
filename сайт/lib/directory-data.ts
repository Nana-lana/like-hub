import {
  Calendar,
  MapPin,
  TrendingUp,
  Gauge,
  LineChart,
  Scissors,
  Stamp,
  Share2,
  Tag,
  Heart,
  Volume2,
  Shirt,
  Percent,
  Image as ImageIcon,
  QrCode,
  IdCard,
  MessageCircle,
  Award,
  FileText,
  FolderOpen,
  Palette,
  Trello,
  StickyNote,
  Users,
  Instagram,
  Facebook,
  Globe,
  MessagesSquare,
  Music2,
  HardDrive,
  Figma,
  type LucideIcon,
} from "lucide-react";

/**
 * A single clickable entry rendered by <SectionCard />.
 *
 * `icon`  – a lucide-react icon component (used by default).
 * `logo`  – path to a brand logo under /public (e.g. "/logos/canva.svg").
 *           If present, it's rendered instead of `icon` — use this for
 *           brands lucide doesn't ship (Canva, TikTok, Threads, Notion, Miro…).
 *           Drop square PNG/SVG logos (min 64x64) into /public/logos/.
 * `image` – optional wide preview image for the card body
 *           (e.g. a screenshot of the dashboard / template).
 */
export interface DirectoryLink {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  logo?: string;
  image?: string;
  external?: boolean;
}

export interface DirectoryGroup {
  id: string;
  title: string;
  links: DirectoryLink[];
}

/* ------------------------------------------------------------------ */
/*  1. Швидкий доступ / аналітика запису (з першого скріна Canva)      */
/* ------------------------------------------------------------------ */

export const quickAccessLinks: DirectoryLink[] = [
  {
    id: "online-bookings",
    title: "Онлайн записи",
    description: "Аналітика записів + дашборд",
    href: "/analytics",
    icon: Calendar,
    image: "/previews/analytics-dashboard.png",
  },
  {
    id: "barbershop-map",
    title: "Карта перукарень",
    description: "Перукарні м. Полтава",
    href: "https://www.google.com/maps/d/edit?mid=REPLACE_ME",
    icon: MapPin,
    external: true,
  },
  {
    id: "analysis-2025",
    title: "Аналіз 2025",
    description: "Сер. к-ть чеків, бази клієнтів",
    href: "/analytics#2025",
    icon: LineChart,
  },
  {
    id: "master-speed",
    title: "Швидкість майстра",
    description: "Середня швидкість 2025",
    href: "/analytics#speed",
    icon: Gauge,
  },
  {
    id: "market-analysis",
    title: "Аналіз ринку",
    description: "Порівняння цін, конкуренти",
    href: "/market",
    icon: TrendingUp,
  },
];

/* ------------------------------------------------------------------ */
/*  2. Матеріали та посилання (верхній ряд другого скріна)             */
/* ------------------------------------------------------------------ */

export const materialsLinks: DirectoryLink[] = [
  {
    id: "first-haircut",
    title: "Перша стрижка",
    description: "Анкета / сценарій для першого візиту клієнта",
    href: "https://docs.google.com/document/d/REPLACE_ME",
    icon: Scissors,
    external: true,
  },
  {
    id: "stencil",
    title: "Трафарет",
    description: "Трафарети для оформлення вітрин і стендів",
    href: "https://drive.google.com/drive/folders/REPLACE_ME",
    icon: Stamp,
    external: true,
  },
  {
    id: "social-icons",
    title: "Іконки соц. мереж",
    description: "Набір іконок для сторіз і публікацій",
    href: "https://drive.google.com/drive/folders/REPLACE_ME",
    icon: Share2,
    external: true,
  },
  {
    id: "price-list",
    title: "Прайс",
    description: "Актуальний прайс-лист мережі «Лайк»",
    href: "https://drive.google.com/file/d/REPLACE_ME",
    icon: Tag,
    external: true,
  },
  {
    id: "loyalty-card",
    title: "Карта лояльності",
    description: "Умови програми лояльності для клієнтів",
    href: "https://drive.google.com/file/d/REPLACE_ME",
    icon: Heart,
    external: true,
  },
  {
    id: "audio-ads",
    title: "Аудіо реклама",
    description: "Аудіоролики для трансляції в залі",
    href: "https://drive.google.com/drive/folders/REPLACE_ME",
    icon: Volume2,
    external: true,
  },
  {
    id: "t-shirts",
    title: "Футболки",
    description: "Макети мерчу для майстрів",
    href: "https://drive.google.com/drive/folders/REPLACE_ME",
    icon: Shirt,
    external: true,
  },
];

/* ------------------------------------------------------------------ */
/*  3. POS-матеріали — блок 1: Google Drive (друк / PDF-звіти)         */
/* ------------------------------------------------------------------ */

export const posDriveLinks: DirectoryLink[] = [
  {
    id: "pdf-reports",
    title: "PDF-звіти",
    description: "Щомісячні звіти по записах і виручці",
    href: "https://drive.google.com/drive/folders/REPLACE_ME",
    icon: FileText,
    external: true,
  },
  {
    id: "print-materials",
    title: "Матеріали для друку",
    description: "Готові до друку постери, цінники, вивіски",
    href: "https://drive.google.com/drive/folders/REPLACE_ME",
    icon: FolderOpen,
    external: true,
  },
  {
    id: "certificates-drive",
    title: "Сертифікати",
    description: "Бланки подарункових сертифікатів (PDF)",
    href: "https://drive.google.com/drive/folders/REPLACE_ME",
    icon: Award,
    external: true,
  },
  {
    id: "id-cards",
    title: "Візитки",
    description: "Друковані макети візиток майстрів",
    href: "https://drive.google.com/drive/folders/REPLACE_ME",
    icon: IdCard,
    external: true,
  },
];

/* ------------------------------------------------------------------ */
/*  3. POS-матеріали — блок 2: Canva (редагуй і завантажуй)            */
/* ------------------------------------------------------------------ */

export const posCanvaLinks: DirectoryLink[] = [
  {
    id: "student-discount",
    title: "Знижки день студента, для військових",
    description: "Шаблон акційного посту / сторіз",
    href: "https://www.canva.com/design/REPLACE_ME/edit",
    icon: Percent,
    logo: "/logos/canva.svg",
    external: true,
  },
  {
    id: "city-poster-a2",
    title: "Плакат по місту А2",
    description: "Афіша формату А2 для розклейки по місту",
    href: "https://www.canva.com/design/REPLACE_ME/edit",
    icon: ImageIcon,
    logo: "/logos/canva.svg",
    external: true,
  },
  {
    id: "promo-30-stories",
    title: "Акція -30% (сторіз)",
    description: "Шаблон сторіз для акції -30%",
    href: "https://www.canva.com/design/REPLACE_ME/edit",
    icon: Percent,
    logo: "/logos/canva.svg",
    external: true,
  },
  {
    id: "promo-30-post",
    title: "Акція -30% (пост)",
    description: "Шаблон посту для стрічки Instagram",
    href: "https://www.canva.com/design/REPLACE_ME/edit",
    icon: Percent,
    logo: "/logos/canva.svg",
    external: true,
  },
  {
    id: "cosmetics-price-tags",
    title: "Цінники косметика",
    description: "Шаблон цінників для вітрини з косметикою",
    href: "https://www.canva.com/design/REPLACE_ME/edit",
    icon: QrCode,
    logo: "/logos/canva.svg",
    external: true,
  },
  {
    id: "online-booking-canva",
    title: "Онлайн запис",
    description: "Банер-нагадування про онлайн-запис",
    href: "https://www.canva.com/design/REPLACE_ME/edit",
    icon: Calendar,
    logo: "/logos/canva.svg",
    external: true,
  },
  {
    id: "business-cards-new",
    title: "Візитки нові",
    description: "Оновлений дизайн візиток майстрів",
    href: "https://www.canva.com/design/REPLACE_ME/edit",
    icon: IdCard,
    logo: "/logos/canva.svg",
    external: true,
  },
  {
    id: "social-icons-canva",
    title: "Іконки соцмереж",
    description: "Комплект брендованих іконок для актуальних сторіз",
    href: "https://www.canva.com/design/REPLACE_ME/edit",
    icon: Share2,
    logo: "/logos/canva.svg",
    external: true,
  },
  {
    id: "back-in-10",
    title: "Буду через 10 хв",
    description: "Табличка на двері / стійку адміністратора",
    href: "https://www.canva.com/design/REPLACE_ME/edit",
    icon: MessageCircle,
    logo: "/logos/canva.svg",
    external: true,
  },
  {
    id: "certificates-canva",
    title: "Сертифікати",
    description: "Редагований шаблон подарункового сертифіката",
    href: "https://www.canva.com/design/REPLACE_ME/edit",
    icon: Award,
    logo: "/logos/canva.svg",
    external: true,
  },
];

/* ------------------------------------------------------------------ */
/*  4. Інструменти команди (третій скрін)                              */
/* ------------------------------------------------------------------ */

export const toolsLinks: DirectoryLink[] = [
  {
    id: "trello",
    title: "Трелло",
    description: "Дошки завдань команди",
    href: "https://trello.com/REPLACE_ME",
    icon: Trello,
    external: true,
  },
  {
    id: "notion",
    title: "Ноушин",
    description: "База знань і нотатки",
    href: "https://notion.so/REPLACE_ME",
    icon: StickyNote,
    logo: "/logos/notion.svg",
    external: true,
  },
  {
    id: "owners",
    title: "Власники",
    description: "Внутрішній контакт-лист власників мережі",
    href: "https://drive.google.com/file/d/REPLACE_ME",
    icon: Users,
    external: true,
  },
  {
    id: "instagram",
    title: "Інстаграм",
    description: "Офіційний акаунт «Лайк»",
    href: "https://instagram.com/REPLACE_ME",
    icon: Instagram,
    external: true,
  },
  {
    id: "miro",
    title: "Miro",
    description: "Дошка для планування та мапінгу процесів",
    href: "https://miro.com/app/board/REPLACE_ME",
    icon: Palette,
    logo: "/logos/miro.svg",
    external: true,
  },
  {
    id: "facebook",
    title: "Фейсбук",
    description: "Сторінка мережі у Facebook",
    href: "https://facebook.com/REPLACE_ME",
    icon: Facebook,
    external: true,
  },
  {
    id: "threads",
    title: "Тредс",
    description: "Офіційний акаунт у Threads",
    href: "https://threads.net/REPLACE_ME",
    icon: MessagesSquare,
    logo: "/logos/threads.svg",
    external: true,
  },
  {
    id: "website",
    title: "Сайт",
    description: "Публічний сайт мережі «Лайк»",
    href: "https://REPLACE_ME.com",
    icon: Globe,
    external: true,
  },
  {
    id: "tiktok",
    title: "TikTok",
    description: "Офіційний акаунт у TikTok",
    href: "https://tiktok.com/@REPLACE_ME",
    icon: Music2,
    logo: "/logos/tiktok.svg",
    external: true,
  },
  {
    id: "google-drive",
    title: "Google Диск",
    description: "Спільне сховище скрінів і звітів",
    href: "https://drive.google.com/drive/folders/REPLACE_ME",
    icon: HardDrive,
    external: true,
  },
  {
    id: "canva",
    title: "Canva",
    description: "Усі дизайни мережі «Лайк»",
    href: "https://www.canva.com/REPLACE_ME",
    icon: Figma,
    logo: "/logos/canva.svg",
    external: true,
  },
];

export const directoryGroups: DirectoryGroup[] = [
  { id: "quick-access", title: "Швидкий доступ", links: quickAccessLinks },
  { id: "materials", title: "Матеріали та посилання", links: materialsLinks },
  { id: "tools", title: "Інструменти команди", links: toolsLinks },
];

/* ------------------------------------------------------------------ */
/*  5. Аналітика — мокові дані для дашборду (замініть на реальні API) */
/* ------------------------------------------------------------------ */

export interface MonthlyBookingPoint {
  month: string;
  created: number;
  cancelled: number;
}

export const monthlyBookings: MonthlyBookingPoint[] = [
  { month: "Січ", created: 410, cancelled: 38 },
  { month: "Лют", created: 452, cancelled: 41 },
  { month: "Бер", created: 498, cancelled: 35 },
  { month: "Кві", created: 520, cancelled: 47 },
  { month: "Тра", created: 561, cancelled: 52 },
  { month: "Чер", created: 589, cancelled: 44 },
  { month: "Лип", created: 610, cancelled: 39 },
];

export interface BookingTypeSlice {
  name: string;
  value: number;
  color: string;
}

export const bookingsByType: BookingTypeSlice[] = [
  { name: "Створено", value: 3805, color: "#8b7cf6" },
  { name: "Скасовано", value: 823, color: "#4361ee" },
];

export interface MarketingChannel {
  channel: string;
  leads: number;
  conversion: number; // %
}

export const marketingChannels: MarketingChannel[] = [
  { channel: "Instagram", leads: 612, conversion: 34 },
  { channel: "Google Maps", leads: 388, conversion: 41 },
  { channel: "TikTok", leads: 205, conversion: 22 },
  { channel: "Сарафанне радіо", leads: 470, conversion: 58 },
  { channel: "Онлайн-запис (сайт)", leads: 341, conversion: 47 },
];
