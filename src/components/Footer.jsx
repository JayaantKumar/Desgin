import { Link } from "react-router-dom";
// Standard UI icons from Lucide
import { Mail, Phone, MapPin, BookOpen } from "lucide-react";
// Brand icons from React Icons (FontAwesome)
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-2xl mb-6">
              <BookOpen size={28} className="text-brand-blue" />
              EduTutors
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6">
              Empowering students to achieve their academic goals through expert guidance, personalized attention, and modern teaching methodologies.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors">
                <FaFacebook size={22} />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-brand-blue transition-colors flex items-center gap-2">
                  <span className="text-brand-blue text-xs">▶</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-blue transition-colors flex items-center gap-2">
                  <span className="text-brand-blue text-xs">▶</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="hover:text-brand-blue transition-colors flex items-center gap-2">
                  <span className="text-brand-blue text-xs">▶</span> Our Faculty
                </Link>
              </li>
              <li>
                <Link to="/subjects" className="hover:text-brand-blue transition-colors flex items-center gap-2">
                  <span className="text-brand-blue text-xs">▶</span> Subjects & Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="hover:text-brand-blue transition-colors flex items-center gap-2">
                  <span className="text-brand-blue text-xs">▶</span> Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-brand-blue transition-colors flex items-center gap-2">
                  <span className="text-brand-blue text-xs">▶</span> Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-blue transition-colors flex items-center gap-2">
                  <span className="text-brand-blue text-xs">▶</span> Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-blue transition-colors flex items-center gap-2">
                  <span className="text-brand-blue text-xs">▶</span> FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-blue shrink-0 mt-1" />
                <span className="text-slate-400">123 Education Street, Learning Hub, Cityville</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-blue shrink-0" />
                <span className="text-slate-400">+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-blue shrink-0" />
                <span className="text-slate-400">contact@edututors.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {currentYear} EduTutors. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with precision for educational excellence.</p>
        </div>
      </div>
    </footer>
  );
}