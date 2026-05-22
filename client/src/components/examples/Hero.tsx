import Hero from "../Hero";
import heroImage from "@assets/images/hero/hero-1.jpg";

export default function HeroExample() {
  return (
    <Hero
      image={heroImage}
      title="TSELEM – Chaque Pixel Compte"
      subtitle="Studio professionnel de photographie et production vidéo. Capturons vos moments les plus précieux avec art et passion."
    />
  );
}
