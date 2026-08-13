import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Globe, Share2, Activity, ExternalLink } from "lucide-react"
import { directory } from "@/lib/directory-data"

export default function LinksPage() {
  const linksSection = directory.find((s) => s.id === "links")
  const links = linksSection ? linksSection.links : []

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
          <span className="absolute inset-x-0 top-0 h-1.5 w-full bg-[oklch(0.6_0.15_180)]" aria-hidden="true" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.93_0.04_180)] text-[oklch(0.45_0.14_180)]">
              <Globe className="size-8" />
            </span>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Посилання
              </h1>
              <p className="mt-1 text-muted-foreground text-base">
                Мережа корисних сервісів, платформ та швидких посилань (у вигляді всесвітньої павутини).
              </p>
            </div>
          </div>
        </div>

        {/* Ефект мережі / Всесвітньої павутини (сітка з плаваючими елементами) */}
        <div className="relative rounded-3xl border border-border bg-card/50 p-8 md:p-12 shadow-sm backdrop-blur-sm overflow-hidden">
          {/* Декоративні лінії павутини на фоні */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-muted/20 to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {links.map((link, idx) => {
              const isReal = link.url.startsWith("http")

              return (
                <a
                  key={idx}
                  href={link.url}
                  target={isReal ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-border/60 bg-card/80 shadow-sm transition-all duration-300 hover:scale-105 hover:border-[oklch(0.6_0.15_180)] hover:shadow-lg hover:bg-card text-center"
                >
                  <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="size-3.5 text-muted-foreground" />
                  </span>
                  
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[oklch(0.93_0.04_180)] text-[oklch(0.45_0.14_180)] mb-3 transition-transform group-hover:rotate-6">
                    <Share2 className="size-6" />
                  </div>

                  <span className="font-display text-sm font-semibold text-foreground group-hover:text-[oklch(0.45_0.14_180)] transition-colors">
                    {link.title}
                  </span>

                  {link.tag && (
                    <span className="mt-2 rounded-full bg-[oklch(0.94_0.03_180)] px-2 py-0.5 text-[10px] font-medium text-[oklch(0.4_0.12_180)]">
                      {link.tag}
                    </span>
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
