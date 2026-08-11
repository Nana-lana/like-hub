export type AnalyticsTile = {
  title: string
  description?: string
  url: string
  image: string
}

export const analyticsTiles: AnalyticsTile[] = [
  {
    title: "Онлайн записи",
    description: "Аналітика записів + дашборд",
    url: "https://docs.google.com/spreadsheets/d/13UXuajgArxGT7viYGuACFO0T_tFIiaJykuHBmoGyrCM/edit?usp=drive_link",
    image: "/tiles/online-zapysy.png",
  },
  {
    title: "Карта перукарень",
    description: "Перукарні м. Полтава",
    url: "https://www.google.com/maps/d/edit?mid=1EX0hDXrliu1aSZ3Rly3P8tiIMVJzP64&usp=drive_link",
    image: "/tiles/karta.png",
  },
  {
    title: "Аналіз 2025",
    description: "Сер. к-ть чеків, бази клієнтів",
    url: "https://drive.google.com/drive/folders/1kI-uvxV-WmaiFhix6vSog8X3p7sE94EN?usp=drive_link",
    image: "/tiles/analiz-2025.png",
  },
  {
    title: "Швидкість майстра",
    description: "Середня швидкість 2025",
    url: "https://docs.google.com/spreadsheets/d/1PAWBNjmXqm1nhvFuiyFBLJcEjsTvyslB/edit?usp=drive_link&ouid=112373292964682302363&rtpof=true&sd=true",
    image: "/tiles/shvydkist.png",
  },
  {
    title: "Аналіз ринку",
    description: "Порівняння цін, конкуренти",
    url: "https://drive.google.com/drive/folders/1dqTEH4v2Dm_eldk88LlEBhTl2Yuqqz6E?usp=drive_link",
    image: "/tiles/rynok.png",
  },
]
