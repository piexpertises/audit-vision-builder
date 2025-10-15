import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Award } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

const HeroSection = () => {
  const {
    t,
    isRTL
  } = useI18n();

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
      {/* Optimized Static Background - No heavy images */}
      <div className="absolute inset-0 z-0">
        {/* Primary gradient background - loads instantly */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/90" />
        
        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80 z-10" />
        
        {/* Bottom gradient fade for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-background/30 to-background z-10" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-security-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-security-pulse" style={{
        animationDelay: '1s'
      }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/15 rounded-full blur-xl animate-security-pulse" style={{
        animationDelay: '2s'
      }} />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Hero Content - Visible immediately */}
          <div className="pt-20 md:pt-0">
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
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <a href="#about-intro" className="inline-block">
              <Button size="lg" className="btn-hero group hover-scale hover-glow">
                {t('hero.learn_more')}
                <ArrowRight className={`ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
            </a>
            <a href="#contact" className="inline-block">
              <Button variant="outline" size="lg" className="border-accent/30 text-foreground hover:bg-accent/10 hover-scale">
                {t('hero.cta')}
              </Button>
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto px-4">
            {stats.map((stat, index) => <div key={index} className="text-center group hover-lift flex flex-col items-center justify-center min-h-[200px] md:min-h-[180px]">
                <div className="inline-flex items-center justify-center w-20 h-20 md:w-16 md:h-16 rounded-full mb-6 md:mb-4 transition-all duration-300 hover-scale flex-shrink-0" style={{
              backgroundColor: 'hsl(42 88% 65% / 0.2)'
            }}>
                  <stat.icon className="h-10 w-10 md:h-8 md:w-8" style={{ color: 'hsl(42 88% 65%)' }} />
                </div>
                <div className="text-4xl md:text-3xl font-bold mb-3 md:mb-2" style={{ color: 'hsl(42 88% 65%)' }}>{stat.value}</div>
                <div className="text-foreground/70 text-base md:text-sm uppercase tracking-wider px-2">{stat.label}</div>
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