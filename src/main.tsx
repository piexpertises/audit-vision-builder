import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ensureCssApplied } from "./safetyCss";

// Appliquer le CSS fallback une fois que le DOM est prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ensureCssApplied);
} else {
  ensureCssApplied();
}

createRoot(document.getElementById("root")!).render(<App />);
