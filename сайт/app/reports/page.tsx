import Link from "next/link"
import { ArrowLeft, ArrowUpRight, ClipboardList, FileSpreadsheet, Activity } from "lucide-react"
import { directory } from "@/lib/directory-data"

export default function ReportsPage() {
  const reportsSection = directory.find((s) => s.id === "reports")
  
  // Базові посилання з файлу конфігурації за мінусом «Інвентаризація»
  const baseLinks = reportsSection 
    ? reportsSection.links.filter((link) => !link.title.toLowerCase().includes("інвентаризація")) 
    : []

  // Нові додані посилання
  const customLinks = [
    {
      title: "Звіти відеоспостережень",
      description: "Таблиця обліку та перевірок за записами камер.",
      url: "https://docs.google.com/spreadsheets/d/1QAg15Hf31G4INaYi3_Wd_xQnwIMU0x848SvffBtViLE/edit?gid=0#gid=0",
      tag: "Таблиця",
    },
    {
      title: "Форма перевірки керуючої",
      description: "Чек-лист оцінки роботи та дотримання регламентів.",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSezA0d9WH9TLqbhJoJ4bhpsS_XFTjLvNXrbfgPKrWtOyDAgBA/viewform?usp=sharing&ouid=112373292964682302363",
      tag: "Форма",
    },
    {
      title: "Авансовий звіт",
      description: "Облік витрат та фінансових операцій.",
      url: "https://docs.google.com/spreadsheets/d/1kUBtAiJU_u0C-PgHeruojpWxbxnbZG_kmn-Ug1KnKlE/edit?usp=drive_link",
      tag: "Фінанси",
    },
  ]

  // Об'єднуємо (можна налаштувати порядок за бажанням)
  const links = [...baseLinks, ...customLinks]

  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="mx-auto max-w-6xl">
        {/* Кнопка назад */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="size-4" />
          Назад до головної
        </Link>

        {/* Шапка сторінки з градієнтним фоном та свіченням */}
        <div 
          className="relative mb-10 overflow-hidden rounded-3xl border border-border bg-card/90 p-8 shadow-sm backdrop-blur-sm"
          style={{
            background: `linear-gradient(135deg, var(--card) 60%, oklch(0.92 0.05 70 / 0.4) 100%)`,
            borderColor: `oklch(0.82 0.08 70 / 0.4)`,
          }}
        >
          <div
            className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full blur-3xl"
            style={{ background: `oklch(0.82 0.09 70 / 0.5)` }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <span 
              className="flex size-16 shrink-0 items-center justify-center rounded-2xl text-white shadow-md"
              style={{
                background: `linear-gradient(135deg, oklch(0.75 0.12 70), oklch(0.60 0.13 60))`,
              }}
            >
              <ClipboardList className="size-8" />
            </span>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Звіти
              </h1>
              <p className="mt-1 text-muted-foreground text-base">
                Форми щоденної та місячної звітності, показники точок, відеоспостереження та фінанси.
              </p>
            </div>
          </div>
        </div>

        {/* Сітка звітів */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, idx) => {
            const isReal = link.url.startsWith("http")

            return (
              <a
                key={idx}
                href={link.url}
                target={isReal ? "_blank" : undefined}
                rel="noreferrer"
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[oklch(0.75_0.12_70)] hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.94_0.06_78)] text-[oklch(0.52_0.1_62)]">
                      <FileSpreadsheet className="size-6" />
                    </span>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>

                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  
                  {link.description && (
                    <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                      {link.description}
                    </p>
                  )}
                </div>

                {link.tag && (
                  <div className="mt-6 flex items-center">
                    <span className="rounded-full bg-[oklch(0.95_0.05_78)] px-2.5 py-1 text-xs font-medium text-[oklch(0.48_0.09_62)]">
                      {link.tag}
                    </span>
                  </div>
                )}
              </a>
            )
          })}
        </div>
      </div>
    </main>
  )
}
