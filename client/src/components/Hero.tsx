import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  showCTA?: boolean;
}

export default function Hero({ image, title, subtitle, showCTA = true }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/rendez-vous" data-testid="button-hero-book">
              <Button
                size="lg"
                variant="destructive"
                className="text-lg px-8 py-6 font-['Montserrat'] font-semibold"
              >
                RÉSERVER UNE SÉANCE
              </Button>
            </Link>
            <Link href="/portfolio" data-testid="button-hero-portfolio">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-white text-white hover:bg-white hover:text-primary font-['Montserrat'] font-semibold"
              >
                VOIR NOS RÉALISATIONS
              </Button>
            </Link>
          </div>
        )}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
