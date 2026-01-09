import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteInfo, navigation } from "@/data/siteInfo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6" data-testid="link-footer-logo">
              <img 
                src="/tp-logo.webp" 
                alt={siteInfo.name}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-slate-400 max-w-md leading-relaxed mb-6">
              Serving New Hampshire's industrial and commercial sectors since 1983. 
              We listen, we consult, and we deliver tailored facility maintenance solutions.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Clock className="w-4 h-4" />
              <span>Response within 24 hours</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6" data-testid="text-footer-quicklinks">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-slate-400 hover:text-white transition-colors"
                    data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/quote" className="text-slate-400 hover:text-white transition-colors" data-testid="link-footer-quote">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6" data-testid="text-footer-contact">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href={siteInfo.contact.phoneUrl} 
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                  data-testid="link-footer-phone"
                >
                  <Phone className="w-5 h-5 text-green-500" />
                  {siteInfo.contact.phone}
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${siteInfo.contact.email}`} 
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                  data-testid="link-footer-email"
                >
                  <Mail className="w-5 h-5 text-green-500" />
                  {siteInfo.contact.email}
                </a>
              </li>
              <li>
                <a 
                  href={siteInfo.contact.address.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors"
                  data-testid="link-footer-address"
                >
                  <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>
                    {siteInfo.contact.address.line1}<br />
                    {siteInfo.contact.address.line2}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500" data-testid="text-footer-copyright">
              &copy; {currentYear} {siteInfo.name}. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Licensed & Insured | Serving New Hampshire Since 1983
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
