export interface ServiceTown {
  slug: string;
  name: string;
  county: string;
  region: string;
  intro: string;
  description: string;
  highlights: string[];
  nearbyTowns: string[];
}

export const serviceTowns: ServiceTown[] = [
  {
    slug: "keene",
    name: "Keene",
    county: "Cheshire County",
    region: "Monadnock Region",
    intro:
      "Commercial cleaning and facility maintenance for Keene's manufacturing, healthcare, and downtown business community.",
    description:
      "Keene is the commercial hub of the Monadnock Region — a mix of manufacturing and distribution employers, Cheshire Medical Center and the healthcare offices around it, Keene State College, and a walkable downtown of retail and restaurants along Main Street. We've maintained facilities across that mix since 1983, from production floors that run multiple shifts to office and retail spaces that need to be spotless before the doors open.",
    highlights: [
      "Flexible scheduling around multi-shift manufacturing operations",
      "Experience with healthcare-adjacent facilities near Cheshire Medical Center",
      "Familiar with the downtown retail and restaurant corridor near Keene State College",
    ],
    nearbyTowns: ["swanzey", "chesterfield"],
  },
  {
    slug: "swanzey",
    name: "Swanzey",
    county: "Cheshire County",
    region: "Monadnock Region",
    intro:
      "Reliable cleaning for Swanzey's retail, restaurant, auto, and light-industrial businesses along the Route 10/32 corridor.",
    description:
      "Swanzey sits just south of Keene along the Route 10 and Route 32 corridor, where retail and restaurant businesses make up much of the local economy alongside auto dealerships and the growing Sanford Drive industrial park near Dillant-Hopkins Airport. We serve that mix with the same tailored, consistent programs we've built our reputation on since 1983 — daily-ready storefronts, floor care built for heavy foot and vehicle traffic, and dependable service for Sanford Drive tenants.",
    highlights: [
      "Coverage for retail, restaurant, and auto/service-bay businesses",
      "Industrial-grade cleaning for Sanford Drive business park tenants",
      "Trusted regional provider serving neighboring Keene since 1983",
    ],
    nearbyTowns: ["keene", "chesterfield"],
  },
  {
    slug: "chesterfield",
    name: "Chesterfield",
    county: "Cheshire County",
    region: "Monadnock Region",
    intro:
      "Facility cleaning for the small businesses and professional offices along Chesterfield's Route 9 and Route 63 corridor.",
    description:
      "Chesterfield is a small town along Route 9 and Route 63, running through Spofford and West Chesterfield toward the Vermont border, with a business base of small professional offices and shops rather than large facilities. We work with owners here who don't have the bandwidth to manage a facilities team of their own — the same reliable scheduling and attention to detail we bring to a much larger operation, sized to fit a smaller one.",
    highlights: [
      "Built for small offices and shops without an in-house facilities team",
      "Consistent service along the Route 9 corridor toward the Vermont border",
      "Same reliable scheduling whether you're close to Keene or further out",
    ],
    nearbyTowns: ["keene", "swanzey"],
  },
  {
    slug: "concord",
    name: "Concord",
    county: "Merrimack County",
    region: "Capital Region",
    intro:
      "Commercial cleaning for Concord's office buildings, government-adjacent facilities, and industrial parks.",
    description:
      "As New Hampshire's capital, Concord has a dense mix of insurance and financial-services offices, banks, government buildings, and business parks like the Concord Business Center near Horseshoe Pond, along with healthcare facilities around Concord Hospital. We bring the same tailored, listen-first approach to Concord facilities that we've used across Southern New Hampshire since 1983 — cleaning programs for spaces that get walked through by clients, auditors, and the public as often as employees.",
    highlights: [
      "Coverage for office, financial-services, and government-adjacent facilities",
      "Experience with business park tenants near Horseshoe Pond",
      "Programs scaled for single buildings or multi-site facility portfolios",
    ],
    nearbyTowns: ["new-london"],
  },
  {
    slug: "lebanon",
    name: "Lebanon",
    county: "Grafton County",
    region: "Upper Valley",
    intro:
      "Facility maintenance for Lebanon's medical, biotech, and commercial facilities in the Upper Valley.",
    description:
      "Lebanon anchors the Upper Valley along the Connecticut River, home to the Dartmouth-Hitchcock Medical Center campus, a growing cluster of biotech and medtech tenants at Centerra, and dealership and retail space along Route 120. That mix means higher standards for sanitation and floor care than most towns, and it's exactly what we've built our service plans around since 1983 — cleaning that works around clinical hours, lab schedules, and showroom traffic rather than against them.",
    highlights: [
      "Experience with healthcare-adjacent and lab-space facility standards",
      "Coverage for Centerra business park tenants and Route 120 dealerships",
      "Scheduling built around sensitive or high-traffic environments",
    ],
    nearbyTowns: ["newport", "new-london"],
  },
  {
    slug: "newport",
    name: "Newport",
    county: "Sullivan County",
    region: "Lake Sunapee Region",
    intro:
      "Commercial and industrial cleaning for Newport's manufacturing, government, and financial-services businesses.",
    description:
      "Newport is the Sullivan County seat and a genuine manufacturing town, home to major industrial employers and the tenants of Flagstone Industrial Park, alongside county government offices and a solid base of downtown financial-services businesses. Manufacturing floors are where we've done our best work since 1983 — floor stripping, sealing, and refinishing that holds up to heavy equipment and daily foot traffic, plus routine janitorial for the offices and government buildings around them.",
    highlights: [
      "Manufacturing and industrial floor care for heavy-use production space",
      "Coverage for Flagstone Industrial Park tenants",
      "Experience with government-building and financial-office maintenance",
    ],
    nearbyTowns: ["new-london", "lebanon"],
  },
  {
    slug: "new-london",
    name: "New London",
    county: "Merrimack County",
    region: "Lake Sunapee Region",
    intro:
      "Facility cleaning for New London's hospitality, retail, and healthcare-adjacent businesses near Lake Sunapee.",
    description:
      "New London's business district runs on first impressions — inns, restaurants, and Main Street retail that serve Colby-Sawyer College and the Lake Sunapee tourist season, alongside New London Hospital and the professional offices around it. We tailor our programs to that mix: a spotless, presentable space every morning for hospitality and retail, and a higher sanitation standard for offices near the hospital, scheduled around early mornings and evenings so cleaning never gets in the way of business.",
    highlights: [
      "Daily-ready standards for hospitality, retail, and restaurant spaces",
      "Experience with healthcare-adjacent facilities near New London Hospital",
      "Scheduling built around seasonal tourist-season demand",
    ],
    nearbyTowns: ["newport", "concord"],
  },
];

export function getTownBySlug(slug: string): ServiceTown | undefined {
  return serviceTowns.find((town) => town.slug === slug);
}
