import React, { useState } from 'react';
import HeroEnvelope from './components/HeroEnvelope';
import DoubleWeddingArchitecture from './components/DoubleWeddingArchitecture';
import EventSections from './components/EventSections';
import VenueMaps from './components/VenueMaps';
import ClosingMessage from './components/ClosingMessage';
import MusicPlayer from './components/MusicPlayer';
import FooterRSVP from './components/FooterRSVP';



function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="relative min-h-screen bg-envelope font-sans flex flex-col justify-center">
      {/* Noise Overlay */}
      <div className="noise-overlay pointer-events-none fixed inset-0 z-50"></div>

      {/* App Container - Mobile App Feel max width */}
      <div className="max-w-md w-full mx-auto min-h-screen relative shadow-2xl bg-paper">
        
        {/* Music Control - stays on top after opening */}
        <MusicPlayer isOpened={isOpened} />
        
        {/* Envelope Covers everything initially */}

        {!isOpened && <HeroEnvelope onOpen={() => setIsOpened(true)} />}

        {/* The actual Invitation Content */}
        <div className={`relative z-10 min-h-screen transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0'}`}>
          <DoubleWeddingArchitecture />
          
          <EventSections />
          <VenueMaps />
          <FooterRSVP />
          <ClosingMessage />
          
        </div>

      </div>
    </div>
  );
}

export default App;
