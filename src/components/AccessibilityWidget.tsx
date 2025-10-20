import React, { useState, useEffect } from 'react';
import { Accessibility, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useI18n } from '@/hooks/useI18n';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [wordSpacing, setWordSpacing] = useState(0);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [activeFeatures, setActiveFeatures] = useState<Set<string>>(new Set());
  const { t } = useI18n();

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Alt+Shift+A to open
      if (e.altKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      
      if (!isOpen) return;

      // Other shortcuts only work when widget is open
      if (e.key === 'C') {
        e.preventDefault();
        toggleFeature('high-contrast');
      } else if (e.key === 'I') {
        e.preventDefault();
        toggleFeature('inverted');
      } else if (e.key === 'U') {
        e.preventDefault();
        toggleFeature('highlight-links');
      } else if (e.key === 'G') {
        e.preventDefault();
        toggleFeature('grayscale');
      } else if (e.key === 'M') {
        e.preventDefault();
        toggleFeature('black-white');
      } else if (e.key === 'X') {
        e.preventDefault();
        toggleFeature('cancel-animations');
      } else if (e.key === 'R') {
        e.preventDefault();
        resetAccessibility();
      } else if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        adjustFontSize([Math.min(200, fontSize + 5)]);
      } else if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        adjustFontSize([Math.max(50, fontSize - 5)]);
      } else if (e.key === '0') {
        e.preventDefault();
        adjustFontSize([100]);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, fontSize, activeFeatures]);

  const toggleFeature = (feature: string) => {
    const newFeatures = new Set(activeFeatures);
    if (newFeatures.has(feature)) {
      newFeatures.delete(feature);
      document.documentElement.classList.remove(`a11y-${feature}`);
    } else {
      newFeatures.add(feature);
      document.documentElement.classList.add(`a11y-${feature}`);
    }
    setActiveFeatures(newFeatures);
  };

  const adjustFontSize = (value: number[]) => {
    const newSize = value[0];
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const adjustWordSpacing = (value: number[]) => {
    const spacing = value[0];
    setWordSpacing(spacing);
    document.body.style.wordSpacing = `${spacing}px`;
  };

  const adjustLetterSpacing = (value: number[]) => {
    const spacing = value[0];
    setLetterSpacing(spacing);
    document.body.style.letterSpacing = `${spacing}px`;
  };

  const resetAccessibility = () => {
    setFontSize(100);
    setWordSpacing(0);
    setLetterSpacing(0);
    setActiveFeatures(new Set());
    document.documentElement.style.fontSize = '100%';
    document.body.style.wordSpacing = 'normal';
    document.body.style.letterSpacing = 'normal';
    document.documentElement.className = document.documentElement.className
      .split(' ')
      .filter(c => !c.startsWith('a11y-'))
      .join(' ');
  };

  const accessibilityButtons = [
    { id: 'grayscale', label: t('accessibility.grayscale') },
    { id: 'high-contrast', label: t('accessibility.highContrast') },
    { id: 'inverted', label: t('accessibility.invertedContrast') },
    { id: 'black-white', label: t('accessibility.blackWhite') },
    { id: 'highlight-links', label: t('accessibility.highlightLinks') },
    { id: 'hide-images', label: t('accessibility.hideImages') },
    { id: 'readable-font', label: t('accessibility.readableFont') },
    { id: 'dyslexia-font', label: t('accessibility.dyslexiaFont') },
    { id: 'text-to-speech', label: t('accessibility.textToSpeech') },
    { id: 'reading-guide', label: t('accessibility.readingGuide') },
    { id: 'big-cursor-dark', label: t('accessibility.bigCursorDark') },
    { id: 'big-cursor-light', label: t('accessibility.bigCursorLight') },
    { id: 'cancel-animations', label: t('accessibility.cancelAnimations') },
    { id: 'highlight-titles', label: t('accessibility.highlightTitles') },
  ];

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 left-4 z-50 rounded-full w-14 h-14 shadow-lg bg-primary hover:bg-primary/90"
        size="icon"
        aria-label={t('accessibility.tools')}
      >
        <Accessibility className="w-6 h-6" />
      </Button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-[60]"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] bg-white rounded-3xl shadow-2xl w-[min(95vw,460px)] max-h-[90vh] overflow-hidden">
            <div className="sticky top-0 bg-[#0EA5E9] text-white rounded-t-3xl px-6 py-5 flex justify-between items-center shadow-md z-10">
              <h3 className="font-bold text-xl">{t('accessibility.tools')}</h3>
              <Button
                onClick={() => setIsOpen(false)}
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/20 rounded-lg h-10 w-10"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6 space-y-6">
              <div className="grid grid-cols-3 gap-3">
                {accessibilityButtons.map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => toggleFeature(btn.id)}
                    className={`
                      h-auto py-4 px-3 text-sm font-medium rounded-xl border-2 transition-all
                      ${activeFeatures.has(btn.id)
                        ? 'bg-[#0EA5E9] text-white border-[#0EA5E9] shadow-md'
                        : 'bg-white text-gray-800 border-[#0EA5E9] hover:bg-blue-50'
                      }
                    `}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              <div className="space-y-6 bg-gray-50 rounded-2xl p-5">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-base font-semibold text-[#0EA5E9]">
                      {t('accessibility.fontSizeAdjust')}
                    </label>
                    <span className="text-base font-bold text-gray-800">{fontSize}%</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => adjustFontSize([Math.max(50, fontSize - 5)])}
                      className="h-10 w-10 rounded-lg border-2 border-gray-300 bg-white hover:bg-gray-100 font-bold text-lg flex items-center justify-center"
                    >
                      -
                    </button>
                    <Slider
                      value={[fontSize]}
                      onValueChange={adjustFontSize}
                      min={50}
                      max={200}
                      step={5}
                      className="flex-1 [&_[role=slider]]:bg-[#0EA5E9] [&_[role=slider]]:border-[#0EA5E9] [&_[role=slider]]:h-5 [&_[role=slider]]:w-5"
                    />
                    <button
                      onClick={() => adjustFontSize([Math.min(200, fontSize + 5)])}
                      className="h-10 w-10 rounded-lg border-2 border-gray-300 bg-white hover:bg-gray-100 font-bold text-lg flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-base font-semibold text-[#0EA5E9]">
                      {t('accessibility.wordSpacing')}
                    </label>
                    <span className="text-base font-bold text-gray-800">{wordSpacing.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => adjustWordSpacing([Math.max(0, wordSpacing - 0.5)])}
                      className="h-10 w-10 rounded-lg border-2 border-gray-300 bg-white hover:bg-gray-100 font-bold text-lg flex items-center justify-center"
                    >
                      -
                    </button>
                    <Slider
                      value={[wordSpacing]}
                      onValueChange={adjustWordSpacing}
                      min={0}
                      max={20}
                      step={0.5}
                      className="flex-1 [&_[role=slider]]:bg-[#0EA5E9] [&_[role=slider]]:border-[#0EA5E9] [&_[role=slider]]:h-5 [&_[role=slider]]:w-5"
                    />
                    <button
                      onClick={() => adjustWordSpacing([Math.min(20, wordSpacing + 0.5)])}
                      className="h-10 w-10 rounded-lg border-2 border-gray-300 bg-white hover:bg-gray-100 font-bold text-lg flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-base font-semibold text-[#0EA5E9]">
                      {t('accessibility.letterSpacing')}
                    </label>
                    <span className="text-base font-bold text-gray-800">{letterSpacing.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => adjustLetterSpacing([Math.max(0, letterSpacing - 0.25)])}
                      className="h-10 w-10 rounded-lg border-2 border-gray-300 bg-white hover:bg-gray-100 font-bold text-lg flex items-center justify-center"
                    >
                      -
                    </button>
                    <Slider
                      value={[letterSpacing]}
                      onValueChange={adjustLetterSpacing}
                      min={0}
                      max={10}
                      step={0.25}
                      className="flex-1 [&_[role=slider]]:bg-[#0EA5E9] [&_[role=slider]]:border-[#0EA5E9] [&_[role=slider]]:h-5 [&_[role=slider]]:w-5"
                    />
                    <button
                      onClick={() => adjustLetterSpacing([Math.min(10, letterSpacing + 0.25)])}
                      className="h-10 w-10 rounded-lg border-2 border-gray-300 bg-white hover:bg-gray-100 font-bold text-lg flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-5">
                <h4 className="text-base font-bold text-[#0EA5E9] mb-3">{t('accessibility.shortcuts')}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t('accessibility.shortcutsHelp')}
                </p>
              </div>

              <Button
                onClick={resetAccessibility}
                className="w-full h-12 text-base font-semibold rounded-xl border-2 border-[#0EA5E9] bg-white text-[#0EA5E9] hover:bg-blue-50"
              >
                {t('accessibility.reset')}
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AccessibilityWidget;
