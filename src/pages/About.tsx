
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import QuoteSection from '@/components/Home/QuoteSection';
import Footer from '@/components/Layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-islamic-primary/10 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-islamic-dark mb-6">Notre Mission</h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Allier tradition et modernité pour transmettre le savoir islamique et la langue arabe à travers une expérience d'apprentissage innovante.
            </p>
          </div>
        </section>
        
        {/* Notre Histoire */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-islamic-dark mb-6">Notre Histoire</h2>
                <p className="text-gray-700 mb-6">
                  Moalimin est né d'une vision simple mais puissante : rendre l'éducation islamique accessible à tous, partout, tout en préservant l'authenticité et la profondeur de cette tradition millénaire.
                </p>
                <p className="text-gray-700 mb-6">
                  Fondée en 2023 par un groupe d'enseignants, d'experts en pédagogie et de développeurs passionnés, notre plateforme combine l'expertise pédagogique traditionnelle avec les technologies modernes pour créer une expérience d'apprentissage unique.
                </p>
                <p className="text-gray-700">
                  Aujourd'hui, nous collaborons avec des écoles et mosquées à travers le monde pour digitaliser leur enseignement tout en préservant leur approche unique et leur authenticité.
                </p>
              </div>
              <div className="bg-islamic-primary/5 p-8 rounded-xl border border-islamic-primary/10 relative overflow-hidden geometric-pattern">
                <div className="relative z-10 bg-white/90 backdrop-blur-sm p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-islamic-dark mb-4">Notre Vision</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-islamic-primary mt-2 mr-3"></div>
                      <p>Faciliter l'accès au savoir islamique authentique pour tous</p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-islamic-primary mt-2 mr-3"></div>
                      <p>Préserver les méthodes d'enseignement traditionnelles tout en intégrant l'innovation pédagogique</p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-islamic-primary mt-2 mr-3"></div>
                      <p>Créer une communauté d'apprenants et d'enseignants connectée et solidaire</p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-islamic-primary mt-2 mr-3"></div>
                      <p>Personnaliser l'apprentissage pour respecter le rythme et le style de chaque élève</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Notre Équipe */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-islamic-dark mb-2 text-center">Notre Équipe</h2>
            <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Une équipe pluridisciplinaire unissant expertise pédagogique, connaissances islamiques et savoir-faire technologique.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Membre 1 */}
              <Card className="border-islamic-primary/10 overflow-hidden">
                <div className="h-48 bg-islamic-primary/20"></div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-1">Dr. Ahmed Benali</h3>
                  <p className="text-islamic-primary font-medium mb-3">Fondateur & Directeur Pédagogique</p>
                  <p className="text-gray-600 text-sm">
                    Docteur en sciences islamiques de l'Université Al-Azhar, avec plus de 20 ans d'expérience dans l'enseignement traditionnel et digital.
                  </p>
                </CardContent>
              </Card>
              
              {/* Membre 2 */}
              <Card className="border-islamic-primary/10 overflow-hidden">
                <div className="h-48 bg-islamic-primary/20"></div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-1">Fatima Zahra</h3>
                  <p className="text-islamic-primary font-medium mb-3">Responsable Développement Pédagogique</p>
                  <p className="text-gray-600 text-sm">
                    Experte en sciences de l'éducation et en pédagogie numérique, spécialisée dans l'apprentissage adaptatif.
                  </p>
                </CardContent>
              </Card>
              
              {/* Membre 3 */}
              <Card className="border-islamic-primary/10 overflow-hidden">
                <div className="h-48 bg-islamic-primary/20"></div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-1">Youssef Lahlou</h3>
                  <p className="text-islamic-primary font-medium mb-3">Responsable Technique & Innovation</p>
                  <p className="text-gray-600 text-sm">
                    Ingénieur en IA et développement web, passionné par l'application des technologies modernes au service de l'éducation islamique.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Nos Valeurs */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-islamic-dark mb-2 text-center">Nos Valeurs</h2>
            <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Les principes qui guident notre approche et notre développement.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Valeur 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-islamic-primary/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-islamic-light flex items-center justify-center mb-4">
                  <span className="text-islamic-primary font-amiri text-xl">١</span>
                </div>
                <h3 className="text-xl font-bold text-islamic-dark mb-2">Authenticité</h3>
                <p className="text-gray-600">
                  Respect des sources traditionnelles et transmission fidèle du savoir islamique.
                </p>
              </div>
              
              {/* Valeur 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-islamic-primary/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-islamic-light flex items-center justify-center mb-4">
                  <span className="text-islamic-primary font-amiri text-xl">٢</span>
                </div>
                <h3 className="text-xl font-bold text-islamic-dark mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Recherche constante de qualité et d'amélioration dans notre contenu et nos méthodes.
                </p>
              </div>
              
              {/* Valeur 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-islamic-primary/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-islamic-light flex items-center justify-center mb-4">
                  <span className="text-islamic-primary font-amiri text-xl">٣</span>
                </div>
                <h3 className="text-xl font-bold text-islamic-dark mb-2">Accessibilité</h3>
                <p className="text-gray-600">
                  Élimination des barrières à l'apprentissage pour tous les profils d'élèves.
                </p>
              </div>
              
              {/* Valeur 4 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-islamic-primary/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-islamic-light flex items-center justify-center mb-4">
                  <span className="text-islamic-primary font-amiri text-xl">٤</span>
                </div>
                <h3 className="text-xl font-bold text-islamic-dark mb-2">Communauté</h3>
                <p className="text-gray-600">
                  Création d'un environnement collaboratif et bienveillant pour progresser ensemble.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Citation coranique */}
        <QuoteSection />
        
        {/* Partenaires */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-islamic-dark mb-2 text-center">Nos Partenaires</h2>
            <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Nous collaborons avec des institutions respectées pour offrir un contenu éducatif de qualité.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Logos de partenaires */}
              <div className="bg-gray-50 h-32 rounded-lg flex items-center justify-center p-4">
                <div className="text-center text-gray-400">Logo Partenaire</div>
              </div>
              <div className="bg-gray-50 h-32 rounded-lg flex items-center justify-center p-4">
                <div className="text-center text-gray-400">Logo Partenaire</div>
              </div>
              <div className="bg-gray-50 h-32 rounded-lg flex items-center justify-center p-4">
                <div className="text-center text-gray-400">Logo Partenaire</div>
              </div>
              <div className="bg-gray-50 h-32 rounded-lg flex items-center justify-center p-4">
                <div className="text-center text-gray-400">Logo Partenaire</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
