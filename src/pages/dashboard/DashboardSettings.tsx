
import React from 'react';
import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, UserRoundCheck } from 'lucide-react';

const DashboardSettings = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Paramètres du compte</h1>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">Profil</TabsTrigger>
            <TabsTrigger value="account">Compte</TabsTrigger>
            <TabsTrigger value="preferences">Préférences</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="subscription">Abonnement</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Informations du profil</CardTitle>
                <CardDescription>
                  Modifiez vos informations personnelles et votre photo de profil
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-1/3">
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                        <UserRoundCheck className="h-12 w-12 text-gray-400" />
                      </div>
                      <Button variant="outline" size="sm">
                        Modifier la photo
                      </Button>
                    </div>
                  </div>
                  <div className="w-full sm:w-2/3 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input id="firstName" defaultValue="Youssef" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input id="lastName" defaultValue="El Alaoui" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="username">Nom d'utilisateur</Label>
                      <Input id="username" defaultValue="youssefelalaoui" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Biographie</Label>
                      <Input id="bio" className="h-24" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Informations complémentaires</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="birthdate">Date de naissance</Label>
                      <Input id="birthdate" type="date" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="gender">Genre</Label>
                      <Select>
                        <SelectTrigger id="gender">
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Homme</SelectItem>
                          <SelectItem value="female">Femme</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="country">Pays</Label>
                      <Select>
                        <SelectTrigger id="country">
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fr">France</SelectItem>
                          <SelectItem value="ma">Maroc</SelectItem>
                          <SelectItem value="dz">Algérie</SelectItem>
                          <SelectItem value="tn">Tunisie</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="language">Langue préférée</Label>
                      <Select defaultValue="fr">
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="ar">Arabe</SelectItem>
                          <SelectItem value="en">Anglais</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="arabicLevel">Niveau en langue arabe</Label>
                    <Select>
                      <SelectTrigger id="arabicLevel">
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Débutant</SelectItem>
                        <SelectItem value="intermediate">Intermédiaire</SelectItem>
                        <SelectItem value="advanced">Avancé</SelectItem>
                        <SelectItem value="native">Langue maternelle</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Annuler</Button>
                <Button className="bg-islamic-primary hover:bg-islamic-primary/90">Enregistrer</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Account Tab */}
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres du compte</CardTitle>
                <CardDescription>
                  Gérez votre adresse email et votre mot de passe
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Adresse e-mail</h3>
                  <div className="flex items-center space-x-4">
                    <Input defaultValue="youssef.elalaoui@example.com" className="flex-1" />
                    <Button variant="outline">Modifier</Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Email vérifié <CheckCircle className="inline h-4 w-4 text-green-500 ml-1" />
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Modifier le mot de passe</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Mot de passe actuel</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nouveau mot de passe</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmer le nouveau mot de passe</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-islamic-primary hover:bg-islamic-primary/90">
                      Mettre à jour le mot de passe
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Sécurité du compte</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Authentification à deux facteurs</p>
                        <p className="text-sm text-muted-foreground">
                          Sécurisez votre compte avec l'authentification à deux facteurs
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Sessions actives</p>
                        <p className="text-sm text-muted-foreground">
                          Gérez vos sessions actives sur différents appareils
                        </p>
                      </div>
                      <Button variant="outline">Voir</Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Suppression du compte</h3>
                  <p className="text-sm text-muted-foreground">
                    Supprimer votre compte effacera toutes vos données et ne pourra pas être annulé.
                  </p>
                  <div className="flex justify-end">
                    <Button variant="destructive">
                      Supprimer mon compte
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle>Préférences</CardTitle>
                <CardDescription>
                  Personnalisez votre expérience d'apprentissage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Langue</h3>
                  <div className="space-y-2">
                    <Label htmlFor="interface-language">Langue de l'interface</Label>
                    <Select defaultValue="fr">
                      <SelectTrigger id="interface-language">
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="ar">Arabe</SelectItem>
                        <SelectItem value="en">Anglais</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Affichage</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p>Thème sombre</p>
                        <p className="text-sm text-muted-foreground">
                          Utiliser le thème sombre pour l'interface
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p>Textes larges</p>
                        <p className="text-sm text-muted-foreground">
                          Agrandir la taille du texte pour une meilleure lisibilité
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Apprentissage</h3>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="daily-goal">Objectif quotidien</Label>
                      <Select>
                        <SelectTrigger id="daily-goal">
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="60">1 heure</SelectItem>
                          <SelectItem value="120">2 heures</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p>Rappels d'apprentissage</p>
                        <p className="text-sm text-muted-foreground">
                          Recevoir des notifications pour atteindre vos objectifs
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quran-script">Type de script coranique</Label>
                      <Select defaultValue="hafs">
                        <SelectTrigger id="quran-script">
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hafs">Hafs</SelectItem>
                          <SelectItem value="warsh">Warsh</SelectItem>
                          <SelectItem value="qalun">Qalun</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Annuler</Button>
                <Button className="bg-islamic-primary hover:bg-islamic-primary/90">Enregistrer</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Configurez vos préférences de notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Notifications par e-mail</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p>Cours et sessions</p>
                        <p className="text-sm text-muted-foreground">
                          Notifications pour les sessions live et les nouveaux cours
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p>Rappels de révision</p>
                        <p className="text-sm text-muted-foreground">
                          Rappels pour vos sessions de mémorisation et de révision
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p>Accomplissements</p>
                        <p className="text-sm text-muted-foreground">
                          Notifications quand vous atteignez un objectif
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p>Retours des enseignants</p>
                        <p className="text-sm text-muted-foreground">
                          Notifications pour les commentaires et évaluations
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p>Newsletter</p>
                        <p className="text-sm text-muted-foreground">
                          Actualités et mises à jour mensuelles
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Notifications de l'application</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p>Notifications push</p>
                        <p className="text-sm text-muted-foreground">
                          Activer les notifications dans le navigateur
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p>Sons de notification</p>
                        <p className="text-sm text-muted-foreground">
                          Jouer un son lors de la réception d'une notification
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Fréquence des emails récapitulatifs</h3>
                  <div className="space-y-2">
                    <Select defaultValue="weekly">
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Quotidien</SelectItem>
                        <SelectItem value="weekly">Hebdomadaire</SelectItem>
                        <SelectItem value="monthly">Mensuel</SelectItem>
                        <SelectItem value="none">Aucun</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Annuler</Button>
                <Button className="bg-islamic-primary hover:bg-islamic-primary/90">Enregistrer</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Subscription Tab */}
          <TabsContent value="subscription">
            <Card>
              <CardHeader>
                <CardTitle>Abonnement</CardTitle>
                <CardDescription>
                  Gérez votre abonnement et vos informations de paiement
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-islamic-primary/10 p-4 rounded-lg border border-islamic-primary/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-lg">Formule Premium</h3>
                      <p className="text-sm">Accès complet à tous les cours et fonctionnalités</p>
                    </div>
                    <Badge className="bg-islamic-primary">Actif</Badge>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground">
                      Abonnement mensuel • Prochain paiement le 15/05/2023
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Détails du paiement</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-16 bg-gray-200 rounded mr-3"></div>
                      <div>
                        <p>Carte Visa se terminant par 4242</p>
                        <p className="text-sm text-muted-foreground">Expire en 09/2025</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Modifier
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Historique des paiements</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b">
                      <div>
                        <p>15 Avril 2023</p>
                        <p className="text-sm text-muted-foreground">Formule Premium - Mensuel</p>
                      </div>
                      <p className="font-medium">19,99 €</p>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <div>
                        <p>15 Mars 2023</p>
                        <p className="text-sm text-muted-foreground">Formule Premium - Mensuel</p>
                      </div>
                      <p className="font-medium">19,99 €</p>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <div>
                        <p>15 Février 2023</p>
                        <p className="text-sm text-muted-foreground">Formule Premium - Mensuel</p>
                      </div>
                      <p className="font-medium">19,99 €</p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button variant="outline" size="sm">
                      Voir tout l'historique
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Gestion de l'abonnement</h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full">
                      Changer de formule
                    </Button>
                    <Button variant="outline" className="w-full text-red-500 hover:text-red-600">
                      Annuler l'abonnement
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DashboardSettings;
