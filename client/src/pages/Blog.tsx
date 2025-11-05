import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import photoService from "@assets/generated_images/Photography_service_studio_setup_7ea0b469.png";
import videoService from "@assets/generated_images/Video_production_service_scene_d18c7b2e.png";
import designService from "@assets/generated_images/Graphic_design_workspace_scene_1485a3b2.png";
import wedding from "@assets/tslm_hp_slider_1_1762333728329.jpg";
import fashion from "@assets/generated_images/Fashion_photography_portfolio_sample_f408a497.png";
import corporate from "@assets/generated_images/Corporate_event_portfolio_sample_33e8e1fb.png";

const blogPosts = [
  {
    id: 1,
    title: "Les 10 Conseils pour Réussir Votre Séance Photo",
    excerpt: "Découvrez nos meilleurs conseils pour préparer votre séance photo et obtenir des résultats exceptionnels. De la tenue vestimentaire à la pose naturelle...",
    image: photoService,
    category: "Photographie",
    date: "15 Nov 2024",
    slug: "conseils-seance-photo",
  },
  {
    id: 2,
    title: "Comment Choisir le Bon Package pour Votre Mariage",
    excerpt: "Le choix du package photo et vidéo pour votre mariage est crucial. Voici notre guide complet pour vous aider à faire le meilleur choix selon votre budget...",
    image: wedding,
    category: "Mariage",
    date: "10 Nov 2024",
    slug: "package-mariage",
  },
  {
    id: 3,
    title: "Tendances Vidéo 2024 : Ce Qu'il Faut Savoir",
    excerpt: "Les tendances en production vidéo évoluent rapidement. Découvrez les styles, techniques et formats qui domineront en 2024...",
    image: videoService,
    category: "Vidéo",
    date: "5 Nov 2024",
    slug: "tendances-video-2024",
  },
  {
    id: 4,
    title: "L'Importance du Branding Visuel pour Votre Entreprise",
    excerpt: "Dans un monde digital saturé, votre identité visuelle fait toute la différence. Découvrez pourquoi investir dans un branding professionnel est essentiel...",
    image: designService,
    category: "Business",
    date: "1 Nov 2024",
    slug: "branding-visuel-entreprise",
  },
  {
    id: 5,
    title: "Réussir Vos Photos de Mode : Techniques Essentielles",
    excerpt: "La photographie de mode exige technique, créativité et collaboration. Nos photographes partagent leurs secrets pour des shoots fashion réussis...",
    image: fashion,
    category: "Mode",
    date: "28 Oct 2024",
    slug: "photos-mode-techniques",
  },
  {
    id: 6,
    title: "Événements Corporate : Capturer L'Essence de Votre Marque",
    excerpt: "Comment transformer un événement d'entreprise en contenu visuel puissant qui renforce votre image de marque et engage votre audience...",
    image: corporate,
    category: "Corporate",
    date: "20 Oct 2024",
    slug: "evenements-corporate",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        image={photoService}
        title="Notre Blog"
        subtitle="Conseils, tendances et inspirations pour vos projets photo et vidéo"
        showCTA={false}
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Derniers Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explorez nos articles pour découvrir des conseils d'experts et rester à jour sur les dernières tendances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
