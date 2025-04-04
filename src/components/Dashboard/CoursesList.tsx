
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

type CourseCardProps = {
  id: string;
  title: string;
  category: string;
  progress: number;
  lessons: number;
  duration: string;
  imageUrl: string;
};

const CourseCard = ({ 
  id, 
  title, 
  category, 
  progress, 
  lessons, 
  duration, 
  imageUrl 
}: CourseCardProps) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="relative h-32 bg-islamic-secondary/30">
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-full object-cover" />}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      <div className="absolute bottom-3 left-4">
        <span className="bg-islamic-primary/90 text-white px-2 py-1 rounded-md text-xs">
          {category}
        </span>
      </div>
    </div>
    
    <div className="p-4">
      <h3 className="font-medium text-islamic-dark mb-2">{title}</h3>
      
      <div className="mb-3">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Progression</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-1" />
      </div>
      
      <div className="flex justify-between text-xs text-gray-500 mb-4">
        <div className="flex items-center">
          <BookOpen className="h-3 w-3 mr-1" />
          <span>{lessons} leçons</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          <span>{duration}</span>
        </div>
      </div>
      
      <Button variant="outline" className="w-full text-sm" size="sm" asChild>
        <Link to={`/courses/${id}`}>
          Continuer <ArrowRight className="ml-2 h-3 w-3" />
        </Link>
      </Button>
    </div>
  </div>
);

const CoursesList = () => {
  // Mock courses data
  const courses = [
    {
      id: "1",
      title: "Introduction à l'arabe littéraire",
      category: "Langue arabe",
      progress: 65,
      lessons: 12,
      duration: "6h 30min",
      imageUrl: ""
    },
    {
      id: "2",
      title: "Tafsir Sourate Al-Baqarah",
      category: "Coran",
      progress: 30,
      lessons: 20,
      duration: "10h 15min",
      imageUrl: ""
    },
    {
      id: "3",
      title: "Les fondements du fiqh",
      category: "Fiqh",
      progress: 15,
      lessons: 8,
      duration: "5h 45min",
      imageUrl: ""
    },
    {
      id: "4",
      title: "Perfectionnement en tajwid",
      category: "Coran",
      progress: 80,
      lessons: 15,
      duration: "8h 20min",
      imageUrl: ""
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-islamic-dark">Mes cours en cours</h2>
        <Link to="/dashboard/courses" className="text-islamic-primary text-sm font-medium hover:underline">
          Voir tous
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
