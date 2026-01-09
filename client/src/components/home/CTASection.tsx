import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteInfo } from "@/data/siteInfo";

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-900" data-testid="section-cta">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" data-testid="text-cta-title">
              Ready to Transform Your Facility?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Let's discuss how Thoroughly Pro can help maintain your facility 
              at the highest standards. Request a free walk-through consultation today.
            </p>
            
            <Link href="/quote">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white"
                data-testid="button-cta-walkthrough"
              >
                Request Free Walk-Through <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <a 
                href={siteInfo.contact.phoneUrl}
                className="flex items-center gap-4 group"
                data-testid="link-cta-phone"
              >
                <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Call Us Directly</p>
                  <p className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                    {siteInfo.contact.phone}
                  </p>
                </div>
              </a>

              <a 
                href={`mailto:${siteInfo.contact.email}`}
                className="flex items-center gap-4 group"
                data-testid="link-cta-email"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-600 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email Us</p>
                  <p className="text-lg font-medium text-white group-hover:text-sky-400 transition-colors">
                    {siteInfo.contact.email}
                  </p>
                </div>
              </a>

              <a 
                href={siteInfo.contact.address.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                data-testid="link-cta-address"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-600 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Our Location</p>
                  <p className="text-white group-hover:text-slate-300 transition-colors">
                    {siteInfo.contact.address.line1}, {siteInfo.contact.address.line2}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-700">
                <Clock className="w-5 h-5 text-green-400" />
                <p className="text-slate-300">
                  We respond to all inquiries within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
