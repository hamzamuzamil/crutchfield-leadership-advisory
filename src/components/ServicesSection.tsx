import { Linkedin } from "lucide-react";
import NavBar from "@/components/NavBar";

const services = [
  {
    title: "Leadership Advisory",
    desc: "Highly bespoke, executive-level advisory for organizations leading transformation, high-stakes change, or scale. Candid, trusted counsel for senior decision-makers.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&w=360&q=80",
  },
  {
    title: "Trust-based Transformation",
    desc: "Strategic consulting on delivery approaches that create trust fast – across programs, boards, and external partners. Practical frameworks, real results.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&w=380&q=80",
  },
  {
    title: "Executive Coaching & Delivery",
    desc: "1:1 coaching and embedded team consulting to empower delivery, build deep leadership confidence, and unblock complex programs.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&w=380&q=80",
  },
];

const ServicesSection = () => (
  <div className="min-h-screen bg-slate-950 text-white font-sans antialiased flex flex-col">
    <NavBar />

    <section id="services" className="max-w-6xl mx-auto px-4 py-12 md:py-16 mt-5">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gold text-center mb-8 md:mb-12">
        Services
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((svc, i) => (
          <div
            key={svc.title}
            className="glass-panel-dark rounded-2xl shadow-2xl p-7 flex flex-col items-center animate-scale-in hover:scale-[1.04] transition"
            style={{ animationDelay: `${60 + i * 60}ms` }}
          >
            <div className="w-[110px] h-[110px] mb-6 rounded-xl overflow-hidden shadow-lg border border-gold/10">
              <img
                src={svc.image}
                alt={svc.title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <h3 className="font-playfair text-xl md:text-2xl font-bold text-gold mb-3 text-center">
              {svc.title}
            </h3>
            <p className="text-base text-gray-200 text-center">
              {svc.desc}
            </p>
          </div>
        ))}
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
          <span className="sr-only">Connect on LinkedIn</span>
        </a>
      </div>
      <span className="block mt-2 font-serif text-slate-400/80 text-xs">
        &copy; {new Date().getFullYear()} Mark Crutchfield • Executive Leadership &amp; Strategy Advisor.
      </span>
    </footer>
  </div>
);

export default ServicesSection;
