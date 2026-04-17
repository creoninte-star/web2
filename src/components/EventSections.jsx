import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const ScratchCardDate = ({ dateString, onReveal }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [scratchCount, setScratchCount] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    
    // Premium Metallic Gold Gradient for Scratch Cover
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, '#c5a059');
    gradient.addColorStop(0.2, '#f1e1a6');
    gradient.addColorStop(0.5, '#d4af37');
    gradient.addColorStop(0.8, '#f1e1a6');
    gradient.addColorStop(1, '#a67c00');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);
    
    // Add subtle texture or pattern to the scratch card
    ctx.strokeStyle = 'rgba(0,0,0,0.1)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i < rect.width; i += 4) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, rect.height);
      ctx.stroke();
    }

    ctx.fillStyle = '#655743';
    ctx.font = 'bold 10px Montserrat';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '2px';
    ctx.fillText('SCRATCH TO REVEAL', rect.width / 2, rect.height / 2);
  }, [revealed]);

  useEffect(() => {
    if (revealed) {
      onReveal();
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const xPos = (rect.left + rect.width / 2) / window.innerWidth;
        const yPos = (rect.top + rect.height / 2) / window.innerHeight;
        
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { x: xPos, y: yPos },
          colors: ['#D4AF37', '#FAF6F0', '#655743'],
          disableForReducedMotion: true,
          gravity: 0.8,
          startVelocity: 35,
          scalar: 1.2
        });
      }
    }
  }, [revealed]);

  const scratch = (e) => {
    if (revealed || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 16, 0, Math.PI * 2);
    ctx.fill();

    setScratchCount(prev => {
      const next = prev + 1;
      
      if (next % 4 === 0) {
        confetti({
          particleCount: 4,
          origin: { x: clientX / window.innerWidth, y: clientY / window.innerHeight },
          colors: ['#D4AF37', '#B68222'],
          gravity: 2,
          startVelocity: 15,
          scalar: 0.5,
          ticks: 30
        });
      }

      if (next > 25 && !revealed) { 
        setRevealed(true);
      }
      return next;
    });
  };

  const handleDown = (e) => {
    setIsScratching(true);
    scratch(e);
  };
  
  const handleUp = () => setIsScratching(false);
  
  const handleMove = (e) => {
    if (!isScratching) return;
    if (e.cancelable) e.preventDefault();
    scratch(e);
  };

  // Intense shake animation for the unscratched card
  const shakeAnimation = {
    x: [0, -4, 4, -4, 4, 0],
    y: [0, -1, 1, -1, 1, 0],
    rotate: [0, -1, 1, -1, 1, 0],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatDelay: 2
    }
  };

  return (
    <div className="relative w-64 h-14 mx-auto my-6 z-20" ref={containerRef}>
      {/* Background Frame (Matching Screenshot) */}
      <div className="absolute inset-0 bg-white/40 rounded border-[1.5px] border-gold/40 flex items-center justify-center p-1">
         <div className="w-full h-full border border-gold/20 rounded flex items-center justify-center bg-[#FDFBF7] shadow-inner">
            <p className="font-serif text-[15px] tracking-[0.2em] text-textDark font-bold uppercase">{dateString}</p>
         </div>
      </div>

      {!revealed && (
        <motion.canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full rounded shadow-md touch-none cursor-crosshair z-30"
          animate={shakeAnimation}
          onMouseDown={handleDown}
          onMouseUp={handleUp}
          onMouseLeave={handleUp}
          onMouseMove={handleMove}
          onTouchStart={handleDown}
          onTouchEnd={handleUp}
          onTouchMove={handleMove}
        />
      )}
    </div>
  );
};

const EventCard = ({ title, dateString, targetDateIso, time, highlight, venue, onReveal }) => {
  const [revealed, setRevealed] = useState(false);
  const cardRef = useRef(null);
  const [hasScrolledPast, setHasScrolledPast] = useState(false);
  
  const calculateTimeLeft = () => {
    if (!revealed) return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    
    const difference = +new Date(targetDateIso) - +new Date();
    if (difference <= 0) return { days: '00', hours: '00', minutes: '00', seconds: '00' };

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!revealed) return; 
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [revealed, targetDateIso]);

  // AUTO-SCROLL PULL-BACK LOGIC
  useEffect(() => {
    if (revealed) return;

    const handleScroll = () => {
      if (!cardRef.current || revealed) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // If the card is almost entirely scrolled out of view (scrolling down past it)
      if (rect.bottom < viewportHeight * 0.4 && !hasScrolledPast) {
        setHasScrolledPast(true);
        setTimeout(() => {
          cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setHasScrolledPast(false); // Reset for next time if they do it again
        }, 800);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [revealed, hasScrolledPast]);

  return (
    <motion.section 
      ref={cardRef}
      className="min-h-[85vh] flex flex-col items-center justify-center py-10 px-6 text-center relative z-10 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="border border-gold/30 rounded-t-[160px] rounded-b-xl p-8 bg-paper shadow-2xl embossed w-full max-w-sm relative">
        <h2 className="font-serif text-3xl sm:text-4xl text-textDark mb-1 italic tracking-tight">{title}</h2>
        <div className="w-12 h-px bg-gold/40 mx-auto mb-4"></div>
        
        {/* Date Box (Scratchable) */}
        <ScratchCardDate 
          dateString={dateString} 
          onReveal={() => {
            setRevealed(true);
            if (onReveal) onReveal();
          }} 
        />
        
        {/* Countdown - Always visible, but zeros until scratched */}
        <div className="flex justify-center gap-4 my-8">
          {['days', 'hours', 'minutes', 'seconds'].map((interval) => (
            <div key={interval} className="flex flex-col items-center">
              <motion.span 
                className="font-serif text-[28px] text-gold mb-1 w-12 text-center"
                animate={revealed ? { scale: [1.2, 1], color: ['#655743', '#d4af37'] } : {}}
              >
                {timeLeft[interval]}
              </motion.span>
              <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-textDark/50">
                {interval}
              </span>
            </div>
          ))}
        </div>

        {/* Details - Always visible as requested */}
        <div className="space-y-6 mt-4">
          <div>
            <h3 className="font-sans text-[9px] uppercase tracking-widest text-[#899E8F] mb-1 font-bold">Time</h3>
            <p className="font-serif text-base text-textDark/80">{time}</p>
            {highlight && (
              <p className="font-serif text-xs italic text-gold mt-1 drop-shadow-sm">{highlight}</p>
            )}
          </div>
          <div className="w-8 h-px bg-[#899E8F]/30 mx-auto"></div>
          <div>
            <h3 className="font-sans text-[9px] uppercase tracking-widest text-[#899E8F] mb-1 font-bold">Venue</h3>
            <p className="font-serif text-base text-textDark/80 leading-relaxed">{venue}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const EventSections = ({ onAllRevealed }) => {
  const [revealedCount, setRevealedCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (revealedCount >= 2 && onAllRevealed) {
      onAllRevealed();
    }
  }, [revealedCount, onAllRevealed]);

  const handleReveal = () => setRevealedCount(prev => prev + 1);

  return (
    <div className="pb-16 flex flex-col items-center" ref={containerRef}>
      <EventCard 
        title="Nikkah Ceremony"
        dateString="May 6, 2026"
        targetDateIso="2026-05-06T16:00:00"
        time="After Asar (4:00 PM onwards)"
        highlight="Bride Entry: 5:30 PM - 6:00 PM"
        venue="Zareena Manzil, Koothparamba"
        onReveal={handleReveal}
      />
      <EventCard 
        title="Marriage Function"
        dateString="May 7, 2026"
        targetDateIso="2026-05-07T12:00:00"
        time="Starting at 12:00 PM"
        highlight={null}
        venue="Vajra Auditorium, Mooriyad Road"
        onReveal={handleReveal}
      />

      <AnimatePresence>
        {revealedCount < 2 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="text-center pt-8"
          >
            <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-gold animate-pulse">
              Scratch both dates to unlock details
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventSections;
