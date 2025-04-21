
import React from 'react';

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
};

const Testimonial = ({ quote, name, role }: TestimonialProps) => (
  <div className="flex flex-col bg-white/70 rounded-2xl shadow-lg p-7 border border-islamic-primary/10 glassmorphism animate-fade-in hover:shadow-xl transition-all duration-300">
    <div className="flex-1">
      <div className="h-8 w-8 text-islamic-secondary mb-4 opacity-60">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.35-1.48 2.46-2.03l-1.9-2.5c-1.19.7-2.34 1.79-3.17 3.03V5c-1.73 1.83-2.69 3.96-2.85 6.05v.05c0 1.23.31 2.31.93 3.23.62.92 1.42 1.63 2.41 2.12.99.49 2.07.74 3.24.74 1.3 0 2.42-.37 3.35-1.11.93-.74 1.39-1.92 1.39-3.54.04-.52-.04-1.04-.15-1.52-.18-.49-.43-.95-.76-1.36-.33-.41-.68-.75-1.06-1.03-.38-.28-.75-.52-1.11-.72-.36-.19-.68-.34-.97-.43l-.9-.28.28.45c.34.54.37 1.18.37 1.69zm9.84-1.54c0-.88-.23-1.62-.69-2.21-.33-.41-.77-.68-1.33-.81-.55-.13-1.07-.14-1.54-.03-.07-.83.13-1.77.8-2.92.54-.84 1.37-1.52 2.48-2.09L18.95 3.7c-1.19.7-2.35 1.79-3.17 3.03V3.5c-1.73 1.83-2.69 3.96-2.85 6.05v.05c0 1.23.31 2.31.93 3.23.62.92 1.42 1.63 2.41 2.12.99.49 2.07.74 3.24.74 1.3 0 2.42-.37 3.35-1.11.93-.74 1.39-1.92 1.39-3.54 0-.52-.04-1.04-.15-1.52-.18-.49-.43-.95-.76-1.36-.33-.41-.68-.75-1.06-1.03-.38-.28-.75-.52-1.11-.72-.36-.19-.68-.34-.97-.43l-.9-.28.28.45c.33.54.36 1.18.36 1.69z" />
        </svg>
      </div>
      <p className="text-gray-600 italic">{quote}</p>
    </div>
    <div className="mt-6 pt-4 border-t border-islamic-primary/10">
      <p className="text-islamic-primary font-semibold">{name}</p>
      <p className="text-gray-500 text-sm">{role}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Moalimin a transformé ma façon d'enseigner le Coran. Les outils pédagogiques et le suivi des élèves sont incroyablement efficaces.",
      name: "Ahmed Benali",
      role: "Enseignant, École Al-Faruq"
    },
    {
      quote: "Grâce à Moalimin, j'ai pu mémoriser la moitié du Coran en moins d'un an. Le système de révision est parfait pour maintenir mes acquis.",
      name: "Fatima Zahra",
      role: "Étudiante, 16 ans"
    },
    {
      quote: "Notre mosquée utilise Moalimin depuis 6 mois et nous avons constaté une hausse significative de l'engagement des jeunes dans l'apprentissage religieux.",
      name: "Ibrahim Touré",
      role: "Imam, Mosquée Assalam"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-r from-islamic-light/80 via-white/90 to-islamic-light/80 arabesque-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-heading">
            Témoignages
          </h2>
          <p className="section-subheading">
            Découvrez comment Moalimin transforme l'apprentissage islamique pour nos utilisateurs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index} 
              quote={testimonial.quote} 
              name={testimonial.name} 
              role={testimonial.role} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
