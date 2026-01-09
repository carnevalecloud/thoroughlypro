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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service) => {
                const IconComponent = iconMap[service.icon] || Warehouse;
                return (
                  <div key={service.id} id={service.id} className="scroll-mt-24">
                    <Card 
                      className="p-8 bg-white shadow-lg h-full flex flex-col border-t-4 border-t-sky-600"
                      data-testid={`card-service-${service.id}`}
                    >
                      <div className="w-16 h-16 rounded-lg bg-sky-100 flex items-center justify-center mb-6">
                        <IconComponent className="w-8 h-8 text-sky-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                        {service.fullDesc}
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider">Key Features</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href="/quote">
                        <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                          Inquire About This Service
                        </Button>
                      </Link>
                    </Card>
                  </div>
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
