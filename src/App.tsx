import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import WhatsAppButton from "@/components/WhatsAppButton";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import Index from "./pages/Index";
import SecurityConsulting from "./pages/SecurityConsulting";
import MassEventManagement from "./pages/MassEventManagement";
import SecurityPlanWriting from "./pages/SecurityPlanWriting";
import EmergencyPreparedness from "./pages/EmergencyPreparedness";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/security-consulting" element={<SecurityConsulting />} />
                  <Route path="/mass-event-management" element={<MassEventManagement />} />
                  <Route path="/security-plan-writing" element={<SecurityPlanWriting />} />
                  <Route path="/emergency-preparedness" element={<EmergencyPreparedness />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
