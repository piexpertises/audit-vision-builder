import React, { useState, useEffect } from 'react';
import logoImage from '@/assets/logo-pi-expertises-new.png';
import { useI18n } from '@/hooks/useI18n';

interface MagneticLoaderProps {
  onComplete: () => void;
  duration?: number;
}

interface Particle {
  id: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  delay: number;
}

const MagneticLoader: React.FC<MagneticLoaderProps> = ({ onComplete, duration = 4000 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  const [magnetismActive, setMagnetismActive] = useState(false);
  const [logoFormed, setLogoFormed] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [connectionStates, setConnectionStates] = useState({
    api: false,
    automation: false,
    database: false
  });
  
  const { language } = useI18n();

  // Generate particles in circular formation around logo
  useEffect(() => {
    const generateParticles = (): Particle[] => {
      const particleCount = 40;
      const centerX = 50; // percentage
      const centerY = 50; // percentage
      const radius = 12; // percentage from center
      
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
          delay: Math.random() * 300
        };
      });
    };

    setParticles(generateParticles());
  }, []);

  // Animation sequence
  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    // Phase 1: Activate magnetism (600ms)
    timeouts.push(setTimeout(() => {
      setMagnetismActive(true);
    }, 100));

    // Phase 2: Logo formation (1800ms)
    timeouts.push(setTimeout(() => {
      setLogoFormed(true);
    }, 600));

    // Phase 3: Text and progress (2200ms)
    timeouts.push(setTimeout(() => {
      setTextVisible(true);
      
      // Start progress animation
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + Math.random() * 3 + 1;
        });
      }, 50);

      // Activate connections sequentially
      setTimeout(() => setConnectionStates(prev => ({ ...prev, api: true })), 200);
      setTimeout(() => setConnectionStates(prev => ({ ...prev, automation: true })), 600);
      setTimeout(() => setConnectionStates(prev => ({ ...prev, database: true })), 1000);
    }, 1800));

    // Phase 4: Exit animation (4000ms)
    timeouts.push(setTimeout(() => {
      setAnimateOut(true);
    }, duration - 400));

    timeouts.push(setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, duration));

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [duration, onComplete]);

  if (!isVisible) return null;

  const backgroundStyle = [
    'radial-gradient(ellipse at 30% 20%, hsl(258 90% 66% / 0.4) 0%, transparent 50%)',
    'radial-gradient(ellipse at 70% 80%, hsl(184 90% 56% / 0.4) 0%, transparent 50%)',
    'radial-gradient(ellipse at 50% 50%, hsl(216 18% 12% / 0.8) 0%, hsl(216 18% 8% / 0.95) 100%)'
  ].join(', ');

  return (
    <div 
      className={`fixed inset-0 z-[9999] transition-all duration-500 ${
        animateOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
      style={{
        background: backgroundStyle,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Magnetic Field Lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute border border-primary/20 rounded-full"
            style={{
              width: `${(i + 1) * 80}px`,
              height: `${(i + 1) * 60}px`,
              animation: `magneticPulse ${3 + i * 0.5}s ease-in-out infinite ${i * 0.2}s`,
              opacity: magnetismActive ? 0.6 : 0,
              transition: 'opacity 0.6s ease-out',
            }}
          />
        ))}
      </div>

      {/* Magnetic Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            left: `${particle.startX}%`,
            top: `${particle.startY}%`,
            background: 'hsl(258 90% 66%)',
            boxShadow: magnetismActive ? '0 0 6px hsl(258 90% 66%)' : 'none',
            transform: logoFormed ? 
              `translate(${particle.targetX - particle.startX}%, ${particle.targetY - particle.startY}%)` : 
              'translate(0, 0)',
            opacity: magnetismActive ? 1 : 0,
            transition: `all ${1.2 + particle.delay / 1000}s cubic-bezier(0.34, 1.56, 0.64, 1) ${particle.delay}ms`,
          }}
        />
      ))}

      {/* Central Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        
        {/* Logo with Magnetic Pulse Rings */}
        <div className="relative mb-8">
          {/* Pulse Rings */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              opacity: logoFormed ? 1 : 0,
              transition: 'opacity 0.8s ease-out 0.5s',
            }}
          >
            <div 
              className="absolute rounded-full border-2 border-accent/40"
              style={{
                width: '80px',
                height: '80px',
                animation: 'magneticRingPulse 2s ease-in-out infinite',
              }}
            />
            <div 
              className="absolute rounded-full border border-primary/40"
              style={{
                width: '96px',
                height: '96px',
                animation: 'magneticRingPulse 2s ease-in-out infinite 0.5s reverse',
              }}
            />
          </div>

          {/* Logo */}
          <div 
            className="relative z-10 w-20 h-20 rounded-full overflow-hidden"
            style={{
              transform: logoFormed ? 'scale(1)' : 'scale(0.8)',
              opacity: logoFormed ? 1 : 0,
              filter: logoFormed ? 
                'drop-shadow(0 0 20px hsl(34 100% 84% / 0.8)) drop-shadow(0 0 40px hsl(34 100% 84% / 0.4))' : 
                'drop-shadow(0 0 10px hsl(34 100% 84% / 0.4))',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s',
            }}
          >
            <img 
              src={logoImage}
              alt="Pi Expertises"
              className="w-full h-full object-contain"
              width="200"
              height="200"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>

        {/* Company Text */}
        <div 
          className="text-center mb-8"
          style={{
            transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: textVisible ? 1 : 0,
            transition: 'all 0.6s ease-out',
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2 tracking-wider">
            Pi Expertises
          </h1>
          <p className="text-lg text-muted-foreground">
            {language === 'he' ? 'מומחי הביטחון שלכם' : 'Your Security Experts'}
          </p>
        </div>

        {/* Progress Bar */}
        <div 
          className="w-80 max-w-full mb-6"
          style={{
            opacity: textVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.2s',
          }}
        >
          <div 
            className="relative h-2 rounded-full overflow-hidden"
            style={{
              background: 'hsl(216 18% 12% / 0.4)',
              backdropFilter: 'blur(8px)',
              border: '1px solid hsl(210 20% 98% / 0.1)',
            }}
          >
            <div
              className="absolute top-0 left-0 h-full rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, hsl(258 90% 66%), hsl(184 90% 56%))',
                boxShadow: '0 0 12px hsl(258 90% 66% / 0.6)',
              }}
            />
          </div>
          
          <div className="flex justify-between items-center mt-2 text-sm">
            <span className="text-muted-foreground">
              {language === 'he' ? 'מקים חיבורים...' : 'Establishing connections...'}
            </span>
            <span className="font-mono text-accent">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Connection Indicators */}
        <div 
          className="flex gap-4"
          style={{
            opacity: textVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.4s',
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
                background: connectionStates[key as keyof typeof connectionStates] ? 
                  'hsl(258 90% 66% / 0.2)' : 
                  'hsl(216 18% 12% / 0.3)',
                border: `1px solid ${connectionStates[key as keyof typeof connectionStates] ? 
                  'hsl(258 90% 66% / 0.4)' : 
                  'hsl(210 20% 98% / 0.1)'}`,
                color: connectionStates[key as keyof typeof connectionStates] ? 
                  'hsl(258 90% 66%)' : 
                  'hsl(210 20% 70%)',
                boxShadow: connectionStates[key as keyof typeof connectionStates] ? 
                  '0 0 8px hsl(258 90% 66% / 0.3)' : 
                  'none',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
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
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1) rotate(180deg);
            opacity: 0.6;
          }
        }

        @keyframes magneticRingPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        /* Responsive scaling */
        @media (max-width: 768px) {
          .text-4xl {
            font-size: 2rem !important;
          }
          div[style*="width: 80px"] {
            width: 60px !important;
            height: 60px !important;
          }
          div[style*="width: 96px"] {
            width: 76px !important;
            height: 76px !important;
          }
        }

        /* Reduced motion overrides */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.2s !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MagneticLoader;