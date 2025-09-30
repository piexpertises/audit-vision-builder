import React, { useEffect, useState } from 'react';
import logoImage from '@/assets/logo-pi-expertises-new.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation - adjusted for 5 second duration
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.25; // Slower increment for 5s total
      });
    }, 60);

    // Start fade out after 5 seconds minimum (increased from 3s)
    const fadeTimer = setTimeout(() => setFadeOut(true), 5000);
    
    // Complete loading after fade animation (increased from 4s to 6s)
    const completeTimer = setTimeout(() => onComplete(), 6000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] transition-all duration-1000 ${
        fadeOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'linear-gradient(180deg, #0D1B2A 0%, #1d9bf0 60%, rgba(135, 206, 250, 0.4) 100%)',
      }}
    >
      {/* Glassmorphism overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #1d9bf0 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute bottom-32 right-32 w-40 h-40 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #1d9bf0 0%, transparent 70%)',
            animation: 'float 9s ease-in-out infinite',
            animationDelay: '4s',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Logo container with 3D effect */}
        <div 
          className="relative mb-12"
          style={{
            animation: 'breathe 6s ease-in-out infinite',
          }}
        >
          {/* Glow effect behind logo */}
          <div 
            className="absolute inset-0 rounded-full opacity-40"
            style={{
              background: 'radial-gradient(circle, #D4AF37 0%, #1d9bf0 50%, transparent 70%)',
              filter: 'blur(40px)',
              transform: 'scale(1.5)',
            }}
          />
          
          {/* Royal blue glow ring */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, transparent 40%, #1d9bf0 70%, transparent 100%)',
              filter: 'blur(20px)',
              animation: 'pulse 4s ease-in-out infinite',
            }}
          />

          {/* Logo with shimmer effect */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            <img 
              src={logoImage}
              alt="Pi Expertises Logo"
              className="w-full h-full object-contain relative z-10"
              style={{
                filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 40px rgba(212, 175, 55, 0.3))',
              }}
            />
            
            {/* Shimmer overlay */}
            <div 
              className="absolute inset-0 overflow-hidden rounded-full"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
                animation: 'shimmer 4s ease-in-out infinite',
                mixBlendMode: 'overlay',
              }}
            />
          </div>

          {/* Rotating ring accent */}
          <div 
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              border: '2px solid #1d9bf0',
              animation: 'rotate 15s linear infinite',
              transform: 'scale(1.3)',
            }}
          >
            <div 
              className="absolute top-0 left-1/2 w-3 h-3 rounded-full bg-[#D4AF37] -translate-x-1/2 -translate-y-1/2"
              style={{
                boxShadow: '0 0 12px #D4AF37',
              }}
            />
          </div>
        </div>

        {/* Company name */}
        <div 
          className={`text-center mb-8 transition-all duration-1000 ${
            fadeOut ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3" style={{
            textShadow: '0 2px 20px rgba(212, 175, 55, 0.5), 0 0 40px rgba(29, 155, 240, 0.3)',
          }}>
            Pi Expertises
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium">
            מומחי הביטחון שלכם
          </p>
        </div>

        {/* Loading bar */}
        <div className="w-72 md:w-96 mx-auto mb-4">
          <div 
            className="h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm"
            style={{
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div 
              className="h-full rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #D4AF37 0%, #1d9bf0 100%)',
                boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
              }}
            >
              {/* Shimmer on progress bar */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
                  animation: 'shimmer-bar 2.5s ease-in-out infinite',
                }}
              />
            </div>
          </div>
          <p className="text-white/60 text-sm text-center mt-3">
            {progress}%
          </p>
        </div>

        {/* Decorative corner accents */}
        <div 
          className="absolute top-8 left-8 w-16 h-16 md:w-24 md:h-24 opacity-30"
          style={{
            borderTop: '2px solid #D4AF37',
            borderLeft: '2px solid #D4AF37',
            borderTopLeftRadius: '12px',
          }}
        />
        <div 
          className="absolute bottom-8 right-8 w-16 h-16 md:w-24 md:h-24 opacity-30"
          style={{
            borderBottom: '2px solid #1d9bf0',
            borderRight: '2px solid #1d9bf0',
            borderBottomRightRadius: '12px',
          }}
        />
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          50%, 100% {
            transform: translateX(200%) rotate(45deg);
          }
        }

        @keyframes shimmer-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }

        @keyframes rotate {
          0% {
            transform: scale(1.3) rotate(0deg);
          }
          100% {
            transform: scale(1.3) rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;