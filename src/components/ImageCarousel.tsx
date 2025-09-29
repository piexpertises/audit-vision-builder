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
  return (
    <div className="relative w-full h-64 overflow-hidden bg-muted">
      <div className="flex transition-transform duration-500 ease-in-out h-full"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {companyImages.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img 
              src={image} 
              alt={`Company image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {companyImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-primary' : 'bg-primary/30'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default ImageCarousel;