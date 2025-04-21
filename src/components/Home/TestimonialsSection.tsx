
import React from 'react';

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
};

const Testimonial = ({ quote, name, role }: TestimonialProps) => (
  <div className="flex flex-col bg-white/70 rounded-2xl shadow-lg p-7 border border-blue-100 glassmorphism animate-fade-in">
    <div className="flex-1">
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
    <div className="mt-4">
      <p className="text-[#1EAEDB] font-semibold">{name}</p>
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
    <div className="py-20 bg-gradient-to-r from-[#ecf7fe] via-white to-[#e8f6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-islamic-dark islamic-border-blue inline-block pb-2">
            Témoignages
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
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
