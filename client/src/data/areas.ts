import type { RegionalHub } from "@shared/schema";

export interface ServiceTown {
  name: string;
}

export const serviceTowns: ServiceTown[] = [
  { name: "Chesterfield" },
  { name: "Keene" },
  { name: "Swanzey" },
  { name: "Concord" },
  { name: "Lebanon" },
  { name: "Newport" },
  { name: "New London" }
];

export const regionalHubs: RegionalHub[] = [
  {
    name: "Keene Region",
    focus: "Full Service",
    towns: ["Keene", "Swanzey", "Chesterfield"]
  },
  {
    name: "Upper Valley",
    focus: "Full Service",
    towns: ["Lebanon", "Newport"]
  },
  {
    name: "Capital & Lakes Region",
    focus: "Full Service",
    towns: ["Concord", "New London"]
  }
];

export const extendedTowns: string[] = [];
