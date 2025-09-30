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
  const { t, language } = useI18n();

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Progress simulation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 4 + 2;
      });
    }, 60);

    // Display time of 5.5 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 5200);

    // Call onComplete after fade-out transition completes
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5600);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
      clearInterval(progressInterval);
    };
  }, [onComplete, t]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] transition-opacity duration-[350ms] ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      dir={language === 'he' ? 'rtl' : 'ltr'}
    >
      {/* Minimal Glass Background */}
      <div className="absolute inset-0">
        {/* Glass blur overlay showing homepage behind */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'hsl(216 18% 12% / 0.5)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        />
      </div>

      {/* Minimal Center Loader */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        
        {/* Circular Spinner */}
        <div className="relative mb-6">
          <svg 
            className="w-12 h-12"
            viewBox="0 0 100 100"
            style={{
              animation: !prefersReducedMotion ? 'spinRotate 1.5s linear infinite' : 'none',
            }}
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(210 20% 98% / 0.2)"
              strokeWidth="4"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(34 100% 84%)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="251"
              strokeDashoffset="188"
              style={{
                filter: 'drop-shadow(0 0 8px hsl(34 100% 84% / 0.4))',
              }}
            />
          </svg>
        </div>

        {/* Linear Progress Bar Alternative */}
        <div className="w-64 mb-4">
          <div 
            className="relative h-1 rounded-full overflow-hidden"
            style={{
              background: 'hsl(216 18% 12% / 0.3)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <div
              className="absolute top-0 left-0 h-full rounded-full transition-all duration-300 ease-out"
              style={{
                width: prefersReducedMotion ? '100%' : `${progress}%`,
                background: 'hsl(34 100% 84%)',
                boxShadow: '0 0 6px hsl(34 100% 84% / 0.5)',
              }}
            />
          </div>
        </div>

        {/* Status Text */}
        <div className="text-center">
          <p 
            className="text-sm text-foreground/80"
            style={{
              textShadow: '0 0 8px hsl(210 20% 98% / 0.8)',
            }}
          >
            {language === 'he' ? 'טוען...' : 'Loading...'}
          </p>
        </div>
      </div>

      {/* Minimal CSS Animations */}
      <style>{`
        /* Spinner Rotation */
        @keyframes spinRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Responsive scaling */
        @media (max-width: 768px) {
          svg {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
          div[style*="width: 64"] {
            width: 12rem !important;
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