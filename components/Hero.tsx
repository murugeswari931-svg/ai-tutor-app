
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>The future of learning is here</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Master any subject with <span className="gradient-text">Personalized AI</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Lumina AI adapts to your learning style, simplifies complex topics, and provides 24/7 support to help you achieve academic excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={onCtaClick}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95"
              >
                Start Learning Now
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full text-lg font-bold hover:bg-slate-50 transition-all shadow-sm">
                Watch how it works
              </button>
            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-4 grayscale opacity-60">
              <img src="https://picsum.photos/id/1/100/30?grayscale" alt="University Logo" className="h-6" />
              <img src="https://picsum.photos/id/2/100/30?grayscale" alt="University Logo" className="h-6" />
              <img src="https://picsum.photos/id/3/100/30?grayscale" alt="University Logo" className="h-6" />
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
              <img 
                src="https://picsum.photos/id/20/800/600" 
                alt="Student learning with AI" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Concept Mastery</p>
                    <p className="text-xs text-slate-500">Quantum Physics module completed at 98%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
