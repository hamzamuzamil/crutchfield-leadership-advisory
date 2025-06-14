
import { Linkedin } from "lucide-react";

const POSTS = [
  {
    title: "Navigating Complexity Through Trust",
    url: "https://www.linkedin.com/in/mark-crutchfield-leadership/",
    date: "May 2024",
    excerpt: "Why foundational trust is the decisive factor in program success—and how leaders can cultivate it.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?fit=crop&w=420&q=80",
  },
  {
    title: "From Strategy to Delivery: Making Change Stick",
    url: "https://www.linkedin.com/in/mark-crutchfield-leadership/",
    date: "April 2024",
    excerpt: "Bridging the gap between PPT and real-world results. Insights from decades in the field.",
    image: "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?fit=crop&w=420&q=80",
  },
  {
    title: "The Leadership ‘North Star’ in Digital Transformation",
    url: "https://www.linkedin.com/in/mark-crutchfield-leadership/",
    date: "March 2024",
    excerpt: "Executive focus: aligning people, technology, and mission-critical outcomes.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=crop&w=420&q=80",
  },
];

const ThoughtLeadership = () => (
  <section className="w-full bg-slate-950 py-14 animate-fade-in">
    <div className="max-w-7xl mx-auto px-6">
      <h3 className="font-playfair text-2xl font-bold text-gold mb-8 text-center animate-fade-in">Thought Leadership</h3>
      <div className="grid md:grid-cols-3 gap-7">
        {POSTS.map((post) => (
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            key={post.title}
            className="group glass-panel-dark rounded-xl p-6 border border-slate-700 hover:scale-105 transition shadow-xl flex flex-col h-full animate-scale-in"
          >
            <img
              src={post.image}
              alt={post.title + " preview"}
              className="mb-3 w-full h-32 object-cover rounded-md border border-gold/10"
              loading="lazy"
            />
            <div className="flex items-center gap-2 mb-2">
              <Linkedin size={20} className="text-gold" />
              <span className="text-xs text-slate-300">{post.date}</span>
            </div>
            <h4 className="font-playfair text-lg font-semibold text-gold mb-2 group-hover:underline underline-offset-4">
              {post.title}
            </h4>
            <p className="text-white/90 text-sm flex-1">{post.excerpt}</p>
            <span className="mt-5 text-gold text-sm font-medium group-hover:underline transition">Read Post</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ThoughtLeadership;
