import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Faculty", path: "/faculty" },
    { name: "Subjects", path: "/subjects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Brand Logo Image Integrated */}
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Mentee To Mentor Logo" className="h-12 w-auto object-contain" />
              <span className="text-brand-blue font-bold text-xl uppercase tracking-tight hidden sm:block">
                Mentee To Mentor
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
               <Link key={link.name} to={link.path} className="text-gray-600 hover:text-brand-blue transition font-medium">
                 {link.name}
               </Link>
            ))}
            <Link to="/contact" className="bg-brand-yellow text-brand-dark px-5 py-2.5 rounded-md hover:brightness-95 transition font-bold shadow-sm">
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark p-2 rounded-md hover:bg-gray-100 transition">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3">
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-brand-dark hover:bg-blue-50 hover:text-brand-blue rounded-md font-medium transition"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block text-center mt-4 bg-brand-yellow text-brand-dark px-4 py-3 rounded-md font-bold shadow-sm hover:brightness-95 transition"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}