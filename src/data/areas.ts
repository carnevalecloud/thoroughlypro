export interface ServiceTown {
  slug: string;
  name: string;
  county: string;
  region: string;
  intro: string;
  description: string;
  highlights: string[];
  nearbyTowns: string[];
  facilityTypes: {
    name: string;
    description: string;
    icon: string;
  }[];
  challenges: {
    title: string;
    solution: string;
    icon: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
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
      "Keene is the commercial and industrial hub of the Monadnock Region — an active mix of precision manufacturing plants, distribution centers, Cheshire Medical Center and surrounding healthcare offices, Keene State College, and a historic downtown corridor. We've maintained facilities across that mix since 1983, from multi-shift production floors requiring strict safety standards to professional office suites that need to be spotless before business hours.",
    highlights: [
      "Flexible scheduling around 1st, 2nd, and 3rd shift manufacturing operations",
      "Specialized sanitization protocols for medical and healthcare-adjacent facilities near Cheshire Medical Center",
      "Industrial-grade floor stripping, scrubbing, and rewaxing for high-traffic concrete and VCT floors",
      "Dedicated account supervisor with rapid walk-throughs and 24-hour response times",
    ],
    nearbyTowns: ["swanzey", "chesterfield"],
    facilityTypes: [
      {
        name: "Industrial & Manufacturing Plants",
        description:
          "Heavy-duty cleaning for production lines, assembly floors, machine shop restrooms, and staff break rooms.",
        icon: "ph--factory",
      },
      {
        name: "Medical & Outpatient Clinics",
        description:
          "High-grade sanitization, waiting room care, and exam room sanitation compliant with local healthcare standards.",
        icon: "ph--first-aid",
      },
      {
        name: "Corporate & Professional Offices",
        description:
          "Nightly janitorial, touchpoint disinfection, carpet extraction, and executive suite maintenance.",
        icon: "ph--buildings",
      },
      {
        name: "Distribution & Warehouse Centers",
        description:
          "Loading dock cleaning, concrete dust control, high-bay sweep-downs, and comprehensive move-in/move-out cleanouts.",
        icon: "ph--warehouse",
      },
    ],
    challenges: [
      {
        title: "Multi-Shift Operation Coordination",
        solution:
          "We align our cleaning crews with your shift changeovers, ensuring high-traffic restrooms and break areas are fully serviced without halting manufacturing lines.",
        icon: "ph--clock",
      },
      {
        title: "Monadnock Winter Salt & Moisture",
        solution:
          "New Hampshire winters bring heavy brine and sand into facility entrances. We implement seasonal matting care, neutral floor scrubbing, and deep carpet extraction to prevent permanent floor damage.",
        icon: "ph--snowflake",
      },
      {
        title: "Strict Compliance & Inspection Readiness",
        solution:
          "Whether preparing for client audits or internal safety inspections, our systematic checklists ensure all facilities meet rigorous cleanliness and safety benchmarks.",
        icon: "ph--shield-check",
      },
    ],
    faqs: [
      {
        q: "What cleaning schedule options do you offer for Keene businesses?",
        a: "We offer daily, multi-day per week, weekly, and custom multi-shift schedules. We can clean during early mornings, late evenings, or overnight shifts to ensure zero disruption to your workflow.",
      },
      {
        q: "Do you provide floor stripping and waxing for Keene manufacturing plants?",
        a: "Yes. Floor care is one of our core specialties. We provide complete VCT stripping, multi-coat waxing, concrete floor scrubbing, and high-speed burnishing for industrial plants and commercial spaces across Keene.",
      },
      {
        q: "How fast can you perform an on-site facility walk-through in Keene?",
        a: "Because we have active crews throughout the Monadnock region, we can typically schedule an in-person facility walk-through within 24 to 48 hours of your inquiry.",
      },
      {
        q: "Are your cleaning teams insured and background-checked?",
        a: "Yes, Thoroughly Pro is fully licensed, insured, and bonded. Every team member undergoes thorough vetting and hands-on training to operate safely in secure commercial and industrial environments.",
      },
    ],
  },
  {
    slug: "swanzey",
    name: "Swanzey",
    county: "Cheshire County",
    region: "Monadnock Region",
    intro:
      "Reliable cleaning for Swanzey's retail, restaurant, auto, and light-industrial businesses along the Route 10/32 corridor.",
    description:
      "Swanzey sits immediately south of Keene along the Route 10 and Route 32 corridors, where retail, auto dealerships, and service-bay businesses thrive alongside the growing Sanford Drive industrial park near Dillant-Hopkins Airport. We deliver the same tailored, consistent programs we've built our reputation on since 1983 — daily-ready customer spaces, durable floor care built for heavy vehicle and foot traffic, and dependable service for Sanford Drive industrial tenants.",
    highlights: [
      "Specialized floor care for automotive service bays, parts departments, and customer showrooms",
      "Industrial-grade janitorial for Sanford Drive business park tenants and distribution hubs",
      "Flexible evening and off-hours service for retail and restaurant establishments along Route 10",
      "Family-owned local team with prompt response times across Cheshire County",
    ],
    nearbyTowns: ["keene", "chesterfield"],
    facilityTypes: [
      {
        name: "Business Parks & Light Industrial",
        description:
          "Turnkey cleaning for Sanford Drive tenants, light manufacturing shops, and storage facilities.",
        icon: "ph--warehouse",
      },
      {
        name: "Auto Dealerships & Service Centers",
        description:
          "Showroom floor burnishing, customer lounge sanitation, service write-up area care, and restroom maintenance.",
        icon: "ph--car",
      },
      {
        name: "Retail & Commercial Storefronts",
        description:
          "Glass cleaning, entranceway maintenance, trash removal, and daily surface care to impress your customers.",
        icon: "ph--storefront",
      },
      {
        name: "Contractor & Trades Headquarters",
        description:
          "Practical cleaning solutions designed for high-traffic contractor offices, dispatch hubs, and supply depots.",
        icon: "ph--wrench",
      },
    ],
    challenges: [
      {
        title: "Industrial & Oil Grime Control",
        solution:
          "Auto centers and light industrial parks deal with tough residues. We utilize commercial degreasers and heavy scrubbers to maintain pristine, non-slip customer and work areas.",
        icon: "ph--drop",
      },
      {
        title: "Customer-Facing First Impressions",
        solution:
          "Showrooms and retail spaces require spotless floors and streak-free glass. We schedule daily detailing before your doors open each morning.",
        icon: "ph--sparkle",
      },
      {
        title: "Seasonal Traffic Fluctuations",
        solution:
          "We offer flexible service adjustments that match your business's seasonal peaks, from spring cleanouts to winter entryway salt defense.",
        icon: "ph--trend-up",
      },
    ],
    faqs: [
      {
        q: "Do you service businesses in the Sanford Drive Industrial Park in Swanzey?",
        a: "Yes, we regularly service industrial facilities, warehouses, and commercial spaces along Sanford Drive and the surrounding airport corridor.",
      },
      {
        q: "Can you clean automotive showrooms and customer waiting areas in Swanzey?",
        a: "Absolutely. We specialize in high-gloss showroom floor care, glass cleaning, restroom restocking, and coffee-station sanitization for dealerships and auto repair centers.",
      },
      {
        q: "What is included in a typical Swanzey janitorial contract?",
        a: "Our contracts are 100% customized to your facility. Common items include daily trash disposal, restroom sanitation, dusting, floor vacuuming and mopping, disinfection of high-touch points, and periodic carpet or floor waxing.",
      },
    ],
  },
  {
    slug: "chesterfield",
    name: "Chesterfield",
    county: "Cheshire County",
    region: "Monadnock Region",
    intro:
      "Facility cleaning for the small businesses and professional offices along Chesterfield's Route 9 and Route 63 corridor.",
    description:
      "Chesterfield connects Keene to the Vermont border along Route 9 and Route 63, running through Spofford and West Chesterfield. The local economy is driven by professional practices, small manufacturing workshops, hospitality spots near Spofford Lake, and independent service businesses. We work with owners who want the dependability of a major commercial facilities partner without the high overhead of an in-house maintenance staff.",
    highlights: [
      "Custom programs sized perfectly for small offices and standalone commercial buildings",
      "Reliable service along the Route 9 corridor connecting New Hampshire and Vermont",
      "Post-renovation and seasonal deep cleans for local businesses and hospitality properties",
      "Consistent, dedicated cleaners who know your building and security protocols",
    ],
    nearbyTowns: ["keene", "swanzey"],
    facilityTypes: [
      {
        name: "Professional & Legal Offices",
        description:
          "Discreet, secure janitorial services for accounting firms, law offices, and financial consultants.",
        icon: "ph--briefcase",
      },
      {
        name: "Small Manufacturing & Workshops",
        description:
          "Production area dust control, break room sanitation, and trash management for local specialty shops.",
        icon: "ph--factory",
      },
      {
        name: "Medical & Dental Practices",
        description:
          "Hygienic sanitation for patient waiting areas, exam suites, and administrative counters.",
        icon: "ph--first-aid",
      },
      {
        name: "Hospitality & Seasonal Venues",
        description:
          "Spring deep cleans, turnover cleaning, and event prep for lakeside and corridor businesses.",
        icon: "ph--house-line",
      },
    ],
    challenges: [
      {
        title: "No In-House Maintenance Staff",
        solution:
          "Small businesses often leave cleaning to office staff, pulling focus from core work. We provide fully autonomous evening or weekend janitorial services so your team can focus on their jobs.",
        icon: "ph--users",
      },
      {
        title: "Corridor Access & Reliability",
        solution:
          "Being situated along Route 9 means prompt regional coverage. Our mobile teams service Chesterfield on a dependable, clockwork schedule.",
        icon: "ph--truck",
      },
      {
        title: "High Carpet & Floor Wear",
        solution:
          "We offer periodic hot water carpet extraction and floor buffing to prolong the life of your commercial flooring and preserve a polished image.",
        icon: "ph--stack",
      },
    ],
    faqs: [
      {
        q: "Do you service smaller offices in Chesterfield that only need cleaning twice a week?",
        a: "Yes! While we manage large manufacturing plants, we also design compact 1 to 3 day per week programs specifically tailored for small professional offices.",
      },
      {
        q: "Can you service properties in Spofford and West Chesterfield?",
        a: "Yes, our team covers the entire town of Chesterfield, including Spofford, Spofford Lake commercial properties, and West Chesterfield near the Connecticut River.",
      },
      {
        q: "How do you handle facility access and key management?",
        a: "We follow strict security protocols. Keys and alarm codes are kept securely vaulted, and only assigned, background-checked team members access your building.",
      },
    ],
  },
  {
    slug: "concord",
    name: "Concord",
    county: "Merrimack County",
    region: "Capital Region",
    intro:
      "Commercial cleaning for Concord's office buildings, government-adjacent facilities, and industrial parks.",
    description:
      "As New Hampshire's capital city, Concord features a dense ecosystem of insurance headquarters, financial-services firms, legal offices, and government-adjacent contractors, alongside industrial hubs near Horseshoe Pond and commercial districts on Loudon Road. We bring our proven 'Listen First' philosophy to Concord facilities — delivering pristine environments for spaces that receive regular traffic from clients, state officials, auditors, and the public.",
    highlights: [
      "High-security office cleaning for financial institutions, legal practices, and corporate centers",
      "Experience servicing business parks near Horseshoe Pond, Manchester Street, and Regional Drive",
      "Scalable commercial contracts for multi-story buildings and multi-tenant office complexes",
      "Comprehensive carpet extraction and hard-floor care tailored for high-traffic reception areas",
    ],
    nearbyTowns: ["new-london"],
    facilityTypes: [
      {
        name: "Corporate & Financial Headquarters",
        description:
          "Boardroom detailing, carpet care, daily trash removal, and spotless executive restrooms.",
        icon: "ph--buildings",
      },
      {
        name: "Industrial Parks & Distribution Hubs",
        description:
          "Floor sweeping, warehouse cleanouts, break room sanitization, and loading dock maintenance.",
        icon: "ph--warehouse",
      },
      {
        name: "Healthcare & Dental Clinics",
        description:
          "Sanitary cleaning protocols for outpatient practices, therapy centers, and dental suites.",
        icon: "ph--first-aid",
      },
      {
        name: "Retail Centers & Commercial Plazas",
        description:
          "High-traffic floor maintenance, common area upkeep, and window cleaning along Concord's retail corridors.",
        icon: "ph--storefront",
      },
    ],
    challenges: [
      {
        title: "High Client & Public Visibility",
        solution:
          "Capital City offices host clients, regulators, and partners daily. We ensure touchpoints, glass entrances, and conference rooms project immediate professionalism.",
        icon: "ph--eye",
      },
      {
        title: "Multi-Tenant Common Area Upkeep",
        solution:
          "We handle shared lobbies, elevators, stairwells, and central restrooms, ensuring all building tenants and visitors experience consistent cleanliness.",
        icon: "ph--door",
      },
      {
        title: "Stringent Confidentiality & Data Security",
        solution:
          "Our crews are trained to respect strict document privacy and access protocols in financial, legal, and government-affiliated offices.",
        icon: "ph--lock-key",
      },
    ],
    faqs: [
      {
        q: "Can Thoroughly Pro handle large multi-story commercial buildings in Concord?",
        a: "Yes. We have the equipment, team depth, and supervisor oversight required to manage comprehensive janitorial programs for multi-floor and multi-tenant facilities.",
      },
      {
        q: "Do you offer daytime or evening porter services in Concord?",
        a: "We primarily operate evening and overnight cleaning to avoid interrupting your workday, but we can customize daytime porter or scheduled maintenance visits upon request.",
      },
      {
        q: "How does billing and contract terms work for Concord clients?",
        a: "We provide straightforward, transparent monthly billing with clear scopes of work. We believe in earning your business through consistent quality rather than rigid, punitive contracts.",
      },
    ],
  },
  {
    slug: "lebanon",
    name: "Lebanon",
    county: "Grafton County",
    region: "Upper Valley",
    intro:
      "Facility maintenance for Lebanon's medical, biotech, and commercial facilities in the Upper Valley.",
    description:
      "Lebanon anchors the Upper Valley along the I-89 and Connecticut River corridor. Home to the Dartmouth-Hitchcock Medical Center campus, the Centerra business park biotech cluster, and extensive commercial dealerships along Route 120, Lebanon demands the highest standards of sanitation, indoor air quality, and precision floor care. Our specialized programs work around clinical hours, lab shift changes, and high-volume commercial schedules.",
    highlights: [
      "Rigorous sanitization protocols for biotech, life science, and healthcare-adjacent facilities",
      "Specialized floor care and janitorial for Centerra and Route 120 business parks",
      "Flexible scheduling built around 24/7 research shifts and clinical consultation hours",
      "Over four decades of commercial cleaning excellence across Southern and Western NH",
    ],
    nearbyTowns: ["newport", "new-london"],
    facilityTypes: [
      {
        name: "Biotech, Medtech & Lab Support",
        description:
          "Careful sanitization of administrative suites, gowning areas, research offices, and conference hubs.",
        icon: "ph--flask",
      },
      {
        name: "Healthcare & Outpatient Facilities",
        description:
          "Infection prevention protocols, medical-grade disinfectant applications, and clinical waiting area upkeep.",
        icon: "ph--first-aid",
      },
      {
        name: "Commercial Dealerships & Showrooms",
        description:
          "Showroom floor stripping, high-speed buffing, plate glass washing, and executive office maintenance.",
        icon: "ph--car",
      },
      {
        name: "Corporate Technology Campuses",
        description:
          "Open-concept office vacuuming, break area sanitization, tech-safe dusting, and waste management.",
        icon: "ph--laptop",
      },
    ],
    challenges: [
      {
        title: "Elevated Sanitation Standards",
        solution:
          "Upper Valley tech and health spaces require strict cross-contamination controls. We use color-coded microfiber systems, hospital-grade EPA registered disinfectants, and HEPA-filter vacuums.",
        icon: "ph--virus",
      },
      {
        title: "24/7 Research & Shift Environments",
        solution:
          "We coordinate cleaning windows around active experiments, clinical consultations, and quiet hours to avoid disrupting critical work.",
        icon: "ph--clock-counter-clockwise",
      },
      {
        title: "Upper Valley Winter Slush & Salt",
        solution:
          "Heavy snow in Grafton County requires aggressive entryway defense, winter mat extraction, and frequent neutral scrubbing to protect high-value flooring.",
        icon: "ph--snowflake",
      },
    ],
    faqs: [
      {
        q: "What experience do you have with healthcare and lab-adjacent facilities in Lebanon?",
        a: "We have decades of experience maintaining facilities that require medical-grade cleanliness, cross-contamination prevention, and strict compliance with health safety protocols.",
      },
      {
        q: "Can you clean tech and biotech offices in Centerra Business Park?",
        a: "Yes, we regularly support commercial offices and research facilities in Centerra and along the Route 120 commercial corridor.",
      },
      {
        q: "Do you supply all cleaning equipment, chemicals, and consumables?",
        a: "Yes. We bring commercial-grade equipment and eco-conscious, effective cleaning chemicals. We can also manage restocking of hand towels, soap, liners, and tissue.",
      },
    ],
  },
  {
    slug: "newport",
    name: "Newport",
    county: "Sullivan County",
    region: "Lake Sunapee Region",
    intro:
      "Commercial and industrial cleaning for Newport's manufacturing, government, and financial-services businesses.",
    description:
      "Newport is the Sullivan County seat and a cornerstone manufacturing community in Western New Hampshire. With major industrial employers, active tenants at Flagstone Industrial Park, county government buildings, and local financial institutions, Newport facilities require heavy-duty floor care, industrial safety compliance, and consistent daily janitorial service. We take pride in supporting the manufacturing engines that power Sullivan County.",
    highlights: [
      "Industrial manufacturing floor stripping, degreasing, and heavy-use sealing",
      "Turnkey janitorial for Flagstone Industrial Park tenants and production plants",
      "Secure, vetted cleaning for county municipal facilities, banks, and legal offices",
      "Fast response for warehouse cleanouts and seasonal facility turnovers",
    ],
    nearbyTowns: ["new-london", "lebanon"],
    facilityTypes: [
      {
        name: "Heavy & Precision Manufacturing",
        description:
          "Production floor sweeping, machine-adjacent degreasing, shop floor restrooms, and locker room care.",
        icon: "ph--factory",
      },
      {
        name: "Industrial Business Parks",
        description:
          "Comprehensive care for Flagstone Industrial Park warehouses, assembly bays, and logistics offices.",
        icon: "ph--warehouse",
      },
      {
        name: "Municipal & County Facilities",
        description:
          "Public hall sanitization, courtroom cleaning, administrative suite care, and council chamber maintenance.",
        icon: "ph--buildings",
      },
      {
        name: "Financial & Professional Practices",
        description:
          "Nightly banking lobby care, teller station wiping, carpet extraction, and executive office detailing.",
        icon: "ph--bank",
      },
    ],
    challenges: [
      {
        title: "Tough Industrial Oils & Machine Grime",
        solution:
          "Manufacturing environments track heavy grease and metal shavings. We deploy industrial degreasers and auto-scrubbers to restore safe, slip-resistant walking surfaces.",
        icon: "ph--wrench",
      },
      {
        title: "Locker Rooms & High-Traffic Restrooms",
        solution:
          "Shift-based manufacturing requires intensive daily sanitization of employee locker rooms, showers, and break areas to promote a healthy workforce.",
        icon: "ph--shower",
      },
      {
        title: "Heavy Equipment Floor Wear",
        solution:
          "Forklift and pallet jack traffic wears through coatings quickly. Our heavy-duty floor stripping and multi-coat industrial wax applications protect your foundation.",
        icon: "ph--stack",
      },
    ],
    faqs: [
      {
        q: "Do you clean manufacturing facilities with active machinery in Newport?",
        a: "Yes. Industrial manufacturing is our core strength. We work with plant managers to clean floors, common areas, break rooms, and restrooms while keeping operations safe and unimpeded.",
      },
      {
        q: "Can you provide emergency cleanouts or post-renovation cleaning in Newport?",
        a: "Yes. In addition to recurring janitorial contracts, we offer complete warehouse cleanouts, move-out debris clearing, and post-construction scrubbing.",
      },
      {
        q: "What regions of Sullivan County do you cover from Newport?",
        a: "We service the entire Newport area, Claremont, Sunapee, and neighboring communities throughout Sullivan and Merrimack counties.",
      },
    ],
  },
  {
    slug: "new-london",
    name: "New London",
    county: "Merrimack County",
    region: "Lake Sunapee Region",
    intro:
      "Facility cleaning for New London's hospitality, retail, and healthcare-adjacent businesses near Lake Sunapee.",
    description:
      "New London is the commercial and cultural heart of the Lake Sunapee region, home to Colby-Sawyer College, New London Hospital, and an active downtown of inns, dining, and boutique retail. First impressions are everything in New London — whether welcoming prospective students, hospital patients, or seasonal travelers. We tailor our cleaning schedules to early mornings and late evenings so your property is always show-ready without interrupting business.",
    highlights: [
      "Showcase-level cleanliness for hospitality, dining, and main-street commercial properties",
      "Specialized sanitation protocols for outpatient and medical suites near New London Hospital",
      "Flexible contracts built around Lake Sunapee summer and winter tourist seasons",
      "Deep carpet extraction, window cleaning, and high-traffic floor preservation",
    ],
    nearbyTowns: ["newport", "concord"],
    facilityTypes: [
      {
        name: "Hospitality, Dining & Inns",
        description:
          "Front-of-house detailing, dining room floor care, guest restroom sanitation, and entryway presentation.",
        icon: "ph--wine",
      },
      {
        name: "Medical & Healthcare Suites",
        description:
          "Clinical hygiene, waiting area disinfection, and exam room care aligned with New London Hospital standards.",
        icon: "ph--first-aid",
      },
      {
        name: "Academic & Campus Support",
        description:
          "Common area upkeep, dormitory turnover cleaning, lecture hall sanitization, and administrative office care.",
        icon: "ph--graduation-cap",
      },
      {
        name: "Boutique Retail & Main Street Shops",
        description:
          "Streak-free display glass, merchandise floor buffing, counter wiping, and dust elimination.",
        icon: "ph--storefront",
      },
    ],
    challenges: [
      {
        title: "Intense Seasonal Demand Shifts",
        solution:
          "Lake Sunapee businesses experience massive summer and winter surges. We scale your cleaning frequency up or down based on your seasonal customer volume.",
        icon: "ph--sun",
      },
      {
        title: "High Customer Aesthetic Expectations",
        solution:
          "Inns, boutiques, and clinics cannot afford dirty corners or dusty ledges. Our supervisors conduct detailed weekly audits to guarantee premium presentation.",
        icon: "ph--sparkle",
      },
      {
        title: "Quiet Hours & Guest Consideration",
        solution:
          "For hospitality and academic environments, we schedule our quiet vacuuming and sanitation teams during specific low-traffic windows to respect guests and students.",
        icon: "ph--speaker-simple-slash",
      },
    ],
    faqs: [
      {
        q: "Do you offer seasonal contracts for Lake Sunapee businesses in New London?",
        a: "Yes. We offer flexible programs that accommodate the peak summer and winter ski seasons with scaled cleaning frequencies.",
      },
      {
        q: "Can you provide carpet cleaning and floor waxing during off-hours in New London?",
        a: "Yes. We perform carpet hot-water extraction and floor refinishing overnight or over weekends so surfaces are dry and ready for business by morning.",
      },
      {
        q: "How do you coordinate with medical offices near New London Hospital?",
        a: "We establish dedicated protocols with clinic administrators, ensuring all EPA-registered disinfectants and hygiene standards are strictly followed every visit.",
      },
    ],
  },
];

export function getTownBySlug(slug: string): ServiceTown | undefined {
  return serviceTowns.find((town) => town.slug === slug);
}

