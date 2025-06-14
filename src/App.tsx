
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
import BioSection from "./components/BioSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import ThoughtLeadership from "./components/ThoughtLeadership";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book" element={<Book />} />
          <Route path="/about" element={<BioSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/testimonials" element={<TestimonialsCarousel />} />
          <Route path="/thought-leadership" element={<ThoughtLeadership/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
