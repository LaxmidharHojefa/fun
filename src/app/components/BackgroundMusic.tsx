import { useEffect, useRef } from 'react';

interface BackgroundMusicProps {
  play: boolean;
}

export default function BackgroundMusic({ play }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Note: Due to browser autoplay policies, background music requires user interaction
    // You can add your own romantic instrumental music file here
    // For now, this is a placeholder that demonstrates the structure
    
    if (!audioRef.current) {
      audioRef.current = new Audio();
      // audioRef.current.src = '/path-to-your-romantic-music.mp3';
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3; // Low volume for background music
    }

    if (play && audioRef.current) {
      // Attempt to play (may be blocked by browser)
      audioRef.current.play().catch((error) => {
        console.log('Audio autoplay prevented:', error);
        // You can show a message to user to enable audio
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [play]);

  return null; // This component doesn't render anything visible
}
