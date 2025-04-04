
import React from 'react';
import { BookOpen, Video, MessageSquare, BarChart3, Bookmark, Users } from 'lucide-react';

type FeatureProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const Feature = ({ icon: Icon, title, description }: FeatureProps) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="bg-islamic-primary/10 p-3 rounded-full">
      <Icon className="h-6 w-6 text-islamic-primary" />
    </div>
    <h3 className="mt-4 text-lg font-medium text-islamic-dark">{title}</h3>
    <p className="mt-2 text-center text-gray-500">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Cours structurés",
      description: "Apprenez le Coran, l'arabe et les sciences islamiques avec des cours parfaitement structurés et adaptés à votre niveau."
    },
    {
      icon: Video,
      title: "Sessions Live",
      description: "Participez à des sessions interactives en direct avec des enseignants qualifiés pour une expérience d'apprentissage immersive."
    },
    {
      icon: MessageSquare,
      title: "Forums et discussions",
      description: "Échangez avec d'autres apprenants et enseignants dans des espaces de discussion thématiques pour enrichir votre compréhension."
    },
    {
      icon: BarChart3,
      title: "Suivi de progression",
      description: "Visualisez votre progression avec des tableaux de bord personnalisés et des analyses détaillées par compétence."
    },
    {
      icon: Bookmark,
      title: "Mémorisation du Coran",
      description: "Bénéficiez d'outils spécialisés pour faciliter la mémorisation du Coran avec un système de révision espacée."
    },
    {
      icon: Users,
      title: "Communauté d'apprenants",
      description: "Rejoignez une communauté inspirante et motivante d'apprenants partageant les mêmes objectifs spirituels et éducatifs."
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-islamic-dark islamic-border inline-block pb-2">
            Nos Fonctionnalités
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
            Découvrez les outils modernes que nous proposons pour faciliter votre parcours d'apprentissage islamique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
