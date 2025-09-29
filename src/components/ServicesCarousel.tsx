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
    <div className="py-12 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {getTitle(service)}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-accent' : 'bg-accent/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesCarousel;