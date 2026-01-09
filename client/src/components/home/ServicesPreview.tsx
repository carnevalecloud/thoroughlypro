import { Link } from "wouter";
import { ArrowRight, Warehouse, Wrench, Package } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

import industrialCleaningImg from "@assets/generated_images/industrial_floor_cleaning_scene.png";
import facilityMaintenanceImg from "@assets/generated_images/facility_maintenance_technician_working.png";
import warehouseServicesImg from "@assets/generated_images/clean_warehouse_interior_scene.png";

const iconMap: Record<string, typeof Warehouse> = {
  Warehouse,
  Wrench,
  Package,
};

const imageMap: Record<string, string> = {
  "industrial-cleaning": industrialCleaningImg,
  "facility-maintenance": facilityMaintenanceImg,
  "warehouse-services": warehouseServicesImg,
};

export function ServicesPreview() {
  const previewServices = services.slice(0, 3);

  return (
    <section
      className="py-16 lg:py-24 bg-white"
      data-testid="section-services-preview"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
            data-testid="text-services-title"
          >
            Our Core Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive facility maintenance and cleaning solutions tailored
            for New Hampshire's industrial and commercial sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {previewServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Warehouse;
            const serviceImage = imageMap[service.id];

            return (
              <Link href={`/services#${service.id}`}>
                <Card
                  key={service.id}
                  className="overflow-hidden bg-white shadow-lg hover-elevate text-center flex flex-col cursor-pointer"
                  data-testid={`card-service-${service.id}`}
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    {serviceImage && (
                      <img
                        src={serviceImage}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    )}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                      <IconComponent className="w-6 h-6 text-sky-600" />
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col items-center">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <div className="mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-sky-600 text-sky-600 hover:bg-sky-50 font-semibold"
                        data-testid={`button-learn-more-${service.id}`}
                      >
                        Learn More <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button
              size="lg"
              className="bg-sky-600 hover:bg-sky-700 text-white shadow-lg"
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
