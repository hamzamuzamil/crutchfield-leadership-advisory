
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Mark quickly builds trust in even the most challenging environments. His clarity and delivery focus yielded remarkable results across our transformation programme.",
    author: "Sarah R., Former NHS Digital Programme Director",
    avatar: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    quote:
      "I've never worked with anyone who understands the human side of strategy like Mark. Our team's confidence and clarity improved immediately.",
    author: "James B., Senior Advisor, UK Government",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    quote:
      "Mark's EQ and judgment are matched only by his relentless focus on delivery. If your programme is complex, he is the advisor you want.",
    author: "Elena H., Transformation Lead, Vodafone",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const TestimonialsCarousel = () => {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIdx((i) => (i + TESTIMONIALS.length - 1) % TESTIMONIALS.length);

  return (
    <section className="w-full bg-slate-950/90 py-14 border-b border-slate-800 animate-fade-in">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
        <h3 className="font-playfair text-2xl text-gold font-bold mb-7 text-center animate-fade-in">Results & Client Stories</h3>
        <div className="relative flex flex-col items-center w-full animate-scale-in">
          <div className="glass-panel-dark border border-slate-800 rounded-2xl shadow-2xl p-8 min-h-[180px] transition transform duration-200">
            <p className="text-gold text-lg font-playfair mb-4">&ldquo;{TESTIMONIALS[idx].quote}&rdquo;</p>
            <div className="flex items-center gap-3">
              <img
                src={TESTIMONIALS[idx].avatar}
                alt={TESTIMONIALS[idx].author + " avatar"}
                className="w-10 h-10 rounded-full border border-gold/50 shadow"
                loading="lazy"
              />
              <span className="block text-white text-sm font-sans">— {TESTIMONIALS[idx].author}</span>
            </div>
          </div>
          <div className="flex gap-6 mt-7">
            <button
              aria-label="Previous"
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gold bg-slate-900/70 text-gold hover:bg-gold/30 hover:text-slate-900 transition shadow"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gold bg-slate-900/70 text-gold hover:bg-gold/30 hover:text-slate-900 transition shadow"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
