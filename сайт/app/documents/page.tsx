import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight, FileText, Folder, ExternalLink } from "lucide-react"
import { directory } from "@/lib/directory-data"

export default function DocumentsPage() {
  const documentsSection = directory.find((s) => s.id === "documents")
  const links = documentsSection ? documentsSection.links : []

  return (
    <main className="relative min-h-screen overflow-hidden p-6 md:p-12">
      {/* Абстракція на фон (м'які градієнтні плями та сітка) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_oklch(0.93_0.05_158/0.4),_transparent_40%),radial-gradient(circle_at_80%_80%,_oklch(0.9_0.08_180/0.3),_transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl z-10">
        {/* Кнопка назад */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="size-4" />
          Назад до головної
        </Link>

        {/* Шапка сторінки */}
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-8 shadow-sm backdrop-blur-md">
          <span className="absolute inset-x-0 top-0 h-1.5 w-full bg-[oklch(0.66_0.11_158)]" aria-hidden="true" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.93_0.05_158)] text-[oklch(0.5_0.11_158)]">
              <FileText className="size-8" />
            </span>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Документи
              </h1>
              <p className="mt-1 text-muted-foreground text-base">
                Регламенти, інструкції та внутрішня документація мережі.
              </p>
            </div>
          </div>
        </div>

        {/* Центральний блок із PNG папок та навколопотоковими елементами */}
        <div className="relative flex flex-col items-center justify-center min-h-[500px] py-10">
          
          {/* Центральний елемент: PNG папок із документами */}
          <div className="relative z-20 mb-12 flex flex-col items-center justify-center p-6 rounded-3xl border border-border/40 bg-card/40 backdrop-blur-xl shadow-2xl">
            <div className="relative size-40 md:size-48 flex items-center justify-center">
              {/* Тут ти можеш замінити шлях на свій реальний PNG файл, наприклад /images/folders.png */}
              <div className="absolute inset-0 bg-[oklch(0.93_0.05_158)] rounded-full blur-2xl opacity-50" />
              <Image
                src="/images/folders.png" 
                alt="Папки з документами"
                width={180}
                height={180}
                className="relative z-10 object-contain drop-shadow-xl"
                priority
                onError={(e) => {
                  // Запасний варіант, якщо PNG ще не завантажено у папку public
                  e.currentTarget.style.display = 'none'
                }}
              />
              {/* Fallback іконка, якщо картинки ще немає */}
              <Folder className="absolute size-24 text-[oklch(0.5_0.11_158)] opacity-80" />
            </div>
            <span className="mt-4 font-display text-sm font-semibold text-muted-foreground uppercase tracking-widest">
              Архів документів
            </span>
          </div>

          {/* Навколишні папки з посиланнями */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative z-20">
            {links.map((link, idx) => {
              const isReal = link.url.startsWith("http")

              return (
                <a
                  key={idx}
                  href={link.url}
                  target={isReal ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group relative flex items-start gap-4 rounded-3xl border border-border/70 bg-card/90 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[oklch(0.66_0.11_158)] hover:shadow-lg"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.93_0.05_158)] text-[oklch(0.5_0.11_158)] transition-transform group-hover:scale-110">
                    <Folder className="size-6" />
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {link.title}
                      </h3>
                      <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground shrink-0" />
                    </div>

                    {link.description && (
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                        {link.description}
                      </p>
                    )}

                    {link.tag && (
                      <span className="mt-3 inline-block rounded-full bg-[oklch(0.94_0.04_158)] px-2.5 py-0.5 text-[10px] font-medium text-[oklch(0.45_0.09_158)]">
                        {link.tag}
                      </span>
                    )}
                  </div>
                </a>
              )
            })}
          </div>

        </div>
      </div>
    </main>
  )
}
