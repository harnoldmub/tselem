import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "wouter";

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
  showFilter?: boolean;
  linkToGallery?: boolean;
}

const CATEGORY_TO_GALLERY_ID: Record<string, string> = {
  Mariage: "mariage",
  Corporate: "corporate",
  Mode: "mode",
  Portrait: "portraits",
  Couple: "couple",
  Famille: "famille-et-enfant",
  Maternité: "maternite",
  Backstage: "all",
};

export default function PortfolioGrid({ items, showFilter = true, linkToGallery = false }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [, navigate] = useLocation();
  const categories = ["Tous", ...Array.from(new Set(items.map((item) => item.category)))];
  const filteredItems = selectedCategory === "Tous" ? items : items.filter((item) => item.category === selectedCategory);

  const handleCategoryClick = (category: string) => {
    if (linkToGallery) {
      if (category === "Tous") {
        navigate("/galerie");
      } else {
        const galleryId = CATEGORY_TO_GALLERY_ID[category] || "all";
        navigate(`/galerie?category=${galleryId}`);
      }
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div>
      {showFilter && (
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-14 flex flex-wrap justify-center gap-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`rounded-full border px-5 py-3 text-[11px] font-bold uppercase tracking-[0.22em] transition-all ${
                !linkToGallery && selectedCategory === category
                  ? "border-[#111111] bg-[#111111] text-[#F8F6F3]"
                  : "border-[#111111]/14 text-[#111111]/60 hover:border-[#BE1E2D] hover:text-[#BE1E2D]"
              }`}
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
              {linkToGallery && (
                <ArrowUpRight className="ml-1 inline-block h-3 w-3 opacity-40" />
              )}
            </button>
          ))}
        </motion.div>
      )}

      <motion.div layout className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.article
              layout
              key={item.id}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.45, delay: index * 0.035 }}
              className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-[2rem] bg-[#111111] shadow-[0_22px_70px_rgba(17,17,17,0.08)]"
              data-testid={`portfolio-item-${item.id}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/86 via-[#111111]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-[#F8F6F3] sm:p-8">
                <div className="mb-4 flex items-center justify-between gap-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#F8F6F3]/68">
                  <span>{item.category}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#BE1E2D] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <h3 className="mb-3 text-3xl font-semibold leading-none tracking-normal">{item.title}</h3>
                <p className="max-w-sm text-sm leading-relaxed text-[#F8F6F3]/70">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
