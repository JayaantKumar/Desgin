import { Phone, Mail, MapPin, ExternalLink, GraduationCap, Briefcase } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-brand-light min-h-screen pt-24 md:pt-32 pb-16 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* LEFT COLUMN: Contact Info & Map Card */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">Get In Touch</h1>
          <p className="text-slate-600 mb-10 text-lg leading-relaxed">
            Ready to start your learning journey or join our team of expert educators? Reach out to us directly or use our registration portals.
          </p>
          
          {/* Email & Phone Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div className="flex items-start gap-4">
              <Mail className="text-brand-blue mt-1 shrink-0" size={28} />
              <div>
                <p className="text-slate-500 font-medium text-sm mb-1">Email us</p>
                <p className="font-bold text-brand-dark">contact@mentee2mentor.in</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-brand-blue mt-1 shrink-0" size={28} />
              <div>
                <p className="text-slate-500 font-medium text-sm mb-1">Call us</p>
                <p className="font-bold text-brand-dark">+91 70240 12483</p>
                <p className="font-bold text-brand-dark">+91 70243 12483</p>
              </div>
            </div>
          </div>

          {/* Google Maps Card */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-brand-dark mb-3 flex items-center gap-2">
              Find Us on Google Map
            </h3>
            <p className="text-slate-600 mb-6 flex items-start gap-2">
              <MapPin size={20} className="text-brand-yellow shrink-0 mt-1" />
              <span>Shop No. 114-115, Chouhan Commercial Complex, Junwani, Bhilai, Chhattisgarh 490020</span>
            </p>
            
            {/* Embedded iFrame Map */}
            <div className="w-full h-[300px] rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 relative">
              <iframe 
                src="https://maps.google.com/maps?q=Chouhan%20Commercial%20Complex,%20Junwani,%20Bhilai,%20Chhattisgarh%20490020&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0, position: "absolute", top: 0, left: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mentee to Mentor Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Google Form Portals */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-brand-dark mb-4">Registration Portals</h3>
          <p className="text-slate-600 mb-10 leading-relaxed">
            Please select the appropriate application form below. These links will direct you to our official Google Forms for secure registration.
          </p>
          
          <div className="space-y-6">
            {/* Student Registration Button */}
            <a 
              href="https://forms.gle/zwpFXiGinLqBVLi49" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-brand-blue text-white p-6 rounded-2xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/20 group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <GraduationCap size={28} className="text-brand-yellow" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Student Registration</h4>
                  <p className="text-blue-100 text-sm mt-1">Enroll for home tuition or online classes</p>
                </div>
              </div>
              <ExternalLink size={24} className="text-brand-yellow group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* Home Tutor Registration Button */}
            <a 
              href="https://forms.gle/2Uaitpg5jS9PwnD39" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-brand-yellow text-brand-dark p-6 rounded-2xl hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/20 group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-brand-dark/5 p-3 rounded-xl">
                  <Briefcase size={28} className="text-brand-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Join as Teacher</h4>
                  <p className="text-yellow-900 text-sm mt-1">Join our team of expert faculty members</p>
                </div>
              </div>
              <ExternalLink size={24} className="text-brand-dark group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}