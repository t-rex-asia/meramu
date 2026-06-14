import { motion } from 'motion/react';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const imageModules = import.meta.glob('../img/*.webp', { eager: true, import: 'default' });
const photos = Object.values(imageModules) as string[];

const row1 = photos.filter((_, i) => i % 2 === 0);
const row2 = photos.filter((_, i) => i % 2 === 1);

const widths = ['w-[200px]', 'w-[260px]', 'w-[180px]', 'w-[240px]', 'w-[220px]'];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 500 : -500, behavior: 'smooth' });
  };

  return (
    <section id="gallery" className="bg-primary-light overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="label-sm">Our Memories</span>
          <h2 className="text-5xl md:text-7xl font-serif">Galeri Foto</h2>
          <div className="h-[1px] w-24 bg-primary-brown mx-auto" />
        </motion.div>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 border border-primary-brown/20 flex items-center justify-center shadow-lg hover:bg-white transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-primary-brown" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 border border-primary-brown/20 flex items-center justify-center shadow-lg hover:bg-white transition-all"
        >
          <ChevronRight className="w-5 h-5 text-primary-brown" />
        </button>

        <div
          ref={scrollRef}
          className="overflow-x-auto px-16 py-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex flex-col gap-3 w-max">
            <div className="flex gap-3">
              {row1.map((url, index) => (
                <div
                  key={index}
                  className={`relative flex-shrink-0 overflow-hidden group border border-primary-brown/10 h-[220px] bg-stone-100 ${widths[index % widths.length]}`}
                >
                  <img
                    src={url}
                    alt=""
                    loading={index < 4 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {row2.map((url, index) => (
                <div
                  key={index}
                  className={`relative flex-shrink-0 overflow-hidden group border border-primary-brown/10 h-[220px] bg-stone-100 ${widths[(index + 2) % widths.length]}`}
                >
                  <img
                    src={url}
                    alt=""
                    loading={index < 4 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-6 pb-4 text-[10px] uppercase tracking-[0.3em] text-primary-brown/40 font-serif">
        Geser untuk melihat lebih banyak
      </p>
    </section>
  );
}
