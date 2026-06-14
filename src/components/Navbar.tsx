import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-primary-light/80 backdrop-blur-md border-b border-primary-brown/10 py-4' 
          : 'bg-transparent py-8 md:py-12'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <motion.span 
          className={`label-sm transition-colors duration-500 ${isScrolled ? 'opacity-100' : 'opacity-60'}`}
        >
          R & M
        </motion.span>
        
        <div className="flex gap-8 md:gap-12 label-sm">
          <a href="#couple" className="hover:opacity-100 transition-opacity">Mempelai</a>
          <a href="#details" className="hover:opacity-100 transition-opacity hidden md:inline">Acara</a>
          <a href="#gift" className="hover:opacity-100 transition-opacity">Kado</a>
          <a href="#rsvp" className={`transition-all duration-500 font-bold border-b ${isScrolled ? 'border-primary-brown' : 'border-transparent'}`}>
            RSVP
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
