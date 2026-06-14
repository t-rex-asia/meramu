import { CreditCard, Gift, QrCode } from 'lucide-react';
import { motion } from 'motion/react';

const accounts = [
  {
    bank: "Bank BCA",
    number: "3151073831",
    owner: "Nur Rezky Ainun Nujum Ahmad Nani"
  },
  {
    bank: "Bank BRI",
    number: "123001006688503",
    owner: "Mutiara Indah Aisyah"
  }
];

export default function WeddingGift() {
  return (
    <section id="gift" className="bg-white">
      <div className="section-container">
        <div className="flex flex-col items-center gap-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <span className="label-sm">Wedding Gift</span>
            <h2 className="text-5xl md:text-7xl font-serif">Kado Digital</h2>
            <div className="h-[1px] w-24 bg-primary-brown mx-auto" />
            <p className="max-w-xl mx-auto text-lg italic font-serif opacity-60 leading-relaxed">
              Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih, tersedia opsi digital di bawah ini.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-4xl">
            {/* QRIS Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary-light p-12 border border-primary-brown/10 flex flex-col items-center text-center space-y-8"
            >
              <div className="flex items-center gap-3 opacity-60">
                <QrCode className="w-5 h-5" />
                <span className="label-sm">Scan QRIS</span>
              </div>
              
              <div className="relative group">
                <div className="w-64 h-64 bg-white p-4 shadow-xl border border-primary-brown/5">
                  <img
                    src="/img/image.png"
                    alt="QRIS Wedding Gift"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -inset-4 border border-primary-brown/10 pointer-events-none scale-105" />
              </div>
              
              <p className="font-serif italic text-xl">QRIS Wedding Gift</p>
            </motion.div>

            {/* Bank Accounts Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {accounts.map((acc, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 border border-primary-brown/10 shadow-sm relative group hover:border-primary-brown/40 transition-all"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-primary-brown/5 flex items-center justify-center text-primary-brown">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <span className="label-sm opacity-40">{acc.bank}</span>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest opacity-40">Nomor Rekening</p>
                    <p className="text-2xl font-serif text-primary-brown">{acc.number}</p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-primary-brown/5">
                    <p className="font-serif italic opacity-60">a.n {acc.owner}</p>
                  </div>

                  <button 
                    onClick={() => {
                        navigator.clipboard.writeText(acc.number);
                        alert(`Nomor rekening ${acc.bank} disalin!`);
                    }}
                    className="absolute bottom-8 right-8 text-[10px] uppercase tracking-widest border-b border-primary-brown opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Salin No. Rek
                  </button>
                </div>
              ))}
              
              <div className="bg-primary-brown/5 p-8 border border-dashed border-primary-brown/20 text-center">
                 <Gift className="w-6 h-6 mx-auto mb-3 opacity-40" />
                 <p className="label-sm opacity-60">Terima kasih atas tanda kasih Anda</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
