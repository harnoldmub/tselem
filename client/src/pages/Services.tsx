import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight, Camera, Video, Sparkles, Building2, Heart, UserRound } from "lucide-react";
import servicePhoto from "@assets/images/corporate/corporate-01.jpg";
import wedding from "@assets/images/mariage/mariage-01.jpg";
import maternity from "@assets/images/maternite/maternite-01.jpg";
import branding from "@assets/images/mode/mode-04.jpg";
import family from "@assets/images/famille-et-enfant/famille-enfant-01.jpg";
import corporate from "@assets/images/corporate/corporate-01.jpg";
import team from "@assets/images/portraits/portraits-14.jpg";

const services = [
  {
    icon: UserRound,
    title: "Corporate",
    description: "Images professionnelles pour dirigeants, équipes et communication d'entreprise.",
    image: corporate,
    items: ["Portrait dirigeant", "Équipe", "Communication"],
  },
  {
    icon: Heart,
    title: "Mariage",
    description: "Un récit photographique et vidéo pensé comme une archive familiale de luxe.",
    image: wedding,
    items: ["Préparation", "Cérémonie", "Livre photo & film"],
  },
  {
    icon: Sparkles,
    title: "Maternité",
    description: "Images sensibles, sobres et intemporelles pour préserver une période unique.",
    image: maternity,
    items: ["Moodboard", "Studio ou lieu", "Galerie privée"],
  },
  {
    icon: Camera,
    title: "Mode",
    description: "Séances éditoriales, silhouettes, attitudes et images pensées pour une présence visuelle forte.",
    image: branding,
    items: ["Édito", "Lookbook", "Assets réseaux"],
  },
  {
    icon: Building2,
    title: "Entreprise",
    description: "Images de marque pour équipes, dirigeants, campagnes et communication corporate.",
    image: team,
    items: ["Reportage", "Portraits équipe", "Usage commercial"],
  },
  {
    icon: Video,
    title: "Couple, Famille & Enfants",
    description: "Images sensibles pour couples, familles, enfants, anniversaires et moments intimes.",
    image: family,
    items: ["Séance famille", "Portrait enfant", "Galerie privée"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#E8E8E8] text-[#111111]">
      <Header />
      <Hero
        image={servicePhoto}
        title="Services"
        subtitle="Des offres administrables pour piloter corporate, mariages, mode, entreprises et productions visuelles."
        showCTA={false}
      />

      <section className="px-4 py-8 sm:px-6 md:py-10">
        <div className="mx-auto max-w-[1440px] rounded-[2.5rem] bg-[#F8F6F3] p-6 shadow-[0_26px_90px_rgba(17,17,17,0.06)] sm:p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="mb-16 grid gap-8 md:grid-cols-[1fr_1fr] md:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em] text-[#BE1E2D]">Catalogue dynamique</p>
              <h2 className="text-4xl font-semibold leading-[1] sm:text-5xl lg:text-6xl">Une offre claire. Une perception premium.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-[#2A2A2A]/72 sm:text-xl">
              Chaque service est pensé comme un produit éditorial: promesse nette, visuels forts, options lisibles et conversion directe vers la réservation.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, delay: index * 0.06 }}
                  className="group rounded-[2rem] bg-[#ECECEC] p-3 shadow-[inset_0_0_0_1px_rgba(17,17,17,0.04)]"
                >
                  <div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] bg-[#ECECEC]">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-[#F8F6F3]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="mb-10 text-xs text-[#BE1E2D]">0{index + 1}</p>
                    <h3 className="mb-4 text-3xl font-semibold leading-tight">{service.title}</h3>
                    <p className="mb-7 text-base leading-relaxed text-[#2A2A2A]/72">{service.description}</p>
                    <div className="mb-8 space-y-3 border-y border-[#111111]/10 py-5">
                      {service.items.map((item) => (
                        <div key={item} className="flex items-center justify-between text-sm text-[#111111]/70">
                          <span>{item}</span>
                          <span className="h-px w-8 bg-[#111111]/16" />
                        </div>
                      ))}
                    </div>
                    <Link href="/rendez-vous">
                      <span className="inline-flex items-center gap-3 border-b border-[#111111]/20 pb-2 text-[11px] font-bold uppercase tracking-[0.22em] transition-colors group-hover:text-[#BE1E2D]">
                        Réserver ce service <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 md:py-10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 rounded-[2.5rem] bg-[#111111] p-8 text-[#F8F6F3] shadow-[0_26px_90px_rgba(17,17,17,0.12)] sm:p-12 md:flex-row md:items-end md:justify-between lg:p-16">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em] text-[#BE1E2D]">Prochaine étape</p>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1] sm:text-5xl lg:text-6xl">Transformer une demande en projet signé.</h2>
          </div>
          <Link href="/contact">
            <span className="inline-flex items-center gap-3 rounded-full bg-[#BE1E2D] px-6 py-4 text-[11px] font-black uppercase tracking-[0.22em] text-white hover:bg-[#A01C32]">
              Demander un devis <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
