import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoWhite from "@assets/logo-white_1762333728331.png";
import icon from "@assets/tselem_icon_1762333728332.png";

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

const navItems: NavItem[] = [
  { path: "/", label: "Accueil" },
  {
    label: "Studio",
    submenu: [
      { path: "/apropos", label: "À propos", description: "Maison de l'image, vision et méthode." },
      { path: "/temoignages", label: "Témoignages", description: "La parole des clients Tselem." },
      { path: "/blog", label: "Journal", description: "Conseils, culture image et coulisses." },
    ],
  },
  {
    label: "Travaux",
    submenu: [
      { path: "/portfolio", label: "Portfolio", description: "Sélection photo, vidéo et branding." },
      { path: "/etudes-de-cas", label: "Études de cas", description: "Projets racontés façon magazine." },
    ],
  },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const isHomeAtTop = location === "/" && !scrolled;
  const darkMode = isHomeAtTop;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location]);

  const textColor = darkMode ? "text-[#F8F6F3]" : "text-[#111111]";
  const mutedColor = darkMode ? "text-[#F8F6F3]/72" : "text-[#111111]/62";

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-4 py-4"
    >
      <div
        className={`mx-auto max-w-[1440px] rounded-full border px-5 shadow-[0_20px_80px_rgba(17,17,17,0.08)] backdrop-blur-2xl transition-all duration-500 sm:px-7 ${
          darkMode
            ? "border-[#F8F6F3]/16 bg-[#111111]/24"
            : "border-white/80 bg-[#F8F6F3]/88"
        }`}
      >
        <div className="flex h-14 items-center justify-between gap-6">
          <Link href="/" className="group flex items-center gap-3" data-testid="link-home">
            {darkMode ? (
              <motion.img src={logoWhite} alt="TSELEM Logo" className="h-8 w-auto" layoutId="tselem-logo" />
            ) : (
              <motion.span layoutId="tselem-logo" className="flex items-center gap-3">
                <img src={icon} alt="" className="h-8 w-8" />
                <span className="text-sm font-black uppercase tracking-[0.28em] text-[#111111]">Tselem</span>
              </motion.span>
            )}
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = item.path === location || item.submenu?.some((sub) => sub.path === location);
              return (
                <div key={item.label} className="group relative">
                  {item.submenu ? (
                    <button
                      className={`inline-flex h-10 items-center gap-1 px-4 text-[11px] font-bold uppercase tracking-[0.22em] transition-colors ${
                        active
                          ? "text-[#BE1E2D]"
                          : darkMode
                            ? "text-[#F8F6F3]/72 hover:text-[#F8F6F3]"
                            : "text-[#111111]/62 hover:text-[#111111]"
                      }`}
                      data-testid={`menu-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link href={item.path || "/"}>
                      <span
                        className={`inline-flex h-10 cursor-pointer items-center px-4 text-[11px] font-bold uppercase tracking-[0.22em] transition-colors ${
                          active
                            ? "text-[#BE1E2D]"
                            : darkMode
                              ? "text-[#F8F6F3]/72 hover:text-[#F8F6F3]"
                              : "text-[#111111]/62 hover:text-[#111111]"
                        }`}
                        data-testid={`link-${item.label.toLowerCase()}`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  )}

                  {item.submenu && (
                    <div className="pointer-events-none absolute left-1/2 top-full w-[420px] -translate-x-1/2 translate-y-4 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="mt-5 rounded-[2rem] border border-white/80 bg-[#F8F6F3] p-3 shadow-[0_30px_90px_rgba(17,17,17,0.16)]">
                        {item.submenu.map((subItem) => (
                          <Link key={subItem.path} href={subItem.path}>
                            <span className="group/item flex cursor-pointer items-start justify-between gap-6 rounded-[1.4rem] p-4 hover:bg-[#111111]">
                              <span>
                                <span className="block text-sm font-semibold text-[#111111] group-hover/item:text-[#F8F6F3]">
                                  {subItem.label}
                                </span>
                                {subItem.description && (
                                  <span className="mt-1 block text-xs leading-relaxed text-[#111111]/58 group-hover/item:text-[#F8F6F3]/62">
                                    {subItem.description}
                                  </span>
                                )}
                              </span>
                              <ArrowUpRight className="mt-1 h-4 w-4 text-[#BE1E2D]" />
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/admin/login">
              <span className={`text-[11px] font-bold uppercase tracking-[0.22em] ${mutedColor} transition-colors hover:text-[#BE1E2D]`}>
                Studio OS
              </span>
            </Link>
            <Link href="/rendez-vous" data-testid="button-book-cta">
              <motion.span
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 rounded-full bg-[#BE1E2D] px-5 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-[0_12px_34px_rgba(190,30,45,0.24)] hover:bg-[#A01C32]"
              >
                Réserver
                <ArrowUpRight className="h-4 w-4" />
              </motion.span>
            </Link>
          </div>

          <button
            className={`lg:hidden ${textColor}`}
            onClick={() => setMobileMenuOpen((open) => !open)}
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
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 overflow-hidden rounded-[1.8rem] border border-white/80 bg-[#F8F6F3] shadow-[0_24px_80px_rgba(17,17,17,0.12)] lg:hidden"
          >
            <nav className="space-y-1 px-5 py-6">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setMobileSubMenuOpen(mobileSubMenuOpen === item.label ? null : item.label)}
                        className="flex w-full items-center justify-between border-b border-[#111111]/10 py-4 text-left text-sm font-bold uppercase tracking-[0.22em] text-[#111111]"
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubMenuOpen === item.label ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileSubMenuOpen === item.label && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            {item.submenu.map((subItem) => (
                              <Link key={subItem.path} href={subItem.path} onClick={() => setMobileMenuOpen(false)}>
                                <span className="block border-b border-[#111111]/10 px-4 py-3 text-sm text-[#111111]/70">
                                  {subItem.label}
                                </span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={item.path || "/"} onClick={() => setMobileMenuOpen(false)}>
                      <span className={`block border-b border-[#111111]/10 py-4 text-sm font-bold uppercase tracking-[0.22em] ${location === item.path ? "text-[#BE1E2D]" : "text-[#111111]"}`}>
                        {item.label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/rendez-vous" onClick={() => setMobileMenuOpen(false)}>
                <span className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#BE1E2D] px-5 py-4 text-[11px] font-black uppercase tracking-[0.22em] text-white">
                  Réserver une séance
                </span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
