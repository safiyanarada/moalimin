
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Clock, Calendar, User, MoreHorizontal, Plus, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TeacherCourses = () => {
  // Mock data pour les cours
  const activeCourses = [
    {
      id: 1,
      title: "Introduction à l'arabe littéraire",
      category: "Langue arabe",
      students: 22,
      level: "Débutant",
      progress: 65,
      schedule: "Lundi et Jeudi, 14h-15h30",
      lastUpdated: "Il y a 2 jours"
    },
    {
      id: 2,
      title: "Tajwid - Règles avancées",
      category: "Coran",
      students: 15,
      level: "Avancé",
      progress: 40,
      schedule: "Mercredi, 16h-17h30",
      lastUpdated: "Hier"
    },
    {
      id: 3,
      title: "Fiqh des adorations",
      category: "Jurisprudence",
      students: 18,
      level: "Intermédiaire",
      progress: 75,
      schedule: "Mardi et Vendredi, 10h-11h30",
      lastUpdated: "Il y a 3 jours"
    },
    {
      id: 4,
      title: "Mémorisation du Juz' Amma",
      category: "Coran",
      students: 20,
      level: "Tous niveaux",
      progress: 50,
      schedule: "Samedi, 9h-11h",
      lastUpdated: "Aujourd'hui"
    }
  ];

  const archivedCourses = [
    {
      id: 5,
      title: "Introduction aux sciences du Hadith",
      category: "Hadith",
      students: 17,
      level: "Intermédiaire",
      completedOn: "15/01/2023"
    },
    {
      id: 6,
      title: "Grammaire arabe pour débutants",
      category: "Langue arabe",
      students: 25,
      level: "Débutant",
      completedOn: "20/12/2022"
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mes cours</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="h-10 px-4">
            <Search className="h-4 w-4 mr-2" />
            Rechercher
          </Button>
          <Button className="bg-islamic-primary hover:bg-islamic-primary/90 h-10 px-4">
            <Plus className="h-4 w-4 mr-2" />
            Créer un cours
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Input placeholder="Filtrer les cours..." className="w-[250px]" />
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Calendrier des cours
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6 max-w-md">
          <TabsTrigger value="active">Cours actifs</TabsTrigger>
          <TabsTrigger value="draft">Brouillons</TabsTrigger>
          <TabsTrigger value="archived">Archives</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activeCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader className="pb-3 flex flex-row justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2">
                      <CardTitle>{course.title}</CardTitle>
                      <Badge>{course.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Niveau: {course.level}
                    </p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Éditer</DropdownMenuItem>
                      <DropdownMenuItem>Dupliquer</DropdownMenuItem>
                      <DropdownMenuItem>Archiver</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-sm">{course.students} élèves</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-sm">{course.schedule}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progression du programme</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Dernière mise à jour: {course.lastUpdated}
                    </span>
                    <Button size="sm" className="bg-islamic-primary hover:bg-islamic-primary/90">
                      Gérer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="draft">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <BookOpen className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">Aucun brouillon</h3>
            <p className="text-muted-foreground mb-4">
              Vous n'avez pas de cours en brouillon pour le moment.
            </p>
            <Button className="bg-islamic-primary hover:bg-islamic-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Commencer un nouveau cours
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="archived">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {archivedCourses.map((course) => (
              <Card key={course.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">{course.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline">{course.category}</Badge>
                        <span className="text-xs text-muted-foreground">
                          {course.students} élèves
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-4">
                    <p>Niveau: {course.level}</p>
                    <p>Complété le: {course.completedOn}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      Voir les statistiques
                    </Button>
                    <Button variant="outline" size="sm">
                      Restaurer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TeacherCourses;
