import React, { useEffect, useState } from 'react';
import logoImage from '@/assets/logo-pi-expertises-new.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 5.5 seconds
    const fadeTimer = setTimeout(() => setFadeOut(true), 5500);
    
    // Complete loading after fade animation (6s total)
    const completeTimer = setTimeout(() => onComplete(), 6000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: 'linear-gradient(135deg, #0D1B2A 0%, #1b4965 50%, #1d9bf0 100%)',
      }}
    >
      {/* Subtle overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(13, 27, 42, 0.3) 100%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Logo with gentle animation */}
        <div 
          className="relative mb-8"
          style={{
            animation: 'gentleBreath 4s ease-in-out infinite',
          }}
        >
          {/* Soft glow behind logo */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
              filter: 'blur(30px)',
              transform: 'scale(1.5)',
            }}
          />

          {/* Logo */}
          <div className="relative w-[100px] h-[100px] md:w-[140px] md:h-[140px] flex items-center justify-center">
            <img 
              src={logoImage}
              alt="Pi Expertises"
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 4px 12px rgba(212, 175, 55, 0.25))',
              }}
            />
          </div>
        </div>

        {/* Company name */}
        <div className="text-center">
          <h1 
            className="text-3xl md:text-4xl font-bold text-white mb-2"
            style={{
              textShadow: '0 2px 20px rgba(255, 255, 255, 0.1)',
              letterSpacing: '0.05em',
            }}
          >
            Pi Expertises
          </h1>
          <p className="text-base md:text-lg text-white/80 font-light">
            מומחי הביטחון שלכם
          </p>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes gentleBreath {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.95;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;