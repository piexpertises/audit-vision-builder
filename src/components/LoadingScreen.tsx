import React, { useEffect, useState } from 'react';
import logoImage from '@/assets/logo-pi-expertises-new.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

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
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Galaxy Background Layer */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0D1B2A 0%, #151B3C 50%, #221C4D 100%)',
          }}
        />

        {/* Glowing Blobs */}
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(29, 155, 240, 0.25) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'pulse1 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-[-15%] right-[-15%] w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(106, 90, 205, 0.2) 0%, transparent 70%)',
            filter: 'blur(90px)',
            animation: 'pulse2 10s ease-in-out infinite 2s',
          }}
        />
        <div
          className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(138, 123, 255, 0.15) 0%, transparent 70%)',
            filter: 'blur(70px)',
            animation: 'pulse3 12s ease-in-out infinite 4s',
          }}
        />
        <div
          className="absolute bottom-[20%] left-[15%] w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(29, 155, 240, 0.18) 0%, transparent 70%)',
            filter: 'blur(85px)',
            animation: 'pulse1 9s ease-in-out infinite 1s',
          }}
        />

        {/* Particle Field */}
        <div className="absolute inset-0">
          {/* Generate particles */}
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.2,
                animation: `twinkle ${Math.random() * 4 + 3}s ease-in-out infinite ${Math.random() * 3}s, drift${(i % 3) + 1} ${Math.random() * 20 + 25}s linear infinite ${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Film Grain/Noise Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            opacity: 0.05,
            mixBlendMode: 'overlay',
          }}
        />

        {/* Glass Blur Layer */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(13, 27, 42, 0.55)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        />
      </div>

      {/* 3D Scene Container */}
      <div 
        className="relative h-full flex flex-col items-center justify-center px-4"
        style={{
          perspective: '1200px',
          perspectiveOrigin: 'center center',
        }}
      >
        
        {/* Logo Assembly Container */}
        <div 
          className="relative"
          style={{
            width: '180px',
            height: '180px',
            transformStyle: 'preserve-3d',
          }}
        >
          
          {!prefersReducedMotion ? (
            <>
              {/* Left Lion - flies in from left */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(0% 0%, 35% 0%, 35% 100%, 0% 100%)',
                  animation: 'flyInLeft 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                  opacity: 0,
                }}
              >
                <img 
                  src={logoImage}
                  alt="Logo Left"
                  className="w-full h-full object-contain"
                  style={{
                    filter: 'drop-shadow(0 8px 24px rgba(212, 175, 55, 0.4))',
                  }}
                />
              </div>

              {/* Right Lion - flies in from right */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(65% 0%, 100% 0%, 100% 100%, 65% 100%)',
                  animation: 'flyInRight 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.12s forwards',
                  opacity: 0,
                }}
              >
                <img 
                  src={logoImage}
                  alt="Logo Right"
                  className="w-full h-full object-contain"
                  style={{
                    filter: 'drop-shadow(0 8px 24px rgba(212, 175, 55, 0.4))',
                  }}
                />
              </div>

              {/* Shield/Center - scales up from depth */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(35% 15%, 65% 15%, 65% 85%, 35% 85%)',
                  animation: 'scaleInDepth 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.24s forwards',
                  opacity: 0,
                }}
              >
                <img 
                  src={logoImage}
                  alt="Logo Center"
                  className="w-full h-full object-contain"
                  style={{
                    filter: 'drop-shadow(0 8px 24px rgba(212, 175, 55, 0.4))',
                  }}
                />
              </div>

              {/* Pi Symbol - drops from above */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'circle(18% at 50% 45%)',
                  animation: 'dropInBounce 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.36s forwards',
                  opacity: 0,
                }}
              >
                <img 
                  src={logoImage}
                  alt="Logo Pi"
                  className="w-full h-full object-contain"
                  style={{
                    filter: 'drop-shadow(0 8px 24px rgba(212, 175, 55, 0.4))',
                  }}
                />
              </div>

              {/* Shine sweep effect */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
                  animation: 'shineSweep 0.8s ease-out 1.8s forwards',
                  opacity: 0,
                  mixBlendMode: 'overlay',
                }}
              />

              {/* Assembled logo with breathing effect */}
              <div
                className="absolute inset-0"
                style={{
                  animation: 'breathe 2.5s ease-in-out 2.8s infinite',
                  opacity: 0,
                  animationFillMode: 'backwards',
                }}
              >
                <img 
                  src={logoImage}
                  alt="Pi Expertises"
                  className="w-full h-full object-contain"
                  style={{
                    filter: 'drop-shadow(0 10px 30px rgba(212, 175, 55, 0.5))',
                  }}
                />
              </div>
            </>
          ) : (
            /* Reduced motion fallback - simple fade in */
            <div
              className="absolute inset-0"
              style={{
                animation: 'simpleFadeIn 1s ease-out forwards',
              }}
            >
              <img 
                src={logoImage}
                alt="Pi Expertises"
                className="w-full h-full object-contain"
                style={{
                  filter: 'drop-shadow(0 10px 30px rgba(212, 175, 55, 0.5))',
                }}
              />
            </div>
          )}
        </div>

        {/* Circular Loader */}
        <div 
          className="relative mt-8 flex items-center justify-center"
          style={{
            width: '80px',
            height: '80px',
          }}
        >
          <svg 
            className="w-full h-full"
            viewBox="0 0 100 100"
            style={{
              animation: 'rotate 2.5s linear infinite',
            }}
          >
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="3"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#1d9bf0"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="264"
              strokeDashoffset="66"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(29, 155, 240, 0.7))',
              }}
            />
          </svg>
        </div>

        {/* Company Name */}
        <div className="text-center mt-8">
          <h1 
            className="text-2xl md:text-3xl font-bold text-white mb-2"
            style={{
              textShadow: '0 2px 20px rgba(255, 255, 255, 0.3)',
              letterSpacing: '0.05em',
              animation: 'fadeInUp 1s ease-out 0.8s backwards',
            }}
          >
            Pi Expertises
          </h1>
          <p 
            className="text-sm md:text-base text-white/90 font-light"
            style={{
              animation: 'fadeInUp 1s ease-out 1s backwards',
            }}
          >
            מומחי הביטחון שלכם
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        /* Left Lion Animation */
        @keyframes flyInLeft {
          0% {
            transform: translateX(-120%) translateZ(-150px) rotateY(-25deg);
            opacity: 0;
          }
          100% {
            transform: translateX(0) translateZ(0) rotateY(0deg);
            opacity: 1;
          }
        }

        /* Right Lion Animation */
        @keyframes flyInRight {
          0% {
            transform: translateX(120%) translateZ(-150px) rotateY(25deg);
            opacity: 0;
          }
          100% {
            transform: translateX(0) translateZ(0) rotateY(0deg);
            opacity: 1;
          }
        }

        /* Shield/Center Scale Animation */
        @keyframes scaleInDepth {
          0% {
            transform: scale(0.7) translateZ(-200px);
            opacity: 0;
          }
          100% {
            transform: scale(1) translateZ(0);
            opacity: 1;
          }
        }

        /* Pi Symbol Drop Animation */
        @keyframes dropInBounce {
          0% {
            transform: translateY(-150px) translateZ(-100px) rotateX(20deg);
            opacity: 0;
          }
          70% {
            transform: translateY(5px) translateZ(0) rotateX(0deg);
            opacity: 1;
          }
          85% {
            transform: translateY(-2px) translateZ(0) rotateX(0deg);
          }
          100% {
            transform: translateY(0) translateZ(0) rotateX(0deg);
            opacity: 1;
          }
        }

        /* Shine Sweep Effect */
        @keyframes shineSweep {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        /* Breathing Effect */
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.03);
            opacity: 0.95;
          }
        }

        /* Loader Rotation */
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Text Fade In Up */
        @keyframes fadeInUp {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Simple Fade In (Reduced Motion) */
        @keyframes simpleFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        /* Particle Animations */
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes drift1 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -40px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes drift2 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-25px, 35px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes drift3 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(40px, 30px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        /* Blob Pulse Animations */
        @keyframes pulse1 {
          0%, 100% {
            opacity: 0.85;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes pulse2 {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.08);
          }
        }

        @keyframes pulse3 {
          0%, 100% {
            opacity: 0.75;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.06);
          }
        }

        /* Responsive scaling */
        @media (max-width: 768px) {
          div[style*="width: 180px"] {
            width: 140px !important;
            height: 140px !important;
          }
          div[style*="width: 80px"][style*="height: 80px"] {
            width: 60px !important;
            height: 60px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;