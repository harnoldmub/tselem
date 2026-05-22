import PortfolioGrid from "../PortfolioGrid";
import corporate from "@assets/images/corporate/corporate-01.jpg";
import fashion from "@assets/images/mode/mode-04.jpg";
import portrait from "@assets/images/portraits/portraits-14.jpg";
import maternity from "@assets/images/maternite/maternite-01.jpg";
import wedding from "@assets/images/mariage/mariage-01.jpg";
import family from "@assets/images/famille-et-enfant/famille-enfant-01.jpg";

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
    image: portrait,
    title: "Portrait Premium",
    category: "Portrait",
    description: "Portrait professionnel haute qualité",
  },
  {
    id: 5,
    image: maternity,
    title: "Maternité Studio",
    category: "Maternité",
    description: "Séance maternité douce et intemporelle",
  },
  {
    id: 6,
    image: family,
    title: "Famille & Enfant",
    category: "Famille",
    description: "Session photo familiale en studio",
  },
];

export default function PortfolioGridExample() {
  return <PortfolioGrid items={portfolioItems} />;
}
