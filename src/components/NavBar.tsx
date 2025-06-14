import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Linkedin } from "lucide-react";

const menuOptions = [
  { label: "Book a Consultation", to: "/book" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/testimonials" },
  { label: "Thought Leadership", to: "/thought-leadership" },
];

const NavBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-slate-950/70 border-b border-slate-800 shadow-2xl transition">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 md:px-8">
        
        {/* Brand Logo */}
        <Link
          to="/"
          className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gold hover:opacity-95 transition select-none"
        >
          Mark Crutchfield
        </Link>

        {/* Toggle Button shown up to lg breakpoint */}
        <button
          className="lg:hidden text-gold p-2 hover:bg-gold/10 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h20M3 13h20M3 20h20" />
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`transition-all duration-300 lg:flex lg:items-center lg:static absolute top-full left-0 w-full lg:w-auto bg-slate-950/95 lg:bg-transparent px-4 lg:px-0 flex-col lg:flex-row gap-0 lg:gap-7 ${
            open ? "flex" : "hidden"
          }`}
        >
          {menuOptions.map((opt) => (
            <Link
              key={opt.label}
              to={opt.to}
              className={`block py-3 lg:py-0 text-base lg:text-lg font-semibold text-white hover:text-gold transition ${
                location.pathname === opt.to ? "text-gold" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {opt.label}
            </Link>
          ))}

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mark-crutchfield-leadership/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 lg:py-0 text-white hover:text-gold transition flex items-center gap-2 ml-0 lg:ml-8"
          >
            <Linkedin size={22} />
            <span className="hidden lg:inline font-semibold">LinkedIn</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
