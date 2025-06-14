
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ThoughtLeadership from "@/components/ThoughtLeadership";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <NavBar />
      <HeroSection />
      <BioSection />
      <ServicesSection />
      <TestimonialsCarousel />
      <ThoughtLeadership />
      <footer className="py-10 mt-2 border-t border-slate-100 bg-white text-center text-slate-500 font-sans text-sm">
        &copy; {new Date().getFullYear()} Mark Crutchfield. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
