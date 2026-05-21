import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import photoService from "@assets/generated_images/Photography_service_studio_setup_7ea0b469.png";
import wedding from "@assets/tslm_hp_slider_1_1762333728329.jpg";
import portrait from "@assets/image_1762347872912.png";
import branding from "@assets/image_1762348129373.png";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import type { BlogPost as BlogPostType } from "@shared/schema";

const editorialPosts = [
  {
    title: "Préparer une séance portrait qui impose une vraie présence",
    excerpt: "Choix des tenues, intention, lumière et direction artistique: les détails qui transforment un portrait en image d'autorité.",
    image: portrait,
    category: "Portrait",
    date: "12 mai 2026",
    slug: "preparer-seance-portrait-premium",
  },
  {
    title: "Mariage premium: construire un récit visuel intemporel",
    excerpt: "Une approche éditoriale du mariage, entre instants documentaires, portraits composés et mémoire familiale.",
    image: wedding,
    category: "Conseils Mariage",
    date: "28 avr. 2026",
    slug: "mariage-premium-recit-visuel",
  },
  {
    title: "Branding personnel: pourquoi vos images vendent avant vos mots",
    excerpt: "Pour dirigeants, créateurs et marques personnelles, l'image devient un signal de confiance immédiat.",
    image: branding,
    category: "Branding Personnel",
    date: "04 avr. 2026",
    slug: "branding-personnel-images-confiance",
  },
];

export default function Blog() {
  const { data: blogPosts = [], isLoading } = useQuery<BlogPostType[]>({
    queryKey: ["/api/blog"],
  });

  const posts = blogPosts.length
    ? blogPosts.map((post) => ({
        title: post.title,
        excerpt: post.excerpt,
        image: post.image,
        category: post.category,
        date: format(new Date(post.publishedAt), "d MMM yyyy", { locale: fr }),
        slug: post.slug,
      }))
    : editorialPosts;

  return (
    <div className="min-h-screen bg-[#E8E8E8] text-[#111111]">
      <Header />
      <Hero
        image={photoService}
        title="Journal"
        subtitle="Conseils, culture visuelle et coulisses pour préparer des images plus fortes."
        showCTA={false}
      />

      <section className="px-4 py-8 sm:px-6 md:py-10">
        <div className="mx-auto max-w-[1440px] rounded-[2.5rem] bg-[#F8F6F3] p-6 shadow-[0_26px_90px_rgba(17,17,17,0.06)] sm:p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-16 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em] text-[#BE1E2D]">CMS Blog</p>
              <h2 className="text-5xl font-semibold leading-[0.95] sm:text-7xl">Publier comme un magazine.</h2>
            </div>
            <p className="max-w-2xl text-xl leading-relaxed text-[#2A2A2A]/72">
              Articles administrables, catégories, SEO et contenu éditorial pour nourrir la confiance avant le premier contact.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="h-[560px] animate-pulse rounded-[2rem] bg-[#ECECEC]" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                >
                  <BlogCard {...post} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
