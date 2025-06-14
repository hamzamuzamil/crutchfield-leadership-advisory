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
      <main className="flex flex-col gap-0 flex-1 pt-[70px] md:pt-[82px] bg-slate-950/95 animate-fade-in">
        <HeroSection />
        <BioSection />
        <ServicesSection />
        <TestimonialsCarousel />
        <ThoughtLeadership />
      </main>
      <footer className="py-8 border-t border-slate-800 bg-slate-950/70 text-center text-slate-400 font-sans text-sm backdrop-blur-2xl shadow-2xl flex flex-col items-center gap-3">
        <div className="flex items-center gap-3 justify-center">
          <a
            href="https://www.linkedin.com/in/mark-crutchfield-leadership/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-gold/95 text-slate-950 font-semibold shadow-lg hover:bg-gold/90 transition"
          >
            <Linkedin size={22} />
            Connect on LinkedIn
          </a>
        </div>
        <span className="block mt-2 font-serif text-slate-400/80 text-xs">
          &copy; {new Date().getFullYear()} Mark Crutchfield • Executive Leadership &amp; Strategy Advisor.
        </span>
      </footer>
    </div>
  );
};

export default Index;
