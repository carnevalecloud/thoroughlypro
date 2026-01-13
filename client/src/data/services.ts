import type { Service } from "@shared/schema";

export const services: Service[] = [
  {
    id: "industrial-cleaning",
    title: "Commercial & Industrial Cleaning",
    shortDesc: "Daily cleaning services for manufacturing facilities with 5-day minimum schedules.",
    fullDesc: "Our commercial and industrial cleaning services are designed for manufacturing environments that demand consistent, reliable cleaning. We work with you to understand your unique challenges and develop tailored cleaning programs that keep your facility running smoothly.",
    icon: "Warehouse",
    features: [
      "5-day minimum cleaning schedules",
      "Manufacturing floor cleaning",
      "Production area sanitization",
      "Restroom and break room maintenance",
      "Trash and recycling management",
      "Customized cleaning protocols"
    ],
    targetAudiences: [
      "Manufacturing plants",
      "Industrial facilities",
      "Production facilities",
      "Warehouse operations"
    ]
  },
  {
    id: "facility-cleanouts",
    title: "Facility & Warehouse Cleanouts",
    shortDesc: "Complete cleanout services for facilities transitioning, relocating, or renovating.",
    fullDesc: "When your facility needs a fresh start, our cleanout services handle everything. From removing debris and unwanted materials to deep cleaning every surface, we prepare your space for its next chapter. We listen to your timeline and work around your schedule.",
    icon: "Package",
    features: [
      "Complete debris removal",
      "Heavy-duty deep cleaning",
      "Post-construction cleanup",
      "Move-in/move-out preparation",
      "Warehouse clearing and cleaning",
      "Flexible scheduling around your operations"
    ],
    targetAudiences: [
      "Facilities in transition",
      "Warehouse relocations",
      "Post-renovation spaces",
      "New tenant preparation"
    ]
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning & Extraction",
    shortDesc: "Professional carpet cleaning with powerful extraction equipment for visible results.",
    fullDesc: "Our carpet cleaning services deliver results that consistently surprise our clients. Using professional-grade extraction equipment, we remove deep-seated dirt, stains, and allergens that regular vacuuming can't reach. See your carpets restored to their original condition.",
    icon: "Sparkles",
    features: [
      "Hot water extraction cleaning",
      "Deep stain removal",
      "High-traffic area treatment",
      "Allergen and dust removal",
      "Quick-dry technology",
      "Commercial-grade equipment"
    ],
    targetAudiences: [
      "Office spaces",
      "Commercial buildings",
      "Industrial facilities",
      "Any carpeted environment"
    ]
  },
  {
    id: "floor-care",
    title: "Floor Stripping & Rewaxing",
    shortDesc: "Restore and protect your floors with professional stripping and rewaxing services.",
    fullDesc: "Protect your flooring investment with our professional floor care services. We strip away old wax buildup, clean the underlying surface, and apply fresh protective coatings that extend the life of your floors and keep them looking their best.",
    icon: "Layers",
    features: [
      "Complete floor stripping",
      "Multi-coat wax application",
      "High-speed buffing and burnishing",
      "VCT and tile floor care",
      "Concrete floor maintenance",
      "Scheduled maintenance programs"
    ],
    targetAudiences: [
      "Manufacturing floors",
      "Warehouse facilities",
      "Commercial buildings",
      "Retail spaces"
    ]
  }
];
