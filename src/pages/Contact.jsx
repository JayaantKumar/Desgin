import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const formData = new FormData(e.target);
    
    // Your Google Apps Script Web App URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbz7yUYL3vjwyqthyvJ5ChOQfLMn8C-zt3nhFhPFFhMtDTNIX-No9S_48SuEuyTG3VxGwQ/exec"; 

    try {
      // Added mode: "no-cors" to bypass the cross-origin block
      await fetch(scriptURL, { 
        method: "POST", 
        body: formData,
        mode: "no-cors"
      });
      
      setStatus("Message Sent Successfully!");
      e.target.reset();
    } catch (error) {
      console.error("Error!", error.message);
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
        <p className="text-gray-600 mb-8">Ready to start your learning journey? Fill out the form, and we'll get back to you within 24 hours.</p>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-gray-700">
            <div className="bg-blue-100 p-3 rounded-full text-brand-blue"><Phone size={24} /></div>
            <div>
              <p className="font-semibold">Phone / WhatsApp</p>
              <p>+91 123 456 7890</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <div className="bg-blue-100 p-3 rounded-full text-brand-blue"><Mail size={24} /></div>
            <div>
              <p className="font-semibold">Email</p>
              <p>contact@edututors.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <div className="bg-blue-100 p-3 rounded-full text-brand-blue"><MapPin size={24} /></div>
            <div>
              <p className="font-semibold">Location</p>
              <p>123 Education Street, Learning Hub</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" name="name" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-brand-blue outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" name="phone" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-brand-blue outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
              <input type="text" name="class" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-brand-blue outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input type="text" name="subject" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-brand-blue outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea name="message" rows="4" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-brand-blue outline-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-brand-blue text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
            {status || "Send Enquiry"} <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}