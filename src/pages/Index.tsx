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
        title="Steve Belhassen - Pi Expertises | סטיב בלחסן | ייעוץ ביטחוני מקצועי בישראל"
        description="סטיב בלחסן (Steve Belhassen) - מייסד ומנכ''ל Pi Expertises. מומחה ביטחון בכיר, יועץ אבטחה מוביל בישראל. התמחות בייעוץ ביטחוני, הגנת VIP, ניהול אירועים המוניים ותכנון חירום. שירותי אבטחה מקצועיים בתל אביב, רעננה וכל הארץ."
        keywords="סטיב בלחסן, Steve Belhassen, Steve Belhasen, סטב בלחסן, יועץ ביטחון, מומחה אבטחה, ייעוץ ביטחוני ישראל, אבטחה תל אביב, מנבט רעננה, פקם אבטחה, security consultant Israel, VIP protection, הגנה אישית, ניהול אירועים המוניים, הערכות חירום, פאי אקספרטיס, pi expertises, מנב''ט, הדרכות אבטחה, אבטחה מונעת, תיק שטח"
        canonical="https://piexpertises.com/"
        ogImage="https://piexpertises.com/og-image.jpg"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "name": "Pi Expertises",
              "alternateName": ["פאי אקספרטיס", "Pi Expertises Israel"],
              "url": "https://piexpertises.com",
              "logo": "https://piexpertises.com/logo.png",
              "description": "Professional security consulting firm in Israel founded by Steve Belhassen, specializing in VIP protection, mass event management, security plan writing, and emergency preparedness",
              "foundingDate": "2016",
              "founder": {
                "@id": "https://piexpertises.com/#steve-belhassen"
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
                "https://wa.me/972507300720",
                "https://www.linkedin.com/in/steve-belhassen-a14084126",
                "https://www.instagram.com/stevebelhassen"
              ]
            },
            {
              "@type": "Person",
              "@id": "https://piexpertises.com/#steve-belhassen",
              "name": "Steve Belhassen",
              "alternateName": ["סטיב בלחסן", "Steve Belhasen", "סטב בלחסן"],
              "jobTitle": ["Founder and CEO", "Security Consultant", "מומחה ביטחון", "יועץ אבטחה"],
              "description": "Steve Belhassen is a leading security expert and consultant in Israel, founder of Pi Expertises. Former IDF officer specializing in VIP protection, event security, and emergency preparedness.",
              "url": "https://piexpertises.com",
              "worksFor": {
                "@type": "Organization",
                "name": "Pi Expertises"
              },
              "nationality": {
                "@type": "Country",
                "name": "Israel"
              },
              "knowsLanguage": ["Hebrew", "English", "French"],
              "sameAs": [
                "https://www.linkedin.com/in/steve-belhassen-a14084126",
                "https://www.instagram.com/stevebelhassen",
                "https://piexpertises.com"
              ]
            }
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
