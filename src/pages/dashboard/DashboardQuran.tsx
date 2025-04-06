import React, { useState } from 'react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, CheckCircle, Clock, Play, Book, BookMarked, ChevronRight, MessageSquare } from 'lucide-react';

const DashboardQuran = () => {
  const [selectedJuz, setSelectedJuz] = useState(1);
  const [selectedSurah, setSelectedSurah] = useState(1);

  // Mock data pour la progression du Coran
  const quranProgress = {
    memorization: {
      surahs: 12,
      juz: 5,
      verses: 856,
      totalVerses: 6236,
      percentComplete: 14,
    },
    recitation: {
      fluency: 85,
      tajweed: 70,
      makhaarij: 75,
    },
    recent: [
      { 
        surah: "Al-Mulk", 
        juz: 29, 
        verses: "1-30", 
        date: "2023-04-02", 
        percentComplete: 100,
        status: "completed"
      },
      { 
        surah: "Al-Qalam", 
        juz: 29, 
        verses: "1-52", 
        date: "2023-03-28", 
        percentComplete: 80,
        status: "in-progress"
      },
      { 
        surah: "Al-Muzzammil", 
        juz: 29, 
        verses: "1-20", 
        date: "2023-03-25", 
        percentComplete: 45,
        status: "in-progress"
      },
    ],
    currentWeek: [
      { day: "Lundi", status: "completed", pages: 4 },
      { day: "Mardi", status: "completed", pages: 4 },
      { day: "Mercredi", status: "completed", pages: 4 },
      { day: "Jeudi", status: "in-progress", pages: 2 },
      { day: "Vendredi", status: "scheduled", pages: 4 },
      { day: "Samedi", status: "scheduled", pages: 6 },
      { day: "Dimanche", status: "scheduled", pages: 4 },
    ]
  };

  const surahs = [
    { id: 1, name: "Al-Fatiha", arabicName: "الفَاتِحَة", verses: 7, status: "completed" },
    { id: 2, name: "Al-Baqarah", arabicName: "البَقَرَة", verses: 286, status: "in-progress" },
    { id: 3, name: "Ali 'Imran", arabicName: "آل عِمرَان", verses: 200, status: "not-started" },
    { id: 4, name: "An-Nisa", arabicName: "النِّسَاء", verses: 176, status: "not-started" },
    { id: 5, name: "Al-Ma'idah", arabicName: "المَائدة", verses: 120, status: "not-started" },
  ];

  const juzs = [
    { id: 1, name: "Juz 1", arabicName: "الجزء الأول", status: "in-progress", percentComplete: 65 },
    { id: 2, name: "Juz 2", arabicName: "الجزء الثاني", status: "not-started", percentComplete: 0 },
    { id: 3, name: "Juz 3", arabicName: "الجزء الثالث", status: "not-started", percentComplete: 0 },
    { id: 4, name: "Juz 4", arabicName: "الجزء الرابع", status: "not-started", percentComplete: 0 },
    { id: 5, name: "Juz 5", arabicName: "الجزء الخامس", status: "not-started", percentComplete: 0 },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Coran - Mémorisation et Récitation</h1>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Book className="mr-2 h-4 w-4" />
              Mushaf
            </Button>
            <Button className="bg-islamic-primary hover:bg-islamic-primary/90">
              <Play className="mr-2 h-4 w-4" />
              Réciter
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Ma progression</CardTitle>
                <CardDescription>Suivi de votre mémorisation et récitation du Coran</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="text-sm font-medium mb-2">Mémorisation globale</h3>
                    <div className="flex flex-col space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Pourcentage</span>
                        <span className="font-medium">{quranProgress.memorization.percentComplete}%</span>
                      </div>
                      <Progress value={quranProgress.memorization.percentComplete} className="h-2" />
                    </div>
                    <div className="mt-4 space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Sourates:</span>
                        <span>{quranProgress.memorization.surahs}/114</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Juz':</span>
                        <span>{quranProgress.memorization.juz}/30</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Versets:</span>
                        <span>{quranProgress.memorization.verses}/{quranProgress.memorization.totalVerses}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="text-sm font-medium mb-2">Qualité de récitation</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Fluidité</span>
                          <span>{quranProgress.recitation.fluency}%</span>
                        </div>
                        <Progress value={quranProgress.recitation.fluency} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Tajweed</span>
                          <span>{quranProgress.recitation.tajweed}%</span>
                        </div>
                        <Progress value={quranProgress.recitation.tajweed} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Makhaarij</span>
                          <span>{quranProgress.recitation.makhaarij}%</span>
                        </div>
                        <Progress value={quranProgress.recitation.makhaarij} className="h-2" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="text-sm font-medium mb-2">Programme hebdomadaire</h3>
                    <div className="space-y-2">
                      {quranProgress.currentWeek.map((day) => (
                        <div key={day.day} className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div 
                              className={`w-3 h-3 rounded-full mr-2 ${
                                day.status === 'completed' ? 'bg-green-500' : 
                                day.status === 'in-progress' ? 'bg-amber-500' : 'bg-gray-300'
                              }`}
                            />
                            <span className="text-sm">{day.day}</span>
                          </div>
                          <span className="text-sm">{day.pages} pages</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm">
                        <span>Pages cette semaine:</span>
                        <span>14/28</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-medium mb-4">Révision récente</h3>
                <div className="space-y-4">
                  {quranProgress.recent.map((item, index) => (
                    <div key={index} className="bg-muted/50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h4 className="font-medium">Sourate {item.surah}</h4>
                          <p className="text-sm text-muted-foreground">
                            Juz' {item.juz} • Versets {item.verses}
                          </p>
                        </div>
                        <Badge 
                          variant={item.status === 'completed' ? 'default' : 'outline'}
                          className={item.status === 'completed' ? 'bg-green-500' : ''}
                        >
                          {item.status === 'completed' ? 'Complété' : 'En cours'}
                        </Badge>
                      </div>
                      {item.status === 'in-progress' && (
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progression</span>
                            <span>{item.percentComplete}%</span>
                          </div>
                          <Progress value={item.percentComplete} className="h-1.5" />
                        </div>
                      )}
                      <div className="mt-3 flex justify-end space-x-2">
                        {item.status === 'in-progress' && (
                          <Button size="sm" className="bg-islamic-primary hover:bg-islamic-primary/90">
                            Continuer
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          Réviser
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Plan de révision</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-islamic-primary/10 flex items-center justify-center mr-3">
                        <BookOpen className="h-5 w-5 text-islamic-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Aujourd'hui</p>
                        <p className="text-sm text-muted-foreground">4 pages</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Voir
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                        <Clock className="h-5 w-5 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium">Demain</p>
                        <p className="text-sm text-muted-foreground">4 pages</p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" disabled>
                      Voir
                    </Button>
                  </div>

                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      Voir le calendrier complet
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Sessions avec l'enseignant</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="bg-muted p-3 rounded-md">
                    <p className="font-medium text-sm">Session de récitation</p>
                    <p className="text-xs text-muted-foreground mb-2">Demain, 14:00</p>
                    <div className="flex justify-end">
                      <Button size="sm" variant="outline" className="text-xs">Rejoindre</Button>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-3 rounded-md">
                    <p className="font-medium text-sm">Correction individuelle</p>
                    <p className="text-xs text-muted-foreground mb-2">Vendredi, 16:30</p>
                    <div className="flex justify-end">
                      <Button size="sm" variant="outline" className="text-xs">Voir</Button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      Planifier une session
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Ressources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <BookMarked className="h-4 w-4 mr-2" />
                    Règles de Tajwid
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Play className="h-4 w-4 mr-2" />
                    Audio des sourates
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Book className="h-4 w-4 mr-2" />
                    Guides d'apprentissage
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="surahs" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="surahs">Par Sourates</TabsTrigger>
            <TabsTrigger value="juz">Par Juz'</TabsTrigger>
          </TabsList>
          
          <TabsContent value="surahs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {surahs.map((surah) => (
                <Card 
                  key={surah.id} 
                  className={`cursor-pointer hover:border-islamic-primary transition-colors ${
                    selectedSurah === surah.id ? 'border-islamic-primary' : ''
                  }`}
                  onClick={() => setSelectedSurah(surah.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{surah.name}</p>
                        <p className="text-sm text-muted-foreground">{surah.verses} versets</p>
                      </div>
                      <div className="arabic text-right">
                        <p className="text-lg">{surah.arabicName}</p>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <Badge 
                        variant={surah.status === 'completed' ? 'default' : 'outline'}
                        className={`
                          ${surah.status === 'completed' ? 'bg-green-500 hover:bg-green-500' : ''}
                          ${surah.status === 'in-progress' ? 'text-amber-500 border-amber-200 bg-amber-50' : ''}
                        `}
                      >
                        {surah.status === 'completed' ? 'Mémorisée' : 
                         surah.status === 'in-progress' ? 'En cours' : 'Non commencée'}
                      </Badge>
                      
                      <Button size="sm" variant="ghost">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="juz">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {juzs.map((juz) => (
                <Card 
                  key={juz.id} 
                  className={`cursor-pointer hover:border-islamic-primary transition-colors ${
                    selectedJuz === juz.id ? 'border-islamic-primary' : ''
                  }`}
                  onClick={() => setSelectedJuz(juz.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{juz.name}</p>
                        <p className="text-sm text-muted-foreground">Partie {juz.id}/30</p>
                      </div>
                      <div className="arabic text-right">
                        <p className="text-lg">{juz.arabicName}</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progression</span>
                        <span>{juz.percentComplete}%</span>
                      </div>
                      <Progress value={juz.percentComplete} className="h-1.5" />
                    </div>
                    <div className="mt-2 flex justify-end">
                      <Button 
                        size="sm" 
                        className={juz.percentComplete > 0 ? "bg-islamic-primary hover:bg-islamic-primary/90" : ""}
                        variant={juz.percentComplete > 0 ? "default" : "outline"}
                      >
                        {juz.percentComplete > 0 ? 'Continuer' : 'Commencer'}
                      </Button>
                    </div>
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

export default DashboardQuran;
