
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BarChart, Search, Filter, UserPlus, CalendarCheck, CheckCircle, Clock, BookOpen, XCircle, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TeacherStudents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const studentData = [
    {
      id: 1,
      name: "Ahmed Bakir",
      email: "ahmed.bakir@example.com",
      attendance: 95,
      progress: 78,
      level: "Intermédiaire",
      lastActive: "Aujourd'hui",
      status: "active",
      classes: ["Arabe littéraire", "Tajwid"]
    },
    {
      id: 2,
      name: "Fatima Zahra",
      email: "fatima.zahra@example.com",
      attendance: 88,
      progress: 65,
      level: "Débutant",
      lastActive: "Il y a 2 jours",
      status: "active",
      classes: ["Introduction à l'arabe", "Coran - Juz' Amma"]
    },
    {
      id: 3,
      name: "Mohammed Riad",
      email: "mohammed.riad@example.com",
      attendance: 75,
      progress: 45,
      level: "Intermédiaire",
      lastActive: "Il y a 1 semaine",
      status: "at-risk",
      classes: ["Fiqh", "Arabe littéraire"]
    },
    {
      id: 4,
      name: "Nour El Houda",
      email: "nour.elhouda@example.com",
      attendance: 98,
      progress: 92,
      level: "Avancé",
      lastActive: "Hier",
      status: "active",
      classes: ["Tajwid avancé", "Mémorisation du Coran"]
    },
    {
      id: 5,
      name: "Karim Benali",
      email: "karim.benali@example.com",
      attendance: 65,
      progress: 35,
      level: "Débutant",
      lastActive: "Il y a 3 semaines",
      status: "inactive",
      classes: ["Introduction à l'arabe"]
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500">Actif</Badge>;
      case 'at-risk':
        return <Badge variant="outline" className="text-amber-500 border-amber-200 bg-amber-50">À risque</Badge>;
      case 'inactive':
        return <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50">Inactif</Badge>;
      default:
        return <Badge variant="outline">Inconnu</Badge>;
    }
  };

  const filteredStudents = studentData.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeStudents = studentData.filter(s => s.status === 'active').length;
  const atRiskStudents = studentData.filter(s => s.status === 'at-risk').length;
  const inactiveStudents = studentData.filter(s => s.status === 'inactive').length;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mes élèves</h1>
        <div className="flex items-center space-x-2">
          <Button className="bg-islamic-primary hover:bg-islamic-primary/90">
            <UserPlus className="h-4 w-4 mr-2" />
            Ajouter un élève
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Élèves actifs</p>
                <p className="text-2xl font-bold">{activeStudents}</p>
              </div>
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Élèves à risque</p>
                <p className="text-2xl font-bold">{atRiskStudents}</p>
              </div>
              <div className="bg-amber-100 p-2 rounded-full">
                <Clock className="h-5 w-5 text-amber-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Élèves inactifs</p>
                <p className="text-2xl font-bold">{inactiveStudents}</p>
              </div>
              <div className="bg-red-100 p-2 rounded-full">
                <XCircle className="h-5 w-5 text-red-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Progression moyenne</p>
                <p className="text-2xl font-bold">67%</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-full">
                <BarChart className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Liste des élèves</CardTitle>
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Rechercher un élève..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[250px]"
              />
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Assiduité</TableHead>
                <TableHead>Progression</TableHead>
                <TableHead>Dernière activité</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{getStatusBadge(student.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{student.attendance}%</span>
                      <Progress value={student.attendance} className="h-2 w-16" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{student.progress}%</span>
                      <Progress value={student.progress} className="h-2 w-16" />
                    </div>
                  </TableCell>
                  <TableCell>{student.lastActive}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Détails</Button>
                      <Button variant="outline" size="sm">Message</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Élèves à suivre</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {studentData
              .filter(student => student.status === 'at-risk' || student.attendance < 70)
              .slice(0, 3)
              .map(student => (
                <div key={student.id} className="border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <User className="h-5 w-5 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">{student.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {student.classes.join(", ")}
                        </p>
                      </div>
                    </div>
                    {getStatusBadge(student.status)}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-sm font-medium mb-1">Assiduité</p>
                      <div className="flex items-center space-x-2">
                        <Progress value={student.attendance} className="h-2 flex-1" />
                        <span className="text-sm font-medium">{student.attendance}%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Progression</p>
                      <div className="flex items-center space-x-2">
                        <Progress value={student.progress} className="h-2 flex-1" />
                        <span className="text-sm font-medium">{student.progress}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-4">
                    <Button variant="outline" size="sm" className="mr-2">
                      <CalendarCheck className="h-4 w-4 mr-2" />
                      Planifier un suivi
                    </Button>
                    <Button size="sm" className="bg-islamic-primary hover:bg-islamic-primary/90">
                      Contacter
                    </Button>
                  </div>
                </div>
              ))
            }
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherStudents;
