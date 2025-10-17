import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  // Always visible - no animations at all
  const [isVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  return { ref, isVisible };
};

export default useScrollAnimation;