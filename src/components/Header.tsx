import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import logoImage from '@/assets/logo-pi-expertises-new.png';

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

  // Close menu on outside click
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { key: 'nav.about', href: '/#about', isRoute: false },
    { key: 'nav.security-consulting', href: '/security-consulting', isRoute: true },
    { key: 'nav.mass-events', href: '/mass-event-management', isRoute: true },
    { key: 'nav.emergency-prep', href: '/emergency-preparedness', isRoute: true },
    { key: 'nav.security-plans', href: '/security-plan-writing', isRoute: true },
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
              className="h-16 w-auto object-contain max-h-20"
            />
          </div>

          {/* Desktop Navigation - Center */}
          <nav className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'} absolute left-1/2 transform -translate-x-1/2`}>
            {navigationItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`${isScrolled ? 'text-[#D4AF37] hover:text-[#D4AF37]/80' : 'text-white/90 hover:text-white'} transition-colors duration-300 font-medium relative group`}
                >
                  {t(item.key)}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isScrolled ? 'bg-[#D4AF37]' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
                </Link>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  className={`${isScrolled ? 'text-[#D4AF37] hover:text-[#D4AF37]/80' : 'text-white/90 hover:text-white'} transition-colors duration-300 font-medium relative group`}
                >
                  {t(item.key)}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isScrolled ? 'bg-[#D4AF37]' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
                </a>
              )
            ))}
          </nav>

          {/* Desktop Actions - Right side */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <Button variant="ghost" size="sm" className={`gap-2 ${isScrolled ? 'text-[#D4AF37] hover:text-[#D4AF37]/80' : 'text-white/90 hover:text-white'} hover:bg-white/5 transition-colors duration-300`}>
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
              className={`${isScrolled ? 'bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0D1B2A]' : 'bg-white/10 hover:bg-white/20 text-white'} rounded-full px-6 py-2 font-medium shadow-lg backdrop-blur-sm border ${isScrolled ? 'border-[#D4AF37]/20' : 'border-white/20'} transition-all duration-300`}
              asChild
            >
              <a 
                href="https://wa.me/972505730072?text=שלום%20פאי%20אקספרטיס,%20אני%20מעוניין%20לקבל%20פרטים%20נוספים%20ולקבוע%20שיחה."
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('nav.contact')}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`lg:hidden ${isScrolled ? 'text-[#D4AF37] hover:text-[#D4AF37]/80' : 'text-white/90 hover:text-white'} hover:bg-white/5 transition-colors duration-300`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </Button>
        </div>

        {/* Full-Screen Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop with blur effect */}
            <div 
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150] lg:hidden animate-fade-in"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel with 3D effect */}
            <div 
              className={`fixed top-0 ${isRTL ? 'right-0' : 'left-0'} bottom-0 w-full max-w-sm bg-[#0D1B2A] z-[160] lg:hidden overflow-y-auto shadow-2xl ${
                isRTL ? 'animate-slide-in-right' : 'animate-slide-in-left'
              }`}
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Header with Logo and Close Button */}
              <div className={`flex items-center justify-between p-6 border-b border-white/10 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                <img 
                  src={logoImage} 
                  alt="Pi Expertises Logo" 
                  className="h-14 w-auto object-contain"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-[#D4AF37] hover:bg-white/5 transition-all duration-300 rounded-full p-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X size={28} strokeWidth={2.5} />
                </Button>
              </div>

              {/* Navigation Menu */}
              <nav className="px-6 py-8 flex-1">
                <div className={`flex flex-col space-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {navigationItems.map((item, index) => (
                    item.isRoute ? (
                      <Link
                        key={item.key}
                        to={item.href}
                        className={`text-white hover:text-[#D4AF37] hover:bg-white/5 transition-all duration-300 font-medium text-lg py-4 px-5 rounded-lg ${
                          isRTL ? 'border-r-4' : 'border-l-4'
                        } border-transparent hover:border-[#D4AF37]`}
                        onClick={handleMenuItemClick}
                      >
                        {t(item.key)}
                      </Link>
                    ) : (
                      <a
                        key={item.key}
                        href={item.href}
                        className={`text-white hover:text-[#D4AF37] hover:bg-white/5 transition-all duration-300 font-medium text-lg py-4 px-5 rounded-lg ${
                          isRTL ? 'border-r-4' : 'border-l-4'
                        } border-transparent hover:border-[#D4AF37]`}
                        onClick={handleMenuItemClick}
                      >
                        {t(item.key)}
                      </a>
                    )
                  ))}
                </div>
              </nav>

              {/* Bottom Section - Language and WhatsApp */}
              <div className="px-6 pb-8 mt-auto">
                {/* Language Selector */}
                <div className="mb-6 pb-6 border-t border-white/10 pt-6">
                  <p className={`text-sm font-medium text-white/60 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {language === 'he' ? 'בחר שפה' : language === 'en' ? 'Select Language' : 'Choisir la langue'}
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {languages.map((lang) => (
                      <Button
                        key={lang.code}
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setLanguage(lang.code);
                          handleMenuItemClick();
                        }}
                        className={`${
                          language === lang.code 
                            ? 'bg-[#D4AF37] text-[#0D1B2A] border-[#D4AF37] hover:bg-[#D4AF37]/90 font-bold' 
                            : 'bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                        } transition-all duration-300 h-auto py-3`}
                      >
                        <span className="flex flex-col items-center gap-1">
                          <span className="text-xl">{lang.flag}</span>
                          <span className="text-xs">{lang.label}</span>
                        </span>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <Button 
                  className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0D1B2A] rounded-lg font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  asChild
                >
                  <a 
                    href="https://wa.me/972505730072?text=שלום%20פאי%20אקספרטיס,%20אני%20מעוניין%20לקבל%20פרטים%20נוספים%20ולקבוע%20שיחה."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                    onClick={handleMenuItemClick}
                  >
                    <Phone size={22} />
                    {t('nav.contact')}
                  </a>
                </Button>
                
                {/* Phone Number */}
                <a 
                  href="tel:+972505730072"
                  className="block text-center text-white/70 hover:text-[#D4AF37] transition-colors mt-4 text-sm"
                  onClick={handleMenuItemClick}
                >
                  {t('nav.phone')}
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;