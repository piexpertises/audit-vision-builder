import React, { useEffect, useState } from 'react';
import { ShieldCheck, Sparkles, Star } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 1800);
    const timer3 = setTimeout(() => setStage(3), 3200);
    const timer4 = setTimeout(() => onComplete(), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary via-primary/90 to-secondary flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-security-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-security-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/15 rounded-full blur-xl animate-security-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center">
        {/* 3D Shield Animation - Slower and More Elegant */}
        <div className={`relative mb-8 transition-all duration-1000 ${stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="relative w-40 h-40 mx-auto">
            {/* Main Shield with Slow Rotation */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-2000 ${stage >= 1 ? 'rotate-[360deg]' : 'rotate-0'}`}>
              <ShieldCheck 
                className={`w-28 h-28 text-accent drop-shadow-2xl transition-all duration-1500 ${stage >= 2 ? 'scale-110 brightness-125' : 'scale-100'}`}
                style={{
                  filter: `drop-shadow(0 0 25px rgba(212, 175, 55, ${stage >= 2 ? '0.8' : '0.4'}))`,
                }}
              />
            </div>
            
            {/* Slow Rotating Ring */}
            <div 
              className={`absolute inset-0 border-2 border-accent/30 rounded-full transition-all duration-1000 ${stage >= 1 ? 'animate-spin opacity-100' : 'opacity-0'}`} 
              style={{ animationDuration: '6s' }}
            >
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Elegant Sparkle Effects */}
            {stage >= 2 && (
              <>
                <Sparkles className="absolute -top-6 -right-6 w-8 h-8 text-accent animate-pulse opacity-80 transition-all duration-1000" />
                <Sparkles className="absolute -bottom-6 -left-6 w-6 h-6 text-accent animate-pulse opacity-60 transition-all duration-1000" style={{ animationDelay: '0.7s' }} />
                <Sparkles className="absolute top-10 -left-8 w-4 h-4 text-accent animate-pulse opacity-40 transition-all duration-1000" style={{ animationDelay: '1.4s' }} />
              </>
            )}
          </div>
        </div>

        {/* Pi Symbol Formation - Slower */}
        <div className={`text-7xl font-bold text-accent mb-6 transition-all duration-1500 ${stage >= 2 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-45'}`}>
          π
        </div>

        {/* Company Name - Elegant Fade In */}
        <div className={`space-y-3 transition-all duration-1200 ${stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl font-bold text-white mb-3">Pi Expertises</h1>
          <p className="text-white/90 text-lg font-medium">מומחי הביטחון שלכם</p>
        </div>

        {/* Elegant Loading Bar */}
        <div className={`w-80 h-1.5 bg-white/20 rounded-full mt-10 mx-auto overflow-hidden transition-all duration-1000 ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          <div 
            className="h-full bg-gradient-to-r from-accent via-accent/90 to-accent rounded-full transition-all duration-2000 loading-shimmer"
            style={{
              width: stage >= 3 ? '100%' : stage >= 2 ? '75%' : stage >= 1 ? '45%' : '0%'
            }}
          />
        </div>

        {/* Elegant Subtitle */}
        <p className={`text-white/70 text-sm mt-6 transition-all duration-1000 ${stage >= 2 ? 'opacity-100' : 'opacity-0'}`}>
          נטען...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;