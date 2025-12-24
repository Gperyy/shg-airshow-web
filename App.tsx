import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import ShowProgram from "./components/ShowProgram";
import Highlights from "./components/Highlights";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Participants from "./components/Participants";
import Tickets from "./components/Tickets";
import Partners from "./components/Partners"; 

export type Language = "TR" | "EN";
type View = "home" | "program" | "participants" | "tickets" | "partners";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>("home");
  const [lang, setLang] = useState<Language>("TR");

  // Sayfa her değiştiğinde en yukarı kaydırır
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (view: View) => {
    setCurrentView(view);
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === "TR" ? "EN" : "TR"));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark font-sans transition-colors duration-300">
      <div className="flex-grow">
        {/* Sabit Navbar */}
        <div className="fixed w-full bg-white dark:bg-gray-900 top-0 left-0 right-0 z-50 shadow-sm">
          <Navbar
            onNavigate={navigateTo}
            currentView={currentView}
            lang={lang}
            onToggleLang={toggleLanguage}
          />
        </div>

        <main className="flex-grow pt-20">
          {currentView === "home" ? (
            <>
              <Hero onNavigate={navigateTo} lang={lang} />
              <Countdown targetDate="2026-09-19T09:00:00" lang={lang} />
              <Highlights lang={lang} />
              <Gallery lang={lang} />
            </>
          ) : currentView === "program" ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <ShowProgram lang={lang} />
              <div className="pb-16 text-center">
                <button
                  onClick={() => navigateTo("home")}
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold uppercase text-xs tracking-[0.2em] transition-colors"
                >
                  <span className="material-icons text-lg">arrow_back</span>
                  {lang === "TR" ? "ANA SAYFAYA DÖN" : "BACK TO HOME"}
                </button>
              </div>
            </div>
          ) : currentView === "participants" ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Participants lang={lang} />
              <div className="pb-16 text-center">
                <button
                  onClick={() => navigateTo("home")}
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold uppercase text-xs tracking-[0.2em] transition-colors"
                >
                  <span className="material-icons text-lg">arrow_back</span>
                  {lang === "TR" ? "ANA SAYFAYA DÖN" : "BACK TO HOME"}
                </button>
              </div>
            </div>
          ) : currentView === "partners" ? ( 
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Partners lang={lang} />
              <div className="pb-16 text-center">
                <button
                  onClick={() => navigateTo("home")}
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold uppercase text-xs tracking-[0.2em] transition-colors"
                >
                  <span className="material-icons text-lg">arrow_back</span>
                  {lang === "TR" ? "ANA SAYFAYA DÖN" : "BACK TO HOME"}
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Tickets lang={lang} />
              <div className="pb-16 text-center">
                <button
                  onClick={() => navigateTo("home")}
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold uppercase text-xs tracking-[0.2em] transition-colors"
                >
                  <span className="material-icons text-lg">arrow_back</span>
                  {lang === "TR" ? "ANA SAYFAYA DÖN" : "BACK TO HOME"}
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Footer Güncellemesi: onNavigate prop'u eklendi */}
      <Footer lang={lang} onNavigate={navigateTo} />
    </div>
  );
};

export default App;