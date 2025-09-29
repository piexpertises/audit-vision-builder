import { useLanguage } from '@/contexts/LanguageContext';
import heTranslations from '@/i18n/he.json';
import enTranslations from '@/i18n/en.json';
import frTranslations from '@/i18n/fr.json';

const translations = {
  he: heTranslations,
  en: enTranslations,
  fr: frTranslations,
};

export const useI18n = () => {
  const { language, setLanguage, isRTL } = useLanguage();
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return { t, language, setLanguage, isRTL };
};