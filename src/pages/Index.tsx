import React, { lazy, Suspense } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SEO from '@/components/SEO';
import { useI18n } from '@/hooks/useI18n';

// Lazy load non-critical sections to improve initial load time
const AboutIntroSection = lazy(() => import('@/components/AboutIntroSection'));
const NewspaperArticleSection = lazy(() => import('@/components/NewspaperArticleSection'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const AboutSection = lazy(() => import('@/components/AboutSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));
const CookieConsent = lazy(() => import('@/components/CookieConsent'));

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
        <Suspense fallback={<div className="min-h-screen" />}>
          <AboutIntroSection />
          <ServicesSection />
          <AboutSection />
          <NewspaperArticleSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <CookieConsent />
      </Suspense>
    </div>
  );
};

export default Index;
