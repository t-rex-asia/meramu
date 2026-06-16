import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const eventDetails = [
  {
    role: "Akad",
    title: "Akad Nikah",
    date: "Jumat, 26 Juni 2026",
    time: "08.00 - 10.00 WIB",
    location: "Kediaman Mutiara",
    address: "Dsn. Ngambon, RT/RW. 07/010, Jambekumbu, Pasrujambe, Kab. Lumajang",
    mapsUrl: "https://www.google.com/maps/place/8%C2%B006'33.9%22S+113%C2%B004'57.2%22E/@-8.1094133,113.0822988,21z/data=!4m4!3m3!8m2!3d-8.1094031!4d113.0825593?hl=id&entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D",
    icon: <Calendar className="w-5 h-5" />
  },
  {
    role: "Resepsi",
    title: "Resepsi Pernikahan",
    date: "Jumat, 26 Juni 2026",
    time: "13.00 - Selesai",
    location: "Kediaman Mutiara",
    address: "Dsn. Ngambon, RT/RW. 07/010, Jambekumbu, Pasrujambe, Kab. Lumajang",
    mapsUrl: "https://www.google.com/maps/place/8%C2%B006'33.9%22S+113%C2%B004'57.2%22E/@-8.1094133,113.0822988,21z/data=!4m4!3m3!8m2!3d-8.1094031!4d113.0825593?hl=id&entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D",
    icon: <Clock className="w-5 h-5" />
  }
];

export default function Details() {
  return (
    <section id="details" className="bg-primary-light">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
        >
          <div className="space-y-4">
            <span className="label-sm">Schedule</span>
            <h2 className="text-5xl md:text-7xl">Waktu & Tempat</h2>
          </div>
          <p className="text-primary-brown opacity-60 italic font-serif text-lg md:max-w-xs text-left">
            Kami menantikan kehadiran Anda di momen bahagia kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {eventDetails.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-12 border-l-4 border-primary-brown flex flex-col space-y-12 relative overflow-hidden group hover:bg-primary-brown hover:text-white transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-8 text-primary-brown/5 text-8xl font-serif italic group-hover:text-white/10 transition-colors">
                {event.role}
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3 opacity-60">
                   {event.icon}
                   <span className="label-sm text-current">{event.title}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="font-serif text-4xl md:text-5xl leading-tight">
                    {event.date.split(',')[1]}
                  </div>
                  <div className="text-sm tracking-widest uppercase opacity-60">{event.time}</div>
                </div>
              </div>

              <div className="space-y-6 relative z-10 mt-auto">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0 mt-1 opacity-60" />
                  <div className="space-y-2">
                    <span className="font-serif text-2xl italic block">{event.location}</span>
                    <p className="text-sm leading-relaxed opacity-60 max-w-xs">
                      {event.address}
                    </p>
                  </div>
                </div>
                
                <a
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 border-b border-current text-[10px] tracking-[0.3em] uppercase transition-opacity hover:opacity-70"
                >
                  Buka Peta Digital
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
