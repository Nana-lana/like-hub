import Link from "next/link"
import { ArrowLeft, FileText, ExternalLink } from "lucide-react"

const documentsList = [
  {
    title: "Таблиця оренди",
    description: "Зведена адреси, вартості, термін дії",
    url: "https://drive.google.com/drive/folders/1jUgVc2NvwF_rE4glyFjlo-jZEB1RAfD5?usp=drive_link",
    tag: "Google Drive",
  },
  {
    title: "Документи майстрів",
    description: "Документи та договори оренди з майстрами",
    url: "https://drive.google.com/drive/folders/1myvZDZIz0FT6ufRDV00HGUF9f_UNlEI5?usp=sharing",
    tag: "Google Drive",
  },
  {
    title: "ФОП Мокляк А.Ю.",
    description: "Установчі по ФОП",
    url: "https://drive.google.com/drive/folders/1UQS73cLGyuigKAY6Q2Z2Ig6PQ1tKHJKA?usp=drive_link",
    tag: "Google Drive",
  },
  {
    title: "Затоплення Л2",
    description: "",
    url: "https://drive.google.com/drive/folders/1vmvfnRsDvQz-T0YaQTgMbymgTpdSknsJ?usp=drive_link",
    tag: "Google Drive",
  },
  {
    title: "Гугл форми",
    description: "Для майстрів та клієнтів",
    url: "https://drive.google.com/drive/folders/1fcQDBz06bBGBdGnao6vLrel8BKAKv4ch?usp=drive_link",
    tag: "Google Forms",
  },
  {
    title: "Інвентаризація",
    description: "Остання 2026",
    url: "https://drive.google.com/drive/folders/1xt4Qa7fkLbarXcI_KD4kwpIxorb0V4d1?usp=drive_link",
    tag: "Google Sheets",
  },
  {
    title: "Паролі",
    description: "Остання 2026",
    url: "https://drive.google.com/drive/folders/1jNNUatyG4Rbmdozju-I6iNxGJEhreK6z?usp=drive_link",
    tag: "Secure",
  },
  {
    title: "Старший перукар",
    description: "",
    url: "https://drive.google.com/drive/folders/1ZMPCElRbuIhnWNsGwUjsSnfaTJAvTav2?usp=drive_link",
    tag: "Google Drive",
  },
  {
    title: "Перевірка лайк",
    description: "Камери та чек-лист",
    url: "https://drive.google.com/drive/folders/1SAJCg0lWdpWcMN50XJRtVl91CMkutKuT?usp=drive_link",
    tag: "Checklist",
  },
  {
    title: "Шаблони документів",
    description: "Для друку",
    url: "https://drive.google.com/drive/folders/1UXuf91q9s56q7AIRXhG-R7wosRYWEFk0?usp=drive_link",
    tag: "Google Docs",
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

        {/* Шапка розділу */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-border bg-card/90 p-6 md:p-8 shadow-sm backdrop-blur-sm">
          <div className="absolute top-0 left-0 h-1.5 w-full bg-[oklch(0.66_0.11_158)]" aria-hidden="true" />
          <div className="flex items-start gap-5">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.93_0.05_158)] text-[oklch(0.5_0.11_158)]">
              <FileText className="size-7" />
            </span>
            <div>
              <h1 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Документи
              </h1>
              <p className="mt-2 text-sm text-muted-foreground md:text-base leading-relaxed">
                Усі робочі матеріали, таблиці та посилання на Google Диску мережі «Лайк».
              </p>
            </div>
          </div>
        </div>

        {/* Сітка посилань */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documentsList.map((item) => {
            const isReal = item.url.startsWith("http")
            return (
              <a
                key={item.title}
                href={item.url}
                target={isReal ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[oklch(0.66_0.11_158)] hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-display font-semibold text-foreground group-hover:text-[oklch(0.5_0.11_158)] transition-colors">
                      {item.title}
                    </h2>
                    <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  {item.description ? (
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  ) : null}
                </div>

                {item.tag ? (
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center">
                    <span className="rounded-full bg-[oklch(0.94_0.04_158)] px-2.5 py-0.5 text-[11px] font-medium text-[oklch(0.45_0.09_158)] leading-none">
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
