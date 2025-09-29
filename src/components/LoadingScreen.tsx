import React, { useEffect, useState } from 'react';
import { Shield, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 300);
    const timer2 = setTimeout(() => setStage(2), 1200);
    const timer3 = setTimeout(() => setStage(3), 2200);
    const timer4 = setTimeout(() => onComplete(), 3000);

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
        {/* 3D Shield Animation */}
        <div className={`relative mb-8 ${stage >= 1 ? 'animate-rotate-shield' : 'opacity-0'}`}>
          <div className="relative w-32 h-32 mx-auto">
            {/* Main Shield */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Shield 
                className="w-24 h-24 text-accent drop-shadow-2xl" 
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.5))',
                  transform: stage >= 2 ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.5s ease'
                }}
              />
            </div>
            
            {/* Rotating Ring */}
            <div className={`absolute inset-0 border-2 border-accent/30 rounded-full ${stage >= 1 ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }}>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent rounded-full"></div>
            </div>

            {/* Sparkle Effects */}
            {stage >= 2 && (
              <>
                <Sparkles className="absolute -top-4 -right-4 w-6 h-6 text-accent animate-pulse" />
                <Sparkles className="absolute -bottom-4 -left-4 w-4 h-4 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
                <Sparkles className="absolute top-8 -left-6 w-3 h-3 text-accent animate-pulse" style={{ animationDelay: '1s' }} />
              </>
            )}
          </div>
        </div>

        {/* Pi Symbol Formation */}
        <div className={`text-6xl font-bold text-accent mb-4 transition-all duration-1000 ${stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          π
        </div>

        {/* Company Name */}
        <div className={`space-y-2 transition-all duration-1000 ${stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-2xl font-bold text-white mb-2">Pi Expertises</h1>
          <p className="text-white/80 text-sm">מומחי הביטחון שלכם</p>
        </div>

        {/* Loading Bar */}
        <div className={`w-64 h-1 bg-white/20 rounded-full mt-8 mx-auto overflow-hidden ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          <div 
            className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full transition-all duration-1000 loading-shimmer"
            style={{
              width: stage >= 3 ? '100%' : stage >= 2 ? '70%' : stage >= 1 ? '40%' : '0%'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;