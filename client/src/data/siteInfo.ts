import type { SiteInfo, Navigation } from "@shared/schema";

export const siteInfo: SiteInfo = {
  name: "Thoroughly Pro",
  logoText: {
    primary: "THOROUGHLY",
    accent: "PRO"
  },
  contact: {
    phone: "(603) 496-8229",
    phoneUrl: "tel:6034968229",
    email: "thoroughlypro@yahoo.com",
    address: {
      line1: "PO Box 168",
      line2: "Sunapee, NH 03782",
      mapsLink: "https://maps.google.com/?q=Sunapee+NH"
    }
  },
  meta: {
    lang: "en",
    author: "Carnevale Design",
    defaultDescription: "Serving New Hampshire's industrial and commercial sectors since 1983. We listen, we consult, and we deliver tailored solutions.",
    defaultTitle: "Thoroughly Pro | Commercial Facility Partners"
  }
};

export const navigation: Navigation = {
  main: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Service Areas", href: "/areas" },
  ],
  cta: { name: "Get a Quote", href: "/quote" }
};
