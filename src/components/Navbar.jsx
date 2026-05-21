import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react"; // Changed Download to FileText icon

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
        <div className="flex justify-between h-20"> 
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 md:gap-3">
              <img src="/logo.png" alt="Mentee To Mentor Logo" className="h-10 md:h-14 w-auto object-contain" />
              <div className="flex flex-col justify-center">
                <span className="text-brand-blue font-extrabold text-lg md:text-2xl uppercase tracking-tight leading-none">
                  Mentee To Mentor
                </span>
                <span className="text-gray-500 text-[8px] md:text-[10px] font-medium tracking-widest uppercase mt-1">
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
            
            {/* UPDATED: Opens in new tab instead of downloading */}
            <a 
              href="/brochure.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-blue hover:text-brand-yellow transition font-bold flex items-center gap-1.5 ml-2"
            >
              <FileText size={18} /> View Brochure
            </a>

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

      {/* Mobile Menu */}
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
            
            {/* UPDATED: Mobile link opens in new tab */}
            <a 
              href="/brochure.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-brand-blue bg-blue-50 hover:bg-blue-100 rounded-lg font-bold transition"
            >
              <FileText size={20} /> View Brochure & Fees
            </a>

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