// Типізація для зручності
export type DirectoryLink = {
  title: string;
  url: string;
  description?: string;
  tag?: string;
};

export type DirectorySection = {
  id: string;
  title: string;
  description: string;
  links: DirectoryLink[];
};

export const directory: DirectorySection[] = [
  {
    id: "salons",
    title: "Салони Лайк",
    description: "Аналітика та звіти по мережі салонів",
    links: [
      { title: "Звіт Лайк 1", url: "/report/1", tag: "звіти" },
      { title: "Статистика по персоналу", url: "/staff", description: "Аналіз продуктивності" }
    ],
  },
  {
    id: "repairs",
    title: "Ремонт та обладнання",
    description: "Інвентаризація та технічні дані",
    links: [
      { title: "Закупівля інструментів", url: "/repair/tools", tag: "ремонт" }
    ],
  },
];
