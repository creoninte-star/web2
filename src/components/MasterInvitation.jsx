import React from 'react';
import { motion } from 'framer-motion';

const ArchwayFrame = () => (
    <div className="absolute inset-0 pointer-events-none flex justify-center items-center overflow-hidden z-0 p-2 sm:p-4">
        <div className="w-full h-full border-[2px] border-gold/40 rounded-t-[200px] rounded-b-lg relative flex justify-center overflow-hidden">
             <div className="absolute inset-1 sm:inset-2 border border-gold/60 rounded-t-[190px] rounded-b-md"></div>
             
             {/* Intricate Top Arch Ornaments */}
             <div className="absolute top-0 w-[120%] aspect-square rounded-full border-[1.5px] border-gold/30 -translate-y-1/2"></div>
             <div className="absolute top-0 w-3/4 aspect-square rounded-full border border-gold/40 -translate-y-[45%] border-dashed"></div>
             <div className="absolute top-0 w-1/2 aspect-square rounded-full border border-gold/50 -translate-y-[40%]"></div>
             
             {/* Side Mandala Accents */}
             <div className="absolute top-1/4 -left-16 w-32 h-32 rounded-full border border-gold/30"></div>
             <div className="absolute top-1/4 -right-16 w-32 h-32 rounded-full border border-gold/30"></div>
             <div className="absolute bottom-1/4 -left-16 w-32 h-32 rounded-full border border-gold/30"></div>
             <div className="absolute bottom-1/4 -right-16 w-32 h-32 rounded-full border border-gold/30"></div>
        </div>
    </div>
);

const ImagePlaceholder = () => (
    <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 mx-auto relative group">
        <div className="absolute inset-[-4px] border-[1px] border-gold/60 rounded-t-[40px] rounded-b-md transform group-hover:scale-105 transition duration-500 ease-out"></div>
        <div className="absolute inset-0 border-[1.5px] border-gold/40 rounded-t-[40px] rounded-b-md overflow-hidden bg-[#FBF8F1] flex flex-col justify-center items-center shadow-inner">
            {/* Elegant Floral Corners */}
            <svg className="absolute top-1 left-1 w-3 h-3 text-gold/70" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"/>
            </svg>
            <svg className="absolute top-1 right-1 w-3 h-3 text-gold/70" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"/>
            </svg>
            <svg className="absolute bottom-1 left-1 w-3 h-3 text-gold/70" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"/>
            </svg>
            <svg className="absolute bottom-1 right-1 w-3 h-3 text-gold/70" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"/>
            </svg>

            <span className="font-serif text-[7px] text-gold/60 uppercase tracking-widest text-center px-1">Image<br/>Placeholder</span>
        </div>
    </div>
);

const MasterInvitation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.section 
      className="w-full min-h-screen bg-[#FDF8F0] relative flex flex-col items-center justify-start overflow-hidden pt-12 pb-24 z-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-paper z-0 opacity-80 mix-blend-multiply"></div> {/* Deep Textured Cream Base */}
      
      <motion.div className="w-[94%] sm:w-[85%] max-w-xl bg-paper shadow-2xl rounded-t-[180px] rounded-b-2xl border-[3px] border-white/60 relative z-10 flex flex-col items-center p-4 md:p-8 mt-4">
        
        <ArchwayFrame />
        
        {/* Rings */}
        <motion.div variants={itemVariants} className="mt-12 mb-2 relative flex justify-center z-10">
           <div className="w-12 h-8 rounded-full border-[1.5px] border-gold absolute -translate-x-[20%] shadow-sm"></div>
           <div className="w-12 h-8 rounded-full border-[1.5px] border-gold/80 translate-x-[20%] shadow-sm mix-blend-multiply"></div>
        </motion.div>

        {/* Bismillah */}
        <motion.h1 variants={itemVariants} className="font-serif text-5xl sm:text-6xl text-gold italic drop-shadow-sm mb-4 mt-6 z-10">
          ﷽
        </motion.h1>

        {/* Intro */}
        <motion.p variants={itemVariants} className="font-sans text-[8.5px] sm:text-[10px] leading-relaxed uppercase tracking-[0.2em] text-gold/90 text-center max-w-[280px] sm:max-w-xs mb-8 z-10 px-4 font-medium">
          With the blessings of Allah, we are humbly requesting the presence of you and your family to the Nikkah & Wedding Functions of:
        </motion.p>

        {/* First Couple Panels */}
        <div className="w-full flex flex-row items-stretch justify-center relative z-10 gap-1 sm:gap-4 mb-4">
            {/* Center Divider */}
            <div className="absolute top-4 bottom-4 left-1/2 -ml-px w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent flex flex-col items-center justify-center">
                <div className="w-1.5 h-1.5 rotate-45 border border-gold/40 bg-paper my-2"></div>
                <div className="w-1.5 h-1.5 rotate-45 border border-gold/40 bg-paper my-2"></div>
            </div>

            {/* Left Box (Groom) */}
            <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center text-center p-1 sm:p-2 sm:px-4">
                <ImagePlaceholder />
                <h2 className="font-serif text-3xl sm:text-4xl text-gold mb-1 filter drop-shadow-sm">Rafeel</h2>
                <h3 className="font-sans text-[7.5px] sm:text-[8px] uppercase tracking-[0.2em] text-[#7A7265] mb-3 font-semibold">First Couple</h3>
                
                <div className="w-8 h-px bg-gold/40 mx-auto my-2"></div>
                
                <div className="flex flex-col items-center space-y-1.5 mt-3 text-center">
                    <p className="font-sans text-[8px] sm:text-[9px] uppercase tracking-[0.1em] text-gold font-bold">Nikkah Function</p>
                    <p className="font-serif text-xs sm:text-sm font-semibold text-textDark/90">May 6, 2026</p>
                    <p className="font-serif text-[9px] sm:text-[10px] text-textDark/80">After Asar<br/>(4:00 PM onwards)</p>
                    
                    <div className="py-1.5 px-2 border border-gold/30 rounded bg-gold/5 my-1.5 w-full max-w-[120px]">
                        <p className="font-serif text-[8.5px] text-gold italic font-medium">Bride Entry<br/>5:30 PM - 6:00 PM</p>
                    </div>
                    
                    <p className="font-serif text-[9px] sm:text-[10px] text-textDark/80 pt-1 leading-tight">Zareena Manzil,<br/>Koothparamb</p>
                </div>
            </motion.div>

            {/* Right Box (Bride) */}
            <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center text-center p-1 sm:p-2 sm:px-4">
                <ImagePlaceholder />
                <h2 className="font-serif text-3xl sm:text-4xl text-gold mb-1 filter drop-shadow-sm">Jumana</h2>
                <h3 className="font-sans text-[7.5px] sm:text-[8px] uppercase tracking-[0.2em] text-[#7A7265] mb-3 font-semibold">First Couple</h3>
                
                <div className="w-8 h-px bg-gold/40 mx-auto my-2"></div>
                
                <div className="flex flex-col items-center justify-center space-y-1.5 mt-3 text-center h-full sm:pb-8">
                    <div className="py-2.5 px-3 border border-gold/30 rounded bg-gold/5 my-auto max-w-[110px]">
                        <p className="font-serif text-[9.5px] sm:text-[11px] text-gold italic font-medium leading-relaxed">
                            Walima Ceremony to follow<br/>
                            <span className="text-[7.5px] sm:text-[8px] opacity-80 not-italic uppercase tracking-widest block mt-2 pt-2 border-t border-gold/20">(Details below)</span>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Parent Honors Section */}
        <motion.div variants={itemVariants} className="w-[90%] border-t border-gold/30 pt-5 mt-6 z-10 px-2 text-center">
             <p className="font-sans text-[7.5px] sm:text-[8.5px] leading-[1.8] uppercase tracking-[0.1em] text-gold/80 flex flex-col items-center">
                 <span className="font-semibold block mb-1">Requested by Parents:</span>
                 <span className="text-textDark/80 normal-case tracking-wide">
                     Rafeek & Sareena <span className="italic opacity-80">(Rafeel's Parents)</span>
                 </span>
                 <span className="text-textDark/80 normal-case tracking-wide mt-0.5">
                     & Najma <span className="italic opacity-80">(Jumana's Mother,</span>
                 </span>
                 <span className="text-textDark/80 normal-case tracking-wide mt-0.5">
                     <span className="italic opacity-80">and honoring the memory of</span> <span className="italic text-gold font-serif text-[10px] font-bold mx-1">Late Rasak</span><span className="italic opacity-80">)</span>
                 </span>
             </p>
        </motion.div>

        {/* Integrated Illustration */}
        <motion.div variants={itemVariants} className="mt-8 mb-4 relative z-10 w-[85%] max-w-[240px]">
            <div className="relative w-full overflow-hidden rounded-t-[100px] border border-gold/20 shadow-inner bg-[#fcf9f2]">
                {/* Fallback pattern to ensure it looks good while image loads */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-multiply pointer-events-none"></div>
                <img 
                    src="/seated_couple.png" 
                    alt="Seated Couple" 
                    className="w-full relative z-10 object-contain filter contrast-[1.05] drop-shadow-md pb-4"
                />
                {/* Overlay gradient to sink it into the paper */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-paper via-paper/50 to-transparent z-20"></div>
            </div>
        </motion.div>

      </motion.div>

    </motion.section>
  );
};

export default MasterInvitation;
