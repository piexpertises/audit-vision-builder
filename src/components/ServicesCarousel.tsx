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
    <div className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="h-20 flex items-center justify-center">
            <div className="flex items-center space-x-4 animate-pulse">
              <div className="p-3 bg-white/20 rounded-full">
                {React.createElement(services[currentIndex].icon, { 
                  className: "h-8 w-8 text-white" 
                })}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                {getTitle(services[currentIndex])}
              </h3>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-4">
            {services.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesCarousel;