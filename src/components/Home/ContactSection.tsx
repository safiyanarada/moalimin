
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { initEmailJS, sendContactForm } from '@/services/emailService';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
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
      const result = await sendContactForm({
        ...formData,
        subject: `Demande de contact: ${formData.institution || 'Particulier'}`
      });
      
      toast({
        title: result.success ? "Message envoyé" : "Erreur",
        description: result.message,
      });
      
      if (result.success) {
        setFormData({
          name: '',
          email: '',
          institution: '',
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-islamic-dark islamic-border inline-block pb-2">
            Rejoignez Moalimin
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Vous êtes une école ou une mosquée ? Contactez-nous pour découvrir comment intégrer Moalimin à votre enseignement.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-islamic-light/20 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-islamic-dark">Contactez-nous</h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom" 
                    className="w-full" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                  <Input 
                    id="institution" 
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="Nom de votre institution" 
                    className="w-full" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  placeholder="votre@email.com" 
                  className="w-full" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Comment pouvons-nous vous aider ?" 
                  className="w-full h-32" 
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-islamic-primary hover:bg-islamic-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-islamic-dark">Ce que nous offrons aux institutions</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-islamic-primary/10 p-1 rounded-full">
                    <div className="w-1.5 h-1.5 bg-islamic-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Tableau de bord administrateur personnalisé</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-islamic-primary/10 p-1 rounded-full">
                    <div className="w-1.5 h-1.5 bg-islamic-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Intégration avec vos systèmes existants</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-islamic-primary/10 p-1 rounded-full">
                    <div className="w-1.5 h-1.5 bg-islamic-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Formation pour vos enseignants</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-islamic-primary/10 p-1 rounded-full">
                    <div className="w-1.5 h-1.5 bg-islamic-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Contenu personnalisé selon votre curriculum</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-islamic-primary/10 p-1 rounded-full">
                    <div className="w-1.5 h-1.5 bg-islamic-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Rapports détaillés sur la progression des élèves</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-islamic-primary/10 p-1 rounded-full">
                    <div className="w-1.5 h-1.5 bg-islamic-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Support technique dédié</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-islamic-light rounded-full p-2 mr-4">
                  <Phone className="h-5 w-5 text-islamic-primary" />
                </div>
                <span className="text-gray-600">+33 6 12 34 56 78</span>
              </div>
              <div className="flex items-center">
                <div className="bg-islamic-light rounded-full p-2 mr-4">
                  <Mail className="h-5 w-5 text-islamic-primary" />
                </div>
                <span className="text-gray-600">contact@moalimin.com</span>
              </div>
              <div className="flex items-center">
                <div className="bg-islamic-light rounded-full p-2 mr-4">
                  <MapPin className="h-5 w-5 text-islamic-primary" />
                </div>
                <span className="text-gray-600">15 rue de la Connaissance, 75001 Paris</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
