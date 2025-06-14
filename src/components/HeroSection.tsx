
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="w-full min-h-[60vh] relative flex items-center justify-center bg-slate-950">
    {/* Background glass and accent effect */}
    <div className="absolute inset-0 bg-glass-gradient-dark pointer-events-none" />
    <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row gap-10 px-6 py-28 lg:py-32 z-10">
      {/* Left: Details */}
      <div className="flex-1 flex flex-col items-start justify-center animate-fade-in">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gold leading-tight mb-6 drop-shadow hero-title">
          Strategic Leadership.<br className="hidden md:inline" />
          <span className="block mt-2 text-white">Trusted Delivery.</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/80 font-sans mb-10 max-w-xl transition animate-fade-in" style={{ animationDelay: "50ms" }}>
          Helping senior leaders deliver transformation with clarity, confidence, and trust.
        </p>
        <Link
          to="/book"
          className="inline-block bg-gold/90 text-slate-900 font-semibold rounded-lg px-8 py-3 text-lg shadow-2xl hover:opacity-95 hover:scale-105 transition hover:shadow-gold/60 animate-scale-in"
          style={{ animationDelay: "120ms" }}
        >
          Request Strategic Advisory Call
        </Link>
      </div>
      {/* Right: Executive Image */}
      <div className="flex-1 flex items-center justify-center animate-scale-in" style={{ animationDelay: "180ms" }}>
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=420&h=520&facepad=2"
          alt="Mark Crutchfield, Leadership Consultant"
          className="rounded-xl shadow-2xl border-4 border-gold/30 object-cover w-[290px] h-[360px] md:w-[340px] md:h-[400px] bg-slate-900/60 backdrop-blur-md transition-all grayscale-0"
        />
      </div>
    </div>
    {/* Decorative ellipse glass shape */}
    <div className="absolute right-0 bottom-0 w-[48vw] h-36 bg-gold/5 rounded-tl-full blur-xl pointer-events-none" />
  </section>
);

export default HeroSection;
