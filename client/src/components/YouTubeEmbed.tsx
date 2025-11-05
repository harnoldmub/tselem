import { Play } from "lucide-react";
import { useState } from "react";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  autoplay?: boolean;
  className?: string;
}

export default function YouTubeEmbed({
  videoId,
  title = "Video",
  autoplay = false,
  className = "",
}: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (!isPlaying) {
    return (
      <div
        className={`relative aspect-video cursor-pointer group overflow-hidden rounded-md ${className}`}
        onClick={() => setIsPlaying(true)}
        data-testid="youtube-thumbnail"
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/60 transition-all duration-300 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-destructive/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="w-10 h-10 text-white ml-1" fill="white" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative aspect-video overflow-hidden rounded-md ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        data-testid="youtube-player"
      />
    </div>
  );
}
