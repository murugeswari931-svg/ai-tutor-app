
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
  onLogin: () => void;
  onSignup: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, onLogin, onSignup }) => {
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-slate-900 tracking-tight">Lumina<span className="text-blue-600">AI</span></span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#demo" className="hover:text-blue-600 transition-colors">Try Demo</a>
          <a href="#testimonials" className="hover:text-blue-600 transition-colors">Success Stories</a>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={onLogin}
            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
          >
            Log in
          </button>
          <button 
            onClick={onSignup}
            className="px-5 py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-100 active:scale-95"
          >
            Sign up Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
