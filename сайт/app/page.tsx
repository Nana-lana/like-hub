import { directoryGroups } from "@/lib/directory-data"
import { ArrowUpRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {directoryGroups.map((group) => (
        <section key={group.id} className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {group.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.links.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group relative flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
                >
                  {/* Іконка або логотип */}
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-secondary/50 text-primary transition-colors group-hover:border-primary/50">
                    {link.logo ? (
                      <img src={link.logo} alt="" className="size-6 object-contain" />
                    ) : (
                      <Icon className="size-6" />
                    )}
                  </div>

                  {/* Текстовий опис */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 font-semibold text-foreground group-hover:text-primary transition-colors">
                      <span className="truncate">{link.title}</span>
                      {link.external && <ArrowUpRight className="size-4 shrink-0 opacity-70" />}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {link.description}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
