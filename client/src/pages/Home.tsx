import Header from "@/components/Header";
import HomeSlider from "@/components/HomeSlider";
import ServicesSection from "@/components/ServicesSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import LuxuryManifesto from "@/components/LuxuryManifesto";
import StatsSection from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Sparkles, Award, Users } from "lucide-react";
import heroImage from "@assets/tslm_hp_slider_1_1762333728329.jpg";
import heroImage2 from "@assets/image00011_1762333728333.jpeg";
import heroImage3 from "@assets/tslm_hp_slider_3-1_1762333728332.jpg";
import corporate from "@assets/generated_images/Corporate_event_portfolio_sample_33e8e1fb.png";
import fashion from "@assets/generated_images/Fashion_photography_portfolio_sample_f408a497.png";
import product from "@assets/generated_images/Product_photography_portfolio_sample_b044f8fc.png";
import architectural from "@assets/generated_images/Architectural_portfolio_sample_89347eba.png";
import wedding from "@assets/tslm_hp_slider_1_1762333728329.jpg";
import team from "@assets/tslm_hp_slider_3-1_1762333728332.jpg";
import avatar1 from "@assets/generated_images/Client_testimonial_avatar_1_e9ec5690.png";
import avatar2 from "@assets/generated_images/Client_testimonial_avatar_2_9020b159.png";
import avatar3 from "@assets/generated_images/Client_testimonial_avatar_3_68bb7cac.png";

const sliderContent = [
  {
    id: 1,
    image: heroImage,
    title: "L'Art de Capturer l'Émotion",
    subtitle: "Photographie et vidéographie de luxe pour vos moments les plus précieux",
    ctaText: "DÉCOUVRIR NOS RÉALISATIONS",
    ctaLink: "/portfolio",
  },
  {
    id: 2,
    image: heroImage2,
    title: "Excellence Créative",
    subtitle: "Des solutions visuelles sur mesure qui racontent votre histoire",
    ctaText: "EXPLORER NOS SERVICES",
    ctaLink: "/services",
  },
  {
    id: 3,
    image: heroImage3,
    title: "Passion & Professionnalisme",
    subtitle: "Une équipe dédiée à transformer vos visions en réalité",
    ctaText: "RÉSERVER UNE SÉANCE",
    ctaLink: "/rendez-vous",
  },
];

const portfolioItems = [
  {
    id: 1,
    image: wedding,
    title: "Mariage Élégant",
    category: "Mariage",
    description: "Couverture complète d'un mariage de luxe",
  },
  {
    id: 2,
    image: corporate,
    title: "Événement Corporate",
    category: "Événements",
    description: "Conférence d'entreprise internationale",
  },
  {
    id: 3,
    image: fashion,
    title: "Session Fashion",
    category: "Mode",
    description: "Photoshoot mode urbain créatif",
  },
  {
    id: 4,
    image: product,
    title: "Photographie Produit",
    category: "Commercial",
    description: "Packshot professionnel haute qualité",
  },
  {
    id: 5,
    image: architectural,
    title: "Architecture Urbaine",
    category: "Architecture",
    description: "Photographie d'architecture moderne",
  },
  {
    id: 6,
    image: team,
    title: "Portrait d'Équipe",
    category: "Corporate",
    description: "Session photo professionnelle d'équipe",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Amina Konaté",
    role: "Directrice Marketing",
    avatar: avatar1,
    rating: 5,
    message: "TSELEM a capturé notre événement corporate avec un professionnalisme exceptionnel. Les photos sont magnifiques et reflètent parfaitement l'esprit de notre marque.",
    projectType: "Événement Corporate",
  },
  {
    id: 2,
    name: "Jean-Pierre Mensah",
    role: "Entrepreneur",
    avatar: avatar2,
    rating: 5,
    message: "Service impeccable du début à la fin. L'équipe est créative, à l'écoute et livre un travail de qualité supérieure. Je recommande vivement !",
    projectType: "Portraits Professionnels",
  },
  {
    id: 3,
    name: "Fatoumata Diallo",
    role: "Mariée",
    avatar: avatar3,
    rating: 5,
    message: "Notre mariage a été immortalisé de façon extraordinaire. Chaque photo raconte une histoire. Merci TSELEM pour ces souvenirs inoubliables !",
    projectType: "Photographie de Mariage",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HomeSlider slides={sliderContent} autoPlayDelay={7000} />
      
      {/* Introduction Elegante */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/10 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"
          ></motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block text-destructive text-sm font-['Montserrat'] font-semibold tracking-[0.2em] uppercase mb-4">
              Studio TSELEM
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold mb-8 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            L'Art de Capturer l'Émotion
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-12 font-['Cormorant_Garamond'] max-w-4xl mx-auto"
          >
            Studio créatif de photographie et vidéographie de luxe basé à Kinshasa. 
            Nous transformons vos moments précieux en œuvres d'art intemporelles, 
            capturant l'essence de chaque instant avec une sensibilité artistique incomparable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {[
              { icon: Sparkles, label: "Créativité" },
              { icon: Award, label: "Excellence" },
              { icon: Users, label: "Confiance" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-destructive" />
                </div>
                <span className="font-['Montserrat'] font-medium text-foreground">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <LuxuryManifesto />

      <ServicesSection />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Découvrez Notre Travail en Action
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto font-['Cormorant_Garamond']">
              Plongez dans nos créations à travers nos vidéos de projets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <YouTubeEmbed
                videoId="W6nmtFtO-94"
                title="TSELEM - Showreel 2024"
              />
              <h3 className="text-xl font-semibold mt-4 mb-2 font-['Montserrat']">
                Showreel 2024
              </h3>
              <p className="text-primary-foreground/80 font-['Cormorant_Garamond']">
                Notre meilleur travail de l'année en quelques minutes
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <YouTubeEmbed
                videoId="ooezcDUKmR8"
                title="TSELEM - Making Of"
              />
              <h3 className="text-xl font-semibold mt-4 mb-2 font-['Montserrat']">
                Dans les Coulisses
              </h3>
              <p className="text-primary-foreground/80 font-['Cormorant_Garamond']">
                Découvrez comment nous créons la magie
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Nos Dernières Réalisations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-['Cormorant_Garamond']">
              Découvrez quelques-uns de nos projets récents
            </p>
          </motion.div>
          <PortfolioGrid items={portfolioItems.slice(0, 6)} showFilter={false} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/portfolio" data-testid="button-view-portfolio">
              <Button size="lg" variant="default" className="font-['Montserrat']">
                VOIR TOUT LE PORTFOLIO
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <StatsSection />

      <TestimonialsSection testimonials={testimonials} />

      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/10 to-background overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-destructive rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block text-destructive text-sm font-['Montserrat'] font-semibold tracking-[0.2em] uppercase">
              Commencez Votre Histoire
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold mb-8 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Prêt à Donner Vie à Votre Vision ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl mb-14 text-muted-foreground font-['Cormorant_Garamond'] leading-relaxed max-w-3xl mx-auto"
          >
            Collaborons pour créer des images qui transcendent le temps et racontent votre histoire avec authenticité et élégance
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/rendez-vous" data-testid="button-cta-book">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="destructive" className="text-lg px-12 py-7 font-['Montserrat'] font-semibold shadow-xl">
                  RÉSERVER UNE SÉANCE
                </Button>
              </motion.div>
            </Link>
            <Link href="/contact" data-testid="button-cta-contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-12 py-7 font-['Montserrat'] font-semibold border-2"
                >
                  NOUS CONTACTER
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-sm text-muted-foreground font-['Montserrat']"
          >
            Réponse sous 24h · Consultation gratuite · Devis personnalisé
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
