import type { RegionalHub } from "@shared/schema";

export interface ServiceTown {
  name: string;
  description: string;
  highlights: string[];
}

export const serviceTowns: ServiceTown[] = [
  {
    name: "Keene",
    description: "Our primary service hub in the Monadnock Region, serving manufacturing and commercial facilities.",
    highlights: ["Manufacturing Plants", "Commercial Buildings", "Retail Centers"]
  },
  {
    name: "Chesterfield",
    description: "Serving local businesses and industrial facilities in this scenic Connecticut River community.",
    highlights: ["Industrial Facilities", "Commercial Properties", "Municipal Buildings"]
  },
  {
    name: "Swanzey",
    description: "Supporting the growing industrial and commercial sector just south of Keene.",
    highlights: ["Warehouse Facilities", "Manufacturing", "Commercial Complexes"]
  },
  {
    name: "Concord",
    description: "New Hampshire's capital city, where we serve government buildings and major commercial facilities.",
    highlights: ["Government Buildings", "Office Complexes", "Healthcare Facilities"]
  },
  {
    name: "Lebanon",
    description: "Anchor of the Upper Valley region with diverse commercial and medical facility clients.",
    highlights: ["Medical Centers", "Commercial Properties", "Educational Facilities"]
  },
  {
    name: "Newport",
    description: "Gateway to the Lake Sunapee region, serving manufacturing and commercial establishments.",
    highlights: ["Manufacturing", "Retail Centers", "Municipal Facilities"]
  },
  {
    name: "New London",
    description: "Charming town with year-round commercial and institutional facility needs.",
    highlights: ["Educational Institutions", "Commercial Buildings", "Resort Properties"]
  }
];

export const regionalHubs: RegionalHub[] = [
  {
    name: "Keene Region",
    focus: "Industrial & Manufacturing",
    towns: ["Keene", "Swanzey", "Chesterfield"]
  },
  {
    name: "Upper Valley",
    focus: "Commercial & Medical",
    towns: ["Lebanon", "Newport"]
  },
  {
    name: "Capital & Lakes Region",
    focus: "Government & Commercial",
    towns: ["Concord", "New London"]
  }
];

export const extendedTowns: string[] = [];
