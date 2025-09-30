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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Lock scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // Unlock scroll and restore position
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Handle Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
      // Cleanup on unmount
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
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
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[9998] lg:hidden">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-[#0D1B2A]/60 backdrop-blur-md animate-fade-in"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <div 
              className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} h-full w-full max-w-sm bg-gradient-to-b from-[#0D1B2A] to-[#0A1929] shadow-2xl ${
                isRTL ? 'animate-slide-in-right' : 'animate-slide-in-left'
              }`}
              style={{
                borderRadius: isRTL ? '0 0 0 24px' : '0 0 24px 0',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(212, 175, 55, 0.1)'
              }}
            >
              <div className="h-full overflow-y-auto overscroll-contain flex flex-col">
                {/* Header */}
                <div className={`flex items-center justify-between p-6 border-b border-[#D4AF37]/10 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <img 
                    src={logoImage} 
                    alt="Pi Expertises" 
                    className="h-10 w-auto"
                  />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-white hover:text-[#D4AF37] transition-colors rounded-lg hover:bg-white/5"
                    aria-label="Close menu"
                  >
                    <X size={28} strokeWidth={2.5} />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-6">
                  <div className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {navigationItems.map((item) => {
                      const isActive = item.isRoute && window.location.pathname === item.href;
                      return item.isRoute ? (
                        <Link
                          key={item.key}
                          to={item.href}
                          onClick={handleMenuItemClick}
                          className={`block px-4 py-4 rounded-lg text-lg font-semibold transition-all duration-300 ${
                            isActive
                              ? 'text-[#D4AF37] bg-[#D4AF37]/10 border-r-4 border-[#D4AF37]'
                              : 'text-white hover:text-[#D4AF37] hover:bg-white/5'
                          } ${isRTL ? 'border-r-4 border-transparent hover:border-r-[#D4AF37]' : 'border-l-4 border-transparent hover:border-l-[#D4AF37]'}`}
                        >
                          {t(item.key)}
                        </Link>
                      ) : (
                        <a
                          key={item.key}
                          href={item.href}
                          onClick={handleMenuItemClick}
                          className={`block px-4 py-4 rounded-lg text-lg font-semibold text-white hover:text-[#D4AF37] hover:bg-white/5 transition-all duration-300 ${
                            isRTL ? 'border-r-4 border-transparent hover:border-r-[#D4AF37]' : 'border-l-4 border-transparent hover:border-l-[#D4AF37]'
                          }`}
                        >
                          {t(item.key)}
                        </a>
                      );
                    })}
                  </div>
                </nav>

                {/* Bottom Section */}
                <div className="p-6 space-y-6 border-t border-[#D4AF37]/10">
                  {/* Language Title */}
                  <p className={`text-sm text-white/60 font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
                    {language === 'he' ? 'בחר שפה' : language === 'en' ? 'Select Language' : 'Choisir la langue'}
                  </p>
                  
                  {/* Language Selector */}
                  <div className="grid grid-cols-3 gap-3">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          handleMenuItemClick();
                        }}
                        className={`py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                          language === lang.code
                            ? 'bg-[#D4AF37] text-[#0D1B2A]'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-xl">{lang.flag}</span>
                          <span className="text-xs">{lang.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href="https://wa.me/972505730072?text=שלום%20פאי%20אקספרטיס,%20אני%20מעוניין%20לקבל%20פרטים%20נוספים%20ולקבוע%20שיחה."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleMenuItemClick}
                    className="flex items-center justify-center gap-3 w-full py-4 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0D1B2A] rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Phone size={22} />
                    {t('nav.contact')}
                  </a>
                  
                  {/* Phone */}
                  <a
                    href="tel:+972505730072"
                    onClick={handleMenuItemClick}
                    className="block text-center text-white/70 hover:text-[#D4AF37] text-sm transition-colors"
                  >
                    {t('nav.phone')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;