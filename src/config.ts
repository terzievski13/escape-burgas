export const site = {
  name: "Mazze Escape Rooms",
  shortName: "Mazze",
  title: "Mazze — Escape Rooms Бургас",
  description:
    "5 стаи за бягство в Бургас. Два адреса, групи от 1 до 6 играчи. Книжи приключението си сега.",
  email: "mazzeroom@abv.bg",
  phones: ["+359 889 951 065", "+359 883 703 666"],
  locations: {
    mazze1: "жк Славейков, зад бл. 157, Бургас",
    mazze2: "ул. Митрополит Симеон 3, Бургас",
  },
  locationMaps: {
    mazze1: "https://maps.google.com/maps?q=Mazze+Escape+Rooms+Slaveykov+Burgas",
    mazze2: "https://maps.google.com/maps?q=Mazze+Escape+Room+Mitropolit+Simeon+3+Burgas",
  },
  socials: {
    facebook: "https://www.facebook.com/Escape-Rooms-Mazze-Burgas-104509158852916/",
  } as Record<string, string>,

  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Начало",   href: "/" },
  { label: "Стаи",     href: "/stai" },
  { label: "Цени",     href: "/ceni" },
  { label: "Контакти", href: "/kontakti" },
];

export const activeSocials = Object.entries(site.socials).filter(
  ([, url]) => url && url.trim() !== "",
);
