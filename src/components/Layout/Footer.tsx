
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-islamic-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-islamic-primary font-amiri font-bold text-xl">م</span>
              </div>
              <span className="ml-2 text-xl font-bold">Moalimin</span>
            </div>
            <p className="text-gray-300 text-sm">
              Plateforme d'apprentissage islamique alliant tradition et modernité pour une éducation de qualité.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white">Accueil</Link></li>
              <li><Link to="/courses" className="hover:text-white">Cours</Link></li>
              <li><Link to="/about" className="hover:text-white">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Nos cours</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/courses/quran" className="hover:text-white">Coran</Link></li>
              <li><Link to="/courses/fiqh" className="hover:text-white">Fiqh</Link></li>
              <li><Link to="/courses/arabic" className="hover:text-white">Langue arabe</Link></li>
              <li><Link to="/courses/sira" className="hover:text-white">Sira</Link></li>
              <li><Link to="/live" className="hover:text-white">Sessions live</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@moalimin.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+33 6 12 34 56 78</span>
              </li>
              <li>
                <Link to="/contact" className="text-islamic-primary hover:text-islamic-primary/80">
                  Formulaire de contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Moalimin. Tous droits réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-400">
            <Link to="/terms" className="hover:text-white">Conditions d'utilisation</Link>
            <Link to="/privacy" className="hover:text-white">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
