import { Link } from "wouter";
import { Warehouse, Package, Layers, Sparkles, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";
import heroImage from "@assets/generated_images/clean_industrial_facility_interior.png";

const iconMap: Record<string, typeof Warehouse> = {
  Warehouse,
  Package,
  Layers,
  Sparkles,
};

const primaryServiceIds = ["industrial-cleaning", "facility-cleanouts"];
const secondaryServiceIds = ["carpet-cleaning", "floor-care"];

export default function Services() {
  const primaryServices = services.filter(s => primaryServiceIds.includes(s.id));
  const secondaryServices = services.filter(s => secondaryServiceIds.includes(s.id));

  return (
    <div className="min-h-screen bg-background" data-testid="page-services">
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
            <div className="text-center mb-8">
              <Badge className="bg-sky-100 text-sky-700 border-sky-200 mb-4">Core Services</Badge>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Primary Services</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {primaryServices.map((service) => {
                const IconComponent = iconMap[service.icon] || Warehouse;
                return (
                  <Link key={service.id} href={`/services/${service.id}`}>
                    <Card 
                      className="p-8 bg-white shadow-lg border-2 border-sky-100 hover-elevate cursor-pointer h-full flex flex-col"
                      data-testid={`card-service-${service.id}`}
                    >
                      <div className="w-16 h-16 rounded-xl bg-sky-100 flex items-center justify-center mb-5">
                        <IconComponent className="w-8 h-8 text-sky-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-3">
                        {service.title}
                      </h2>
                      <p className="text-slate-600 leading-relaxed flex-grow">
                        {service.shortDesc}
                      </p>
                      <div className="mt-6 flex items-center text-sky-600 font-medium">
                        Learn more <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-slate-700">Additional Services</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {secondaryServices.map((service) => {
                const IconComponent = iconMap[service.icon] || Warehouse;
                return (
                  <Link key={service.id} href={`/services/${service.id}`}>
                    <Card 
                      className="p-6 bg-slate-50 hover-elevate cursor-pointer h-full flex flex-col"
                      data-testid={`card-service-${service.id}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-slate-600" />
                        </div>
                        <div className="flex-grow">
                          <h2 className="text-lg font-bold text-slate-900 mb-1">
                            {service.title}
                          </h2>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {service.shortDesc}
                          </p>
                          <div className="mt-3 flex items-center text-sky-600 font-medium text-sm">
                            Learn more <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
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
