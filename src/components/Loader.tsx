import React, { useState, useEffect } from 'react';

interface LoaderProps {
  duration?: number;
  minVisibleMs?: number;
  onComplete?: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  opacity: number;
}

const Loader: React.FC<LoaderProps> = ({ 
  duration = 4000, 
  minVisibleMs = 5500,
  onComplete 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate minimal particles
  useEffect(() => {
    const generateParticles = (): Particle[] => {
      const particleCount = 12; // Very low density
      return Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        color: Math.random() > 0.7 ? '#1D9BF0' : '#FFFFFF',
        opacity: Math.random() * 0.1 + 0.05 // Very low opacity 0.05-0.15
      }));
    };

    setParticles(generateParticles());
  }, []);

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.vx + 100) % 100,
        y: (particle.y + particle.vy + 100) % 100,
      })));
    };

    const interval = setInterval(animateParticles, 100);
    return () => clearInterval(interval);
  }, []);

  // Progress animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 80);

    return () => clearInterval(progressInterval);
  }, []);

  // Exit animation
  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setAnimateOut(true);
    }, Math.max(duration - 350, minVisibleMs - 350));

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, Math.max(duration, minVisibleMs));

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, minVisibleMs, onComplete]);

  if (!isVisible) return null;

  return (
    <>
      {/* CSS Variables */}
      <style>{`
        :root {
          --brand-navy: #0D1B2A;
          --brand-royal: #1D9BF0;
          --brand-white: #FFFFFF;
          --glass-bg: rgba(255,255,255,0.12);
          --glass-line: rgba(255,255,255,0.18);
        }
      `}</style>

      <div 
        className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ${
          animateOut ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          background: 'rgba(13, 27, 42, 0.45)',
        }}
      >
        {/* Subtle particles */}
        {!window.matchMedia('(prefers-reduced-motion: reduce)').matches && (
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  backgroundColor: particle.color,
                  opacity: particle.opacity,
                  transition: 'all 0.1s linear',
                }}
              />
            ))}
          </div>
        )}

        {/* Center content */}
        <div className="text-center px-4 max-w-lg">
          {/* Main headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
            style={{
              color: 'var(--brand-white)',
              textShadow: '0 0 20px rgba(29, 155, 240, 0.25)',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.02em',
            }}
          >
            Pi Expertises
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl mb-8"
            style={{
              color: 'rgba(255, 255, 255, 0.75)',
              fontWeight: '400',
              letterSpacing: '0.01em',
            }}
          >
            Your Security Experts
          </p>

          {/* Progress bar */}
          <div className="w-full max-w-xs mx-auto">
            <div 
              className="relative h-1.5 rounded-full overflow-hidden mb-3"
              style={{
                background: 'var(--glass-line)',
              }}
            >
              <div
                className="absolute top-0 left-0 h-full rounded-full transition-all duration-200 ease-out"
                style={{
                  width: `${progress}%`,
                  background: 'var(--brand-royal)',
                  boxShadow: '0 0 8px rgba(29, 155, 240, 0.15)',
                }}
              />
            </div>
            
            {/* Progress percentage */}
            <div 
              className="text-sm font-mono"
              style={{
                color: 'rgba(255, 255, 255, 0.75)',
              }}
            >
              {Math.round(progress)}%
            </div>
          </div>
        </div>

        {/* Reduced motion fallback styles */}
        <style>{`
          @media (prefers-reduced-motion: reduce) {
            * {
              animation: none !important;
              transition-duration: 0.2s !important;
            }
          }

          /* RTL support */
          [dir="rtl"] h1 {
            font-family: var(--font-hebrew, var(--font-heading));
          }
        `}</style>
      </div>
    </>
  );
};

export default Loader;