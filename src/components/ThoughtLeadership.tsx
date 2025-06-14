
import { Linkedin } from "lucide-react";

const POSTS = [
  {
    title: "Navigating Complexity Through Trust",
    url: "#",
    date: "May 2024",
    excerpt: "Why foundational trust is the decisive factor in program success—and how leaders can cultivate it.",
  },
  {
    title: "From Strategy to Delivery: Making Change Stick",
    url: "#",
    date: "April 2024",
    excerpt: "Bridging the gap between PPT and real-world results. Insights from decades in the field.",
  },
  {
    title: "The Leadership ‘North Star’ in Digital Transformation",
    url: "#",
    date: "March 2024",
    excerpt: "Executive focus: aligning people, technology, and mission-critical outcomes.",
  },
];

const ThoughtLeadership = () => (
  <section className="w-full bg-white py-14">
    <div className="max-w-7xl mx-auto px-6">
      <h3 className="font-playfair text-2xl font-bold text-mainblue mb-8 text-center">Thought Leadership</h3>
      <div className="grid md:grid-cols-3 gap-7">
        {POSTS.map((post) => (
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            key={post.title}
            className="group bg-lightblue rounded-xl p-6 border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition flex flex-col h-full"
          >
            <div className="flex items-center gap-2 mb-3">
              <Linkedin size={20} className="text-mainblue" />
              <span className="text-xs text-slate-600">{post.date}</span>
            </div>
            <h4 className="font-playfair text-lg font-semibold text-mainblue mb-2 group-hover:underline underline-offset-4">
              {post.title}
            </h4>
            <p className="text-slate-700 text-sm flex-1">{post.excerpt}</p>
            <span className="mt-5 text-mainblue text-sm font-medium group-hover:underline transition">Read Post</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ThoughtLeadership;
