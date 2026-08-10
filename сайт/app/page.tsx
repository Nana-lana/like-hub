import { Scissors } from "lucide-react"
import { DirectoryHub } from "@/components/directory-hub"
import { SiteHeader } from "@/components/site-header"
import { BubblesBackground } from "@/components/bubbles-background"

export default function Page() {
  return (
    <div id="top" className="relative min-h-screen">
      <BubblesBackground />
      <SiteHeader />

      <main>
        {/* Ніжний градієнтний хедер */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="mx-auto max-w-5xl px-5 py-14 text-center sm:py-20">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-1.5 text-sm font-medium text-secondary-foreground backdrop-blur">
              <Scissors className="size-4" aria-hidden="true" />
              Внутрішній довідник мережі
            </div>
            <h1 className="text-balance font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Лайк <span className="text-primary">hub</span> — все в одному місці
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Документи, аналітика, звіти, бази даних, платіжний календар, онлайн-запис, ремонт та відкриття точок.
              Натисніть на розділ, щоб побачити посилання, або скористайтесь пошуком.
            </p>
          </div>
        </section>

        <div id="rozdily" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-10 sm:py-12">
          <DirectoryHub />
        </div>

        <footer id="dovidka" className="scroll-mt-20 border-t border-border/60">
          <div className="mx-auto max-w-6xl px-5 py-6 text-center text-sm text-muted-foreground">
            Довідник мережі перукарень «Лайк» · оновлюйте посилання у файлі{" "}
            <code className="rounded bg-secondary px-1.5 py-0.5 text-xs text-secondary-foreground">
              lib/directory-data.ts
            </code>
          </div>
        </footer>
      </main>
    </div>
  )
}
