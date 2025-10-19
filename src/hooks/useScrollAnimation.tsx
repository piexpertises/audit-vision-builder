import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback for browsers without IntersectionObserver or on mobile with issues
    if (typeof IntersectionObserver === 'undefined') {
      console.warn('IntersectionObserver not supported, showing content immediately');
      setIsVisible(true);
      return;
    }

    // Set a timeout to ensure content displays even if observer fails
    const fallbackTimeout = setTimeout(() => {
      console.log('Animation fallback triggered - ensuring visibility');
      setIsVisible(true);
    }, 3000);

    try {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            clearTimeout(fallbackTimeout);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        },
        {
          threshold,
          rootMargin,
        }
      );

      observer.observe(element);

      return () => {
        clearTimeout(fallbackTimeout);
        observer.disconnect();
      };
    } catch (error) {
      console.error('IntersectionObserver error:', error);
      setIsVisible(true);
      clearTimeout(fallbackTimeout);
    }
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

export default useScrollAnimation;