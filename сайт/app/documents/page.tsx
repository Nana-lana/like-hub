import Link from 'next/link'
import { ArrowLeft, FileText, Folder, FileCheck, BookOpen, ExternalLink } from 'lucide-react'

export default function DocumentsPage() {
  const documents = [
    {
      title: "Папка «Документи»",
      description: "Загальна папка з усіма основними файлами та матеріалами.",
      link: "https://drive.google.com",
      icon: <Folder className="w-6 h-6 text-emerald-600" />,
      bgIcon: "bg-emerald-50",
      tag: "Google Drive"
    },
    {
      title: "Шаблони договорів",
      description: "Трудові договори, угоди та інші офіційні документи.",
      link: "https://docs.google.com",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      bgIcon: "bg-blue-50",
      tag: "Google Docs"
    },
    {
      title: "Бланки та форми",
      description: "Готові бланки для друку, заяви та внутрішні форми.",
      link: "https://drive.google.com",
      icon: <FileCheck className="w-6 h-6 text-purple-600" />,
      bgIcon: "bg-purple-50",
      tag: "Google Drive"
    },
    {
      title: "Інструкції та регламенти",
      description: "Покрокові керівництва для роботи та стандарти мережі.",
      link: "https://drive.google.com",
      icon: <BookOpen className="w-6 h-6 text-amber-600" />,
      bgIcon: "bg-amber-50",
      tag: "Google Docs"
    }
  ]

  return (
    <main className="min-h-screen bg-[#F8FAF9] p-6 md:p-12 relative overflow-hidden">
      {/* М'які розмиті кружечки на фоні для дизайну */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Кнопка повернення назад */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Назад на головну</span>
        </Link>

        {/* Шапка розділу */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-emerald-100/60 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-inner">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Документи</h1>
              <p className="text-gray-500 mt-1">Шаблони договорів, бланки, інструкції та інші матеріали на Google Диску.</p>
            </div>
          </div>
        </div>

        {/* Сітка карток із графічними іконками */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <a 
              key={index}
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-sm p-7 rounded-3xl border border-gray-100 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${doc.bgIcon} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {doc.icon}
                  </div>
                  <span className="text-xs bg-gray-50 text-gray-500 px-3 py-1.5 rounded-full flex items-center gap-1.5 font-medium group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                    {doc.tag} <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {doc.title}
                </h2>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-sm font-medium text-emerald-600">
                <span className="group-hover:underline">Відкрити розділ</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
