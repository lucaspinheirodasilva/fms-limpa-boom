import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LavagemTapetes from "./pages/LavagemTapetes";
import HigienizacaoEstofados from "./pages/HigienizacaoEstofados";
import LimpezaCarpetes from "./pages/LimpezaCarpetes";
import HigienizacaoColchoes from "./pages/HigienizacaoColchoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lavagem-de-tapetes" element={<LavagemTapetes />} />
          <Route path="/higienizacao-de-estofados" element={<HigienizacaoEstofados />} />
          <Route path="/limpeza-de-carpetes" element={<LimpezaCarpetes />} />
          <Route path="/higienizacao-de-colchoes" element={<HigienizacaoColchoes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
