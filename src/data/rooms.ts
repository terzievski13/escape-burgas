const CDN = "https://escapeburgas.com/wp-content/uploads";

export interface PricingTier {
  label: string;
  price: number;
}

export interface Room {
  slug: string;
  name: string;
  location: "mazze1" | "mazze2";
  players: string;
  duration: number;
  minAge: number;
  cover: string;
  gallery: string[];
  description: string;
  slots: string[];
  pricing: PricingTier[];
  featured: boolean;
}

export const rooms: Room[] = [
  {
    slug: "ekspediciya",
    name: "Експедиция",
    location: "mazze1",
    players: "2–6",
    duration: 75,
    minAge: 14,
    cover: `${CDN}/2022/05/DSC_0178-1.jpg`,
    gallery: [
      `${CDN}/2022/05/DSC_0190-1-1024x683.jpg`,
      `${CDN}/2022/05/DSC_0172-1-1024x683.jpg`,
      `${CDN}/2022/05/DSC_0175-1-1024x683.jpg`,
      `${CDN}/2022/05/DSC_0173-1-1024x683.jpg`,
      `${CDN}/2022/05/DSC_0186-1-1024x683.jpg`,
    ],
    description:
      "Долината на царете в Мемфис пази тайни, скрити от хилядолетия. Изследователски екипи са изчезвали, търсейки магическото златно огърлие, погребано дълбоко в пирамидите. Вашата задача е да намерите артефакта и да излезете живи — ако логиката, интуицията и екипната работа ви стигат.",
    slots: ["12:00", "13:50", "15:40", "17:30", "19:20", "21:10"],
    pricing: [
      { label: "2 играча",   price: 45 },
      { label: "3–4 играча", price: 40 },
      { label: "5+ играча",  price: 35 },
    ],
    featured: true,
  },
  {
    slug: "evolyuciya",
    name: "Еволюция",
    location: "mazze1",
    players: "2–6",
    duration: 75,
    minAge: 14,
    cover: `${CDN}/2023/06/IMG_20230422_105316.jpg`,
    gallery: [
      `${CDN}/2023/06/IMG_20230422_105316-1024x683.jpg`,
      `${CDN}/2023/06/IMG_20230422_105000-683x1024.jpg`,
      `${CDN}/2023/06/IMG_20230422_104753-1024x683.jpg`,
      `${CDN}/2023/06/IMG_20230422_105250-1024x683.jpg`,
      `${CDN}/2023/06/IMG_20230330_212650-948x1024.jpg`,
    ],
    description:
      "200 000 години назад нещо се е случило с човечеството. Пирамиди, Стоунхендж, Наска — строежи невъзможни за времето си. Бяхте ли там? Пътувате назад, за да разберете истината за произхода на цивилизацията — и да намерите пътя си обратно.",
    slots: ["12:00", "13:50", "15:40", "17:30", "19:20", "21:10"],
    pricing: [
      { label: "2 играча",   price: 45 },
      { label: "3–4 играча", price: 40 },
      { label: "5+ играча",  price: 35 },
    ],
    featured: true,
  },
  {
    slug: "parkyt",
    name: "Паркът",
    location: "mazze1",
    players: "2–6",
    duration: 75,
    minAge: 14,
    cover: `${CDN}/2022/10/DSC_0572.jpg`,
    gallery: [
      `${CDN}/2022/10/DSC_0582-1024x709.jpg`,
      `${CDN}/2022/10/DSC_0583-1024x597.jpg`,
      `${CDN}/2022/10/DSC_0581-1024x910.jpg`,
      `${CDN}/2022/10/DSC_0588-1024x910.jpg`,
      `${CDN}/2022/10/DSC_0584-1024x707.jpg`,
      `${CDN}/2022/10/DSC_0575-1024x683.jpg`,
    ],
    description:
      "Мистериозното Mazze Park крие тайна — кучето е изчезнало и следите водят към нещо много по-голямо от просто кражба. Циркът е в града, атмосферата е напрегната и времето изтича. Отключете пъзелите, разплетете мистерията и излезте преди да е твърде късно.",
    slots: ["11:30", "13:20", "15:10", "17:00", "18:50", "20:40"],
    pricing: [
      { label: "2–4 играча", price: 40 },
      { label: "5 играча",   price: 35 },
      { label: "6+ играча",  price: 30 },
    ],
    featured: true,
  },
  {
    slug: "raklata",
    name: "Раклата на чичо",
    location: "mazze1",
    players: "1–2",
    duration: 55,
    minAge: 14,
    cover: `${CDN}/2024/12/407263366_335053609271096_7842572324922035678_n.jpg`,
    gallery: [],
    description:
      "Чичото е оставил наследство — но го е скрил в ракла, заключена с гатанки, механизми и логически задачи. Само двама могат да влязат. Разполагате с 55 минути да намерите скритото съкровище. Идеалното предизвикателство за двойки и приятели.",
    slots: ["11:30", "13:20", "15:10", "17:00", "18:50", "20:40"],
    pricing: [
      { label: "1 играч",  price: 40 },
      { label: "2 играча", price: 35 },
    ],
    featured: false,
  },
  {
    slug: "proklyatieto-binamu",
    name: "Проклятието Бинаму",
    location: "mazze2",
    players: "2–6",
    duration: 75,
    minAge: 14,
    cover: `${CDN}/2024/12/IMG_20240827_193947-scaled.jpg`,
    gallery: [
      `${CDN}/2024/12/IMG_20240827_193513-scaled.jpg`,
      `${CDN}/2024/12/IMG_20240423_162230-1024x768.jpg`,
      `${CDN}/2024/12/IMG_20240423_162138-1024x768.jpg`,
      `${CDN}/2024/12/IMG_20240827_195955-1024x768.jpg`,
      `${CDN}/2024/12/IMG_20240423_162359-768x1024.jpg`,
      `${CDN}/2024/12/IMG_20240423_162233-1024x768.jpg`,
    ],
    description:
      "Шаманите пазеха света чрез ритуала Сари — запечатвайки гробниците на тъмните магьосници. Когато защитата се срути, злото се завърна като чума, холера и природни бедствия. Присъединете се към тайното европейско общество, пътувайте назад към 16-ти век и спрете проклятието — само за най-смелите.",
    slots: ["12:00", "13:50", "15:40", "17:30", "19:20", "21:10"],
    pricing: [
      { label: "2–3 играча", price: 50 },
      { label: "4–5 играча", price: 45 },
      { label: "6+ играча",  price: 40 },
    ],
    featured: false,
  },
];

export const featuredRooms = rooms.filter((r) => r.featured);
