"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, ChevronDown, ExternalLink } from "lucide-react"
import type { directory } from "@/lib/directory-data"

interface SectionCardProps {
  section: (typeof directory)[number]
  forceOpen?: boolean
}

export function SectionCard({ section, forceOpen }: SectionCardProps) {
  const [isOpen, setIsOpen] = useState(true)

  const isSpecialSection = ["documents", "analytics", "structure", "pos"].includes(section.id)
  const expanded = forceOpen ?? isOpen

  return (
    <div className="group relative flex flex-col rounded-3xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-200 hover:border-border hover:shadow-md">
      {/* Шапка картки */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          {isSpecialSection ? (
            <div className="relative z-10">
              <Link
                href={`/${section.id}`}
                className="group/title inline-flex items-center gap-1.5 font-display text-lg font-semibold leading-tight text-foreground hover:text-primary transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {section.title}
                <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover/title:opacity-100" />
              </Link>
            </div>
          ) : (
            <h2 className="font-display text-lg font-semibold leading-tight text-foreground">
              {section.title}
            </h2>
          )}
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {section.description}
          </p>
        </div>

        {!forceOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform hover:bg-secondary/80"
            aria-label="Згорнути/розгорнути розділ"
          >
            <ChevronDown className={`size-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>

      {/* Список посилань у картці */}
      {expanded && (
        <div className="mt-5 flex flex-col gap-2.5 border-t border-border/55 pt-4">
          {section.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center justify-between gap-3 rounded-xl p-2.5 text-sm transition-colors hover:bg-secondary/60"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground group-hover/link:text-primary transition-colors truncate">
                    {link.title}
                  </span>
                  {link.tag && (
                    <span className="shrink-0 rounded-md bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-secondary-foreground">
                      {link.tag}
                    </span>
                  )}
                </div>
                {link.description && (
                  <p className="mt-0.5 text-xs text-muted-foreground truncate">
                    {link.description}
                  </p>
                )}
              </div>
              <ExternalLink className="size-4 shrink-0 text-muted-foreground opacity-40 transition-opacity group-hover/link:opacity-100" />
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
