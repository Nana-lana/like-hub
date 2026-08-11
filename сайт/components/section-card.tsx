"use client"

import { useState } from "react"
import Link from "next/link"
import {
  FileText,
  BarChart3,
  Network,
  ImageIcon,
  Link2,
  ClipboardList,
  CalendarDays,
  Database,
  Workflow,
  CalendarCheck,
  Wrench,
  ArrowUpRight,
  ChevronDown,
  type LucideIcon,
} from "lucide-react"
import type { DirectorySection, DirectoryLink } from "@/lib/directory-data"
import { cn } from "@/lib/utils"

const iconMap: Record<DirectorySection["icon"], LucideIcon> = {
  documents: FileText,
  analytics: BarChart3,
  structure: Network,
  pos: ImageIcon,
  links: Link2,
  reports: ClipboardList,
  payments: CalendarDays,
  database: Database,
  process: Workflow,
  booking: CalendarCheck,
  repair: Wrench,
}

type AccentStyle = {
  /** мʼякий фон плитки іконки */
  tile: string
  /** колір самої іконки/акценту */
  fg: string
  /** мітка */
  badge: string
  /** верхня смужка-акцент */
  bar: string
  /** підсвітка рамки при наведенні */
  hover: string
}

const accentMap: Record<DirectorySection["accent"], AccentStyle> = {
  green: {
    tile: "bg-[oklch(0.93_0.05_158)]",
    fg: "text-[oklch(0.5_0.11_158)]",
    badge: "bg-[oklch(0.94_0.04_158)] text-[oklch(0.45_0.09_158)]",
    bar: "bg-[oklch(0.66_0.11_158)]",
    hover: "hover:border-[oklch(0.66_0.11_158)]",
  },
  purple: {
    tile: "bg-[oklch(0.93_0.05_300)]",
    fg: "text-[oklch(0.5_0.13_300)]",
    badge: "bg-[oklch(0.94_0.045_300)] text-[oklch(0.45_0.11_300)]",
    bar: "bg-[oklch(0.62_0.13_300)]",
    hover: "hover:border-[oklch(0.62_0.13_300)]",
  },
  teal: {
    tile: "bg-[oklch(0.93_0.05_195)]",
    fg: "text-[oklch(0.48_0.09_195)]",
    badge: "bg-[oklch(0.94_0.04_195)] text-[oklch(0.44_0.08_195)]",
    bar: "bg-[oklch(0.62_0.1_195)]",
    hover: "hover:border-[oklch(0.62_0.1_195)]",
  },
  amber: {
    tile: "bg-[oklch(0.94_0.06_78)]",
    fg: "text-[oklch(0.52_0.1_62)]",
    badge: "bg-[oklch(0.95_0.05_78)] text-[oklch(0.48_0.09_62)]",
    bar: "bg-[oklch(0.75_0.12_70)]",
    hover: "hover:border-[oklch(0.75_0.12_70)]",
  },
  pink: {
    tile: "bg-[oklch(0.94_0.05_350)]",
    fg: "text-[oklch(0.52_0.13_350)]",
    badge: "bg-[oklch(0.95_0.04_350)] text-[oklch(0.48_0.11_350)]",
    bar: "bg-[oklch(0.68_0.13_350)]",
    hover: "hover:border-[oklch(0.68_0.13_350)]",
  },
  blue: {
    tile: "bg-[oklch(0.93_0.05_255)]",
    fg: "text-[oklch(0.5_0.13_255)]",
    badge: "bg-[oklch(0.94_0.045_255)] text-[oklch(0.46_0.11_255)]",
    bar: "bg-[oklch(0.6_0.14_255)]",
    hover: "hover:border-[oklch(0.6_0.14_255)]",
  },
  lime: {
    tile: "bg-[oklch(0.94_0.06_130)]",
    fg: "text-[oklch(0.5_0.11_135)]",
    badge: "bg-[oklch(0.95_0.05_130)] text-[oklch(0.46_0.1_135)]",
    bar: "bg-[oklch(0.72_0.13_130)]",
    hover: "hover:border-[oklch(0.72_0.13_130)]",
  },
  violet: {
    tile: "bg-[oklch(0.93_0.05_290)]",
    fg: "text-[oklch(0.5_0.14_290)]",
    badge: "bg-[oklch(0.94_0.045_290)] text-[oklch(0.46_0.12_290)]",
    bar: "bg-[oklch(0.58_0.16_290)]",
    hover: "hover:border-[oklch(0.58_0.16_290)]",
  },
}

function LinkRow({ link, badge }: { link: DirectoryLink; badge: string }) {
  const isReal = link.url.startsWith("http")
  return (
    <a
      href={link.url}
      target={isReal ? "_blank" : undefined}
      rel="noreferrer"
      className="group/link flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 transition-all hover:bg-secondary active:scale-[0.98]"
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-foreground">{link.title}</span>
          {link.tag ? (
            <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-medium leading-none", badge)}>
              {link.tag}
            </span>
          ) : null}
        </div>
        {link.description ? (
          <p className="mt-0.5 truncate text-xs text-muted-foreground">{link.description}</p>
        ) : null}
      </div>
      <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-foreground" />
    </a>
  )
}

export function SectionCard({ section, forceOpen }: { section: DirectorySection; forceOpen?: boolean }) {
  const [open, setOpen] = useState(false)
  const isOpen = forceOpen ?? open
  const Icon = iconMap[section.icon]
  const accent = accentMap[section.accent]

  return (
    <section
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-border bg-card/90 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
        accent.hover,
      )}
      aria-labelledby={`section-${section.id}`}
    >
      <span className={cn("h-1.5 w-full", accent.bar)} aria-hidden="true" />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={`links-${section.id}`}
        className="flex items-start gap-4 p-5 text-left transition-transform duration-100 active:scale-[0.98]"
      >
        <span
          className={cn("flex size-12 shrink-0 items-center justify-center rounded-2xl", accent.tile, accent.fg)}
          aria-hidden="true"
        >
          <Icon className="size-6" />
        </span>
        <div className="min-w-0 flex-1">
          {section.id === "documents" || section.id === "analytics" ? (
            <Link
              href={`/${section.id}`}
              onClick={(e) => e.stopPropagation()}
              className="group/title inline-flex items-center gap-1.5 font-display text-lg font-semibold leading-tight text-foreground hover:text-primary transition-colors"
            >
              {section.title}
              <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover/title:opacity-100" />
            </Link>
          ) : (
            <h2
              id={`section-${section.id}`}
              className="text-pretty font-display text-lg font-semibold leading-tight text-foreground"
            >
              {section.title}
            </h2>
          )}
          <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">{section.description}</p>
        </div>
        <span className="flex shrink-0 items-center gap-1.5">
          <span className={cn("rounded-full px-2 py-0.5 text-xs font-semibold leading-none", accent.badge)}>
            {section.links.length}
          </span>
          <ChevronDown
            className={cn(
              "size-4 text-muted-foreground transition-transform duration-200",
              isOpen && "rotate-180",
            )}
            aria-hidden="true"
          />
        </span>
      </button>

      {isOpen ? (
        <div id={`links-${section.id}`} className="flex flex-col gap-0.5 px-4 pb-4">
          {section.links.length > 0 ? (
            section.links.map((link) => <LinkRow key={link.title} link={link} badge={accent.badge} />)
          ) : (
            <p className="rounded-xl bg-secondary px-3 py-4 text-center text-sm text-muted-foreground">
              Поки що немає посилань
            </p>
          )}
        </div>
      ) : null}
    </section>
  )
}
