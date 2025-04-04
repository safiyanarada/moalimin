
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import HeroSection from '@/components/Home/HeroSection';
import FeaturesSection from '@/components/Home/FeaturesSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        
        {/* Call to action section */}
        <section className="py-16 bg-islamic-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Prêt à commencer votre parcours d'apprentissage ?
            </h2>
            <p className="text-islamic-primary-foreground mb-8 max-w-2xl mx-auto">
              Rejoignez Moalimin dès aujourd'hui et découvrez une nouvelle façon d'apprendre les sciences islamiques, la langue arabe et le Coran.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-islamic-primary hover:bg-white/90" size="lg" asChild>
                <Link to="/register">
                  S'inscrire maintenant <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg" asChild>
                <Link to="/for-institutions">
                  Solution pour institutions
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-islamic-dark text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <span className="text-islamic-primary font-amiri font-bold text-xl">م</span>
                  </div>
                  <span className="ml-2 text-xl font-bold">Moalimin</span>
                </div>
                <p className="mt-4 text-gray-300 text-sm">
                  Plateforme d'apprentissage islamique combinant tradition et innovation technologique.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
                <ul className="space-y-2">
                  <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Cours</Link></li>
                  <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">À propos</Link></li>
                  <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                  <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Assistance</h3>
                <ul className="space-y-2">
                  <li><Link to="/support" className="text-gray-300 hover:text-white transition-colors">Centre d'aide</Link></li>
                  <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Confidentialité</Link></li>
                  <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Conditions d'utilisation</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-300">
                  Email: contact@moalimin.com<br />
                  Téléphone: +33 1 23 45 67 89
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} Moalimin. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
