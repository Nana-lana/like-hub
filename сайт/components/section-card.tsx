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

  // Якщо у розділа є окрема сторінка, вся верхня частина стає посиланням-контейнером
  const CardWrapper = hasDedicatedPage ? Link : "div"
  const wrapperProps = hasDedicatedPage ? { href: `/${section.id}` } : {}

  return (
    <div
      onClick={() => {
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
      {/* Клікабельний контейнер для сторінок або звичайний блок */}
      <CardWrapper
        {...wrapperProps}
        className={cn(
          "flex items-start justify-between gap-4 block w-full text-left",
          hasDedicatedPage && "cursor-pointer"
        )}
      >
        <div className="flex items-start gap-4 min-w-0 flex-1">
          {/* Іконка або бейдж розділу (якщо є у вашому дизайні) */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-pretty font-display text-lg font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                {section.title}
              </h2>
              {hasDedicatedPage && (
                <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100 text-primary" />
              )}
            </div>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
              {section.description}
            </p>
          </div>
        </div>

        {/* Стрілочка розгортання лише для звичайних карток із підменю */}
        {!hasDedicatedPage && section.links.length > 0 && (
          <div
            className={cn(
              "flex size-9 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-secondary/50 text-muted-foreground transition-transform duration-200",
              expanded && "rotate-180 bg-secondary text-foreground",
            )}
          >
            <ChevronDown className="size-4" />
          </div>
        )}
      </CardWrapper>

      {/* Випадаючий список для звичайних карток (якщо є посилання і картка розгорнута) */}
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
