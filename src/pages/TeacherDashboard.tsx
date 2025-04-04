
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Users, 
  BookOpen, 
  Video, 
  FileText, 
  ChevronRight, 
  Bell,
  BookMarked,
  BarChart3
} from 'lucide-react';

const TeacherDashboard = () => {
  const [activeView, setActiveView] = useState('overview');

  const upcomingClasses = [
    {
      id: 1,
      title: "Tajwid - Règles de Noon Saakin",
      time: "Aujourd'hui, 14:00",
      students: 18,
      type: "live"
    },
    {
      id: 2,
      title: "Arabe - Conjugaison",
      time: "Demain, 16:30",
      students: 24,
      type: "live"
    },
    {
      id: 3,
      title: "Fiqh - La Prière",
      time: "Mercredi, 10:00",
      students: 15,
      type: "live"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      student: "Ahmed Bakir",
      action: "a complété le devoir",
      subject: "Mémorisation Sourate Al-Mulk",
      time: "Il y a 25 min"
    },
    {
      id: 2,
      student: "Fatima Zahra",
      action: "a posé une question sur",
      subject: "Règles de Tajwid",
      time: "Il y a 1h"
    },
    {
      id: 3,
      student: "Youssef Alaoui",
      action: "a soumis un exercice",
      subject: "Traduction arabe-français",
      time: "Il y a 3h"
    }
  ];

  const classes = [
    {
      id: 1,
      name: "Tajwid Niveau 1",
      students: 22,
      level: "Débutant",
      progress: 65,
      schedule: "Lundi et Jeudi, 14h-15h30"
    },
    {
      id: 2,
      name: "Arabe Littéraire",
      students: 18,
      level: "Intermédiaire",
      progress: 45,
      schedule: "Mardi et Vendredi, 16h-17h30"
    },
    {
      id: 3,
      name: "Fiqh des Adorations",
      students: 15,
      level: "Avancé",
      progress: 80,
      schedule: "Mercredi, 10h-12h"
    },
    {
      id: 4,
      name: "Mémorisation Juz' Amma",
      students: 20,
      level: "Tous niveaux",
      progress: 70,
      schedule: "Samedi, 9h-11h"
    }
  ];

  const pendingTasks = [
    {
      id: 1,
      task: "Corriger les devoirs de Tajwid",
      due: "Aujourd'hui",
      priority: "Haute"
    },
    {
      id: 2,
      task: "Préparer le cours d'arabe de demain",
      due: "Demain",
      priority: "Moyenne"
    },
    {
      id: 3,
      task: "Répondre aux questions du forum",
      due: "Cette semaine",
      priority: "Basse"
    }
  ];

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bonjour";
    if (hour < 18) return "Bon après-midi";
    return "Bonsoir";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-100 fixed inset-y-0 left-0 z-50 flex flex-col">
        <div className="h-16 border-b border-gray-100 flex items-center px-6">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-islamic-primary flex items-center justify-center">
              <span className="text-white font-amiri font-bold text-xl">م</span>
            </div>
            <span className="ml-2 text-xl font-bold text-islamic-dark">Moalimin</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto py-6 px-3">
          <div className="space-y-1">
            <Button 
              variant={activeView === 'overview' ? 'default' : 'ghost'} 
              className={`w-full justify-start ${activeView === 'overview' ? 'bg-islamic-primary' : ''}`}
              onClick={() => setActiveView('overview')}
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              Aperçu
            </Button>
            
            <Button 
              variant={activeView === 'classes' ? 'default' : 'ghost'} 
              className={`w-full justify-start ${activeView === 'classes' ? 'bg-islamic-primary' : ''}`}
              onClick={() => setActiveView('classes')}
            >
              <Users className="mr-2 h-5 w-5" />
              Mes classes
            </Button>
            
            <Button 
              variant={activeView === 'content' ? 'default' : 'ghost'} 
              className={`w-full justify-start ${activeView === 'content' ? 'bg-islamic-primary' : ''}`}
              onClick={() => setActiveView('content')}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Contenu pédagogique
            </Button>
            
            <Button 
              variant={activeView === 'live' ? 'default' : 'ghost'} 
              className={`w-full justify-start ${activeView === 'live' ? 'bg-islamic-primary' : ''}`}
              onClick={() => setActiveView('live')}
            >
              <Video className="mr-2 h-5 w-5" />
              Sessions live
            </Button>
            
            <Button 
              variant={activeView === 'assignments' ? 'default' : 'ghost'} 
              className={`w-full justify-start ${activeView === 'assignments' ? 'bg-islamic-primary' : ''}`}
              onClick={() => setActiveView('assignments')}
            >
              <FileText className="mr-2 h-5 w-5" />
              Devoirs & Évaluations
            </Button>
            
            <Button 
              variant={activeView === 'schedule' ? 'default' : 'ghost'} 
              className={`w-full justify-start ${activeView === 'schedule' ? 'bg-islamic-primary' : ''}`}
              onClick={() => setActiveView('schedule')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Emploi du temps
            </Button>
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-100">
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href="/login">
              <Bell className="mr-2 h-5 w-5" />
              <span>Déconnexion</span>
            </a>
          </Button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="ml-64 flex-1">
        <header className="h-16 bg-white border-b border-gray-100 px-6 flex items-center justify-between">
          <h2 className="text-lg font-medium">Tableau de bord professeur</h2>
          
          <div className="flex items-center space-x-4">
            <Button size="sm" variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <Users className="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Dr. Ahmed Benali</p>
                <p className="text-xs text-gray-500">Professeur</p>
              </div>
            </div>
          </div>
        </header>
        
        <main className="p-6">
          {activeView === 'overview' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-islamic-dark">{greeting()}, Dr. Ahmed</h1>
                  <p className="text-gray-500">Voici un aperçu de votre activité et de vos tâches.</p>
                </div>
                
                <Button className="bg-islamic-primary hover:bg-islamic-primary/90">
                  Créer un nouveau cours
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Élèves actifs</h3>
                      <Users className="h-5 w-5 text-islamic-primary" />
                    </div>
                    <div className="mt-2">
                      <p className="text-3xl font-bold">75</p>
                      <p className="text-sm text-green-600 flex items-center">
                        +12% <span className="text-gray-500 ml-1">depuis le mois dernier</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Cours publiés</h3>
                      <BookMarked className="h-5 w-5 text-islamic-primary" />
                    </div>
                    <div className="mt-2">
                      <p className="text-3xl font-bold">24</p>
                      <p className="text-sm text-gray-500 flex items-center">
                        4 en cours de préparation
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Taux de complétion</h3>
                      <BarChart3 className="h-5 w-5 text-islamic-primary" />
                    </div>
                    <div className="mt-2">
                      <p className="text-3xl font-bold">78%</p>
                      <Progress value={78} className="h-2 mt-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">Prochaines sessions</h3>
                      <Button variant="outline" size="sm">Voir tout</Button>
                    </div>
                    
                    <div className="space-y-4">
                      {upcomingClasses.map((classItem) => (
                        <div key={classItem.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <div className="bg-islamic-light p-2 rounded-full mr-4">
                            {classItem.type === 'live' ? (
                              <Video className="h-5 w-5 text-islamic-primary" />
                            ) : (
                              <BookOpen className="h-5 w-5 text-islamic-primary" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{classItem.title}</h4>
                            <p className="text-sm text-gray-500">{classItem.time} • {classItem.students} élèves</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">Tâches en attente</h3>
                      <Button variant="outline" size="sm">Voir tout</Button>
                    </div>
                    
                    <div className="space-y-4">
                      {pendingTasks.map((task) => (
                        <div key={task.id} className="flex items-start p-3 bg-gray-50 rounded-lg">
                          <input 
                            type="checkbox" 
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-islamic-primary focus:ring-islamic-primary"
                          />
                          <div className="ml-3 flex-1">
                            <h4 className="font-medium">{task.task}</h4>
                            <div className="flex items-center mt-1">
                              <Badge 
                                variant="outline" 
                                className={`mr-2 ${
                                  task.priority === 'Haute' 
                                    ? 'text-red-500 border-red-200 bg-red-50' 
                                    : task.priority === 'Moyenne'
                                      ? 'text-amber-500 border-amber-200 bg-amber-50'
                                      : 'text-blue-500 border-blue-200 bg-blue-50'
                                }`}
                              >
                                {task.priority}
                              </Badge>
                              <span className="text-xs text-gray-500">Échéance: {task.due}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">Activités récentes</h3>
                    <Button variant="outline" size="sm">Voir tout</Button>
                  </div>
                  
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-sm font-medium">{activity.student.substring(0, 2)}</span>
                        </div>
                        <div className="ml-3 flex-1">
                          <p>
                            <span className="font-medium">{activity.student}</span>
                            {' '}{activity.action}{' '}
                            <span className="font-medium">{activity.subject}</span>
                          </p>
                          <span className="text-xs text-gray-500">{activity.time}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          Voir
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeView === 'classes' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-islamic-dark">Mes classes</h1>
                  <p className="text-gray-500">Gérez vos classes et suivez la progression des élèves.</p>
                </div>
                
                <Button className="bg-islamic-primary hover:bg-islamic-primary/90">
                  Créer une nouvelle classe
                </Button>
              </div>
              
              <Tabs defaultValue="active" className="w-full">
                <TabsList>
                  <TabsTrigger value="active">Classes actives</TabsTrigger>
                  <TabsTrigger value="archived">Archives</TabsTrigger>
                </TabsList>
                
                <TabsContent value="active" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {classes.map((classItem) => (
                      <Card key={classItem.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold">{classItem.name}</h3>
                              <div className="flex items-center mt-1">
                                <Badge className="mr-2">{classItem.level}</Badge>
                                <span className="text-sm text-gray-500">{classItem.students} élèves</span>
                              </div>
                            </div>
                            
                            <Button variant="outline" size="sm">Voir détails</Button>
                          </div>
                          
                          <div className="space-y-3">
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium">Progression du programme</span>
                                <span className="text-sm">{classItem.progress}%</span>
                              </div>
                              <Progress value={classItem.progress} className="h-2" />
                            </div>
                            
                            <p className="text-sm text-gray-600">
                              <Calendar className="h-4 w-4 inline mr-1" />
                              {classItem.schedule}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="archived" className="mt-6">
                  <div className="text-center py-12">
                    <p className="text-gray-500">Vous n'avez pas de classes archivées.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
          
          {/* Ajouter d'autres vues ici si nécessaire */}
          {(activeView !== 'overview' && activeView !== 'classes') && (
            <div className="flex items-center justify-center h-[70vh]">
              <div className="text-center">
                <h3 className="text-xl font-medium mb-2">Fonctionnalité en développement</h3>
                <p className="text-gray-500">Cette section sera bientôt disponible.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;
