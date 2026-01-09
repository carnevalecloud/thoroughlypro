import { Link } from "wouter";
import { Calendar, Award, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/clean_industrial_facility_interior.png";

const timeline = [
  {
    year: "1983",
    title: "Foundation",
    description: "Thoroughly Pro was founded in Sunapee, NH with a commitment to quality facility maintenance."
  },
  {
    year: "1995",
    title: "Regional Expansion",
    description: "Expanded services to cover the Upper Valley, Capital Region, and Keene areas."
  },
  {
    year: "2005",
    title: "Industrial Specialization",
    description: "Developed specialized programs for manufacturing and warehouse facilities."
  },
  {
    year: "2015",
    title: "100+ Clients Milestone",
    description: "Reached the milestone of serving over 100 active facilities across New Hampshire."
  },
  {
    year: "Today",
    title: "Industry Leader",
    description: "Continuing to set the standard for industrial facility maintenance in the Granite State."
  }
];

const values = [
  {
    icon: Calendar,
    title: "Reliability",
    description: "We show up on time, every time. Your operations depend on consistent, dependable service."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We take pride in delivering results that exceed expectations, every single time."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We view every client relationship as a long-term partnership built on trust and mutual success."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-about">
      <Navbar />
      <main>
        <section className="relative min-h-[400px] flex items-center" data-testid="section-about-hero">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-about-hero-title">
              About Us
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Four decades of trusted facility maintenance for New Hampshire's 
              industrial and commercial sectors.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white" data-testid="section-about-story">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Since 1983, Thoroughly Pro has been the trusted partner for facility 
                    managers across New Hampshire. What started as a small local operation 
                    has grown into the region's leading industrial and commercial maintenance 
                    provider.
                  </p>
                  <p>
                    Our success is built on a simple philosophy: listen to our clients, 
                    understand their unique challenges, and deliver customized solutions 
                    that keep their facilities running at peak performance.
                  </p>
                  <p>
                    Today, we serve over 100 active facilities across the Granite State, 
                    from manufacturing plants and warehouses to commercial offices and 
                    medical centers. Our team brings decades of combined experience to 
                    every project we undertake.
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={heroImage} 
                  alt="Thoroughly Pro facility maintenance"
                  className="w-full h-full object-cover"
                  data-testid="img-about-story"
                />
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
                Our Journey
              </h2>
              <div className="relative">
                <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-sky-200" />
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div 
                      key={index}
                      className={`relative flex items-start gap-8 ${
                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      }`}
                      data-testid={`timeline-${index}`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} hidden lg:block`} />
                      <div className="relative z-10 w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-sm font-bold text-white">{item.year}</span>
                      </div>
                      <div className="flex-1">
                        <Card className="p-6">
                          <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                          <p className="text-slate-600 text-sm">{item.description}</p>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
                Our Values
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <Card 
                    key={index}
                    className="p-8 text-center"
                    data-testid={`value-${index}`}
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-slate-600">
                      {value.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900" data-testid="section-about-cta">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Partner with Thoroughly Pro?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the 100+ facilities that trust us with their maintenance needs. 
              Let's discuss how we can help your facility thrive.
            </p>
            <Link href="/quote">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white"
                data-testid="button-about-quote"
              >
                Request a Consultation <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
