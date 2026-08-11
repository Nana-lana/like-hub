"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { DirectorySection } from "@/lib/directory-data"
import { cn } from "@/lib/utils"

export function SectionCard({
  section,
  forceOpen,
}: {
  section: DirectorySection
  forceOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)

  const expanded = forceOpen || isOpen
  const hasDedicatedPage = section.id === "documents" || section.id === "analytics"

  return (
    <div
      onClick={() => {
        // Якщо це звичайна картка — розгортаємо/згортаємо при кліку
        if (!hasDedicatedPage) {
          setIsOpen((prev) => !prev)
        }
      }}
      className={cn(
        "group relative flex flex-col justify-between rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-ring/50 hover:shadow-md",
        !hasDedicatedPage && "cursor-pointer",
        expanded && "border-ring/60 shadow-md",
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            {hasDedicatedPage ? (
              // Якщо є окрема сторінка (Документи, Аналітика) — робимо заголовок посиланням
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

          {/* Кнопка розгортання відображається лише для звичайних карток із посиланнями */}
          {!hasDedicatedPage && section.links.length > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen((prev) => !prev)
              }}
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-secondary/50 text-muted-foreground transition-transform duration-200",
                expanded && "rotate-180 bg-secondary text-foreground",
              )}
              aria-label="Розгорнути список"
            >
              <ChevronDown className="size-4" />
            </button>
          )}
        </div>
      </div>

      {/* Список внутрішніх посилань (якщо картка розгорнута) */}
      {expanded && !hasDedicatedPage && section.links.length > 0 && (
        <div className="mt-6 border-t border-border/60 pt-4 space-y-3">
          {section.links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="group/link flex items-start justify-between gap-3 rounded-xl p-2.5 transition-colors hover:bg-secondary/70"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm text-foreground group-hover/link:text-primary transition-colors">
                    {link.title}
                  </span>
                  <ExternalLinkIcon className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover/link:opacity-100" />
                </div>
                {link.description && (
                  <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                    {link.description}
                  </p>
                )}
              </div>
              {link.tag && (
                <span className="shrink-0 rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                  {link.tag}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}
