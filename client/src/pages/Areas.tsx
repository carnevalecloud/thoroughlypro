import { Link } from "wouter";
import { MapPin, ArrowRight, Phone, Factory } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { serviceTowns } from "@/data/areas";
import { siteInfo } from "@/data/siteInfo";
import heroImage from "@assets/generated_images/new_hampshire_industrial_landscape_aerial.png";

export default function Areas() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-areas">
      <Navbar />
      <main>
        <section className="relative min-h-[450px] flex items-center" data-testid="section-areas-hero">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-sky-500/20 text-sky-200 border-sky-500/30">
                <MapPin className="w-3 h-3 mr-1" />
                Southern New Hampshire
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-areas-hero-title">
                Our Service Areas
              </h1>
              <p className="text-xl text-slate-300">
                Serving industrial manufacturing facilities across Southern 
                New Hampshire since 1983.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white dark:bg-slate-900" data-testid="section-towns">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Communities We Serve
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                We maintain multiple industrial manufacturing facilities 
                across these Southern New Hampshire communities.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {serviceTowns.map((town, index) => (
                <Card 
                  key={town.name}
                  className="p-6 text-center hover-elevate overflow-visible"
                  data-testid={`card-town-${index}`}
                >
                  <div className="w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {town.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    New Hampshire
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 dark:bg-slate-800" data-testid="section-focus">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mx-auto mb-6">
                <Factory className="w-8 h-8 text-sky-600 dark:text-sky-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Industrial Manufacturing Focus
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                We specialize in maintaining industrial manufacturing facilities 
                with consistent daily cleaning to keep your operations 
                running smoothly.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6">
                  <p className="text-4xl font-bold text-sky-600 dark:text-sky-400 mb-2">40+</p>
                  <p className="text-slate-600 dark:text-slate-400">Years Experience</p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6">
                  <p className="text-4xl font-bold text-sky-600 dark:text-sky-400 mb-2">Daily</p>
                  <p className="text-slate-600 dark:text-slate-400">Reliable Service</p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6">
                  <p className="text-4xl font-bold text-sky-600 dark:text-sky-400 mb-2">7</p>
                  <p className="text-slate-600 dark:text-slate-400">Communities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900" data-testid="section-areas-cta">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-slate-300 mb-8">
                Contact us to discuss your facility's cleaning and maintenance needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote">
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    data-testid="button-areas-quote"
                  >
                    Request a Quote <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href={siteInfo.contact.phoneUrl}>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white/30 text-white bg-white/10 backdrop-blur-sm"
                    data-testid="button-areas-call"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {siteInfo.contact.phone}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
