
import { useState } from "react";
import { Linkedin } from "lucide-react";
import NavBar from "@/components/NavBar";
const testimonials = [
  {
    name: "Sarah Thompson",
    title: "Director of Transformation, NHS",
    text: "Mark guided our leadership through a pivotal digital change. His clarity and ability to foster trust enabled us to deliver on ambitious outcomes—on time, and together.",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&w=75&q=80",
  },
  {
    name: "Leslie McMahon",
    title: "COO, Vodafone UK",
    text: "Insightful, laser-focused, and supportive—Mark brings pragmatic solutions to complex challenges and is the leader you want in your corner.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&w=75&q=80",
  },
  {
    name: "James Lee",
    title: "Head of Programmes, UN",
    text: "His calm, executive manner was critical in aligning diverse teams globally. Mark delivers trust and impact, every single time.",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&w=75&q=80",
  },
];

const TestimonialsCarousel = () => {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const t = testimonials[idx];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased flex flex-col">
    <NavBar />
    <section id="testimonials" className="py-16 px-4 mt-5">
      <div className="max-w-3xl mx-auto glass-panel-dark rounded-2xl shadow-2xl py-12 px-7 md:px-14 flex flex-col items-center animate-fade-in">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/50 shadow-lg">
            <img src={t.image} alt={t.name} className="object-cover w-full h-full" loading="lazy" />
          </div>
          <div>
            <div className="font-playfair text-lg text-gold font-bold">{t.name}</div>
            <div className="text-gray-400 text-sm">{t.title}</div>
          </div>
        </div>
        <blockquote className="text-xl text-gray-100 italic mb-2 text-center">{`“${t.text}”`}</blockquote>
        <div className="flex gap-2 mt-8">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="rounded-full bg-slate-800/75 border border-gold/20 p-2 text-gold hover:bg-slate-900 transition"
          >&lt;</button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="rounded-full bg-slate-800/75 border border-gold/20 p-2 text-gold hover:bg-slate-900 transition"
          >&gt;</button>
        </div>
      </div>
    </section>
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

export default TestimonialsCarousel;
