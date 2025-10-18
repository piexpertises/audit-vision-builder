// Fallback CSS pour Android WebView si les styles ne se chargent pas
export function ensureCssApplied() {
  try {
    const test = document.createElement('div');
    test.style.display = 'none';
    document.body.appendChild(test);
    const hasComputed = !!window.getComputedStyle(document.documentElement).getPropertyValue('--foreground');
    document.body.removeChild(test);

    // Si pas de CSS appliquée (Android preview capricieux), injecter un style minimal
    if (!hasComputed) {
      const s = document.createElement('style');
      s.setAttribute('data-fallback', 'true');
      s.textContent = `
        :root { 
          --background: #ffffff; 
          --foreground: #0d1b2a; 
          --primary: #1e40af;
          --radius: 0.5rem;
        }
        html,body,#root { height:100%; margin:0; padding:0; }
        body { 
          color: var(--foreground); 
          background: var(--background); 
          font-family: system-ui, -apple-system, sans-serif;
          -webkit-text-size-adjust: 100%; 
          -webkit-font-smoothing: antialiased;
        }
        * { box-sizing: border-box; }
      `;
      document.head.appendChild(s);
      console.warn('[Android Fix] CSS fallback applied');
    }
  } catch (err) {
    console.error('[Android Fix] Error checking CSS:', err);
  }
}
