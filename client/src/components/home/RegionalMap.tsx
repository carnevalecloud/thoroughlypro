import { MapPin, Phone, Factory } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { serviceTowns } from "@/data/areas";
import { siteInfo } from "@/data/siteInfo";

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
              with consistent, reliable service on 5-day minimum schedules.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-2xl lg:text-3xl font-bold text-sky-400">40+</p>
                <p className="text-sm text-slate-400">Years</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-2xl lg:text-3xl font-bold text-sky-400">7</p>
                <p className="text-sm text-slate-400">Communities</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-2xl lg:text-3xl font-bold text-sky-400">5-Day</p>
                <p className="text-sm text-slate-400">Minimum</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={siteInfo.contact.phoneUrl}>
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            {serviceTowns.map((town, index) => (
              <div 
                key={town.name}
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-sky-500/30 transition-colors"
                data-testid={`chip-town-${index}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/30 transition-colors">
                    <Factory className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{town.name}</p>
                    <p className="text-xs text-slate-400">New Hampshire</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
