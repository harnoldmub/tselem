import { useState } from "react";
import { Button } from "@/components/ui/button";

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
        <div className="flex flex-wrap gap-3 justify-center mb-12">
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
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
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
                <p className="text-sm text-white/90 mb-2">{item.category}</p>
                <p className="text-sm text-white/80">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
