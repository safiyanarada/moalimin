
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, LogIn } from 'lucide-react';

const loginFormSchema = z.object({
  email: z.string().email({ message: 'Adresse email invalide' }),
  password: z.string().min(1, { message: 'Mot de passe requis' }),
  rememberMe: z.boolean().optional().default(false),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const handleSubmit = (data: z.infer<typeof loginFormSchema>) => {
    console.log('Login form submitted:', data);
    
    // Simulation d'une connexion réussie
    toast({
      title: "Connexion réussie !",
      description: "Bienvenue sur Moalimin.",
    });
    
    // Redirection vers le tableau de bord
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 geometric-pattern">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-6">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-islamic-dark">Connexion</h1>
            <p className="text-gray-600 mt-2">Accédez à votre espace personnel</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="votre.email@exemple.com" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mot de passe</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Votre mot de passe" 
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
              
              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Se souvenir de moi</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                <Link to="/forgot-password" className="text-sm text-islamic-primary hover:underline">
                  Mot de passe oublié ?
                </Link>
              </div>
              
              <Button type="submit" className="w-full bg-islamic-primary hover:bg-islamic-primary/90">
                <LogIn className="w-4 h-4 mr-2" />
                Se connecter
              </Button>
              
              <div className="text-center text-sm text-gray-600">
                Vous n'avez pas de compte ?{' '}
                <Link to="/register" className="text-islamic-primary hover:underline">
                  Inscrivez-vous
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default Login;
