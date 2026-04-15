import React, { useState } from 'react';
import HeroEnvelope from './components/HeroEnvelope';
import CoupleDetailsScroll from './components/CoupleDetailsScroll';
import NikkahEvent from './components/NikkahEvent';
import MarriageEvent from './components/MarriageEvent';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="relative min-h-screen bg-envelope font-sans">
      {/* Noise Overlay */}
      <div className="noise-overlay pointer-events-none"></div>

      {/* App Container - Mobile App Feel max width */}
      <div className="max-w-md mx-auto min-h-screen bg-envelope relative shadow-2xl">
        
        {/* Envelope Covers everything initially */}
        {!isOpened && <HeroEnvelope onOpen={() => setIsOpened(true)} />}

        {/* The actual Invitation Content */}
        <div className={`relative z-10 min-h-screen transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
          <CoupleDetailsScroll />
          <NikkahEvent />
          <MarriageEvent />
          
          {/* Bottom spacing */}
          <div className="h-24"></div>
        </div>

      </div>
    </div>
  );
}

export default App;
