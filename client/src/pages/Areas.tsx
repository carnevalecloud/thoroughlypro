import { Link } from "wouter";
import { MapPin, ArrowRight, CheckCircle, Building2, Phone } from "lucide-react";
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
                New Hampshire
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-areas-hero-title">
                Our Service Areas
              </h1>
              <p className="text-xl text-slate-300 mb-6">
                Proudly serving industrial and commercial facilities across 
                New Hampshire's key business regions since 1983.
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceTowns.map((town) => (
                  <Badge 
                    key={town.name}
                    variant="outline" 
                    className="text-white border-white/30 bg-white/10 backdrop-blur-sm"
                  >
                    {town.name}
                  </Badge>
                ))}
              </div>
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
                We've built lasting relationships with facilities in these key New Hampshire 
                communities, providing reliable service you can count on.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceTowns.map((town, index) => (
                <Card 
                  key={town.name}
                  className="p-6 hover-elevate transition-all duration-200 overflow-visible"
                  data-testid={`card-town-${index}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-md bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {town.name}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        New Hampshire
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                    {town.description}
                  </p>
                  
                  <div className="space-y-2">
                    {town.highlights.map((highlight, hIndex) => (
                      <div 
                        key={hIndex}
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 dark:bg-slate-800" data-testid="section-coverage-info">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Reliable Service, Local Expertise
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  With over 40 years of experience serving New Hampshire's industrial and 
                  commercial facilities, we understand the unique needs of businesses in each 
                  community we serve.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Prompt Response Times</span>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Same-day service available for urgent needs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Local Knowledge</span>
                      <p className="text-sm text-slate-600 dark:text-slate-400">We know the facilities and businesses in your community</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Consistent Quality</span>
                      <p className="text-sm text-slate-600 dark:text-slate-400">The same high standards across all service areas</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Serving 7 Key Communities
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Focused coverage for better service
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 text-center border-t border-slate-200 dark:border-slate-700 pt-8">
                  <div>
                    <p className="text-4xl font-bold text-sky-600 dark:text-sky-400 mb-1">40+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Years of Service</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-sky-600 dark:text-sky-400 mb-1">1983</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Established</p>
                  </div>
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
                Whether you're in Keene, Concord, or anywhere in between, we're here to help 
                keep your facility running smoothly.
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
