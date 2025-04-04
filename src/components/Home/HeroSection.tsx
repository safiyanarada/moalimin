
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const quotes = [
  {
    arabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
    french: "Lis, au nom de ton Seigneur qui a créé",
    source: "Sourate Al-Alaq, verset 1"
  },
  {
    arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    french: "La recherche du savoir est une obligation pour chaque musulman",
    source: "Hadith, Ibn Majah"
  }
];

const HeroSection = () => {
  const [quoteIndex, setQuoteIndex] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const currentQuote = quotes[quoteIndex];
  
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 geometric-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-28">
            <div className="text-center">
              <div className="animate-fade-in mb-8">
                <h2 className="arabic text-3xl sm:text-4xl md:text-5xl font-bold text-islamic-dark mb-4">
                  {currentQuote.arabic}
                </h2>
                <p className="text-xl text-gray-500 italic mb-2">
                  "{currentQuote.french}"
                </p>
                <p className="text-sm text-islamic-accent">
                  {currentQuote.source}
                </p>
              </div>
              
              <h1 className="text-4xl tracking-tight font-extrabold text-islamic-dark sm:text-5xl md:text-6xl">
                <span className="block">Plateforme d'apprentissage</span>
                <span className="block text-islamic-primary mt-1">islamique innovante</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Combinez tradition islamique et technologies modernes pour une expérience d'apprentissage unique. Découvrez notre plateforme LMS dédiée à l'enseignement du Coran, de la langue arabe et des sciences islamiques.
              </p>
              <div className="mt-6 sm:mt-8 flex justify-center">
                <div className="rounded-md shadow">
                  <Button className="bg-islamic-primary hover:bg-islamic-primary/90 text-white px-8 py-3 text-base font-medium rounded-md" asChild>
                    <Link to="/register">
                      Commencer maintenant <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="outline" className="px-8 py-3 text-base font-medium rounded-md" asChild>
                    <Link to="/courses">
                      Découvrir les cours
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;
