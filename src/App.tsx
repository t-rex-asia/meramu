import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Countdown from './components/Countdown';
import Couple from './components/Couple';
import Details from './components/Details';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import InvitationCover from './components/InvitationCover';
import MusicPlayer from './components/MusicPlayer';
import Navbar from './components/Navbar';
import RSVP from './components/RSVP';
import ShareInvitation from './components/Share';
import WeddingGift from './components/WeddingGift';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const el = document.getElementById('static-cover');
    if (el) el.style.display = 'none';
  }, []);

  return (
    <main className="relative selection:bg-primary-brown selection:text-white">
      <AnimatePresence>
        {!isOpened && (
          <InvitationCover
            onOpen={() => {
              window.scrollTo({ top: 0, behavior: 'instant' });
              setIsOpened(true);
            }}
          />
        )}
      </AnimatePresence>

      <Navbar />
      <MusicPlayer autoPlay={isOpened} />

      <Hero />
      <Couple />
      <Details />
      <Gallery />
      <Countdown />
      <WeddingGift />
      <RSVP />

      {/* Footer */}
      <footer className="bg-primary-brown text-white py-32 overflow-hidden border-t border-white/10">
        <div className="section-container text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
               <span className="text-[10px] uppercase tracking-[0.4em] opacity-40">The Final Word</span>
               <h2 className="text-6xl md:text-8xl font-serif font-light italic">Rezky & Mutiara</h2>
            </div>
            
            <div className="flex justify-center items-center gap-8">
              <div className="h-[1px] w-12 bg-white/20" />
              <p className="text-3xl font-serif">26 . 07 . 2026</p>
              <div className="h-[1px] w-12 bg-white/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto pt-12 border-t border-white/5">
              <div className="text-left space-y-2">
                <span className="label-sm text-white opacity-40">Dress Code</span>
                <p className="text-lg font-serif italic">Modern Earthy / Neutral Tones</p>
              </div>
              <div className="text-left md:text-right space-y-2">
                <span className="label-sm text-white opacity-40">Hashtag</span>
                <p className="text-lg font-serif italic">#MeRamu</p>
              </div>
            </div>

            <ShareInvitation />
            
            <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase pt-12">
              Wedding Invitation — 2026
            </p>
          </motion.div>
          
          {/* Decorative Large Background Year */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif italic text-white/5 pointer-events-none select-none z-0">
            2026
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 w-full h-1 bg-primary-brown/20 z-40" />
    </main>
  );
}
