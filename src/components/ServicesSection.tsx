
import { Briefcase, Users, FileText } from "lucide-react";

const services = [
  {
    title: "Leadership advisory for complex programs",
    icon: Users,
    description:
      "Hands-on, high-trust support for leaders tackling transformation at scale. Guiding strategy, delivery, and culture in high-complexity, high-impact settings.",
    image: "https://images.unsplash.com/photo-1556740772-1a741367b93e?fit=crop&w=320&q=80",
  },
  {
    title: "Trust-based transformation strategy",
    icon: Briefcase,
    description:
      "Shaping change through resilience, transparency, and true stakeholder alignment. Frameworks for clarity and sustainable impact.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?fit=crop&w=320&q=80"
  },
  {
    title: "Executive coaching & delivery consulting",
    icon: FileText,
    description:
      "Structured support for senior executives and programme teams. Accelerate results with tailored coaching and clear milestones.",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db511ed?fit=crop&w=320&q=80"
  }
];

const ServicesSection = () => (
  <section className="bg-slate-900/80 backdrop-blur w-full py-14 border-b border-slate-800 animate-fade-in">
    <div className="max-w-7xl mx-auto px-6">
      <h3 className="font-playfair text-2xl md:text-3xl font-bold text-gold mb-8 text-center animate-fade-in">
        Key Service Areas
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {services.map(({ title, icon: Icon, description, image }) => (
          <div
            key={title}
            className="glass-panel-dark rounded-2xl p-6 shadow-xl border border-slate-800 bg-slate-950/60 flex flex-col items-start gap-4 hover:scale-105 transition transform duration-200 animate-scale-in"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-36 object-cover rounded-lg mb-2 border border-gold/10"
              loading="lazy"
            />
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/20">
              <Icon size={28} className="text-gold" />
            </div>
            <h4 className="font-playfair text-lg font-semibold text-gold mb-1">{title}</h4>
            <p className="text-white/90 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
