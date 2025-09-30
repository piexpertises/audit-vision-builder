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
      className={`fixed inset-0 z-[9999] transition-opacity duration-400 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        backgroundColor: 'rgba(13, 27, 42, 0.75)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        
        {/* Logo with circular loader */}
        <div className="relative flex items-center justify-center">
          
          {/* Circular loader ring */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              width: '160px',
              height: '160px',
            }}
          >
            <svg 
              className="w-full h-full"
              viewBox="0 0 100 100"
              style={{
                animation: 'rotate 2.5s linear infinite',
              }}
            >
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="2"
              />
              {/* Animated circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#1d9bf0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="283"
                strokeDashoffset="70"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(29, 155, 240, 0.6))',
                }}
              />
            </svg>
          </div>

          {/* Logo */}
          <div className="relative w-[90px] h-[90px] md:w-[130px] md:h-[130px] flex items-center justify-center z-10">
            <img 
              src={logoImage}
              alt="Pi Expertises"
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 4px 16px rgba(212, 175, 55, 0.3))',
              }}
            />
          </div>
        </div>

        {/* Company name */}
        <div className="text-center mt-12">
          <h1 
            className="text-2xl md:text-3xl font-bold text-white mb-2"
            style={{
              textShadow: '0 2px 20px rgba(255, 255, 255, 0.2)',
              letterSpacing: '0.05em',
            }}
          >
            Pi Expertises
          </h1>
          <p className="text-sm md:text-base text-white/80 font-light">
            מומחי הביטחון שלכם
          </p>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;