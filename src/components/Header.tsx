import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import logoImage from '@/assets/logo-pi-expertises.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { key: 'nav.about', href: '#about', isRoute: false },
    { key: 'nav.security-consulting', href: '/security-consulting', isRoute: true },
    { key: 'nav.mass-events', href: '#mass-events', isRoute: false },
    { key: 'nav.emergency-prep', href: '#emergency-prep', isRoute: false },
    { key: 'nav.security-plans', href: '#security-plans', isRoute: false },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'he', label: 'עברית', flag: '🇮🇱' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] bg-transparent transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-sm border-b border-white/10 hover:backdrop-blur-md' 
        : 'border-b border-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Left side */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Pi Expertises Logo" 
              className="h-12 w-12 object-contain"
            />
          </div>

          {/* Desktop Navigation - Center */}
          <nav className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'} absolute left-1/2 transform -translate-x-1/2`}>
            {navigationItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.key}
                  to={item.href}
                  className="text-white/90 hover:text-white transition-colors duration-300 font-medium relative group"
                >
                  {t(item.key)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-white/90 hover:text-white transition-colors duration-300 font-medium relative group"
                >
                  {t(item.key)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            ))}
          </nav>

          {/* Desktop Actions - Right side */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <Button variant="ghost" size="sm" className="gap-2 text-white/90 hover:text-white hover:bg-white/5">
                <Globe size={16} />
              </Button>
              <div className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-lg border border-white/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[120px] z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`block w-full px-4 py-2 text-left hover:bg-gray-100/20 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                      language === lang.code ? 'bg-primary/20 text-primary' : 'text-gray-700'
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
              className="bg-primary/90 hover:bg-primary text-white rounded-full px-6 py-2 font-medium shadow-lg backdrop-blur-sm border border-white/10"
              asChild
            >
              <a href="tel:050-730-0720">
                {t('nav.contact')}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white/90 hover:text-white hover:bg-white/5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/20 bg-white/95 backdrop-blur-lg">
            <nav className={`flex flex-col space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              {navigationItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.key}
                    to={item.href}
                    className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                ) : (
                  <a
                    key={item.key}
                    href={item.href}
                    className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.key)}
                  </a>
                )
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