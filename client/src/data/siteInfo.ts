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
    defaultDescription: "Thoroughly Pro has been a trusted commercial cleaning partner in Southern New Hampshire since 1983. We listen first, then deliver tailored solutions for industrial manufacturing facilities.",
    defaultTitle: "Thoroughly Pro | Your Trusted Facility Partner Since 1983"
  }
};

export const navigation: Navigation = {
  main: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Service Areas", href: "/areas" },
    { name: "FAQ", href: "/faq" },
  ],
  cta: { name: "Get a Quote", href: "/quote" }
};
