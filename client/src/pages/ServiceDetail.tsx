import { useParams, Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { services } from "@/data/services";
import { ArrowLeft, ArrowRight, CheckCircle, Phone, Warehouse, Wrench, Package, Building, Layers, Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/clean_industrial_facility_interior.png";

const iconMap: Record<string, typeof Warehouse> = {
  Warehouse,
  Wrench,
  Package,
  Building,
  Layers,
  Sparkles,
};

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Service Not Found</h1>
            <p className="text-slate-600 mb-8">The service you're looking for doesn't exist.</p>
            <Link href="/services">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = iconMap[service.icon] || Warehouse;
  const otherServices = services.filter(s => s.id !== serviceId).slice(0, 3);

  return (
    <div className="min-h-screen bg-background" data-testid={`page-service-${service.id}`}>
      <Navbar />
      <main>
        <section className="relative min-h-[400px] flex items-center" data-testid="section-service-hero">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
            <div className="w-20 h-20 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 border border-white/20">
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-service-title">
              {service.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {service.shortDesc}
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white" data-testid="section-service-details">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-slate-600 leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            <Card className="p-8 bg-slate-50 border-0 mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What's Included</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>

            <div className="bg-sky-600 rounded-xl p-8 lg:p-10 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-sky-100 mb-6 max-w-xl mx-auto">
                Contact us today for a free consultation and customized quote for your facility.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/quote">
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white px-8"
                    data-testid="button-service-quote"
                  >
                    Request a Quote <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:+16035551983">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8"
                    data-testid="button-service-call"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    (603) 555-1983
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50" data-testid="section-other-services">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Other Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherServices.map((otherService) => {
                const OtherIcon = iconMap[otherService.icon] || Warehouse;
                return (
                  <Link key={otherService.id} href={`/services/${otherService.id}`}>
                    <Card className="p-6 hover-elevate cursor-pointer h-full">
                      <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                        <OtherIcon className="w-6 h-6 text-sky-600" />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-2">{otherService.title}</h3>
                      <p className="text-sm text-slate-600">{otherService.shortDesc}</p>
                    </Card>
                  </Link>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <Link href="/services">
                <Button variant="outline" data-testid="button-view-all-services">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  View All Services
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
