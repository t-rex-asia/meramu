import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attendance: 'Hadir',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="bg-primary-light">
      <div className="section-container max-w-4xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-white p-12 md:p-24 border border-primary-brown/10 shadow-2xl space-y-16"
        >
          <div className="text-center space-y-4">
            <span className="label-sm">Reservation</span>
            <h2 className="text-5xl md:text-7xl">Konfirmasi Kehadiran</h2>
            <p className="text-lg italic font-serif opacity-60">Merupakan kehormatan bagi kami atas kehadiran Anda.</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-2">
                  <label className="label-sm">Nama Lengkap</label>
                  <input 
                    required
                    type="text" 
                    className="input-elegant" 
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="label-sm">Jumlah Tamu</label>
                  <select 
                     className="input-elegant cursor-pointer appearance-none"
                     value={formData.guests}
                     onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  >
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="label-sm block mb-4">Kehadiran</label>
                <div className="flex flex-wrap gap-4">
                  {['Hadir', 'Tidak Hadir'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({...formData, attendance: option})}
                      className={`px-12 py-3 border text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                        formData.attendance === option 
                          ? 'bg-primary-brown text-white border-primary-brown' 
                          : 'border-primary-brown/20 text-primary-brown hover:border-primary-brown'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="label-sm">Pesan Singkat</label>
                <textarea 
                  rows={4}
                  className="input-elegant resize-none" 
                  placeholder="Ucapan & Doa..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <div className="pt-8">
                <button type="submit" className="btn-elegant w-full md:w-auto">
                  Submit RSVP
                </button>
              </div>
            </form>
          ) : (
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="py-12 text-center space-y-8"
            >
              <div className="w-24 h-24 bg-primary-brown/5 text-primary-brown flex items-center justify-center mx-auto border border-primary-brown/10">
                 <Send className="w-10 h-10" />
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-serif italic">Terima Kasih!</h3>
                <p className="text-lg opacity-60 font-serif">Konfirmasi Anda telah kami terima.</p>
              </div>
              <button 
                onClick={() => setSubmitted(false)}
                className="label-sm border-b border-primary-brown"
              >
                Kirim Ulang
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
