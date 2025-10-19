import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SEO from '@/components/SEO';
import { useI18n } from '@/hooks/useI18n';
import AboutIntroSection from '@/components/AboutIntroSection';
import NewspaperArticleSection from '@/components/NewspaperArticleSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const Index = () => {
  const { t } = useI18n();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Pi Expertises | ייעוץ ביטחוני ואבטחה בישראל | Security Consulting Israel"
        description="מומחי אבטחה מובילים בישראל. ייעוץ ביטחוני, ניהול אירועים, הכנת תוכניות אבטחה (פק''מ) ומנב''ט לרישוי עסקים. שירותים בתל אביב, רעננה וכל הארץ. Leading security experts in Israel for VIP protection, event security management, and emergency preparedness."
        keywords="ייעוץ ביטחוני ישראל, אבטחה תל אביב, מנבט רעננה, פקם אבטחה, security consulting Israel, VIP protection Tel Aviv, event security Raanana, Steve Belhasen, סטיב בלחסן, הגנה אישית, ניהול אירועים המוניים, הערכות חירום, פאי אקספרטיס, pi expertises, מנב''ט, הדרכות אבטחה"
        canonical="https://piexpertises.com/"
        ogImage="https://piexpertises.com/og-image.jpg"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Pi Expertises",
          "alternateName": "פאי אקספרטיס",
          "url": "https://piexpertises.com",
          "logo": "https://piexpertises.com/logo.png",
          "description": "Professional security consulting firm in Israel specializing in VIP protection, mass event management, security plan writing, and emergency preparedness",
          "foundingDate": "2016",
          "founder": {
            "@type": "Person",
            "name": "Steve Belhasen",
            "alternateName": "סטיב בלחסן",
            "jobTitle": "Founder and Director"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Raanana",
            "addressRegion": "Central District",
            "addressCountry": "IL"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Israel"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+972-50-730-0720",
            "contactType": "Customer Service",
            "availableLanguage": ["Hebrew", "English", "French"]
          },
          "sameAs": [
            "https://wa.me/972507300720"
          ]
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <AboutIntroSection />
        <ServicesSection />
        <AboutSection />
        <NewspaperArticleSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
