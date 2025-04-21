
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
      }, 500);
    }, 10000); // Change quote every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 arabesque-pattern">
      <div className="absolute inset-0 bg-gradient-to-r from-islamic-light/90 via-white/95 to-islamic-light/90"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div 
          className={`bg-white/80 glassmorphism backdrop-blur rounded-2xl p-10 shadow-xl border border-islamic-primary/10 transition-all duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
        >
          <p className="text-4xl arabic font-amiri mb-4 leading-relaxed text-islamic-dark drop-shadow-sm">
            {currentQuote.text}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-islamic-primary to-islamic-accent mx-auto my-4 rounded-full"></div>
          <p className="text-islamic-primary font-semibold">
            {currentQuote.source}
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
