import type { LucideIcon } from "lucide-react"

interface PageHeaderProps {
  icon: LucideIcon
  title: string
  description: string
  hue: number
}

export function PageHeader({ icon: Icon, title, description, hue }: PageHeaderProps) {
  return (
    <div className="relative mb-10 overflow-hidden rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm md:p-8">
      <div
        className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full blur-3xl"
        style={{ background: `oklch(0.82 0.09 ${hue} / 0.5)` }}
        aria-hidden="true"
      />
      <div className="relative flex items-center gap-5">
        <span
          className="flex size-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-md"
          style={{
            background: `linear-gradient(135deg, oklch(0.68 0.13 ${hue}), oklch(0.55 0.14 ${hue + 20}))`,
          }}
        >
          <Icon className="size-7" />
        </span>
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {title}
          </h1>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
