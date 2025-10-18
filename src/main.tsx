import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ensureCssApplied } from "./safetyCss";

// Fallback CSS pour Android avant le render
ensureCssApplied();

createRoot(document.getElementById("root")!).render(<App />);
