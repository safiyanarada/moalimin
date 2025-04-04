
import React from 'react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import QuranProgress from '@/components/Dashboard/QuranProgress';
import CoursesList from '@/components/Dashboard/CoursesList';
import { Calendar, Clock, FileText, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
        return <MessageSquare className="h-4 w-4 text-green-500" />;
      case 'exam':
        return <FileText className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="px-8 py-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-islamic-dark">{greeting()}, Youssef</h1>
          <p className="text-gray-500">Bienvenue sur votre espace d'apprentissage.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="col-span-3">
            <CardContent className="p-6">
              <CoursesList />
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <QuranProgress />
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-islamic-dark">À venir</h3>
                  <div className="bg-islamic-primary/10 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-islamic-primary" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-start space-x-3 border-b border-gray-100 pb-3 last:border-0">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
