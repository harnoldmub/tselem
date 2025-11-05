import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import photoService from "@assets/generated_images/Photography_service_studio_setup_7ea0b469.png";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import type { BlogPost as BlogPostType } from "@shared/schema";

export default function Blog() {
  const { data: blogPosts = [], isLoading } = useQuery<BlogPostType[]>({
    queryKey: ["/api/blog"],
  });

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

          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-destructive mx-auto mb-4"></div>
                <p className="text-muted-foreground">Chargement des articles...</p>
              </div>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">Aucun article disponible pour le moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  category={post.category}
                  date={format(new Date(post.publishedAt), "d MMM yyyy", { locale: fr })}
                  slug={post.slug}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
