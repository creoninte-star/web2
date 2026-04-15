import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const FooterRSVP = () => {
  return (
    <motion.section 
      className="py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="relative bg-paper shadow-2xl rounded-xl mx-auto max-w-sm overflow-hidden border border-sage/20">
        
        {/* Ticket Notches */}
        <div className="absolute top-1/2 -ml-3 left-0 w-6 h-6 bg-[#F6EAEB] rounded-full -translate-y-1/2 border-r border-sage/20 z-10"></div>
        <div className="absolute top-1/2 -mr-3 right-0 w-6 h-6 bg-[#F6EAEB] rounded-full -translate-y-1/2 border-l border-sage/20 z-10"></div>

        {/* Ticket Top - Destination */}
        <div className="p-8 border-b-2 border-dashed border-sage/30 relative">
          <h3 className="font-sans text-[10px] uppercase tracking-widest text-gold mb-1">Destination</h3>
          <h2 className="font-serif text-3xl text-textDark mb-4">Veliya Velicham</h2>
          
          <div className="flex justify-between items-center text-xs mt-6">
            <div className="font-sans text-sage uppercase tracking-wider">Pass: VIP</div>
            <div className="font-sans text-sage uppercase tracking-wider">Gate: 07</div>
            <div className="font-sans text-sage uppercase tracking-wider">Seat: Open</div>
          </div>
        </div>

        {/* Ticket Bottom - RSVP & Barcode */}
        <div className="p-8 bg-[#fdfaf6]">
          <div className="text-center mb-6">
            <h3 className="font-serif text-xl italic text-sage mb-1">We hope to count on you</h3>
          </div>

          <form className="space-y-4 mb-8">
            <div>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-sage/40 py-2 font-sans text-sm focus:outline-none focus:border-gold placeholder:text-sage/60 text-textDark"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border-b border-sage/40 py-2 font-sans text-sm focus:outline-none focus:border-gold placeholder:text-sage/60 text-textDark"
              />
            </div>
            <div>
              <input 
                type="number" 
                placeholder="Number of Guests" 
                min="1"
                className="w-full bg-transparent border-b border-sage/40 py-2 font-sans text-sm focus:outline-none focus:border-gold placeholder:text-sage/60 text-textDark"
              />
            </div>
            <button 
              type="button"
              className="w-full mt-4 py-3 bg-textDark text-paper font-sans text-xs uppercase tracking-widest rounded shadow-md hover:bg-gold transition-colors duration-300"
            >
              Confirm RSVP
            </button>
          </form>

          {/* Barcode Graphic */}
          <div className="flex justify-between items-end h-16 opacity-70 px-4">
             {/* Simple visual barcode imitation using CSS */}
             {Array.from({ length: 30 }).map((_, i) => (
                <div 
                  key={i} 
                  className="bg-textDark"
                  style={{
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() > 0.8 ? '100%' : '80%'}`,
                    marginRight: `${Math.random() * 2}px`
                  }}
                ></div>
             ))}
          </div>
          <div className="text-center mt-2 font-sans text-[8px] tracking-[0.3em] text-textDark/60">
            06052026 - 07052026
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FooterRSVP;
