import { Link } from "wouter";
import { ArrowRight, Warehouse, Wrench, Package } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const iconMap: Record<string, typeof Warehouse> = {
  Warehouse,
  Wrench,
  Package,
};

export function ServicesPreview() {
  const previewServices = services.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-white" data-testid="section-services-preview">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" data-testid="text-services-title">
            Our Core Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive facility maintenance and cleaning solutions tailored for 
            New Hampshire's industrial and commercial sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {previewServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Warehouse;
            return (
              <Card 
                key={service.id} 
                className="p-8 bg-white border-l-4 border-l-green-500 shadow-lg hover-elevate"
                data-testid={`card-service-${service.id}`}
              >
                <div className="w-14 h-14 rounded-lg bg-sky-100 flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.shortDesc}
                </p>
                <Link href="/services">
                  <Button 
                    variant="ghost" 
                    className="text-sky-600 hover:text-sky-700 p-0 h-auto font-medium"
                    data-testid={`button-learn-more-${service.id}`}
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button 
              variant="outline" 
              size="lg"
              className="border-sky-600 text-sky-600 hover:bg-sky-50"
              data-testid="button-view-all-services"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
