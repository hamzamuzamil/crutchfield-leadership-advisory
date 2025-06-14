import { Linkedin } from "lucide-react";
import NavBar from "@/components/NavBar";

const posts = [
  {
    title: "The Role of Trust in Large-Scale Change",
    excerpt: "Building trust is the first act in every transformation. Here's how senior leaders can foster it across teams and partners.",
    url: "https://www.linkedin.com/in/mark-crutchfield-leadership/detail/recent-activity/",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&q=80&w=600", // Teamwork/trust
  },
  {
    title: "Leading Through Complexity: Why Presence Wins",
    excerpt: "Executive presence isn't about charisma—it's about clarity, candour, and calm in chaotic times. Practical lessons for modern leaders.",
    url: "https://www.linkedin.com/in/mark-crutchfield-leadership/detail/recent-activity/",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQFLwrGNFlKeEA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1682526292113?e=2147483647&v=beta&t=xXT5lmdu9NA7z3q12TA9TS4z8d8DRmWk76sDpqUwQCA", // Focus/presence
  },
  {
    title: "From Strategy to Delivery: Getting Programs Unstuck",
    excerpt: "When major initiatives stall, reconnecting delivery to purpose unlocks action. My trusted tools for resetting the path.",
    url: "https://www.linkedin.com/in/mark-crutchfield-leadership/detail/recent-activity/",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&q=80&w=600", // Strategy/direction
  },
];

const ThoughtLeadership = () => (
  <div className="min-h-screen bg-slate-950 text-white font-sans antialiased flex flex-col">
    <NavBar />

    <section id="thought-leadership" className="max-w-6xl mx-auto px-4 py-16 md:py-20 mt-5">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gold mb-10 text-center">
        Thought Leadership
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((p, idx) => (
          <a
            href={p.url}
            key={p.title}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel-dark block rounded-2xl shadow-xl overflow-hidden hover:ring-2 hover:ring-gold transition-all animate-fade-in p-0"
            style={{ animationDelay: `${80 + idx * 70}ms` }}
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <div className="text-lg md:text-xl font-playfair text-gold font-semibold mb-1">{p.title}</div>
              <div className="text-gray-200 mb-2 text-sm">{p.excerpt}</div>
              <span className="text-gold text-xs font-medium underline hover:opacity-90">View on LinkedIn</span>
            </div>
          </a>
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
          Connect on LinkedIn
        </a>
      </div>
      <span className="block mt-2 font-serif text-slate-400/80 text-xs">
        &copy; {new Date().getFullYear()} Mark Crutchfield • Executive Leadership &amp; Strategy Advisor.
      </span>
    </footer>
  </div>
);

export default ThoughtLeadership;
