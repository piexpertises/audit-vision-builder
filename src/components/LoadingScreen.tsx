import React, { useEffect, useState } from 'react';
import logoImage from '@/assets/logo-pi-expertises-new.png';
import { useI18n } from '@/hooks/useI18n';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('initializing');
  const { t, language } = useI18n();

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Progress simulation with status updates
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        
        // Update status text based on progress
        if (prev < 25) {
          setStatusText('initializing');
        } else if (prev < 50) {
          setStatusText('loading_systems');
        } else if (prev < 75) {
          setStatusText('establishing_connections');
        } else {
          setStatusText('finalizing');
        }
        
        return prev + Math.random() * 3 + 1;
      });
    }, 80);

    // Minimum display time of 6 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 5500);

    // Call onComplete after fade-out transition completes
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
      clearInterval(progressInterval);
    };
  }, [onComplete, t]);

  // Status text translations
  const statusTexts = {
    initializing: language === 'he' ? 'מאתחל מערכות...' : 'Initializing systems...',
    loading_systems: language === 'he' ? 'טוען מערכות ביטחון...' : 'Loading security systems...',
    establishing_connections: language === 'he' ? 'מקים חיבורים...' : 'Establishing connections...',
    finalizing: language === 'he' ? 'מסיים הכנות...' : 'Finalizing setup...'
  };

  const services = [
    {
      icon: '🛡️',
      label: language === 'he' ? 'ייעוץ ביטחוני' : 'Security Consulting'
    },
    {
      icon: '👥',
      label: language === 'he' ? 'אירועים המוניים' : 'Mass Events'
    },
    {
      icon: '⚠️',
      label: language === 'he' ? 'חירום' : 'Emergency'
    },
    {
      icon: '📋',
      label: language === 'he' ? 'תוכניות אבטחה' : 'Security Plans'
    }
  ];

  return (
    <div 
      className={`fixed inset-0 z-[9999] transition-opacity duration-[350ms] ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      dir={language === 'he' ? 'rtl' : 'ltr'}
    >
      {/* Premium Glass Background Layer */}
      <div className="absolute inset-0">
        {/* Glass blur overlay showing homepage behind */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'hsl(216 18% 12% / 0.55)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        />

        {/* Subtle border glow for premium separation */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 120px hsl(200 100% 40% / 0.08)',
          }}
        />

        {/* Floating particles using site colors */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  background: i % 3 === 0 
                    ? 'hsl(200 100% 40% / 0.4)' 
                    : i % 3 === 1 
                    ? 'hsl(34 100% 84% / 0.3)'
                    : 'hsl(210 20% 98% / 0.5)',
                  opacity: Math.random() * 0.4 + 0.2,
                  animation: `particleDrift ${Math.random() * 30 + 20}s linear infinite ${Math.random() * 5}s, particleTwinkle ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Premium Loading Scene */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        
        {/* Logo with Soft Aura */}
        <div className="relative mb-12">
          
          {/* Soft circular aura rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="absolute rounded-full"
              style={{
                width: '220px',
                height: '220px',
                background: 'radial-gradient(circle, hsl(200 100% 40% / 0.12) 0%, hsl(200 100% 40% / 0.06) 50%, transparent 100%)',
                animation: !prefersReducedMotion ? 'auralPulse 3s ease-in-out infinite' : 'none',
              }}
            />
            <div 
              className="absolute rounded-full"
              style={{
                width: '180px',
                height: '180px',
                background: 'radial-gradient(circle, hsl(34 100% 84% / 0.15) 0%, hsl(34 100% 84% / 0.08) 50%, transparent 100%)',
                animation: !prefersReducedMotion ? 'auralPulse 3s ease-in-out infinite 0.5s' : 'none',
              }}
            />
          </div>

          {/* Logo Container */}
          <div 
            className="relative z-10"
            style={{
              width: '140px',
              height: '140px',
              animation: !prefersReducedMotion ? 'logoBreathing 2.8s ease-in-out infinite' : 'none',
            }}
          >
            <img 
              src={logoImage}
              alt="Pi Expertises"
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 8px 24px hsl(34 100% 84% / 0.4))',
              }}
            />
          </div>
        </div>

        {/* Progress Bar with Glass Effect */}
        <div className="w-full max-w-md mb-6">
          <div 
            className="relative h-1 rounded-full overflow-hidden"
            style={{
              background: 'hsl(216 18% 12% / 0.2)',
              backdropFilter: 'blur(8px)',
              border: '1px solid hsl(210 20% 98% / 0.1)',
            }}
          >
            <div
              className="absolute top-0 left-0 h-full rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, hsl(200 100% 40%), hsl(34 100% 84%))',
                boxShadow: '0 0 8px hsl(200 100% 40% / 0.5)',
              }}
            />
          </div>
          
          {/* Status and Percentage */}
          <div className={`flex justify-between items-center mt-3 text-sm ${
            language === 'he' ? 'flex-row-reverse' : ''
          }`}>
            <span 
              className="text-foreground"
              style={{
                textShadow: '0 0 8px hsl(210 20% 98% / 0.8)',
              }}
            >
              {statusTexts[statusText as keyof typeof statusTexts]}
            </span>
            <span 
              className="font-mono text-accent"
              style={{
                textShadow: '0 0 8px hsl(34 100% 84% / 0.6)',
              }}
            >
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Service Pills */}
        <div className={`flex gap-3 flex-wrap justify-center ${
          language === 'he' ? 'flex-row-reverse' : ''
        }`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: !prefersReducedMotion ? `pillFadeIn 0.6s ease-out ${index * 0.1 + 1}s backwards` : 'none',
              }}
            >
              <div 
                className="px-4 py-2 rounded-full transition-all duration-300 group-hover:scale-105"
                style={{
                  background: 'hsl(216 18% 12% / 0.3)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid hsl(210 20% 98% / 0.2)',
                  boxShadow: '0 4px 12px hsl(216 18% 12% / 0.1)',
                }}
                onMouseEnter={(e) => {
                  if (!prefersReducedMotion) {
                    e.currentTarget.style.boxShadow = '0 0 16px hsl(200 100% 40% / 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!prefersReducedMotion) {
                    e.currentTarget.style.boxShadow = '0 4px 12px hsl(216 18% 12% / 0.1)';
                  }
                }}
              >
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-base">{service.icon}</span>
                  <span 
                    className="text-foreground font-medium"
                    style={{
                      textShadow: '0 0 8px hsl(210 20% 98% / 0.8)',
                    }}
                  >
                    {service.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company tagline */}
        <div className="text-center mt-8 opacity-70">
          <p 
            className="text-sm text-foreground"
            style={{
              textShadow: '0 0 8px hsl(210 20% 98% / 0.8)',
            }}
          >
            {language === 'he' ? 'מומחי הביטחון שלכם' : 'Your Security Experts'}
          </p>
        </div>
      </div>

      {/* Premium CSS Animations */}
      <style>{`
        /* Aural Pulse Effect */
        @keyframes auralPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        /* Logo Breathing Effect */
        @keyframes logoBreathing {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.04);
          }
        }

        /* Particle Drift Animation */
        @keyframes particleDrift {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10px, -15px);
          }
          50% {
            transform: translate(-5px, -25px);
          }
          75% {
            transform: translate(-15px, -10px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        /* Particle Twinkle */
        @keyframes particleTwinkle {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
        }

        /* Service Pills Fade In */
        @keyframes pillFadeIn {
          0% {
            transform: translateY(10px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Responsive scaling */
        @media (max-width: 768px) {
          div[style*="width: 140px"] {
            width: 110px !important;
            height: 110px !important;
          }
          div[style*="width: 220px"] {
            width: 180px !important;
            height: 180px !important;
          }
          div[style*="width: 180px"][style*="height: 180px"] {
            width: 140px !important;
            height: 140px !important;
          }
        }

        /* Reduced motion overrides */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;