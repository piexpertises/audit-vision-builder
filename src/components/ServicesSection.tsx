import React from 'react';
import { Shield, Users, FileText, BookOpen, AlertTriangle, Lock } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import { useIsMobile } from '@/hooks/use-mobile';

const ServicesSection = () => {
  const { t, isRTL } = useI18n();
  const isMobile = useIsMobile();
  // Always visible on mobile, no animations
  const isVisible = true;

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

  /**
   * Services Section with RTL Support
   * 
   * RTL Handling:
   * - Grid layout automatically reverses in RTL
   * - Text alignment handled by global CSS
   * - Icons and content flow naturally in RTL
   */
  return (
    <section id="services" className="relative py-20 bg-secondary/30" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-background pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isMobile ? '' : 'transition-all duration-1000 animate-slide-up'} opacity-100`}>
          <h2 
            className="font-bold mb-6 text-foreground"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}
          >
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p 
            className="text-muted-foreground leading-relaxed px-4"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
          >
            {t('footer.description')}
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} items-start gap-4 p-4 rounded-lg group ${isMobile ? '' : 'hover-lift transition-all duration-700 animate-staggered-fade'} opacity-100`}
              style={{ animationDelay: isMobile ? '0s' : `${index * 0.1}s` }}
              role="article"
              aria-label={t(service.titleKey)}
            >
              {/* Icon - RTL Support: Position automatically adjusts via flex-row-reverse */}
              <div 
                className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-all duration-300 hover-scale"
                aria-hidden="true"
              >
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              
              {/* Content - RTL Support: Text alignment handled by global CSS */}
              <div className="flex-1 min-w-0">
                <h3 
                  className="font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
                >
                  {t(service.titleKey)}
                </h3>
                <p 
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
                >
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