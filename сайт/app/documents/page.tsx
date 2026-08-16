import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  ExternalLink,
  Table,
  Users,
  Building2,
  Droplets,
  FolderInput,
  ClipboardCheck,
  KeyRound,
  UserCheck,
  CheckSquare,
  Files,
} from "lucide-react";

const documentsList = [
  {
    title: "Таблиця оренди",
    description: "Зведена адреси, вартості, термін дії",
    url: "https://drive.google.com/drive/folders/1jUgVc2NvwF_rE4glyFjlo-jZEB1RAfD5?usp=drive_link",
    tag: "Google Drive",
    icon: Table,
  },
  {
    title: "Документи майстрів",
    description: "Документи та договори оренди з майстрами",
    url: "https://drive.google.com/drive/folders/1myvZDZIz0FT6ufRDV00HGUF9f_UNlEI5?usp=sharing",
    tag: "Google Drive",
    icon: Users,
  },
  {
    title: "ФОП Мокляк А.Ю.",
    description: "Установчі по ФОП",
    url: "https://drive.google.com/drive/folders/1UQS73cLGyuigKAY6Q2Z2Ig6PQ1tKHJKA?usp=drive_link",
    tag: "Google Drive",
    icon: Building2,
  },
  {
    title: "Затоплення Л2",
    description: "Матеріали по інциденту",
    url: "https://drive.google.com/drive/folders/1vmvfnRsDvQz-T0YaQTgMbymgTpdSknsJ?usp=drive_link",
    tag: "Google Drive",
    icon: Droplets,
  },
  {
    title: "Гугл форми",
    description: "Для майстрів та клієнтів",
    url: "https://drive.google.com/drive/folders/1fcQDBz06bBGBdGnao6vLrel8BKAKv4ch?usp=drive_link",
    tag: "Google Forms",
    icon: FolderInput,
  },
  {
    title: "Інвентаризація",
    description: "Остання 2026",
    url: "https://drive.google.com/drive/folders/1xt4Qa7fkLbarXcI_KD4kwpIxorb0V4d1?usp=drive_link",
    tag: "Google Sheets",
    icon: ClipboardCheck,
  },
  {
    title: "Паролі",
    description: "Остання 2026",
    url: "https://drive.google.com/drive/folders/1jNNUatyG4Rbmdozju-I6iNxGJEhreK6z?usp=drive_link",
    tag: "Secure",
    icon: KeyRound,
  },
  {
    title: "Старший перукар",
    description: "Інструкції та обов'язки",
    url: "https://drive.google.com/drive/folders/1ZMPCElRbuIhnWNsGwUjsSnfaTJAvTav2?usp=drive_link",
    tag: "Google Drive",
    icon: UserCheck,
  },
  {
    title: "Перевірка лайк",
    description: "Камери та чек-лист",
    url: "https://drive.google.com/drive/folders/1SAJCg0lWdpWcMN50XJRtVl91CMkutKuT?usp=drive_link",
    tag: "Checklist",
    icon: CheckSquare,
  },
  {
    title: "Шаблони документів",
    description: "Для друку",
    url: "https://drive.google.com/drive/folders/1UXuf91q9s56q7AIRXhG-R7wosRYWEFk0?usp=drive_link",
    tag: "Google Docs",
    icon: Files,
  },
];

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50/80 to-zinc-100/60 px-4 py-10 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Кнопка повернення */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 text-sm font-medium text-zinc-500 transition-all hover:text-zinc-900 mb-12"
        >
          <span className="rounded-full border border-zinc-200 bg-white/80 p-1.5 shadow-sm transition-colors group-hover:border-zinc-300 group-hover:bg-zinc-50">
            <ArrowLeft className="size-3.5" />
          </span>
          <span className="tracking-wide">Назад на головну</span>
        </Link>

        {/* Шапка розділу */}
        <div className="relative mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-white/80 shadow-sm ring-1 ring-zinc-200/50 text-zinc-700">
                  <FileText className="size-6" />
                </span>
                <div>
                  <h1 className="text-3xl font-light tracking-tight text-zinc-900 sm:text-4xl">
                    Документи
                  </h1>
                  <p className="mt-1 text-sm text-zinc-500 font-light tracking-wide">
                    Усі робочі матеріали, таблиці та посилання
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                {documentsList.length} ресурсів
              </span>
            </div>
          </div>
          <div className="absolute -bottom-3 left-0 h-px w-16 bg-zinc-200/80" />
        </div>

        {/* Сітка карток */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {documentsList.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col rounded-3xl border border-zinc-200/70 bg-white/80 p-7 shadow-sm transition-all duration-300 hover:border-zinc-300 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1.5"
              >
                {/* Верхня лінія акценту */}
                <span className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4 mb-5">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-zinc-100/70 text-zinc-600 transition-colors group-hover:bg-zinc-200/70 group-hover:text-zinc-800">
                    <IconComponent className="size-5" />
                  </span>
                  <ExternalLink className="size-4 shrink-0 text-zinc-400 transition-all duration-300 group-hover:text-zinc-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <div>
                  <h2 className="text-lg font-medium tracking-tight text-zinc-800 transition-colors group-hover:text-zinc-950">
                    {item.title}
                  </h2>
                  {item.description && (
                    <p className="mt-1.5 text-sm font-light text-zinc-500 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                {item.tag && (
                  <div className="mt-6 pt-4 border-t border-zinc-200/50 flex items-center">
                    <span className="rounded-full bg-zinc-100/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-zinc-600 transition-colors group-hover:bg-zinc-200/70">
                      {item.tag}
                    </span>
                  </div>
                )}
              </a>
            );
          })}
        </div>

        {/* Нижній декоративний елемент */}
        <div className="mt-16 flex justify-center">
          <span className="inline-flex h-px w-24 bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
        </div>
      </div>
    </main>
  );
}
