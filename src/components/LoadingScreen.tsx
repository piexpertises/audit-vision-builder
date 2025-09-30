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
          className="relative"
          style={{
            animation: 'breathe 3s ease-in-out infinite',
          }}
        >
          {/* Subtle glow effect behind logo */}
          <div 
            className="absolute inset-0 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #D4AF37 0%, transparent 60%)',
              filter: 'blur(40px)',
              transform: 'scale(1.5)',
            }}
          />

          {/* Logo with shimmer effect */}
          <div className="relative w-[90px] h-[90px] md:w-[130px] md:h-[130px] flex items-center justify-center">
            <img 
              src={logoImage}
              alt="Pi Expertises Logo"
              className="w-full h-full object-contain relative z-10"
              style={{
                filter: 'drop-shadow(0 8px 16px rgba(212, 175, 55, 0.3))',
              }}
            />
            
            {/* Shimmer overlay that passes over the logo */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{
                background: 'linear-gradient(120deg, transparent 0%, transparent 45%, rgba(255, 255, 255, 0.6) 50%, transparent 55%, transparent 100%)',
                animation: 'shimmer 5s ease-in-out infinite',
                mixBlendMode: 'overlay',
              }}
            />
          </div>
        </div>

        {/* Company name */}
        <div 
          className={`text-center mt-8 transition-all duration-300 ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{
            textShadow: '0 2px 20px rgba(212, 175, 55, 0.3)',
            letterSpacing: '0.03em',
          }}>
            Pi Expertises
          </h1>
          <p className="text-sm md:text-base text-white/70 font-light tracking-wide">
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
            transform: scale(1.07);
          }
        }

        @keyframes shimmer {
          0%, 20% {
            transform: translateX(-150%);
          }
          40% {
            transform: translateX(150%);
          }
          100% {
            transform: translateX(150%);
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