import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PhotoSlideshow = ({ images, interval = 4000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden rounded-t-full">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={images[index]}
            alt="Couple portrait"
            className="w-full h-full object-cover"
            style={{
              filter: 'grayscale(1) contrast(1.15) brightness(1.05) sepia(0.1)',
              mixBlendMode: 'multiply',
              opacity: 0.9
            }}
          />
          
          {/* Subtle Sketch Line Overlay Effect */}
          <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30" 
               style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)' }}>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Texture to blend into the paper */}
      <div className="absolute inset-0 pointer-events-none bg-paper-texture opacity-30 mix-blend-multiply"></div>
      
      {/* Decorative frame inner glow */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"></div>
    </div>
  );
};

export default PhotoSlideshow;
