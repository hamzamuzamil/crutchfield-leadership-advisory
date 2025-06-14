
const posts = [
  {
    title: "The Role of Trust in Large-Scale Change",
    excerpt: "Building trust is the first act in every transformation. Here's how senior leaders can foster it across teams and partners.",
    url: "https://www.linkedin.com/in/mark-crutchfield-leadership/detail/recent-activity/",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&w=355&q=80",
  },
  {
    title: "Leading Through Complexity: Why Presence Wins",
    excerpt: "Executive presence isn't about charisma—it's about clarity, candour, and calm in chaotic times. Practical lessons for modern leaders.",
    url: "https://www.linkedin.com/in/mark-crutchfield-leadership/detail/recent-activity/",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&w=355&q=80",
  },
  {
    title: "From Strategy to Delivery: Getting Programs Unstuck",
    excerpt: "When major initiatives stall, reconnecting delivery to purpose unlocks action. My trusted tools for resetting the path.",
    url: "https://www.linkedin.com/in/mark-crutchfield-leadership/detail/recent-activity/",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&w=355&q=80",
  },
];

const ThoughtLeadership = () => (
  <section id="thought-leadership" className="max-w-6xl mx-auto px-4 py-16 md:py-20">
    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gold mb-10 text-center">Thought Leadership</h2>
    <div className="grid md:grid-cols-3 gap-8">
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
);

export default ThoughtLeadership;
