import PortfolioGrid from "../PortfolioGrid";
import corporate from "@assets/generated_images/Corporate_event_portfolio_sample_33e8e1fb.png";
import fashion from "@assets/generated_images/Fashion_photography_portfolio_sample_f408a497.png";
import product from "@assets/generated_images/Product_photography_portfolio_sample_b044f8fc.png";
import architectural from "@assets/generated_images/Architectural_portfolio_sample_89347eba.png";
import wedding from "@assets/tslm_hp_slider_1_1762333728329.jpg";
import team from "@assets/tslm_hp_slider_3-1_1762333728332.jpg";

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

export default function PortfolioGridExample() {
  return <PortfolioGrid items={portfolioItems} />;
}
