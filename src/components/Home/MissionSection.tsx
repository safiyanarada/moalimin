
import React from 'react';
import { BookOpen, GraduationCap, Laptop, Users } from 'lucide-react';

const MissionSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-emerald-500" />,
      title: "Apprentissage du Coran",
      description: "Mémorisation, tajwid et tafsir avec des méthodes traditionnelles et modernes"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-emerald-500" />,
      title: "Sciences islamiques",
      description: "Cours structurés en fiqh, aqida, sira et langue arabe"
    },
    {
      icon: <Laptop className="h-8 w-8 text-emerald-500" />,
      title: "Technologie moderne",
      description: "Outils d'apprentissage interactifs et suivi de progression personnalisé"
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-500" />,
      title: "Communauté d'apprentissage",
      description: "Échange avec des enseignants qualifiés et autres étudiants"
    }
  ];
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-50 via-white to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Ornamental divider */}
        <div className="ornamental-divider" />
        <div className="text-center mb-14">
          <h2 className="section-heading">
            Notre mission
          </h2>
          <p className="section-subheading">
            Moalimin combine tradition et modernité pour offrir une expérience d'apprentissage islamique
            de qualité, adaptée aux besoins des écoles et mosquées du 21e siècle.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glassmorphism rounded-xl p-7 flex flex-col items-center text-center shadow-lg border border-emerald-100 animate-fade-in hover:scale-105 transition-all duration-200 bg-white/90">
              <div className="mb-5 bg-emerald-50 rounded-full p-3 shadow-sm border border-gold/60">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-emerald-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MissionSection;
