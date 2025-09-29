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
  return (
    <div className="relative w-full h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
            {React.createElement(services[currentIndex].icon, { 
              className: "h-8 w-8 text-accent" 
            })}
          </div>
          <h3 className="text-2xl font-bold text-foreground">
            {getTitle(services[currentIndex])}
          </h3>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-accent' : 'bg-accent/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export default ServicesCarousel;