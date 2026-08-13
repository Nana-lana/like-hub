import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CalendarDays, CalendarCheck2, DollarSign, Clock } from "lucide-react"
import { directory } from "@/lib/directory-data"

export default function PaymentsPage() {
  const paymentsSection = directory.find((s) => s.id === "payments")
  const links = paymentsSection ? paymentsSection.links : []

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
          <span className="absolute inset-x-0 top-0 h-1.5 w-full bg-[oklch(0.58_0.16_290)]" aria-hidden="true" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.93_0.05_290)] text-[oklch(0.5_0.14_290)]">
              <CalendarDays className="size-8" />
            </span>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Платіжний календар
              </h1>
              <p className="mt-1 text-muted-foreground text-base">
                Графік регулярних оплат, термінів по оренді, комуналці та витратах за датами.
              </p>
            </div>
          </div>
        </div>

        {/* Візуальне представлення календаря платежів */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
              <CalendarCheck2 className="size-5 text-[oklch(0.5_0.14_290)]" />
              Графік оплат та розкладка по датах
            </h2>
            <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
              Регулярні фінансові події
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {links.map((link, idx) => {
              const isReal = link.url.startsWith("http")

              return (
                <a
                  key={idx}
                  href={link.url}
                  target={isReal ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group relative flex items-start justify-between rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[oklch(0.58_0.16_290)] hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.93_0.05_290)] text-[oklch(0.5_0.14_290)] mt-1">
                      <Clock className="size-6" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {link.title}
                        </h3>
                      </div>
                      
                      {link.description && (
                        <p className="text-sm text-muted-foreground">
                          {link.description}
                        </p>
                      )}

                      {link.tag && (
                        <div className="mt-4 flex items-center">
                          <span className="rounded-full bg-[oklch(0.94_0.045_290)] px-2.5 py-1 text-xs font-medium text-[oklch(0.46_0.12_290)]">
                            {link.tag}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <ArrowUpRight className="size-5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground shrink-0" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
