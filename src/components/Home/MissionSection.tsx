
import React from 'react';
import { BookOpen, GraduationCap, Laptop, Users } from 'lucide-react';

const MissionSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-islamic-primary" />,
      title: "Apprentissage du Coran",
      description: "Mémorisation, tajwid et tafsir avec des méthodes traditionnelles et modernes"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-islamic-primary" />,
      title: "Sciences islamiques",
      description: "Cours structurés en fiqh, aqida, sira et langue arabe"
    },
    {
      icon: <Laptop className="h-8 w-8 text-islamic-primary" />,
      title: "Technologie moderne",
      description: "Outils d'apprentissage interactifs et suivi de progression personnalisé"
    },
    {
      icon: <Users className="h-8 w-8 text-islamic-primary" />,
      title: "Communauté d'apprentissage",
      description: "Échange avec des enseignants qualifiés et autres étudiants"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-islamic-dark islamic-border inline-block pb-2">
            Notre mission
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Moalimin combine tradition et modernité pour offrir une expérience d'apprentissage islamique
            de qualité, adaptée aux besoins des écoles et mosquées du 21e siècle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-islamic-light/20 rounded-lg p-6 flex flex-col items-center text-center">
              <div className="mb-4 bg-islamic-light rounded-full p-3">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-islamic-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
