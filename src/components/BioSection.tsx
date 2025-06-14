import { Linkedin } from "lucide-react";
import NavBar from "@/components/NavBar";

const BioSection = () => (
  <div className="min-h-screen bg-slate-950 text-white font-sans antialiased flex flex-col">
    <NavBar />
  <section id="about" className="max-w-6xl mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row gap-10 items-center mt-5">
    <div className="flex-1 flex justify-center animate-fade-in">
      <div className="relative w-[230px] h-[260px] md:w-[280px] md:h-[310px] rounded-2xl overflow-hidden shadow-xl border-2 border-gold/15 bg-slate-950 glass-panel-dark">
        <img
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=facearea&w=400&h=430&facepad=2"
          alt="Mark speaking at an executive event"
          className="w-full h-full object-cover"
            loading="lazy"
        />
      </div>
    </div>
    
    <div className="flex-1 animate-fade-in glass-panel-dark p-8 rounded-2xl shadow-xl min-w-0">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gold mb-4">About Mark Crutchfield</h2>
      <p className="text-base md:text-lg text-gray-200">
        With over two decades of experience at the intersection of leadership, transformation, and trust, Mark empowers organizations to thrive through complexity. His career spans pivotal roles in global organizations:
      </p>
      <ul className="list-disc list-inside text-gold/90 mt-6 mb-4 leading-relaxed pl-3 text-base">
        <li>NHS: Led multi-site digital transformation and culture change</li>
        <li>United Nations: Consulted on public health strategy and delivery</li>
        <li>Vodafone: Advised on global program scaling and risk management</li>
        <li>UK Government: Trusted advisor for digital delivery and trust programs</li>
      </ul>
      <p className="text-base md:text-lg text-gray-300 mb-0 font-serif mt-2">
        Mark's calm intelligence and hands-on approach have made him the partner of choice for senior leaders navigating complex missions.
      </p>
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

export default BioSection;
