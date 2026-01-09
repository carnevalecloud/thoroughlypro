import { MapPin } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { regionalHubs } from "@/data/areas";

export function RegionalMap() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50" data-testid="section-regional-map">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" data-testid="text-regions-title">
            Our Primary Service Areas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From the Upper Valley to the Capital Region, we provide comprehensive 
            facility services throughout the Granite State.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regionalHubs.map((hub, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white hover-elevate"
              data-testid={`card-region-${index}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{hub.name}</h3>
                  <p className="text-sm text-sky-600">{hub.focus}</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {hub.towns.map((town, townIndex) => (
                  <li 
                    key={townIndex} 
                    className="text-sm text-slate-600 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-400" />
                    {town}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/areas">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white" data-testid="button-view-all-areas">
              <MapPin className="w-5 h-5 mr-2" />
              View Detailed Service Areas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
