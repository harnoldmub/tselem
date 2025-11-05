import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logoWhite from "@assets/logo-white_1762333728331.png";

interface SubMenuItem {
  path: string;
  label: string;
  description?: string;
}

interface NavItem {
  path?: string;
  label: string;
  submenu?: SubMenuItem[];
}

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { path: "/", label: "ACCUEIL" },
    {
      label: "L'ESPRIT TSELEM",
      submenu: [
        { path: "/apropos", label: "À propos", description: "Découvrez notre histoire" },
        { path: "/temoignages", label: "Témoignages", description: "Ce que nos clients disent" },
        { path: "/blog", label: "Blog", description: "Actualités et inspirations" },
      ],
    },
    {
      label: "RÉALISATIONS",
      submenu: [
        { path: "/portfolio", label: "Portfolio", description: "Nos meilleurs projets" },
        { path: "/etudes-de-cas", label: "Études de cas", description: "Projets en détail" },
      ],
    },
    { path: "/services", label: "SERVICES" },
    { path: "/contact", label: "CONTACT" },
  ];

  const toggleMobileSubMenu = (label: string) => {
    setMobileSubMenuOpen(mobileSubMenuOpen === label ? null : label);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md text-primary-foreground border-b border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center" data-testid="link-home">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src={logoWhite}
              alt="TSELEM Logo"
              className="h-8 sm:h-10"
            />
          </Link>

          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="gap-2">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={item.label}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger
                        className="bg-transparent text-primary-foreground/90 hover:text-primary-foreground hover-elevate font-['Montserrat'] text-sm font-medium tracking-wide data-[state=open]:text-destructive"
                        data-testid={`menu-${item.label.toLowerCase().replace(/'/g, '').replace(/ /g, '-')}`}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="grid w-[400px] gap-3 p-4 bg-primary"
                        >
                          {item.submenu.map((subItem) => (
                            <li key={subItem.path}>
                              <Link href={subItem.path}>
                                <NavigationMenuLink asChild>
                                  <a
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover-elevate active-elevate-2 cursor-pointer"
                                    data-testid={`submenu-${subItem.label.toLowerCase().replace(/ /g, '-')}`}
                                  >
                                    <div className="text-sm font-medium leading-none text-primary-foreground font-['Montserrat']">
                                      {subItem.label}
                                    </div>
                                    {subItem.description && (
                                      <p className="line-clamp-2 text-xs leading-snug text-primary-foreground/70 font-['Cormorant_Garamond']">
                                        {subItem.description}
                                      </p>
                                    )}
                                  </a>
                                </NavigationMenuLink>
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.path || "/"}>
                      <span
                        className={`inline-flex items-center justify-center h-9 px-4 py-2 text-sm font-medium tracking-wide cursor-pointer transition-colors hover-elevate rounded font-['Montserrat'] ${
                          location === item.path
                            ? "text-destructive"
                            : "text-primary-foreground/90 hover:text-primary-foreground"
                        }`}
                        data-testid={`link-${item.label.toLowerCase()}`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

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

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-primary/98 backdrop-blur-sm border-t border-primary-foreground/10"
          >
            <nav className="px-4 py-6 space-y-2 font-['Montserrat']">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleMobileSubMenu(item.label)}
                        className="flex items-center justify-between w-full text-sm font-medium tracking-wide py-2 px-2 rounded hover-elevate text-primary-foreground/90"
                        data-testid={`mobile-menu-${item.label.toLowerCase().replace(/'/g, '').replace(/ /g, '-')}`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            mobileSubMenuOpen === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileSubMenuOpen === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.path}
                                href={subItem.path}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <div
                                  className="block text-sm py-2 px-2 rounded hover-elevate text-primary-foreground/80"
                                  data-testid={`mobile-submenu-${subItem.label.toLowerCase().replace(/ /g, '-')}`}
                                >
                                  {subItem.label}
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.path || "/"}
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
                  )}
                </div>
              ))}
              <Link href="/rendez-vous" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="destructive"
                  className="w-full mt-4 font-['Montserrat']"
                  data-testid="mobile-button-book"
                >
                  RÉSERVER
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
