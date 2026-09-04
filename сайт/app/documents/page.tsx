import Link from "next/link"
import { ArrowLeft, ExternalLink, FileText } from "lucide-react"
import { 
  Table, 
  Users, 
  Building2, 
  Droplets, 
  FolderInput, 
  ClipboardCheck, 
  KeyRound, 
  UserCheck, 
  CheckSquare, 
  Files 
} from "lucide-react"
import { PageHeader } from "@/components/page-header"

const documentsList = [
  {
    title: "Таблиця оренди",
    description: "Зведена адреси, вартості, термін дії",
    url: "https://drive.google.com/drive/folders/1jUgVc2NvwF_rE4glyFjlo-jZEB1RAfD5?usp=drive_link",
    tag: "Google Drive",
    icon: Table,
  },
  {
    title: "Документи майстрів",
    description: "Документи та договори оренди з майстрами",
    url: "https://drive.google.com/drive/folders/1myvZDZIz0FT6ufRDV00HGUF9f_UNlEI5?usp=sharing",
    tag: "Google Drive",
    icon: Users,
  },
  {
    title: "ФОП Мокляк А.Ю.",
    description: "Установчі по ФОП",
    url: "https://drive.google.com/drive/folders/1UQS73cLGyuigKAY6Q2Z2Ig6PQ1tKHJKA?usp=drive_link",
    tag: "Google Drive",
    icon: Building2,
  },
  {
    title: "Затоплення Л2",
    description: "Матеріали по інциденту",
    url: "https://drive.google.com/drive/folders/1vmvfnRsDvQz-T0YaQTgMbymgTpdSknsJ?usp=drive_link",
    tag: "Google Drive",
    icon: Droplets,
  },
  {
    title: "Гугл форми",
    description: "Для майстрів та клієнтів",
    url: "https://drive.google.com/drive/folders/1fcQDBz06bBGBdGnao6vLrel8BKAKv4ch?usp=drive_link",
    tag: "Google Forms",
    icon: FolderInput,
  },
  {
    title: "Інвентаризація",
    description: "Остання 2026",
    url: "https://drive.google.com/drive/folders/1xt4Qa7fkLbarXcI_KD4kwpIxorb0V4d1?usp=drive_link",
    tag: "Google Sheets",
    icon: ClipboardCheck,
  },
  {
    title: "Паролі",
    description: "Остання 2026",
    url: "https://drive.google.com/drive/folders/1jNNUatyG4Rbmdozju-I6iNxGJEhreK6z?usp=drive_link",
    tag: "Secure",
    icon: KeyRound,
  },
  {
    title: "Старший перукар",
    description: "Інструкції та обов'язки",
    url: "https://drive.google.com/drive/folders/1ZMPCElRbuIhnWNsGwUjsSnfaTJAvTav2?usp=drive_link",
    tag: "Google Drive",
    icon: UserCheck,
  },
  {
    title: "Перевірка лайк",
    description: "Камери та чек-лист",
    url: "https://drive.google.com/drive/folders/1SAJCg0lWdpWcMN50XJRtVl91CMkutKuT?usp=drive_link",
    tag: "Checklist",
    icon: CheckSquare,
  },
  {
    title: "Шаблони документів",
    description: "Для друку",
    url: "https://drive.google.com/drive/folders/1UXuf91q9s56q7AIRXhG-R7wosRYWEFk0?usp=drive_link",
    tag: "Google Docs",
    icon: Files,
  },
]

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Кнопка повернення */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground mb-8"
        >
          <ArrowLeft className="size-4" />
          Назад на головну
        </Link>

        {/* Нова уніфікована шапка */}
        <PageHeader
          icon={FileText}
          title="Документи"
          description="Усі робочі матеріали, таблиці та посилання на Google Диску мережі «Лайк»."
          hue={158}
        />

        {/* Сітка карток у новому стилі */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {documentsList.map((item) => {
            const isReal = item.url.startsWith("http")
            const IconComponent = item.icon
            return (
              <a
                key={item.title}
                href={item.url}
                target={isReal ? "_blank" : undefined}
                rel="noreferrer"
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[oklch(0.66_0.11_158)] hover:shadow-md overflow-hidden"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    {/* Контейнер для фонових кіл та емблеми */}
                    <div className="relative size-20 shrink-0 flex items-center justify-center">
                      {/* Форові декоративні кружечки */}
                      <div className="absolute -top-2 -left-2 size-12 rounded-full border border-[oklch(0.66_0.11_158/0.3)] bg-[oklch(0.93_0.05_158/0.2)] transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute -bottom-1 -right-1 size-10 rounded-full border border-[oklch(0.66_0.11_158/0.2)] bg-[oklch(0.93_0.05_158/0.3)]" />
                      
                      {/* Головний кружечок з іконкою */}
                      <div className="relative z-10 flex size-16 items-center justify-center rounded-full bg-[oklch(0.93_0.05_158)] text-[oklch(0.5_0.11_158)] shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <IconComponent className="size-7" />
                      </div>
                    </div>

                    <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  
                  {/* Заголовок та опис */}
                  <h2 className="font-display font-semibold text-lg text-foreground group-hover:text-[oklch(0.5_0.11_158)] transition-colors leading-snug">
                    {item.title}
                  </h2>
                  
                  {item.description ? (
                    <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  ) : null}
                </div>

                {item.tag ? (
                  <div className="mt-6 pt-3 border-t border-border/40 flex items-center">
                    <span className="rounded-full bg-[oklch(0.94_0.04_158)] px-2.5 py-1 text-[11px] font-medium text-[oklch(0.45_0.09_158)] leading-none">
                      {item.tag}
                    </span>
                  </div>
                ) : null}
              </a>
            )
          })}
        </div>
      </div>
    </main>
  )
}
