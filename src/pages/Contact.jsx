import { useState } from "react";
import { Phone, Mail, Send, MapPin } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    // 1. Grab the raw form data
    const formData = new FormData(e.target);
    
    // 2. CRITICAL FIX: Convert to URL-encoded parameters for Google Apps Script
    const params = new URLSearchParams(formData);
    
    // Your Google Apps Script Web App URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbz7yUYL3vjwyqthyvJ5ChOQfLMn8C-zt3nhFhPFFhMtDTNIX-No9S_48SuEuyTG3VxGwQ/exec";
    try {
      await fetch(scriptURL, { 
        method: "POST", 
        body: params, // Sending the converted params here!
        mode: "no-cors"
      });
      
      setStatus("Message Sent Successfully!");
      e.target.reset(); // Clears the form fields
      
      // Clear the success message after 5 seconds
      setTimeout(() => {
        setStatus("");
      }, 5000);
      
    } catch (error) {
      console.error("Error!", error.message);
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <div className="bg-brand-light min-h-screen pt-24 md:pt-32 pb-16 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* LEFT COLUMN: Contact Info & Map Card */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">Get In Touch</h1>
          <p className="text-slate-600 mb-10 text-lg leading-relaxed">
            Ready to start your learning journey? Reach out to us directly or fill out the form, and we'll get back to you promptly.
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
                src="https://maps.google.com/maps?q=Chouhan%20Commercial%20Complex,%20Junwani,%20Bhilai&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: "absolute", top: 0, left: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Contact Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
          <h3 className="text-2xl font-bold text-brand-dark mb-6">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-2">Your Name</label>
              <input type="text" name="name" required className="w-full px-5 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition bg-slate-50" placeholder="John Doe" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-2">Your Phone Number</label>
              <input type="tel" name="phone" required className="w-full px-5 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition bg-slate-50" placeholder="+91 XXXXX XXXXX" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">Class</label>
                <input type="text" name="class" required className="w-full px-5 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition bg-slate-50" placeholder="e.g. 10th" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">Subject</label>
                <input type="text" name="subject" required className="w-full px-5 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition bg-slate-50" placeholder="e.g. Mathematics" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-2">Your Message (Optional)</label>
              <textarea name="message" rows="4" className="w-full px-5 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition bg-slate-50 resize-none" placeholder="How can we help you?"></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === "Sending..."}
              className={`w-full text-white py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 shadow-lg 
                ${status === "Message Sent Successfully!" 
                  ? "bg-green-500 hover:bg-green-600 shadow-green-500/20" 
                  : "bg-brand-blue hover:bg-blue-700 shadow-blue-500/20"
                }
                ${status === "Sending..." ? "opacity-75 cursor-not-allowed" : ""}
              `}
            >
              {status || "Send Enquiry"} <Send size={20} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}