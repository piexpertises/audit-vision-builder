import React, { useState, useEffect } from 'react';

interface LoaderProps {
  duration?: number;
  minVisibleMs?: number;
  onComplete?: () => void;
}

interface Particle {
  id: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  delay: number;
}

const Loader: React.FC<LoaderProps> = ({ 
  duration = 4000, 
  minVisibleMs = 5500,
  onComplete 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  const [magnetismActive, setMagnetismActive] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [statusStates, setStatusStates] = useState({
    api: false,
    automation: false,
    database: false
  });

  // Generate particles in circular formation around text
  useEffect(() => {
    const generateParticles = (): Particle[] => {
      const particleCount = 40;
      const centerX = 50;
      const centerY = 50;
      const radius = 15;
      
      return Array.from({ length: particleCount }, (_, i) => {
        const angle = (i / particleCount) * 2 * Math.PI;
        const targetX = centerX + Math.cos(angle) * radius;
        const targetY = centerY + Math.sin(angle) * radius;
        
        return {
          id: i,
          startX: Math.random() * 100,
          startY: Math.random() * 100,
          targetX,
          targetY,
          delay: Math.random() * 400
        };
      });
    };

    setParticles(generateParticles());
  }, []);

  // Animation sequence
  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    // Phase 1: Activate magnetism (0-600ms)
    timeouts.push(setTimeout(() => {
      setMagnetismActive(true);
    }, 100));

    // Phase 2: Text formation (600-2400ms)
    timeouts.push(setTimeout(() => {
      setTextVisible(true);
    }, 800));

    // Phase 3: Progress and status (2400-3600ms)
    timeouts.push(setTimeout(() => {
      // Start progress animation
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + Math.random() * 4 + 2;
        });
      }, 60);

      // Activate status indicators sequentially
      setTimeout(() => setStatusStates(prev => ({ ...prev, api: true })), 300);
      setTimeout(() => setStatusStates(prev => ({ ...prev, automation: true })), 700);
      setTimeout(() => setStatusStates(prev => ({ ...prev, database: true })), 1100);
    }, 2400));

    // Phase 4: Exit animation
    timeouts.push(setTimeout(() => {
      setAnimateOut(true);
    }, Math.max(duration - 400, minVisibleMs - 400)));

    timeouts.push(setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, Math.max(duration, minVisibleMs)));

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [duration, minVisibleMs, onComplete]);

  if (!isVisible) return null;

  return (
    <>
      {/* CSS Variables */}
      <style>{`
        :root {
          --brand-blue: #4A90E2;
          --brand-gold: #E6B800;
          --brand-light-gold: #F4D03F;
          --brand-cream: #F5F5DC;
          --brand-light-gray: #DCE4F0;
        }
      `}</style>

      <div 
        className={`fixed inset-0 z-[9999] transition-all duration-300 ${
          animateOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(220, 228, 240, 0.96) 0%, rgba(200, 215, 235, 0.98) 100%)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}
      >
        {/* Magnetic Field Lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute border rounded-full"
              style={{
                width: `${(i + 1) * 90}px`,
                height: `${(i + 1) * 70}px`,
                borderColor: 'var(--brand-blue)',
                opacity: magnetismActive ? '0.08' : '0',
                animation: magnetismActive ? `magneticPulse ${3.5 + i * 0.6}s ease-in-out infinite ${i * 0.3}s` : 'none',
                transition: 'opacity 0.8s ease-out',
              }}
            />
          ))}
        </div>

        {/* Magnetic Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full pointer-events-none"
            style={{
              left: `${particle.startX}%`,
              top: `${particle.startY}%`,
              background: Math.random() > 0.6 ? 'var(--brand-gold)' : 'var(--brand-blue)',
              boxShadow: magnetismActive ? `0 0 8px ${Math.random() > 0.6 ? 'var(--brand-gold)' : 'var(--brand-blue)'}` : 'none',
              transform: textVisible ? 
                `translate(${particle.targetX - particle.startX}%, ${particle.targetY - particle.startY}%)` : 
                'translate(0, 0)',
              opacity: magnetismActive ? 0.8 : 0,
              transition: `all ${1.4 + particle.delay / 1000}s cubic-bezier(0.34, 1.56, 0.64, 1) ${particle.delay}ms`,
            }}
          />
        ))}

        {/* Central Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          
          {/* Magnetic Pulse Rings around Text */}
          <div className="relative mb-8">
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: textVisible ? 1 : 0,
                transition: 'opacity 0.8s ease-out 0.5s',
              }}
            >
              <div 
                className="absolute rounded-full border-2"
                style={{
                  width: '80px',
                  height: '80px',
                  borderColor: 'var(--brand-blue)',
                  opacity: '0.12',
                  animation: 'magneticRingPulse 2.5s ease-in-out infinite',
                }}
              />
              <div 
                className="absolute rounded-full border"
                style={{
                  width: '96px',
                  height: '96px',
                  borderColor: 'var(--brand-gold)',
                  opacity: '0.08',
                  animation: 'magneticRingPulse 2.5s ease-in-out infinite 0.8s reverse',
                }}
              />
            </div>

            {/* Pi Expertises Text */}
            <div 
              className="relative z-10 text-center"
              style={{
                transform: textVisible ? 'scale(1)' : 'scale(0.9)',
                opacity: textVisible ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s',
              }}
            >
              <h1 
                className="text-4xl md:text-6xl font-bold tracking-wider"
                style={{
                  background: 'linear-gradient(135deg, var(--brand-cream) 0%, var(--brand-light-gold) 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: textVisible ? 
                    `0 0 40px rgba(230, 184, 0, 0.8), 0 0 80px rgba(230, 184, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1)` : 
                    'none',
                  transition: 'text-shadow 0.8s ease-out',
                  letterSpacing: '0.02em',
                }}
              >
                Pi Expertises
              </h1>
              <p 
                className="text-lg mt-2"
                style={{
                  color: 'rgba(74, 144, 226, 0.9)',
                  opacity: textVisible ? 0.8 : 0,
                  transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                  letterSpacing: '0.05em',
                }}
              >
                Your Security Experts
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div 
            className="w-80 max-w-full mb-6"
            style={{
              opacity: textVisible ? 1 : 0,
              transition: 'opacity 0.6s ease-out 0.6s',
            }}
          >
            <div 
              className="relative h-3 rounded-full overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(74, 144, 226, 0.2)',
              }}
            >
              <div
                className="absolute top-0 left-0 h-full rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${progress}%`,
                  background: `linear-gradient(90deg, var(--brand-blue), var(--brand-gold))`,
                  boxShadow: '0 0 16px rgba(230, 184, 0, 0.6)',
                }}
              />
            </div>
            
            <div className="flex justify-between items-center mt-3 text-sm">
              <span style={{ color: 'rgba(74, 144, 226, 0.8)', opacity: '0.8' }}>
                Establishing connections...
              </span>
              <span 
                className="font-mono"
                style={{ color: 'var(--brand-blue)', fontWeight: '600' }}
              >
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Status Indicators */}
          <div 
            className="flex gap-4"
            style={{
              opacity: textVisible ? 1 : 0,
              transition: 'opacity 0.6s ease-out 0.8s',
            }}
          >
            {[
              { key: 'api', label: 'API' },
              { key: 'automation', label: 'Automation' },
              { key: 'database', label: 'Database' }
            ].map(({ key, label }) => (
              <div
                key={key}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-500"
                style={{
                  background: statusStates[key as keyof typeof statusStates] ? 
                    'rgba(74, 144, 226, 0.15)' : 
                    'rgba(255, 255, 255, 0.3)',
                  border: `1px solid ${statusStates[key as keyof typeof statusStates] ? 
                    'var(--brand-blue)' : 
                    'rgba(74, 144, 226, 0.3)'}`,
                  color: statusStates[key as keyof typeof statusStates] ? 
                    'var(--brand-blue)' : 
                    'rgba(74, 144, 226, 0.6)',
                  boxShadow: statusStates[key as keyof typeof statusStates] ? 
                    '0 0 12px rgba(74, 144, 226, 0.3)' : 
                    'none',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  opacity: statusStates[key as keyof typeof statusStates] ? '1' : '0.7',
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes magneticPulse {
            0%, 100% {
              transform: scale(1) rotate(0deg);
              opacity: 0.05;
            }
            50% {
              transform: scale(1.15) rotate(180deg);
              opacity: 0.12;
            }
          }

          @keyframes magneticRingPulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.08;
            }
            50% {
              transform: scale(1.3);
              opacity: 0.15;
            }
          }

          /* Responsive scaling */
          @media (max-width: 768px) {
            .text-4xl {
              font-size: 2.5rem !important;
            }
          }

          /* Reduced motion overrides */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation: none !important;
              transition-duration: 0.2s !important;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Loader;