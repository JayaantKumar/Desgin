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
      {/* Increased padding for more white space */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20"> 
          <div className="flex items-center">
            {/* Made the logo text larger (text-2xl to text-3xl) and extra bold */}
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Mentee To Mentor Logo" className="h-14 w-auto object-contain" />
              <div className="hidden sm:flex flex-col justify-center">
                <span className="text-brand-blue font-extrabold text-2xl uppercase tracking-tight leading-none">
                  Mentee To Mentor
                </span>
                <span className="text-gray-500 text-[10px] font-medium tracking-widest uppercase mt-1">
                  Educational Excellence
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
               <Link key={link.name} to={link.path} className="text-gray-600 hover:text-brand-blue transition font-medium">
                 {link.name}
               </Link>
            ))}
            <Link to="/contact" className="bg-brand-yellow text-brand-dark px-6 py-2.5 rounded-lg hover:shadow-md hover:-translate-y-0.5 transition-all font-bold">
              Enroll Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark p-2 rounded-md hover:bg-gray-100 transition">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-4 pb-8 space-y-2 sm:px-3">
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-brand-dark hover:bg-blue-50 hover:text-brand-blue rounded-lg font-medium transition"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block text-center mt-6 bg-brand-yellow text-brand-dark px-4 py-4 rounded-lg font-bold shadow-sm transition"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}