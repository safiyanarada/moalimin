
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BookOpen, GraduationCap, ArrowRight, Eye, EyeOff } from 'lucide-react';
import Navbar from '@/components/Layout/Navbar';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

type UserType = 'student' | 'teacher' | null;
type RegistrationStep = 'type' | 'info' | 'preferences';

const studentFormSchema = z.object({
  firstName: z.string().min(2, { message: 'Le prénom doit contenir au moins 2 caractères' }),
  lastName: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères' }),
  email: z.string().email({ message: 'Adresse email invalide' }),
  password: z.string().min(8, { message: 'Le mot de passe doit contenir au moins 8 caractères' }),
  birthDate: z.string().refine((value) => {
    const date = new Date(value);
    return !isNaN(date.getTime());
  }, { message: 'Date de naissance invalide' }),
  institution: z.string().optional(),
  arabicLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  interests: z.array(z.string()).min(1, { message: 'Veuillez sélectionner au moins un intérêt' }),
  linkParent: z.boolean().optional(),
  parentEmail: z.string().email({ message: 'Adresse email du parent invalide' }).optional(),
  goal: z.enum(['memorization', 'comprehension', 'both']),
  termsAccepted: z.boolean().refine((value) => value === true, {
    message: 'Vous devez accepter les conditions d\'utilisation',
  }),
});

const teacherFormSchema = z.object({
  firstName: z.string().min(2, { message: 'Le prénom doit contenir au moins 2 caractères' }),
  lastName: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères' }),
  email: z.string().email({ message: 'Adresse email invalide' }),
  password: z.string().min(8, { message: 'Le mot de passe doit contenir au moins 8 caractères' }),
  phone: z.string().min(10, { message: 'Numéro de téléphone invalide' }),
  institutions: z.array(z.string()).min(1, { message: 'Veuillez indiquer au moins une institution' }),
  specialties: z.array(z.string()).min(1, { message: 'Veuillez sélectionner au moins une spécialité' }),
  experience: z.string().min(1, { message: 'Veuillez indiquer vos années d\'expérience' }),
  degrees: z.array(z.string()).optional(),
  subjects: z.array(z.string()).min(1, { message: 'Veuillez sélectionner au moins une matière' }),
  levels: z.array(z.string()).min(1, { message: 'Veuillez sélectionner au moins un niveau' }),
  teachingPreferences: z.array(z.string()).min(1, { message: 'Veuillez sélectionner au moins une préférence' }),
  termsAccepted: z.boolean().refine((value) => value === true, {
    message: 'Vous devez accepter les conditions d\'utilisation',
  }),
});

const Register: React.FC = () => {
  const [userType, setUserType] = useState<UserType>(null);
  const [currentStep, setCurrentStep] = useState<RegistrationStep>('type');
  const [showPassword, setShowPassword] = useState(false);
  const [showParentFields, setShowParentFields] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const studentForm = useForm<z.infer<typeof studentFormSchema>>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      birthDate: '',
      institution: '',
      arabicLevel: 'beginner',
      interests: [],
      linkParent: false,
      parentEmail: '',
      goal: 'both',
      termsAccepted: false,
    },
  });

  const teacherForm = useForm<z.infer<typeof teacherFormSchema>>({
    resolver: zodResolver(teacherFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      institutions: [],
      specialties: [],
      experience: '',
      degrees: [],
      subjects: [],
      levels: [],
      teachingPreferences: [],
      termsAccepted: false,
    },
  });

  const handleSelectUserType = (type: UserType) => {
    setUserType(type);
    setCurrentStep('info');
  };

  const handleStudentSubmit = (data: z.infer<typeof studentFormSchema>) => {
    console.log('Student form submitted:', data);
    
    toast({
      title: "Inscription réussie !",
      description: "Bienvenue sur Moalimin. Vous allez être redirigé vers votre tableau de bord.",
    });
    
    // In a real app, here you would send the data to your backend
    // For now, we'll just simulate a successful registration
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  const handleTeacherSubmit = (data: z.infer<typeof teacherFormSchema>) => {
    console.log('Teacher form submitted:', data);
    
    toast({
      title: "Demande d'inscription soumise",
      description: "Nous examinerons votre demande et vous contacterons prochainement.",
    });
    
    // For teachers, we might want to show a different message as their 
    // registration might require approval
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  const handleParentLinkChange = (checked: boolean) => {
    setShowParentFields(checked);
    if (!checked) {
      studentForm.setValue('parentEmail', '');
    }
  };

  const renderUserTypeSelection = () => (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-islamic-dark text-center mb-8">Créer votre compte Moalimin</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div 
          className={`border border-gray-200 rounded-lg p-6 flex flex-col items-center cursor-pointer transition-all hover:border-islamic-primary hover:shadow-md ${userType === 'student' ? 'border-islamic-primary bg-islamic-light/20' : ''}`}
          onClick={() => setUserType('student')}
        >
          <div className="w-16 h-16 rounded-full bg-islamic-light flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-islamic-primary" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Élève</h2>
          <p className="text-gray-600 text-center mb-4">
            Accédez à des cours interactifs, suivez votre progression et participez à des sessions d'apprentissage.
          </p>
          <ul className="text-sm text-gray-500 space-y-2 mb-4">
            <li className="flex items-center"><div className="w-1 h-1 bg-islamic-primary rounded-full mr-2"></div>Cours vidéo et exercices interactifs</li>
            <li className="flex items-center"><div className="w-1 h-1 bg-islamic-primary rounded-full mr-2"></div>Suivi personnalisé de progression</li>
            <li className="flex items-center"><div className="w-1 h-1 bg-islamic-primary rounded-full mr-2"></div>Sessions live avec des professeurs</li>
          </ul>
        </div>
        
        <div 
          className={`border border-gray-200 rounded-lg p-6 flex flex-col items-center cursor-pointer transition-all hover:border-islamic-primary hover:shadow-md ${userType === 'teacher' ? 'border-islamic-primary bg-islamic-light/20' : ''}`}
          onClick={() => setUserType('teacher')}
        >
          <div className="w-16 h-16 rounded-full bg-islamic-light flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-islamic-primary" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Professeur</h2>
          <p className="text-gray-600 text-center mb-4">
            Créez du contenu éducatif, gérez vos classes et suivez les progrès de vos élèves.
          </p>
          <ul className="text-sm text-gray-500 space-y-2 mb-4">
            <li className="flex items-center"><div className="w-1 h-1 bg-islamic-primary rounded-full mr-2"></div>Outils de création de cours</li>
            <li className="flex items-center"><div className="w-1 h-1 bg-islamic-primary rounded-full mr-2"></div>Suivi détaillé des élèves</li>
            <li className="flex items-center"><div className="w-1 h-1 bg-islamic-primary rounded-full mr-2"></div>Bibliothèque de ressources pédagogiques</li>
          </ul>
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <Button 
          className="bg-islamic-primary hover:bg-islamic-primary/90"
          onClick={() => handleSelectUserType(userType)}
          disabled={userType === null}
        >
          Continuer
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  const renderStudentForm = () => (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-islamic-dark text-center mb-2">Inscription Élève</h1>
      <p className="text-center text-gray-600 mb-8">Créez votre compte pour commencer votre apprentissage</p>
      
      <Form {...studentForm}>
        <form onSubmit={studentForm.handleSubmit(handleStudentSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={studentForm.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez votre prénom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={studentForm.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez votre nom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={studentForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="votre.email@exemple.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={studentForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Créez un mot de passe sécurisé" 
                      {...field} 
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={studentForm.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date de naissance</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={studentForm.control}
            name="institution"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Établissement / Mosquée (optionnel)</FormLabel>
                <FormControl>
                  <Input placeholder="Nom de votre établissement" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={studentForm.control}
            name="arabicLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Niveau en langue arabe</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre niveau" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="beginner">Débutant</SelectItem>
                    <SelectItem value="intermediate">Intermédiaire</SelectItem>
                    <SelectItem value="advanced">Avancé</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={studentForm.control}
            name="goal"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Objectif principal</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="memorization" id="memorization" />
                      <label htmlFor="memorization">Mémorisation du Coran</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comprehension" id="comprehension" />
                      <label htmlFor="comprehension">Compréhension des sciences islamiques</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="both" id="both" />
                      <label htmlFor="both">Les deux</label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={studentForm.control}
            name="linkParent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox 
                    checked={field.value} 
                    onCheckedChange={(checked) => {
                      field.onChange(checked);
                      handleParentLinkChange(checked === true);
                    }} 
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Lier un compte parent/tuteur</FormLabel>
                  <p className="text-sm text-muted-foreground">
                    Recommandé pour les élèves mineurs
                  </p>
                </div>
              </FormItem>
            )}
          />
          
          {showParentFields && (
            <FormField
              control={studentForm.control}
              name="parentEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email du parent/tuteur</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="parent@exemple.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          
          <FormField
            control={studentForm.control}
            name="termsAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    J'accepte les <a href="/terms" className="text-islamic-primary hover:underline">conditions d'utilisation</a> et la <a href="/privacy" className="text-islamic-primary hover:underline">politique de confidentialité</a>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          
          <div className="pt-2 flex justify-between">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setCurrentStep('type')}
            >
              Retour
            </Button>
            <Button type="submit" className="bg-islamic-primary hover:bg-islamic-primary/90">
              S'inscrire
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );

  const renderTeacherForm = () => (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-islamic-dark text-center mb-2">Inscription Professeur</h1>
      <p className="text-center text-gray-600 mb-8">Créez votre compte pour commencer à enseigner</p>
      
      <Form {...teacherForm}>
        <form onSubmit={teacherForm.handleSubmit(handleTeacherSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={teacherForm.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez votre prénom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={teacherForm.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez votre nom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={teacherForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="votre.email@exemple.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={teacherForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Téléphone</FormLabel>
                  <FormControl>
                    <Input placeholder="+33 6 12 34 56 78" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={teacherForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Créez un mot de passe sécurisé" 
                      {...field} 
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={teacherForm.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Années d'expérience</FormLabel>
                <FormControl>
                  <Input type="number" min="0" placeholder="Nombre d'années" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={teacherForm.control}
            name="termsAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    J'accepte les <a href="/terms" className="text-islamic-primary hover:underline">conditions d'utilisation</a> et la <a href="/privacy" className="text-islamic-primary hover:underline">politique de confidentialité</a>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          
          <div className="pt-2 flex justify-between">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setCurrentStep('type')}
            >
              Retour
            </Button>
            <Button type="submit" className="bg-islamic-primary hover:bg-islamic-primary/90">
              Soumettre la demande
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 geometric-pattern">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-6xl bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {currentStep === 'type' && renderUserTypeSelection()}
          {currentStep === 'info' && userType === 'student' && renderStudentForm()}
          {currentStep === 'info' && userType === 'teacher' && renderTeacherForm()}
        </div>
      </main>
    </div>
  );
};

export default Register;
