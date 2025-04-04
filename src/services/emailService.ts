
import emailjs from '@emailjs/browser';

// Initialiser EmailJS avec votre clé publique (à remplacer par votre clé réelle)
// Dans un environnement réel, vous devriez utiliser des variables d'environnement
const EMAILJS_PUBLIC_KEY = "VOTRE_CLE_PUBLIQUE_EMAILJS";
const EMAILJS_SERVICE_ID = "VOTRE_SERVICE_ID";
const EMAILJS_CONTACT_TEMPLATE_ID = "VOTRE_TEMPLATE_CONTACT";
const EMAILJS_PASSWORD_RESET_TEMPLATE_ID = "VOTRE_TEMPLATE_PASSWORD_RESET";

export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  institution?: string;
};

export type PasswordResetData = {
  email: string;
};

export const sendContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_CONTACT_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        institution: data.institution || "Non spécifié"
      }
    );
    
    console.log('Email envoyé avec succès!', response);
    return { 
      success: true, 
      message: "Votre message a été envoyé avec succès! Nous vous répondrons dans les plus brefs délais."
    };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return { 
      success: false, 
      message: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard."
    };
  }
};

export const sendPasswordResetEmail = async (data: PasswordResetData): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_PASSWORD_RESET_TEMPLATE_ID,
      {
        to_email: data.email,
        reset_link: `${window.location.origin}/reset-password?email=${encodeURIComponent(data.email)}&token=PLACEHOLDER_TOKEN`
      }
    );
    
    console.log('Email de réinitialisation envoyé avec succès!', response);
    return { 
      success: true, 
      message: "Si cette adresse est associée à un compte, vous recevrez un lien pour réinitialiser votre mot de passe."
    };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email de réinitialisation:', error);
    return { 
      success: false, 
      message: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer plus tard."
    };
  }
};
