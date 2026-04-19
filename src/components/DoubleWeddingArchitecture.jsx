import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import PhotoSlideshow from './PhotoSlideshow';


const Rings = () => (
  <motion.div 
    className="relative w-12 h-8 mx-auto mb-2 flex justify-center"
  >
    <div className="absolute w-6 h-6 rounded-full border-2 border-gold shadow-sm -translate-x-[20%]"></div>
    <div className="absolute w-6 h-6 rounded-full border-[1.5px] border-gold/70 shadow-sm translate-x-[20%]"></div>
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

const RSVPButtonsShorthand = () => (
  <div className="w-full space-y-3 mt-4">
    <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-sage font-bold">Will you attend?</p>
    <div className="flex gap-2 justify-center">
      <button className="flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-lg border border-sage/20 bg-white/50 backdrop-blur-sm shadow-sm hover:bg-gold/10 transition-all group">
         <div className="w-6 h-6 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-600">
           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
         </div>
         <span className="font-serif text-[11px] text-textDark font-bold">Yes, InshaAllah! 😍</span>
      </button>
      <button className="flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-lg border border-sage/20 bg-white/50 backdrop-blur-sm shadow-sm hover:bg-red-50 transition-all group">
         <div className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-400">
           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
         </div>
         <span className="font-serif text-[11px] text-textDark/70 font-bold leading-tight">Unfortunately, I can't make it</span>
      </button>
    </div>
  </div>
);

const OrnateSingleCard = ({ pathDraw }) => (
  <div className="w-full h-full relative p-6 flex flex-col items-center z-10 paper-bg bg-paper shadow-2xl rounded-t-[160px] rounded-b-xl border-[3px] border-white/40 overflow-hidden transform-gpu">
    {/* Border Frame */}
    <div className="absolute inset-0 rounded-t-[156px] rounded-b-lg border border-gold/20 pointer-events-none z-10"></div>

    <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-t-[140px] rounded-b-md pointer-events-none z-10" preserveAspectRatio="none">
      <motion.rect 
        width="100%" height="100%" rx="8" 
        stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" fill="none"
        style={{ pathLength: pathDraw }}
      />
    </svg>

    <div className="mt-8 z-20 w-full flex flex-col items-center px-4 text-center">
      {/* Arabic Bismillah Calligraphy */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <svg viewBox="0 0 577.6 128.5" className="w-64 sm:w-80 h-auto fill-gold drop-shadow-md mx-auto">
          <path d="M577.6,40.1c-0.1,0.5-0.1,1.1-0.2,1.6c-0.1,0.5-0.2,1-0.3,1.6c-0.1,0.5-0.2,1.1-0.4,1.6 c-0.2,0.5-0.3,1.1-0.5,1.6c-0.2,0.5-0.4,1.1-0.6,1.6c-0.2,0.5-0.5,1.1-0.7,1.6c-0.3,0.5-0.5,1.1-0.8,1.6 c-0.3,0.5-0.6,1-0.9,1.5c-0.3,0.5-0.7,1-1,1.5c-0.4,0.5-0.7,1-1.1,1.4c-0.4,0.4-0.8,0.9-1.2,1.3c-0.4,0.4-0.9,0.9-1.3,1.2 c-0.5,0.4-0.9,0.8-1.5,1.1c-0.5,0.3-1.1,0.6-1.7,0.9c-0.6,0.3-1.2,0.5-1.8,0.7c-0.6,0.2-1.2,0.3-1.8,0.4c-0.6,0.1-1.3,0.1-1.9,0.1 c-0.6,0-1.2,0-1.8-0.1c-0.6-0.1-1.2-0.2-1.8-0.4c-0.6-0.2-1.2-0.4-1.7-0.7c-0.6-0.3-1.1-0.6-1.6-1c-0.5-0.4-1-0.8-1.4-1.3 c-0.4-0.5-0.8-0.9-1.2-1.5c-0.4-0.5-0.7-1.1-1-1.6c-0.3-0.6-0.6-1.1-0.8-1.7c-0.2-0.6-0.4-1.2-0.5-1.8c-0.1-0.6-0.2-1.2-0.2-1.9 c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.3l10.3,1.3c0,0.4,0,0.8,0.1,1.1c0.1,0.3,0.2,0.7,0.3,1c0.1,0.3,0.3,0.7,0.5,1 c0.2,0.3,0.4,0.6,0.7,0.9c0.3,0.3,0.6,0.5,0.9,0.7c0.3,0.2,0.7,0.3,1,0.4c0.4,0.1,0.7,0.1,1.1,0.2c0.4,0,0.8,0,1.2,0 c0.4,0,0.8,0,1.1-0.1c0.4-0.1,0.7-0.1,1.1-0.3c0.3-0.1,0.7-0.3,1-0.4c0.3-0.2,0.7-0.4,1-0.6c0.3-0.2,0.6-0.4,0.9-0.7 c0.3-0.3,0.5-0.6,0.8-0.9c0.2-0.3,0.5-0.6,0.7-1c0.2-0.3,0.4-0.7,0.5-1c0.2-0.4,0.3-0.7,0.4-1.1c0.1-0.4,0.2-0.7,0.3-1.1 c0.1-0.4,0.1-0.8,0.1-1.2c0-0.4,0-0.8-0.1-1.2c0-0.3-0.1-0.7-0.2-1c-0.1-0.3-0.3-0.6-0.4-1c-0.2-0.3-0.4-0.6-0.6-0.9 c-0.3-0.3-0.5-0.6-0.8-0.8c-0.3-0.3-0.7-0.5-1.1-0.7c-0.4-0.2-0.8-0.3-1.3-0.4c-0.5-0.1-1.1-0.1-1.7-0.1c-0.6,0.1-1.2,0.2-1.8,0.4 c-0.6,0.2-1.2,0.5-1.8,0.9c-0.6,0.4-1.1,0.8-1.5,1.2c-0.5,0.5-0.9,0.9-1.2,1.3c-0.3,0.4-0.6,0.8-0.8,1.2c-0.2,0.4-0.4,0.7-0.6,1 c-0.1,0.3-0.3,0.5-0.4,0.8c-0.1,0.2-0.2,0.4-0.3,0.5L528,68.4c1-1.4,2.2-2.7,3.5-3.8c1.3-1.1,2.8-2.1,4.4-2.8 c1.6-0.7,3.3-1.2,5.2-1.5c1.8-0.3,3.7-0.4,5.7-0.2c1.9,0.2,3.8,0.6,5.6,1.4c1.8,0.8,3.3,1.8,4.7,3c1.3,1.3,2.4,2.8,3.1,4.5 c0.8,1.7,1.1,3.6,1.2,5.6c0.1,2-0.1,4.1-0.6,6.2s-1.3,4.1-2.4,6c-1.1,1.9-2.5,3.6-4.2,5.1c-1.7,1.5-3.6,2.8-5.7,3.8 c-2.1,1-4.4,1.8-6.8,2.2c-2.4,0.5-4.8,0.7-7.4,0.6s-5.1-0.4-7.5-1c-2.5-0.6-4.8-1.5-7-2.7c-2.2-1.2-4.1-2.6-5.9-4.3l7.9-7.3 c1.5,1.4,3,2.6,4.7,3.5c1.7,1,3.4,1.7,5.3,2.2c1.9,0.5,3.7,0.7,5.6,0.7c1.9,0,3.8-0.2,5.5-0.7c1.7-0.5,3.2-1.2,4.6-2 c1.4-0.8,2.5-1.9,3.4-3.1c0.9-1.4,1.5-3.1,1.9-4.8C577.1,51.8,577.5,46,577.6,40.1L577.6,40.1z M523,73.4 c-0.4,0-0.9,0.1-1.3,0.2c-0.4,0.1-0.8,0.4-1.1,0.7c-0.3,0.3-0.6,0.7-0.8,1.2c-0.2,0.5-0.3,1.1-0.3,1.9c0,0.7,0.1,1.4,0.3,2 c0.2,0.6,0.5,1.1,0.8,1.5c0.4,0.4,0.8,0.7,1.2,1c0.4,0.2,0.9,0.4,1.4,0.4c0.5,0,0.9-0.1,1.3-0.2c0.4-0.1,0.8-0.4,1.1-0.7 c0.3-0.3,0.6-0.8,0.8-1.3c0.2-0.5,0.3-1.2,0.3-2c0-0.8-0.1-1.5-0.3-2.1c-0.2-0.6-0.5-1.1-0.9-1.5c-0.4-0.4-0.8-0.7-1.2-0.9 C524.1,73.5,523.5,73.4,523,73.4L523,73.4z M409.2,28.6c-0.1,0-0.1,0.1-0.2,0.2c-0.1,0.1-0.1,0.2-0.2,0.3c0,0.1,0,0.2-0.1,0.4 c0,0.1,0,0.2,0.2,0.3c0.1,0.1,0.2,0.1,0.4,0.2c0.1,0.1,0.2,0.2,0.2,0.4c0.1,0.1,0.1,0.3,0,0.5c-0.1,0.1-0.1,0.2-0.3,0.3 c-0.1,0.1-0.3,0.1-0.5,0.1c-0.2,0-0.4,0-0.6-0.1c-0.1-0.1-0.3-0.2-0.5-0.4l-7.2,6.7c1,0.8,2,1.5,3.2,2.1c1.2,0.6,2.5,1.1,3.8,1.4 c1.3,0.3,2.7,0.5,4,0.6c1.3,0.1,2.5,0,3.6-0.2c1.1-0.2,2-0.6,2.8-1.2c0.8-0.5,1.5-1.3,1.9-2.2c0.4-1,0.7-2.1,0.7-3.4 c0-1.3-0.2-2.5-0.6-3.7c-0.4-1.2-1-2.2-1.8-3c-0.8-0.8-1.7-1.4-2.7-1.8c-1-0.4-2-0.7-3.1-0.8c-1.1-0.1-2.1-0.2-3.1-0.1 c-0.9,0.1-1.8,0.2-2.5,0.4c-0.8,0.2-1.5,0.4-2.1,0.7c-0.6,0.3-1.1,0.6-1.5,1c-0.4,0.4-0.7,0.8-1,1.3c-0.2,0.5-0.4,1-0.5,1.6 c-0.1,0.6-0.2,1.2-0.2,1.9c0,0.6,0.1,1.1,0.2,1.6c0.1,0.5,0.3,0.9,0.5,1.3l8.6-4c-0.1-0.2-0.1-0.3-0.2-0.4 c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.2,0,0.3,0.1c0.1,0,0.1,0.1,0.2,0.2 c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.2,0,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1 c-0.1,0-0.2,0-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1,0.1,0.2c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.2,0,0.3,0.1 c0.1,0,0.2,0,0.2,0.1c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.1,0.1,0.2,0.2c0,0.1,0.1,0.1,0,0.2c0,0.1-0.1,0.1-0.1,0.2 c-0.1,0.1-0.1,0.1-0.2,0.2C411.3,30,410.2,29.3,409.2,28.6L409.2,28.6z M450.4,115.1c0.1,0,0.3,0,0.4-0.1c0.1,0,0.2-0.1,0.4-0.2 c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.1-0.3,0.1-0.4c0-0.2,0-0.3-0.1-0.5c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.3-0.2-0.5-0.2 c-0.2,0-0.3,0-0.5,0.1c-0.2,0.1-0.3,0.2-0.4,0.3L441.4,122c1.7,1.8,3.9,3.1,6.5,4.1c2.6,0.9,5.5,1.2,8.6,0.8 c3.1-0.4,6.2-1.7,9.3-3.8c3.1-2.1,6.1-5,9-8.7c2.9-3.7,5.5-8.1,7.8-13.1c2.3-5,4.3-10.4,6-16.1c1.7-5.7,2.8-11.4,3.5-17.1 c0.6-5.7,0.7-11.2,0.1-16.5c-0.6-5.3-1.8-10.2-3.6-14.7c-1.8-4.5-4.2-8.5-7.3-12c-3.1-3.5-6.7-6.5-10.9-8.9 c-4.2-2.5-9.1-4.3-14.6-5.6c-5.5-1.2-11.7-1.8-18.7-1.5c-6.9,0.3-14.3,1.3-22.1,3.1c-7.8,1.8-15.8,4.3-24.1,7.3 c-8.3,3.1-16.6,6.8-24.8,11.2c-8.2,4.4-16.1,9.4-23.5,14.9c-7.4,5.6-14.2,11.7-20.2,18.5c-6,6.7-11.2,14-15.3,21.7 c-4.1,7.8-7.1,16-8.9,24.5c-1.8,8.5-2.6,17.2-2.3,26c0.3,8.9,1.7,17.6,4,26c2.4,8.4,5.8,16.2,10.2,23.3 c4.4,7.1,9.6,13.2,15.6,18.5s12.8,9.4,20.4,12.5c7.6,3.1,15.7,5.2,24.5,6.3c8.7,1.1,17.9,1.1,27.3,0.1s18.8-3.1,28-6.1 c9.3-3,18-7.1,26.3-12.2c8.2-5.1,15.7-11,22.3-17.7l-7.7-6.6c-5.1,5.3-10.9,10.1-17.3,14.3c-6.4,4.2-13.4,7.7-20.9,10.4 c-7.5,2.7-15.1,4.7-22.8,5.9c-7.8,1.2-15.3,1.6-22.6,1.2c-7.2-0.4-14.1-1.6-20.4-3.5c-6.4-1.9-12.1-4.7-17-8.3 c-4.9-3.6-9-7.9-12.3-13.1c-3.3-5.1-5.7-11-7.1-17.6c-1.5-6.6-2.1-13.9-1.9-21.8c0.2-7.9,1.3-16.5,3.3-25.7 c2-9.2,5.1-18.8,9.4-28.9c4.3-10.1,9.7-20.4,16.2-30.8c6.5-10.4,14-20.7,22.5-30.6c8.5-9.9,18-19.1,28.4-27.4 c10.4-8.3,21.8-15.3,34-20.9c12.2-5.6,25.4-9.6,39.4-11.9c14.1-2.3,29.1-2.7,45-1c15.9,1.6,32.7,5.2,50.1,10.5 c17.5,5.3,35.5,12.5,54.2,21.6c18.7,9.1,38.1,20,58,32.8c19.9,12.7,40.4,27.3,61.4,43.5c21,16.2,42.5,34.2,64.2,53.8V79.2 c-1.5-0.9-3.3-1.8-5.5-2.6c-2.1-0.8-4.5-1.5-7-2.1c-2.5-0.6-5.1-1.2-7.5-1.8c-2.4-0.6-4.6-1.5-6.5-2.7c-1.9-1.2-3.3-3-4.1-5.4 c-0.8-2.4-1-5.3-0.5-8.7c0.5-3.4,1.6-7.3,3.3-11.7c1.7-4.4,3.8-9,6.3-13.7l-9.1-3.6c-3.1,5.3-5.6,10.5-7.6,15.6 s-3.3,10.1-4,14.6c-0.7,4.5-0.5,8.8,0.7,13c1.3,4.1,3.7,7.8,7.3,10.9c3.6,3.1,8.3,5.6,13.9,7.5 c5.6,1.9,12.1,3.2,19.3,4.1v10.3c-2,1.3-4.2,2.8-6.6,4.5c-2.4,1.7-5,3.6-7.8,5.7s-5.8,4.4-8.8,6.8c-3.1,2.5-6.2,5.1-9.3,7.9 s-6.2,5.7-9.3,8.7s-6.1,6.1-9,9.4s-5.7,6.6-8.3,10c-2.6,3.4-5,6.9-7.2,10.5c-2.2,3.6-4.1,7.2-5.7,11c-1.6,3.7-2.9,7.5-3.8,11.4 c-0.9,3.9-1.5,7.7-1.8,11.5c-0.3,3.8-0.3,7.5-0.1,11c0.2,3.6,0.5,7,0.9,10.3c0.4,3.3,1,6.5,1.7,9.6c0.7,3.1,1.5,6.1,2.5,9 s2.1,5.7,3.3,8.5s2.5,5.5,4,8.2c1.4,2.7,3.1,5.4,4.9,8.1s3.8,5.4,6.2,8.2l-7.7,6.6c-1.9-2.3-3.6-4.6-5.1-7 c-1.5-2.4-2.8-4.8-3.9-7.4c-1.1-2.5-2-5.1-2.6-7.9c-0.7-2.7-1.1-5.6-1.4-8.5c-0.3-2.9-0.3-6-0.2-9.1c0.1-3.1,0.5-6.5,1.2-9.9 c0.7-3.4,1.8-7,3.2-10.7l-9.3,4.3C451.7,114.3,451,114.7,450.4,115.1L450.4,115.1z M402.7,113l7.9-7.3 c-4.8-1.5-10-3.3-15.7-5.5s-12.1-4.7-19-7.6c-6.9-2.9-14.4-6.1-22.3-9.7c-8-3.6-16.3-7.5-25.1-11.7c-8.8-4.2-17.9-8.7-27.4-13.6 c-9.5-4.8-19.1-10.1-29.1-15.6c-10-5.6-20.1-11.5-30.5-17.7c-10.4-6.2-20.9-12.8-31.5-19.7c-10.6-6.9-21.3-14.2-31.9-21.8 s-21.1-15.5-31.5-23.7c-2.6,2.1-5,4.3-7.2,6.5c-2.2,2.2-4.1,4.6-5.8,7c-1.7,2.4-3.1,4.9-4.2,7.5 c-1.1,2.6-1.8,5.3-2.3,8.1c-0.5,2.8-0.6,5.7-0.4,8.6c0.1,2.9,0.5,5.9,1.1,8.9c0.6,3,1.5,5.9,2.6,8.8l9.1-4c-0.8-2.2-1.4-4.5-1.9-6.7 c-0.4-2.2-0.7-4.5-0.8-6.6c-0.1-2.1,0.1-4.1,0.4-6c0.3-1.9,0.9-3.5,1.6-4.9c0.7-1.4,1.6-2.5,2.7-3.4 c1.2-0.9,2.6-1.5,4.3-1.8c1.6-0.3,3.5-0.4,5.8-0.2c2.2,0.2,4.8,0.7,7.7,1.5c2.9,0.8,6.2,2,10,3.5 c3.7,1.6,7.9,3.5,12.5,5.7c4.6,2.2,9.7,4.8,15.2,7.7s11.5,6.2,18,9.9c6.5,3.6,13.5,7.6,21,11.8 c7.5,4.2,15.5,8.8,24,13.8c8.5,5,17.4,10.3,26.7,16c9.3,5.7,18.9,11.7,28.9,18c9.9,6.3,20.1,12.9,30.5,19.8 c10.4,6.9,20.9,14.1,31.5,21.6c10.6,7.5,21.1,15.3,31.6,23.1L402.7,113L402.7,113z M323.7,35.3c0.1,0.1,0.2,0.1,0.4,0.1 c0.1,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.2,0.1-0.3c0-0.1-0.1-0.3-0.2-0.4 c-0.1-0.1-0.2-0.2-0.4-0.3s-0.3-0.1-0.5,0c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.2,0.3-0.2,0.4 C323.3,34.9,323.4,35.1,323.7,35.3L323.7,35.3z M298.1,70l7.3,7.6c1.3-1.3,2.4-2.5,3.3-3.7 c0.9-1.2,1.6-2.4,2-3.5c0.4-1.1,0.7-2.2,0.7-3.4s-0.1-2.3-0.5-3.3c-0.4-1-1-2-1.7-2.9c-0.7-0.9-1.6-1.7-2.6-2.3 c-1-0.6-2.2-1.1-3.6-1.4c-1.4-0.3-2.9-0.5-4.6-0.4s-3.5,0.3-5.4,0.9c-1.9,0.6-3.8,1.5-5.9,2.6c-2.1,1.1-4.2,2.5-6.5,4.2 c-2.3,1.7-4.6,3.6-6.9,5.8s-4.6,4.6-6.8,7.3c-2.1,2.7-4.1,5.5-5.9,8.5c-1.8,3-3.3,6.1-4.5,9.4c-1.3,3.3-2.1,6.8-2.5,10.3 c-0.4,3.6-0.5,7.2-0.2,11c0.3,3.8,1,7.5,2,11.2s2.5,7.3,4.4,10.8s4.3,6.7,7.1,9.6c2.8,2.9,6.1,5.3,9.8,7.3 c3.7,2,7.9,3.3,12.5,3.9c4.6,0.6,9.6,0.6,15.1,0c5.5-0.6,11.4-1.9,17.8-3.9s13.3-4.8,20.5-8.5c7.2-3.7,14.6-8,22.3-13.1 c7.6-5.1,15.3-10.9,23-17.5V86.7C378,92.5,367.6,98,357.2,103c-10.4,5-21,9.6-31.5,13.7c-10.6,4.1-20.9,7.6-31.3,10.5 c-10.4,2.9-20.5,5.1-30.1,6.5c-9.6,1.4-18.4,2-26.4,1.8c-8-0.2-15.1-1.1-21.2-2.7c-6.1-1.6-11.2-4.1-15.3-7.5 c-4.1-3.3-7.1-7.6-9.1-12.7c-2-5.1-2.9-10.9-2.7-17.6c0.2-6.6,1.4-13.9,3.7-21.9s5.7-16.6,10-25.7c4.3-9.1,9.6-18.7,15.8-28.4 s13.3-19.4,21.1-29.2s16.4-19.3,25.8-28.5L237.9,1.1c-11,8.3-20.6,16.5-28.8,24.5c-8.2,8.1-14.8,16-19.8,23.8 c-5,7.8-8.2,15.4-9.8,22.7c-1.5,7.3-1.3,14.3,0.5,21.1c1.9,6.8,5.4,12.9,10.7,18.4l11-8.6c-4-4-6.6-8.5-7.7-13.4 c-1.2-4.9-1.4-10-0.7-15.3c0.7-5.3,2.4-10.6,5-16c2.6-5.4,6.2-10.6,10.6-15.6c4.4-5.1,9.6-9.8,15.6-14.3 c5.9-4.5,12.6-8.5,19.9-11.9s15.3-6.4,23.7-8.9c8.4-2.5,17.4-4.5,27.1-5.9l8.6,8.2c-7,3.1-13,6.8-18.3,10.9 s-10,8.7-14.2,13.8s-7.6,10.5-10.3,16.2c-2.7,5.7-4.5,11.5-5.5,17.7C230.1,51.1,230,57,230.3,62.8L298.1,70L298.1,70z M314,63.1 c-0.2,0.3-0.3,0.6-0.3,1c0,1.1,0.5,1.9,1.6,2.5c1.1,0.6,2.4,0.9,4.1,0.9c1.6,0,3.3,0,4.8-0.1c1.6-0.1,3-0.3,4.3-0.7 c1.3-0.4,2.4-1,3.2-1.8c0.8-0.8,1.2-1.8,1.2-3.2c0-0.7-0.1-1.3-0.3-1.9c-0.2-0.6-0.5-1.1-1-1.6c-0.5-0.5-1.1-1-1.8-1.4 c-0.7-0.4-1.6-0.7-2.6-0.9s-2.1-0.3-3.3-0.4c-1.2,0-2.5,0.1-3.9,0.4c-1.4,0.3-2.9,0.7-4.2,1.3 c-1.4,0.6-2.6,1.4-3.5,2.3c-0.9,0.9-1.5,1.9-1.7,3.1h10.4c0.2-0.2,0.4-0.4,0.7-0.5c0.3-0.1,0.6-0.2,1.1-0.2 c0.6,0,1.2,0.1,1.7,0.4s1,0.7,1.3,1.3c0.4,0.5,0.6,1.2,0.6,2.1c0,0.5-0.1,1-0.2,1.3s-0.3,0.7-0.6,0.9 c-0.3,0.3-0.6,0.5-0.9,0.6c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.7,0.1-1,0.1c-0.3,0-0.6,0-0.9,0c-0.3,0-0.5,0-0.6-0.1 L314,63.1 L314,63.1z M228.4,75.4c-1.4,1.4-3.1,2.8-5,4.1c-1.9,1.3-4.1,2.5-6.6,3.6c-2.5,1.1-5.3,2.1-8.2,2.9 c-3,0.8-6.2,1.5-9.6,2l1.6,10c3-0.6,5.7-1.4,8.3-2.3s5.1-2.1,7.2-3.4c2.2-1.3,4.2-2.8,5.9-4.5c1.7-1.7,3.1-3.6,4.2-5.7 C227,76.5,227.7,76,228.4,75.4z M204.9,94.2c-1.4,0.8-3.1,1.5-5,2.1c-1.9,0.6-4.1,1.1-6.6,1.4c-2.5,0.3-5.3,0.6-8.2,0.8 c-3,0.2-6.2,0.2-9.5,0l0.5,10.1C47.2,109.1,152,102.7,204.9,94.2L204.9,94.2z M176,17s-2.9,3.8-1,5 c1.5,0.9,2.5-1.5,2.5-1.5L176,17z M181,13.5l3,4.5c0.6-0.4,1.1-0.7,1.5-1c0.4-0.3,0.7-0.6,1-1c0.3-0.4,0.5-0.8,0.7-1.2 c0.2-0.4,0.3-0.9,0.3-1.4c0-0.5,0-1,0-1.5s-0.1-1-0.3-1.5c-0.2-0.5-0.4-1-0.8-1.5s-0.8-1-1.3-1.4c-0.5-0.4-1.1-0.8-1.8-1.1 c-0.7-0.3-1.5-0.5-2.5-0.6s-2,0-3.1,0.1c-1.1,0.1-2.3,0.4-3.6,0.8c-1.3,0.4-2.6,0.9-4,1.7c-1.4,0.8-2.8,1.7-4.2,2.9 c-1.4,1.2-2.7,2.7-3.9,4.4s-2.1,3.7-2.8,5.8s-0.8,4.5-0.6,7.2l10.3-1.3c-0.1-1.3-0.1-2.6,0.1-3.8c0.2-1.2,0.7-2.3,1.2-3.4 c0.6-1.1,1.4-2,2.3-2.9c0.9-0.8,1.9-1.5,3-2.1L181,13.5L181,13.5z M450,44.4"/>
        </svg>
        <div className="w-16 h-px bg-gold/30 mx-auto mt-2"></div>
      </motion.div>

      {/* Main Couple Names */}
      <div className="flex items-center justify-center gap-4 w-full px-2 mb-8 mt-4">
        <div className="flex-1 text-center">
          <h2 className="font-serif text-2xl sm:text-4xl text-textDark italic leading-tight drop-shadow-sm">
            Rafeel
          </h2>
          <span className="text-gold font-serif italic text-lg leading-none">&</span>
          <h2 className="font-serif text-2xl sm:text-4xl text-textDark italic leading-tight drop-shadow-sm">
            Jumana
          </h2>
        </div>
        
        <div className="shrink-0 flex items-center justify-center">
          <div className="text-gold text-2xl drop-shadow-sm opacity-60">♥</div>
        </div>

        <div className="flex-1 text-center">
          <h2 className="font-serif text-2xl sm:text-4xl text-textDark italic leading-tight drop-shadow-sm">
            Rizwan
          </h2>
          <span className="text-gold font-serif italic text-lg leading-none">&</span>
          <h2 className="font-serif text-2xl sm:text-4xl text-textDark italic leading-tight drop-shadow-sm">
            Nidha
          </h2>
        </div>
      </div>

      <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-sage mb-6 font-bold">Together with their families</p>
      
      {/* Parents Section - Prominent Hierarchy */}
      <div className="space-y-6 mb-10 w-full">
         <div className="flex flex-col items-center">
            <h3 className="font-serif text-lg text-textDark leading-tight">Mr. & Mrs. Rafeek & Sareena</h3>
            <p className="font-sans text-[8px] uppercase tracking-widest text-gold font-bold">(Grooms' Parents)</p>
         </div>

         <div className="flex flex-col items-center">
            <h3 className="font-serif text-lg text-textDark leading-tight">Mr. & Mrs. Sulaiman & Minsiya</h3>
            <p className="font-sans text-[8px] uppercase tracking-widest text-gold font-bold">(Nidha's Parents)</p>
         </div>

         <div className="flex flex-col items-center">
            <h3 className="font-serif text-lg text-textDark leading-tight">
               Mr. & Mrs. <span className="italic">Late</span> Rasak & Najma
            </h3>
            <p className="font-sans text-[8px] uppercase tracking-widest text-gold font-bold">(Jumana's Parents)</p>
         </div>
      </div>

      <div className="w-full h-px bg-gold/10 mb-8 max-w-[200px]"></div>


      <motion.p 
        className="font-sans text-[10px] uppercase tracking-[0.25em] text-sage font-bold px-6 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Request the honor of your presence <br/> to share in our joy
      </motion.p>
      
    </div>
  </div>
);

const DoubleWeddingArchitecture = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
    });

    return (
      <div className="w-full pt-12 pb-16 flex flex-col items-center gap-16 relative overflow-visible" ref={containerRef}>
        
        {/* Parallax Background Elements */}
        <MandalaBackdrop scrollYProgress={scrollYProgress} />
  
        <motion.div
          className="relative w-[92%] max-w-sm min-h-[640px] z-20 pointer-events-auto"
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
           <OrnateSingleCard 
              pathDraw={useTransform(scrollYProgress, [0.2, 0.6], [0, 1])}
            />
        </motion.div>
  
      </div>
    );
};

export default DoubleWeddingArchitecture;
