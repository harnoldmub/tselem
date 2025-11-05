import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">Contactez-Nous</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une question ? Un projet ? N'hésitez pas à nous contacter. Notre équipe vous répondra dans les plus brefs délais.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Adresse</h3>
                      <p className="text-muted-foreground">
                        1er étage, Immeuble de La Bourse 22389/ Rond point Forescom
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Téléphone</h3>
                      <a
                        href="tel:+243980001014"
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        +243 980 001 014
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <a
                        href="mailto:contact@tselemrdc.com"
                        className="text-muted-foreground hover:text-destructive transition-colors break-all"
                      >
                        contact@tselemrdc.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Horaires</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Lun - Ven: 10h - 18h</p>
                        <p>Sam: 10h - 16h</p>
                        <p>Dim: Sur rendez-vous</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
