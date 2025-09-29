import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import logoImage from '@/assets/logo-pi-expertises.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  const navigationItems = [
    { key: 'nav.about', href: '#about' },
    { key: 'nav.security-consulting', href: '#security-consulting' },
    { key: 'nav.mass-events', href: '#mass-events' },
    { key: 'nav.emergency-prep', href: '#emergency-prep' },
    { key: 'nav.security-plans', href: '#security-plans' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'he', label: 'עברית', flag: '🇮🇱' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300 hover:backdrop-blur-lg hover:bg-black/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Desktop Actions - Moved to Left */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <Button variant="ghost" size="sm" className="gap-2 text-white hover:text-white/80 hover:bg-white/10">
                <Globe size={16} />
              </Button>
              <div className="absolute top-full left-0 mt-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[120px] z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`block w-full px-4 py-2 text-left hover:bg-white/10 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                      language === lang.code ? 'bg-primary/20 text-primary' : 'text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <Button 
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2 font-medium shadow-lg backdrop-blur-sm border border-white/20"
              asChild
            >
              <a href="tel:050-730-0720">
                {t('nav.contact')}
              </a>
            </Button>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-white hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Logo - Right side */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Pi Expertises Logo" 
              className="h-12 w-12 object-contain"
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:text-white/80 hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/20 bg-black/80 backdrop-blur-md">
            <nav className={`flex flex-col space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              {navigationItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-white hover:text-primary transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm text-gray-500 mb-2">Language / שפה / Langue</p>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <Button
                      key={lang.code}
                      variant={language === lang.code ? "default" : "outline"}
                      size="sm"
                      onClick={() => setLanguage(lang.code)}
                      className="flex-1"
                    >
                      <span className="flex items-center gap-1">
                        <span>{lang.flag}</span>
                        <span className="text-xs">{lang.label}</span>
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Mobile Contact */}
              <div className="pt-4 space-y-2">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-medium"
                  asChild
                >
                  <a href="tel:050-730-0720">
                    <Phone size={16} />
                    {t('nav.phone')}
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;