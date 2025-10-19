import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Target } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { t, isRTL } = useI18n();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: commitmentRef, isVisible: commitmentVisible } = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section id="about" className="relative py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Glass Background Layer */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'hsl(216 18% 12% / 0.1)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
          }}
        />
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-hsl(216 18% 12% / 0.15) pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">

        {/* Section 3 - Our Expert Team with Glass Cards */}
        <div ref={teamRef} className="max-w-6xl mx-auto mb-20">
          <div className={`text-center mb-12 transition-all duration-700 ${
            teamVisible ? 'opacity-100 animate-slide-up' : 'opacity-0 translate-y-10'
          }`}>
            {/* Title Glass Card */}
            <div 
              className="inline-block px-8 py-6 rounded-2xl mb-6"
              style={{
                background: 'hsl(210 20% 98% / 0.12)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid hsl(210 20% 98% / 0.18)',
                boxShadow: '0 8px 32px hsl(216 18% 12% / 0.1)',
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                {t('about.team_title')}
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
            </div>
          </div>
          
          <div 
            className={`p-8 rounded-2xl transition-all duration-700 delay-200 ${
              teamVisible ? 'opacity-100 animate-zoom-in' : 'opacity-0 scale-95'
            }`}
            style={{
              background: 'hsl(210 20% 98% / 0.12)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid hsl(210 20% 98% / 0.18)',
              boxShadow: '0 8px 32px hsl(216 18% 12% / 0.1)',
            }}
          >
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                {t('about.team_desc_1')}
              </p>
              <p>
                {t('about.team_desc_2')}
              </p>
            </div>
          </div>
        </div>

        {/* Section 4 - Our Commitment with Glass Cards */}
        <div ref={commitmentRef} className="max-w-6xl mx-auto mb-20">
          <div className={`text-center mb-12 transition-all duration-700 ${
            commitmentVisible ? 'opacity-100 animate-slide-up' : 'opacity-0 translate-y-10'
          }`}>
            {/* Title Glass Card */}
            <div 
              className="inline-block px-8 py-6 rounded-2xl mb-6"
              style={{
                background: 'hsl(210 20% 98% / 0.12)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid hsl(210 20% 98% / 0.18)',
                boxShadow: '0 8px 32px hsl(216 18% 12% / 0.1)',
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                {t('about.commitment_title')}
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
            </div>
          </div>
          
          <div 
            className={`p-8 rounded-2xl transition-all duration-700 delay-200 ${
              commitmentVisible ? 'opacity-100 animate-zoom-in' : 'opacity-0 scale-95'
            }`}
            style={{
              background: 'linear-gradient(135deg, hsl(200 100% 40% / 0.05), hsl(34 100% 84% / 0.05)), hsl(210 20% 98% / 0.12)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid hsl(210 20% 98% / 0.18)',
              boxShadow: '0 8px 32px hsl(216 18% 12% / 0.1)',
            }}
          >
            <p className="text-lg text-foreground leading-relaxed text-center">
              {t('about.commitment_desc')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;