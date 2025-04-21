
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
    <div className="min-h-screen flex flex-col bg-emerald-gold relative overflow-x-hidden">
      {/* Animated decorative Zellige background */}
      <div className="animated-zellige-bg absolute inset-0 w-full h-full pointer-events-none -z-1" />

      <Navbar />
      {/* Hero Section */}
      <section className="relative py-24 zellige-pattern overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-tr from-emerald-100 via-white to-emerald-50 opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gradient-islamic leading-tight mb-4 drop-shadow-[0_3px_14px_rgba(36,180,134,0.11)]">
                Apprentissage <span className="bg-gradient-to-r from-gold via-emerald-400 to-emerald-500 bg-clip-text text-transparent">islamique</span> moderne
              </h1>
              <p className="mt-4 text-xl text-emerald-900 max-w-lg mx-auto lg:mx-0 font-medium opacity-90">
                Moalimin allie tradition &amp; innovation pour une expérience d'apprentissage exceptionnelle du Coran, de la langue arabe et des sciences islamiques.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button className="glass focus:ring-4 focus:ring-emerald-300/20 bg-gradient-to-br from-emerald-500 via-emerald-400 to-gold shadow-emerald-100/40 shadow-xl hover:from-emerald-600 hover:to-emerald-400 text-white border-0 px-8 py-4 text-lg font-bold tracking-wider rounded-xl animate-scale-in" size="lg" asChild>
                  <Link to="/register">
                    Commencer gratuitement
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" className="glass border-gold text-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 px-8 py-4 text-lg font-semibold shadow-md transition-all rounded-xl animate-scale-in" size="lg" asChild>
                  <Link to="/courses">
                    Découvrir nos cours
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in delay-75">
              <div className="relative w-full max-w-md">
                {/* Decorative gold zellige motif top right */}
                <svg className="absolute -top-10 -right-12 w-28 h-28 opacity-60 pointer-events-none" viewBox="0 0 48 48" fill="none"><path d="M24 1L31.3 16.5L48 18.6L35 30.5L38.5 47L24 38.5L9.5 47L13 30.5L0 18.6L16.7 16.5L24 1Z" fill="#FFD700" fillOpacity="0.10"/></svg>
                <div className="absolute -inset-3 bg-gradient-to-br from-emerald-200/30 to-gold/5 rounded-3xl blur-md"></div>
                <div className="relative bg-white bg-opacity-95 border border-emerald-100 p-7 rounded-2xl shadow-xl glassmorphism overflow-hidden animate-scale-in">
                  <div className="aspect-video bg-gradient-to-tr from-emerald-100 to-white rounded-xl mb-6 flex items-center justify-center shadow-inner">
                    <span className="text-4xl font-amiri text-islamic-primary drop-shadow-md">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-emerald-100 rounded w-3/4"></div>
                    <div className="h-4 bg-emerald-200 rounded"></div>
                    <div className="h-4 bg-emerald-100 rounded w-5/6"></div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className="w-9 h-9 rounded-full bg-emerald-100/70 glassmorphism"></div>
                    <div className="ml-3">
                      <div className="h-3 bg-emerald-200 rounded w-24"></div>
                      <div className="h-2 bg-emerald-100 rounded w-16 mt-1"></div>
                    </div>
                  </div>
                  {/* Ornement gold en bas gauche */}
                  <svg className="absolute -bottom-10 -left-10 w-20 h-20 opacity-40" viewBox="0 0 48 48" fill="none"><path d="M24 1L31.3 16.5L48 18.6L35 30.5L38.5 47L24 38.5L9.5 47L13 30.5L0 18.6L16.7 16.5L24 1Z" fill="#FFD700" fillOpacity="0.17"/></svg>
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
