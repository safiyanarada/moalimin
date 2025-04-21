
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
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-white via-[#e7f0fd] to-[#f0f9ff]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 geometric-pattern overflow-hidden">
        {/* Background geometric and blurred glass */}
        <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-r from-[#e0f7fa] via-white to-[#e3ecfd] opacity-70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-islamic-dark drop-shadow-lg leading-tight mb-4">
                Apprentissage <span className="text-transparent bg-gradient-to-r from-[#33C3F0] via-[#2563eb] to-[#1EAEDB] bg-clip-text">islamique</span> moderne
              </h1>
              <p className="mt-4 text-xl text-gray-700 max-w-lg mx-auto lg:mx-0 font-medium opacity-95">
                Moalimin combine tradition et innovation pour offrir une expérience d'apprentissage exceptionnelle du Coran, de la langue arabe et des sciences islamiques.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button className="glass focus:ring-4 focus:ring-[#33C3F0]/20 bg-gradient-to-br from-[#33C3F0] to-[#2563eb] shadow-blue-100/60 shadow-xl hover:from-[#2563eb] hover:to-[#33C3F0] text-white border-0 px-8 py-4 text-lg" size="lg" asChild>
                  <Link to="/register">
                    Commencer gratuitement
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" className="glass text-[#2563eb] border-[#33C3F0] hover:bg-[#f5faff] hover:text-[#1EAEDB] px-8 py-4 text-lg font-semibold shadow-md transition-all" size="lg" asChild>
                  <Link to="/courses">
                    Découvrir nos cours
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in delay-75">
              <div className="relative w-full max-w-md">
                {/* Motif de carte principale avec un effet de verre */}
                <div className="absolute -inset-3 bg-gradient-to-br from-[#33C3F0]/20 to-[#1EAEDB]/10 rounded-3xl blur-md"></div>
                <div className="relative bg-white bg-opacity-80 border border-blue-100 p-7 rounded-2xl shadow-xl glassmorphism overflow-hidden">
                  <div className="aspect-video bg-gradient-to-tr from-[#e7f0fd] to-white rounded-xl mb-6 flex items-center justify-center shadow-inner">
                    <span className="text-4xl font-amiri text-islamic-primary drop-shadow-md">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-blue-100 rounded w-3/4"></div>
                    <div className="h-4 bg-blue-200 rounded"></div>
                    <div className="h-4 bg-blue-100 rounded w-5/6"></div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className="w-9 h-9 rounded-full bg-blue-100/70 glassmorphism"></div>
                    <div className="ml-3">
                      <div className="h-3 bg-blue-200 rounded w-24"></div>
                      <div className="h-2 bg-blue-100 rounded w-16 mt-1"></div>
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
