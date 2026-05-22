import TestimonialsSection from "../TestimonialsSection";
import avatar1 from "@assets/images/portraits/portraits-01.jpg";
import avatar2 from "@assets/images/portraits/portraits-02.jpg";
import avatar3 from "@assets/images/portraits/portraits-03.jpg";

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

export default function TestimonialsSectionExample() {
  return <TestimonialsSection testimonials={testimonials} />;
}
