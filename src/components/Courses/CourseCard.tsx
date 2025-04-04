
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export type CourseProps = {
  id: string;
  title: string;
  description: string;
  category: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  instructorName: string;
  studentsCount: number;
  lessonsCount: number;
  duration: string;
  rating: number;
  imageUrl?: string;
  featured?: boolean;
};

const CourseCard = ({
  id,
  title,
  description,
  category,
  level,
  instructorName,
  studentsCount,
  lessonsCount,
  duration,
  rating,
  imageUrl,
  featured
}: CourseProps) => {
  const levelColorMap = {
    "Débutant": "bg-green-100 text-green-800",
    "Intermédiaire": "bg-blue-100 text-blue-800",
    "Avancé": "bg-purple-100 text-purple-800"
  };
  
  const levelColor = levelColorMap[level];
  
  return (
    <div className={`bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow ${featured ? 'ring-2 ring-islamic-accent' : ''}`}>
      <div className="relative h-48 bg-islamic-primary/20">
        {imageUrl && <img src={imageUrl} alt={title} className="w-full h-full object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-islamic-primary/90 text-white hover:bg-islamic-primary">
            {category}
          </Badge>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-islamic-accent/90 text-islamic-dark hover:bg-islamic-accent">
              Populaire
            </Badge>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-lg text-islamic-dark mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center mb-4">
          <span className={`text-xs px-2 py-1 rounded-full ${levelColor}`}>
            {level}
          </span>
          <div className="flex items-center ml-4">
            <Star className="h-4 w-4 text-islamic-accent fill-islamic-accent" />
            <span className="text-sm ml-1">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{lessonsCount} leçons</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{studentsCount} étudiants</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-sm">
            <span className="text-gray-500">Par </span>
            <span className="font-medium text-islamic-dark">{instructorName}</span>
          </div>
          <Button className="bg-islamic-primary hover:bg-islamic-primary/90" asChild>
            <Link to={`/courses/${id}`}>
              Détails
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
