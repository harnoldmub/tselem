import { Calendar, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  slug: string;
}

export default function BlogCard({ title, excerpt, image, category, date, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="group h-full cursor-pointer rounded-[2rem] border border-white/80 bg-[#F8F6F3] p-3 shadow-[0_22px_70px_rgba(17,17,17,0.06)]"
        data-testid={`blog-card-${slug}`}
      >
        <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#ECECEC]">
          <img src={image} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        </div>
        <div className="px-1 py-6">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em]">
            <span className="text-[#BE1E2D]">{category}</span>
            <span className="h-px w-7 bg-[#111111]/20" />
            <span className="inline-flex items-center gap-1.5 text-[#111111]/52">
              <Calendar className="h-3.5 w-3.5" />
              {date}
            </span>
          </div>
          <h3 className="mb-4 text-2xl font-semibold leading-tight tracking-normal text-[#111111]">
            {title}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-[#2A2A2A]/72">
            {excerpt}
          </p>
          <span className="mt-7 inline-flex items-center gap-2 border-b border-[#111111]/20 pb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111] transition-colors group-hover:text-[#BE1E2D]">
            Lire l'article <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </motion.article>
    </Link>
  );
}
