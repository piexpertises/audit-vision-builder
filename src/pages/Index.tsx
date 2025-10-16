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
        title={`piexpertises.com - ${t('hero.subtitle')}`}
        description={t('about.intro')}
        keywords="security consulting, VIP protection, physical security, Israel security, event security, emergency response, Steve Belhasen, פאי אקספרטיס, ייעוץ ביטחוני"
        canonical="https://piexpertises.com/"
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
