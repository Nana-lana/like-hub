import { analyticsTiles } from "@/lib/analytics-data"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AnalyticsPage() {
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

        <h1 className="text-3xl font-bold tracking-tight mb-2">Аналітика</h1>
        <p className="text-muted-foreground mb-8">Дашборди й показники ефективності мережі.</p>

        {/* Сітка плитковий каталог */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {analyticsTiles.map((tile, idx) => (
            <a
              key={idx}
              href={tile.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-3xl border border-border bg-card/90 p-6 shadow-sm transition-all duration-200 hover:border-ring/50 hover:shadow-md"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tile.title}
                </h3>
                {tile.description && (
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {tile.description}
                  </p>
                )}
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-primary">
                Відкрити документ &rarr;
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
