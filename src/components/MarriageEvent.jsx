import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// Assuming the generated image is available or we will place it in public
// I will use a placeholder relative path and the system will copy it or we use an asset import.
// For now I'll just refer to it directly or via an img tag.

const MarriageEvent = () => {
  return (
    <motion.section 
      className="py-16 px-6 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="mb-8 rounded-full overflow-hidden w-64 h-80 mx-auto border-4 border-paper shadow-xl relative">
        <img 
          src="/watercolor_venue.png" 
          alt="Watercolor Venue" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gold/10 mix-blend-overlay"></div>
      </div>

      <div className="space-y-4">
        <h2 className="font-serif text-4xl text-textDark mb-4">Marriage Function</h2>
        
        <p className="font-sans text-xs uppercase tracking-widest text-sage mb-2">May 7, 2026</p>
        <p className="font-serif text-lg mb-4">Starting at 12:00 PM</p>
        
        <div className="w-12 h-px bg-gold/50 mx-auto my-4"></div>
        
        <p className="font-serif text-xl mb-8">
          Vajra Auditorium,<br/>
          <span className="text-sm">Mooriyad Road, Veliya Velicham</span>
        </p>

        <a 
          href="https://maps.app.goo.gl/JQqMU4L7g7swoYtn8?g_st=iw" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-sage text-paper rounded-full font-sans text-xs uppercase tracking-widest shadow-md hover:bg-gold transition-colors duration-300"
        >
          <MapPin size={16} />
          Get Directions
        </a>
      </div>
    </motion.section>
  );
};

export default MarriageEvent;
