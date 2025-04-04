
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

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    }, 10000); // Change quote every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-islamic-primary/5 py-16 geometric-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-islamic-primary/10">
          <p className="text-3xl arabic font-amiri mb-4 leading-relaxed text-islamic-dark">
            {currentQuote.text}
          </p>
          <p className="text-islamic-primary font-semibold">
            {currentQuote.source}
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
