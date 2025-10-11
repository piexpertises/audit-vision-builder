import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutIntroSection from '@/components/AboutIntroSection';
import NewspaperArticleSection from '@/components/NewspaperArticleSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CookieConsent from '@/components/CookieConsent';
import { useI18n } from '@/hooks/useI18n';

const Index = () => {
  const { t } = useI18n();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`Pi Expertises - ${t('hero.subtitle')}`}
        description={t('about.intro')}
        keywords="security consulting, VIP protection, physical security, Israel security, event security, emergency response, Steve Belhasen, פאי אקספרטיס, ייעוץ ביטחוני"
        canonical="https://pi-expertises.com/"
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
