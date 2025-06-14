
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="w-full min-h-[46vh] flex items-center bg-mainblue relative overflow-hidden">
    <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between gap-8 px-8 py-20 lg:py-24">
      <div className="flex-1 flex flex-col items-start justify-center">
        <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 animate-fade-in">
          Strategic Leadership.<br className="hidden md:inline" />
          <span className="block mt-1 text-gold">Trusted Delivery.</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/80 font-sans mb-10 max-w-xl animate-fade-in" style={{ animationDelay: "40ms" }}>
          Helping senior leaders deliver transformation with clarity, confidence, and trust.
        </p>
        <Link
          to="/book"
          className="inline-block bg-gold text-mainblue font-semibold rounded-lg px-7 py-3 text-lg shadow-lg hover:opacity-90 hover:scale-105 transition hover:shadow-xl animate-fade-in"
          style={{ animationDelay: "100ms" }}
        >
          Request Strategic Advisory Call
        </Link>
      </div>
    </div>
    {/* background pattern accent */}
    <div className="absolute bottom-0 right-0 w-1/2 h-28 bg-gradient-to-t from-gold/20 to-transparent rounded-tl-full pointer-events-none" />
  </section>
);

export default HeroSection;
