
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIDemo: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setResponse('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a friendly AI Tutor. Explain this concept concisely for a high school student: ${question}`,
        config: {
          systemInstruction: "You are a world-class academic tutor. Be concise, clear, and encouraging.",
          temperature: 0.7,
        }
      });
      setResponse(result.text || 'Sorry, I could not generate an answer at this time.');
    } catch (err) {
      console.error(err);
      setResponse("I'm having a little trouble connecting to my brain right now. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Experience the Magic</h2>
          <p className="text-slate-400 text-lg">Ask our AI tutor a quick question to see how it breaks down complex ideas.</p>
        </div>

        <div className="bg-slate-800 p-2 rounded-3xl shadow-2xl border border-slate-700/50">
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g., Explain the concept of photosynthesis..."
              className="flex-grow bg-slate-900 border-none rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-slate-500"
              onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
            />
            <button 
              onClick={handleAsk}
              disabled={loading || !question.trim()}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all active:scale-95 flex items-center justify-center min-w-[120px]"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Explain It'}
            </button>
          </div>

          {response && (
            <div className="mt-6 p-6 bg-slate-900/50 rounded-2xl border border-slate-700 animate-in fade-in slide-in-from-top-2 duration-500">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-slate-300 leading-relaxed whitespace-pre-wrap italic">
                  "{response}"
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIDemo;
