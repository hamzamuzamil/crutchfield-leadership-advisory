import { Link } from "react-router-dom";

const HeroSection = () => (
  <section
    className="relative w-full min-h-[70vh] flex items-center justify-center bg-slate-950 overflow-hidden"
    id="hero"
  >
    {/* Animated background */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="h-full w-full animate-gradient-move bg-hero-anim" />
      <div className="absolute inset-0 pointer-events-none z-10">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-gold/20 rounded-full blur-3xl"
            style={{
              width: `${32 + Math.random() * 60}px`,
              height: `${32 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.08,
              animation: `pulseMove 8s ease-in-out infinite alternate ${i * 0.48}s`,
            }}
          />
        ))}
      </div>
    </div>

    {/* Content */}
    <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 px-4 sm:px-6 md:px-10 lg:px-12 pt-16 pb-24 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32 z-30">
      
      {/* Left Side: Text Content */}
      <div className="flex-1 w-full flex flex-col items-start justify-center animate-fade-in glass-panel-dark p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-2xl">
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gold leading-tight mb-6 drop-shadow hero-title animate-fade-in">
          Strategic Leadership.<br className="hidden md:inline" />
          <span className="block mt-2 text-white">Trusted Delivery.</span>
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl text-gray-200 font-sans mb-8 max-w-2xl animate-fade-in"
          style={{ animationDelay: "40ms" }}
        >
          Helping senior leaders deliver transformation with clarity, confidence, and trust.
        </p>
        <Link
          to="/book"
          className="inline-block bg-gold/90 hover:bg-gold text-slate-950 font-semibold rounded-lg px-6 py-3 sm:px-8 text-base sm:text-lg shadow-lg hover:scale-105 transition duration-150 animate-scale-in"
          style={{ animationDelay: "140ms" }}
        >
          Request Strategic Advisory Call
        </Link>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 w-full flex items-center justify-center animate-scale-in z-30 relative min-h-[300px] sm:min-h-[360px] md:min-h-[420px]">
        <div className="bg-slate-800/60 border border-gold/10 rounded-2xl shadow-2xl p-3 backdrop-blur-2xl glass-panel-dark">
          <img
            src="image.jpeg"
            alt="Mark Crutchfield, Leadership Consultant"
            className="rounded-xl shadow-xl border-2 border-gold/30 object-cover w-[240px] h-[320px] sm:w-[280px] sm:h-[360px] md:w-[320px] md:h-[420px] bg-slate-900/90 grayscale-0"
           loading="lazy"
         />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
