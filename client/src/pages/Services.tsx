import { Link } from "wouter";
import { Warehouse, Package, Layers, Sparkles, ArrowRight } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import heroImage from "@assets/generated_images/clean_industrial_facility_interior.png";
import industrialCleaningImage from "@assets/generated_images/industrial_floor_cleaning_scene.png";
import warehouseImage from "@assets/generated_images/clean_warehouse_interior_scene.png";
import commercialCleaningImage from "@assets/generated_images/commercial_office_cleaning_scene.png";
import floorCareImage from "@assets/generated_images/industrial_floor_polishing_work.png";

const iconMap: Record<string, typeof Warehouse> = {
  Warehouse,
  Package,
  Layers,
  Sparkles,
};

const imageMap: Record<string, string> = {
  "industrial-cleaning": industrialCleaningImage,
  "facility-cleanouts": warehouseImage,
  "carpet-cleaning": commercialCleaningImage,
  "floor-care": floorCareImage,
};

export default function Services() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-services">
      <PageHead
        title="Our Services"
        description="Tailored cleaning and maintenance solutions for industrial manufacturing facilities across Southern New Hampshire. Commercial cleaning, facility cleanouts, carpet cleaning, and floor care."
      />
      <Navbar />
      <main>
        <section className="relative min-h-[400px] flex items-center" data-testid="section-services-hero">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-services-hero-title">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Tailored cleaning and maintenance solutions for industrial 
              manufacturing facilities. We listen first, then deliver.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white" data-testid="section-services-list">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => {
                const IconComponent = iconMap[service.icon] || Warehouse;
                const serviceImage = imageMap[service.id] || industrialCleaningImage;
                return (
                  <Link key={service.id} href={`/services/${service.id}`}>
                    <Card 
                      className="overflow-hidden hover-elevate cursor-pointer h-full"
                      data-testid={`card-service-${service.id}`}
                    >
                      <div className="relative h-48">
                        <img 
                          src={serviceImage} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <div className="w-12 h-12 rounded-lg bg-sky-600 flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-bold text-slate-900 mb-2">
                          {service.title}
                        </h2>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {service.shortDesc}
                        </p>
                        <div className="mt-4 flex items-center text-sky-600 font-medium text-sm">
                          Learn more <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>

            <div className="mt-16 text-center bg-slate-900 rounded-xl p-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Every facility is unique. Contact us to discuss your specific requirements 
                and we'll create a tailored maintenance plan just for you.
              </p>
              <Link href="/quote">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  data-testid="button-services-quote"
                >
                  Request a Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
