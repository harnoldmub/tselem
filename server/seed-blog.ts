import { storage } from "./storage";

const blogPostsData = [
  {
    title: "Les 10 Conseils pour Réussir Votre Séance Photo",
    slug: "conseils-seance-photo",
    excerpt: "Découvrez nos meilleurs conseils pour préparer votre séance photo et obtenir des résultats exceptionnels. De la tenue vestimentaire à la pose naturelle...",
    content: `
      <h2>Préparez-vous pour une séance photo inoubliable</h2>
      <p>Une séance photo réussie commence bien avant le jour J. Voici nos 10 conseils essentiels pour obtenir des résultats exceptionnels qui dépasseront vos attentes.</p>
      
      <h3>1. Choisissez votre tenue avec soin</h3>
      <p>Les couleurs unies et intemporelles fonctionnent généralement mieux que les motifs complexes. Privilégiez des vêtements dans lesquels vous vous sentez à l'aise et confiant. Évitez les logos et les messages imprimés qui peuvent distraire du sujet principal : vous.</p>
      
      <h3>2. Planifiez à l'avance</h3>
      <p>Discutez avec votre photographe de vos attentes, du style souhaité et des lieux de tournage. Une bonne communication garantit que tout le monde est sur la même longueur d'onde.</p>
      
      <h3>3. L'éclairage est crucial</h3>
      <p>La golden hour (l'heure dorée) - juste après le lever du soleil ou avant le coucher - offre une lumière naturelle magnifique et flatteuse. Si vous photographiez en intérieur, assurez-vous d'avoir suffisamment de lumière naturelle.</p>
      
      <h3>4. Soyez naturel</h3>
      <p>Les meilleures photos capturent des moments authentiques. Détendez-vous, soyez vous-même, et laissez votre personnalité briller. Les poses trop rigides paraissent artificielles.</p>
      
      <h3>5. Hydratez-vous et reposez-vous</h3>
      <p>Une bonne nuit de sommeil et une hydratation suffisante font des merveilles pour votre apparence. Votre peau sera plus lumineuse et vos yeux plus vifs.</p>
      
      <h3>6. Préparez plusieurs looks</h3>
      <p>Apportez plusieurs tenues pour varier les styles et les ambiances. Cela vous donnera plus d'options et de diversité dans votre galerie finale.</p>
      
      <h3>7. Maquillage et coiffure</h3>
      <p>Pour les femmes, un maquillage légèrement plus prononcé que d'habitude fonctionne bien en photo. Pour les hommes, une peau bien hydratée et des cheveux coiffés suffisent généralement.</p>
      
      <h3>8. Accessoirisez avec parcimonie</h3>
      <p>Quelques accessoires bien choisis peuvent ajouter du caractère à vos photos, mais n'en faites pas trop. L'objectif est de compléter, pas de surcharger.</p>
      
      <h3>9. Faites confiance au professionnel</h3>
      <p>Votre photographe a l'expérience et l'œil artistique. Suivez ses directives et n'hésitez pas à lui faire part de vos préférences.</p>
      
      <h3>10. Amusez-vous !</h3>
      <p>Le plus important : profitez du moment. Quand vous vous amusez, cela se voit dans les photos. La joie et la spontanéité créent les images les plus mémorables.</p>
      
      <blockquote>
        "La photographie est l'art de capturer l'instant présent avec toute son authenticité." - TSELEM Studio
      </blockquote>
      
      <p>En suivant ces conseils, vous êtes assuré de vivre une expérience photo agréable et d'obtenir des images dont vous serez fier pendant des années.</p>
    `,
    image: "/attached_assets/generated_images/Photography_service_studio_setup_7ea0b469.png",
    category: "Photographie",
    author: "TSELEM Studio",
    isPublished: true,
  },
  {
    title: "Comment Choisir le Bon Package pour Votre Mariage",
    slug: "package-mariage",
    excerpt: "Le choix du package photo et vidéo pour votre mariage est crucial. Voici notre guide complet pour vous aider à faire le meilleur choix selon votre budget...",
    content: `
      <h2>Le guide ultime pour choisir votre package mariage</h2>
      <p>Votre mariage est l'un des jours les plus importants de votre vie, et les souvenirs visuels que vous en conserverez sont inestimables. Voici comment choisir le package parfait pour immortaliser votre grand jour.</p>
      
      <h3>Évaluez vos priorités</h3>
      <p>Avant tout, déterminez ce qui est le plus important pour vous. Privilégiez-vous la photo ou la vidéo ? Voulez-vous un album imprimé ou une galerie numérique ? Combien d'heures de couverture souhaitez-vous ?</p>
      
      <h3>Les différents types de packages</h3>
      
      <h4>Package Essentiel</h4>
      <ul>
        <li>4-6 heures de couverture photo</li>
        <li>Galerie numérique de 300-500 photos retouchées</li>
        <li>Idéal pour les mariages intimes</li>
        <li>Budget : entrée de gamme</li>
      </ul>
      
      <h4>Package Prestige</h4>
      <ul>
        <li>8-10 heures de couverture photo et vidéo</li>
        <li>Galerie numérique de 600-800 photos</li>
        <li>Film de mariage édité (15-20 minutes)</li>
        <li>Album photo premium</li>
        <li>Budget : milieu de gamme</li>
      </ul>
      
      <h4>Package Luxe</h4>
      <ul>
        <li>Couverture complète de la journée (12+ heures)</li>
        <li>Deux photographes et un vidéaste</li>
        <li>Galerie illimitée</li>
        <li>Film de mariage cinématographique</li>
        <li>Album photo luxe + tirages</li>
        <li>Séance engagement offerte</li>
        <li>Budget : haut de gamme</li>
      </ul>
      
      <h3>Questions à poser</h3>
      <p>Lors de votre consultation avec le photographe, n'oubliez pas de demander :</p>
      <ul>
        <li>Combien de photos retouchées sont incluses ?</li>
        <li>Quel est le délai de livraison ?</li>
        <li>Y a-t-il des frais supplémentaires (déplacement, heures supplémentaires) ?</li>
        <li>Pouvez-vous voir des mariages complets déjà photographiés ?</li>
        <li>Quel équipement de backup avez-vous ?</li>
      </ul>
      
      <h3>Le budget réaliste</h3>
      <p>En général, prévoyez d'allouer 10-15% de votre budget total de mariage à la photographie et vidéographie. C'est un investissement dans des souvenirs qui dureront toute une vie.</p>
      
      <blockquote>
        "Votre robe sera portée une fois, les fleurs faneront, mais vos photos seront éternelles." - TSELEM Studio
      </blockquote>
      
      <h3>Les extras qui font la différence</h3>
      <p>Certains services additionnels peuvent vraiment enrichir votre expérience :</p>
      <ul>
        <li>Séance engagement pour vous familiariser avec le photographe</li>
        <li>Livre d'or photo</li>
        <li>Impression de photos pour les invités</li>
        <li>Drone pour des prises de vue aériennes</li>
        <li>Photobooth</li>
      </ul>
      
      <p>Chez TSELEM, nous personnalisons chaque package selon vos besoins spécifiques. Contactez-nous pour discuter de votre vision et créer ensemble le package parfait pour votre jour spécial.</p>
    `,
    image: "/attached_assets/tslm_hp_slider_1_1762333728329.jpg",
    category: "Mariage",
    author: "TSELEM Studio",
    isPublished: true,
  },
  {
    title: "Tendances Vidéo 2024 : Ce Qu'il Faut Savoir",
    slug: "tendances-video-2024",
    excerpt: "Les tendances en production vidéo évoluent rapidement. Découvrez les styles, techniques et formats qui domineront en 2024...",
    content: `
      <h2>Les tendances vidéo incontournables de 2024</h2>
      <p>Le monde de la production vidéo évolue à une vitesse fulgurante. Découvrez les tendances qui définissent 2024 et comment les intégrer dans vos projets.</p>
      
      <h3>1. Le format vertical prend le dessus</h3>
      <p>Avec la domination de TikTok, Instagram Reels et YouTube Shorts, le format vertical (9:16) n'est plus une option mais une nécessité. En 2024, pensez "mobile-first" pour maximiser l'engagement.</p>
      
      <h3>2. Contenu authentique et raw</h3>
      <p>Les audiences privilégient l'authenticité à la perfection. Les vidéos qui montrent les coulisses, les moments spontanés et les interactions réelles génèrent plus d'engagement que les productions ultra-polies.</p>
      
      <h3>3. Vidéos courtes et percutantes</h3>
      <p>L'attention diminue : les vidéos de 15-60 secondes dominent. Allez droit au but, captivez dans les 3 premières secondes, et délivrez votre message rapidement.</p>
      
      <h3>4. L'IA au service de la créativité</h3>
      <p>Les outils d'IA révolutionnent la post-production :</p>
      <ul>
        <li>Correction colorimétrique automatique</li>
        <li>Génération de sous-titres intelligents</li>
        <li>Effets visuels accessibles</li>
        <li>Optimisation audio en un clic</li>
      </ul>
      
      <h3>5. Le storytelling immersif</h3>
      <p>Les vidéos à 360° et la réalité augmentée créent des expériences plus engageantes. Les marques investissent dans ces technologies pour se démarquer.</p>
      
      <h3>6. Contenu éducatif et tutoriels</h3>
      <p>Les vidéos "how-to" et les contenus éducatifs continuent de performer excellemment. Les gens recherchent de la valeur ajoutée, pas seulement du divertissement.</p>
      
      <h3>7. Live streaming interactif</h3>
      <p>Les diffusions en direct avec interaction en temps réel (Q&A, polls, challenges) créent une connexion authentique avec l'audience.</p>
      
      <h3>8. Optimisation SEO vidéo</h3>
      <p>Les moteurs de recherche privilégient le contenu vidéo. Optimisez vos titres, descriptions et tags pour maximiser la visibilité.</p>
      
      <h3>9. User-Generated Content (UGC)</h3>
      <p>Encouragez votre audience à créer du contenu autour de votre marque. Les vidéos UGC sont perçues comme plus authentiques et génèrent 5x plus d'engagement.</p>
      
      <h3>10. Production durable</h3>
      <p>L'éco-responsabilité influence même la production vidéo. Optimisez vos tournages pour réduire l'empreinte carbone et communiquez sur ces efforts.</p>
      
      <blockquote>
        "La vidéo n'est plus un luxe mais une nécessité dans toute stratégie de communication moderne." - TSELEM Studio
      </blockquote>
      
      <h3>Comment TSELEM intègre ces tendances</h3>
      <p>Chez TSELEM, nous restons à la pointe de l'innovation :</p>
      <ul>
        <li>Production multi-format (vertical, carré, horizontal)</li>
        <li>Équipement de dernière génération</li>
        <li>Montage optimisé pour chaque plateforme</li>
        <li>Stratégie de contenu personnalisée</li>
      </ul>
      
      <p>Prêt à créer du contenu vidéo qui cartonne en 2024 ? Contactez-nous pour discuter de votre projet.</p>
    `,
    image: "/attached_assets/generated_images/Video_production_service_scene_d18c7b2e.png",
    category: "Vidéo",
    author: "TSELEM Studio",
    isPublished: true,
  },
];

async function seedBlog() {
  console.log("Starting blog seed...");
  
  try {
    for (const postData of blogPostsData) {
      const existingPost = await storage.getBlogPostBySlug(postData.slug);
      
      if (existingPost) {
        console.log(`Post "${postData.title}" already exists, skipping...`);
        continue;
      }
      
      await storage.createBlogPost(postData);
      console.log(`Created post: ${postData.title}`);
    }
    
    console.log("Blog seed completed successfully!");
  } catch (error) {
    console.error("Error seeding blog:", error);
    throw error;
  }
}

seedBlog();
