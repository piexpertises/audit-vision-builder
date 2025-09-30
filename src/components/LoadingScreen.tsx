import React from 'react';
import MagneticLoader from './MagneticLoader';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  return <MagneticLoader onComplete={onComplete} duration={4000} />;
};

export default LoadingScreen;