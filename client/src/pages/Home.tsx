import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/tslm_hp_slider_1_1762333728329.jpg";
import corporate from "@assets/generated_images/Corporate_event_portfolio_sample_33e8e1fb.png";
import fashion from "@assets/generated_images/Fashion_photography_portfolio_sample_f408a497.png";
import product from "@assets/generated_images/Product_photography_portfolio_sample_b044f8fc.png";
import architectural from "@assets/generated_images/Architectural_portfolio_sample_89347eba.png";
import wedding from "@assets/tslm_hp_slider_1_1762333728329.jpg";
import team from "@assets/tslm_hp_slider_3-1_1762333728332.jpg";
import avatar1 from "@assets/generated_images/Client_testimonial_avatar_1_e9ec5690.png";
import avatar2 from "@assets/generated_images/Client_testimonial_avatar_2_9020b159.png";
import avatar3 from "@assets/generated_images/Client_testimonial_avatar_3_68bb7cac.png";

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
      <Hero
        image={heroImage}
        title="TSELEM – Chaque Pixel Compte"
        subtitle="Studio professionnel de photographie et production vidéo. Capturons vos moments les plus précieux avec art et passion."
      />
      
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Bienvenue chez TSELEM</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Nous sommes un studio créatif spécialisé dans la photographie professionnelle et la production vidéo. 
            Notre passion est de capturer l'essence de chaque moment, de raconter votre histoire à travers des images 
            qui restent gravées dans le temps. De la photographie de mariage aux événements corporatifs, en passant par 
            les sessions fashion et le design graphique, nous mettons notre expertise au service de votre vision.
          </p>
        </div>
      </section>

      <ServicesSection />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Nos Dernières Réalisations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Découvrez quelques-uns de nos projets récents
            </p>
          </div>
          <PortfolioGrid items={portfolioItems.slice(0, 6)} showFilter={false} />
          <div className="text-center mt-12">
            <Link href="/portfolio" data-testid="button-view-portfolio">
              <Button size="lg" variant="default" className="font-['Montserrat']">
                VOIR TOUT LE PORTFOLIO
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Prêt à Donner Vie à Votre Vision ?
          </h2>
          <p className="text-xl mb-10 text-primary-foreground/90">
            Réservez dès maintenant votre séance et laissez-nous capturer vos moments précieux
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rendez-vous" data-testid="button-cta-book">
              <Button size="lg" variant="destructive" className="text-lg px-10 py-6 font-['Montserrat']">
                RÉSERVER MAINTENANT
              </Button>
            </Link>
            <Link href="/contact" data-testid="button-cta-contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6 bg-white/10 backdrop-blur-md border-white text-white hover:bg-white hover:text-primary font-['Montserrat']"
              >
                NOUS CONTACTER
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
