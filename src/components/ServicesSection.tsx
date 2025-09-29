import React from 'react';
import { Shield, Users, FileText, BookOpen, AlertTriangle, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ServicesSection = () => {
  const { t, isRTL } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const services = [
    {
      icon: Users,
      titleKey: 'services.vip_title',
      descKey: 'services.vip_desc',
    },
    {
      icon: BookOpen,
      titleKey: 'services.consultation_title',
      descKey: 'services.consultation_desc',
    },
    {
      icon: Shield,
      titleKey: 'services.events_title',
      descKey: 'services.events_desc',
    },
    {
      icon: FileText,
      titleKey: 'services.training_title',
      descKey: 'services.training_desc',
    },
    {
      icon: AlertTriangle,
      titleKey: 'services.assessment_title',
      descKey: 'services.assessment_desc',
    },
    {
      icon: Lock,
      titleKey: 'services.security_title',
      descKey: 'services.security_desc',
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('footer.description')}
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-4 group hover-lift transition-all duration-700 ${isVisible ? 'animate-staggered-fade opacity-100' : 'opacity-0 translate-y-5'}`}
              style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-all duration-300 hover-scale">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t(service.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;