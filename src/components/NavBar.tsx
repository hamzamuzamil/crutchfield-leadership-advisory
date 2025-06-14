
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Linkedin } from "lucide-react";

const menuOptions = [
  { label: "Home", to: "/" },
  { label: "Book a Consultation", to: "/book" },
  { label: "About", to: "/#about" },
  { label: "Services", to: "/#services" },
  { label: "Case Studies", to: "/#testimonials" },
  { label: "Thought Leadership", to: "/#thought-leadership" },
  // Add more sections as the site grows
];

const NavBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-slate-950/70 border-b border-slate-800 shadow-2xl transition">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-10">
        <Link
          to="/"
          className="font-playfair text-2xl md:text-3xl font-bold tracking-tight text-gold hover:opacity-95 transition select-none"
        >
          Mark Crutchfield
        </Link>
        <button
          className="md:hidden text-gold p-2 hover:bg-gold/10 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h20M3 13h20M3 20h20"/></svg>
        </button>
        {/* Menu */}
        <div className={`transition-all duration-300 md:flex md:items-center md:static absolute top-[64px] left-0 w-full md:w-auto bg-slate-950/95 md:bg-transparent px-4 md:px-0 flex-col md:flex-row gap-0 md:gap-7 ${open ? "flex" : "hidden"}`}>
          {menuOptions.map(opt => (
            <Link
              key={opt.label}
              to={opt.to}
              className={`block py-3 md:py-0 text-lg font-semibold text-white hover:text-gold transition story-link ${
                (opt.to === "/" && location.pathname === "/") ||
                (opt.to !== "/" && location.hash === opt.to.replace("/#", "#"))
                  ? "text-gold" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {opt.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/mark-crutchfield-leadership/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 md:py-0 text-white hover:text-gold transition flex items-center gap-2 ml-0 md:ml-8"
          >
            <Linkedin size={22} className="inline" />
            <span className="hidden md:inline font-semibold">LinkedIn</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
