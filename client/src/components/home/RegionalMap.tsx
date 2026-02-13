import { MapPin, Phone, Factory } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { siteInfo } from "@/data/siteInfo";
import { trackPhoneClick } from "@/utils/analytics";

const primaryTowns = ["Chesterfield", "Keene", "Concord"];
const secondaryTowns = ["Swanzey", "Lebanon", "Newport", "New London"];

export function RegionalMap() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" data-testid="section-regional-map">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-sky-400 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">Southern New Hampshire</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" data-testid="text-regions-title">
              Serving Industrial Facilities Across 7 Communities
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              We maintain manufacturing facilities throughout Southern New Hampshire 
              with consistent, reliable daily service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteInfo.contact.phoneUrl}
                onClick={() =>
                  trackPhoneClick(
                    siteInfo.contact.phone,
                    "Regional Map - Home"
                  )
                }
              >
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto"
                  data-testid="button-areas-call"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {siteInfo.contact.phone}
                </Button>
              </a>
              <Link href="/areas">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/30 text-white bg-white/5 w-full sm:w-auto"
                  data-testid="button-view-all-areas"
                >
                  View All Service Areas
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {primaryTowns.map((town, index) => (
                <div 
                  key={town}
                  className="group p-5 rounded-xl bg-white/10 border border-sky-500/30 hover:bg-white/15 transition-colors text-center"
                  data-testid={`chip-town-primary-${index}`}
                >
                  <div className="w-12 h-12 rounded-lg bg-sky-500/30 flex items-center justify-center mx-auto mb-3 group-hover:bg-sky-500/40 transition-colors">
                    <Factory className="w-6 h-6 text-sky-400" />
                  </div>
                  <p className="font-bold text-white text-lg">{town}</p>
                  <p className="text-xs text-slate-400">NH</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              {secondaryTowns.map((town, index) => (
                <div 
                  key={town}
                  className="group p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors text-center"
                  data-testid={`chip-town-secondary-${index}`}
                >
                  <p className="font-medium text-white text-sm">{town}</p>
                  <p className="text-xs text-slate-500">NH</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
