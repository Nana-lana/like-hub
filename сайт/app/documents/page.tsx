import Link from "next/link"
import { ArrowLeft, ExternalLink, FileText, Table, Users, Building2, KeyRound, UserCheck, Files, Layers, Contact, Gift } from "lucide-react"
import { PageHeader } from "@/components/page-header"

// Основні документи / загальні розділи
const generalDocuments = [
  {
    title: "Таблиця оренди",
    description: "Зведена адреси, вартості, термін дії",
    url: "https://drive.google.com/drive/folders/1jUgVc2NvwF_rE4glyFjlo-jZEB1RAfD5?usp=drive_link",
    tag: "Google Drive",
    icon: Table,
  },
  {
    title: "ФОП Мокляк А.Ю.",
    description: "Установчі по ФОП",
    url: "https://drive.google.com/drive/folders/1UQS73cLGyuigKAY6Q2Z2Ig6PQ1tKHJKA?usp=drive_link",
    tag: "Google Drive",
    icon: Building2,
  },
  {
    title: "Паролі",
    description: "Остання 2026",
    url: "https://drive.google.com/drive/folders/1jNNUatyG4Rbmdozju-I6iNxGJEhreK6z?usp=drive_link",
    tag: "Secure",
    icon: KeyRound,
  },
  {
    title: "Шаблони документів",
    description: "Для друку",
    url: "https://drive.google.com/drive/folders/1UXuf91q9s56q7AIRXhG-R7wosRYWEFk0?usp=drive_link",
    tag: "Google Docs",
    icon: Files,
  },
]

// Блок: Робота з майстрами (без Гугл форм та Перевірки лайк)
const mastersDocuments = [
  {
    title: "Документи майстрів",
    description: "Документи та договори оренди з майстрами",
    url: "https://drive.google.com/drive/folders/1myvZDZIz0FT6ufRDV00HGUF9f_UNlEI5?usp=sharing",
    tag: "Google Drive",
    icon: Users,
  },
  {
    title: "Контакти майстрів",
    description: "Актуальна база контактів та телефонів",
    url: "https://docs.google.com/spreadsheets/d/1tNsxLgJv8wNfud_35dTdQv5Ev3zan_Th/edit?usp=drive_link&ouid=112373292964682302363&rtpof=true&sd=true",
    tag: "Google Sheets",
    icon: Contact,
  },
  {
    title: "Книга перукаря та опитування",
    description: "Інструкції, обов'язки та форми для майстрів",
    url: "https://drive.google.com/drive/folders/1Sh_A8iXYeqbZZtBjLIZq78pdOEfcvbYr?usp=drive_link",
    tag: "Google Drive",
    icon: UserCheck,
  },
]

// Дані днів народжень майстрів по місяцях
const birthdaysByMonth = [
  {
    month: "Лютий",
    items: [
      { date: "18.02", name: "Мамчич Віта" },
      { date: "19.02", name: "Грушевська Мирослава" },
      { date: "28.02", name: "Камуз Ольга" },
    ],
  },
  {
    month: "Березень",
    items: [{ date: "20.03", name: "Горнило Дарія" }],
  },
  {
    month: "Квітень",
    items: [{ date: "06.04", name: "Верхола Ларіса" }],
  },
  {
    month: "Травень",
    items: [{ date: "11.05", name: "Бугай Юлія" }],
  },
  {
    month: "Червень",
    items: [
      { date: "13.06", name: "Аня Кощенко" },
      { date: "16.06", name: "Дядюн Юлія" },
      { date: "21.06", name: "Венько Світлана" },
      { date: "25.06", name: "Пронькіна Вероніка" },
    ],
  },
  {
    month: "Липень",
    items: [
      { date: "13.07", name: "Яковенко Наташа" },
      { date: "29.07", name: "Жовта Наталія" },
    ],
  },
  {
    month: "Серпень",
    items: [
      { date: "03.08", name: "Пантюк Лера" },
      { date: "07.08", name: "Гузьома Вікторія" },
      { date: "18.08", name: "Діана Бойко" },
      { date: "20.08", name: "Темна Катя" },
    ],
  },
  {
    month: "Жовтень",
    items: [
      { date: "01.10", name: "Кубинець Ольга" },
      { date: "03.10", name: "Єгорова Людмила" },
      { date: "06.10", name: "Лапіга Світлана" },
      { date: "14.10", name: "Ольга Лісюченко" },
      { date: "19.10", name: "Шамрай Света" },
    ],
  },
  {
    month: "Грудень",
    items: [{ date: "19.12", name: "Сахно Наташа" }],
  },
]

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground mb-8"
        >
          <ArrowLeft className="size-4" />
          Назад на головну
        </Link>

        <PageHeader
          icon={FileText}
          title="Документи"
          description="Усі робочі матеріали, таблиці та посилання на Google Диску мережі «Лайк»."
          hue={158}
        />

        {/* Секція 1: Загальні документи */}
        <section className="mb-12">
          <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Layers className="size-5 text-[oklch(0.5_0.11_158)]" />
            Загальні документи та управління
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {generalDocuments.map((item) => {
              const isReal = item.url.startsWith("http")
              const IconComponent = item.icon
              return (
                <a
                  key={item.title}
                  href={item.url}
                  target={isReal ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[oklch(0.66_0.11_158)] hover:shadow-md overflow-hidden"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.93_0.05_158)] text-[oklch(0.5_0.11_158)] shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <IconComponent className="size-7" />
                      </div>
                      <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </div>
                    
                    <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-[oklch(0.5_0.11_158)] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    
                    {item.description ? (
                      <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    ) : null}
                  </div>

                  {item.tag ? (
                    <div className="mt-6 pt-3 border-t border-border/40 flex items-center">
                      <span className="rounded-full bg-[oklch(0.94_0.04_158)] px-2.5 py-1 text-[11px] font-medium text-[oklch(0.45_0.09_158)] leading-none">
                        {item.tag}
                      </span>
                    </div>
                  ) : null}
                </a>
              )
            })}
          </div>
        </section>

        {/* Секція 2: Робота з майстрами */}
        <section className="mb-12">
          <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Users className="size-5 text-[oklch(0.5_0.11_158)]" />
            Робота з майстрами
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mastersDocuments.map((item) => {
              const isReal = item.url.startsWith("http")
              const IconComponent = item.icon
              return (
                <a
                  key={item.title}
                  href={item.url}
                  target={isReal ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[oklch(0.66_0.11_158)] hover:shadow-md overflow-hidden"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.93_0.05_158)] text-[oklch(0.5_0.11_158)] shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <IconComponent className="size-7" />
                      </div>
                      <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </div>
                    
                    <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-[oklch(0.5_0.11_158)] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    
                    {item.description ? (
                      <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    ) : null}
                  </div>

                  {item.tag ? (
                    <div className="mt-6 pt-3 border-t border-border/40 flex items-center">
                      <span className="rounded-full bg-[oklch(0.94_0.04_158)] px-2.5 py-1 text-[11px] font-medium text-[oklch(0.45_0.09_158)] leading-none">
                        {item.tag}
                      </span>
                    </div>
                  ) : null}
                </a>
              )
            })}
          </div>
        </section>

        {/* Секція 3: Дні народження майстрів */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Gift className="size-5 text-[oklch(0.5_0.11_158)]" />
            Дні народження майстрів
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {birthdaysByMonth.map((group) => (
              <div
                key={group.month}
                className="rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm"
              >
                <h3 className="font-display font-semibold text-lg text-[oklch(0.5_0.11_158)] mb-4 pb-2 border-b border-border/40">
                  {group.month}
                </h3>
                <ul className="space-y-2.5">
                  {group.items.map((person, idx) => (
                    <li key={idx} className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{person.name}</span>
                      <span className="rounded-full bg-[oklch(0.94_0.04_158)] px-2.5 py-0.5 text-xs font-semibold text-[oklch(0.45_0.09_158)]">
                        {person.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
