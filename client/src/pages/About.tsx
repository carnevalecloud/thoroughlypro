import { Link } from "wouter";
import { Headphones, Users, Award, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteInfo } from "@/data/siteInfo";
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
    description: "Expanded services across Southern New Hampshire, building lasting client relationships."
  },
  {
    year: "2005",
    title: "Industrial Focus",
    description: "Developed specialized programs for manufacturing and warehouse facilities."
  },
  {
    year: "2015",
    title: "Multi-Site Expertise",
    description: "Began managing multiple facilities for clients across several communities."
  },
  {
    year: "Today",
    title: "Trusted Partner",
    description: "Continuing to listen, collaborate, and deliver tailored solutions for industrial facilities."
  }
];

const values = [
  {
    icon: Headphones,
    title: "Professional",
    description: "We approach every client interaction with professionalism and expertise built over 40+ years."
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We work hand-in-hand with your team, treating every relationship as a true partnership."
  },
  {
    icon: Award,
    title: "Respectful",
    description: "We respect your expertise about your own facility and listen to your challenges first."
  },
  {
    icon: CheckCircle,
    title: "Thorough",
    description: "We don't cut corners. Every job is completed to the highest standards, every time."
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-about-hero-title">
              About Us
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Your trusted facility partner since 1983. We listen first, 
              then deliver tailored solutions.
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
                    Since 1983, Thoroughly Pro has been a trusted commercial cleaning partner 
                    in New Hampshire. What started as a small local operation has grown into 
                    a respected provider of industrial and commercial cleaning services.
                  </p>
                  <p>
                    Unlike standard vendors, we operate as a facility consultant. We start 
                    by listening to understand your unique challenges, because you're the 
                    expert on what hardships you experience day to day. Only after listening 
                    do we bring our experience to bear in the form of a tailored solution.
                  </p>
                  <p>
                    Today, we specialize in long-term partnerships with industrial manufacturing 
                    facilities across Southern New Hampshire. We prioritize health, safety, 
                    and reliability in everything we do.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
                Our Values
              </h2>
              <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
                These four words guide everything we do.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Card 
                    key={index}
                    className="p-6 text-center"
                    data-testid={`value-${index}`}
                  >
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
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
              We're interested to hear what challenges you face. Give us a call 
              to schedule a walk-through.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={siteInfo.contact.phoneUrl}>
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  data-testid="button-about-call"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {siteInfo.contact.phone}
                </Button>
              </a>
              <Link href="/quote">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/30 text-white bg-white/10 backdrop-blur-sm"
                  data-testid="button-about-quote"
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
