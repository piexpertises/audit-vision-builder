import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'he' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Comprehensive translations object
const translations: Record<Language, Record<string, string>> = {
  he: {
    // Navigation
    'nav.about': 'אודות',
    'nav.security-consulting': 'ייעוץ ביטחוני',
    'nav.mass-events': 'ניהול אירועים המוניים',
    'nav.emergency-prep': 'הערכות לשעת חירום',
    'nav.security-plans': 'כתיבת תוכניות אבטחה',
    'nav.contact': 'צור קשר',
    'nav.phone': '050-730-0720',
    'navigation.whatsapp_message': 'שלום אני מעוניין לקבל פרטים נוספים על השירותים שלכם',
    
    // Hero Section
    'hero.title': 'פאי אקספרטיס',
    'hero.subtitle': 'כתיבת תוכניות אבטחה, ייעוץ ביטחוני וניהול מערך אבטחה',
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
    
    // About Section
    'about.title': 'אודות פאי אקספרטיס',
    'about.founder_title': 'סטיב בלחסן | מייסד ומנהל',
    'about.intro': 'פאי אקספרטיס הוא משרד בוטיק בתחום הביטחון שהוקם בשנת 2016 על ידי סטיב בלחסן, סא"ל במיל\', מנהל בכיר בתחום האירועים תחת כיפת השמים.',
    'about.experience': 'סטיב בלחסן מביא עימו 20 שנה של ניסיון עשיר בביטחון והגנה, עם התמחות בתחומים כמו הגנת העורף, הקמת מערכי חירום, אבטחה מונעת והדרכת ירי ולחימה.',
    'about.education': 'הוא בעל תואר ראשון במדעי החברה והרוח עם התמחות בביטחון והגנת העורף, ובוגר תואר שני במנהל עסקים עם התמחות בניהול משברים ובניית חוסן בארגונים.',
    'about.philosophy': 'ההגדרה שלנו למושג ביטחון היא אנלוגיה למספר היווני π (פאי): כל פרט, קטן ככל שיהיה, חיוני להשלמת התמונה ולהגנה אפקטיבית על המושא המאובטח.',
    
    // Contact Section
    'contact.main_title': 'צור קשר',
    'contact.subtitle': 'מוכנים לשדרג את הביטחון שלכם? צרו קשר עם המומחים שלנו לייעוץ מקצועי.',
    'contact.form_title': 'שלחו לנו הודעה',
    'contact.name': 'שם מלא',
    'contact.phone': 'טלפון',
    'contact.email': 'אימייל',
    'contact.message': 'הודעה',
    'contact.send': 'שלח הודעה',
    'contact.emergency_title': 'זמינים 24/7 למצבי חירום',
    'contact.emergency_desc': 'לעניינים ביטחוניים דחופים, צוות המענה החירום שלנו זמין 24 שעות ביממה.',
    'contact.call_now': 'התקשרו עכשיו',
    'contact.phone_label': '050-730-0720',
    'contact.email_label': 'infos.piexpertises@gmail.com',
    'contact.address': 'מבשרת ציון, ישראל',
    'contact.hours': 'א-ה: 8:00-18:00',
    
    // Page-specific content
    'security_consulting.title': 'ייעוץ ביטחוני מקצועי',
    'security_consulting.subtitle': 'פתרונות ביטחון מותאמים אישית לארגונים ועסקים',
    'mass_events.title': 'ניהול אירועים המוניים',
    'mass_events.subtitle': 'ביטחון מקצועי לאירועים בכל היקף',
    'emergency_prep.title': 'הערכות לשעת חירום',
    'emergency_prep.subtitle': 'מוכנות מקצועית למצבי חירום וביטחון',
    'security_plans.title': 'כתיבת תוכניות אבטחה',
    'security_plans.subtitle': 'תוכניות אבטחה מקצועיות ומותאמות אישית',
    
    // Newspaper Section
    'newspaper.title': 'כתבה בעיתון כלכלי',
    'newspaper.headline': '"פאי אקספרטיס – המומחים שלכם בביטחון"',
    
    // Footer
    'footer.description': 'פאי אקספרטיס הוא משרד בוטיק לייעוץ ביטחוני, הטרור ופתרונות ביטחונים מותאמים אישית.',
    'footer.services_title': 'שירותים',
    'footer.company_title': 'החברה',
    'footer.contact_title': 'צור קשר',
    'footer.rights': 'כל הזכויות שמורות לפאי אקספרטיס',
    'footer.quick_contact': 'קשר מהיר',
    'footer.privacy': 'מדיניות פרטיות',
    'footer.terms': 'תנאי השירות',
    'footer.protected': 'מוגן על ידי פאי אקספרטיס',

    // Form Messages
    'form.required': 'שדה חובה',
    'form.success': 'הודעה נשלחה בהצלחה! נחזור אליכם בקרוב.',
    'form.error': 'שגיאה בשליחת ההודעה. אנא נסו שוב.',
    'form.name_placeholder': 'הכניסו את השם שלכם',
    'form.phone_placeholder': 'הכניסו את הטלפון שלכם',
    'form.email_placeholder': 'הכניסו את האימייל שלכם',
    'form.message_placeholder': 'תארו את הצרכים הביטחוניים שלכם...',

    // Loading Screen
    'loading.text': 'נטען...',
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
    'navigation.whatsapp_message': 'Hello, I would like to receive more information about your services',
    
    // Hero Section
    'hero.title': 'Pi Expertises',
    'hero.subtitle': 'Security plan writing, security consulting and security system management',
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
    
    // About Section
    'about.title': 'About Pi Expertises',
    'about.founder_title': 'Steve Belhasen | Founder and Director',
    'about.intro': 'Pi Expertises is a boutique security consulting firm established in 2016 by Steve Belhasen, Lt. Col. (Ret.), a senior manager in the field of outdoor events.',
    'about.experience': 'Steve Belhasen brings with him 20 years of rich experience in security and defense, specializing in areas such as civil defense, emergency system establishment, preventive security, and firearms and combat training.',
    'about.education': 'He holds a Bachelor\'s degree in Social Sciences and Humanities with a specialization in security and civil defense, and a Master\'s degree in Business Administration with a focus on crisis management and organizational resilience building.',
    'about.philosophy': 'Our definition of security is an analogy to the Greek number π (pi): every detail, no matter how small, is vital to completing the picture and effectively protecting the secured object.',
    
    // Contact Section
    'contact.main_title': 'Contact Us',
    'contact.subtitle': 'Ready to upgrade your security? Contact our experts for professional consultation.',
    'contact.form_title': 'Send us a message',
    'contact.name': 'Full Name',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.emergency_title': 'Available 24/7 for Emergencies',
    'contact.emergency_desc': 'For urgent security matters, our emergency response team is available 24 hours a day.',
    'contact.call_now': 'Call Now',
    'contact.phone_label': '050-730-0720',
    'contact.email_label': 'infos.piexpertises@gmail.com',
    'contact.address': 'Mevaseret Zion, Israel',
    'contact.hours': 'Sun-Thu: 8:00-18:00',
    
    // Page-specific content
    'security_consulting.title': 'Professional Security Consulting',
    'security_consulting.subtitle': 'Customized security solutions for organizations and businesses',
    'mass_events.title': 'Mass Event Management',
    'mass_events.subtitle': 'Professional security for events of all scales',
    'emergency_prep.title': 'Emergency Preparedness',
    'emergency_prep.subtitle': 'Professional readiness for emergency and security situations',
    'security_plans.title': 'Security Plan Writing',
    'security_plans.subtitle': 'Professional and customized security plans',
    
    // Newspaper Section
    'newspaper.title': 'Financial Newspaper Article',
    'newspaper.headline': '"Pi Expertises – Your Security Experts"',
    
    // Footer
    'footer.description': 'Pi Expertises is a boutique firm for security consulting, counter-terrorism and customized security solutions.',
    'footer.services_title': 'Services',
    'footer.company_title': 'Company',
    'footer.contact_title': 'Contact',
    'footer.rights': 'All rights reserved to Pi Expertises',
    'footer.quick_contact': 'Quick Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.protected': 'Protected by Pi Expertises',

    // Form Messages
    'form.required': 'Required field',
    'form.success': 'Message sent successfully! We will get back to you soon.',
    'form.error': 'Error sending message. Please try again.',
    'form.name_placeholder': 'Enter your name',
    'form.phone_placeholder': 'Enter your phone number',
    'form.email_placeholder': 'Enter your email',
    'form.message_placeholder': 'Describe your security needs...',

    // Loading Screen
    'loading.text': 'Loading...',
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
    'navigation.whatsapp_message': 'Bonjour, je souhaiterais recevoir plus d\'informations sur vos services',
    
    // Hero Section
    'hero.title': 'Pi Expertises',
    'hero.subtitle': 'Rédaction de plans de sécurité, conseil en sécurité et gestion de système de sécurité',
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
    
    // About Section
    'about.title': 'À propos de Pi Expertises',
    'about.founder_title': 'Steve Belhasen | Fondateur et Directeur',
    'about.intro': 'Pi Expertises est un cabinet de conseil en sécurité boutique établi en 2016 par Steve Belhasen, Lieutenant-Colonel (Ret.), un gestionnaire senior dans le domaine des événements extérieurs.',
    'about.experience': 'Steve Belhasen apporte avec lui 20 ans d\'expérience riche en sécurité et défense, se spécialisant dans des domaines tels que la défense civile, l\'établissement de systèmes d\'urgence, la sécurité préventive et la formation aux armes à feu et au combat.',
    'about.education': 'Il détient un diplôme de licence en Sciences Sociales et Humaines avec une spécialisation en sécurité et défense civile, et un diplôme de master en Administration des Affaires avec un focus sur la gestion de crise et le renforcement de la résilience organisationnelle.',
    'about.philosophy': 'Notre définition de la sécurité est une analogie au nombre grec π (pi) : chaque détail, aussi petit soit-il, est vital pour compléter l\'image et protéger efficacement l\'objet sécurisé.',
    
    // Contact Section
    'contact.main_title': 'Nous Contacter',
    'contact.subtitle': 'Prêt à améliorer votre sécurité ? Contactez nos experts pour une consultation professionnelle.',
    'contact.form_title': 'Envoyez-nous un message',
    'contact.name': 'Nom Complet',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
    'contact.emergency_title': 'Disponible 24/7 pour les Urgences',
    'contact.emergency_desc': 'Pour les questions de sécurité urgentes, notre équipe d\'intervention d\'urgence est disponible 24 heures sur 24.',
    'contact.call_now': 'Appelez Maintenant',
    'contact.phone_label': '050-730-0720',
    'contact.email_label': 'infos.piexpertises@gmail.com',
    'contact.address': 'Mevaseret Zion, Israël',
    'contact.hours': 'Dim-Jeu: 8:00-18:00',
    
    // Page-specific content
    'security_consulting.title': 'Conseil en Sécurité Professionnel',
    'security_consulting.subtitle': 'Solutions de sécurité personnalisées pour organisations et entreprises',
    'mass_events.title': 'Gestion d\'Événements de Masse',
    'mass_events.subtitle': 'Sécurité professionnelle pour événements de toutes envergures',
    'emergency_prep.title': 'Préparation d\'Urgence',
    'emergency_prep.subtitle': 'Préparation professionnelle pour situations d\'urgence et de sécurité',
    'security_plans.title': 'Rédaction de Plans de Sécurité',
    'security_plans.subtitle': 'Plans de sécurité professionnels et personnalisés',
    
    // Newspaper Section
    'newspaper.title': 'Article de Journal Financier',
    'newspaper.headline': '"Pi Expertises – Vos Experts en Sécurité"',
    
    // Footer
    'footer.description': 'Pi Expertises est un cabinet boutique de conseil en sécurité, anti-terrorisme et solutions de sécurité personnalisées.',
    'footer.services_title': 'Services',
    'footer.company_title': 'Entreprise',
    'footer.contact_title': 'Contact',
    'footer.rights': 'Tous droits réservés à Pi Expertises',
    'footer.quick_contact': 'Contact Rapide',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions de Service',
    'footer.protected': 'Protégé par Pi Expertises',

    // Form Messages
    'form.required': 'Champ requis',
    'form.success': 'Message envoyé avec succès ! Nous vous recontacterons bientôt.',
    'form.error': 'Erreur lors de l\'envoi du message. Veuillez réessayer.',
    'form.name_placeholder': 'Entrez votre nom',
    'form.phone_placeholder': 'Entrez votre numéro de téléphone',
    'form.email_placeholder': 'Entrez votre email',
    'form.message_placeholder': 'Décrivez vos besoins de sécurité...',

    // Loading Screen
    'loading.text': 'Chargement...',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('he'); // Always default to Hebrew

  useEffect(() => {
    // Minimal DOM updates without requestAnimationFrame
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