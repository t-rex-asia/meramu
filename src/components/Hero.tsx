import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-primary-light p-8 md:p-12 pt-32 md:pt-40">
      {/* Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] md:text-[250px] font-serif italic text-primary-brown/5 pointer-events-none select-none whitespace-nowrap z-0">
        M & R
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-12 items-center md:items-stretch z-10">
        {/* Left Side: Bold Typography */}
        <div className="w-full md:w-3/5 flex flex-col justify-center text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[12vw] md:text-[120px] leading-[0.85] font-serif mb-8 text-primary-brown"
          >
            Rezky<br/>
            <span className="md:ml-24 italic font-light text-[10vw] md:text-[100px]">&</span> Mutiara
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-[1px] bg-primary-brown mb-8 hidden md:block" 
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-xl leading-relaxed max-w-sm font-light italic font-serif"
          >
            "Bersama keluarga, kami mengundang Anda untuk merayakan hari istimewa kami di bawah langit senja."
          </motion.p>
        </div>

        {/* Right Side: Event Summary */}
        <div className="w-full md:w-2/5 flex flex-col justify-between border-l border-primary-brown/10 pl-0 md:pl-12 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="space-y-12"
          >
            <section>
              <h3 className="label-sm mb-4">Kapan</h3>
              <div className="font-serif text-4xl md:text-5xl leading-tight">
                Jumat, 26<br/>
                Juni 2026
              </div>
              <div className="mt-2 text-sm italic font-serif opacity-70">Pukul 08:00 WIB — Selesai</div>
            </section>

            <section>
              <h3 className="label-sm mb-4">Dimana</h3>
              <div className="font-serif text-3xl mb-2">
                Lumajang
              </div>
              <p className="text-sm leading-relaxed font-light opacity-80 max-w-xs mx-auto md:mx-0">
                Perpaduan antara kesucian akad dan kegembiraan resepsi di Lumajang.
              </p>
            </section>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-auto pt-12 md:pt-0"
          >
            <a href="#rsvp" className="btn-elegant inline-block w-full md:w-auto text-center">
              Konfirmasi Kehadiran
            </a>
            <p className="text-[10px] italic opacity-50 mt-4 tracking-wider uppercase">
              Mohon konfirmasi sebelum 1 Desember 2026.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
