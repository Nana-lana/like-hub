import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Network, Users, UserCheck, Shield, Sparkles, FileText, Activity } from "lucide-react"
import { directory } from "@/lib/directory-data"

const structureIconMap: Record<string, any> = {
  "Оргструктура мережі": Users,
  "Посадові інструкції": FileText,
}

export default function StructurePage() {
  const structureSection = directory.find((s) => s.id === "structure")
  const links = structureSection ? structureSection.links : []

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
          <span className="absolute inset-x-0 top-0 h-1.5 w-full bg-[oklch(0.6_0.14_255)]" aria-hidden="true" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.93_0.05_255)] text-[oklch(0.5_0.13_255)]">
              <Network className="size-8" />
            </span>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Оргструктура та посадові
              </h1>
              <p className="mt-1 text-muted-foreground text-base">
                Схема організації, ролі та посадові інструкції.
              </p>
            </div>
          </div>
        </div>

        {/* Візуальна оргструктура (блоки зверху без стрілок) */}
        <div className="mb-12 space-y-6">
          <h2 className="font-display text-xl font-bold text-foreground">Схема організації мережі</h2>
          
          <div className="space-y-4">
            {/* Рядок 1: СЕО */}
            <div className="flex justify-center">
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/90 px-6 py-4 shadow-sm backdrop-blur-sm min-w-[260px] justify-center">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[oklch(0.93_0.05_255)] text-[oklch(0.5_0.13_255)]">
                  <Shield className="size-5" />
                </span>
                <span className="font-display font-semibold text-foreground">СЕО (Керівник)</span>
              </div>
            </div>

            {/* Рядок 2: Керівна мережі, менеджер з розвитку, адмін */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/90 p-4 shadow-sm backdrop-blur-sm">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[oklch(0.93_0.05_255)] text-[oklch(0.5_0.13_255)]">
                  <Users className="size-5" />
                </span>
                <span className="font-display font-medium text-foreground text-sm">Керуюча мережі</span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/90 p-4 shadow-sm backdrop-blur-sm">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[oklch(0.93_0.05_255)] text-[oklch(0.5_0.13_255)]">
                  <UserCheck className="size-5" />
                </span>
                <span className="font-display font-medium text-foreground text-sm">Менеджер з розвитку</span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/90 p-4 shadow-sm backdrop-blur-sm">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[oklch(0.93_0.05_255)] text-[oklch(0.5_0.13_255)]">
                  <Activity className="size-5" />
                </span>
                <span className="font-display font-medium text-foreground text-sm">Адміністратор</span>
              </div>
            </div>

            {/* Рядок 3: Майстри */}
            <div className="flex justify-center">
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/90 px-6 py-4 shadow-sm backdrop-blur-sm min-w-[260px] justify-center">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[oklch(0.93_0.05_255)] text-[oklch(0.5_0.13_255)]">
                  <Sparkles className="size-5" />
                </span>
                <span className="font-display font-semibold text-foreground">Майстри (Перукарі)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Заголовок для посилань/інструкцій */}
        <h2 className="font-display text-xl font-bold text-foreground mb-6">Документи та інструкції</h2>

        {/* Сітка карток-інструкцій */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, idx) => {
            const isReal = link.url.startsWith("http")
            const IconComponent = structureIconMap[link.title] || Activity

            return (
              <a
                key={idx}
                href={link.url}
                target={isReal ? "_blank" : undefined}
                rel="noreferrer"
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[oklch(0.6_0.14_255)] hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.93_0.05_255)] text-[oklch(0.5_0.13_255)]">
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
                    <span className="rounded-full bg-[oklch(0.94_0.045_255)] px-2.5 py-1 text-xs font-medium text-[oklch(0.46_0.11_255)]">
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
