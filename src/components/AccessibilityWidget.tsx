import React, { useState, useEffect, useRef } from 'react';
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
  const speechHandlerRef = useRef<(() => void) | null>(null);

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
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen, fontSize, activeFeatures]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      if (speechHandlerRef.current) {
        document.removeEventListener('mouseup', speechHandlerRef.current);
        document.removeEventListener('touchend', speechHandlerRef.current);
      }
    };
  }, []);

  const toggleFeature = (feature: string) => {
    const newFeatures = new Set(activeFeatures);
    if (newFeatures.has(feature)) {
      newFeatures.delete(feature);
      document.documentElement.classList.remove(`a11y-${feature}`);
      
      // Arrêter la lecture vocale et nettoyer les écouteurs
      if (feature === 'text-to-speech') {
        if (window.speechSynthesis) {
          window.speechSynthesis.cancel();
        }
        if (speechHandlerRef.current) {
          document.removeEventListener('mouseup', speechHandlerRef.current);
          document.removeEventListener('touchend', speechHandlerRef.current);
          speechHandlerRef.current = null;
        }
      }
    } else {
      newFeatures.add(feature);
      document.documentElement.classList.add(`a11y-${feature}`);
      
      // Activer la lecture vocale
      if (feature === 'text-to-speech') {
        enableTextToSpeech();
      }
    }
    setActiveFeatures(newFeatures);
  };

  const enableTextToSpeech = () => {
    if (!window.speechSynthesis) {
      alert(t('accessibility.textToSpeechNotSupported') || 'La synthèse vocale n\'est pas supportée par votre navigateur.');
      return;
    }

    // Nettoyer les anciens écouteurs
    if (speechHandlerRef.current) {
      document.removeEventListener('mouseup', speechHandlerRef.current);
      document.removeEventListener('touchend', speechHandlerRef.current);
    }

    // Fonction pour lire le texte sélectionné
    const speakSelectedText = () => {
      const selection = window.getSelection()?.toString().trim();
      if (selection && selection.length > 0) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(selection);
        utterance.lang = 'he-IL'; // Hébreu
        utterance.rate = 0.9;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
      }
    };

    // Stocker la référence et ajouter les écouteurs
    speechHandlerRef.current = speakSelectedText;
    document.addEventListener('mouseup', speakSelectedText);
    document.addEventListener('touchend', speakSelectedText);
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
    
    // Arrêter la lecture vocale et nettoyer les écouteurs
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (speechHandlerRef.current) {
      document.removeEventListener('mouseup', speechHandlerRef.current);
      document.removeEventListener('touchend', speechHandlerRef.current);
      speechHandlerRef.current = null;
    }
    
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
          <div className="fixed top-24 right-6 z-[70] bg-white rounded-[24px] shadow-2xl w-[400px] max-h-[calc(100vh-140px)] overflow-hidden">
            <div className="sticky top-0 bg-[#0EA5E9] text-white rounded-t-[24px] px-6 py-4 flex justify-between items-center z-10">
              <h3 className="font-bold text-[20px]">{t('accessibility.tools')}</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-lg h-10 w-10 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(100vh-120px)] p-5 space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {accessibilityButtons.map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => toggleFeature(btn.id)}
                    className={`
                      py-3.5 px-2.5 text-[13px] font-semibold rounded-[32px] border-[2px] transition-all leading-tight min-h-[60px] flex items-center justify-center
                      ${activeFeatures.has(btn.id)
                        ? 'bg-[#0EA5E9] text-white border-[#0EA5E9]'
                        : 'bg-white text-gray-900 border-[#0EA5E9] hover:bg-blue-50'
                      }
                    `}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              <div className="space-y-4 bg-[#F8F8F8] rounded-[20px] p-5">
                <div>
                  <div className="flex justify-center items-center mb-4">
                    <label className="text-[17px] font-bold text-[#0EA5E9]">
                      {t('accessibility.fontSizeAdjust')}
                    </label>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={() => adjustFontSize([Math.min(200, fontSize + 5)])}
                      className="h-10 w-10 rounded-full bg-white hover:bg-gray-50 font-bold text-[20px] flex items-center justify-center transition-colors border border-gray-200 shadow-sm shrink-0"
                    >
                      +
                    </button>
                    <span className="text-[20px] font-bold text-gray-900 min-w-[70px] text-center shrink-0">{fontSize}%</span>
                    <Slider
                      value={[fontSize]}
                      onValueChange={adjustFontSize}
                      min={50}
                      max={200}
                      step={5}
                      className="flex-1 max-w-[180px]"
                    />
                    <button
                      onClick={() => adjustFontSize([Math.max(50, fontSize - 5)])}
                      className="h-10 w-10 rounded-full bg-white hover:bg-gray-50 font-bold text-[20px] flex items-center justify-center transition-colors border border-gray-200 shadow-sm shrink-0"
                    >
                      -
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-center items-center mb-4">
                    <label className="text-[17px] font-bold text-[#0EA5E9]">
                      {t('accessibility.wordSpacing')}
                    </label>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={() => adjustWordSpacing([Math.min(20, wordSpacing + 0.5)])}
                      className="h-10 w-10 rounded-full bg-white hover:bg-gray-50 font-bold text-[20px] flex items-center justify-center transition-colors border border-gray-200 shadow-sm shrink-0"
                    >
                      +
                    </button>
                    <span className="text-[20px] font-bold text-gray-900 min-w-[70px] text-center shrink-0">{wordSpacing.toFixed(1)}</span>
                    <Slider
                      value={[wordSpacing]}
                      onValueChange={adjustWordSpacing}
                      min={0}
                      max={20}
                      step={0.5}
                      className="flex-1 max-w-[180px]"
                    />
                    <button
                      onClick={() => adjustWordSpacing([Math.max(0, wordSpacing - 0.5)])}
                      className="h-10 w-10 rounded-full bg-white hover:bg-gray-50 font-bold text-[20px] flex items-center justify-center transition-colors border border-gray-200 shadow-sm shrink-0"
                    >
                      -
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-center items-center mb-4">
                    <label className="text-[17px] font-bold text-[#0EA5E9]">
                      {t('accessibility.letterSpacing')}
                    </label>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={() => adjustLetterSpacing([Math.min(10, letterSpacing + 0.25)])}
                      className="h-10 w-10 rounded-full bg-white hover:bg-gray-50 font-bold text-[20px] flex items-center justify-center transition-colors border border-gray-200 shadow-sm shrink-0"
                    >
                      +
                    </button>
                    <span className="text-[20px] font-bold text-gray-900 min-w-[70px] text-center shrink-0">{letterSpacing.toFixed(2)}</span>
                    <Slider
                      value={[letterSpacing]}
                      onValueChange={adjustLetterSpacing}
                      min={0}
                      max={10}
                      step={0.25}
                      className="flex-1 max-w-[180px]"
                    />
                    <button
                      onClick={() => adjustLetterSpacing([Math.max(0, letterSpacing - 0.25)])}
                      className="h-10 w-10 rounded-full bg-white hover:bg-gray-50 font-bold text-[20px] flex items-center justify-center transition-colors border border-gray-200 shadow-sm shrink-0"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[20px] p-5 border border-gray-100">
                <h4 className="text-[16px] font-bold text-[#0EA5E9] mb-3 text-center">{t('accessibility.shortcuts')}</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed text-right">
                  {t('accessibility.shortcutsHelp')}
                </p>
              </div>

              <button
                onClick={resetAccessibility}
                className="w-full py-3.5 text-[16px] font-bold rounded-[32px] border-[2px] border-[#0EA5E9] bg-white text-[#0EA5E9] hover:bg-blue-50 transition-colors"
              >
                {t('accessibility.reset')}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AccessibilityWidget;
