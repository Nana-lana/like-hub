import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CalendarCheck, Globe, Users, Database, FileCode, Upload, Activity } from "lucide-react"
import { directory } from "@/lib/directory-data"

const bookingIconMap: Record<string, any> = {
  "Вланч для клієнтів": Globe,
  "Вланч для адмінів": Users,
  "База клієнтів Вланч": Database,
  "Гугл скрипт для таблиці клієнтів": FileCode,
  "Прайс для Вланч завантаження": Upload,
}

export default function BookingPage() {
  const bookingSection = directory.find((s) => s.id === "booking")
  const links = bookingSection ? bookingSection.links : []

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
          <span className="absolute inset-x-0 top-0 h-1.5 w-full bg-[oklch(0.62_0.13_300)]" aria-hidden="true" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.93_0.05_300)] text-[oklch(0.5_0.13_300)]">
              <CalendarCheck className="size-8" />
            </span>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Онлайн запис і лояльність
              </h1>
              <p className="mt-1 text-muted-foreground text-base">
                Системи онлайн-запису, інтерфейси платформи Wlaunch, бази клієнтів та скрипти.
              </p>
            </div>
          </div>
        </div>

        {/* Сітка елементів */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, idx) => {
            const isReal = link.url.startsWith("http")
            const IconComponent = bookingIconMap[link.title] || Activity

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
