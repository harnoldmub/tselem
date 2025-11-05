import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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
}

export default function PortfolioGrid({ items, showFilter = true }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = ["Tous", ...Array.from(new Set(items.map((item) => item.category)))];
  const filteredItems =
    selectedCategory === "Tous"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {showFilter && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="font-['Montserrat']"
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-md cursor-pointer hover-elevate"
              data-testid={`portfolio-item-${item.id}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 flex items-center justify-center">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/90 mb-2 font-['Montserrat']">{item.category}</p>
                  <p className="text-sm text-white/80 font-['Cormorant_Garamond']">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
