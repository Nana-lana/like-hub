"use client"

import { useMemo, useState } from "react"
import { Search, X } from "lucide-react"
import { directory } from "@/lib/directory-data"
import { SectionCard } from "@/components/section-card"

export function DirectoryHub() {
  const [query, setQuery] = useState("")

  const normalized = query.trim().toLowerCase()

  const filtered = useMemo(() => {
    if (!normalized) return directory

    return directory
      .map((section) => {
        const sectionMatches =
          section.title.toLowerCase().includes(normalized) ||
          section.description.toLowerCase().includes(normalized)

        const links = section.links.filter(
          (link) =>
            link.title.toLowerCase().includes(normalized) ||
            link.description?.toLowerCase().includes(normalized) ||
            link.tag?.toLowerCase().includes(normalized),
        )

        // Якщо збіг за назвою розділу — показуємо всі посилання розділу
        if (sectionMatches) return section
        if (links.length > 0) return { ...section, links }
        return null
      })
      .filter((s): s is (typeof directory)[number] => s !== null)
  }, [normalized])

  const totalLinks = filtered.reduce((sum, s) => sum + s.links.length, 0)

  return (
    <div>
      <div id="poshuk" className="mx-auto mb-8 max-w-xl scroll-mt-20">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <label htmlFor="directory-search" className="sr-only">
            Пошук по довіднику
          </label>
          <input
            id="directory-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Пошук: документи, звіти, аналітика, ремонт…"
            className="w-full rounded-2xl border border-border bg-card py-3.5 pl-12 pr-12 text-base text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Очистити пошук"
            >
              <X className="size-4" />
            </button>
          ) : null}
        </div>
        {normalized ? (
          <p className="mt-3 text-center text-sm text-muted-foreground" aria-live="polite">
            Знайдено {totalLinks}{" "}
            {totalLinks === 1 ? "посилання" : totalLinks >= 2 && totalLinks <= 4 ? "посилання" : "посилань"} у{" "}
            {filtered.length}{" "}
            {filtered.length === 1 ? "розділі" : filtered.length >= 2 && filtered.length <= 4 ? "розділах" : "розділах"}
          </p>
        ) : null}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((section) => (
            <SectionCard key={section.id} section={section} forceOpen={normalized ? true : undefined} />
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-md rounded-3xl border border-border bg-card px-6 py-14 text-center">
          <p className="font-display text-lg font-semibold text-foreground">Нічого не знайдено</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Спробуйте інший запит — наприклад, «звіти», «ремонт» або «оренда».
          </p>
        </div>
      )}
    </div>
  )
}
