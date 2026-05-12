import { ArrowRight, CheckCircle,  } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Unlock Your True Academic Potential</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">Expert home and online tuition tailored for individual student success. Learn from the best faculty.</p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-white text-brand-blue px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition flex items-center gap-2">
              Book a Trial Class <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose EduTutors?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Expert Faculty", desc: "Highly qualified teachers with 10+ years of experience." },
            { title: "Personalized Attention", desc: "Small batches and 1-on-1 home tutoring options." },
            { title: "Proven Results", desc: "Consistent track record of top grades and board toppers." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <CheckCircle className="text-brand-blue mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}