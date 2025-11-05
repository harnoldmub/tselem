import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InstagramVideoProps {
  videoSrc: string;
  posterSrc?: string;
  title?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export default function InstagramVideo({
  videoSrc,
  posterSrc,
  title = "Vidéo TSELEM",
  autoPlay = false,
  muted = true,
  loop = true,
}: InstagramVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative group w-full max-w-full overflow-hidden rounded-lg bg-black">
      <video
        ref={videoRef}
        className="w-full h-auto"
        src={videoSrc}
        poster={posterSrc}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        data-testid="instagram-video"
      >
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
        <div className="flex gap-4">
          <Button
            size="icon"
            variant="ghost"
            onClick={togglePlay}
            className="bg-white/90 hover:bg-white text-black rounded-full w-16 h-16"
            data-testid="button-play-pause"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8" />
            ) : (
              <Play className="w-8 h-8 ml-1" />
            )}
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleMute}
            className="bg-white/90 hover:bg-white text-black rounded-full w-16 h-16"
            data-testid="button-mute-unmute"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <h3 className="text-white text-xl font-semibold">{title}</h3>
        </div>
      )}
    </div>
  );
}
