
import React from 'react';

const FEATURES = [
  {
    title: "Adaptive Learning",
    description: "Our AI analyzes your progress and adjusts the difficulty and content delivery to match your unique pace.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Instant Q&A",
    description: "Stuck on a problem? Get instant, detailed explanations and step-by-step solutions any time of day or night.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    color: "bg-teal-100 text-teal-600"
  },
  {
    title: "Exam Simulations",
    description: "Practice with AI-generated mock exams that mirror real testing conditions and provide detailed performance reports.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    title: "Multi-Language Support",
    description: "Learn in over 30 languages. The AI tutor can translate and explain concepts in your native tongue.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5a18.022 18.022 0 01-3.827-5.802M11.95 9.499A10.704 10.704 0 0110.15 14m-1.15-5a11.192 11.192 0 00-1.85 4.5m1.85-4.5h4.5m1.85 4.5a11.192 11.192 0 01-1.85-4.5m1.85 4.5L14.5 17m-3.5-2h-2.5" />
      </svg>
    ),
    color: "bg-pink-100 text-pink-600"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">Why Lumina AI?</h2>
          <p className="text-4xl font-extrabold text-slate-900 mb-4">Everything you need to excel</p>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Powerful tools designed for modern students. Stop struggling and start understanding with features built around real educational needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
