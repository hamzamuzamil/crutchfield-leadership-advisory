
import { Briefcase, Users, FileText } from "lucide-react";

const services = [
  {
    title: "Leadership advisory for complex programs",
    icon: Users,
    description:
      "Strategic guidance and high-trust support for leaders navigating large-scale transformation. Experience across healthcare, telecom, and government.",
  },
  {
    title: "Trust-based transformation strategy",
    icon: Briefcase,
    description:
      "Building resilient, people-powered transformation grounded in clarity, transparency, and stakeholder trust.",
  },
  {
    title: "Executive coaching & delivery consulting",
    icon: FileText,
    description:
      "1:1 and team support for senior executives leading ambitious, high-stakes programmes. Proven results delivering sustainable change.",
  },
];

const ServicesSection = () => (
  <section className="bg-lightblue w-full py-12 border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-6">
      <h3 className="font-playfair text-2xl md:text-3xl font-bold text-mainblue mb-8 text-center">Key Service Areas</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {services.map(({ title, icon: Icon, description }) => (
          <div key={title} className="bg-white rounded-xl border border-slate-200 shadow-sm p-7 flex flex-col items-start gap-5 hover:shadow-md group transition animate-scale-in">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-mainblue/10 group-hover:bg-mainblue/20 transition mb-1">
              <Icon size={30} className="text-mainblue" />
            </div>
            <h4 className="font-playfair text-lg font-semibold text-mainblue">{title}</h4>
            <p className="text-slate-700 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
