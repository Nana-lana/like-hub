import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Image as ImageIcon, FolderOpen, Palette, FileText, Activity } from "lucide-react"
import { directory } from "@/lib/directory-data"

const posIconMap: Record<string, any> = {
  "Перша стрижка": ImageIcon,
  "Трафарет": ImageIcon,
  "Іконки соц мереж": ImageIcon,
  "Прайс": ImageIcon,
  "Карта лояльності": ImageIcon,
  "Аудіо реклама": ImageIcon,
  "Футболки": ImageIcon,
  "Лого": Palette,
  "Брендбук": FileText,
  "ТГ контент": FolderOpen,
  "Знижки день студента, для військових": ImageIcon,
  "Плакат по місту А5": ImageIcon,
  "Акція -30%": ImageIcon,
  "Цінники косметика": ImageIcon,
  "Онлайн запис": ImageIcon,
  "Візитки нові": ImageIcon,
  "Буду через 10 хв": ImageIcon,
  "Сертифікати": ImageIcon,
}

export default function PosPage() {
  const posSection = directory.find((s) => s.id === "pos")
  const links = posSection ? posSection.links : []

  // Розділяємо на дві категорії відповідно до структури
  const googleDriveLinks = links.slice(0, 10) // Перші 10 — Google Диск + нові (лого, брендбук, тг контент)
  const canvaLinks = links.slice(10) // Решта — Canva дизайни

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

        {/* Шапка сторінки */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-border bg-card/90 p-8 shadow-sm backdrop-blur-sm">
          <span className="absolute inset-x-0 top-0 h-1.5 w-full bg-[oklch(0.65_0.18_350)]" aria-hidden="true" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.95_0.05_350)] text-[oklch(0.55_0.18_350)]">
              <ImageIcon className="size-8" />
            </span>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                POS матеріали
              </h1>
              <p className="mt-1 text-muted-foreground text-base">
                Рекламні матеріали, макети на Google Диску та шаблони дизайнів у Canva.
              </p>
            </div>
          </div>
        </div>

        {/* Блок 1: Google Диск та матеріали */}
        <div className="mb-12">
          <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <FolderOpen className="size-5 text-[oklch(0.55_0.18_350)]" />
            Матеріали (Google Диск)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {googleDriveLinks.map((link, idx) => {
              const isReal = link.url.startsWith("http")
              const IconComponent = posIconMap[link.title] || Activity

              return (
                <a
                  key={idx}
                  href={link.url}
                  target={isReal ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[oklch(0.65_0.18_350)] hover:shadow-md"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.95_0.05_350)] text-[oklch(0.55_0.18_350)]">
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
                      <span className="rounded-full bg-[oklch(0.95_0.04_350)] px-2.5 py-1 text-xs font-medium text-[oklch(0.48_0.14_350)]">
                        {link.tag}
                      </span>
                    </div>
                  )}
                </a>
              )
            })}
          </div>
        </div>

        {/* Блок 2: Canva дизайни */}
        <div>
          <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Palette className="size-5 text-[oklch(0.55_0.18_350)]" />
            Canva дизайни — редагуй та завантажуй
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {canvaLinks.map((link, idx) => {
              const isReal = link.url.startsWith("http")
              const IconComponent = posIconMap[link.title] || Activity

              return (
                <a
                  key={idx}
                  href={link.url}
                  target={isReal ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[oklch(0.65_0.18_350)] hover:shadow-md"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.95_0.05_350)] text-[oklch(0.55_0.18_350)]">
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
                      <span className="rounded-full bg-[oklch(0.95_0.04_350)] px-2.5 py-1 text-xs font-medium text-[oklch(0.48_0.14_350)]">
                        {link.tag}
                      </span>
                    </div>
                  )}
                </a>
              )
            })}
          </div>
        </div>

      </div>
    </main>
  )
}
