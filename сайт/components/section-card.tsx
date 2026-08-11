<div className="min-w-0 flex-1">
  {section.id === "documents" || 
   section.id === "analytics" || 
   section.id === "structure" || 
   section.id === "pos" ? (
    <div className="relative z-[100]">
      <Link
        href={`/${section.id}`}
        className="group/title inline-flex items-center gap-1.5 font-display text-lg font-semibold leading-tight text-foreground hover:text-primary transition-colors cursor-pointer"
        style={{ pointerEvents: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        {section.title}
        <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover/title:opacity-100" />
      </Link>
    </div>
  ) : (
    <h2 className="text-pretty font-display text-lg font-semibold leading-tight text-foreground">
      {section.title}
    </h2>
  )}
  {/* ... далі опис ... */}
</div>
