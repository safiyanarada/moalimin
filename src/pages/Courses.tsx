
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import CourseCard, { CourseProps } from '@/components/Courses/CourseCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from '@/components/ui/select';
import { Search } from 'lucide-react';

const Courses = () => {
  // Mock courses data
  const courses: CourseProps[] = [
    {
      id: "1",
      title: "Introduction à l'arabe littéraire",
      description: "Apprenez les bases de l'arabe littéraire avec une approche moderne et efficace. Ce cours couvre l'alphabet, la prononciation et les structures grammaticales fondamentales.",
      category: "Langue arabe",
      level: "Débutant",
      instructorName: "Dr. Ahmed Mahmoud",
      studentsCount: 1240,
      lessonsCount: 24,
      duration: "18h 30min",
      rating: 4.8,
      featured: true
    },
    {
      id: "2",
      title: "Tafsir Sourate Al-Baqarah",
      description: "Une analyse approfondie de la plus longue sourate du Coran. Découvrez les enseignements, le contexte historique et les applications contemporaines.",
      category: "Coran",
      level: "Intermédiaire",
      instructorName: "Cheikh Hassan Ali",
      studentsCount: 870,
      lessonsCount: 36,
      duration: "42h 15min",
      rating: 4.9,
      featured: true
    },
    {
      id: "3",
      title: "Les fondements du fiqh",
      description: "Une introduction aux principes fondamentaux du droit islamique. Ce cours explore les sources, la méthodologie et les écoles de pensée juridiques.",
      category: "Fiqh",
      level: "Intermédiaire",
      instructorName: "Dr. Fatima Zahra",
      studentsCount: 650,
      lessonsCount: 18,
      duration: "24h 45min",
      rating: 4.7
    },
    {
      id: "4",
      title: "Perfectionnement en tajwid",
      description: "Améliorez votre récitation du Coran avec ce cours avancé sur les règles de tajwid. Apprenez à réciter avec précision et élégance.",
      category: "Coran",
      level: "Avancé",
      instructorName: "Qari Ibrahim Touré",
      studentsCount: 520,
      lessonsCount: 30,
      duration: "28h 20min",
      rating: 4.9
    },
    {
      id: "5",
      title: "Histoire islamique: l'âge d'or",
      description: "Explorez la période fascinante de l'âge d'or islamique, ses avancées scientifiques, culturelles et ses contributions à la civilisation mondiale.",
      category: "Histoire",
      level: "Débutant",
      instructorName: "Prof. Maryam Hassan",
      studentsCount: 780,
      lessonsCount: 22,
      duration: "26h 10min",
      rating: 4.6
    },
    {
      id: "6",
      title: "Aqida: les fondements de la foi",
      description: "Une exploration détaillée des croyances islamiques fondamentales et de leur importance dans la vie du musulman contemporain.",
      category: "Aqida",
      level: "Débutant",
      instructorName: "Cheikh Youssef Al-Qaradawi",
      studentsCount: 910,
      lessonsCount: 16,
      duration: "20h 40min",
      rating: 4.8
    }
  ];

  const categories = ["Tous", "Langue arabe", "Coran", "Fiqh", "Aqida", "Histoire"];
  const levels = ["Tous", "Débutant", "Intermédiaire", "Avancé"];

  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("Tous");
  const [selectedLevel, setSelectedLevel] = React.useState("Tous");

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "Tous" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-islamic-dark mb-4">Cours disponibles</h1>
            <p className="text-gray-500 max-w-3xl">
              Explorez notre catalogue complet de cours couvrant le Coran, la langue arabe et les sciences islamiques. Filtrez par catégorie ou niveau pour trouver ce qui vous convient.
            </p>
          </div>
          
          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="Rechercher un cours..." 
                  className="pl-10" 
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="w-full sm:w-auto">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full sm:w-auto">
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Niveau" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map(level => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button variant="outline" onClick={() => {
              setSearchTerm("");
              setSelectedCategory("Tous");
              setSelectedLevel("Tous");
            }}>
              Réinitialiser
            </Button>
          </div>
          
          {/* Courses grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))
            ) : (
              <div className="col-span-3 py-12 text-center">
                <p className="text-xl text-gray-500">Aucun cours ne correspond à vos critères.</p>
                <Button 
                  variant="link" 
                  className="mt-2 text-islamic-primary"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("Tous");
                    setSelectedLevel("Tous");
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* Footer component would go here */}
    </div>
  );
};

export default Courses;
