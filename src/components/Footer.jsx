import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand & About */}
          <div>

            <Link
              to="/"
              className="flex items-center gap-3 text-white font-bold text-2xl mb-6"
            >
              <img
                src="/logo.png"
                alt="Mentee To Mentor Logo"
                className="h-14 w-auto bg-white rounded-full p-1"
              />

              Mentee To Mentor
            </Link>

            <p className="text-slate-400 leading-relaxed mb-6">
              Empowering students to achieve their academic goals through expert guidance,
              personalized attention, and modern teaching methodologies.
            </p>

            <div className="flex space-x-5">

              <a
                href="#"
                className="text-slate-400 hover:text-brand-yellow transition-colors"
              >
                <FaFacebook size={22} />
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-brand-yellow transition-colors"
              >
                <FaTwitter size={22} />
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-brand-yellow transition-colors"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-brand-yellow transition-colors"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="hover:text-brand-yellow transition-colors flex items-center gap-2"
                >
                  <span className="text-brand-yellow text-xs">▶</span>
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-brand-yellow transition-colors flex items-center gap-2"
                >
                  <span className="text-brand-yellow text-xs">▶</span>
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/faculty"
                  className="hover:text-brand-yellow transition-colors flex items-center gap-2"
                >
                  <span className="text-brand-yellow text-xs">▶</span>
                  Our Faculty
                </Link>
              </li>

              <li>
                <Link
                  to="/subjects"
                  className="hover:text-brand-yellow transition-colors flex items-center gap-2"
                >
                  <span className="text-brand-yellow text-xs">▶</span>
                  Subjects & Courses
                </Link>
              </li>

            </ul>

          </div>

          {/* Support */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-6">
              Support
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand-yellow transition-colors flex items-center gap-2"
                >
                  <span className="text-brand-yellow text-xs">▶</span>
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-brand-yellow transition-colors flex items-center gap-2"
                >
                  <span className="text-brand-yellow text-xs">▶</span>
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-of-service"
                  className="hover:text-brand-yellow transition-colors flex items-center gap-2"
                >
                  <span className="text-brand-yellow text-xs">▶</span>
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="hover:text-brand-yellow transition-colors flex items-center gap-2"
                >
                  <span className="text-brand-yellow text-xs">▶</span>
                  FAQs
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact Info */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-6">
              Contact Info
            </h3>

            <ul className="space-y-4">

              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-brand-yellow shrink-0 mt-1"
                />

                <span className="text-slate-400">
                  Shop No. 114-115, Chouhan Commercial Complex,
                  Junwani, Bhilai, Chhattisgarh 490020
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="text-brand-yellow shrink-0"
                />

                <span className="text-slate-400">
                  +91 70240 12483
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="text-brand-yellow shrink-0"
                />

                <span className="text-slate-400">
                  contact@mentee2mentor.in
                </span>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex justify-center items-center text-sm text-slate-500">
          <p>
            &copy; {currentYear} Mentee To Mentor. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}