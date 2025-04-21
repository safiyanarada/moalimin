
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
  <div className={`rounded-2xl shadow-lg p-8 border border-emerald-100 bg-white/85 glassmorphism backdrop-blur-lg hover:scale-105 transition-all duration-200 animate-fade-in`}>
    <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center mb-4 shadow-md border border-gold/40`}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 text-emerald-900">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link to="/courses" className="text-emerald-600 font-semibold hover:underline hover:opacity-90 inline-flex items-center transition-opacity">
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
      color: "bg-gradient-to-tr from-emerald-500 to-emerald-400"
    },
    {
      title: "Sciences islamiques",
      icon: <FileText className="h-6 w-6 text-white" />,
      description: "Explorez le fiqh, l'aqida et les fondements de la religion avec des cours structurés par niveau.",
      color: "bg-gradient-to-tr from-gold to-emerald-300"
    },
    {
      title: "Langue arabe",
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      description: "Maîtrisez la langue du Coran avec des approches pédagogiques innovantes pour tous niveaux.",
      color: "bg-gradient-to-tr from-emerald-200 to-gold"
    },
    {
      title: "Sessions live",
      icon: <Video className="h-6 w-6 text-white" />,
      description: "Participez à des cours interactifs en direct avec possibilité de poser vos questions aux enseignants.",
      color: "bg-gradient-to-tr from-gold to-emerald-300"
    },
  ];
  return (
    <section className="py-20 bg-white/85">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Ornamental divider */}
        <div className="ornamental-divider" />
        <div className="text-center mb-14">
          <h2 className="section-heading">
            Nos cours
          </h2>
          <p className="section-subheading">
            Une variété de cours pour approfondir votre connaissance de l'Islam et de la langue arabe.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
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
          <Button className="glass bg-gradient-to-br from-emerald-500 via-emerald-400 to-gold shadow-emerald-100/40 shadow-xl hover:from-emerald-700 hover:to-gold px-8 py-4 text-lg font-bold text-white rounded-xl" asChild>
            <Link to="/courses">Voir tous les cours</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default CoursesSection;
