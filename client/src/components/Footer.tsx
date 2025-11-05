import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logoWhite from "@assets/logo-white_1762333728331.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logoWhite} alt="TSELEM Logo" className="h-10 mb-4" />
            <p className="text-primary-foreground/80 mb-4">
              Studio professionnel de photographie et production vidéo. Chaque pixel compte.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5 text-primary-foreground hover:text-destructive transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5 text-primary-foreground hover:text-destructive transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground hover:text-destructive transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-['Montserrat']">LIENS RAPIDES</h3>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Accueil" },
                { path: "/apropos", label: "À Propos" },
                { path: "/services", label: "Services" },
                { path: "/portfolio", label: "Portfolio" },
                { path: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className="text-primary-foreground/80 hover:text-primary-foreground hover-elevate cursor-pointer transition-colors px-1 inline-block">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-['Montserrat']">SERVICES</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Photographie</li>
              <li>Production Vidéo</li>
              <li>Design Graphique</li>
              <li>Retouche Photo</li>
              <li>Packages Personnalisés</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-['Montserrat']">CONTACT</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Abidjan, Côte d'Ivoire
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+2250700000000"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-phone"
                >
                  +225 07 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:contact@tselem.studio"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-email"
                >
                  contact@tselem.studio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} TSELEM. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
