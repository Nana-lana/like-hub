import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Globe, Share2, Activity, ExternalLink } from "lucide-react"

export default function LinksPage() {
  // Список посилань відповідно до ваших вимог
  const links = [
    {
      title: "Трелло",
      description: "Задачі та проєкти мережі",
      url: "https://trello.com/b/WTc7A7BO/%D0%BB%D0%B0%D0%B9%D0%BA-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D1%96",
      tag: "Task Tracker",
    },
    {
      title: "Ноушин",
      description: "База знань та документація",
      url: "https://app.notion.com/p/Home-page-97b705bb22ed4a75851492edc2b9b7a1",
      tag: "Docs",
    },
    {
      title: "Вланч для клієнтів",
      description: "Клієнтський інтерфейс запису",
      url: "https://w.wlaunch.net/i/like.poltava/b?utm_source=google_organic&utm_medium=organic&utm_campaign=search_system",
      tag: "Booking",
    },
    {
      title: "Вланч адмінів",
      description: "Адміністративна панель",
      url: "https://wlaunch.net/uk-ua/?utm_source=google&utm_medium=cpc&utm_campaign=g_search_kwd_brand_ua&utm_content=797700846470&utm_term=%D0%B2%D0%BB%D0%B0%D0%BD%D1%87&gad_source=1&gad_campaignid=23579400877&gbraid=0AAAAAC1TOPBudImZukMPU25pquQj_KWNv&gclid=Cj0KCQjw5P7UBhDaARIsAOSlS1N9HgQYfzIwSJaV_bBQcbBNfJBPZnrDYuVHiJqNWdUn1S44kncGeccaAkAgEALw_wcB",
      tag: "Admin",
    },
    {
      title: "Інстаграм",
      description: "Офіційна сторінка мережі",
      url: "https://www.instagram.com/like.poltava?stkn=MXUxOXV3YjhubHkwaA==",
      tag: "Social",
    },
    {
      title: "Фейсбук",
      description: "Сторінка у Facebook",
      url: "https://uk-ua.facebook.com/profile.php?id=100082208621231&name=xhp_ntfbaction__open_user",
      tag: "Social",
    },
    {
      title: "Тікток",
      description: "Відео та контент",
      url: "https://www.tiktok.com/@like.poltava",
      tag: "Social",
    },
    {
      title: "Телеграм",
      description: "Комунікація та канал",
      url: "https://t.me/likepoltava",
      tag: "Messenger",
    },
    {
      title: "Міро",
      description: "Інтерактивна дошка",
      url: "https://miro.com/ru/",
      tag: "Workspace",
    },
    {
      title: "Сайт",
      description: "Головний вебсайт мережі",
      url: "https://like.in.ua/",
      tag: "Web",
    },
    {
      title: "Гугл скрипт",
      description: "Автоматизація та скрипти",
      url: "https://script.google.com/u/0/home/projects/125zhaTCAnXYq8wxUIj_LJDWOgmI75pxMRhharY91ss6Su3WGxgq61BOJ/edit",
      tag: "Dev",
    },
  ]

  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="mx-auto max-w-6xl">
        {/* Кнопка назад */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="size-4" />
          Назад до головної
        </Link>

        {/* Шапка сторінки з градієнтним фоном та свіченням */}
        <div 
          className="relative mb-10 overflow-hidden rounded-3xl border border-border bg-card/90 p-8 shadow-sm backdrop-blur-sm"
          style={{
            background: `linear-gradient(135deg, var(--card) 60%, oklch(0.92 0.05 180 / 0.4) 100%)`,
            borderColor: `oklch(0.82 0.08 180 / 0.4)`,
          }}
        >
          <div
            className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full blur-3xl"
            style={{ background: `oklch(0.82 0.09 180 / 0.5)` }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <span 
              className="flex size-16 shrink-0 items-center justify-center rounded-2xl text-white shadow-md"
              style={{
                background: `linear-gradient(135deg, oklch(0.6 0.15 180), oklch(0.45 0.14 180))`,
              }}
            >
              <Globe className="size-8" />
            </span>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Посилання
              </h1>
              <p className="mt-1 text-muted-foreground text-base">
                Мережа корисних сервісів, платформ та швидких посилань.
              </p>
            </div>
          </div>
        </div>

        {/* Ефект мережі / Всесвітньої павутини (сітка з плаваючими елементами) */}
        <div className="relative rounded-3xl border border-border bg-card/50 p-8 md:p-12 shadow-sm backdrop-blur-sm overflow-hidden">
          {/* Декоративні лінії павутини на фоні */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-muted/20 to-transparent pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {links.map((link, idx) => {
              const isReal = link.url.startsWith("http")

              return (
                <a
                  key={idx}
                  href={link.url}
                  target={isReal ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-border/60 bg-card/80 shadow-sm transition-all duration-300 hover:scale-105 hover:border-[oklch(0.6_0.15_180)] hover:shadow-lg hover:bg-card text-center"
                >
                  <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="size-3.5 text-muted-foreground" />
                  </span>
                  
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[oklch(0.93_0.04_180)] text-[oklch(0.45_0.14_180)] mb-3 transition-transform group-hover:rotate-6">
                    <Share2 className="size-6" />
                  </div>

                  <span className="font-display text-sm font-semibold text-foreground group-hover:text-[oklch(0.45_0.14_180)] transition-colors">
                    {link.title}
                  </span>

                  {link.tag && (
                    <span className="mt-2 rounded-full bg-[oklch(0.94_0.03_180)] px-2 py-0.5 text-[10px] font-medium text-[oklch(0.4_0.12_180)]">
                      {link.tag}
                    </span>
                  )}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
