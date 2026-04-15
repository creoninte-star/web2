import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const NikkahEvent = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-05-06T16:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <motion.section 
      className="py-16 px-6 text-center bg-envelope relative z-10 embossed mt-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="border border-sage/30 rounded-t-full p-8 bg-paper">
        <h2 className="font-serif text-4xl text-textDark mb-2">Nikkah Ceremony</h2>
        <div className="w-16 h-px bg-gold/50 mx-auto mb-6"></div>
        
        <p className="font-sans text-xs uppercase tracking-widest text-sage mb-2">May 6, 2026</p>
        
        {/* Minimalist Countdown */}
        <div className="flex justify-center gap-4 my-8">
          {Object.keys(timeLeft).length > 0 ? (
            ['days', 'hours', 'minutes', 'seconds'].map((interval) => (
              <div key={interval} className="flex flex-col items-center">
                <span className="font-serif text-2xl text-textDark mb-1 w-10 text-center">
                  {timeLeft[interval] || '0'}
                </span>
                <span className="font-sans text-[8px] uppercase tracking-widest text-gold">
                  {interval}
                </span>
              </div>
            ))
          ) : (
            <span className="font-serif text-2xl text-textDark">It's Time!</span>
          )}
        </div>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="font-sans text-[10px] uppercase tracking-wider text-sage mb-1">Time</h3>
            <p className="font-serif text-lg">After Asar (4:00 PM onwards)</p>
            <p className="font-serif text-sm italic text-gold mt-1">Bride Entry: 5:30 PM - 6:00 PM</p>
          </div>
          <div className="w-8 h-px bg-sage/30 mx-auto"></div>
          <div>
            <h3 className="font-sans text-[10px] uppercase tracking-wider text-sage mb-1">Venue</h3>
            <p className="font-serif text-lg">Zareena Manzil, Koothparamba</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default NikkahEvent;
