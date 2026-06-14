import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Countdown() {
  const targetDate = new Date('2026-06-26T08:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = targetDate - new Date().getTime();
      if (difference <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { value: timeLeft.days, label: "Hari" },
    { value: timeLeft.hours, label: "Jam" },
    { value: timeLeft.minutes, label: "Menit" },
    { value: timeLeft.seconds, label: "Detik" }
  ];

  return (
    <section className="bg-white py-32 border-y border-primary-brown/10">
      <div className="section-container">
        <div className="flex flex-col items-center gap-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <span className="label-sm">The Wait</span>
            <h2 className="text-5xl md:text-6xl font-serif">Menghitung Hari</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            {items.map((item, index) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center group"
              >
                <span className="text-7xl md:text-9xl font-serif font-light text-primary-brown transition-transform group-hover:scale-110 duration-500">
                  {item.value.toString().padStart(2, '0')}
                </span>
                <span className="label-sm opacity-40 mt-4">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-12"
          >
            <button className="btn-elegant">
              Simpan di Kalender
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
