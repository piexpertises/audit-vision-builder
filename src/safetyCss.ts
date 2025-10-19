// Minimal CSS safety check
export function ensureCssApplied() {
  if (document.readyState === 'loading') return;
  
  try {
    const root = document.documentElement;
    if (!root.style.getPropertyValue('--foreground')) {
      const style = document.createElement('style');
      style.textContent = ':root{--background:#fff;--foreground:#0d1b2a}body{margin:0}';
      document.head.appendChild(style);
    }
  } catch (e) {
    // Silent fail
  }
}
