import React, { useState } from 'react';
import { Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/hooks/useI18n';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const { t } = useI18n();

  const adjustFontSize = (adjustment: number) => {
    const newSize = Math.max(80, Math.min(150, fontSize + adjustment));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const toggleContrast = () => {
    document.documentElement.classList.toggle('high-contrast');
  };

  const resetAccessibility = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
    document.documentElement.classList.remove('high-contrast');
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 left-4 z-50 rounded-full w-12 h-12 shadow-lg"
        size="icon"
        aria-label={t('accessibility.tools')}
      >
        <Accessibility className="w-5 h-5" />
      </Button>

      {isOpen && (
        <div className="fixed bottom-36 left-4 z-50 bg-background border rounded-lg shadow-xl p-4 w-64">
          <h3 className="font-semibold mb-3 text-sm">{t('accessibility.tools')}</h3>
          
          <div className="space-y-3">
            <div>
              <p className="text-xs mb-2">{t('accessibility.fontSize')}</p>
              <div className="flex gap-2">
                <Button onClick={() => adjustFontSize(-10)} size="sm" variant="outline">
                  A-
                </Button>
                <Button onClick={() => adjustFontSize(10)} size="sm" variant="outline">
                  A+
                </Button>
              </div>
            </div>

            <Button onClick={toggleContrast} size="sm" variant="outline" className="w-full">
              {t('accessibility.contrast')}
            </Button>

            <Button onClick={resetAccessibility} size="sm" variant="outline" className="w-full">
              {t('accessibility.reset')}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityWidget;
