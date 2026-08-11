"use client"

import { useState } from "react"
import Link from "next/link"
import {
  FileText, BarChart3, Network, ImageIcon, Link2, ClipboardList, 
  CalendarDays, Database, Workflow, CalendarCheck, Wrench, 
  ArrowUpRight, ChevronDown, type LucideIcon
} from "lucide-react"
import type { DirectorySection, DirectoryLink } from "@/lib/directory-data"
import { cn } from "@/lib/utils"

// ... (залиште тут ваш існуючий iconMap та accentMap без змін)

export function SectionCard({ section, forceOpen }: { section: DirectorySection; forceOpen?: boolean }) {
  const [open, setOpen] = useState(false)
  const isOpen = forceOpen ?? open
  const Icon = iconMap[section.icon]
  const accent = accentMap[section.accent]

  return (
    <section className={cn("group flex flex-col overflow-hidden rounded-3xl border border-border bg-card/90 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md", accent.hover)}>
      <span className={cn("h-1.5 w-full", accent.bar)} aria-hidden="true" />

      {/* Верхня частина картки */}
      <div className="flex items-start gap-4 p-5">
        <span className={cn("flex size-12 shrink-0 items-center justify-center rounded-2xl", accent.tile, accent.fg)}>
          <Icon className="size-6" />
        </span>
        
        <div className="min-w-0 flex-1">
          {section.id === "documents" || section.id === "analytics" ? (
            <Link
              href={`/${section.id}`}
              className="group/title inline-flex items-center gap-1.5 font-display text-lg font-semibold leading-tight text-foreground hover:text-primary transition-colors"
            >
              {section.title}
              <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover/title:opacity-100" />
            </Link>
          ) : (
            <h2 className="text-pretty font-display text-lg font-semibold leading-tight text-foreground">{section.title}</h2>
          )}
          
          {/* Клікабельний опис для розгортання */}
          <button 
            onClick={() => setOpen(!open)}
            className="mt-1 text-left text-pretty text-sm leading-relaxed text-muted-foreground hover:text-foreground transition-colors w-full"
          >
            {section.description}
          </button>
        </div>

        {/* Кнопка розгортання */}
        <button 
          onClick={() => setOpen(!open)}
          className="flex shrink-0 items-center gap-1.5 hover:bg-secondary p-1 rounded-full transition-colors"
        >
          <span className={cn("rounded-full px-2 py-0.5 text-xs font-semibold leading-none", accent.badge)}>
            {section.links.length}
          </span>
          <ChevronDown className={cn("size-4 text-muted-foreground transition-transform duration-200", isOpen && "rotate-180")} />
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-0.5 px-4 pb-4">
          {section.links.map((link) => <LinkRow key={link.title} link={link} badge={accent.badge} />)}
        </div>
      )}
    </section>
  )
}
