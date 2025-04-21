
import React, { useState, useEffect } from 'react';

type Quote = {
  text: string;
  source: string;
};

const quotes: Quote[] = [
  {
    text: "وَعَلَّمَكَ مَا لَمْ تَكُنْ تَعْلَمُ وَكَانَ فَضْلُ اللَّهِ عَلَيْكَ عَظِيمًا",
    source: "Sourate An-Nisa (4), verset 113"
  },
  {
    text: "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ",
    source: "Sourate Fatir (35), verset 28"
  },
  {
    text: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
    source: "Sourate Al-Mujadila (58), verset 11"
  },
  {
    text: "رَبِّ زِدْنِي عِلْمًا",
    source: "Sourate Ta-Ha (20), verset 114"
  }
];
const QuoteSection = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
        setFadeIn(true);
      }, 450);
    }, 8500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-r from-emerald-50 via-white to-emerald-100 zellige-pattern">
      {/* Ornement SVG gold haut-gauche */}
      <svg className="absolute -top-7 left-7 w-16 h-16 opacity-15 pointer-events-none z-0" viewBox="0 0 48 48" fill="none"><path d="M24 1L31.3 16.5L48 18.6L35 30.5L38.5 47L24 38.5L9.5 47L13 30.5L0 18.6L16.7 16.5L24 1Z" fill="#FFD700" fillOpacity="0.50"/></svg>
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-emerald-50/85 to-white/90"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div 
          className={`bg-white/85 glassmorphism backdrop-blur rounded-2xl p-10 shadow-xl border border-gold/15 transition-all duration-500 ${fadeIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <p className="text-4xl arabic font-amiri mb-4 leading-relaxed text-emerald-700 drop-shadow-sm">
            {currentQuote.text}
          </p>
          <div className="w-28 h-1 bg-gradient-to-r from-emerald-400 via-gold to-emerald-500 mx-auto my-6 rounded-full" />
          <p className="text-emerald-700 font-semibold tracking-wide">
            {currentQuote.source}
          </p>
        </div>
      </div>
      {/* Ornement SVG en bas droite */}
      <svg className="absolute bottom-5 right-8 w-20 h-20 opacity-25 pointer-events-none z-0" viewBox="0 0 48 48" fill="none"><path d="M24 1L31.3 16.5L48 18.6L35 30.5L38.5 47L24 38.5L9.5 47L13 30.5L0 18.6L16.7 16.5L24 1Z" fill="#24B486" fillOpacity="0.16"/></svg>
    </section>
  );
};
export default QuoteSection;
