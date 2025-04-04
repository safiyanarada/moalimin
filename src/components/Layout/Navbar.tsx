
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Book, Home, Video, GraduationCap, Info, MessageSquare, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
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
          <div className="hidden md:flex items-center">
            <NavigationMenu className="mr-4">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-islamic-primary">Cours</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-islamic-primary/20 to-islamic-primary/10 p-6 no-underline outline-none focus:shadow-md"
                            href="/courses"
                          >
                            <GraduationCap className="h-6 w-6 text-islamic-primary mb-2" />
                            <div className="mb-2 mt-4 text-lg font-medium text-islamic-dark">
                              Tous nos cours
                            </div>
                            <p className="text-sm leading-tight text-gray-600">
                              Parcourez notre catalogue complet de cours islamiques et de langue arabe
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-islamic-light/50 hover:text-islamic-primary focus:bg-accent focus:text-accent-foreground"
                            href="/courses/quran"
                          >
                            <div className="text-sm font-medium leading-none">Coran</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Tajwid, mémorisation et tafsir
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-islamic-light/50 hover:text-islamic-primary focus:bg-accent focus:text-accent-foreground"
                            href="/courses/arabic"
                          >
                            <div className="text-sm font-medium leading-none">Langue arabe</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Grammaire, vocabulaire et conversation
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-islamic-light/50 hover:text-islamic-primary focus:bg-accent focus:text-accent-foreground"
                            href="/courses/sciences"
                          >
                            <div className="text-sm font-medium leading-none">Sciences islamiques</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Fiqh, aqida et autres disciplines
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-islamic-light/50 hover:text-islamic-primary focus:bg-accent focus:text-accent-foreground"
                            href="/live"
                          >
                            <div className="text-sm font-medium leading-none">Sessions live</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Cours interactifs et événements en direct
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className={`${navigationMenuTriggerStyle()} ${location.pathname === '/about' ? 'bg-accent/50' : ''}`}
                  >
                    À Propos
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/contact" 
                    className={`${navigationMenuTriggerStyle()} ${location.pathname === '/contact' ? 'bg-accent/50' : ''}`}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button variant="outline" className="mr-2" asChild>
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
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="flex items-center text-gray-700 hover:text-islamic-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5 mr-2" />
              Accueil
            </Link>
            <Link 
              to="/courses" 
              className="flex items-center text-gray-700 hover:text-islamic-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Book className="h-5 w-5 mr-2" />
              Cours
            </Link>
            <Link 
              to="/about" 
              className="flex items-center text-gray-700 hover:text-islamic-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Info className="h-5 w-5 mr-2" />
              À Propos
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center text-gray-700 hover:text-islamic-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Contact
            </Link>
            <Link 
              to="/help" 
              className="flex items-center text-gray-700 hover:text-islamic-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <HelpCircle className="h-5 w-5 mr-2" />
              Aide
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 px-4 flex gap-2 flex-col">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>Se Connecter</Link>
            </Button>
            <Button className="bg-islamic-primary hover:bg-islamic-primary/90 w-full" asChild>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>S'inscrire</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
