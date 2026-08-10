"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Розділи", href: "#rozdily" },
  { label: "Пошук", href: "#poshuk" },
  { label: "Довідка", href: "#dovidka" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-2 transition-transform active:scale-95">
          <Image
            src="/like-logo.png"
            alt="Лайк — твоя перукарня"
            width={132}
            height={48}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-secondary-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full text-foreground transition-transform active:scale-90 md:hidden"
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border/70 bg-card px-5 py-2 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-secondary-foreground active:scale-95"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  )
}
