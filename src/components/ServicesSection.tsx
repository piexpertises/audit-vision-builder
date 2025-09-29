import React from 'react';
import { Shield, Users, FileText, BookOpen, AlertTriangle, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t, isRTL } = useLanguage();

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
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            <div key={index} className="flex items-start gap-4 group">
              {/* Icon */}
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card-security p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Secure Your Business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us today for a professional security consultation tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:050-730-0720"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300"
              >
                Call Now: {t('nav.phone')}
              </a>
              <a
                href="mailto:pi.expertises@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-accent text-accent hover:bg-accent/10 font-semibold rounded-lg transition-colors duration-300"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;