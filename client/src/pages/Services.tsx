import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Camera, Video, Palette, Package, Check } from "lucide-react";
import servicePhoto from "@assets/generated_images/Photography_service_studio_setup_7ea0b469.png";

const services = [
  {
    icon: Camera,
    title: "Photographie Professionnelle",
    description: "Capturer l'essence de vos moments importants avec excellence et créativité",
    features: [
      "Mariages et cérémonies",
      "Événements corporatifs",
      "Portraits professionnels et artistiques",
      "Photographie de mode et éditoriale",
      "Photographie produit et commerciale",
      "Séances famille et nouveau-nés",
    ],
  },
  {
    icon: Video,
    title: "Production Vidéo",
    description: "Raconter votre histoire à travers des vidéos cinématographiques captivantes",
    features: [
      "Vidéos promotionnelles d'entreprise",
      "Documentaires et reportages",
      "Captation d'événements en direct",
      "Vidéos pour réseaux sociaux",
      "Clips musicaux et artistiques",
      "Films de mariage cinématographiques",
    ],
  },
  {
    icon: Palette,
    title: "Design Graphique & Retouche",
    description: "Sublimer vos visuels avec notre expertise en post-production créative",
    features: [
      "Retouche photo professionnelle",
      "Montage vidéo créatif",
      "Design d'identité visuelle",
      "Création de supports marketing",
      "Compositing et effets spéciaux",
      "Colorimétrie avancée",
    ],
  },
  {
    icon: Package,
    title: "Packages Personnalisés",
    description: "Solutions complètes sur mesure adaptées à vos besoins spécifiques",
    features: [
      "Combinaison photo + vidéo",
      "Couverture événementielle complète",
      "Campagnes marketing intégrées",
      "Suivi de projet de A à Z",
      "Livraison multiformat",
      "Support et révisions inclus",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        image={servicePhoto}
        title="Nos Services"
        subtitle="Des solutions créatives professionnelles pour tous vos besoins visuels"
        showCTA={false}
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Excellence en Photographie & Vidéo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nous offrons une gamme complète de services pour donner vie à votre vision créative
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="overflow-visible" data-testid={`service-detail-${index}`}>
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-md bg-destructive/10 flex items-center justify-center">
                          <Icon className="w-10 h-10 text-destructive" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                        <p className="text-lg text-muted-foreground mb-6">
                          {service.description}
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Check className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                              <span className="text-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-4">Intéressé par nos services ?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rendez-vous" data-testid="button-book-service">
                <Button size="lg" variant="default" className="font-['Montserrat']">
                  RÉSERVER UNE SÉANCE
                </Button>
              </Link>
              <Link href="/contact" data-testid="button-quote">
                <Button size="lg" variant="outline" className="font-['Montserrat']">
                  DEMANDER UN DEVIS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
