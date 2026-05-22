import { useParams, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Check } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  results: string[];
  challenge: string;
  solution: string;
  images: string[];
}

const caseStudiesData: Record<string, CaseStudy> = {
  "1": {
    id: 1,
    title: "Campagne Mariage de Luxe Château de Versailles",
    client: "Sophie & Alexandre",
    category: "Mariage",
    date: "Juin 2024",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    excerpt: "Une célébration somptueuse capturée dans les jardins du château",
    challenge: "Organiser et photographier un mariage de luxe dans un lieu prestigieux tout en respectant les contraintes strictes du patrimoine historique. Le défi était de capturer l'essence intime d'une célébration privée dans un cadre monumental.",
    solution: "Notre équipe a mis en place une stratégie de couverture discrète mais complète, utilisant plusieurs photographes positionnés stratégiquement. Nous avons travaillé en étroite collaboration avec les responsables du château pour identifier les meilleurs angles et moments de lumière naturelle.",
    results: [
      "500+ photos livrées en haute résolution",
      "Film documentaire de 45 minutes",
      "Album premium 40x40cm avec impression sur papier d'art",
      "Diaporama animé pour réception",
    ],
    images: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    ],
  },
  "2": {
    id: 2,
    title: "Lancement Produit Tech Innovant",
    client: "TechCorp International",
    category: "Corporate",
    date: "Mai 2024",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    excerpt: "Couverture complète d'un événement corporate de grande envergure",
    challenge: "Capturer l'énergie et l'innovation d'un lancement de produit tech devant 500+ invités tout en diffusant en direct sur plusieurs plateformes. Les contraintes techniques étaient importantes : éclairage de scène, transitions rapides, et besoin de contenus instantanés pour les réseaux sociaux.",
    solution: "Déploiement d'une équipe de 6 professionnels avec équipement multi-caméras 4K, régie vidéo en temps réel, et photographes dédiés aux moments clés. Mise en place d'un workflow d'édition rapide pour la livraison de contenus sociaux dans l'heure suivant l'événement.",
    results: [
      "Livestream multi-caméras 4K sur 3 plateformes",
      "300+ photos événementielles professionnelles",
      "Vidéo recap 5 minutes livrée sous 48h",
      "20+ contenus courts pour réseaux sociaux",
    ],
    images: [
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    ],
  },
  "3": {
    id: 3,
    title: "Collection Fashion Automne/Hiver 2024",
    client: "Maison Élégance",
    category: "Fashion",
    date: "Avril 2024",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    excerpt: "Shooting haute couture dans les rues de Paris",
    challenge: "Créer un lookbook captivant pour une collection haute couture en utilisant les rues de Paris comme toile de fond. La difficulté résidait dans la gestion des autorisations de tournage, des conditions météo imprévisibles et la coordination avec les mannequins et stylistes.",
    solution: "Planification minutieuse avec repérage des lieux 2 semaines en avance, obtention des permis nécessaires, et équipe technique mobile prête à s'adapter. Utilisation de l'heure dorée pour maximiser la beauté naturelle des clichés.",
    results: [
      "Lookbook complet 50 pages impression premium",
      "150+ photos retouchées professionnellement",
      "Vidéo backstage exclusive 10 minutes",
      "Campagne sociale avec +2M impressions",
    ],
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
    ],
  },
};

export default function CaseStudyDetail() {
  const params = useParams();
  const caseStudy = caseStudiesData[params.id || ""];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-24 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Étude de cas non trouvée</h1>
          <Link href="/etudes-de-cas">
            <Button variant="default" data-testid="button-back-to-cases">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux études de cas
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/etudes-de-cas">
            <Button
              variant="ghost"
              className="mb-8 font-sans"
              data-testid="button-back"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground font-sans">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{caseStudy.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{caseStudy.date}</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-destructive/10 text-destructive font-semibold">
                {caseStudy.category}
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
              {caseStudy.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-12 font-sans">
              {caseStudy.excerpt}
            </p>

            <div className="relative h-96 mb-16 rounded-lg overflow-hidden">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
                data-testid="case-study-hero-image"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 font-sans">
                    Le Défi
                  </h2>
                  <p className="text-muted-foreground font-sans text-lg leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 font-sans">
                    Notre Solution
                  </h2>
                  <p className="text-muted-foreground font-sans text-lg leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 font-sans">
                Galerie de Photos
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudy.images.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative h-64 rounded-lg overflow-hidden hover-elevate"
                  >
                    <img
                      src={img}
                      alt={`Galerie ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      data-testid={`gallery-image-${index}`}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 font-sans">
                  Résultats Obtenus
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {caseStudy.results.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                      data-testid={`result-${index}`}
                    >
                      <div className="w-6 h-6 rounded-full bg-destructive flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-sans text-lg">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-6 font-sans">
                Prêt à créer quelque chose d'exceptionnel ?
              </h3>
              <Link href="/rendez-vous">
                <Button
                  size="lg"
                  variant="destructive"
                  className="font-sans"
                  data-testid="button-book-now"
                >
                  Réserver une Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
