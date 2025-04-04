
import React from 'react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import QuranProgress from '@/components/Dashboard/QuranProgress';
import CoursesList from '@/components/Dashboard/CoursesList';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, Clock, FileText, MessageSquare, Bell, BookOpen, Video, Award } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  const upcomingEvents = [
    {
      title: "Cours de Tafsir",
      date: "2023-04-05T14:00:00",
      type: "live"
    },
    {
      title: "Test de grammaire arabe",
      date: "2023-04-07T10:30:00",
      type: "exam"
    },
    {
      title: "Révision du Juz' Amma",
      date: "2023-04-08T16:00:00",
      type: "session"
    }
  ];

  const recentCourses = [
    {
      id: 1,
      title: "Tajwid - Les règles de prononciation",
      progress: 65,
      lastAccessed: "Il y a 2 jours"
    },
    {
      id: 2,
      title: "Arabe - Les bases de la grammaire",
      progress: 30,
      lastAccessed: "Hier"
    },
    {
      id: 3,
      title: "Mémorisation - Sourate Al-Mulk",
      progress: 80,
      lastAccessed: "Aujourd'hui"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Premier pas",
      description: "Compléter votre premier cours",
      achieved: true,
      date: "15/03/2023"
    },
    {
      id: 2,
      title: "Apprenti linguiste",
      description: "Apprendre 50 nouveaux mots arabes",
      achieved: true,
      date: "28/03/2023"
    },
    {
      id: 3,
      title: "Récitateur",
      description: "Mémoriser votre première sourate complète",
      achieved: false,
      progress: 70
    }
  ];

  const notifications = [
    {
      id: 1,
      title: "Nouveau cours disponible",
      message: "Les bases de la langue arabe - Module 2 est maintenant disponible",
      time: "Il y a 2h",
      read: false
    },
    {
      id: 2,
      title: "Rappel de révision",
      message: "N'oubliez pas de réviser la sourate Al-Fatiha pour demain",
      time: "Il y a 5h",
      read: true
    },
    {
      id: 3,
      title: "Commentaire de votre enseignant",
      message: "Dr. Ahmed a commenté votre récente récitation",
      time: "Hier",
      read: true
    }
  ];

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bonjour";
    if (hour < 18) return "Bon après-midi";
    return "Bonsoir";
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'live':
        return <Video className="h-4 w-4 text-green-500" />;
      case 'exam':
        return <FileText className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="px-6 py-6">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-islamic-dark">{greeting()}, Youssef</h1>
              <p className="text-gray-500">Bienvenue sur votre espace d'apprentissage.</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <Bell className="h-[1.2rem] w-[1.2rem]" />
              </Button>
              <Button size="sm" className="bg-islamic-primary hover:bg-islamic-primary/90">
                Reprendre l'apprentissage
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="md:col-span-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Continuer l'apprentissage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCourses.map(course => (
                    <div key={course.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{course.title}</h3>
                        <Badge variant="outline">{course.lastAccessed}</Badge>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-full max-w-md">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Progression</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <Button size="sm" className="bg-islamic-primary hover:bg-islamic-primary/90">Continuer</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <Tabs defaultValue="recommendations">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="recommendations">Recommandations</TabsTrigger>
                  <TabsTrigger value="recent">Activité récente</TabsTrigger>
                  <TabsTrigger value="achievements">Accomplissements</TabsTrigger>
                </TabsList>
                
                <TabsContent value="recommendations" className="mt-6">
                  <CoursesList />
                </TabsContent>
                
                <TabsContent value="recent" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        {notifications.map(notification => (
                          <div key={notification.id} className={`p-4 rounded-lg ${notification.read ? 'bg-gray-50' : 'bg-islamic-light/30'}`}>
                            <div className="flex items-start">
                              <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${notification.read ? 'bg-gray-300' : 'bg-islamic-primary'}`}></div>
                              <div className="flex-1">
                                <h3 className="font-medium">{notification.title}</h3>
                                <p className="text-gray-600 text-sm mt-1">{notification.message}</p>
                                <p className="text-gray-400 text-xs mt-2">{notification.time}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="achievements" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        {achievements.map(achievement => (
                          <div key={achievement.id} className="flex items-start">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${achievement.achieved ? 'bg-islamic-primary' : 'bg-gray-200'}`}>
                              <Award className={`h-6 w-6 ${achievement.achieved ? 'text-white' : 'text-gray-400'}`} />
                            </div>
                            <div className="ml-4 flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-medium">{achievement.title}</h3>
                                {achievement.achieved && (
                                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                                    {achievement.date}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-gray-600 text-sm mt-1">{achievement.description}</p>
                              {!achievement.achieved && (
                                <div className="mt-2">
                                  <div className="flex justify-between text-xs mb-1">
                                    <span>Progression</span>
                                    <span>{achievement.progress}%</span>
                                  </div>
                                  <Progress value={achievement.progress} className="h-2" />
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="space-y-6">
            <QuranProgress />
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>À venir</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-start space-x-3 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <div className="bg-gray-100 rounded-full p-2 mt-1">
                        {getEventIcon(event.type)}
                      </div>
                      <div>
                        <p className="font-medium text-islamic-dark">{event.title}</p>
                        <p className="text-xs text-gray-500">{formatDate(event.date)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Voir le calendrier
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Accès rapide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="flex flex-col items-center py-4 h-auto">
                    <BookOpen className="h-6 w-6 mb-1" />
                    <span className="text-xs">Bibliothèque</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center py-4 h-auto">
                    <MessageSquare className="h-6 w-6 mb-1" />
                    <span className="text-xs">Discussions</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center py-4 h-auto">
                    <FileText className="h-6 w-6 mb-1" />
                    <span className="text-xs">Exercices</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center py-4 h-auto">
                    <Video className="h-6 w-6 mb-1" />
                    <span className="text-xs">Sessions live</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
