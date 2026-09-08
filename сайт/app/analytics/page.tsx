import Link from "next/link"
import { ArrowLeft, ArrowUpRight, BarChart3, TrendingUp, MapPin, FileSpreadsheet, FolderKanban, Activity } from "lucide-react"
import { directory } from "@/lib/directory-data"
import { cn } from "@/lib/utils"

// Мапа іконок для елементів аналітики (за потреби можна замінити)
const analyticsIconMap: Record<string, any> = {
  "Онлайн записи": BarChart3,
  "Карта перукарень": MapPin,
  "Аналіз 2025": FolderKanban,
  "Швидкість майстра": TrendingUp,
  "Аналіз ринку": FileSpreadsheet,
}

export default function AnalyticsPage() {
  // Знаходимо секцію "analytics" з єдиного файлу конфігурації
  const analyticsSection = directory.find((s) => s.id === "analytics")
  const links = analyticsSection ? analyticsSection.links : []

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

        {/* Головна шапка сторінки з градієнтним фоном та свіченням */}
        <div 
          className="relative mb-10 overflow-hidden rounded-3xl border border-border bg-card/90 p-8 shadow-sm backdrop-blur-sm"
          style={{
            background: `linear-gradient(135deg, var(--card) 60%, oklch(0.92 0.05 300 / 0.4) 100%)`,
            borderColor: `oklch(0.82 0.08 300 / 0.4)`,
          }}
        >
          <div
            className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full blur-3xl"
            style={{ background: `oklch(0.82 0.09 300 / 0.5)` }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <span 
              className="flex size-16 shrink-0 items-center justify-center rounded-2xl text-white shadow-md"
              style={{
                background: `linear-gradient(135deg, oklch(0.68 0.13 300), oklch(0.55 0.14 320))`,
              }}
            >
              <BarChart3 className="size-8" />
            </span>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Аналітика
              </h1>
              <p className="mt-1 text-muted-foreground text-base">
                Дашборди й показники ефективності мережі.
              </p>
            </div>
          </div>
        </div>

        {/* Сітка карток (повністю ідентична до стилю сторінки Документи) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, idx) => {
            const isReal = link.url.startsWith("http")
            const IconComponent = analyticsIconMap[link.title] || Activity

            return (
              <a
                key={idx}
                href={link.url}
                target={isReal ? "_blank" : undefined}
                rel="noreferrer"
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[oklch(0.62_0.13_300)] hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.93_0.05_300)] text-[oklch(0.5_0.13_300)]">
                      <IconComponent className="size-6" />
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
                    <span className="rounded-full bg-[oklch(0.94_0.045_300)] px-2.5 py-1 text-xs font-medium text-[oklch(0.45_0.11_300)]">
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
