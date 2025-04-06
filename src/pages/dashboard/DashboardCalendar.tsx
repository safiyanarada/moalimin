
import React, { useState } from 'react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { Calendar as CalendarIcon, Video, FileText, BookOpen, Clock, Filter, MessageSquare, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const DashboardCalendar = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [view, setView] = useState<'day' | 'week' | 'month'>('week');

  // Mock data pour les événements
  const events = [
    {
      id: 1,
      title: "Cours de Tajwid",
      date: new Date(2025, 3, 7, 14, 0), // April 7, 2025 at 14:00
      endTime: "15:30",
      type: "live",
      instructor: "Cheikh Hassan",
      location: "Classe virtuelle",
      description: "Leçon sur les règles de prononciation du Noon saakin et du Tanween"
    },
    {
      id: 2,
      title: "Examen de grammaire arabe",
      date: new Date(2025, 3, 8, 10, 30), // April 8, 2025 at 10:30
      endTime: "12:00",
      type: "exam",
      instructor: "Dr. Ahmed Benali",
      location: "Salle d'examen",
      description: "Test sur les conjugaisons et la syntaxe"
    },
    {
      id: 3,
      title: "Récitation du Coran",
      date: new Date(2025, 3, 8, 16, 0), // April 8, 2025 at 16:00
      endTime: "17:00",
      type: "session",
      instructor: "Cheikh Mohammed Ali",
      location: "Classe virtuelle",
      description: "Récitation et correction du Juz' Amma"
    },
    {
      id: 4,
      title: "Discussion sur les Hadiths",
      date: new Date(2025, 3, 10, 19, 0), // April 10, 2025 at 19:00
      endTime: "20:30",
      type: "discussion",
      instructor: "Dr. Fatima Zahra",
      location: "Forum en ligne",
      description: "Analyse et discussion des Hadiths sur l'éthique"
    },
    {
      id: 5,
      title: "Devoir à rendre: Fiqh",
      date: new Date(2025, 3, 12, 23, 59), // April 12, 2025 at 23:59
      type: "assignment",
      instructor: "Dr. Abdullah Omar",
      description: "Rédaction sur les principes du Fiqh des transactions"
    }
  ];

  const todaysEvents = events.filter(event => 
    event.date.getDate() === date.getDate() && 
    event.date.getMonth() === date.getMonth() && 
    event.date.getFullYear() === date.getFullYear()
  ).sort((a, b) => a.date.getTime() - b.date.getTime());

  const upcomingEvents = events
    .filter(event => event.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 3);

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'live':
        return <Video className="h-4 w-4 text-green-500" />;
      case 'exam':
        return <FileText className="h-4 w-4 text-red-500" />;
      case 'session':
        return <BookOpen className="h-4 w-4 text-blue-500" />;
      case 'discussion':
        return <MessageSquare className="h-4 w-4 text-purple-500" />;
      case 'assignment':
        return <FileText className="h-4 w-4 text-amber-500" />;
      default:
        return <CalendarIcon className="h-4 w-4 text-gray-500" />;
    }
  };

  const getEventTypeBadge = (type: string) => {
    switch (type) {
      case 'live':
        return <Badge className="bg-green-500">Cours live</Badge>;
      case 'exam':
        return <Badge className="bg-red-500">Examen</Badge>;
      case 'session':
        return <Badge className="bg-blue-500">Session</Badge>;
      case 'discussion':
        return <Badge className="bg-purple-500">Discussion</Badge>;
      case 'assignment':
        return <Badge className="bg-amber-500">Devoir</Badge>;
      default:
        return <Badge>Événement</Badge>;
    }
  };

  const formatEventTime = (date: Date, endTime?: string) => {
    const formattedTime = format(date, 'HH:mm');
    return endTime ? `${formattedTime} - ${endTime}` : formattedTime;
  };

  const formatDateHeader = (date: Date) => {
    return format(date, 'EEEE d MMMM yyyy', { locale: fr });
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Calendrier</h1>
          <div className="flex items-center space-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(date, 'PP', { locale: fr })}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(date) => date && setDate(date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Button className="bg-islamic-primary hover:bg-islamic-primary/90">
              Ajouter un rappel
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <Card>
              <div className="p-4 border-b flex justify-between items-center">
                <div>
                  <h2 className="font-semibold">
                    {formatDateHeader(date)}
                  </h2>
                </div>
                <Tabs value={view} onValueChange={(v) => setView(v as 'day' | 'week' | 'month')}>
                  <TabsList>
                    <TabsTrigger value="day">Jour</TabsTrigger>
                    <TabsTrigger value="week">Semaine</TabsTrigger>
                    <TabsTrigger value="month">Mois</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <CardContent className="p-0">
                {todaysEvents.length > 0 ? (
                  <div className="divide-y">
                    {todaysEvents.map(event => (
                      <div key={event.id} className="p-4 hover:bg-muted/50">
                        <div className="flex items-start">
                          <div className="bg-muted rounded-full p-2 mr-3">
                            {getEventTypeIcon(event.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium">{event.title}</h3>
                              {getEventTypeBadge(event.type)}
                            </div>
                            <p className="text-sm text-muted-foreground my-1">
                              {event.type === 'assignment' ? 'À rendre avant ' : ''} 
                              {formatEventTime(event.date, event.endTime)}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {event.instructor} {event.location && `• ${event.location}`}
                            </p>
                            <p className="text-sm mt-2">{event.description}</p>
                            
                            <div className="mt-3 flex justify-end space-x-2">
                              {event.type === 'live' || event.type === 'session' || event.type === 'discussion' ? (
                                <Button size="sm" className="bg-islamic-primary hover:bg-islamic-primary/90">
                                  Rejoindre
                                </Button>
                              ) : event.type === 'assignment' ? (
                                <Button size="sm" className="bg-islamic-primary hover:bg-islamic-primary/90">
                                  Soumettre
                                </Button>
                              ) : null}
                              <Button size="sm" variant="outline">
                                Détails
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-muted-foreground">Aucun événement programmé pour aujourd'hui</p>
                    <Button className="mt-4 bg-islamic-primary hover:bg-islamic-primary/90">
                      Ajouter un événement
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-base">Événements à venir</h3>
                  <Button variant="ghost" size="sm" className="text-sm">
                    Voir tout
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {upcomingEvents.map(event => (
                    <div key={event.id} className="flex items-start space-x-3">
                      <div className="bg-muted rounded-full p-2">
                        {getEventTypeIcon(event.type)}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{event.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {format(event.date, 'EEEE d MMMM', { locale: fr })} • {formatEventTime(event.date, event.endTime)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="w-full mt-4">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Voir le calendrier complet
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-base mb-4">Filtrer par type</h3>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Video className="mr-2 h-4 w-4 text-green-500" />
                    Cours live
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4 text-blue-500" />
                    Sessions de récitation
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4 text-red-500" />
                    Examens
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4 text-amber-500" />
                    Devoirs
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageSquare className="mr-2 h-4 w-4 text-purple-500" />
                    Discussions
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-base mb-4">Calendriers</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="cal-1" defaultChecked />
                    <label htmlFor="cal-1" className="ml-2 text-sm">
                      Cours réguliers
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="cal-2" defaultChecked />
                    <label htmlFor="cal-2" className="ml-2 text-sm">
                      Sessions spéciales
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="cal-3" defaultChecked />
                    <label htmlFor="cal-3" className="ml-2 text-sm">
                      Examens et évaluations
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="cal-4" defaultChecked />
                    <label htmlFor="cal-4" className="ml-2 text-sm">
                      Évènements islamiques
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardCalendar;
