import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Calendar, MessageCircle, Volume2, VolumeX } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hero1 from "@assets/images/hero/hero-1.jpg";
import hero2 from "@assets/images/hero/hero-2.jpg";
import weddingHero from "@assets/images/mariage/mariage-01.jpg";
import weddingGroup from "@assets/images/mariage/mariage-01.jpg";
import editorialWide from "@assets/images/slider-editorial.jpg";
import portraitVertical from "@assets/images/portrait-large.jpg";
import portraitStudio from "@assets/images/portraits/portraits-08.jpg";
import maternityMood from "@assets/images/maternite/maternite-01.jpg";
import brandFrame from "@assets/images/mode/mode-08.jpg";
import productionStill from "@assets/images/corporate/corporate-01.jpg";
import detailFrame from "@assets/images/couple/couple-01.jpg";
import backstageFrame from "@assets/images/famille-et-enfant/famille-enfant-09.jpg";
import socialFrame from "@assets/images/anniversaire/anniversaire-01.jpg";
import clientPortrait from "@assets/images/portraits/portraits-01.jpg";
import clientPortrait2 from "@assets/images/portraits/portraits-02.jpg";

const HERO_SLIDES = [hero1, hero2];

const fadeUp = { hidden: { opacity: 0, y: 42 }, visible: { opacity: 1, y: 0 } };
const reveal = { hidden: { opacity: 0, y: 70, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } };

const services = [
  ["Corporate", "Présence, regard, peau, silence. Des portraits construits comme des couvertures éditoriales.", portraitStudio],
  ["Mariage", "Un récit visuel sobre et cinématographique pour les engagements qui traversent une vie.", weddingHero],
  ["Maternité", "Une lumière douce, une direction sensible, une mémoire intime sans artifice.", maternityMood],
  ["Mode", "Images d'autorité pour dirigeants, artistes, créateurs et marques personnelles.", brandFrame],
  ["Événement & Famille", "Couple, famille, anniversaire et moments précieux avec une direction sobre et sensible.", backstageFrame],
];

const projects = [
  ["Mariage", "Kinshasa Ceremony", "Une célébration pensée comme un film: gestes mesurés, lumière naturelle, élégance collective.", weddingGroup],
  ["Corporate", "Corporate", "Portraits de caractère pour une présence publique plus forte, plus maîtrisée, plus mémorable.", productionStill],
  ["Maternité", "The Waiting Room", "Une série intime et lumineuse autour du corps, du lien et de la transmission.", maternityMood],
];

const socialPosts = [weddingHero, detailFrame, brandFrame, productionStill, socialFrame, editorialWide];
const instagramUrl = "https://www.instagram.com/tselem_studio_rdc/";

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let frame = 0;
    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return <div ref={ref}>+{count}</div>;
}

function ParallaxImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className={`overflow-hidden bg-[#ECECEC] ${className}`}>
      <motion.img src={src} alt={alt} style={{ y }} className="h-[112%] w-full object-cover" />
    </div>
  );
}

function EditorialLink({ href, children, dark = false }: { href: string; children: string; dark?: boolean }) {
  return (
    <Link href={href}>
      <motion.span
        whileHover={{ x: 4 }}
        className={`group inline-flex cursor-pointer items-center gap-3 border-b pb-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors ${
          dark ? "border-[#F8F6F3]/30 text-[#F8F6F3] hover:text-[#BE1E2D]" : "border-[#111111]/25 text-[#111111] hover:text-[#BE1E2D]"
        }`}
      >
        {children}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </motion.span>
    </Link>
  );
}

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setHeroIndex((i) => (i + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  function toggleMute() {
    if (!videoRef.current) return;
    const next = !muted;
    videoRef.current.muted = next;
    if (!next) videoRef.current.play().catch(() => {});
    setMuted(next);
  }

  return (
    <div className="min-h-screen cursor-default bg-[#E8E8E8] text-[#111111] selection:bg-[#BE1E2D] selection:text-white">
      <Header />

      <section className="relative min-h-screen overflow-hidden bg-[#111111] text-[#F8F6F3]">
        {/* Mobile: video hero */}
        <video
          ref={videoRef}
          src="/attached_assets/videos/hero-mobile.mp4"
          autoPlay
          playsInline
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover sm:hidden"
        />
        {/* Desktop: image slideshow */}
        <AnimatePresence mode="sync">
          <motion.img
            key={HERO_SLIDES[heroIndex]}
            src={HERO_SLIDES[heroIndex]}
            alt="Tselem Studio"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.86, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 hidden h-full w-full object-cover sm:block"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[#111111]/36" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/92 via-transparent to-[#111111]/14" />
        {/* Desktop: slide dots */}
        <div className="absolute bottom-8 right-8 z-10 hidden gap-2 sm:flex">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setHeroIndex(i)}
              aria-label={`Image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === heroIndex ? "w-8 bg-[#F8F6F3]" : "w-1.5 bg-[#F8F6F3]/30 hover:bg-[#F8F6F3]/60"}`}
            />
          ))}
        </div>
        {/* Mobile: sound toggle */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Activer le son" : "Couper le son"}
          className="absolute bottom-8 right-8 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F6F3]/10 backdrop-blur-sm transition-colors hover:bg-[#F8F6F3]/20 sm:hidden"
        >
          {muted ? <VolumeX className="h-4 w-4 text-[#F8F6F3]" /> : <Volume2 className="h-4 w-4 text-[#F8F6F3]" />}
        </button>
        <div className="relative z-10 flex min-h-screen flex-col justify-end px-5 pb-10 pt-28 sm:px-8 lg:px-12 lg:pb-14">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="max-w-7xl">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.42em] text-[#F8F6F3]/70">Kinshasa · Photo · Film · Direction artistique</p>
            <h1 className="max-w-6xl text-[18vw] font-semibold uppercase leading-[0.78] tracking-normal sm:text-[13vw] lg:text-[11.5vw]">
              TSELEM<br />STUDIO
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.35 }} className="mt-8 flex flex-col gap-7 border-t border-[#F8F6F3]/20 pt-7 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-2xl leading-tight text-[#F8F6F3] sm:text-3xl md:text-4xl">Créer des images qui traversent le temps.</p>
            <Link href="/galerie">
              <motion.span whileHover={{ scale: 1.02 }} className="inline-flex w-fit items-center gap-3 rounded-full bg-[#BE1E2D] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_18px_44px_rgba(190,30,45,0.28)] transition-colors hover:bg-[#A01C32]">
                Découvrir notre univers <ArrowUpRight className="h-4 w-4" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 md:py-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp} transition={{ duration: 0.8 }} className="mx-auto max-w-[1440px] rounded-[2.5rem] bg-[#F8F6F3] p-6 shadow-[0_26px_90px_rgba(17,17,17,0.06)] sm:p-10 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="text-5xl font-semibold leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl">Chaque image raconte une histoire.</h2>
            <p className="max-w-2xl text-xl leading-relaxed text-[#2A2A2A] sm:text-2xl">
              Nous créons des portraits, des films et des récits visuels pour celles et ceux qui veulent être vus avec justesse, émotion et exigence.
            </p>
          </div>
          <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#111111] md:mt-24">
            <img
              className="aspect-[16/9] w-full object-cover grayscale"
              src={editorialWide}
              alt="Séance éditoriale Tselem Studio"
            />
          </div>
        </motion.div>
      </section>

      <section className="px-4 py-8 sm:px-6 md:py-10">
        <div className="mx-auto max-w-[1440px] rounded-[2.5rem] bg-[#F8F6F3] p-6 shadow-[0_26px_90px_rgba(17,17,17,0.06)] sm:p-10 lg:p-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }} className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#BE1E2D]">Services</p>
              <h2 className="text-5xl font-semibold leading-none text-[#111111] sm:text-7xl">Une production complète.</h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[#2A2A2A]/65">De la première intention à la livraison finale, Tselem conçoit des images avec la précision d'un studio et le regard d'une maison éditoriale.</p>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-5">
            {services.map(([name, description, image], index) => (
              <motion.article key={name} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={reveal} transition={{ duration: 0.75, delay: index * 0.06 }} className={`group rounded-[2rem] p-3 shadow-[inset_0_0_0_1px_rgba(17,17,17,0.05)] ${index === 2 ? "bg-[#111111] text-[#F8F6F3]" : "bg-[#ECECEC] text-[#111111]"}`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                  <img src={image} alt={name} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-[#111111]/20 transition group-hover:bg-transparent" />
                </div>
                <div className="min-h-[230px] p-5 sm:p-6">
                  <p className={`mb-8 text-xs ${index === 2 ? "text-[#F8F6F3]/45" : "text-[#111111]/40"}`}>0{index + 1}</p>
                  <h3 className="mb-4 text-2xl font-medium tracking-normal">{name}</h3>
                  <p className={`mb-7 text-sm leading-relaxed ${index === 2 ? "text-[#F8F6F3]/65" : "text-[#2A2A2A]/68"}`}>{description}</p>
                  <EditorialLink href="/services" dark={index === 2}>Explorer</EditorialLink>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 md:py-10">
        <div className="mx-auto max-w-[1440px] rounded-[2.5rem] bg-[#F8F6F3] p-6 shadow-[0_26px_90px_rgba(17,17,17,0.06)] sm:p-10 lg:p-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }} className="mb-20 max-w-4xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#BE1E2D]">Galerie</p>
            <h2 className="text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">Des images qui installent une présence.</h2>
          </motion.div>
          <div className="space-y-24 md:space-y-32">
            {projects.map(([category, title, description, image], index) => (
              <motion.article key={title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={reveal} transition={{ duration: 0.9 }} className={`grid gap-8 md:grid-cols-2 md:items-center lg:gap-16 ${index % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <ParallaxImage src={image} alt={title} className="aspect-[4/5] rounded-[2rem] md:aspect-[5/6]" />
                <div className="max-w-xl rounded-[2rem] bg-[#ECECEC] p-8 md:p-10">
                  <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#BE1E2D]">{category}</p>
                  <h3 className="mb-6 text-4xl font-semibold leading-none sm:text-6xl">{title}</h3>
                  <p className="mb-9 text-lg leading-relaxed text-[#2A2A2A]">{description}</p>
                  <EditorialLink href="/galerie">Voir le projet</EditorialLink>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 md:py-10">
        <div className="mx-auto grid max-w-[1440px] gap-4 md:grid-cols-3">
          {[[500, "Séances réalisées"], [100, "Entreprises accompagnées"], [1000, "Moments capturés"]].map(([value, label]) => (
            <motion.div key={label as string} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[2rem] bg-[#F8F6F3] p-8 shadow-[0_22px_70px_rgba(17,17,17,0.05)]">
              <div className="text-6xl font-semibold leading-none sm:text-7xl"><CountUp value={value as number} /></div>
              <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#2A2A2A]/70">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 md:py-10">
        <div className="mx-auto max-w-[1440px] rounded-[2.5rem] bg-[#F8F6F3] p-6 shadow-[0_26px_90px_rgba(17,17,17,0.06)] sm:p-10 lg:p-16">
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="text-5xl font-semibold leading-none sm:text-7xl">L'expérience Tselem.</h2>
            <p className="max-w-md text-[#2A2A2A]/75">Une méthode claire, silencieuse et exigeante pour que chaque production garde son intensité.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {["Prise de contact", "Direction artistique", "Production", "Retouche", "Livraison"].map((step, index) => (
              <motion.div key={step} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.08 }} className="rounded-[1.8rem] bg-[#ECECEC] p-7">
                <p className="mb-12 text-sm text-[#BE1E2D]">0{index + 1}</p>
                <h3 className="text-2xl font-medium leading-tight">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 md:py-10">
        <div className="mx-auto max-w-[1440px] rounded-[2.5rem] bg-[#F8F6F3] p-6 shadow-[0_26px_90px_rgba(17,17,17,0.06)] sm:p-10 lg:p-16">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#BE1E2D]">Instagram</p>
              <h2 className="text-5xl font-semibold leading-none sm:text-7xl">Le studio en mouvement.</h2>
            </div>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-3 border-b border-[#111111]/25 pb-2 text-[11px] font-semibold uppercase tracking-[0.22em] hover:text-[#BE1E2D]">
              Voir les dernières publications <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
            {socialPosts.map((post, index) => (
              <motion.a key={post} href={instagramUrl} target="_blank" rel="noreferrer" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.05 }} className="group aspect-square overflow-hidden rounded-[1.6rem] bg-[#111111] shadow-[0_18px_50px_rgba(17,17,17,0.08)]">
                <img src={post} alt={`Publication Instagram Tselem ${index + 1}`} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 md:py-10">
        <div className="mx-auto grid max-w-[1440px] gap-4 rounded-[2.5rem] bg-[#F8F6F3] p-6 shadow-[0_26px_90px_rgba(17,17,17,0.06)] sm:p-10 md:grid-cols-[0.85fr_1.15fr] md:items-center lg:p-16">
          <ParallaxImage src={clientPortrait} alt="Portrait client Tselem" className="aspect-[4/5] rounded-[2rem]" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }} className="rounded-[2rem] bg-[#ECECEC] p-8 md:p-12">
            <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#BE1E2D]">Témoignages</p>
            <blockquote className="text-4xl font-medium leading-tight sm:text-6xl">"Tselem ne prend pas seulement des photos. Ils composent une mémoire que l'on a envie de transmettre."</blockquote>
            <div className="mt-10 flex items-center gap-4">
              <img src={clientPortrait2} alt="Client Tselem" className="h-14 w-14 rounded-full object-cover grayscale" />
              <div>
                <p className="font-semibold">Amina K.</p>
                <p className="text-sm text-[#2A2A2A]/65">Portrait & branding personnel</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 md:py-10">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2.5rem] bg-[#111111] px-6 py-24 text-[#F8F6F3] shadow-[0_28px_90px_rgba(17,17,17,0.14)] sm:px-10 md:py-32 lg:px-16">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-45 md:block">
          <img src={weddingHero} alt="Moment émotionnel Tselem" className="h-full w-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/60 to-transparent" />
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.8 }} className="relative z-10 max-w-4xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#BE1E2D]">Contact</p>
          <h2 className="text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">Prêt à créer quelque chose d'exceptionnel ?</h2>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/rendez-vous">
              <span className="inline-flex items-center justify-center gap-3 rounded-full bg-[#BE1E2D] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:bg-[#A01C32]"><Calendar className="h-4 w-4" />Réserver une séance</span>
            </Link>
            <Link href="/contact">
              <span className="inline-flex items-center justify-center gap-3 rounded-full border border-[#F8F6F3]/25 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F8F6F3] hover:border-[#BE1E2D] hover:text-[#BE1E2D]"><MessageCircle className="h-4 w-4" />Parler à notre équipe</span>
            </Link>
          </div>
        </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
