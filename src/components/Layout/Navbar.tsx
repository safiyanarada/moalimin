
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Book, Home, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-islamic-primary flex items-center justify-center">
                  <span className="text-white font-amiri font-bold text-xl">م</span>
                </div>
                <span className="ml-2 text-xl font-bold text-islamic-dark">Moalimin</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-islamic-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Accueil
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-islamic-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Cours
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-islamic-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              À Propos
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-islamic-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            <Button variant="outline" className="ml-4" asChild>
              <Link to="/login">Se Connecter</Link>
            </Button>
            <Button className="bg-islamic-primary hover:bg-islamic-primary/90" asChild>
              <Link to="/register">S'inscrire</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-islamic-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-islamic-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/courses" 
              className="text-gray-700 hover:text-islamic-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Cours
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-islamic-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              À Propos
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-islamic-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Button variant="outline" className="w-full mb-2" asChild>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>Se Connecter</Link>
                </Button>
              </div>
              <div className="mt-3 w-full">
                <Button className="bg-islamic-primary hover:bg-islamic-primary/90 w-full" asChild>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>S'inscrire</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
