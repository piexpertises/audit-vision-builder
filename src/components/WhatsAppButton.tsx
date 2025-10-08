import React, { useState, useRef, useEffect } from 'react';
import { useI18n } from '@/hooks/useI18n';

const WhatsAppButton = () => {
  const { t } = useI18n();
  const whatsappNumber = '972507300720';
  const message = encodeURIComponent(t('navigation.whatsapp_message'));
  
  // Position state - null means use default sticky position
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);
  
  // Load saved position on mount
  useEffect(() => {
    try {
      const savedPos = localStorage.getItem('whatsapp_button_position');
      if (savedPos) {
        const parsed = JSON.parse(savedPos);
        if (parsed.isCustom) {
          setPosition({ x: parsed.x, y: parsed.y });
        }
      }
    } catch (e) {
      console.error('Error loading WhatsApp button position:', e);
    }
  }, []);
  
  // Dragging functionality
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !isUnlocked) return;
      
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      
      // Keep within viewport bounds
      const maxX = window.innerWidth - 64;
      const maxY = window.innerHeight - 64;
      
      const boundedX = Math.max(16, Math.min(newX, maxX));
      const boundedY = Math.max(16, Math.min(newY, maxY));
      
      setPosition({ x: boundedX, y: boundedY });
    };
    
    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        // Save custom position
        if (position) {
          localStorage.setItem('whatsapp_button_position', JSON.stringify({
            x: position.x,
            y: position.y,
            isCustom: true
          }));
        }
      }
    };
    
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = 'none';
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
    };
  }, [isDragging, dragOffset, position, isUnlocked]);
  
  const handleMouseDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Don't follow link
    e.preventDefault();
    
    // Start long press timer
    longPressTimer.current = setTimeout(() => {
      setIsUnlocked(true);
      if (buttonRef.current) {
        // Get current position if using default
        if (!position) {
          const rect = buttonRef.current.getBoundingClientRect();
          setPosition({ x: rect.left, y: rect.top });
        }
        const rect = buttonRef.current.getBoundingClientRect();
        setDragOffset({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
        setIsDragging(true);
      }
    }, 800);
  };
  
  const handleMouseUp = () => {
    // Clear long press timer if released before timeout
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
    
    // If was dragging, stop and reset unlock
    if (isDragging) {
      setIsDragging(false);
      setTimeout(() => setIsUnlocked(false), 100);
    }
  };
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent navigation if unlocked or dragging
    if (isDragging || isUnlocked) {
      e.preventDefault();
    }
  };
  
  return (
    <>
      <style>{`
        .whatsapp-button {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 50;
          width: 56px;
          height: 56px;
          background: #25D366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.3s;
          cursor: pointer;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .whatsapp-button:hover {
          background: #20BA5A;
          transform: scale(1.1);
          box-shadow: 0 8px 28px rgba(37, 211, 102, 0.5);
        }
        
        .whatsapp-button.unlocked {
          cursor: move;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5), 0 8px 24px rgba(37, 211, 102, 0.4);
          animation: none;
        }
        
        .whatsapp-button.dragging {
          cursor: grabbing;
          transform: scale(1.15);
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.8), 0 12px 32px rgba(37, 211, 102, 0.6);
          animation: none;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @media (max-width: 768px) {
          .whatsapp-button {
            width: 48px;
            height: 48px;
            right: 12px;
            bottom: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .whatsapp-button {
            width: 44px;
            height: 44px;
            bottom: 16px;
          }
        }
      `}</style>
      
      <a
        ref={buttonRef}
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`whatsapp-button ${isDragging ? 'dragging' : ''} ${isUnlocked ? 'unlocked' : ''}`}
        aria-label={t('navigation.contact')}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={handleClick}
        style={position ? {
          left: `${position.x}px`,
          top: `${position.y}px`,
          right: 'auto',
          bottom: 'auto'
        } : undefined}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </>
  );
};

export default WhatsAppButton;
