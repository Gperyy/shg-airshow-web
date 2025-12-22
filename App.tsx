import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import ShowProgram from './components/ShowProgram';
import Highlights from './components/Highlights';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Participants from './components/Participants';
import Tickets from './components/Tickets';

export type Language = 'TR' | 'EN';
type View = 'home' | 'program' | 'participants' | 'tickets';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [lang, setLang] = useState<Language>('TR');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (view: View) => {
    setCurrentView(view);
  };

  const toggleLanguage = () => {
    setLang(prev => (prev === 'TR' ? 'EN' : 'TR'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark font-sans transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex-grow">
        <Navbar 
          onNavigate={navigateTo} 
          currentView={currentView} 
          lang={lang} 
          onToggleLang={toggleLanguage} 
        />
        
        <main className="flex-grow">
          {currentView === 'home' ? (
            <>
              <Hero onNavigate={navigateTo} lang={lang} />
              <Countdown targetDate="2026-09-19T09:00:00" lang={lang} />
              <Highlights lang={lang} />
              <Gallery lang={lang} />
            </>
          ) : currentView === 'program' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <ShowProgram lang={lang} />
              <div className="pb-16 text-center">
                <button 
                  onClick={() => navigateTo('home')}
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold uppercase text-xs tracking-[0.2em] transition-colors"
                >
                  <span className="material-icons text-lg">arrow_back</span>
                  {lang === 'TR' ? 'ANA SAYFAYA DÖN' : 'BACK TO HOME'}
                </button>
              </div>
            </div>
          ) : currentView === 'participants' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Participants lang={lang} />
              <div className="pb-16 text-center">
                <button 
                  onClick={() => navigateTo('home')}
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold uppercase text-xs tracking-[0.2em] transition-colors"
                >
                  <span className="material-icons text-lg">arrow_back</span>
                  {lang === 'TR' ? 'ANA SAYFAYA DÖN' : 'BACK TO HOME'}
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Tickets lang={lang} />
              <div className="pb-16 text-center">
                <button 
                  onClick={() => navigateTo('home')}
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold uppercase text-xs tracking-[0.2em] transition-colors"
                >
                  <span className="material-icons text-lg">arrow_back</span>
                  {lang === 'TR' ? 'ANA SAYFAYA DÖN' : 'BACK TO HOME'}
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer lang={lang} />
    </div>
  );
};

export default App;