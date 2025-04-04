
import React from 'react';
import { BookOpen, FileText, Video, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

type CourseCardProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
};

const CourseCard = ({ title, icon, description, color }: CourseCardProps) => (
  <div className={`rounded-xl shadow-sm p-6 border border-gray-100 bg-white`}>
    <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-islamic-dark">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link to="/courses" className="text-islamic-primary font-medium hover:underline inline-flex items-center">
      Découvrir <span className="ml-1">→</span>
    </Link>
  </div>
);

const CoursesSection = () => {
  const courseTypes = [
    {
      title: "Cours du Coran",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      description: "Apprentissage du tajwid, méthodes de mémorisation et tafsir détaillé avec des récitateurs reconnus.",
      color: "bg-islamic-primary"
    },
    {
      title: "Sciences islamiques",
      icon: <FileText className="h-6 w-6 text-white" />,
      description: "Explorez le fiqh, l'aqida et les fondements de la religion avec des cours structurés par niveau.",
      color: "bg-green-600"
    },
    {
      title: "Langue arabe",
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      description: "Maîtrisez la langue du Coran avec des approches pédagogiques innovantes pour tous niveaux.",
      color: "bg-blue-600"
    },
    {
      title: "Sessions live",
      icon: <Video className="h-6 w-6 text-white" />,
      description: "Participez à des cours interactifs en direct avec possibilité de poser vos questions aux enseignants.",
      color: "bg-yellow-600"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-islamic-dark islamic-border inline-block pb-2">
            Nos cours
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Une variété de cours pour approfondir votre connaissance de l'Islam et de la langue arabe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseTypes.map((course, index) => (
            <CourseCard 
              key={index} 
              title={course.title} 
              icon={course.icon} 
              description={course.description} 
              color={course.color}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-islamic-primary hover:bg-islamic-primary/90" asChild>
            <Link to="/courses">Voir tous les cours</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
