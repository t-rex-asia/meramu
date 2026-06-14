import { motion } from 'motion/react';

interface InvitationCoverProps {
  onOpen: () => void;
}

export default function InvitationCover({ onOpen }: InvitationCoverProps) {
  // Ambil nama dari parameter URL ?to=Nama+Tamu
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('to') || 'Tamu Undangan';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-primary-light flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-serif italic text-primary-brown whitespace-nowrap">
          M & R
        </div>
      </div>

      <div className="text-center space-y-12 z-10 max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <span className="label-sm">The Wedding of</span>
          <h1 className="text-6xl md:text-8xl font-serif text-primary-brown">Rezky & Mutiara</h1>
          <div className="h-[1px] w-24 bg-primary-brown mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-6"
        >
          <div className="space-y-1">
            <p className="label-sm opacity-60">Kepada Bapak/Ibu/Saudara/i</p>
            <p className="text-3xl font-serif italic text-primary-dark break-words">{guestName}</p>
          </div>
          
          <button 
            onClick={onOpen}
            className="btn-elegant cursor-pointer"
          >
            Buka Undangan
          </button>
        </motion.div>
      </div>

      {/* Ornament Bottom */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-20">
         <div className="h-[1px] w-24 bg-primary-brown" />
         <span className="label-sm">2026</span>
         <div className="h-[1px] w-24 bg-primary-brown" />
      </div>
    </motion.div>
  );
}
