import React, { useEffect, useState } from 'react';
import logoImage from '@/assets/logo-pi-expertises-new.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation - adjusted for 5.5 second duration
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.2; // Increment for 5.5s total
      });
    }, 60);

    // Start fade out after 5.5 seconds
    const fadeTimer = setTimeout(() => setFadeOut(true), 5500);
    
    // Complete loading after fade animation (6s total)
    const completeTimer = setTimeout(() => onComplete(), 6000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] transition-all duration-300 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: 'linear-gradient(180deg, #0D1B2A 0%, #1d9bf0 55%, rgba(255, 255, 255, 0.1) 100%)',
      }}
    >
      {/* Glassmorphism overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.02)',
        }}
      />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-20 w-40 h-40 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #1d9bf0 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute bottom-32 right-32 w-48 h-48 rounded-full opacity-8 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #0D1B2A 0%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full opacity-6 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #1d9bf0 0%, transparent 70%)',
            animation: 'float 9s ease-in-out infinite',
            animationDelay: '4s',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Logo container with breathing animation */}
        <div 
          className="relative mb-8"
          style={{
            animation: 'breathe 2.8s ease-in-out infinite',
          }}
        >
          {/* Glow effect behind logo */}
          <div 
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
              filter: 'blur(50px)',
              transform: 'scale(1.8)',
            }}
          />

          {/* Logo with shimmer effect */}
          <div className="relative w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center">
            <img 
              src={logoImage}
              alt="Pi Expertises Logo"
              className="w-full h-full object-contain relative z-10"
              style={{
                filter: 'drop-shadow(0 4px 20px rgba(212, 175, 55, 0.4)) drop-shadow(0 0 60px rgba(212, 175, 55, 0.2))',
              }}
            />
            
            {/* Shimmer overlay */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{
                background: 'linear-gradient(110deg, transparent 0%, transparent 40%, rgba(255, 255, 255, 0.5) 50%, transparent 60%, transparent 100%)',
                animation: 'shimmer 4.5s ease-in-out infinite',
                mixBlendMode: 'overlay',
              }}
            />
          </div>
        </div>

        {/* Company name */}
        <div 
          className={`text-center transition-all duration-300 ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2" style={{
            textShadow: '0 2px 30px rgba(212, 175, 55, 0.4)',
            letterSpacing: '0.02em',
          }}>
            Pi Expertises
          </h1>
          <p className="text-base md:text-lg text-white/80 font-light tracking-wide">
            מומחי הביטחון שלכם
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.06);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.08);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;