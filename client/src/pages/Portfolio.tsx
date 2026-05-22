import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";
import portfolioHero from "@assets/images/hero/hero-1.jpg";
import corporate from "@assets/images/corporate/corporate-01.jpg";
import fashion from "@assets/images/mode/mode-04.jpg";
import corporateImage from "@assets/images/corporate/corporate-01.jpg";
import couple from "@assets/images/couple/couple-01.jpg";
import wedding from "@assets/images/mariage/mariage-01.jpg";
import family from "@assets/images/famille-et-enfant/famille-enfant-01.jpg";
import photoService from "@assets/images/portraits/portraits-08.jpg";
import maternity from "@assets/images/maternite/maternite-01.jpg";

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
    title: "Corporate",
    category: "Corporate",
    description: "Image professionnelle pour marque, dirigeant et communication d'entreprise",
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
    image: corporateImage,
    title: "Corporate Signature",
    category: "Corporate",
    description: "Images professionnelles pour dirigeant, équipe et communication de marque",
  },
  {
    id: 5,
    image: couple,
    title: "Couple Studio",
    category: "Couple",
    description: "Images intimes et élégantes pour célébrer une relation",
  },
  {
    id: 6,
    image: family,
    title: "Famille & Enfant",
    category: "Famille",
    description: "Moments familiaux en studio, sobres et intemporels",
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
    image: maternity,
    title: "Maternité Lumière",
    category: "Maternité",
    description: "Séance maternité avec une direction douce et émotionnelle",
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

          <PortfolioGrid items={portfolioItems} showFilter={true} linkToGallery={true} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
