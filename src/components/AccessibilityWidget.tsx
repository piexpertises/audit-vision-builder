import React, { useState } from 'react';
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
    document.documentElement.style.setProperty('--word-spacing', `${spacing}px`);
  };

  const adjustLetterSpacing = (value: number[]) => {
    const spacing = value[0];
    setLetterSpacing(spacing);
    document.documentElement.style.setProperty('--letter-spacing', `${spacing}px`);
  };

  const resetAccessibility = () => {
    setFontSize(100);
    setWordSpacing(0);
    setLetterSpacing(0);
    setActiveFeatures(new Set());
    document.documentElement.style.fontSize = '100%';
    document.documentElement.style.removeProperty('--word-spacing');
    document.documentElement.style.removeProperty('--letter-spacing');
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
        className="fixed bottom-20 left-4 z-50 rounded-full w-12 h-12 shadow-lg"
        size="icon"
        aria-label={t('accessibility.tools')}
      >
        <Accessibility className="w-5 h-5" />
      </Button>

      {isOpen && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-background border rounded-2xl shadow-2xl w-[min(90vw,440px)] max-h-[85vh] overflow-y-auto">
          <div className="sticky top-0 bg-primary text-primary-foreground rounded-t-2xl p-4 flex justify-between items-center">
            <h3 className="font-bold text-lg">{t('accessibility.tools')}</h3>
            <Button
              onClick={() => setIsOpen(false)}
              size="icon"
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-3 gap-3">
              {accessibilityButtons.map((btn) => (
                <Button
                  key={btn.id}
                  onClick={() => toggleFeature(btn.id)}
                  variant={activeFeatures.has(btn.id) ? 'default' : 'outline'}
                  className="h-auto py-3 px-2 text-xs whitespace-normal"
                >
                  {btn.label}
                </Button>
              ))}
            </div>

            <div className="space-y-4 bg-muted/50 rounded-lg p-4">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-primary">
                    {t('accessibility.fontSizeAdjust')}
                  </label>
                  <span className="text-sm font-bold">{fontSize}%</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8"
                    onClick={() => adjustFontSize([Math.max(50, fontSize - 10)])}
                  >
                    +
                  </Button>
                  <Slider
                    value={[fontSize]}
                    onValueChange={adjustFontSize}
                    min={50}
                    max={200}
                    step={5}
                    className="flex-1"
                  />
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8"
                    onClick={() => adjustFontSize([Math.min(200, fontSize + 10)])}
                  >
                    -
                  </Button>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-primary">
                    {t('accessibility.wordSpacing')}
                  </label>
                  <span className="text-sm font-bold">{wordSpacing.toFixed(1)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8"
                    onClick={() => adjustWordSpacing([Math.max(0, wordSpacing - 1)])}
                  >
                    +
                  </Button>
                  <Slider
                    value={[wordSpacing]}
                    onValueChange={adjustWordSpacing}
                    min={0}
                    max={20}
                    step={0.5}
                    className="flex-1"
                  />
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8"
                    onClick={() => adjustWordSpacing([Math.min(20, wordSpacing + 1)])}
                  >
                    -
                  </Button>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-primary">
                    {t('accessibility.letterSpacing')}
                  </label>
                  <span className="text-sm font-bold">{letterSpacing.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8"
                    onClick={() => adjustLetterSpacing([Math.max(0, letterSpacing - 0.5)])}
                  >
                    +
                  </Button>
                  <Slider
                    value={[letterSpacing]}
                    onValueChange={adjustLetterSpacing}
                    min={0}
                    max={10}
                    step={0.25}
                    className="flex-1"
                  />
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8"
                    onClick={() => adjustLetterSpacing([Math.min(10, letterSpacing + 0.5)])}
                  >
                    -
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="text-sm font-medium text-primary mb-2">{t('accessibility.shortcuts')}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t('accessibility.shortcutsHelp')}
              </p>
            </div>

            <Button
              onClick={resetAccessibility}
              variant="outline"
              className="w-full"
            >
              {t('accessibility.reset')}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityWidget;
