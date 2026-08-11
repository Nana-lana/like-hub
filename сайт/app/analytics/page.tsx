"use client"

import Link from "next/link"
import { ArrowLeft, BarChart3, ExternalLink, TrendingUp, Users, CalendarX, CheckCircle2 } from "lucide-react"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts"

const analyticsLinks = [
  {
    title: "Онлайн записи",
    description: "Аналітика записів + дашборд",
    url: "https://docs.google.com/spreadsheets/d/13UXuajgArxGT7viYGuACFO0T_tFIiaJykuHBmoGyrCM/edit?usp=drive_link",
    tag: "Google Sheets",
  },
  {
    title: "Карта перукарень",
    description: "Перукарні м. Полтава",
    url: "https://www.google.com/maps/d/edit?mid=1EX0hDXrliu1aSZ3Rly3P8tiIMVJzP64&usp=drive_link",
    tag: "Google Maps",
  },
  {
    title: "Аналіз 2025",
    description: "Сер. к-ть чеків, бази клієнтів",
    url: "https://drive.google.com/drive/folders/1kI-uvxV-WmaiFhix6vSog8X3p7sE94EN?usp=drive_link",
    tag: "Google Drive",
  },
  {
    title: "Швидкість майстра",
    description: "Середня швидкість 2025",
    url: "https://docs.google.com/spreadsheets/d/1PAWBNjmXqm1nhvFuiyFBLJcEjsTvyslB/edit?usp=drive_link&ouid=112373292964682302363&rtpof=true&sd=true",
    tag: "Google Sheets",
  },
  {
    title: "Аналіз ринку",
    description: "Порівняння цін, конкуренти",
    url: "https://drive.google.com/drive/folders/1dqTEH4v2Dm_eldk88LlEBhTl2Yuqqz6E?usp=drive_link",
    tag: "Google Drive",
  },
]

const monthlyData = [
  { month: "Січ", записи: 420, скасовано: 35 },
  { month: "Лют", записи: 480, скасовано: 28 },
  { month: "Бер", записи: 550, скасовано: 40 },
  { month: "Кві", записи: 610, скасовано: 30 },
  { month: "Тра", записи: 590, скасовано: 45 },
  { month: "Чер", записи: 670, скасовано: 25 },
]

const typeData = [
  { name: "Перукарські послуги", value: 55 },
  { name: "Манікюр / Педикюр", value: 30 },
  { name: "Догляд / Інше", value: 15 },
]

const marketingData = [
  { source: "Instagram", leads: 320 },
  { source: "Google Maps", leads: 210 },
  { source: "Рекомендації", leads: 150 },
  { source: "TikTok", leads: 90 },
]

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Кнопка повернення на головну */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground mb-8"
        >
          <ArrowLeft className="size-4" />
          Назад на головну
        </Link>

        {/* Шапка розділу */}
        <div className="relative mb-8 overflow-hidden rounded-3xl border border-border bg-card/90 p-6 md:p-8 shadow-sm backdrop-blur-sm">
          <div className="absolute top-0 left-0 h-1.5 w-full bg-[oklch(0.62_0.13_300)]" aria-hidden="true" />
          <div className="flex items-center gap-5">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.93_0.05_300)] text-[oklch(0.5_0.13_300)] shadow-inner">
              <BarChart3 className="size-7" />
            </span>
            <div>
              <h1 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Аналітика та дашборди
              </h1>
              <p className="mt-1 text-sm text-muted-foreground md:text-base leading-relaxed">
                Основні показники ефективності мережі «Лайк», швидкість майстрів та аналіз ринку.
              </p>
            </div>
          </div>
        </div>

        {/* ПЛАШКИ ЗВЕРХУ (Ваші 5 посилань) */}
        <div className="mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4">Швидкий перехід по розділах</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {analyticsLinks.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[oklch(0.62_0.13_300)] hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display font-semibold text-foreground group-hover:text-[oklch(0.5_0.13_300)] transition-colors">
                      {item.title}
                    </h3>
                    <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  {item.description && (
                    <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                {item.tag && (
                  <div className="mt-4 pt-3 border-t border-border/40 flex items-center">
                    <span className="rounded-full bg-[oklch(0.94_0.045_300)] px-2.5 py-0.5 text-[11px] font-medium text-[oklch(0.45_0.11_300)] leading-none">
                      {item.tag}
                    </span>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* KPI Карточки */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Всього створено</span>
              <Users className="size-4 text-[oklch(0.5_0.13_300)]" />
            </div>
            <div className="mt-2 text-3xl font-bold font-display text-foreground">3,320</div>
            <span className="mt-1 inline-flex items-center text-xs font-medium text-[oklch(0.5_0.11_158)]">
              <TrendingUp className="size-3 mr-1" /> +12% за місяць
            </span>
          </div>

          <div className="rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Успішні онлайн-записи</span>
              <CheckCircle2 className="size-4 text-[oklch(0.5_0.11_158)]" />
            </div>
            <div className="mt-2 text-3xl font-bold font-display text-foreground">2,850</div>
            <span className="mt-1 inline-flex items-center text-xs font-medium text-[oklch(0.5_0.11_158)]">
              85.8% конверсія
            </span>
          </div>

          <div className="rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Скасовано</span>
              <CalendarX className="size-4 text-destructive" />
            </div>
            <div className="mt-2 text-3xl font-bold font-display text-foreground">203</div>
            <span className="mt-1 inline-flex items-center text-xs font-medium text-muted-foreground">
              В межах норми
            </span>
          </div>

          <div className="rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Маркетингові мітки</span>
              <BarChart3 className="size-4 text-[oklch(0.52_0.1_62)]" />
            </div>
            <div className="mt-2 text-3xl font-bold font-display text-foreground">4 активні</div>
            <span className="mt-1 inline-flex items-center text-xs font-medium text-[oklch(0.5_0.11_158)]">
              Instagram топ-1
            </span>
          </div>
        </div>

        {/* Графіки внизу */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
          <div className="rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4">Розбивка записів по місяцях</h2>
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="month" stroke="#888888" fontSize={12} />
                  <YAxis stroke="#888888" fontSize={12} />
                  <Tooltip />
                  <Line type="monotone" dataKey="записи" stroke="oklch(0.62_0.13_300)" strokeWidth={3} />
                  <Line type="monotone" dataKey="скасовано" stroke="oklch(0.66_0.11_158)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4">Розподіл за типами послуг</h2>
            <div className="h-[280px] w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={typeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label>
                    {typeData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? "oklch(0.62_0.13_300)" : index === 1 ? "oklch(0.66_0.11_158)" : "oklch(0.75_0.12_70)"} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4">Ефективність за маркетинговими мітками</h2>
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marketingData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="source" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip />
                <Bar dataKey="leads" fill="oklch(0.62_0.13_300)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </main>
  )
}
