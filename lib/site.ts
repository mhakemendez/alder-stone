export const site = {
  name: "Alder & Stone",
  tagline: "Design-build remodeling",
  description:
    "A design-build studio creating warm, considered kitchens, baths, additions, and whole-home renovations in Portland, Oregon.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://alderandstone.com",
  city: "Portland",
  region: "Oregon",
  serviceArea: "Portland and the surrounding communities",
  phone: "(503) 555-0148",
  phoneHref: "tel:+15035550148",
  email: "hello@alderandstone.com",
  emailHref: "mailto:hello@alderandstone.com?subject=Project%20inquiry",
  address: {
    city: "Portland",
    region: "OR",
    country: "US",
  },
  hours: "Monday–Friday, 8am–5pm",
  founded: "2006",
  social: {
    instagram: "https://www.instagram.com/",
    houzz: "https://www.houzz.com/",
  },
} as const;

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;
