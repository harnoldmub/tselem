import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";
import portfolioHero from "@assets/generated_images/Fashion_photography_portfolio_sample_f408a497.png";
import corporate from "@assets/generated_images/Corporate_event_portfolio_sample_33e8e1fb.png";
import fashion from "@assets/generated_images/Fashion_photography_portfolio_sample_f408a497.png";
import product from "@assets/generated_images/Product_photography_portfolio_sample_b044f8fc.png";
import architectural from "@assets/generated_images/Architectural_portfolio_sample_89347eba.png";
import wedding from "@assets/tslm_hp_slider_1_1762333728329.jpg";
import team from "@assets/tslm_hp_slider_3-1_1762333728332.jpg";
import photoService from "@assets/generated_images/Photography_service_studio_setup_7ea0b469.png";
import videoService from "@assets/generated_images/Video_production_service_scene_d18c7b2e.png";

const portfolioItems = [
  {
    id: 1,
    image: wedding,
    title: "Mariage Élégant",
    category: "Mariage",
    description: "Couverture complète d'un mariage de luxe avec photo et vidéo",
  },
  {
    id: 2,
    image: corporate,
    title: "Conférence Internationale",
    category: "Corporate",
    description: "Événement d'entreprise avec captation complète",
  },
  {
    id: 3,
    image: fashion,
    title: "Session Mode Urbaine",
    category: "Mode",
    description: "Photoshoot fashion dans un cadre urbain moderne",
  },
  {
    id: 4,
    image: product,
    title: "Photographie Produit Premium",
    category: "Commercial",
    description: "Packshot haute qualité pour marque de luxe",
  },
  {
    id: 5,
    image: architectural,
    title: "Architecture Contemporaine",
    category: "Architecture",
    description: "Photographie d'architecture moderne et design",
  },
  {
    id: 6,
    image: team,
    title: "Portraits d'Équipe",
    category: "Corporate",
    description: "Session photo professionnelle pour entreprise",
  },
  {
    id: 7,
    image: photoService,
    title: "Studio Professionnel",
    category: "Backstage",
    description: "Coulisses de notre studio de photographie",
  },
  {
    id: 8,
    image: videoService,
    title: "Production Vidéo",
    category: "Vidéo",
    description: "Tournage de vidéo promotionnelle cinématographique",
  },
  {
    id: 9,
    image: wedding,
    title: "Mariage Traditional",
    category: "Mariage",
    description: "Cérémonie traditionnelle capturée avec authenticité",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#E8E8E8]">
      <Header />
      <Hero
        image={portfolioHero}
        title="Notre Portfolio"
        subtitle="Découvrez nos réalisations et laissez-vous inspirer par notre travail"
        showCTA={false}
      />

      <section className="px-4 py-8 sm:px-6 md:py-10">
        <div className="mx-auto max-w-[1440px] rounded-[2.5rem] bg-[#F8F6F3] p-6 shadow-[0_26px_90px_rgba(17,17,17,0.06)] sm:p-10 lg:p-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Nos Réalisations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chaque projet est unique et reflète notre engagement envers l'excellence
            </p>
          </div>

          <PortfolioGrid items={portfolioItems} showFilter={true} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
