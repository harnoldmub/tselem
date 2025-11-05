import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import logoWhite from "@assets/logo-white_1762333728331.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          <motion.div variants={itemVariants}>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              src={logoWhite}
              alt="TSELEM Logo"
              className="h-10 mb-4"
            />
            <p className="text-primary-foreground/80 mb-4 font-['Cormorant_Garamond']">
              Studio professionnel de photographie et production vidéo. Chaque pixel compte.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5 text-primary-foreground hover:text-destructive transition-colors" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5 text-primary-foreground hover:text-destructive transition-colors" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate p-2 rounded"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground hover:text-destructive transition-colors" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 font-['Montserrat']">LIENS RAPIDES</h3>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Accueil" },
                { path: "/apropos", label: "À Propos" },
                { path: "/services", label: "Services" },
                { path: "/portfolio", label: "Portfolio" },
                { path: "/blog", label: "Blog" },
                { path: "/admin/login", label: "Admin" },
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
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 font-['Montserrat']">SERVICES</h3>
            <ul className="space-y-2 text-primary-foreground/80 font-['Cormorant_Garamond']">
              <li>Photographie</li>
              <li>Production Vidéo</li>
              <li>Design Graphique</li>
              <li>Retouche Photo</li>
              <li>Packages Personnalisés</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 font-['Montserrat']">CONTACT</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  1er étage, Immeuble de La Bourse 22389/ Rond point Forescom
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+243980001014"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-phone"
                >
                  +243 980 001 014
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:contact@tselemrdc.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-email"
                >
                  contact@tselemrdc.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60 font-['Montserrat']"
        >
          <p>© {currentYear} TSELEM. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
}
