import TestimonialsSection from "../TestimonialsSection";
import avatar1 from "@assets/generated_images/Client_testimonial_avatar_1_e9ec5690.png";
import avatar2 from "@assets/generated_images/Client_testimonial_avatar_2_9020b159.png";
import avatar3 from "@assets/generated_images/Client_testimonial_avatar_3_68bb7cac.png";

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
