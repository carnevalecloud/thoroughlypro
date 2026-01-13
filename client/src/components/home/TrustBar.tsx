import { Clock, Headphones, Shield, MapPin } from "lucide-react";

const stats = [
  { icon: Clock, label: "Since 1983", sublabel: "40+ Years Experience" },
  { icon: Headphones, label: "We Listen First", sublabel: "Tailored Solutions" },
  { icon: Shield, label: "Licensed & Insured", sublabel: "Full Coverage" },
  { icon: MapPin, label: "Southern NH", sublabel: "7 Communities Served" },
];

export function TrustBar() {
  return (
    <section className="bg-slate-100 border-y border-slate-200" data-testid="section-trust-bar">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4"
              data-testid={`trust-stat-${index}`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">{stat.label}</p>
                <p className="text-sm text-slate-500">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
