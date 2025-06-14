
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Linkedin } from "lucide-react";

const NavBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-slate-900/60 border-b border-slate-700 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-10">
        <Link
          to="/"
          className="font-playfair text-2xl md:text-3xl font-bold tracking-tight text-gold hover:opacity-90 transition select-none"
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
        <div className={`transition-all duration-300 md:flex md:items-center md:static absolute top-[64px] left-0 w-full md:w-auto bg-slate-900/90 md:bg-transparent px-4 md:px-0 flex-col md:flex-row gap-0 md:gap-8 ${open ? "flex" : "hidden"}`}>
          <Link
            to="/"
            className={`block py-3 md:py-0 text-lg font-semibold text-white hover:text-gold transition story-link ${
              location.pathname === "/" ? "text-gold" : ""
            }`}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/book"
            className={`block py-3 md:py-0 text-lg font-semibold text-white hover:text-gold transition story-link ${
              location.pathname.startsWith("/book") ? "text-gold" : ""
            }`}
            onClick={() => setOpen(false)}
          >
            Book a Consultation
          </Link>
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
