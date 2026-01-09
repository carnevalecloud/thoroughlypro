import type { Service } from "@shared/schema";

export const services: Service[] = [
  {
    id: "industrial-cleaning",
    title: "Industrial Cleaning",
    shortDesc: "Deep cleaning for manufacturing floors, equipment, and production areas.",
    fullDesc: "Our industrial cleaning services are designed for the unique challenges of manufacturing environments. We use specialized equipment and eco-friendly solutions to maintain your facility's cleanliness while minimizing downtime.",
    icon: "Warehouse",
    features: [
      "High-pressure floor cleaning and degreasing",
      "Equipment and machinery cleaning",
      "Production area sanitization",
      "Dust and debris removal from overhead structures",
      "Spill containment and cleanup protocols"
    ]
  },
  {
    id: "facility-maintenance",
    title: "Facility Maintenance",
    shortDesc: "Comprehensive upkeep for commercial and industrial buildings.",
    fullDesc: "Keep your facility running smoothly with our comprehensive maintenance services. From routine inspections to emergency repairs, we handle all aspects of building upkeep so you can focus on your core business.",
    icon: "Wrench",
    features: [
      "Preventive maintenance programs",
      "HVAC system maintenance",
      "Plumbing and electrical repairs",
      "Structural inspections and repairs",
      "Emergency response services"
    ]
  },
  {
    id: "warehouse-services",
    title: "Warehouse Services",
    shortDesc: "Specialized solutions for distribution and storage facilities.",
    fullDesc: "Our warehouse services address the specific needs of distribution centers and storage facilities. We understand the importance of maintaining clean, safe, and efficient warehouse operations.",
    icon: "Package",
    features: [
      "Floor scrubbing and polishing",
      "Loading dock cleaning",
      "Rack and shelving cleaning",
      "Waste management and recycling",
      "Pest control coordination"
    ]
  },
  {
    id: "commercial-cleaning",
    title: "Commercial Cleaning",
    shortDesc: "Professional cleaning for offices and commercial spaces.",
    fullDesc: "Create a welcoming environment for your employees and customers with our commercial cleaning services. We provide flexible scheduling and customized cleaning plans to meet your specific needs.",
    icon: "Building",
    features: [
      "Office and common area cleaning",
      "Restroom sanitization",
      "Window and glass cleaning",
      "Carpet and upholstery care",
      "Green cleaning options available"
    ]
  },
  {
    id: "floor-care",
    title: "Floor Care",
    shortDesc: "Expert care for all types of industrial and commercial flooring.",
    fullDesc: "Protect your investment with our specialized floor care services. Whether you have concrete, epoxy, VCT, or specialty flooring, we have the expertise and equipment to keep your floors looking their best.",
    icon: "Layers",
    features: [
      "Concrete sealing and polishing",
      "Epoxy floor maintenance",
      "Strip and wax services",
      "Anti-slip treatments",
      "Floor restoration and repair"
    ]
  },
  {
    id: "specialty-cleaning",
    title: "Specialty Cleaning",
    shortDesc: "Customized cleaning solutions for unique environments.",
    fullDesc: "Some facilities require specialized cleaning approaches. Our team is trained and equipped to handle unique cleaning challenges in cleanrooms, laboratories, food processing areas, and other specialized environments.",
    icon: "Sparkles",
    features: [
      "Cleanroom and laboratory cleaning",
      "Food-safe cleaning protocols",
      "Post-construction cleanup",
      "Disaster recovery cleaning",
      "Biohazard remediation"
    ]
  }
];
