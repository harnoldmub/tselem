import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logoWhite from "@assets/logo-white_1762333728331.png";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "ACCUEIL" },
    { path: "/apropos", label: "À PROPOS" },
    { path: "/services", label: "SERVICES" },
    { path: "/portfolio", label: "PORTFOLIO" },
    { path: "/temoignages", label: "TÉMOIGNAGES" },
    { path: "/blog", label: "BLOG" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center" data-testid="link-home">
            <img src={logoWhite} alt="TSELEM Logo" className="h-8 sm:h-10" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-['Montserrat']">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                <span
                  className={`text-sm font-medium tracking-wide cursor-pointer transition-colors hover-elevate px-2 py-1 rounded ${
                    location === item.path
                      ? "text-destructive"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/rendez-vous" data-testid="button-book-cta">
              <Button variant="destructive" size="default" className="font-['Montserrat']">
                RÉSERVER
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary/95 backdrop-blur-sm">
          <nav className="px-4 py-6 space-y-4 font-['Montserrat']">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`mobile-link-${item.label.toLowerCase()}`}
              >
                <div
                  className={`block text-sm font-medium tracking-wide py-2 hover-elevate px-2 rounded ${
                    location === item.path ? "text-destructive" : "text-primary-foreground/90"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
            <Link href="/rendez-vous" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="destructive" className="w-full mt-4 font-['Montserrat']" data-testid="mobile-button-book">
                RÉSERVER
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
