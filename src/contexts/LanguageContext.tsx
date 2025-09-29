import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'he' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations: Record<Language, Record<string, string>> = {
  he: {
    // Navigation
    'nav.about': 'אודות',
    'nav.security-consulting': 'ייעוץ ביטחוני',
    'nav.mass-events': 'ניהול אירועים המוניים',
    'nav.emergency-prep': 'היערכות לשעת חירום',
    'nav.security-plans': 'כתיבת תוכניות אבטחה',
    'nav.contact': 'צור קשר',
    'nav.phone': '050-730-0720',
    
    // Hero Section
    'hero.title': 'פאי אקספרטיס',
    'hero.subtitle': 'משרד בוטיק אשר הוקם ב 2016 ע"י סטיב בלחסן מייסד ומנהל',
    'hero.cta': 'צור קשר',
    'hero.learn_more': 'למד עוד',
    
    // Services
    'services.title': 'תחומי ההתמחות שלנו',
    'services.vip_title': 'ייעוץ ביטחוני מקצועי',
    'services.vip_desc': 'לכל תחום, מהעסק הפרטי ועד הגופים הגדולים והרגישים.',
    'services.consultation_title': 'הדרכה ואימון',
    'services.consultation_desc': 'בתחום הביטחון, הטרור וניהול תעשייתי.',
    'services.events_title': 'הגנת העורף',
    'services.events_desc': 'והקמת מערכי חירום.',
    'services.training_title': 'שירותים מותאמים אישית',
    'services.training_desc': 'בתחום הביטחון הפרטי, ולטיפוח תעשייתי.',
    'services.assessment_title': 'הערכות לשעת חירום',
    'services.assessment_desc': 'לאירועים תחת כיפת השמים.',
    'services.security_title': 'כתיבת תוכניות אבטחה',
    'services.security_desc': 'מותאמות לצרכים ולפי הוראות מאובטחות.',
    
    // About
    'about.title': 'צוות המומחים שלנו',
    'about.founder_title': 'סטיב בלחסן | מייסד ומנהל',
    'about.founder_desc': 'פאי אקספרטיס הוא משרד בוטיק בתחום הביטחון הוא בעל תואר שני נושק במדעי היהדות הביטחון שהוקם בשנת 2016 על ידי סטיב וזהות. בלחסן, סא"ל במיל\', מנהל בכיר בתחום בלחסן מביא עימו 20 שנה של ניסיון פתרונות בביטחונים מותאמים אישית האירועים תחת כיפת השמים. עם התמחות בתחום זיהום ודרשנים. את כל הידע הזה הוא מעביר בלחסן ניחן בידע מקצועי, שמיוחד את המטרד כמו הגנת העורף. הקמת מערכי חירום. צוות פאי אקספרטיס, שמיוחד את המטרד אבטחה טובת ותמידות יד ולחיים. הוא להצלחה ומקצועיות ללא פשרה.',
    
    // Contact
    'contact.title': 'ניווט באתר',
    'contact.form_title': 'השאירו פרטים ונחזור אליכם',
    'contact.name': 'שם',
    'contact.phone': 'טלפון',
    'contact.email': 'אימייל',
    'contact.message': 'הודעה',
    'contact.send': 'שלח',
    'contact.info_title': 'צור קשר',
    'contact.phone_label': '050-730-0720',
    'contact.email_label': 'pi.expertises@gmail.com',
    'contact.address': 'מבצע נחשון 8, מבשרת ציון',
    
    // Footer
    'footer.description': 'פאי אקספרטיס הוא משרד בוטיק לייעוץ ביטחוני, הטרור ופתרונות ביטחונים מותאמים אישית.',
    'footer.services_title': 'שירותים',
    'footer.company_title': 'החברה',
    'footer.contact_title': 'צור קשר',
    'footer.rights': 'כל הזכויות שמורות לפאי אקספרטיס',
  },
  
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.security-consulting': 'Security Consulting',
    'nav.mass-events': 'Mass Event Management',
    'nav.emergency-prep': 'Emergency Preparedness',
    'nav.security-plans': 'Security Plans Writing',
    'nav.contact': 'Contact',
    'nav.phone': '050-730-0720',
    
    // Hero Section
    'hero.title': 'Pi Expertises',
    'hero.subtitle': 'Boutique security consulting firm established in 2016 by Steve Belhasen, founder and director',
    'hero.cta': 'Contact Us',
    'hero.learn_more': 'Learn More',
    
    // Services
    'services.title': 'Our Areas of Expertise',
    'services.vip_title': 'Professional Security Consulting',
    'services.vip_desc': 'For all sectors, from private business to large and sensitive organizations.',
    'services.consultation_title': 'Training and Instruction',
    'services.consultation_desc': 'In security, terrorism and industrial management fields.',
    'services.events_title': 'Civil Defense',
    'services.events_desc': 'And establishment of emergency systems.',
    'services.training_title': 'Customized Services',
    'services.training_desc': 'In private security and industrial development.',
    'services.assessment_title': 'Emergency Assessments',
    'services.assessment_desc': 'For outdoor events and activities.',
    'services.security_title': 'Security Program Development',
    'services.security_desc': 'Customized to needs and secure guidelines.',
    
    // About
    'about.title': 'Our Expert Team',
    'about.founder_title': 'Steve Belhasen | Founder and Director',
    'about.founder_desc': 'Pi Expertises is a boutique security consulting firm established in 2016 by Steve Belhasen, Lt. Col. (Ret.), a senior manager in the field of outdoor events. Belhasen brings with him 20 years of experience in customized security solutions and developments. With his knowledge, he leads Pi Expertises team, which specializes in quality security and unwavering professionalism without compromise.',
    
    // Contact
    'contact.title': 'Site Navigation',
    'contact.form_title': 'Leave Details and We\'ll Get Back to You',
    'contact.name': 'Name',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.info_title': 'Contact Us',
    'contact.phone_label': '050-730-0720',
    'contact.email_label': 'pi.expertises@gmail.com',
    'contact.address': 'Mivtza Nahshon 8, Mevaseret Zion',
    
    // Footer
    'footer.description': 'Pi Expertises is a boutique firm for security consulting, counter-terrorism and customized security solutions.',
    'footer.services_title': 'Services',
    'footer.company_title': 'Company',
    'footer.contact_title': 'Contact',
    'footer.rights': 'All rights reserved to Pi Expertises',
  },
  
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.security-consulting': 'Conseil en Sécurité',
    'nav.mass-events': 'Gestion Événements de Masse',
    'nav.emergency-prep': 'Préparation d\'Urgence',
    'nav.security-plans': 'Rédaction Plans de Sécurité',
    'nav.contact': 'Contact',
    'nav.phone': '050-730-0720',
    
    // Hero Section
    'hero.title': 'Pi Expertises',
    'hero.subtitle': 'Cabinet de conseil en sécurité boutique établi en 2016 par Steve Belhasen, fondateur et directeur',
    'hero.cta': 'Nous contacter',
    'hero.learn_more': 'En savoir plus',
    
    // Services
    'services.title': 'Nos Domaines d\'Expertise',
    'services.vip_title': 'Conseil en Sécurité Professionnel',
    'services.vip_desc': 'Pour tous les secteurs, de l\'entreprise privée aux grandes organisations sensibles.',
    'services.consultation_title': 'Formation et Instruction',
    'services.consultation_desc': 'Dans les domaines de la sécurité, du terrorisme et de la gestion industrielle.',
    'services.events_title': 'Défense Civile',
    'services.events_desc': 'Et établissement de systèmes d\'urgence.',
    'services.training_title': 'Services Personnalisés',
    'services.training_desc': 'En sécurité privée et développement industriel.',
    'services.assessment_title': 'Évaluations d\'Urgence',
    'services.assessment_desc': 'Pour les événements et activités en extérieur.',
    'services.security_title': 'Développement de Programmes de Sécurité',
    'services.security_desc': 'Personnalisés selon les besoins et directives sécurisées.',
    
    // About
    'about.title': 'Notre Équipe d\'Experts',
    'about.founder_title': 'Steve Belhasen | Fondateur et Directeur',
    'about.founder_desc': 'Pi Expertises est un cabinet de conseil en sécurité boutique établi en 2016 par Steve Belhasen, Lieutenant-Colonel (Ret.), un gestionnaire senior dans le domaine des événements extérieurs. Belhasen apporte avec lui 20 ans d\'expérience en solutions de sécurité personnalisées et développements. Avec ses connaissances, il dirige l\'équipe Pi Expertises, qui se spécialise dans la sécurité de qualité et le professionnalisme inébranlable sans compromis.',
    
    // Contact
    'contact.title': 'Navigation du Site',
    'contact.form_title': 'Laissez vos Coordonnées et Nous Vous Recontacterons',
    'contact.name': 'Nom',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.info_title': 'Nous Contacter',
    'contact.phone_label': '050-730-0720',
    'contact.email_label': 'pi.expertises@gmail.com',
    'contact.address': 'Mivtza Nahshon 8, Mevaseret Zion',
    
    // Footer
    'footer.description': 'Pi Expertises est un cabinet boutique de conseil en sécurité, anti-terrorisme et solutions de sécurité personnalisées.',
    'footer.services_title': 'Services',
    'footer.company_title': 'Entreprise',
    'footer.contact_title': 'Contact',
    'footer.rights': 'Tous droits réservés à Pi Expertises',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('he');

  useEffect(() => {
    // Set document direction for RTL support
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'he';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}