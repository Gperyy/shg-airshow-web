
import React from 'react';
import { Language } from '../App';

interface HeroProps {
  onNavigate: (view: 'home' | 'program') => void;
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, lang }) => {
  const translations = {
    title: lang === 'TR' ? (
      <>Dünya Havacılığının <br className="hidden md:block" /> Buluşma Noktası</>
    ) : (
      <>The Meeting Point of <br className="hidden md:block" /> World Aviation</>
    ),
    badge: lang === 'TR' ? '19-20 Eylül 2026 - Sivrihisar Havacılık Merkezi' : '19-20 September 2026 - Sivrihisar Aviation Center',
    buyTicket: lang === 'TR' ? 'BİLET AL' : 'BUY TICKETS',
    program: lang === 'TR' ? 'GÖSTERİ PROGRAMI' : 'SHOW PROGRAM',
  };

  return (
    <section className="relative rounded-lg mt-4 min-h-[70vh] md:min-h-[85vh] flex items-center justify-center text-center text-white overflow-hidden group shadow-2xl bg-secondary">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-secondary">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 scale-110"
          src="https://streamable.com/e/t7xcrq?autoplay=1&muted=1&loop=1&nocontrols=1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="SHG AIRSHOW 2026 Background Video"
        ></iframe>
        <div className="absolute inset-0 bg-secondary/65 group-hover:bg-secondary/55 transition-colors duration-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/90"></div>
      </div>
      
      <div className="relative z-10 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] uppercase">
          {translations.title}
        </h1>
        
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <span className="inline-block py-2 px-6 md:px-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] shadow-xl drop-shadow-md">
            {translations.badge}
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000">
          <a 
            href="#" 
            className="bg-white text-secondary font-extrabold py-4 px-12 rounded-md hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-2xl uppercase text-sm tracking-widest flex items-center justify-center gap-2 group/btn"
          >
            <span className="material-icons text-lg group-hover/btn:rotate-12 transition-transform">local_activity</span>
            {translations.buyTicket}
          </a>
          <button 
            onClick={() => onNavigate('program')}
            className="bg-primary text-white font-extrabold py-4 px-12 rounded-md hover:bg-red-700 transition-all hover:scale-105 active:scale-95 shadow-2xl uppercase text-sm tracking-widest border border-primary/20 flex items-center justify-center gap-2 group/btn"
          >
            <span className="material-icons text-lg group-hover/btn:translate-x-1 transition-transform">flight_takeoff</span>
            {translations.program}
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-secondary via-secondary/60 to-transparent z-10 opacity-90"></div>
    </section>
  );
};

export default Hero;
