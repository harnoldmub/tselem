import Hero from "../Hero";
import heroImage from "@assets/tslm_hp_slider_1_1762333728329.jpg";

export default function HeroExample() {
  return (
    <Hero
      image={heroImage}
      title="TSELEM – Chaque Pixel Compte"
      subtitle="Studio professionnel de photographie et production vidéo. Capturons vos moments les plus précieux avec art et passion."
    />
  );
}
