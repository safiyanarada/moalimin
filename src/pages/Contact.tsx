import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { initEmailJS, sendContactForm } from '@/services/emailService';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await sendContactForm(formData);
      
      toast({
        title: result.success ? "Message envoyé" : "Erreur",
        description: result.message,
      });
      
      if (result.success) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur inattendue est survenue. Veuillez réessayer plus tard.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-islamic-primary/10 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-islamic-dark mb-6">Contactez-nous</h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2 space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-islamic-dark mb-6">Informations</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-islamic-light p-3 rounded-full">
                          <Mail className="h-5 w-5 text-islamic-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Email</h3>
                          <p className="text-gray-600">contact@moalimin.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-islamic-light p-3 rounded-full">
                          <Phone className="h-5 w-5 text-islamic-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Téléphone</h3>
                          <p className="text-gray-600">+33 1 23 45 67 89</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-islamic-light p-3 rounded-full">
                          <MapPin className="h-5 w-5 text-islamic-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Adresse</h3>
                          <p className="text-gray-600">75 Rue de la Connaissance<br />75001 Paris, France</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-islamic-light p-3 rounded-full">
                          <Clock className="h-5 w-5 text-islamic-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Heures d'ouverture</h3>
                          <p className="text-gray-600">Lun - Ven: 9h - 18h<br />Sam: 10h - 15h</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-islamic-dark mb-6">Vous êtes une institution?</h2>
                    <p className="text-gray-600 mb-4">
                      Vous représentez une école ou une mosquée et souhaitez digitaliser votre enseignement? 
                    </p>
                    <Button className="bg-islamic-primary hover:bg-islamic-primary/90 w-full">
                      Demander une démo
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-3">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-islamic-dark mb-6">Envoyez-nous un message</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Nom complet
                          </label>
                          <Input 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            placeholder="Votre nom" 
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                          </label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="votre.email@exemple.com" 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                          Sujet
                        </label>
                        <Input 
                          id="subject" 
                          name="subject" 
                          value={formData.subject} 
                          onChange={handleChange} 
                          placeholder="Sujet de votre message" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                          Message
                        </label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          value={formData.message} 
                          onChange={handleChange} 
                          placeholder="Détaillez votre demande ici..." 
                          rows={6} 
                          required 
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-islamic-primary hover:bg-islamic-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-300 h-96 rounded-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-600">Carte interactive</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-islamic-dark mb-2 text-center">Questions fréquentes</h2>
            <p className="text-gray-600 mb-12 text-center">
              Retrouvez les réponses aux questions les plus courantes.
            </p>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-islamic-dark mb-2">Proposez-vous des cours gratuits ?</h3>
                  <p className="text-gray-600">
                    Oui, nous proposons certains cours et ressources gratuitement. Vous pouvez vous inscrire et accéder à ce contenu sans abonnement.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-islamic-dark mb-2">Comment fonctionne l'abonnement pour les institutions ?</h3>
                  <p className="text-gray-600">
                    Nous proposons des formules spécifiques pour les écoles et mosquées, avec un tarif dégressif selon le nombre d'élèves. Contactez-nous pour obtenir un devis personnalisé.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-islamic-dark mb-2">Puis-je suivre les cours sur mobile ?</h3>
                  <p className="text-gray-600">
                    Absolument ! Notre plateforme est entièrement responsive et optimisée pour tous les appareils : ordinateurs, tablettes et smartphones.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
