import { Link } from "wouter";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { regionalHubs, extendedTowns } from "@/data/areas";
import heroImage from "@assets/generated_images/clean_industrial_facility_interior.png";

export default function Areas() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-areas">
      <Navbar />
      <main>
        <section className="relative min-h-[400px] flex items-center" data-testid="section-areas-hero">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-areas-hero-title">
              Service Areas
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Proudly serving industrial and commercial facilities throughout 
              New Hampshire since 1983.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white" data-testid="section-regional-hubs">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Regional Service Hubs
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We've established strong presences in key regions across New Hampshire, 
                allowing us to provide prompt, responsive service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {regionalHubs.map((hub, index) => (
                <Card 
                  key={index}
                  className="p-8 border-l-4 border-l-sky-500"
                  data-testid={`card-hub-${index}`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {hub.name}
                      </h3>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-0">
                        {hub.focus}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {hub.towns.map((town, townIndex) => (
                      <div 
                        key={townIndex}
                        className="flex items-center gap-2 text-slate-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{town}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-slate-50 rounded-xl p-8 lg:p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                Extended Service Area
              </h3>
              <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
                Beyond our regional hubs, we also serve the following communities and 
                surrounding areas throughout New Hampshire.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {extendedTowns.map((town, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="text-slate-600 border-slate-300 py-1.5 px-3"
                    data-testid={`badge-town-${index}`}
                  >
                    {town}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-sky-600" data-testid="section-areas-coverage">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-5xl font-bold text-white mb-2">100+</p>
                <p className="text-sky-100">Active Facilities</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-white mb-2">40+</p>
                <p className="text-sky-100">Years of Service</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-white mb-2">50+</p>
                <p className="text-sky-100">Towns Covered</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900" data-testid="section-areas-cta">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Not Sure If We Serve Your Area?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              We're always looking to expand our service area. Contact us to discuss 
              your location and facility needs.
            </p>
            <Link href="/quote">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white"
                data-testid="button-areas-quote"
              >
                Contact Us <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
