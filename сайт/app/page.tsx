import { Scissors, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"
import { BubblesBackground } from "@/components/bubbles-background"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  const documentsList = [
    { title: "Таблиця оренди", desc: "зведена адреси, вартості, термін дії", link: "#" },
    { title: "Документи майстрів", desc: "документи та договори оренди з майстрами", link: "#" },
    { title: "ФОП Мокляк А.Ю.", desc: "установчі по ФОП", link: "#" },
    { title: "Затоплення А2", desc: "", link: "#" },
    { title: "гугл форми", desc: "для майстрів та клієнтів", link: "#" },
    { title: "інвентаризація", desc: "остання 2026", link: "#" },
    { title: "паролі", desc: "остання 2026", link: "#" },
    { title: "старший перукар", desc: "", link: "#" },
    { title: "перевірка лайк", desc: "камери та чек лист", link: "#" },
    { title: "Шаблони документів", desc: "для друку", link: "#" },
  ]

  return (
    <div id="top" className="relative min-h-screen">
      <BubblesBackground />
      <SiteHeader />

      <main>
        {/* Хедер */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="mx-auto max-w-5xl px-5 py-14 text-center sm:py-20">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-1.5 text-sm font-medium text-secondary-foreground backdrop-blur">
              <Scissors className="size-4" aria-hidden="true" />
              Внутрішній довідник мережі
            </div>
            <h1 className="text-balance font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Лайк <span className="text-primary">hub</span> — все в одному місці
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Документи, аналітика, звіти, бази даних, платіжний календар, онлайн-запис, ремонт та відкриття точок.
              Натисніть на розділ, щоб побачити посилання, або скористайтесь пошуком.
            </p>
          </div>
        </section>

        {/* Головний контент / Сітка розділів */}
        <div id="rozdily" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-10 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Картка «Документи» із посиланням на /documents */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-emerald-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <Link href="/documents" className="font-bold text-lg text-gray-900 hover:text-emerald-700 transition-colors">
                        Документи ↗
                      </Link>
                      <p className="text-xs text-gray-500">Шаблони, бланки та таблиці</p>
                    </div>
                  </div>
                </div>

                {/* Список внутрішніх елементів у рамці */}
                <div className="space-y-2 mt-4 max-h-64 overflow-y-auto pr-1">
                  {documentsList.map((item, idx) => (
                    <a 
                      key={idx} 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block p-2.5 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm text-gray-800 group-hover:text-emerald-700 transition-colors">{item.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-600" />
                      </div>
                      {item.desc && <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Тут пізніше додамо інші розділи (Аналітика, Звіти тощо) */}

          </div>
        </div>

        <footer id="dovidka" className="scroll-mt-20 border-t border-border/60">
          <div className="mx-auto max-w-6xl px-5 py-6 text-center text-sm text-muted-foreground">
            Довідник мережі перукарень «Лайк» · оновлюйте посилання у файлі{" "}
            <code className="rounded bg-secondary px-1.5 py-0.5 text-xs text-secondary-foreground">
              lib/directory-data.ts
            </code>
          </div>
        </footer>
      </main>
    </div>
  )
}
