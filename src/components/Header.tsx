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
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
          
          {/* Logo - Always on the right for Hebrew */}
          <div className="flex items-center space-x-3 order-last">
            <img 
              src={logoImage} 
              alt="Pi Expertises Logo" 
              className="h-12 w-12 object-contain"
            />
          </div>

          {/* Desktop Navigation - RTL order */}
          <nav className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className={`hidden lg:flex items-center space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
            {/* Language Selector */}
            <div className="relative group">
              <Button variant="ghost" size="sm" className="gap-2 text-gray-600">
                <Globe size={16} />
              </Button>
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[120px] z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`block w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                      language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
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

            {/* Phone Button */}
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-medium"
              asChild
            >
              <a href="tel:050-730-0720">
                {t('nav.phone')}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200 bg-white">
            <nav className={`flex flex-col space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              {navigationItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-200">
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium"
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