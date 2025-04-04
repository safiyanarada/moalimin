import React, { useEffect } from 'react';
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
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';
import { initEmailJS, sendPasswordResetEmail } from '@/services/emailService';

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Adresse email invalide' }),
});

const ForgotPassword = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    initEmailJS();
  }, []);
  
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const handleSubmit = async (data: z.infer<typeof forgotPasswordSchema>) => {
    console.log('Forgot password form submitted:', data);
    
    try {
      const result = await sendPasswordResetEmail({ email: data.email });
      
      toast({
        title: result.success ? "Email envoyé" : "Erreur",
        description: result.message,
      });
      
      if (result.success) {
        // Redirection vers la page de connexion après 3 secondes
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur inattendue est survenue. Veuillez réessayer plus tard.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 geometric-pattern">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-6">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-islamic-dark">Mot de passe oublié</h1>
            <p className="text-gray-600 mt-2">
              Entrez votre adresse email pour recevoir un lien de réinitialisation
            </p>
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
              
              <Button type="submit" className="w-full bg-islamic-primary hover:bg-islamic-primary/90">
                Envoyer le lien de réinitialisation
              </Button>
              
              <div className="text-center">
                <Link to="/login" className="inline-flex items-center text-islamic-primary hover:underline">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Retour à la connexion
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
