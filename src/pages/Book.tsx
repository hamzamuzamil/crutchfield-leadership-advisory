
import NavBar from "@/components/NavBar";
import ConsultationForm from "@/components/ConsultationForm";

const Book = () => (
  <div className="min-h-screen bg-background text-foreground font-sans antialiased">
    <NavBar />
    <section className="w-full bg-white py-16 min-h-[50vh]">
      <div className="max-w-lg mx-auto rounded-2xl shadow-xl border border-slate-200 px-8 py-12 bg-white">
        <h1 className="font-playfair text-2xl font-bold text-mainblue mb-3 text-center">Book a Consultation</h1>
        <p className="text-center text-slate-700 mb-5 text-base">
          Share your details below. <br />
          <span className="text-mainblue font-medium">
            I only work with 2 clients per quarter to ensure full focus.
          </span>
        </p>
        <ConsultationForm />
      </div>
    </section>
    <footer className="py-10 border-t border-slate-100 bg-white text-center text-slate-500 font-sans text-sm">
      &copy; {new Date().getFullYear()} Mark Crutchfield. All rights reserved.
    </footer>
  </div>
);

export default Book;
