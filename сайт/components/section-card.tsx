"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { DirectorySection } from "@/lib/directory-data"
import { cn } from "@/lib/utils"

export function SectionCard({
  section,
}: {
  section: DirectorySection
  forceOpen?: boolean
}) {
  // Перевіряємо, чи має розділ окрему сторінку
  const hasDedicatedPage = section.id === "documents" || section.id === "analytics"

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-ring/50 hover:shadow-md",
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            {hasDedicatedPage ? (
              // Якщо це Документи або Аналітика — назва веде на їхню власну сторінку
              <Link
                href={`/${section.id}`}
                className="group/title inline-flex items-center gap-1.5 font-display text-lg font-semibold leading-tight text-foreground hover:text-primary transition-colors"
              >
                {section.title}
                <ArrowUpRight className="size-4 opacity-70 transition-transform group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5" />
              </Link>
            ) : (
              <h2 className="text-pretty font-display text-lg font-semibold leading-tight text-foreground">
                {section.title}
              </h2>
            )}
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
              {section.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
