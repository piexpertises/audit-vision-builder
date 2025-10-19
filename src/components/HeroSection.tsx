import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Award } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import { useIsMobile } from '@/hooks/use-mobile';
import heroCarousel1 from '@/assets/hero-carousel-1.jpg';
import heroCarousel2 from '@/assets/hero-carousel-2.jpg';
import heroCarousel3 from '@/assets/hero-carousel-3.jpg';

const HeroSection = () => {
  const { t, isRTL } = useI18n();
  const isMobile = useIsMobile();

  // Carousel state - only used on desktop
  const carouselImages = [heroCarousel1, heroCarousel2, heroCarousel3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Auto-advance carousel every 5 seconds - only on desktop
  useEffect(() => {
    if (isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length, isMobile]);

  // Handle image load errors
  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  };

  const stats = [{
    icon: Shield,
    label: t('hero.stats.experience'),
    value: '20+'
  }, {
    icon: Users,
    label: t('hero.stats.clients'),
    value: '500+'
  }, {
    icon: Award,
    label: t('hero.stats.projects'),
    value: '200+'
  }];
  
  
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Background - Static on mobile, Carousel on desktop */}
      <div className="absolute inset-0 z-0">
        {/* Solid gradient background - always visible immediately */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-secondary/90 z-0" />
        
        {isMobile ? (
          /* Mobile: Single static optimized image */
          <div className="absolute inset-0" style={{ opacity: 0.35, zIndex: 1 }}>
            <img 
              src={heroCarousel1} 
              alt="Professional security services - Steve Belhasen Pi Expertises" 
              className="w-full h-full object-cover" 
              width={768}
              height={1024}
              loading="eager"
              decoding="sync"
            />
          </div>
        ) : (
          /* Desktop: Carousel images */
          carouselImages.map((image, index) => !imageErrors.has(index) && (
            <div 
              key={index} 
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out" 
              style={{
                opacity: currentImageIndex === index ? 0.35 : 0,
                zIndex: currentImageIndex === index ? 1 : 0
              }}
            >
              <img 
                src={image} 
                alt={`Professional security consulting services ${index + 1} - Pi Expertises Israel`} 
                className="w-full h-full object-cover" 
                width={1920}
                height={1080}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                onError={() => handleImageError(index)}
              />
            </div>
          ))
        )}
        
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80 z-10" />
        
        {/* Bottom gradient fade for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-background/30 to-background z-10" />
      </div>

      {/* Animated Background Elements - Desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-security-pulse" />
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-security-pulse" style={{
          animationDelay: '1s'
        }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/15 rounded-full blur-xl animate-security-pulse" style={{
          animationDelay: '2s'
        }} />
        </div>
      )}

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Hero Content - Force visibility to prevent blank screen */}
          <div className="pt-20 md:pt-0" style={{ opacity: 1, visibility: 'visible' }}>
            <h1 className="font-bold mb-6 text-shadow font-rubik" style={{
            fontSize: 'clamp(2rem, 8vw, 4.5rem)',
            lineHeight: '1.2',
            marginTop: 'clamp(80px, 12vh, 120px)'
          }}>
              <span className="block mb-2" style={{ color: 'hsl(42 88% 65%)' }}>{t('hero.title')}</span>
            </h1>
            <p className="text-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto font-bold text-center px-4" style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.875rem)'
          }}>
              {t('hero.subtitle')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <a href="#about-intro" className="inline-block w-full sm:w-auto">
              <Button size="lg" className="btn-hero group hover-scale hover-glow w-full sm:w-auto min-h-[44px]">
                {t('hero.learn_more')}
                <ArrowRight className={`ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
            </a>
            <a href="#contact" className="inline-block w-full sm:w-auto">
              <Button variant="outline" size="lg" className="border-accent/30 text-foreground hover:bg-accent/10 hover-scale w-full sm:w-auto min-h-[44px]">
                {t('hero.cta')}
              </Button>
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 max-w-3xl mx-auto px-4 sm:px-6">
            {stats.map((stat, index) => <div key={index} className="text-center group hover-lift flex flex-col items-center justify-center py-6 md:min-h-[160px] min-h-[120px]">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-16 md:h-16 rounded-full mb-4 transition-all duration-300 hover-scale flex-shrink-0" style={{
              backgroundColor: 'hsl(42 88% 65% / 0.2)'
            }}>
                  <stat.icon className="h-8 w-8" style={{ color: 'hsl(42 88% 65%)' }} />
                </div>
                <div className="text-3xl md:text-3xl font-bold mb-2" style={{ color: 'hsl(42 88% 65%)' }}>{stat.value}</div>
                <div className="text-foreground/70 text-sm md:text-sm uppercase tracking-wider px-2">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        
      </div>

      {/* Enhanced Gradient Fade to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" style={{
      height: '150px',
      background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--background) / 0.4) 50%, hsl(var(--background)) 100%)'
    }} />
    </section>;
};
export default HeroSection;