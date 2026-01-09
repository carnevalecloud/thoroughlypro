import { Link } from "wouter";
import { Warehouse, Wrench, Package, Building, Layers, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import heroImage from "@assets/generated_images/clean_industrial_facility_interior.png";

const iconMap: Record<string, typeof Warehouse> = {
  Warehouse,
  Wrench,
  Package,
  Building,
  Layers,
  Sparkles,
};

export default function Services() {
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
              Comprehensive facility maintenance and cleaning solutions tailored 
              for industrial and commercial environments.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white" data-testid="section-services-list">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const IconComponent = iconMap[service.icon] || Warehouse;
                return (
                  <Link key={service.id} href={`/services/${service.id}`}>
                    <Card 
                      className="p-6 bg-white shadow-lg hover-elevate cursor-pointer h-full flex flex-col"
                      data-testid={`card-service-${service.id}`}
                    >
                      <div className="w-14 h-14 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                        <IconComponent className="w-7 h-7 text-sky-600" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 mb-2">
                        {service.title}
                      </h2>
                      <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                        {service.shortDesc}
                      </p>
                      <div className="mt-4 flex items-center text-sky-600 font-medium text-sm">
                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
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
