import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  showCTA?: boolean;
}

export default function Hero({ image, title, subtitle, showCTA = true }: HeroProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], ["0%", "12%"]);

  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-[#E8E8E8] p-4 pt-24 text-[#F8F6F3] sm:p-6 sm:pt-24">
      <motion.div style={{ y }} className="absolute inset-x-4 bottom-4 top-24 overflow-hidden rounded-[2.5rem] bg-[#111111] sm:inset-x-6 sm:bottom-6 sm:top-24 sm:rounded-[3rem]">
        <img src={image} alt="" className="h-[112%] w-full object-cover" />
      </motion.div>
      <div className="absolute inset-x-4 bottom-4 top-24 rounded-[2.5rem] bg-[#111111]/55 sm:inset-x-6 sm:bottom-6 sm:top-24 sm:rounded-[3rem]" />
      <div className="absolute inset-x-4 bottom-4 top-24 rounded-[2.5rem] bg-gradient-to-t from-[#111111] via-transparent to-transparent sm:inset-x-6 sm:bottom-6 sm:top-24 sm:rounded-[3rem]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(78vh-2rem)] max-w-[1440px] flex-col justify-end rounded-[2.5rem] px-5 pb-12 sm:px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 text-[11px] font-bold uppercase tracking-[0.42em] text-[#BE1E2D]"
        >
          Tselem Studio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl text-5xl font-semibold leading-[0.94] tracking-normal sm:text-7xl lg:text-[7.5rem]"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22 }}
          className="mt-8 flex flex-col gap-7 border-t border-[#F8F6F3]/18 pt-7 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-2xl text-lg leading-relaxed text-[#F8F6F3]/78 sm:text-xl">
            {subtitle}
          </p>
          {showCTA && (
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/rendez-vous" data-testid="button-hero-book">
                <Button size="lg" variant="destructive" className="rounded-full bg-[#BE1E2D] px-6 text-[11px] font-black uppercase tracking-[0.22em] hover:bg-[#A01C32]">
                  Réserver <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/galerie" data-testid="button-hero-portfolio">
                <Button size="lg" variant="outline" className="rounded-full border-[#F8F6F3]/30 bg-transparent px-6 text-[11px] font-black uppercase tracking-[0.22em] text-[#F8F6F3] hover:bg-[#F8F6F3] hover:text-[#111111]">
                  Galerie
                </Button>
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
