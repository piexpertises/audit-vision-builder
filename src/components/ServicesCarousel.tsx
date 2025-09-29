import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Users, AlertTriangle, FileText, Presentation } from 'lucide-react';

const ServicesCarousel = () => {
  const { t, isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      key: 'emergency-prep',
      titleHe: 'הערכות לשעת חירום',
      titleEn: 'Emergency Preparedness',
      titleFr: 'Préparation d\'Urgence',
      icon: AlertTriangle,
    },
    {
      key: 'lectures',
      titleHe: 'הרצאות',
      titleEn: 'Lectures',
      titleFr: 'Conférences',
      icon: Presentation,
    },
    {
      key: 'security-plans',
      titleHe: 'כתיבת תוכניות אבטחה',
      titleEn: 'Security Plans Writing',
      titleFr: 'Rédaction Plans de Sécurité',
      icon: FileText,
    },
    {
      key: 'security-consulting',
      titleHe: 'ייעוץ ביטחוני',
      titleEn: 'Security Consulting',
      titleFr: 'Conseil en Sécurité',
      icon: Shield,
    },
    {
      key: 'mass-events',
      titleHe: 'ניהול אירועים המוניים',
      titleEn: 'Mass Event Management',
      titleFr: 'Gestion Événements de Masse',
      icon: Users,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [services.length]);

  const getTitle = (service: any) => {
    const { language } = useLanguage();
    switch (language) {
      case 'he': return service.titleHe;
      case 'en': return service.titleEn;
      case 'fr': return service.titleFr;
      default: return service.titleHe;
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex space-x-8 animate-carousel">
            {services.concat(services).map((service, index) => {
              const Icon = service.icon;
              const isActive = index % services.length === currentIndex;
              
              return (
                <div
                  key={`${service.key}-${index}`}
                  className={`flex flex-col items-center min-w-[200px] transition-all duration-500 ${
                    isActive ? 'scale-110 opacity-100' : 'scale-90 opacity-70'
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <Icon size={48} className="text-white mb-4 mx-auto" />
                    <h3 className={`text-white font-bold text-center ${isRTL ? 'text-right' : 'text-left'}`}>
                      {getTitle(service)}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;