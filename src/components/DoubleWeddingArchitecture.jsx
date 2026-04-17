import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import PhotoSlideshow from './PhotoSlideshow';


const Rings = () => (
  <motion.div 
    className="relative w-16 h-10 mx-auto mb-2 flex justify-center"
  >
    <div className="absolute w-8 h-8 rounded-full border-2 border-gold shadow-md -translate-x-[15%]"></div>
    <div className="absolute w-8 h-8 rounded-full border-[1.5px] border-gold/70 shadow-md translate-x-[15%]"></div>
  </motion.div>
);

const MandalaBackdrop = ({ scrollYProgress }) => {
  const rotation1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotation2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 0.1]);

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between items-center overflow-hidden z-0">
      <motion.div 
        className="w-[150vw] h-[150vw] sm:w-[800px] sm:h-[800px] -mt-[75vw] sm:-mt-[400px] rounded-full border border-gold/20 flex items-center justify-center"
        style={{ rotate: rotation1, opacity, willChange: 'transform' }}
      >
         <div className="w-[85%] h-[85%] rounded-full border border-gold/10" />
      </motion.div>
      <motion.div 
        className="w-[150vw] h-[150vw] sm:w-[800px] sm:h-[800px] -mb-[75vw] sm:-mb-[400px] rounded-full border border-gold/20 flex items-center justify-center"
        style={{ rotate: rotation2, opacity, willChange: 'transform' }}
      >
         <div className="w-[85%] h-[85%] rounded-full border border-gold/10" />
      </motion.div>
    </div>
  );
};


const OrnateSingleCard = ({ couple, eventType, date, time, highlight, venue, parentsInfo, pathDraw, photos, photoPosition = "center" }) => (

  <div className="w-full h-full relative p-4 flex flex-col items-center z-10 paper-bg bg-paper shadow-xl rounded-t-[140px] rounded-b-xl border-[3px] border-white/40 overflow-hidden transform-gpu">
    <div className="absolute inset-0 rounded-t-[136px] rounded-b-lg border border-gold/20 pointer-events-none"></div>

    
    <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-t-[120px] rounded-b-md pointer-events-none" preserveAspectRatio="none">
      <motion.rect 
        width="100%" height="100%" rx="8" 
        stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" fill="none"
        style={{ pathLength: pathDraw }}
      />
    </svg>

    <div className="mt-8 z-10 w-full flex flex-col items-center shrink-0">
      <Rings />
      <div className="mb-2">
        <span className="font-serif text-4xl text-gold italic drop-shadow-sm">﷽</span>
      </div>
    </div>

    <div className="mt-4 flex flex-col items-center text-center px-4 z-10 w-full h-full flex-grow">
      <h2 className="font-serif text-3xl sm:text-4xl text-textDark italic drop-shadow-sm leading-tight mb-2">
        {couple.split('&').map((text, i) => (
          <React.Fragment key={i}>
            {text}
            {i === 0 && <><br/><span className="text-xl not-italic text-gold">&</span><br/></>}
          </React.Fragment>
        ))}
      </h2>
      
      <p className="font-sans text-[10px] uppercase tracking-widest text-sage mb-4">{eventType}</p>
      
      <div className="space-y-3 mt-2 w-full max-w-[240px]">
        <p className="font-serif text-base text-textDark/90">{date}</p>
        <p className="font-serif text-sm text-textDark/80 leading-tight">{time}</p>
        {highlight && (
          <div className="py-1 px-4 border border-gold/20 rounded bg-gold/5 max-w-[180px] mx-auto">
             <p className="font-serif text-[11px] text-gold italic leading-tight">{highlight}</p>
          </div>
        )}
        <div className="w-8 h-px bg-sage/30 mx-auto my-3"></div>
        <p className="font-serif text-xs text-textDark/70 leading-relaxed">{venue}</p>
      </div>
      
      <div className="w-full max-w-[260px] h-[240px] mt-auto mb-4 rounded-t-[140px] rounded-b-xl border border-gold/40 border-dashed flex items-center justify-center bg-envelope/50 shrink-0 relative overflow-hidden shadow-inner">
         {photos && photos.length > 0 ? (
           <PhotoSlideshow images={photos} objectPosition={photoPosition} />
         ) : (
           <span className="text-[9px] text-gold/70 uppercase tracking-widest">Image Placeholder</span>
         )}
      </div>


    </div>
  </div>
);

const DoubleWeddingArchitecture = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
    });

    const couple1Photos = [
      "/Rafeel&Jumana photos/WhatsApp%20Image%202026-04-16%20at%209.31.24%20PM%20(1).jpeg",
      "/Rafeel&Jumana photos/WhatsApp%20Image%202026-04-16%20at%209.31.24%20PM.jpeg"
    ];
  
    const couple2Photos = [
      "/Rizwan&Nidha photos/WhatsApp%20Image%202026-04-16%20at%209.31.51%20PM.jpeg",
      "/Rizwan&Nidha photos/WhatsApp%20Image%202026-04-16%20at%209.31.52%20PM%20(1).jpeg",
      "/Rizwan&Nidha photos/WhatsApp%20Image%202026-04-16%20at%209.31.52%20PM%20(2).jpeg",
      "/Rizwan&Nidha photos/WhatsApp%20Image%202026-04-16%20at%209.31.52%20PM.jpeg",
      "/Rizwan&Nidha photos/WhatsApp%20Image%202026-04-16%20at%209.31.53%20PM%20(1).jpeg",
      "/Rizwan&Nidha photos/WhatsApp%20Image%202026-04-16%20at%209.31.53%20PM%20(2).jpeg",
      "/Rizwan&Nidha photos/WhatsApp%20Image%202026-04-16%20at%209.31.53%20PM.jpeg",
      "/Rizwan&Nidha photos/WhatsApp%20Image%202026-04-16%20at%209.31.54%20PM.jpeg"
    ];
  
    return (
      <div className="w-full pt-12 pb-16 flex flex-col items-center gap-16 relative overflow-visible" ref={containerRef}>
        
        {/* Parallax Background Elements */}
        <MandalaBackdrop scrollYProgress={scrollYProgress} />
  
        {/* --- PAGE 1: THE ENTRY SEQUENCE (CLEAN BOOK) --- */}
        <motion.div 
          className="relative w-[92%] max-w-2xl h-64 sm:h-80 flex paper-bg shadow-[0_30px_60px_rgba(0,0,0,0.12)] rounded-lg z-10 border border-[#e0d6c8]/50 mb-12 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {/* Enhanced Panes with subtle hover/view tilt */}
          <motion.div 
            className="flex-1 h-full border-r border-[#d8ccba] border-dashed flex items-center justify-center p-4 relative bg-paper shadow-[inset_-10px_0_20px_-10px_rgba(0,0,0,0.1)]"
            whileHover={{ backgroundColor: '#FAF8F5' }}
          >
            <motion.h3 
              className="font-serif text-[clamp(1.2rem,6vw,2.2rem)] text-textDark italic drop-shadow-sm leading-tight text-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Rafeel<br/><span className="text-sm not-italic text-gold/80">&</span><br/>Jumana
            </motion.h3>
          </motion.div>
          
          <motion.div 
            className="flex-1 h-full flex items-center justify-center p-4 relative bg-paper shadow-[inset_10px_0_20px_-10px_rgba(0,0,0,0.05)]"
            whileHover={{ backgroundColor: '#FAF8F5' }}
          >
            <motion.h3 
              className="font-serif text-[clamp(1.2rem,6vw,2.2rem)] text-textDark italic drop-shadow-sm leading-tight text-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Rizwan<br/><span className="text-sm not-italic text-gold/80">&</span><br/>Nidha
            </motion.h3>
          </motion.div>
  
          <div className="absolute -bottom-14 left-0 right-0 flex justify-center">
             <motion.div 
               className="flex flex-col items-center"
               animate={{ y: [0, 5, 0] }}
               transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
             >
                <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-gold font-bold">Scroll to View Details</span>
                <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent mt-2"></div>
             </motion.div>
          </div>
        </motion.div>
  
  
        {/* --- PAGE 2: CARD FOR COUPLE 1 --- */}
        <motion.div
          className="relative w-[92%] max-w-sm min-h-[720px] z-20 pointer-events-auto"
          initial={{ opacity: 0, y: 150, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
        >
           <OrnateSingleCard 
              couple="Rafeel & Jumana"
              eventType="Nikkah & Marriage Functions"
              date="May 6 & 7, 2026"
              time={<span><span className="font-bold">May 6 (Nikkah):</span> After Asar<br/><span className="font-bold">May 7 (Marriage):</span> 12:00 PM onwards</span>}
              highlight="May 6 Bride Entry: 5:30 - 6:00 PM"
              venue={<span><span className="font-bold">Nikkah:</span> Zareena Manzil, Koothparamba<br/><span className="font-bold">Marriage:</span> Vajra Auditorium, Mooriyad Road</span>}
              pathDraw={useTransform(scrollYProgress, [0.1, 0.4], [0, 1])}
              photos={couple1Photos}
              photoPosition="center 5%"
            />
        </motion.div>
  
        {/* --- PAGE 3: CARD FOR COUPLE 2 --- */}
        <motion.div
          className="relative w-[92%] max-w-sm min-h-[720px] z-30 pointer-events-auto"
          initial={{ opacity: 0, y: 150, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.1 }}
        >
           <OrnateSingleCard 
              couple="Rizwan & Nidha"
              eventType="Nikkah & Marriage Functions"
              date="May 6 & 7, 2026"
              time={<span><span className="font-bold">May 6 (Nikkah):</span> After Asar<br/><span className="font-bold">May 7 (Marriage):</span> 12:00 PM onwards</span>}
              venue={<span><span className="font-bold">Nikkah:</span> Zareena Manzil, Koothparamba<br/><span className="font-bold">Marriage:</span> Vajra Auditorium, Mooriyad Road</span>}
              pathDraw={useTransform(scrollYProgress, [0.4, 0.7], [0, 1])}
              photos={couple2Photos}
              photoPosition="center 5%"
           />
        </motion.div>
  
      </div>
    );
  };

export default DoubleWeddingArchitecture;
