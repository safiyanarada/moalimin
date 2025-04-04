
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import QuoteSection from '@/components/Home/QuoteSection';
import MissionSection from '@/components/Home/MissionSection';
import CoursesSection from '@/components/Home/CoursesSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import FaqSection from '@/components/Home/FaqSection';
import ContactSection from '@/components/Home/ContactSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-islamic-light py-20 geometric-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-islamic-dark">
                Apprentissage <span className="text-islamic-primary">islamique</span> moderne
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                Moalimin combine tradition et innovation pour offrir une expérience d'apprentissage exceptionnelle du Coran, de la langue arabe et des sciences islamiques.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button className="bg-islamic-primary hover:bg-islamic-primary/90 text-white px-6" size="lg" asChild>
                  <Link to="/register">
                    Commencer gratuitement
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/courses">
                    Découvrir nos cours
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-islamic-primary/10 rounded-xl transform rotate-3"></div>
                <div className="relative bg-white border border-gray-200 p-6 rounded-xl shadow-sm overflow-hidden">
                  <div className="aspect-video bg-gray-100 rounded mb-4 flex items-center justify-center">
                    <span className="text-3xl font-amiri text-islamic-primary">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-islamic-primary/20"></div>
                    <div className="ml-3">
                      <div className="h-3 bg-gray-200 rounded w-24"></div>
                      <div className="h-2 bg-gray-200 rounded w-16 mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <QuoteSection />
      <MissionSection />
      <CoursesSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;
