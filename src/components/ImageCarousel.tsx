import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Generate placeholder company images
const companyImages = ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"];
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % companyImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? companyImages.length - 1 : currentIndex - 1);
  };
  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % companyImages.length);
  };
  return;
};
export default ImageCarousel;