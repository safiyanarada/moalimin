
import React from 'react';
import TeacherLayout from '@/components/teacher/TeacherLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Users, 
  BookOpen, 
  Video, 
  ChevronRight, 
  BookMarked,
  BarChart3,
  User
} from 'lucide-react';

const TeacherDashboard = () => {
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
    <TeacherLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-islamic-dark">{greeting()}, Dr. Ahmed</h1>
            <p className="text-gray-500">Voici un aperçu de votre activité et de vos tâches.</p>
          </div>
          
          <Button className="bg-islamic-primary hover:bg-islamic-primary/90">
            Créer un nouveau cours
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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
        
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Activités récentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-500" />
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
    </TeacherLayout>
  );
};

export default TeacherDashboard;
