// Simplified CSS safety check - non-blocking
export function ensureCssApplied() {
  // Only run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureCssApplied);
    return;
  }

  try {
    // Simple check without blocking render
    const hasStyles = !!window.getComputedStyle(document.documentElement).getPropertyValue('--foreground');
    
    if (!hasStyles) {
      const style = document.createElement('style');
      style.textContent = ':root{--background:#fff;--foreground:#0d1b2a;--primary:#1e40af}*{box-sizing:border-box}body{margin:0;font-family:system-ui,sans-serif}';
      document.head.appendChild(style);
    }
  } catch (err) {
    // Silent fail - don't block rendering
  }
}
