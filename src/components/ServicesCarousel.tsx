import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Users, AlertTriangle, FileText, Presentation } from 'lucide-react';
const ServicesCarousel = () => {
  const {
    t,
    isRTL
  } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = [{
    key: 'emergency-prep',
    titleHe: 'הערכות לשעת חירום',
    titleEn: 'Emergency Preparedness',
    titleFr: 'Préparation d\'Urgence',
    icon: AlertTriangle
  }, {
    key: 'lectures',
    titleHe: 'הרצאות',
    titleEn: 'Lectures',
    titleFr: 'Conférences',
    icon: Presentation
  }, {
    key: 'security-plans',
    titleHe: 'כתיבת תוכניות אבטחה',
    titleEn: 'Security Plans Writing',
    titleFr: 'Rédaction Plans de Sécurité',
    icon: FileText
  }, {
    key: 'security-consulting',
    titleHe: 'ייעוץ ביטחוני',
    titleEn: 'Security Consulting',
    titleFr: 'Conseil en Sécurité',
    icon: Shield
  }, {
    key: 'mass-events',
    titleHe: 'ניהול אירועים המוניים',
    titleEn: 'Mass Event Management',
    titleFr: 'Gestion Événements de Masse',
    icon: Users
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [services.length]);
  const getTitle = (service: any) => {
    const {
      language
    } = useLanguage();
    switch (language) {
      case 'he':
        return service.titleHe;
      case 'en':
        return service.titleEn;
      case 'fr':
        return service.titleFr;
      default:
        return service.titleHe;
    }
  };
  return;
};
export default ServicesCarousel;