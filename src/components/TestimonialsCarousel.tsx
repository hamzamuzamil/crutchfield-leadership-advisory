
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Mark quickly builds trust in even the most challenging environments. His clarity and delivery focus yielded remarkable results across our transformation programme.",
    author: "Sarah R., Former NHS Digital Programme Director",
  },
  {
    quote:
      "I've never worked with anyone who understands the human side of strategy like Mark. Our team's confidence and clarity improved immediately.",
    author: "James B., Senior Advisor, UK Government",
  },
  {
    quote:
      "Mark's EQ and judgment are matched only by his relentless focus on delivery. If your programme is complex, he is the advisor you want.",
    author: "Elena H., Transformation Lead, Vodafone",
  },
];

const TestimonialsCarousel = () => {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIdx((i) => (i + TESTIMONIALS.length - 1) % TESTIMONIALS.length);

  return (
    <section className="w-full bg-testmonial py-14 border-b border-slate-100">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
        <h3 className="font-playfair text-2xl text-mainblue font-bold mb-7 text-center">Client Results & Stories</h3>
        <div className="relative flex flex-col items-center w-full">
          <div className="bg-white border border-slate-200 rounded-2xl shadow p-8 min-h-[160px] animate-fade-in transition">
            <p className="text-mainblue text-lg font-playfair mb-4">&ldquo;{TESTIMONIALS[idx].quote}&rdquo;</p>
            <span className="block text-slate-700 text-sm font-sans">— {TESTIMONIALS[idx].author}</span>
          </div>
          <div className="flex gap-6 mt-7">
            <button
              aria-label="Previous"
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-mainblue text-mainblue hover:bg-mainblue/10 transition"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-mainblue text-mainblue hover:bg-mainblue/10 transition"
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
