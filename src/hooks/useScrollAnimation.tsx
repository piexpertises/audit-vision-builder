import { useState, useRef } from 'react';

interface UseScrollAnimationProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (_props?: UseScrollAnimationProps) => {
  const [isVisible] = useState(true); // Always visible - no animations
  const ref = useRef<HTMLDivElement>(null);

  return { ref, isVisible };
};

export default useScrollAnimation;
