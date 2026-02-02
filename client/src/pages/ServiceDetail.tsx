import { useParams, Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { siteInfo } from "@/data/siteInfo";
import { ArrowLeft, ArrowRight, CheckCircle, Phone, Warehouse, Package, Layers, Sparkles, Users, Quote, Shield, Clock, Award } from "lucide-react";
import industrialCleaningImage from "@assets/generated_images/industrial_floor_cleaning_scene.png";
import warehouseImage from "@assets/generated_images/clean_warehouse_interior_scene.png";
import commercialCleaningImage from "@assets/generated_images/commercial_office_cleaning_scene.png";
import floorCareImage from "@assets/generated_images/industrial_floor_polishing_work.png";

const imageMap: Record<string, string> = {
  "industrial-cleaning": industrialCleaningImage,
  "facility-cleanouts": warehouseImage,
  "carpet-cleaning": commercialCleaningImage,
  "floor-care": floorCareImage,
};

const iconMap: Record<string, typeof Warehouse> = {
  Warehouse,
  Package,
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
  const heroImage = imageMap[service.id] || industrialCleaningImage;
  const otherServices = services.filter(s => s.id !== serviceId).slice(0, 3);
  const displayedTestimonials = testimonials.slice(0, 2);

  return (
    <div className="min-h-screen bg-background" data-testid={`page-service-${service.id}`}>
      <Navbar />
      <main>
        <section className="relative min-h-[400px] flex items-center" data-testid="section-service-hero">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
          
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
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Service</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {service.fullDesc}
                  </p>
                </div>

                <Card className="p-8 bg-slate-50 border-0">
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

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-sky-600" />
                    Who This Service Is For
                  </h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {service.targetAudiences.map((audience, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-2 px-4 py-3 bg-sky-50 rounded-lg text-slate-700"
                      >
                        <CheckCircle className="w-4 h-4 text-sky-600 flex-shrink-0" />
                        {audience}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <Card className="p-8 shadow-lg sticky top-32 z-40">
                  <h2 className="text-xl font-bold text-slate-900 mb-3">
                    Ready to Transform Your Facility?
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Give us a call to schedule a walk-through and discuss your needs.
                  </p>
                  <div className="space-y-3">
                    <Link href="/quote">
                      <Button 
                        size="lg" 
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        data-testid="button-service-quote"
                      >
                        Request a Quote <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <a href={siteInfo.contact.phoneUrl} className="block">
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="w-full"
                        data-testid="button-service-call"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        {siteInfo.contact.phone}
                      </Button>
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50" data-testid="section-trust-building">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">Why Choose Thoroughly Pro</h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              Trusted by Southern NH facilities since 1983
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">40+ Years Experience</h3>
                <p className="text-sm text-slate-600">Serving industrial and commercial clients since 1983</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Fully Insured</h3>
                <p className="text-sm text-slate-600">Complete liability coverage for your peace of mind</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Flexible Scheduling</h3>
                <p className="text-sm text-slate-600">Work around your operations with minimal disruption</p>
              </Card>
            </div>

            {/* <div className="grid md:grid-cols-2 gap-6">
              {displayedTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="p-6">
                  <Quote className="w-8 h-8 text-sky-200 mb-4" />
                  <p className="text-slate-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.company}, {testimonial.location}</p>
                  </div>
                </Card>
              ))}
            </div> */}
          </div>
        </section>

        <section className="py-16 bg-white" data-testid="section-other-services">
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
