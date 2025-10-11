import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X, Cookie } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

const CookieConsent = () => {
  const { t, language } = useI18n();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Show banner after 1 second delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  const getText = () => {
    switch(language) {
      case 'he':
        return {
          message: 'אנו משתמשים בעוגיות כדי לשפר את חווית הגלישה שלך ולנתח את תעבורת האתר.',
          accept: 'אני מסכים',
          decline: 'לא, תודה',
          privacy: 'מדיניות פרטיות'
        };
      case 'fr':
        return {
          message: 'Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic du site.',
          accept: 'Accepter',
          decline: 'Refuser',
          privacy: 'Politique de confidentialité'
        };
      default:
        return {
          message: 'We use cookies to improve your experience and analyze site traffic.',
          accept: 'Accept',
          decline: 'Decline',
          privacy: 'Privacy Policy'
        };
    }
  };

  const text = getText();

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-[999] animate-slide-up"
      role="dialog"
      aria-label="Cookie consent banner"
      aria-describedby="cookie-message"
    >
      <div 
        className="mx-4 mb-4 rounded-xl shadow-2xl border border-border/50"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--secondary)) 100%)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <Cookie className="h-8 w-8 text-accent" aria-hidden="true" />
            </div>
            
            {/* Message */}
            <div className="flex-1">
              <p 
                id="cookie-message"
                className="text-foreground text-sm md:text-base leading-relaxed"
              >
                {text.message}{' '}
                <a 
                  href="#privacy" 
                  className="text-accent hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-accent rounded"
                >
                  {text.privacy}
                </a>
              </p>
            </div>
            
            {/* Actions */}
            <div className="flex gap-3 w-full md:w-auto">
              <Button
                onClick={handleAccept}
                className="flex-1 md:flex-none btn-hero"
                aria-label={text.accept}
              >
                {text.accept}
              </Button>
              <Button
                onClick={handleDecline}
                variant="outline"
                className="flex-1 md:flex-none border-border/50 hover:bg-accent/10"
                aria-label={text.decline}
              >
                {text.decline}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
