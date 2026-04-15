import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OrnateCard = ({ title, couple, parentsInfo, isBrideParentsLate }) => (
  <div className="w-full h-[85vh] p-4 flex flex-col items-center justify-center relative bg-transparent pointer-events-auto">
    
    {/* Inner ornate arch frame mimicking the green/gold reference but in our theme constraints */}
    <div className="w-full h-full relative p-6 flex flex-col items-center justify-center text-center border-[3px] border-gold/40 rounded-t-[140px] rounded-b-xl paper-bg bg-paper shadow-2xl overflow-hidden before:absolute before:inset-2 before:border-2 before:border-gold/30 before:rounded-t-[125px] before:rounded-b-md">
      
      {/* Intricate background pattern overlay for the card inside the arch */}
      <div className="absolute inset-x-0 top-0 bottom-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/40 via-transparent to-transparent pointer-events-none"></div>

      <div className="flex-1 flex flex-col items-center justify-center w-full z-10 px-2 mt-12">
        {/* Top Graphic - Islamic / Bismillah motif */}
        <div className="mb-4">
          <span className="font-serif text-3xl sm:text-4xl text-gold/90 italic drop-shadow-sm">﷽</span>
        </div>

        <p className="font-sans text-[10px] sm:text-xs leading-relaxed uppercase tracking-widest text-sage mb-6 z-10">
          With the blessings of Allah we are delighted to invite you to the Nikah ceremony of:
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl text-textDark mb-4 italic z-10 drop-shadow-sm leading-tight">
          {couple}
        </h1>

        <div className="flex items-center justify-center gap-3 w-full mb-8 z-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
          <span className="text-gold/80 text-xl">✨</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
        </div>

        <div className="space-y-6 z-10 w-full">
          <div>
            <h4 className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-sage/80 mb-1">{parentsInfo.groomLabel}</h4>
            <p className="font-serif text-lg sm:text-xl text-textDark/90">{parentsInfo.groomNames}</p>
          </div>
          
          <div>
            <h4 className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-sage/80 mb-1">{parentsInfo.brideLabel}</h4>
            <p className="font-serif text-lg sm:text-xl text-textDark/90">
               {isBrideParentsLate && <span className="italic !text-textDark/60 mr-1 text-base">Late</span>}
               {parentsInfo.brideNames}
            </p>
          </div>
        </div>

        {/* Decorative bottom corner elements */}
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold/50 rounded-bl-xl"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold/50 rounded-br-xl"></div>
      </div>
    </div>
  </div>
);

const CoupleDetailsScroll = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Book View (0 to 0.2)
  const bookOpacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0]);
  const bookScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const bookY = useTransform(scrollYProgress, [0, 0.2], ["0%", "-10%"]);

  // First Couple Card (0.2 to 0.55)
  // Quicker transitions to eliminate "sticky/lag" perception
  const card1Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.55], [0, 1, 1, 0]);
  const card1Scale = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.55], [0.85, 1, 1, 0.9]);
  const card1X = useTransform(scrollYProgress, [0.15, 0.25], ["-10%", "0%"]);
  const card1Y = useTransform(scrollYProgress, [0.45, 0.55], ["0%", "-15%"]);

  // Second Couple Card (0.45 to 1.0)
  // Comes in almost immediately as Card 1 leaves
  const card2Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.85, 1.0], [0, 1, 1, 1]); 
  const card2Scale = useTransform(scrollYProgress, [0.45, 0.55], [0.85, 1]);
  const card2X = useTransform(scrollYProgress, [0.45, 0.55], ["10%", "0%"]);
  const card2Y = useTransform(scrollYProgress, [0.45, 0.55], ["10%", "0%"]);

  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full pt-8">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden z-20 pointer-events-none">
        
        {/* VIEW 1: The Initial Book */}
        <motion.div 
          className="absolute inset-x-6 inset-y-16 flex items-stretch center paper-bg shadow-2xl rounded-[4px] border border-[#d8ccba] z-10"
          style={{ opacity: bookOpacity, scale: bookScale, y: bookY }}
        >
          {/* Left Page */}
          <div className="w-1/2 h-full border-r border-[#d8ccba] border-dashed flex flex-col items-center justify-center p-2 relative shadow-[inset_-10px_0_15px_-10px_rgba(0,0,0,0.1)]">
            <h3 className="font-serif text-[clamp(1.25rem,5vw,2rem)] leading-tight text-textDark mb-4 text-center px-1">Rafeel<br/>&<br/>Jumana</h3>
            <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-sage/80 mb-8">First Couple</p>
          </div>
          
          {/* Right Page */}
          <div className="w-1/2 h-full flex flex-col items-center justify-center p-2 relative bg-paper shadow-[inset_10px_0_15px_-10px_rgba(0,0,0,0.05)]">
            <h3 className="font-serif text-[clamp(1.25rem,5vw,2rem)] leading-tight text-textDark mb-4 text-center px-1">Rizwan<br/>&<br/>Nidha</h3>
            <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-sage/80 mb-8">Second Couple</p>
          </div>
        </motion.div>

        {/* Scroll Indicator Prompt inside Sticky */}
        <motion.div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 z-30"
          style={{ opacity: indicatorOpacity }}
        >
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1 drop-shadow">Scroll Down</span>
          <div className="w-px h-6 bg-current animate-bounce drop-shadow"></div>
        </motion.div>

        {/* VIEW 2: First Couple Full Card */}
        <motion.div
          className="absolute w-full px-4 z-20"
          style={{ 
            opacity: card1Opacity, 
            scale: card1Scale,
            x: card1X,
            y: card1Y,
            originX: 0.2 // Slightly offset origin for a swooping effect
          }}
        >
          <OrnateCard 
            title="First Couple"
            couple="Rafeel & Jumana"
            parentsInfo={{
              groomLabel: "Grooms' Parents",
              groomNames: "Rafeek & Sareena",
              brideLabel: "Jumana's Parents",
              brideNames: "Rasak & Najma"
            }}
            isBrideParentsLate={true}
          />
        </motion.div>

        {/* VIEW 3: Second Couple Full Card */}
        <motion.div
          className="absolute w-full px-4 z-30"
          style={{ 
            opacity: card2Opacity, 
            scale: card2Scale,
            x: card2X,
            y: card2Y,
            originX: 0.8
          }}
        >
          <OrnateCard 
            title="Second Couple"
            couple="Rizwan & Nidha"
            parentsInfo={{
              groomLabel: "Grooms' Parents",
              groomNames: "Rafeek & Sareena",
              brideLabel: "Nidha's Parents",
              brideNames: "Sulaiman & Minsiya"
            }}
            isBrideParentsLate={false}
          />
        </motion.div>

      </div>
    </div>
  );
};

export default CoupleDetailsScroll;
