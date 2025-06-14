
import NavBar from "@/components/NavBar";
import ConsultationForm from "@/components/ConsultationForm";
import { Linkedin } from "lucide-react";

const Book = () => (
  <div className="min-h-screen bg-slate-950 text-white font-sans antialiased flex flex-col">
    <NavBar />
    <section className="w-full bg-slate-900/80 py-20 min-h-[50vh] flex-1 flex justify-center items-center">
      <div className="w-full max-w-lg mx-auto rounded-2xl glass-panel-dark shadow-2xl border border-gold/20 px-8 py-12 bg-slate-950/60 backdrop-blur animate-fade-in">
        <h1 className="font-playfair text-2xl font-bold text-gold mb-3 text-center animate-fade-in">Book a Consultation</h1>
        <p className="text-center text-slate-300 mb-5 text-base animate-fade-in">
          Share your details below.<br />
          <span className="text-gold font-medium">I only work with 2 clients per quarter to ensure full focus.</span>
        </p>
        <ConsultationForm />
      </div>
    </section>
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

export default Book;
