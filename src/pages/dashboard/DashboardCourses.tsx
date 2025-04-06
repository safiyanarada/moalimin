
import React from 'react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Calendar, Video } from 'lucide-react';

const DashboardCourses = () => {
  // Mock data pour les cours
  const activeCourses = [
    {
      id: 1,
      title: "Introduction à l'arabe littéraire",
      category: "Langue arabe",
      instructor: "Dr. Ahmed Benali",
      progress: 65,
      lessons: 12,
      completed: 8,
      duration: "6h 30min",
      nextLesson: "Les verbes arabes - Conjugaison présent"
    },
    {
      id: 2,
      title: "Tafsir Sourate Al-Baqarah",
      category: "Coran",
      instructor: "Cheikh Mohammed Ali",
      progress: 30,
      lessons: 20,
      completed: 6,
      duration: "10h 15min",
      nextLesson: "Versets 142-152: La Direction de la Prière"
    },
    {
      id: 3,
      title: "Les fondements du Fiqh",
      category: "Jurisprudence",
      instructor: "Dr. Fatima Zahra",
      progress: 15,
      lessons: 8,
      completed: 1,
      duration: "5h 45min",
      nextLesson: "Les sources secondaires du droit islamique"
    }
  ];

  const completedCourses = [
    {
      id: 4,
      title: "Introduction au Tajwid",
      category: "Coran",
      instructor: "Cheikh Hassan",
      completionDate: "15/03/2023",
      certificate: true
    },
    {
      id: 5,
      title: "L'éthique islamique",
      category: "Comportement",
      instructor: "Dr. Nour El Houda",
      completionDate: "22/02/2023",
      certificate: true
    }
  ];

  const recommendedCourses = [
    {
      id: 6,
      title: "Histoire des prophètes",
      category: "Histoire islamique",
      instructor: "Prof. Abdullah Omar",
      lessons: 15,
      duration: "8h 20min",
      difficulty: "Débutant",
      rating: 4.8
    },
    {
      id: 7,
      title: "Perfectionnement en récitation",
      category: "Coran",
      instructor: "Cheikh Mohammed Ali",
      lessons: 10,
      duration: "5h 45min",
      difficulty: "Intermédiaire",
      rating: 4.9
    },
    {
      id: 8,
      title: "L'arithmétique selon les savants musulmans",
      category: "Sciences islamiques",
      instructor: "Dr. Ahmed Benali",
      lessons: 12,
      duration: "7h 15min",
      difficulty: "Avancé",
      rating: 4.7
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Mes cours</h1>
          <Button className="bg-islamic-primary hover:bg-islamic-primary/90">
            Explorer le catalogue
          </Button>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="active">Cours actifs</TabsTrigger>
            <TabsTrigger value="completed">Cours terminés</TabsTrigger>
            <TabsTrigger value="recommended">Recommandés</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {activeCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{course.instructor}</p>
                      </div>
                      <Badge>{course.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progression globale</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    
                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        <span>{course.completed}/{course.lessons} leçons</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="bg-muted p-3 rounded-md mb-4">
                      <p className="text-sm font-medium">Prochaine leçon:</p>
                      <p className="text-sm">{course.nextLesson}</p>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-islamic-primary hover:bg-islamic-primary/90">
                        Continuer
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Détails
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedCourses.map((course) => (
                <Card key={course.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{course.title}</h3>
                      <Badge variant="outline">{course.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {course.instructor}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">
                        Complété le {course.completionDate}
                      </span>
                      {course.certificate && (
                        <Button variant="outline" size="sm">
                          Certificat
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recommended">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedCourses.map((course) => (
                <Card key={course.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{course.title}</h3>
                      <Badge variant="outline">{course.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {course.instructor}
                    </p>
                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        <span>{course.lessons} leçons</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm">
                        Difficulté: <span className="font-medium">{course.difficulty}</span>
                      </span>
                      <span className="text-sm">
                        Note: <span className="font-medium">{course.rating}/5</span>
                      </span>
                    </div>
                    <Button className="w-full bg-islamic-primary hover:bg-islamic-primary/90">
                      S'inscrire
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DashboardCourses;
