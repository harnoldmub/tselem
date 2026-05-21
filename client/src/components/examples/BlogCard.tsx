import BlogCard from "../BlogCard";
import photoService from "@assets/generated_images/Photography_service_studio_setup_7ea0b469.png";

export default function BlogCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <BlogCard
        title="Les 10 Conseils pour Réussir Votre Séance Photo"
        excerpt="Découvrez nos meilleurs conseils pour préparer votre séance photo et obtenir des résultats exceptionnels..."
        image={photoService}
        category="Photographie"
        date="15 Nov 2024"
        slug="conseils-seance-photo"
      />
    </div>
  );
}
