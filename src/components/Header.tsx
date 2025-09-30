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
              className="absolute inset-0 animate-fade-in"
              style={{
                background: 'rgba(13, 27, 42, 0.3)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)'
              }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Brand Glass Drawer */}
            <div 
              className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} h-full w-full max-w-sm ${
                isRTL ? 'animate-slide-in-right' : 'animate-slide-in-left'
              }`}
              style={{
                background: 'linear-gradient(180deg, rgba(13,27,42,0.94) 0%, rgba(13,27,42,0.88) 50%, rgba(29,155,240,0.35) 100%)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                borderRadius: isRTL ? '0 0 0 16px' : '0 0 16px 0',
                boxShadow: '0 6px 28px rgba(0, 0, 0, 0.25)'
              }}
            >
              <div className="relative h-full overflow-y-auto overscroll-contain flex flex-col">
                {/* Header */}
                <div className={`flex items-center justify-between p-6 border-b ${isRTL ? 'flex-row-reverse' : ''}`}
                  style={{ borderColor: 'rgba(212, 175, 55, 0.20)' }}>
                  <img 
                    src={logoImage} 
                    alt="Pi Expertises" 
                    className="h-9 w-auto"
                    style={{ filter: 'drop-shadow(0 2px 8px rgba(212, 175, 55, 0.3))' }}
                  />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 transition-all duration-200 rounded-lg"
                    style={{ 
                      color: '#FFFFFF',
                      background: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#D4AF37';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.background = 'transparent';
                    }}
                    aria-label="Close menu"
                  >
                    <X size={28} strokeWidth={2.5} />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-6 py-8">
                  <div className={`space-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {navigationItems.map((item) => {
                      const isActive = item.isRoute && window.location.pathname === item.href;
                      return item.isRoute ? (
                        <Link
                          key={item.key}
                          to={item.href}
                          onClick={handleMenuItemClick}
                          className={`block px-5 py-4 rounded-xl text-lg font-semibold transition-all duration-200 relative ${
                            isActive ? '' : ''
                          }`}
                          style={{
                            color: isActive ? '#D4AF37' : '#FFFFFF',
                            background: isActive ? 'rgba(212, 175, 55, 0.12)' : 'transparent',
                            borderLeft: !isRTL && isActive ? '3px solid #D4AF37' : !isRTL ? '3px solid transparent' : 'none',
                            borderRight: isRTL && isActive ? '3px solid #D4AF37' : isRTL ? '3px solid transparent' : 'none'
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive) {
                              e.currentTarget.style.color = '#D4AF37';
                              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                              if (isRTL) {
                                e.currentTarget.style.borderRight = '3px solid #D4AF37';
                              } else {
                                e.currentTarget.style.borderLeft = '3px solid #D4AF37';
                              }
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) {
                              e.currentTarget.style.color = '#FFFFFF';
                              e.currentTarget.style.background = 'transparent';
                              if (isRTL) {
                                e.currentTarget.style.borderRight = '3px solid transparent';
                              } else {
                                e.currentTarget.style.borderLeft = '3px solid transparent';
                              }
                            }
                          }}
                        >
                          {t(item.key)}
                        </Link>
                      ) : (
                        <a
                          key={item.key}
                          href={item.href}
                          onClick={handleMenuItemClick}
                          className="block px-5 py-4 rounded-xl text-lg font-semibold transition-all duration-200"
                          style={{
                            color: '#FFFFFF',
                            background: 'transparent',
                            borderLeft: !isRTL ? '3px solid transparent' : 'none',
                            borderRight: isRTL ? '3px solid transparent' : 'none'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#D4AF37';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                            if (isRTL) {
                              e.currentTarget.style.borderRight = '3px solid #D4AF37';
                            } else {
                              e.currentTarget.style.borderLeft = '3px solid #D4AF37';
                            }
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#FFFFFF';
                            e.currentTarget.style.background = 'transparent';
                            if (isRTL) {
                              e.currentTarget.style.borderRight = '3px solid transparent';
                            } else {
                              e.currentTarget.style.borderLeft = '3px solid transparent';
                            }
                          }}
                        >
                          {t(item.key)}
                        </a>
                      );
                    })}
                  </div>
                </nav>

                {/* Bottom Section */}
                <div className="px-6 pb-8 space-y-6 border-t"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.10)' }}>
                  {/* Language Title */}
                  <p className={`text-sm font-medium pt-6 ${isRTL ? 'text-right' : 'text-left'}`}
                    style={{ color: 'rgba(255, 255, 255, 0.80)' }}>
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
                        className="py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                        style={{
                          background: language === lang.code ? '#D4AF37' : 'rgba(13, 27, 42, 0.6)',
                          color: language === lang.code ? '#0A0A0A' : '#FFFFFF',
                          border: language === lang.code ? 'none' : '1px solid rgba(255, 255, 255, 0.18)'
                        }}
                        onMouseEnter={(e) => {
                          if (language !== lang.code) {
                            e.currentTarget.style.background = 'rgba(13, 27, 42, 0.8)';
                            e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (language !== lang.code) {
                            e.currentTarget.style.background = 'rgba(13, 27, 42, 0.6)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                          }
                        }}
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
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg"
                    style={{
                      background: '#D4AF37',
                      color: '#0A0A0A'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#C79C2E';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#D4AF37';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <Phone size={22} />
                    {t('nav.contact')}
                  </a>
                  
                  {/* Phone */}
                  <a
                    href="tel:+972505730072"
                    onClick={handleMenuItemClick}
                    className="block text-center text-sm transition-colors"
                    style={{ color: 'rgba(255, 255, 255, 0.80)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#D4AF37';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.80)';
                    }}
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