import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import WhatsAppButton from "@/components/WhatsAppButton";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import Index from "./pages/Index";

// Lazy load secondary pages
const SecurityConsulting = lazy(() => import("./pages/SecurityConsulting"));
const MassEventManagement = lazy(() => import("./pages/MassEventManagement"));
const SecurityPlanWriting = lazy(() => import("./pages/SecurityPlanWriting"));
const EmergencyPreparedness = lazy(() => import("./pages/EmergencyPreparedness"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <LanguageProvider>
      <TooltipProvider>
        <div>
          <Toaster />
          <Sonner />
          <WhatsAppButton />
          <AccessibilityWidget />
          <div id="main-app-content">
            <BrowserRouter
              future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
              }}
            >
              <Suspense fallback={<div className="min-h-screen bg-background" />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/fr" element={<Index />} />
                  <Route path="/security-consulting" element={<SecurityConsulting />} />
                  <Route path="/mass-event-management" element={<MassEventManagement />} />
                  <Route path="/security-plan-writing" element={<SecurityPlanWriting />} />
                  <Route path="/emergency-preparedness" element={<EmergencyPreparedness />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </div>
        </div>
      </TooltipProvider>
    </LanguageProvider>
  );
};

export default App;
