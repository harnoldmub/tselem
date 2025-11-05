import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Heart, Award, Users } from "lucide-react";
import teamImage from "@assets/tslm_hp_slider_3-1_1762333728332.jpg";

const values = [
  {
    icon: Camera,
    title: "Excellence Créative",
    description: "Nous repoussons constamment les limites de la créativité pour offrir des résultats exceptionnels qui dépassent vos attentes.",
  },
  {
    icon: Heart,
    title: "Passion & Engagement",
    description: "Chaque projet est traité avec le même niveau de passion et d'engagement, qu'il s'agisse d'un mariage intime ou d'un grand événement corporate.",
  },
  {
    icon: Award,
    title: "Professionnalisme",
    description: "Equipement de pointe, respect des délais et service client irréprochable sont au cœur de notre approche professionnelle.",
  },
  {
    icon: Users,
    title: "Approche Collaborative",
    description: "Nous travaillons en étroite collaboration avec nos clients pour comprendre leur vision et la concrétiser avec précision.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        image={teamImage}
        title="À Propos de TSELEM"
        subtitle="Votre partenaire créatif pour capturer l'extraordinaire dans l'ordinaire"
        showCTA={false}
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Notre Histoire</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                TSELEM est né d'une passion commune pour l'image et le désir de capturer les moments qui comptent vraiment. 
                Fondé par une équipe de photographes et vidéastes professionnels, notre studio s'est rapidement imposé comme 
                une référence en matière de photographie et production vidéo de qualité.
              </p>
              <p>
                Notre nom, TSELEM, signifie "image" en hébreu, reflétant notre philosophie : chaque pixel compte. 
                Nous croyons que derrière chaque image se cache une histoire, une émotion, un moment précieux qui mérite 
                d'être préservé avec le plus grand soin et la plus haute qualité.
              </p>
              <p>
                Au fil des années, nous avons eu le privilège de collaborer avec des clients variés, des mariés aux grandes 
                entreprises, en passant par des artistes et des marques de mode. Chaque projet est pour nous une nouvelle 
                opportunité de créer quelque chose d'unique et de mémorable.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="hover-elevate overflow-visible" data-testid={`value-${index}`}>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-md bg-destructive/10 flex items-center justify-center">
                            <Icon className="w-8 h-8 text-destructive" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Notre Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Offrir à nos clients des services de photographie et production vidéo d'exception, 
              en combinant expertise technique, vision artistique et approche personnalisée. 
              Nous nous engageons à transformer chaque moment en une œuvre d'art intemporelle.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
