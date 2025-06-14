
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 bg-white/80 z-30 border-b border-slate-100 backdrop-blur-xl">
      <div className="flex items-center justify-between py-3 px-6 max-w-7xl mx-auto">
        <Link to="/" className="font-playfair text-2xl font-bold tracking-tight text-mainblue hover:opacity-80 transition-opacity">
          Mark Crutchfield
        </Link>
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className={`text-slate-700 hover:underline underline-offset-8 decoration-mainblue decoration-2 font-medium transition ${
              location.pathname === "/" ? "text-mainblue" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/book"
            className={`text-slate-700 hover:underline underline-offset-8 decoration-mainblue decoration-2 font-medium transition ${
              location.pathname.startsWith("/book") ? "text-mainblue" : ""
            }`}
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
