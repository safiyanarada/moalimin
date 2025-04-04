
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: "Comment fonctionne l'apprentissage sur Moalimin ?",
    answer: "Moalimin combine des cours vidéo, des exercices interactifs et des sessions en direct. Nos programmes sont conçus par des experts en sciences islamiques et utilisent des technologies modernes pour faciliter l'apprentissage et le suivi de la progression."
  },
  {
    question: "Est-ce que Moalimin convient aux débutants en langue arabe ?",
    answer: "Absolument ! Nos cours de langue arabe commencent au niveau débutant et progressent graduellement. L'interface bilingue et les outils d'assistance linguistique facilitent la compréhension même pour les non-arabophones."
  },
  {
    question: "Comment les écoles et mosquées peuvent-elles intégrer Moalimin ?",
    answer: "Nous proposons des formules spéciales pour les institutions avec un tableau de bord administrateur dédié, des rapports de progression pour les groupes, et la possibilité d'intégrer vos propres enseignants. Contactez-nous pour une démonstration personnalisée."
  },
  {
    question: "Comment sont certifiés les enseignants sur la plateforme ?",
    answer: "Tous nos enseignants possèdent des ijazas (certifications traditionnelles) dans leurs domaines d'expertise et passent par un processus de vérification rigoureux. Leurs profils détaillent leurs qualifications et parcours académique."
  },
  {
    question: "Y a-t-il un suivi parental pour les jeunes apprenants ?",
    answer: "Oui, nous proposons un compte parent/tuteur lié qui permet de suivre la progression de l'enfant, de recevoir des rapports réguliers et de communiquer avec les enseignants tout en respectant l'autonomie de l'apprenant."
  },
];

const FaqSection = () => {
  return (
    <section className="py-16 bg-islamic-light/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-islamic-dark islamic-border inline-block pb-2">
            Questions fréquentes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Trouvez des réponses aux questions les plus courantes sur notre plateforme.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-100 rounded-lg px-4">
                <AccordionTrigger className="text-islamic-dark font-medium py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 pt-1">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Vous avez d'autres questions ? <a href="/contact" className="text-islamic-primary hover:underline">Contactez-nous</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
