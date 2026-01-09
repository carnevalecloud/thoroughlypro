import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Warehouse, Wrench, Package, Building, Layers, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { siteInfo, navigation } from "@/data/siteInfo";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Warehouse,
  Wrench,
  Package,
  Building,
  Layers,
  Sparkles,
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm"
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-28">
          <Link href="/" className="flex items-center" data-testid="link-logo">
            <img
              src="/tp-logo.webp"
              alt={siteInfo.name}
              className="h-16 lg:h-20 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navigation.main.map((item) => (
              item.name === "Services" ? (
                <NavigationMenu key={item.name}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={`bg-transparent px-0 h-auto hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent ${
                          location.startsWith("/services")
                            ? "text-sky-600"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                        data-testid="dropdown-services"
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-64 gap-1 p-2">
                          <li>
                            <Link
                              href="/services"
                              className="flex items-center gap-3 rounded-md p-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                              data-testid="link-dropdown-all-services"
                            >
                              <Layers className="w-4 h-4 text-sky-600" />
                              All Services
                            </Link>
                          </li>
                          {services.map((service) => {
                            const Icon = iconMap[service.icon] || Layers;
                            return (
                              <li key={service.id}>
                                <Link
                                  href={`/services/${service.id}`}
                                  className="flex items-center gap-3 rounded-md p-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                                  data-testid={`link-dropdown-${service.id}`}
                                >
                                  <Icon className="w-4 h-4 text-sky-600" />
                                  {service.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location === item.href
                      ? "text-sky-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={siteInfo.contact.phoneUrl}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              data-testid="link-phone-header"
            >
              <Phone className="w-4 h-4" />
              {siteInfo.contact.phone}
            </a>
            <Link href={navigation.cta.href}>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                data-testid="button-get-quote-header"
              >
                {navigation.cta.name}
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {isOpen && (
          <div
            className="lg:hidden py-4 border-t border-border"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-4">
              {navigation.main.map((item) => (
                item.name === "Services" ? (
                  <div key={item.name} className="flex flex-col gap-2">
                    <Link
                      href="/services"
                      className={`text-base font-medium ${
                        location.startsWith("/services") ? "text-sky-600" : "text-slate-600"
                      }`}
                      onClick={() => setIsOpen(false)}
                      data-testid="link-mobile-services"
                    >
                      {item.name}
                    </Link>
                    <div className="pl-4 flex flex-col gap-2">
                      {services.map((service) => {
                        const Icon = iconMap[service.icon] || Layers;
                        return (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700"
                            onClick={() => setIsOpen(false)}
                            data-testid={`link-mobile-${service.id}`}
                          >
                            <Icon className="w-4 h-4 text-sky-600" />
                            {service.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-base font-medium ${
                      location === item.href ? "text-sky-600" : "text-slate-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                    data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <a
                href={siteInfo.contact.phoneUrl}
                className="flex items-center gap-2 text-base font-medium text-slate-600"
                data-testid="link-phone-mobile"
              >
                <Phone className="w-5 h-5" />
                {siteInfo.contact.phone}
              </a>
              <Link href={navigation.cta.href} onClick={() => setIsOpen(false)}>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  data-testid="button-get-quote-mobile"
                >
                  {navigation.cta.name}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
