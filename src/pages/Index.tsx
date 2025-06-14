
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ThoughtLeadership from "@/components/ThoughtLeadership";
import { Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased flex flex-col">
      <NavBar />
      <main className="flex flex-col gap-0 flex-1 pt-[70px] md:pt-[82px]">
        <HeroSection />
        <BioSection />
        <ServicesSection />
        <TestimonialsCarousel />
        <ThoughtLeadership />
      </main>
      <footer className="py-10 border-t border-slate-800 bg-slate-950/90 text-center text-slate-400 font-sans text-sm backdrop-blur shadow-2xl flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 justify-center">
          <a
            href="https://www.linkedin.com/in/mark-crutchfield-leadership/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gold/90 text-slate-950 font-medium hover:bg-gold transition shadow-lg"
          >
            <Linkedin size={22} />
            LinkedIn
          </a>
        </div>
        <span className="mt-2 block">
          &copy; {new Date().getFullYear()} Mark Crutchfield. All rights reserved.
        </span>
      </footer>
    </div>
  );
};

export default Index;
