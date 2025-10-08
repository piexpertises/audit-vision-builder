import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Globe, Shield, Users, FileText } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import { Language } from '@/contexts/LanguageContext';
import logoImage from '@/assets/logo-pi-expertises-new.png';

const Footer = () => {
  const { t, isRTL, language, setLanguage } = useI18n();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'he', label: 'עברית', flag: '🇮🇱' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
  ];

  const company = [
    { label: t('footer.about_us'), href: '#about' },
    { label: t('footer.our_team'), href: '#team' },
    { label: t('footer.services'), href: '#services' },
    { label: t('contact.title'), href: '#contact' },
  ];

  const socialLinks = [
    { icon: Phone, href: 'tel:050-730-0720', label: 'Phone' },
    { icon: Mail, href: 'mailto:infos.piexpertises@gmail.com', label: 'Email' },
    { icon: Globe, href: '#', label: 'Website' },
  ];

  return (
    <footer className="relative bg-primary border-t border-border">
      {/* Gradient Fade Transition - Réduit et plus subtil */}
      <div 
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '100px',
          transform: 'translateY(-100%)',
          background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--primary) / 0.3) 70%, hsl(var(--primary)) 100%)',
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-12 lg:py-16" dir="rtl">
          {/* Company Info */}
          <div>
            <div className="flex flex-col items-center text-center mb-6">
              <img 
                src={logoImage} 
                alt="Pi Expertises - Professional Security Consulting Logo" 
                style={{
                  height: 'clamp(48px, 8vw, 64px)',
                  width: 'auto',
                  objectFit: 'contain'
                }}
                className="mb-3"
              />
              <span 
                className="font-bold text-accent"
                style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}
              >
                Pi Expertises
              </span>
            </div>
            
            <p 
              className="text-foreground/80 leading-relaxed mb-6 text-center"
              style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
            >
              {t('footer.description')}
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" />
              {t('footer.company_title')}
            </h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Phone className="h-5 w-5 text-accent" />
              {t('footer.contact_title')}
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:050-730-0720" 
                  className="text-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  050-730-0720
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:infos.piexpertises@gmail.com" 
                  className="text-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  infos.piexpertises@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Mevaseret+Zion,+Israel" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Mevaseret Zion, Israel
                </a>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="mt-6">
              <h4 className="text-foreground font-medium mb-4">{t('footer.quick_contact')}</h4>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 border-accent/30 hover:bg-accent/10"
                    asChild
                  >
                    <a 
                      href={link.href}
                      aria-label={link.label}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <link.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Language Selector Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Globe className="h-5 w-5 text-accent" />
              {language === 'he' ? 'בחר שפה' : language === 'en' ? 'Select Language' : 'Choisir la langue'}
            </h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                    language === lang.code 
                      ? 'bg-accent/20 text-accent border border-accent/40' 
                      : 'border border-border/30 text-foreground/70 hover:bg-accent/10 hover:border-accent/30'
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="font-medium">{lang.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-right">
            <p 
              className="text-foreground/60"
              style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}
            >
              © 2025 {t('footer.rights')}
            </p>
            <div 
              className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-foreground/60"
              style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}
            >
              <a 
                href="#privacy" 
                className="hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1"
              >
                {t('footer.privacy')}
              </a>
              <a 
                href="#terms" 
                className="hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1"
              >
                {t('footer.terms')}
              </a>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                <span>{t('footer.protected')}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;