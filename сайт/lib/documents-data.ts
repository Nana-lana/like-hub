/**
 * ┌─────────────────────────────────────────────────────────────────────┐
 * │  СТОРІНКА «ДОКУМЕНТИ» (/dokumenty)                                     │
 * │                                                                       │
 * │  Кожна плитка — це посилання на папку Google Диску.                   │
 * │  Щоб змінити посилання — відредагуйте поле url.                       │
 * │  image — шлях до міні-картинки у папці /public/tiles.                 │
 * └─────────────────────────────────────────────────────────────────────┘
 */

export type DocumentTile = {
  title: string
  description?: string
  url: string
  image: string
}

export const documentTiles: DocumentTile[] = [
  {
    title: "Таблиця оренди",
    description: "Зведена: адреси, вартості, термін дії",
    url: "https://drive.google.com/drive/folders/1jUgVc2NvwF_rE4glyFjlo-jZEB1RAfD5?usp=drive_link",
    image: "/tiles/orenda.png",
  },
  {
    title: "Документи майстрів",
    description: "Документи та договори оренди з майстрами",
    url: "https://drive.google.com/drive/folders/1myvZDZIz0FT6ufRDV00HGUF9f_UNlEI5?usp=sharing",
    image: "/tiles/dokumenty-majstriv.png",
  },
  {
    title: "ФОП Мокляк А.Ю.",
    description: "Установчі по ФОП",
    url: "https://drive.google.com/drive/folders/1UQS73cLGyuigKAY6Q2Z2Ig6PQ1tKHJKA?usp=drive_link",
    image: "/tiles/fop.png",
  },
  {
    title: "Затоплення Л2",
    description: "Документи по інциденту із затопленням",
    url: "https://drive.google.com/drive/folders/1vmvfnRsDvQz-T0YaQTgMbymgTpdSknsJ?usp=drive_link",
    image: "/tiles/zatoplennia.png",
  },
  {
    title: "Гугл форми",
    description: "Для майстрів та клієнтів",
    url: "https://drive.google.com/drive/folders/1fcQDBz06bBGBdGnao6vLrel8BKAKv4ch?usp=drive_link",
    image: "/tiles/google-formy.png",
  },
  {
    title: "Інвентаризація",
    description: "Остання 2026",
    url: "https://drive.google.com/drive/folders/1xt4Qa7fkLbarXcI_KD4kwpIxorb0V4d1?usp=drive_link",
    image: "/tiles/inventaryzatsiia.png",
  },
  {
    title: "Паролі",
    description: "Остання 2026",
    url: "https://drive.google.com/drive/folders/1jNNUatyG4Rbmdozju-I6iNxGJEhreK6z?usp=drive_link",
    image: "/tiles/paroli.png",
  },
  {
    title: "Старший перукар",
    description: "Документи для старших перукарів",
    url: "https://drive.google.com/drive/folders/1ZMPCElRbuIhnWNsGwUjsSnfaTJAvTav2?usp=drive_link",
    image: "/tiles/starshyj-perukar.png",
  },
  {
    title: "Перевірка лайк",
    description: "Камери та чек-лист",
    url: "https://drive.google.com/drive/folders/1SAJCg0lWdpWcMN50XJRtVl91CMkutKuT?usp=drive_link",
    image: "/tiles/perevirka.png",
  },
  {
    title: "Шаблони документів",
    description: "Для друку",
    url: "https://drive.google.com/drive/folders/1UXuf91q9s56q7AIRXhG-R7wosRYWEFk0?usp=drive_link",
    image: "/tiles/shablony.png",
  },
]
