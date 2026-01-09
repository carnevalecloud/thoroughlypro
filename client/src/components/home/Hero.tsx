import { Link } from "wouter";
import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteInfo } from "@/data/siteInfo";
import heroImage from "@assets/generated_images/nh_facility_with_mountain_views.png";

export function Hero() {
  return (
    <section
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/20">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Serving 100+ facilities across NH
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            data-testid="text-hero-headline"
          >
            New Hampshire's Trusted Industrial Facility Partner Since 1983
          </h1>

          <p
            className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto"
            data-testid="text-hero-subheadline"
          >
            Expert maintenance and cleaning for manufacturing, warehousing, and
            commercial facilities. We listen, we consult, and we deliver
            tailored solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/quote">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                data-testid="button-hero-walkthrough"
              >
                Request Walk-Through
              </Button>
            </Link>
            <a href={siteInfo.contact.phoneUrl}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 text-base"
                data-testid="button-hero-call"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {siteInfo.contact.phone}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
