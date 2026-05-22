import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star } from "lucide-react";
import { useState } from "react";

const allTestimonials = [
  {
    id: 1,
    name: "Amina Konaté",
    role: "Directrice Marketing",
    rating: 5,
    message: "TSELEM a capturé notre événement corporate avec un professionnalisme exceptionnel. Les photos sont magnifiques et reflètent parfaitement l'esprit de notre marque.",
    projectType: "Événement Corporate",
  },
  {
    id: 2,
    name: "Jean-Pierre Mensah",
    role: "Entrepreneur",
    rating: 5,
    message: "Service impeccable du début à la fin. L'équipe est créative, à l'écoute et livre un travail de qualité supérieure. Je recommande vivement !",
    projectType: "Corporate",
  },
  {
    id: 3,
    name: "Fatoumata Diallo",
    role: "Mariée",
    rating: 5,
    message: "Notre mariage a été immortalisé de façon extraordinaire. Chaque photo raconte une histoire. Merci TSELEM pour ces souvenirs inoubliables !",
    projectType: "Photographie de Mariage",
  },
];

export default function Testimonials() {
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Review submitted:", { ...formData, rating });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", projectType: "", message: "" });
      setRating(0);
    }, 5000);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Témoignages Clients</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez ce que nos clients disent de leur expérience avec TSELEM
          </p>
        </div>
      </section>

      <TestimonialsSection testimonials={allTestimonials} />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center">Partagez Votre Expérience</CardTitle>
              <p className="text-center text-muted-foreground">
                Votre avis compte ! Aidez d'autres clients à découvrir nos services
              </p>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Merci pour votre avis !</h3>
                  <p className="text-muted-foreground">
                    Votre témoignage sera vérifié et publié sous peu.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Votre Nom *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      data-testid="input-name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="projectType">Type de Projet *</Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                      required
                    >
                      <SelectTrigger data-testid="select-project-type">
                        <SelectValue placeholder="Sélectionnez un type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mariage">Photographie de Mariage</SelectItem>
                        <SelectItem value="corporate">Événement Corporate</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                        <SelectItem value="mode">Session Mode</SelectItem>
                        <SelectItem value="video">Production Vidéo</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Note *</Label>
                    <div className="flex gap-2 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="hover-elevate rounded"
                          data-testid={`star-${star}`}
                        >
                          <Star
                            className={`w-8 h-8 cursor-pointer transition-colors ${
                              star <= rating
                                ? "fill-destructive text-destructive"
                                : "text-muted-foreground/30 hover:text-destructive"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Votre Témoignage *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      placeholder="Parlez-nous de votre expérience avec TSELEM..."
                      required
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full font-sans"
                    disabled={rating === 0}
                    data-testid="button-submit"
                  >
                    SOUMETTRE MON AVIS
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
