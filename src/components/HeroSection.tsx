import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-security.jpg';
const HeroSection = () => {
  const {
    t,
    isRTL
  } = useLanguage();
  const stats = [{
    icon: Shield,
    label: 'Years Experience',
    value: '8+'
  }, {
    icon: Users,
    label: 'Clients Protected',
    value: '500+'
  }, {
    icon: Award,
    label: 'Security Projects',
    value: '200+'
  }];
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Professional Security Consultation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
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

      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Hero Content */}
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow animate-zoom-in">
              <span className="text-accent block mb-2">{t('hero.title')}</span>
            </h1>
            <p className="text-xl text-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto font-bold text-center md:text-3xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-up ${isRTL ? 'sm:flex-row-reverse' : ''}`} style={{
          animationDelay: '0.4s'
        }}>
            <Button size="lg" className="btn-hero group hover-scale hover-glow">
              {t('hero.cta')}
              <ArrowRight className={`ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
            </Button>
            <Button variant="outline" size="lg" className="border-accent/30 text-foreground hover:bg-accent/10 hover-scale">
              {t('hero.learn_more')}
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up" style={{
          animationDelay: '0.6s'
        }}>
            {stats.map((stat, index) => <div 
              key={index} 
              className="text-center group hover-lift animate-staggered-fade" 
              style={{ animationDelay: `${0.7 + index * 0.1}s` }}
            >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4 group-hover:bg-accent/30 transition-all duration-300 hover-scale animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-foreground/70 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>;
};
export default HeroSection;