import { motion } from 'motion/react';
import groomPhoto from '../img/IMG_3626.webp';
import bridePhoto from '../img/IMG_3682.JPG.jpeg';

const coupleData = [
  {
    role: "Mempelai Pria",
    name: "Nur Rezky Ainun Nujum Ahmad Nani",
    title: "Putra dari",
    parents: "Bpk. Udin & Ibu Naima Ladjadi",
    image: groomPhoto,
    bio: "Seorang yang penyabar dan penyayang keluarga.",
    social: "@rezky.umbu"
  },
  {
    role: "Mempelai Wanita",
    name: "Mutiara Indah Aisyah",
    title: "Putri dari",
    parents: "Bpk. Ahmad Sahri & Almh. Ibu Ainul Qibtiyah",
    image: bridePhoto,
    bio: "Pribadi yang lembut dan penuh keceriaan.",
    social: "@mtrindahaisyah"
  }
];

export default function Couple() {
  return (
    <section id="couple" className="bg-white">
      <div className="section-container text-center space-y-32">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="space-y-6"
        >
          <span className="label-sm">Introduction</span>
          <h2 className="text-5xl md:text-7xl">Mempelai</h2>
          <div className="h-[1px] w-24 bg-primary-brown mx-auto" />
          <p className="max-w-2xl mx-auto text-lg italic font-serif leading-relaxed font-light opacity-80">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          {coupleData.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-12 group">
                <div className="w-72 h-96 overflow-hidden transition-all duration-700 border border-primary-brown/10">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="label-sm opacity-40">{person.role}</h3>
                <h4 className="text-4xl md:text-5xl font-serif">{person.name}</h4>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest opacity-40">{person.title}</p>
                  <p className="text-xl font-serif italic">{person.parents}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
