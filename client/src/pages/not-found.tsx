import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Non Trouvée</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-md">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link href="/">
            <Button size="lg" className="font-['Montserrat']" data-testid="button-home">
              RETOUR À L'ACCUEIL
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
