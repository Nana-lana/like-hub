import Link from 'next/link'
import { ArrowLeft, ExternalLink, FileText } from 'lucide-react'

export default function DocumentsPage() {
  const documents = [
    {
      title: "Таблиця оренди ",
      description: "зведена адреси, вартості, термін дії",
      link: "https://drive.google.com/drive/folders/1jUgVc2NvwF_rE4glyFjlo-jZEB1RAfD5?usp=drive_link"
    },
    {
      title: "Документи майстрів →",
      description: "документи та договори оренди з майстрами",
      link: "https://drive.google.com/drive/folders/1myvZDZIz0FT6ufRDV00HGUF9f_UNlEI5?usp=sharing"
    },
    {
      title: "ФОП Мокляк А.Ю. →",
      description: "установчі по ФОП",
      link: "https://drive.google.com/drive/folders/1UQS73cLGyuigKAY6Q2Z2Ig6PQ1tKHJKA?usp=drive_link"
    },
    {
      title: "Затоплення А2 →",
      description: "",
      link: "https://drive.google.com/drive/folders/1vmvfnRsDvQz-T0YaQTgMbymgTpdSknsJ?usp=drive_link"
    },
    {
      title: "гугл форми →",
      description: "для майстрів та клієнтів",
      link: "https://drive.google.com/drive/folders/1fcQDBz06bBGBdGnao6vLrel8BKAKv4ch?usp=drive_link"
    },
    {
      title: "інвентаризація →",
      description: "остання 2026",
      link: "https://drive.google.com/drive/folders/1xt4Qa7fkLbarXcI_KD4kwpIxorb0V4d1?usp=drive_link"
    },
    {
      title: "паролі →",
      description: "остання 2026",
      link: "https://drive.google.com/drive/folders/1jNNUatyG4Rbmdozju-I6iNxGJEhreK6z?usp=drive_link"
    },
    {
      title: "старший перукар →",
      description: "",
      link: "https://drive.google.com/drive/folders/1ZMPCElRbuIhnWNsGwUjsSnfaTJAvTav2?usp=drive_link"
    },
    {
      title: "перевірка лайк →",
      description: "камери та чек лист",
      link: "https://drive.google.com/drive/folders/1SAJCg0lWdpWcMN50XJRtVl91CMkutKuT?usp=drive_link"
    },
    {
      title: "Шаблони документів →",
      description: "для друку",
      link: "https://drive.google.com/drive/folders/1UXuf91q9s56q7AIRXhG-R7wosRYWEFk0?usp=drive_link"
    }
  ]

  return (
    <main className="min-h-screen bg-[#F8FAF9] p-6 md:p-12 relative overflow-hidden">
      {/* М'які розмиті кружечки на фоні */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Кнопка назад */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Назад на головну</span>
        </Link>

        {/* Заголовок */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-emerald-100/60 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#6B7D9E]/10 flex items-center justify-center text-[#6B7D9E]">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Документи</h1>
              <p className="text-gray-500 mt-1">Усі робочі матеріали, таблиці та посилання на Google Диску.</p>
            </div>
          </div>
        </div>

        {/* Сітка карток згідно з вашим макетом */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <a 
              key={index}
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl border border-gray-100 hover:border-[#6B7D9E]/50 hover:shadow-xl hover:shadow-gray-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-4 py-2 rounded-2xl bg-[#6B7D9E]/1{-...} text-[#4A5D7E] font-semibold group-hover:bg-[#6B7D9E] group-hover:text-white transition-colors text-lg">
                    {doc.title}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#6B7D9E] transition-colors" />
                </div>
                {doc.description && (
                  <p className="text-gray-500 text-sm leading-relaxed mt-2">
                    {doc.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
