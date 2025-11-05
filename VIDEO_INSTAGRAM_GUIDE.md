# Guide d'ajout de vidéo au format Instagram (5100x1080)

## Format de la vidéo

- **Dimensions**: 5100 x 1080 pixels
- **Format**: Ce format ultra-large est idéal pour l'export local et l'affichage sur des écrans larges
- **Formats de fichier supportés**: MP4, WebM, MOV

## Comment ajouter votre vidéo

### Étape 1: Préparer votre vidéo

1. Exportez votre vidéo au format 5100x1080 pixels
2. Formats recommandés:
   - **MP4** (H.264) - Meilleure compatibilité navigateur
   - **WebM** (VP9) - Meilleure compression
3. Optimisez pour le web (compression adaptée)

### Étape 2: Ajouter la vidéo au projet

1. Placez votre fichier vidéo dans le dossier `attached_assets/`
2. Renommez-le avec un nom descriptif, par exemple: `tselem-instagram-showcase.mp4`

### Étape 3: Utiliser le composant InstagramVideo

Le composant `InstagramVideo` a été créé pour afficher votre vidéo. Voici comment l'utiliser:

```tsx
import InstagramVideo from "@/components/InstagramVideo";
import videoSrc from "@assets/tselem-instagram-showcase.mp4";

// Dans votre composant
<InstagramVideo
  videoSrc={videoSrc}
  title="TSELEM - Chaque Pixel Compte"
  autoPlay={true}
  muted={true}
  loop={true}
/>
```

### Paramètres du composant

- `videoSrc` (requis): Chemin vers votre fichier vidéo
- `posterSrc` (optionnel): Image de prévisualisation avant lecture
- `title` (optionnel): Titre affiché en bas de la vidéo
- `autoPlay` (défaut: false): Lecture automatique au chargement
- `muted` (défaut: true): Son coupé par défaut
- `loop` (défaut: true): Lecture en boucle

### Exemple d'intégration sur la page d'accueil

```tsx
// Dans client/src/pages/Home.tsx

import InstagramVideo from "@/components/InstagramVideo";
import showcaseVideo from "@assets/tselem-instagram-showcase.mp4";

// Ajouter une section vidéo
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">
        Notre Showcase Vidéo
      </h2>
      <p className="text-xl text-muted-foreground">
        Découvrez notre travail en mouvement
      </p>
    </div>
    
    <InstagramVideo
      videoSrc={showcaseVideo}
      title="TSELEM - Excellence Créative"
      autoPlay={true}
      muted={true}
      loop={true}
    />
  </div>
</section>
```

## Fonctionnalités du composant

✅ Contrôles de lecture (Play/Pause) au survol
✅ Contrôle du son (Mute/Unmute)
✅ Design responsive qui s'adapte à toutes les tailles d'écran
✅ Lecture automatique en boucle (configurable)
✅ Interface élégante avec overlay au survol
✅ Compatible avec tous les navigateurs modernes
✅ Optimisé pour les performances

## Export local

Le fichier vidéo sera servi statiquement depuis le dossier `attached_assets/` et peut être facilement exporté ou partagé. Il sera accessible via l'URL:

```
https://votre-domaine.replit.app/attached_assets/votre-video.mp4
```

## Notes importantes

- Le serveur est configuré pour servir les fichiers du dossier `attached_assets/`
- Les vidéos de grande taille peuvent affecter le temps de chargement initial
- Considérez l'utilisation d'une image poster pour améliorer l'expérience utilisateur
- Pour de meilleures performances, compressez votre vidéo sans perte de qualité visible

## Recommandations techniques

### Codec et compression
- **Video Codec**: H.264 (compatibilité maximale) ou H.265 (meilleure compression)
- **Audio Codec**: AAC
- **Bitrate recommandé**: 8-15 Mbps pour cette résolution
- **Frame rate**: 24, 30 ou 60 fps selon le contenu

### Optimisation
- Utilisez des outils comme HandBrake ou FFmpeg pour optimiser
- Générez une version poster (image de prévisualisation)
- Envisagez de créer plusieurs versions (SD, HD) pour l'adaptive streaming

## Support

Pour toute question ou assistance, contactez l'équipe technique TSELEM.
