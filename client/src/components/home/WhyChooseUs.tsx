import { CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/clean_industrial_facility_interior.png";

const differentiators = [
  {
    number: "01",
    title: "Local Expertise Since 1983",
    description: "Four decades of understanding New Hampshire's industrial landscape and building lasting relationships."
  },
  {
    number: "02",
    title: "Customized Solutions",
    description: "No cookie-cutter approaches. Every facility gets a tailored maintenance plan based on specific needs."
  },
  {
    number: "03",
    title: "Reliable & Responsive",
    description: "We respond within 24 hours and show up when we say we will. Your operations depend on it."
  },
  {
    number: "04",
    title: "Comprehensive Services",
    description: "From daily cleaning to emergency maintenance, we handle all aspects of facility upkeep."
  },
  {
    number: "05",
    title: "Licensed & Insured",
    description: "Full coverage and proper certifications for peace of mind and compliance requirements."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white" data-testid="section-why-choose-us">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6" data-testid="text-why-title">
              Why Facility Managers Choose Thoroughly Pro
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              We understand the unique challenges of maintaining industrial and commercial 
              facilities. Here's what sets us apart from the competition.
            </p>

            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-4"
                  data-testid={`differentiator-${index}`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-sky-600">{item.number}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Clean industrial facility maintained by Thoroughly Pro"
                className="w-full h-full object-cover"
                data-testid="img-why-choose"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-lg shadow-xl max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-semibold">Trusted Partner</span>
              </div>
              <p className="text-sm text-green-100">
                Over 100 active facilities trust us with their maintenance needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
