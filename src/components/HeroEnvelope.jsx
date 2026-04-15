import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HeroEnvelope = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 1200); // Trigger the next phase after animation
  };

  return (
    <motion.div 
      className="fixed inset-0 z-40 flex items-center justify-center bg-envelope max-w-md mx-auto paper-bg overflow-hidden"
      initial={{ y: 0 }}
      animate={{ y: isOpen ? '100vh' : 0, opacity: isOpen ? 0 : 1 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
    >
      <div className="relative w-[90%] max-w-[340px] aspect-[4/3] bg-paper shadow-2xl rounded-sm flex items-center justify-center cursor-pointer paper-bg" onClick={handleOpen}>
        {/* Envelope back folds */}
        <div className="absolute inset-0">
           <svg className="w-full h-full text-[#EADDCE] drop-shadow-md" viewBox="0 0 100 100" preserveAspectRatio="none">
             <polygon fill="currentColor" points="0,0 50,50 100,0 100,100 0,100" />
           </svg>
        </div>
        
        {/* Flap */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-[60%] origin-top z-20"
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpen ? 180 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <svg className="w-full h-full text-envelope drop-shadow-lg" viewBox="0 0 100 100" preserveAspectRatio="none">
             <polygon fill="currentColor" points="0,0 100,0 50,100" />
             {/* subtle border line */}
             <polyline stroke="rgba(212,175,55,0.3)" strokeWidth="0.5" fill="none" points="0,0 50,100 100,0" />
          </svg>
          
          {/* Wax Seal */}
          <motion.div 
            className="absolute left-1/2 -bottom-6 w-16 h-16 -ml-8 rounded-full bg-wax-seal shadow-md flex justify-center items-center cursor-pointer border-2 border-wax-seal-border z-30"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: isOpen ? 1.2 : 1, opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* The wax seal inner detail */}
            <div className="w-14 h-14 rounded-full border border-[rgba(212,175,55,0.4)] flex flex-col justify-center items-center text-wax-seal-border bg-[#EADDCE] shadow-inner">
              <span className="font-serif text-[10px] tracking-wider leading-none">R&J</span>
              <div className="w-6 border-t border-[rgba(212,175,55,0.4)] my-[2px]"></div>
              <span className="font-serif text-[10px] tracking-wider leading-none">R&N</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Content peering through */}
        <div className="absolute inset-x-4 top-4 bottom-2 bg-white flex flex-col items-center pt-8 opacity-60 pointer-events-none paper-bg border border-sage/20 z-0 text-center px-4">
           <h2 className="font-serif text-xl text-textDark mb-2">You are invited</h2>
        </div>

      </div>
    </motion.div>
  );
};

export default HeroEnvelope;
