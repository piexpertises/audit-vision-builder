import React, { useEffect, useState } from 'react';
import { useI18n } from '@/hooks/useI18n';

const ACC_STORAGE_KEY = 'acc_prefs_v1';

interface AccPrefs {
  zoomLevel?: number;
  contrast?: boolean;
  grayscale?: boolean;
  underline?: boolean;
  dyslexia?: boolean;
}

const AccessibilityWidget = () => {
  const { t, language } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [prefs, setPrefs] = useState<AccPrefs>({});

  // Load preferences from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(ACC_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setPrefs(parsed);
        applyPreferences(parsed);
      }
    } catch (e) {
      console.error('Error loading accessibility preferences:', e);
    }
  }, []);

  const applyPreferences = (p: AccPrefs) => {
    const html = document.documentElement;
    
    // Remove all classes first
    html.classList.remove('acc-zoom-1', 'acc-zoom-2', 'acc-zoom-3', 'acc-contrast', 'acc-grayscale', 'acc-underline', 'acc-dyslexia');
    
    // Apply zoom
    if (p.zoomLevel === 1) html.classList.add('acc-zoom-1');
    if (p.zoomLevel === 2) html.classList.add('acc-zoom-2');
    if (p.zoomLevel === 3) html.classList.add('acc-zoom-3');
    
    // Apply toggles
    if (p.contrast) html.classList.add('acc-contrast');
    if (p.grayscale) html.classList.add('acc-grayscale');
    if (p.underline) html.classList.add('acc-underline');
    if (p.dyslexia) html.classList.add('acc-dyslexia');
  };

  const savePrefs = (newPrefs: AccPrefs) => {
    localStorage.setItem(ACC_STORAGE_KEY, JSON.stringify(newPrefs));
    setPrefs(newPrefs);
    applyPreferences(newPrefs);
  };

  const handleZoom = (level: number) => {
    savePrefs({ ...prefs, zoomLevel: level });
  };

  const handleToggle = (key: keyof AccPrefs) => {
    savePrefs({ ...prefs, [key]: !prefs[key] });
  };

  const handleReset = () => {
    localStorage.removeItem(ACC_STORAGE_KEY);
    setPrefs({});
    applyPreferences({});
    window.location.reload();
  };

  const togglePanel = () => setIsOpen(!isOpen);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (!(e.altKey && e.shiftKey)) return;
      const k = e.key.toLowerCase();
      
      if (k === 'a') {
        e.preventDefault();
        togglePanel();
      }
      if (k === 'c') {
        e.preventDefault();
        handleToggle('contrast');
      }
      if (k === 'u') {
        e.preventDefault();
        handleToggle('underline');
      }
      if (k === 'g') {
        e.preventDefault();
        handleToggle('grayscale');
      }
      if (k === 'd') {
        e.preventDefault();
        handleToggle('dyslexia');
      }
      if (k === '=' || k === '+') {
        e.preventDefault();
        handleZoom(Math.min((prefs.zoomLevel || 0) + 1, 3));
      }
      if (k === '-') {
        e.preventDefault();
        handleZoom(Math.max((prefs.zoomLevel || 0) - 1, 0));
      }
      if (k === '0') {
        e.preventDefault();
        handleZoom(0);
      }
      
      // Escape to close
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard);
  }, [isOpen, prefs]);

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

        /* Accessibility states */
        html.acc-zoom-1 { font-size: calc(16px * 1.1); }
        html.acc-zoom-2 { font-size: calc(16px * 1.25); }
        html.acc-zoom-3 { font-size: calc(16px * 1.4); }

        html.acc-contrast {
          --background: 222.2 84% 4.9%;
          --card: 222.2 84% 4.9%;
          --foreground: 210 40% 98%;
          --muted: 217.2 32.6% 17.5%;
          --muted-foreground: 215 20.2% 65.1%;
        }
        html.acc-contrast img,
        html.acc-contrast video {
          filter: contrast(1.1) saturate(1.1);
        }

        html.acc-grayscale body {
          filter: grayscale(1);
        }

        html.acc-underline a,
        html.acc-underline [role="link"] {
          text-decoration: underline !important;
        }

        html.acc-dyslexia {
          font-family: 'Atkinson Hyperlegible', 'OpenDyslexic', Arial, sans-serif;
          letter-spacing: 0.0125em;
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

        /* Panel */
        .acc-panel {
          position: fixed;
          inset-inline-end: 16px;
          inset-block-end: 80px;
          width: min(92vw, 360px);
          max-height: 70vh;
          overflow: auto;
          background: hsl(var(--card));
          color: hsl(var(--card-foreground));
          border: 1px solid hsl(var(--border));
          border-radius: 14px;
          box-shadow: 0 12px 32px rgba(2, 8, 23, 0.18);
          padding: 16px;
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
          margin: 0 0 12px;
          font-size: 18px;
          font-weight: 700;
          color: hsl(var(--foreground));
        }

        .acc-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 10px 8px;
          border-radius: 10px;
          background: hsl(var(--muted));
          margin-block: 8px;
        }

        .acc-row label {
          font-size: 14px;
          font-weight: 600;
          color: hsl(var(--foreground));
        }

        .acc-zoom-btns {
          display: flex;
          gap: 6px;
        }

        .acc-zoom-btn {
          padding: 4px 8px;
          border: 1px solid hsl(var(--border));
          border-radius: 6px;
          background: hsl(var(--background));
          cursor: pointer;
          transition: all 0.2s ease;
          color: hsl(var(--foreground));
        }

        .acc-zoom-btn.active {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          border-color: hsl(var(--primary));
        }

        .acc-switch {
          position: relative;
          width: 46px;
          height: 26px;
          border-radius: 999px;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--background));
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
        }

        .acc-switch .dot {
          width: 20px;
          height: 20px;
          border-radius: 999px;
          background: hsl(var(--muted-foreground));
          position: absolute;
          inset-block-start: 2px;
          inset-inline-start: 2px;
          transition: all 0.2s ease;
        }

        .acc-switch.active {
          background: hsl(var(--primary));
          border-color: hsl(var(--primary));
        }

        .acc-switch.active .dot {
          background: hsl(var(--primary-foreground));
          inset-inline-start: 24px;
        }

        .acc-actions {
          display: flex;
          gap: 12px;
          align-items: center;
          padding: 8px 6px;
        }

        .acc-reset-btn {
          padding: 8px 16px;
          border: 1px solid hsl(var(--border));
          border-radius: 8px;
          background: hsl(var(--background));
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          color: hsl(var(--foreground));
          transition: all 0.2s ease;
        }

        .acc-reset-btn:hover {
          background: hsl(var(--muted));
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
        {language === 'he' ? 'דלג לתוכן הראשי' : language === 'fr' ? 'Aller au contenu principal' : 'Skip to main content'}
      </a>

      {/* Toggle button */}
      <button
        className="acc-toggler"
        type="button"
        onClick={togglePanel}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={language === 'he' ? 'כלי נגישות' : language === 'fr' ? 'Outils d\'accessibilité' : 'Accessibility tools'}
      >
        ♿
      </button>

      {/* Panel */}
      <div
        className={`acc-panel ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal={isOpen}
        dir={language === 'he' ? 'rtl' : 'ltr'}
      >
        <h3>
          {language === 'he' ? 'כלי נגישות' : language === 'fr' ? 'Outils d\'accessibilité' : 'Accessibility Tools'}
        </h3>

        {/* Text size */}
        <div className="acc-row">
          <label>
            {language === 'he' ? 'גודל טקסט' : language === 'fr' ? 'Taille du texte' : 'Text size'}
          </label>
          <div className="acc-zoom-btns">
            {[0, 1, 2, 3].map((level) => (
              <button
                key={level}
                type="button"
                className={`acc-zoom-btn ${prefs.zoomLevel === level ? 'active' : ''}`}
                onClick={() => handleZoom(level)}
                style={{ fontSize: level === 0 ? '1em' : `${1 + level * 0.15}em` }}
                aria-pressed={prefs.zoomLevel === level}
              >
                A
              </button>
            ))}
          </div>
        </div>

        {/* High contrast */}
        <div className="acc-row">
          <label>
            {language === 'he' ? 'ניגודיות גבוהה' : language === 'fr' ? 'Contraste élevé' : 'High contrast'}
          </label>
          <button
            type="button"
            className={`acc-switch ${prefs.contrast ? 'active' : ''}`}
            onClick={() => handleToggle('contrast')}
            role="switch"
            aria-checked={!!prefs.contrast}
          >
            <span className="dot" aria-hidden="true" />
          </button>
        </div>

        {/* Grayscale */}
        <div className="acc-row">
          <label>
            {language === 'he' ? 'גווני אפור' : language === 'fr' ? 'Niveaux de gris' : 'Grayscale'}
          </label>
          <button
            type="button"
            className={`acc-switch ${prefs.grayscale ? 'active' : ''}`}
            onClick={() => handleToggle('grayscale')}
            role="switch"
            aria-checked={!!prefs.grayscale}
          >
            <span className="dot" aria-hidden="true" />
          </button>
        </div>

        {/* Underline links */}
        <div className="acc-row">
          <label>
            {language === 'he' ? 'הדגשת קישורים' : language === 'fr' ? 'Souligner les liens' : 'Underline links'}
          </label>
          <button
            type="button"
            className={`acc-switch ${prefs.underline ? 'active' : ''}`}
            onClick={() => handleToggle('underline')}
            role="switch"
            aria-checked={!!prefs.underline}
          >
            <span className="dot" aria-hidden="true" />
          </button>
        </div>

        {/* Dyslexia font */}
        <div className="acc-row">
          <label>
            {language === 'he' ? 'גופן ידידותי לדיסלקסיה' : language === 'fr' ? 'Police pour dyslexie' : 'Dyslexia-friendly font'}
          </label>
          <button
            type="button"
            className={`acc-switch ${prefs.dyslexia ? 'active' : ''}`}
            onClick={() => handleToggle('dyslexia')}
            role="switch"
            aria-checked={!!prefs.dyslexia}
          >
            <span className="dot" aria-hidden="true" />
          </button>
        </div>

        {/* Actions */}
        <div className="acc-actions">
          <button type="button" className="acc-reset-btn" onClick={handleReset}>
            {language === 'he' ? 'איפוס' : language === 'fr' ? 'Réinitialiser' : 'Reset'}
          </button>
          <a
            className="acc-policy-link"
            href="/accessibility-statement"
            target="_blank"
            rel="noopener noreferrer"
          >
            {language === 'he' ? 'הצהרת נגישות' : language === 'fr' ? 'Déclaration d\'accessibilité' : 'Accessibility statement'}
          </a>
        </div>

        {/* Help text */}
        <p className="acc-help-text">
          {language === 'he'
            ? 'קיצור מקלדת: Alt+Shift+A לפתיחה/סגירה · Alt+Shift+C ניגודיות · Alt+Shift+U קישורים'
            : language === 'fr'
            ? 'Raccourcis: Alt+Shift+A ouvrir/fermer · Alt+Shift+C contraste · Alt+Shift+U liens'
            : 'Shortcuts: Alt+Shift+A open/close · Alt+Shift+C contrast · Alt+Shift+U links'}
        </p>
      </div>
    </>
  );
};

export default AccessibilityWidget;
