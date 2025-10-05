import React, { useEffect, useState, useRef } from 'react';
import { useI18n } from '@/hooks/useI18n';

const ACC_STORAGE_KEY = 'acc_prefs_v3';

interface AccPrefs {
  fontPercent?: number;
  wordSpacing?: number;
  letterSpacing?: number;
  contrast?: boolean;
  grayscale?: boolean;
  invert?: boolean;
  monochrome?: boolean;
  underline?: boolean;
  hideImages?: boolean;
  readable?: boolean;
  dyslexia?: boolean;
  guide?: boolean;
  cursorLight?: boolean;
  cursorDark?: boolean;
  highlightH?: boolean;
  noAnim?: boolean;
}

const AccessibilityWidget = () => {
  const { t, language } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [prefs, setPrefs] = useState<AccPrefs>({});
  const [showQuickReset, setShowQuickReset] = useState(false);
  const guideRef = useRef<HTMLDivElement>(null);

  const texts = {
    he: {
      skip: 'דלג לתוכן הראשי',
      title: 'כְּלֵי נְגִישׁוּת',
      grayscale: 'גווני אפור',
      contrast: 'ניגודית גבוהה',
      invert: 'ניגודיות הפוכה',
      monochrome: 'שחור לבן',
      underline: 'הדגשת קישורים',
      hideImages: 'הסתרת תמונות',
      readable: 'גופן קריא',
      dyslexia: 'גופן דיסלקסיה',
      reading: 'הקראת טקסט',
      guide: 'מדריך קריאה',
      cursorLight: 'סמן גדול בהיר',
      cursorDark: 'סמן גדול כהה',
      highlightH: 'הדגשת כותרות',
      noAnim: 'ביטול אנימציות',
      reset: 'איפוס הגדרות',
      fontSize: 'התאמת גודל גופן',
      wordSpacing: 'התאמת ריווח בין מילים',
      letterSpacing: 'התאמת ריווח בין אותיות',
      statement: 'הצהרת נגישות',
      shortcuts: 'קיצורי דרך: Alt+Shift+A לפתיחה · C ניגודיות · I הפיכת צבעים · U קישורים · G גווני אפור · M שחור־לבן · X ביטול אנימציות · R איפוס · =/-/0 טקסט',
      label: 'כלי נגישות'
    },
    fr: {
      skip: 'Aller au contenu principal',
      title: 'Outils d\'accessibilité',
      grayscale: 'Niveaux de gris',
      contrast: 'Contraste élevé',
      invert: 'Inverser les couleurs',
      monochrome: 'Noir et blanc',
      underline: 'Souligner les liens',
      hideImages: 'Masquer les images',
      readable: 'Police lisible',
      dyslexia: 'Police dyslexie',
      reading: 'Lecture vocale',
      guide: 'Guide de lecture',
      cursorLight: 'Grand curseur clair',
      cursorDark: 'Grand curseur foncé',
      highlightH: 'Surligner les titres',
      noAnim: 'Désactiver animations',
      reset: 'Réinitialiser',
      fontSize: 'Taille du texte',
      wordSpacing: 'Espacement des mots',
      letterSpacing: 'Espacement des lettres',
      statement: 'Déclaration d\'accessibilité',
      shortcuts: 'Raccourcis: Alt+Shift+A ouvrir · C contraste · I inverser · U liens · G gris · M monochrome · X animations · R réinitialiser',
      label: 'Outils d\'accessibilité'
    },
    en: {
      skip: 'Skip to main content',
      title: 'Accessibility Tools',
      grayscale: 'Grayscale',
      contrast: 'High contrast',
      invert: 'Invert colors',
      monochrome: 'Monochrome',
      underline: 'Underline links',
      hideImages: 'Hide images',
      readable: 'Readable font',
      dyslexia: 'Dyslexia font',
      reading: 'Text to speech',
      guide: 'Reading guide',
      cursorLight: 'Large light cursor',
      cursorDark: 'Large dark cursor',
      highlightH: 'Highlight headings',
      noAnim: 'Disable animations',
      reset: 'Reset settings',
      fontSize: 'Text size',
      wordSpacing: 'Word spacing',
      letterSpacing: 'Letter spacing',
      statement: 'Accessibility statement',
      shortcuts: 'Shortcuts: Alt+Shift+A open · C contrast · I invert · U links · G grayscale · M monochrome · X animations · R reset',
      label: 'Accessibility tools'
    }
  };

  const l = texts[language as keyof typeof texts] || texts.en;

  // Load preferences
  useEffect(() => {
    try {
      const saved = localStorage.getItem(ACC_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setPrefs(parsed);
        applyPreferences(parsed);
        checkQuickReset(parsed);
      }
    } catch (e) {
      console.error('Error loading accessibility preferences:', e);
    }
  }, []);

  const applyPreferences = (p: AccPrefs) => {
    const html = document.documentElement;
    
    // Font size
    if (p.fontPercent) {
      html.style.fontSize = (p.fontPercent / 100 * 16) + 'px';
    }
    
    // Spacing
    if (p.wordSpacing !== undefined) {
      html.style.setProperty('--acc-word-spacing', p.wordSpacing + 'em');
    }
    if (p.letterSpacing !== undefined) {
      html.style.setProperty('--acc-letter-spacing', p.letterSpacing + 'em');
    }
    
    // Classes
    html.classList.remove(
      'acc-contrast', 'acc-grayscale', 'acc-invert', 'acc-monochrome',
      'acc-underline', 'acc-hide-images', 'acc-readable', 'acc-dyslexia',
      'acc-guide', 'acc-cursor-light', 'acc-cursor-dark', 'acc-highlight-h',
      'acc-no-anim', 'acc-filter-on'
    );
    
    if (p.contrast) html.classList.add('acc-contrast');
    if (p.grayscale) html.classList.add('acc-grayscale');
    if (p.invert) html.classList.add('acc-invert');
    if (p.monochrome) html.classList.add('acc-monochrome');
    if (p.underline) html.classList.add('acc-underline');
    if (p.hideImages) html.classList.add('acc-hide-images');
    if (p.readable) html.classList.add('acc-readable');
    if (p.dyslexia) html.classList.add('acc-dyslexia');
    if (p.guide) html.classList.add('acc-guide');
    if (p.cursorLight) html.classList.add('acc-cursor-light');
    if (p.cursorDark) html.classList.add('acc-cursor-dark');
    if (p.highlightH) html.classList.add('acc-highlight-h');
    if (p.noAnim) html.classList.add('acc-no-anim');
    
    rebuildFilter(p);
  };

  const rebuildFilter = (p: AccPrefs) => {
    const html = document.documentElement;
    const filters: string[] = [];
    
    if (p.invert) filters.push('invert(1) hue-rotate(180deg)');
    if (p.grayscale) filters.push('grayscale(1)');
    
    html.style.setProperty('--acc-filter', filters.join(' '));
    if (filters.length) {
      html.classList.add('acc-filter-on');
    } else {
      html.classList.remove('acc-filter-on');
    }
  };

  const checkQuickReset = (p: AccPrefs) => {
    const isActive = Object.keys(p).some(k => {
      if (k === 'fontPercent') return p[k] !== 100;
      if (k === 'wordSpacing' || k === 'letterSpacing') return (p[k as keyof AccPrefs] as number) > 0;
      return !!p[k as keyof AccPrefs];
    });
    setShowQuickReset(isActive);
  };

  const savePrefs = (newPrefs: AccPrefs) => {
    localStorage.setItem(ACC_STORAGE_KEY, JSON.stringify(newPrefs));
    setPrefs(newPrefs);
    applyPreferences(newPrefs);
    checkQuickReset(newPrefs);
  };

  const handleToggle = (key: keyof AccPrefs) => {
    const newPrefs = { ...prefs, [key]: !prefs[key] };
    
    // Enforce cursor exclusivity
    if (key === 'cursorLight' && newPrefs.cursorLight) {
      newPrefs.cursorDark = false;
    }
    if (key === 'cursorDark' && newPrefs.cursorDark) {
      newPrefs.cursorLight = false;
    }
    
    savePrefs(newPrefs);
  };

  const handleSlider = (key: keyof AccPrefs, value: number) => {
    savePrefs({ ...prefs, [key]: value });
  };

  const handleReading = () => {
    try {
      const synth = window.speechSynthesis;
      if (!synth) {
        alert('Your browser does not support text-to-speech.');
        return;
      }
      
      let text = window.getSelection()?.toString().trim();
      if (!text) {
        text = document.body.innerText.slice(0, 1000);
      }
      
      synth.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      
      const voices = synth.getVoices();
      const langVoice = voices.find(v => v.lang.startsWith(language));
      if (langVoice) utter.voice = langVoice;
      
      utter.rate = 1;
      utter.pitch = 1;
      synth.speak(utter);
    } catch (e) {
      console.error('Speech synthesis error:', e);
    }
  };

  const handleReset = () => {
    localStorage.removeItem(ACC_STORAGE_KEY);
    setPrefs({});
    setShowQuickReset(false);
    
    const html = document.documentElement;
    html.classList.remove(
      'acc-contrast', 'acc-grayscale', 'acc-invert', 'acc-monochrome',
      'acc-underline', 'acc-hide-images', 'acc-readable', 'acc-dyslexia',
      'acc-guide', 'acc-cursor-light', 'acc-cursor-dark', 'acc-highlight-h',
      'acc-no-anim', 'acc-filter-on'
    );
    html.style.removeProperty('font-size');
    html.style.removeProperty('--acc-word-spacing');
    html.style.removeProperty('--acc-letter-spacing');
    html.style.removeProperty('--acc-filter');
  };

  // Mouse tracking for reading guide
  useEffect(() => {
    if (!prefs.guide) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (guideRef.current) {
        guideRef.current.style.transform = `translateY(${e.clientY - 19}px)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [prefs.guide]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (!(e.altKey && e.shiftKey)) return;
      const k = e.key.toLowerCase();
      
      if (k === 'a') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (k === 'c') {
        e.preventDefault();
        handleToggle('contrast');
      }
      if (k === 'i') {
        e.preventDefault();
        handleToggle('invert');
      }
      if (k === 'u') {
        e.preventDefault();
        handleToggle('underline');
      }
      if (k === 'g') {
        e.preventDefault();
        handleToggle('grayscale');
      }
      if (k === 'm') {
        e.preventDefault();
        handleToggle('monochrome');
      }
      if (k === 'x') {
        e.preventDefault();
        handleToggle('noAnim');
      }
      if (k === 'h') {
        e.preventDefault();
        handleToggle('highlightH');
      }
      if (k === 'l') {
        e.preventDefault();
        handleToggle('hideImages');
      }
      if (k === 'r') {
        e.preventDefault();
        handleReset();
      }
      if (k === '=' || k === '+') {
        e.preventDefault();
        const newVal = Math.min((prefs.fontPercent || 100) + 5, 160);
        handleSlider('fontPercent', newVal);
      }
      if (k === '-') {
        e.preventDefault();
        const newVal = Math.max((prefs.fontPercent || 100) - 5, 80);
        handleSlider('fontPercent', newVal);
      }
      if (k === '0') {
        e.preventDefault();
        handleSlider('fontPercent', 100);
      }
      
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard);
  }, [isOpen, prefs]);

  const Tile = ({ id, checked, onClick, children }: { id: string; checked: boolean; onClick: () => void; children: React.ReactNode }) => (
    <button
      type="button"
      className={`acc-tile ${checked ? 'active' : ''}`}
      id={id}
      role="switch"
      aria-checked={checked}
      onClick={onClick}
    >
      {children}
    </button>
  );

  const ActionTile = ({ id, onClick, children }: { id: string; onClick: () => void; children: React.ReactNode }) => (
    <button
      type="button"
      className="acc-tile"
      id={id}
      role="button"
      onClick={onClick}
    >
      {children}
    </button>
  );

  const RangeControl = ({ 
    title, 
    min, 
    max, 
    step, 
    value, 
    format, 
    onChange 
  }: { 
    title: string; 
    min: number; 
    max: number; 
    step: number; 
    value: number; 
    format: (v: number) => string; 
    onChange: (v: number) => void;
  }) => (
    <div className="acc-range">
      <h4>{title}</h4>
      <div className="acc-range-row">
        <button 
          type="button" 
          onClick={() => onChange(Math.max(min, value - step))}
          aria-label="Decrease"
        >
          -
        </button>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          aria-label={title}
        />
        <div className="acc-range-val">{format(value)}</div>
        <button 
          type="button" 
          onClick={() => onChange(Math.min(max, value + step))}
          aria-label="Increase"
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        /* Skip link */
        .acc-skip {
          position: absolute;
          left: -9999px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: 9999;
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          padding: 0.6rem 1rem;
          border-radius: 0.4rem;
        }
        .acc-skip:focus {
          left: 1rem;
          top: 1rem;
          width: auto;
          height: auto;
          overflow: visible;
        }

        /* Variables */
        :root {
          --acc-letter-spacing: normal;
          --acc-word-spacing: normal;
          --acc-filter: none;
        }

        body {
          letter-spacing: var(--acc-letter-spacing);
          word-spacing: var(--acc-word-spacing);
        }

        /* States */
        html.acc-contrast {
          --background: 222.2 84% 4.9%;
          --card: 222.2 84% 4.9%;
          --foreground: 210 40% 98%;
          --muted: 217.2 32.6% 17.5%;
          --muted-foreground: 215 20.2% 65.1%;
        }
        html.acc-contrast img, html.acc-contrast video {
          filter: contrast(1.1) saturate(1.1);
        }

        /* Filters applied to body, widget excluded */
        html.acc-filter-on body {
          filter: var(--acc-filter) !important;
        }

        html.acc-monochrome body {
          filter: grayscale(1) contrast(1.2) !important;
        }

        html.acc-grayscale body {
          filter: grayscale(1) !important;
        }
        
        /* Always keep widget visible - force no filter */
        .acc-toggler, .acc-panel, .acc-quick-reset, #acc-reading-guide {
          filter: none !important;
        }

        html.acc-underline a,
        html.acc-underline [role="link"] {
          text-decoration: underline !important;
        }

        /* ===== SAFE 'hide images' (never hide inside the widget itself) ===== */
        html.acc-hide-images body img,
        html.acc-hide-images body picture,
        html.acc-hide-images body figure {
          display: none !important;
        }
        html.acc-hide-images body * {
          background-image: none !important;
        }
        /* Restore inside widget */
        html.acc-hide-images #acc-panel img,
        html.acc-hide-images #acc-panel picture,
        html.acc-hide-images #acc-panel figure {
          display: initial !important;
        }
        html.acc-hide-images #acc-panel *,
        html.acc-hide-images #acc-toggler,
        html.acc-hide-images #acc-quick-reset {
          background-image: initial !important;
        }

        @font-face {
          font-family: AccReadableFallback;
          font-weight: 400;
          font-style: normal;
          src: local("Atkinson Hyperlegible"), local("Inter"), local("Arial");
        }
        html.acc-readable {
          font-family: AccReadableFallback, system-ui, Arial, sans-serif;
        }

        @font-face {
          font-family: AccDyslexicFallback;
          font-weight: 400;
          font-style: normal;
          src: local("OpenDyslexic"), local("Atkinson Hyperlegible"), local("Arial");
        }
        html.acc-dyslexia {
          font-family: AccDyslexicFallback, system-ui, Arial, sans-serif;
          letter-spacing: 0.0125em;
        }

        html.acc-no-anim * {
          animation: none !important;
          transition: none !important;
          scroll-behavior: auto !important;
        }

        html.acc-highlight-h h1,
        html.acc-highlight-h h2,
        html.acc-highlight-h h3,
        html.acc-highlight-h h4,
        html.acc-highlight-h h5,
        html.acc-highlight-h h6 {
          background: hsl(var(--accent) / 0.3);
          outline: 2px dashed hsl(var(--primary));
          padding-inline: 6px;
          border-radius: 6px;
        }

        html.acc-cursor-light * {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><circle cx="12" cy="12" r="10" fill="white" stroke="black" stroke-width="2"/></svg>') 2 2, auto !important;
        }

        html.acc-cursor-dark * {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><circle cx="12" cy="12" r="10" fill="black" stroke="white" stroke-width="2"/></svg>') 2 2, auto !important;
        }

        #acc-reading-guide {
          position: fixed;
          inset-inline: 0;
          height: 38px;
          pointer-events: none;
          z-index: 99999;
          background: linear-gradient(to bottom, transparent 0, rgba(255, 235, 150, 0.6) 40%, rgba(255, 235, 150, 0.6) 60%, transparent 100%);
          display: none;
        }
        html.acc-guide #acc-reading-guide {
          display: block;
        }

        /* Enhanced focus */
        :where(a, button, input, select, textarea, [tabindex]):focus-visible {
          outline: 3px solid hsl(var(--ring));
          outline-offset: 2px;
        }

        /* Widget button */
        .acc-toggler {
          position: fixed;
          inset-inline-end: 16px;
          inset-block-end: 16px;
          width: 54px;
          height: 54px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          box-shadow: 0 8px 24px rgba(2, 8, 23, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          z-index: 99999;
          transition: transform 0.2s ease;
        }
        .acc-toggler:hover {
          transform: scale(1.05);
        }

        /* Quick reset button */
        .acc-quick-reset {
          position: fixed;
          inset-inline-end: 78px;
          inset-block-end: 22px;
          z-index: 99999;
          display: none;
          align-items: center;
          gap: 0.4rem;
          background: hsl(var(--background));
          border: 1px solid hsl(var(--border));
          border-radius: 999px;
          padding: 0.3rem 0.6rem;
          font-size: 12px;
          font-weight: 600;
          color: hsl(var(--primary));
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(2, 8, 23, 0.12);
          transition: all 0.2s ease;
        }
        .acc-quick-reset.show {
          display: inline-flex;
        }
        .acc-quick-reset:hover {
          background: hsl(var(--muted));
          transform: scale(1.05);
        }
        .acc-quick-reset:focus-visible {
          outline: 3px solid hsl(var(--ring));
          outline-offset: 2px;
        }

        /* Panel */
        .acc-panel {
          position: fixed;
          inset-inline-end: 16px;
          inset-block-end: 80px;
          width: min(92vw, 360px);
          max-height: 78vh;
          overflow: auto;
          background: hsl(var(--card));
          color: hsl(var(--card-foreground));
          border: 1px solid hsl(var(--border));
          border-radius: 14px;
          box-shadow: 0 12px 32px rgba(2, 8, 23, 0.18);
          padding: 12px;
          z-index: 99999;
          display: none;
        }
        .acc-panel.open {
          display: block;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .acc-panel h3 {
          margin: 0 0 10px;
          font-size: 18px;
          font-weight: 700;
          text-align: center;
          padding: 8px;
          border-radius: 8px;
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        }

        #acc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
        }

        .acc-tile {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 14px 6px;
          border: 2px solid hsl(var(--primary));
          border-radius: 14px;
          background: hsl(var(--muted));
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          user-select: none;
          transition: all 0.2s ease;
          color: hsl(var(--foreground));
        }

        .acc-tile.active,
        .acc-tile[aria-checked="true"] {
          background: hsl(var(--primary) / 0.2);
          outline: 2px solid hsl(var(--primary));
        }

        .acc-tile:hover {
          background: hsl(var(--primary) / 0.1);
        }

        .acc-range {
          background: hsl(var(--muted));
          padding: 12px;
          border-radius: 12px;
          margin: 12px 0;
        }

        .acc-range h4 {
          margin: 0 0 8px;
          font-size: 15px;
          font-weight: 700;
          text-align: center;
          color: hsl(var(--primary));
        }

        .acc-range-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .acc-range button {
          width: 36px;
          height: 36px;
          border-radius: 999px;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--background));
          cursor: pointer;
          font-size: 20px;
          color: hsl(var(--foreground));
        }

        .acc-range input[type="range"] {
          flex: 1;
          accent-color: hsl(var(--primary));
        }

        .acc-range-val {
          min-width: 56px;
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          color: hsl(var(--foreground));
        }

        .acc-actions {
          display: flex;
          gap: 12px;
          align-items: center;
          padding: 8px 6px;
          flex-wrap: wrap;
        }

        .acc-policy-link {
          color: hsl(var(--primary));
          text-decoration: underline;
          font-size: 14px;
        }

        .acc-help-text {
          margin: 12px 6px 0;
          color: hsl(var(--muted-foreground));
          font-size: 12px;
          line-height: 1.4;
        }
      `}</style>

      {/* Skip link */}
      <a href="#main-content" className="acc-skip">
        {l.skip}
      </a>

      {/* Toggle button */}
      <button
        className="acc-toggler"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={l.label}
      >
        ♿
      </button>

      {/* Quick reset button */}
      <button
        className={`acc-quick-reset ${showQuickReset ? 'show' : ''}`}
        type="button"
        onClick={handleReset}
        aria-label={l.reset}
      >
        ↺ {l.reset}
      </button>

      {/* Panel */}
      <div
        className={`acc-panel ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal={isOpen}
        dir={language === 'he' ? 'rtl' : 'ltr'}
      >
        <h3>{l.title}</h3>

        {/* Grid of tiles */}
        <div id="acc-grid" aria-label={l.title}>
          <Tile id="btn-grayscale" checked={!!prefs.grayscale} onClick={() => handleToggle('grayscale')}>
            {l.grayscale}
          </Tile>
          <Tile id="btn-contrast" checked={!!prefs.contrast} onClick={() => handleToggle('contrast')}>
            {l.contrast}
          </Tile>
          <Tile id="btn-invert" checked={!!prefs.invert} onClick={() => handleToggle('invert')}>
            {l.invert}
          </Tile>

          <Tile id="btn-monochrome" checked={!!prefs.monochrome} onClick={() => handleToggle('monochrome')}>
            {l.monochrome}
          </Tile>
          <Tile id="btn-underline" checked={!!prefs.underline} onClick={() => handleToggle('underline')}>
            {l.underline}
          </Tile>
          <Tile id="btn-hide-images" checked={!!prefs.hideImages} onClick={() => handleToggle('hideImages')}>
            {l.hideImages}
          </Tile>

          <Tile id="btn-readable" checked={!!prefs.readable} onClick={() => handleToggle('readable')}>
            {l.readable}
          </Tile>
          <Tile id="btn-dyslexia" checked={!!prefs.dyslexia} onClick={() => handleToggle('dyslexia')}>
            {l.dyslexia}
          </Tile>
          <ActionTile id="btn-reading" onClick={handleReading}>
            {l.reading}
          </ActionTile>

          <Tile id="btn-guide" checked={!!prefs.guide} onClick={() => handleToggle('guide')}>
            {l.guide}
          </Tile>
          <Tile id="btn-cursor-light" checked={!!prefs.cursorLight} onClick={() => handleToggle('cursorLight')}>
            {l.cursorLight}
          </Tile>
          <Tile id="btn-cursor-dark" checked={!!prefs.cursorDark} onClick={() => handleToggle('cursorDark')}>
            {l.cursorDark}
          </Tile>

          <Tile id="btn-highlight-h" checked={!!prefs.highlightH} onClick={() => handleToggle('highlightH')}>
            {l.highlightH}
          </Tile>
          <Tile id="btn-no-anim" checked={!!prefs.noAnim} onClick={() => handleToggle('noAnim')}>
            {l.noAnim}
          </Tile>
          <ActionTile id="btn-reset" onClick={handleReset}>
            {l.reset}
          </ActionTile>
        </div>

        {/* Range controls */}
        <RangeControl
          title={l.fontSize}
          min={80}
          max={160}
          step={5}
          value={prefs.fontPercent || 100}
          format={(v) => Math.round(v) + '%'}
          onChange={(v) => handleSlider('fontPercent', v)}
        />

        <RangeControl
          title={l.wordSpacing}
          min={0}
          max={1.2}
          step={0.1}
          value={prefs.wordSpacing || 0}
          format={(v) => v.toFixed(1)}
          onChange={(v) => handleSlider('wordSpacing', v)}
        />

        <RangeControl
          title={l.letterSpacing}
          min={0}
          max={0.2}
          step={0.01}
          value={prefs.letterSpacing || 0}
          format={(v) => v.toFixed(2)}
          onChange={(v) => handleSlider('letterSpacing', v)}
        />

        {/* Actions */}
        <div className="acc-actions">
          <a
            className="acc-policy-link"
            href="/accessibility-statement"
            target="_blank"
            rel="noopener noreferrer"
          >
            {l.statement}
          </a>
        </div>

        {/* Help text */}
        <p className="acc-help-text">
          {l.shortcuts}
        </p>
      </div>

      {/* Reading guide overlay */}
      <div id="acc-reading-guide" ref={guideRef} aria-hidden="true" />
    </>
  );
};

export default AccessibilityWidget;
