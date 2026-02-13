import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteInfo } from "@/data/siteInfo";
import { trackPhoneClick } from "@/utils/analytics";

export function CTASection() {
  return (
    <section className="py-16 bg-slate-900" data-testid="section-cta">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4" data-testid="text-cta-title">
            Ready to Transform Your Facility?
          </h2>
          <p className="text-slate-300 mb-8">
            Let's discuss how Thoroughly Pro can help maintain your facility 
            at the highest standards. Give us a call to schedule a walk-through.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteInfo.contact.phoneUrl}
              onClick={() =>
                trackPhoneClick(siteInfo.contact.phone, "CTA Section")
              }
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                data-testid="button-cta-call"
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
                data-testid="button-cta-quote"
              >
                Request a Consultation <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
