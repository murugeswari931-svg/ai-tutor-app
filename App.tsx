
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIDemo from './components/AIDemo';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import { AuthView } from './types';

const App: React.FC = () => {
  const [authView, setAuthView] = useState<AuthView>(AuthView.NONE);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLogin = () => setAuthView(AuthView.LOGIN);
  const openSignup = () => setAuthView(AuthView.SIGNUP);
  const closeAuth = () => setAuthView(AuthView.NONE);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Navbar 
        scrolled={scrolled} 
        onLogin={openLogin} 
        onSignup={openSignup} 
      />
      
      <main className="flex-grow">
        <Hero onCtaClick={openSignup} />
        <Features />
        <AIDemo />
        <Testimonials />
      </main>

      <Footer />

      {authView !== AuthView.NONE && (
        <AuthModal 
          view={authView} 
          onClose={closeAuth} 
          onSwitch={(view) => setAuthView(view)} 
        />
      )}
    </div>
  );
};

export default App;
