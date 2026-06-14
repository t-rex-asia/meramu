import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Music2, Volume2, VolumeX, SkipForward, SkipBack, Play, Pause, ChevronUp } from 'lucide-react';

const TRACKS = [
  {
    title: "Wedding Song",
    author: "Rezky & Mutiara",
    url: "/music.mp3"
  }
];

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export default function MusicPlayer({ autoPlay = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = TRACKS[currentTrackIndex];

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      setIsPlaying(true);
    }
  }, [autoPlay]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(err => {
        console.warn("Autoplay blocked or audio failed", err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white border border-primary-brown/20 shadow-2xl p-6 w-72 space-y-6"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="label-sm opacity-40">Now Playing</span>
                <h4 className="font-serif text-lg leading-tight">{currentTrack.title}</h4>
                <p className="text-[10px] uppercase tracking-widest opacity-60 font-serif italic">{currentTrack.author}</p>
              </div>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-primary-brown/40 hover:text-primary-brown"
              >
                <ChevronUp className="w-5 h-5 rotate-180" />
              </button>
            </div>

            {/* Progress Bar (Visual Only) */}
            <div className="h-[2px] w-full bg-primary-brown/10 relative overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: isPlaying ? '100%' : '0%' }}
                 transition={{ duration: 180, ease: "linear" }}
                 className="absolute top-0 left-0 h-full bg-primary-brown"
               />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 text-primary-brown">
              <button onClick={prevTrack} className="hover:scale-110 active:scale-95 transition-transform">
                <SkipBack className="w-5 h-5" />
              </button>
              <button 
                onClick={togglePlay}
                className="w-12 h-12 bg-primary-brown text-white flex items-center justify-center shadow-lg hover:bg-primary-dark transition-all"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
              </button>
              <button onClick={nextTrack} className="hover:scale-110 active:scale-95 transition-transform">
                <SkipForward className="w-5 h-5" />
              </button>
            </div>

            {/* Volume Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] opacity-40 font-semibold">
                <span>Volume</span>
                <span>{Math.round(volume * 100)}%</span>
              </div>
              <div className="flex items-center gap-3">
                {volume === 0 ? <VolumeX className="w-4 h-4 opacity-40" /> : <Volume2 className="w-4 h-4 opacity-40" />}
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.01" 
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="flex-1 accent-primary-brown h-1 cursor-pointer"
                />
              </div>
            </div>

            {/* Track Selection */}
            <div className="space-y-3 pt-2">
              <span className="label-sm opacity-40">Playlists</span>
              <div className="space-y-1">
                {TRACKS.map((track, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTrackIndex(idx)}
                    className={`w-full text-left p-2 text-xs font-serif transition-colors ${
                      currentTrackIndex === idx 
                        ? 'bg-primary-brown/5 text-primary-brown italic' 
                        : 'text-primary-brown/60 hover:text-primary-brown'
                    }`}
                  >
                    {idx + 1}. {track.title}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-2">
        <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-14 h-14 shadow-2xl flex items-center justify-center transition-all ${
                isExpanded ? 'bg-white text-primary-brown border border-primary-brown/10' : 'bg-primary-brown text-white hover:bg-primary-dark'
            }`}
        >
            <div className="relative">
                {isPlaying && (
                    <motion.div 
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="absolute inset-0 bg-current rounded-full"
                    />
                )}
                {isExpanded ? <ChevronUp className="w-6 h-6 rotate-180" /> : <Music className="w-6 h-6" />}
            </div>
        </button>

        {!isExpanded && (
            <button 
                onClick={togglePlay}
                className={`w-14 h-14 bg-white text-primary-brown shadow-2xl flex items-center justify-center border border-primary-brown/10 hover:bg-primary-light transition-all`}
            >
                {isPlaying ? (
                    <div className="flex items-end gap-[2px] h-4">
                        <motion.div animate={{ height: [4, 16, 8, 12, 4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-[3px] bg-primary-brown" />
                        <motion.div animate={{ height: [8, 4, 16, 4, 8] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-[3px] bg-primary-brown" />
                        <motion.div animate={{ height: [16, 8, 4, 12, 16] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-[3px] bg-primary-brown" />
                    </div>
                ) : (
                    <Music2 className="w-6 h-6 opacity-40" />
                )}
            </button>
        )}
      </div>

      <audio 
        ref={audioRef}
        src={currentTrack.url}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
}
