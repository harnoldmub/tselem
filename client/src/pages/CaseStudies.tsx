import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Calendar, User } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  results: string[];
}

export default function CaseStudies() {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Campagne Mariage de Luxe Château de Versailles",
      client: "Sophie & Alexandre",
      category: "Mariage",
      date: "Juin 2024",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      excerpt: "Une célébration somptueuse capturée dans les jardins du château",
      results: [
        "500+ photos livrées",
        "Film documentaire de 45 minutes",
        "Album premium 40x40cm",
      ],
    },
    {
      id: 2,
      title: "Lancement Produit Tech Innovant",
      client: "TechCorp International",
      category: "Corporate",
      date: "Mai 2024",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      excerpt: "Couverture complète d'un événement corporate de grande envergure",
      results: [
        "Livestream multi-caméras",
        "300+ photos événementielles",
        "Vidéo recap 5 minutes",
      ],
    },
    {
      id: 3,
      title: "Collection Fashion Automne/Hiver 2024",
      client: "Maison Élégance",
      category: "Fashion",
      date: "Avril 2024",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
      excerpt: "Shooting haute couture dans les rues de Paris",
      results: [
        "Lookbook complet 50 pages",
        "150+ photos retouchées",
        "Vidéo backstage exclusive",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Études de Cas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-primary-foreground/90 max-w-3xl mx-auto font-sans"
          >
            Découvrez en détail nos projets les plus marquants et les résultats exceptionnels obtenus
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-visible hover-elevate">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-64 md:h-auto overflow-hidden rounded-l-md">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>

                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground font-sans">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{study.client}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{study.date}</span>
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold text-foreground mb-4">
                        {study.title}
                      </h2>

                      <p className="text-lg text-muted-foreground mb-6 font-sans">
                        {study.excerpt}
                      </p>

                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-foreground mb-3 font-sans uppercase tracking-wide">
                          Résultats clés
                        </h3>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-muted-foreground font-sans"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href={`/etudes-de-cas/${study.id}`}>
                        <Button
                          variant="default"
                          className="font-sans gap-2"
                          data-testid={`case-study-${study.id}`}
                        >
                          Lire l'étude complète
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
