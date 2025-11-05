import { Card, CardContent } from "@/components/ui/card";
import { Camera, Video, Palette, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    icon: Camera,
    title: "Photographie",
    description: "Mariages, événements corporatifs, portraits professionnels et sessions fashion. Nous capturons l'essence de chaque moment.",
  },
  {
    icon: Video,
    title: "Production Vidéo",
    description: "Vidéos promotionnelles, documentaires d'entreprise, captation d'événements et contenus pour réseaux sociaux.",
  },
  {
    icon: Palette,
    title: "Design Graphique",
    description: "Retouche photo professionnelle, montage vidéo créatif et design graphique sur mesure pour tous vos projets.",
  },
  {
    icon: Package,
    title: "Packages Personnalisés",
    description: "Solutions complètes adaptées à vos besoins spécifiques. Combinaisons photo, vidéo et design pour un résultat optimal.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions créatives professionnelles pour donner vie à votre vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-elevate transition-all duration-300 overflow-visible"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-md bg-destructive/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-destructive" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/services" data-testid="button-all-services">
            <Button size="lg" variant="default" className="font-['Montserrat']">
              DÉCOUVRIR TOUS NOS SERVICES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
