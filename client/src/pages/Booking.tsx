import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

export default function Booking() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">Réservez Votre Séance</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choisissez le type de service, la date et l'heure qui vous conviennent. 
              Nous nous occuperons du reste pour créer une expérience exceptionnelle.
            </p>
          </div>

          <BookingForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
