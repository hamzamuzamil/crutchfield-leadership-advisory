
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-slate-950 overflow-hidden" id="hero">
    {/* Animated glass background */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="h-full w-full animate-gradient-move bg-hero-anim" />
      {/* subtle moving particles (fake with blur dots) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className={`absolute bg-gold/20 rounded-full blur-3xl`}
            style={{
              width: `${32 + Math.random() * 60}px`,
              height: `${32 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.20 + Math.random() * 0.08,
              animation: `pulseMove 8s ease-in-out infinite alternate ${i * 0.48}s`,
            }}
          />
        ))}
      </div>
    </div>

    <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row gap-10 px-4 md:px-12 py-28 lg:py-36 z-30">
      {/* Left: Details */}
      <div className="flex-1 flex flex-col items-start justify-center animate-fade-in glass-panel-dark p-8 rounded-2xl shadow-2xl backdrop-blur-2xl">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gold leading-tight mb-7 drop-shadow hero-title animate-fade-in">
          Strategic Leadership.<br className="hidden md:inline" />
          <span className="block mt-2 text-white">Trusted Delivery.</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 font-sans mb-9 max-w-xl transition animate-fade-in" style={{ animationDelay: "40ms" }}>
          Helping senior leaders deliver transformation with clarity, confidence, and trust.
        </p>
        <Link
          to="/book"
          className="inline-block bg-gold/90 hover:bg-gold text-slate-950 font-semibold rounded-lg px-8 py-3 text-lg shadow-lg hover:scale-105 transition duration-150 animate-scale-in"
          style={{ animationDelay: "140ms" }}
        >
          Request Strategic Advisory Call
        </Link>
      </div>
      {/* Right: Executive Image */}
      <div className="flex-1 flex items-center justify-center animate-scale-in z-30 relative min-h-[340px]">
        <div className="bg-slate-800/60 border border-gold/10 rounded-2xl shadow-2xl p-3 backdrop-blur-2xl glass-panel-dark">
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=facearea&w=400&h=480&facepad=3"
            alt="Mark Crutchfield, Leadership Consultant"
            className="rounded-xl shadow-xl border-2 border-gold/30 object-cover w-[270px] h-[345px] md:w-[340px] md:h-[420px] bg-slate-900/90 grayscale-0"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
