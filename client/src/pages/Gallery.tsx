import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Grid3X3, LayoutGrid } from "lucide-react";
import { useSearch } from "wouter";
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

const EXCLUDED_IMAGES = [
  "mode-08.jpg",
];

type GalleryImage = { src: string; label: string; category: string };

const CATEGORY_LABELS: Record<string, string> = {
  anniversaire: "Anniversaire",
  corporate: "Corporate",
  couple: "Couple",
  "famille-et-enfant": "Famille & Enfants",
  mariage: "Mariage",
  maternite: "Maternité",
  mode: "Mode",
};

const ALL_IMAGES: GalleryImage[] = Object.entries(imageModules)
  .filter(([path]) => !EXCLUDED_IMAGES.some((ex) => path.endsWith(ex)))
  .map(([path, src]) => {
    const sourceCategory = path.split("/images/")[1]?.split("/")[0] || "images";
    const category = sourceCategory === "portraits" ? "corporate" : sourceCategory;
    const label = CATEGORY_LABELS[category] || category;
    return { src, label, category };
  });

const CATEGORIES = [
  { id: "all", label: "Tous" },
  { id: "mariage", label: "Mariage" },
  { id: "maternite", label: "Maternité" },
  { id: "couple", label: "Couple" },
  { id: "famille-et-enfant", label: "Famille & Enfants" },
  { id: "anniversaire", label: "Anniversaire" },
  { id: "corporate", label: "Corporate" },
  { id: "mode", label: "Mode" },
];

export default function Gallery() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const categoryParam = params.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(() => {
    const validIds = CATEGORIES.map((c) => c.id);
    return validIds.includes(categoryParam) ? categoryParam : "all";
  });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [compactGrid, setCompactGrid] = useState(false);

  useEffect(() => {
    const validIds = CATEGORIES.map((c) => c.id);
    const cat = validIds.includes(categoryParam) ? categoryParam : "all";
    setActiveCategory(cat);
    setSelectedIndex(null);
  }, [categoryParam]);

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

  const activeCategoryLabel = CATEGORIES.find((c) => c.id === activeCategory)?.label || "Tous";

  return (
    <div className="min-h-screen bg-[#E8E8E8] text-[#111111]">
      <Header />

      <section className="px-4 pb-8 pt-28 sm:px-6">
        <div className="mx-auto max-w-[1440px] rounded-[2.5rem] bg-[#F8F6F3] p-6 shadow-[0_26px_90px_rgba(17,17,17,0.06)] sm:p-10 lg:p-16">

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em] text-[#BE1E2D]">Galerie</p>
              <h1 className="text-5xl font-semibold leading-[0.9] sm:text-7xl lg:text-[7.5rem]">
                Toutes<br />les images.
              </h1>
            </div>
            <div className="flex flex-col justify-end gap-6">
              <p className="max-w-xl text-xl leading-relaxed text-[#2A2A2A]/70">
                Corporate, mariages, maternité, mode, famille et productions.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#111111]">{ALL_IMAGES.length}</span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111]/40">Photos</span>
                </div>
                <div className="h-10 w-px bg-[#111111]/12" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#111111]">{CATEGORIES.length - 1}</span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111]/40">Catégories</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mb-3 flex items-center justify-between gap-4">
            <div className="-mx-2 flex flex-1 gap-2 overflow-x-auto px-2 pb-2">
              {CATEGORIES.map((category) => {
                const count = category.id === "all"
                  ? ALL_IMAGES.length
                  : ALL_IMAGES.filter((image) => image.category === category.id).length;
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setSelectedIndex(null);
                    }}
                    className={`flex-none items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                      isActive
                        ? "bg-[#111111] text-[#F8F6F3] shadow-[0_8px_24px_rgba(17,17,17,0.18)]"
                        : "bg-[#ECECEC] text-[#111111]/60 hover:bg-[#E0E0E0] hover:text-[#111111]"
                    }`}
                  >
                    {category.label}
                    <span className={`ml-1.5 text-[9px] ${isActive ? "text-[#F8F6F3]/50" : "text-[#111111]/35"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="hidden shrink-0 items-center gap-1 rounded-full bg-[#ECECEC] p-1 sm:flex">
              <button
                onClick={() => setCompactGrid(false)}
                className={`rounded-full p-2 transition-all ${!compactGrid ? "bg-[#111111] text-white shadow-sm" : "text-[#111111]/50 hover:text-[#111111]"}`}
                aria-label="Grandes cellules"
              >
                <LayoutGrid className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setCompactGrid(true)}
                className={`rounded-full p-2 transition-all ${compactGrid ? "bg-[#111111] text-white shadow-sm" : "text-[#111111]/50 hover:text-[#111111]"}`}
                aria-label="Petites cellules"
              >
                <Grid3X3 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <motion.p
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-[12px] font-medium text-[#111111]/40"
          >
            {activeCategoryLabel} — <span className="text-[#111111]/60 font-semibold">{filtered.length}</span> photo{filtered.length > 1 ? "s" : ""}
          </motion.p>

          <motion.div
            layout
            className={`grid gap-0 overflow-hidden rounded-[2rem] bg-[#111111] ${
              compactGrid
                ? "auto-rows-[160px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                : "auto-rows-[240px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            }`}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((image, index) => (
                <motion.article
                  key={`${image.category}-${image.src}`}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, delay: (index % 12) * 0.02 }}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedIndex(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") setSelectedIndex(index);
                  }}
                  className="group relative cursor-pointer overflow-hidden"
                >
                  <img
                    src={image.src}
                    alt={image.label}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#111111]/0 transition duration-500 group-hover:bg-[#111111]/30" />
                  <div className="invisible absolute bottom-3 left-3 rounded-full bg-[#F8F6F3]/92 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111] shadow-[0_8px_24px_rgba(17,17,17,0.14)] transition duration-500 group-hover:visible group-hover:opacity-100 opacity-0">
                    {image.label}
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#111111]/30">Aucune image</p>
            </div>
          )}
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
            <button
              type="button"
              onClick={(event) => { event.stopPropagation(); prev(); }}
              className="absolute left-4 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-[#F8F6F3] text-[#111111] shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition hover:bg-[#BE1E2D] hover:text-white sm:flex"
              aria-label="Image précédente"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(event) => { event.stopPropagation(); next(); }}
              className="absolute right-4 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-[#F8F6F3] text-[#111111] shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition hover:bg-[#BE1E2D] hover:text-white sm:flex"
              aria-label="Image suivante"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex items-center gap-3 rounded-full bg-[#F8F6F3]/10 px-5 py-2.5 backdrop-blur-sm border border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">{selectedImage.label}</span>
              <span className="text-white/30">·</span>
              <span className="text-[11px] text-white/40">{(selectedIndex ?? 0) + 1} / {filtered.length}</span>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-[#111111]"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.label} className="max-h-[85vh] w-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
