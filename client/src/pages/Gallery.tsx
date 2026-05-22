import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const imageModules = import.meta.glob(
  [
    "@assets/images/anniversaire/*.{jpg,jpeg,png}",
    "@assets/images/corporate/*.{jpg,jpeg,png}",
    "@assets/images/couple/*.{jpg,jpeg,png}",
    "@assets/images/famille-et-enfant/*.{jpg,jpeg,png}",
    "@assets/images/mariage/*.{jpg,jpeg,png}",
    "@assets/images/maternite/*.{jpg,jpeg,png}",
    "@assets/images/mode/*.{jpg,jpeg,png}",
    "@assets/images/portraits/*.{jpg,jpeg,png}",
  ],
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

type GalleryImage = { src: string; label: string; category: string; span?: string };

const CATEGORY_LABELS: Record<string, string> = {
  anniversaire: "Anniversaire",
  corporate: "Corporate",
  couple: "Couple",
  "famille-et-enfant": "Famille & Enfants",
  mariage: "Mariage",
  maternite: "Maternité",
  mode: "Mode",
  portraits: "Portraits",
};

const ALL_IMAGES: GalleryImage[] = Object.entries(imageModules)
  .map(([path, src], index) => {
    const category = path.split("/images/")[1]?.split("/")[0] || "images";
    const label = CATEGORY_LABELS[category] || category;
    return {
      src,
      label,
      category,
      span: index % 11 === 0 ? "md:col-span-2" : index % 13 === 0 ? "md:row-span-2" : "",
    };
  });

const CATEGORIES = [
  { id: "all", label: "Tous" },
  { id: "mariage", label: "Mariage" },
  { id: "maternite", label: "Maternité" },
  { id: "portraits", label: "Portraits" },
  { id: "couple", label: "Couple" },
  { id: "famille-et-enfant", label: "Famille & Enfants" },
  { id: "anniversaire", label: "Anniversaire" },
  { id: "corporate", label: "Corporate" },
  { id: "mode", label: "Mode" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (activeCategory === "all" ? ALL_IMAGES : ALL_IMAGES.filter((image) => image.category === activeCategory)),
    [activeCategory],
  );

  const selectedImage = selectedIndex !== null ? filtered[selectedIndex] : null;
  const prev = () => setSelectedIndex((index) => (index !== null ? (index - 1 + filtered.length) % filtered.length : null));
  const next = () => setSelectedIndex((index) => (index !== null ? (index + 1) % filtered.length : null));

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedIndex, filtered.length]);

  return (
    <div className="min-h-screen bg-[#E8E8E8] text-[#111111]">
      <Header />

      <section className="px-4 pb-8 pt-28 sm:px-6">
        <div className="mx-auto max-w-[1440px] rounded-[2.5rem] bg-[#F8F6F3] p-6 shadow-[0_26px_90px_rgba(17,17,17,0.06)] sm:p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em] text-[#BE1E2D]">Galerie</p>
              <h1 className="text-6xl font-semibold leading-[0.88] sm:text-8xl lg:text-[8.5rem]">
                Toutes les images.
              </h1>
            </div>
            <p className="max-w-xl text-xl leading-relaxed text-[#2A2A2A]/70">
              Portraits, mariages, maternité, mode, branding et productions.
            </p>
          </motion.div>

          <div className="mb-8 -mx-2 flex gap-2 overflow-x-auto px-2 pb-2">
            {CATEGORIES.map((category) => {
              const count = category.id === "all" ? ALL_IMAGES.length : ALL_IMAGES.filter((image) => image.category === category.id).length;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSelectedIndex(null);
                  }}
                  className={`flex-none whitespace-nowrap rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-[#111111] text-[#F8F6F3] shadow-[0_8px_24px_rgba(17,17,17,0.18)]"
                      : "bg-[#ECECEC] text-[#111111]/60 hover:bg-[#E0E0E0] hover:text-[#111111]"
                  }`}
                >
                  {category.label}
                  <span className={`ml-2 text-[9px] ${activeCategory === category.id ? "text-[#F8F6F3]/50" : "text-[#111111]/35"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <motion.div layout className="grid auto-rows-[220px] grid-cols-1 gap-0 overflow-hidden rounded-[2rem] bg-[#111111] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((image, index) => (
              <motion.article
                key={`${image.label}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: (index % 8) * 0.025 }}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedIndex(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") setSelectedIndex(index);
                }}
                className={`group relative cursor-pointer overflow-hidden ${image.span || ""}`}
              >
                <img src={image.src} alt={image.label} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-[#111111]/0 transition duration-500 group-hover:bg-[#111111]/38" />
                <div className="absolute bottom-4 left-4 rounded-full bg-[#F8F6F3]/92 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111] opacity-0 shadow-[0_12px_34px_rgba(17,17,17,0.18)] transition duration-500 group-hover:opacity-100">
                  {image.label}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111111]/92 p-4 backdrop-blur-xl sm:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedIndex(null);
              }}
              className="absolute right-4 top-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F8F6F3] text-[#111111] shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition hover:bg-[#BE1E2D] hover:text-white sm:right-8 sm:top-8"
              aria-label="Fermer l'image"
            >
              <X className="h-5 w-5" />
            </button>
            <button type="button" onClick={(event) => { event.stopPropagation(); prev(); }} className="absolute left-4 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-[#F8F6F3] text-[#111111] shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition hover:bg-[#BE1E2D] hover:text-white sm:flex" aria-label="Image précédente">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={(event) => { event.stopPropagation(); next(); }} className="absolute right-4 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-[#F8F6F3] text-[#111111] shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition hover:bg-[#BE1E2D] hover:text-white sm:flex" aria-label="Image suivante">
              <ChevronRight className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[88vh] w-full max-w-6xl overflow-hidden rounded-[2rem] bg-[#111111]"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.label} className="max-h-[88vh] w-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
