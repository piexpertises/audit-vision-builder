import React from 'react';
import Loader from './Loader';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  return <Loader onComplete={onComplete} duration={4000} minVisibleMs={5500} />;
};

export default LoadingScreen;