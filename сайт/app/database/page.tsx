import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Database, Table, Activity } from "lucide-react"
import { directory } from "@/lib/directory-data"

export default function DatabasePage() {
  const databaseSection = directory.find((s) => s.id === "database")
  const links = databaseSection ? databaseSection.links : []

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
          <span className="absolute inset-x-0 top-0 h-1.5 w-full bg-[oklch(0.66_0.11_158)]" aria-hidden="true" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.93_0.05_158)] text-[oklch(0.5_0.11_158)]">
              <Database className="size-8" />
            </span>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Бази даних
              </h1>
              <p className="mt-1 text-muted-foreground text-base">
                Клієнтські та робочі бази мережі, постачальники й регламенти відкриття.
              </p>
            </div>
          </div>
        </div>

        {/* Сітка елементів бази даних */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, idx) => {
            const isReal = link.url.startsWith("http")

            return (
              <a
                key={idx}
                href={link.url}
                target={isReal ? "_blank" : undefined}
                rel="noreferrer"
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[oklch(0.66_0.11_158)] hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.93_0.05_158)] text-[oklch(0.5_0.11_158)]">
                      <Table className="size-6" />
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
                    <span className="rounded-full bg-[oklch(0.94_0.04_158)] px-2.5 py-1 text-xs font-medium text-[oklch(0.45_0.09_158)]">
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
