import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Globe, Shield, Users, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logoImage from '@/assets/logo-pi-expertises.png';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    'VIP Protection',
    'Security Consulting',
    'Event Security',
    'Risk Assessment',
    'Training Programs',
    'Emergency Planning',
  ];

  const company = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Phone, href: 'tel:050-730-0720', label: 'Phone' },
    { icon: Mail, href: 'mailto:pi.expertises@gmail.com', label: 'Email' },
    { icon: Globe, href: '#', label: 'Website' },
  ];

  return (
    <footer className="bg-primary border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logoImage} 
                alt="Pi Expertises Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-bold text-accent">Pi Expertises</span>
            </div>
            
            <p className="text-foreground/80 leading-relaxed mb-6 max-w-md">
              {t('footer.description')}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:050-730-0720" 
                  className="text-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  {t('contact.phone_label')}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:pi.expertises@gmail.com" 
                  className="text-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  {t('contact.email_label')}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground/80">
                  {t('contact.address')}
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent" />
              {t('footer.services_title')}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
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

            {/* Quick Contact */}
            <div className="mt-8">
              <h4 className="text-foreground font-medium mb-4">Quick Contact</h4>
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
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">
              © 2024 {t('footer.rights')}
            </p>
            <div className="flex items-center gap-6 text-sm text-foreground/60">
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                Secured by Pi Expertises
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;