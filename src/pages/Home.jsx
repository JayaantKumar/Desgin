import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  PlayCircle, 
  Users, 
  BookOpen, 
  Quote,  
  MonitorPlay
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="animate-in fade-in duration-500 bg-slate-50">
      
      {/* 1. HERO SECTION (Modern Split Layout) */}
      <section className="bg-slate-900 text-white pt-20 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block bg-blue-500/20 text-blue-300 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 border border-blue-500/30">
              #1 Ranked Tuition Center in the City
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white capitalize">
  Knowledge doesn't come but <br className="hidden md:block" />
  <span className="text-brand-yellow">you have to go to it !</span>
</h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              Expert faculty, personalized study plans, and interactive learning methodologies designed to help students score top grades and build strong fundamentals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-brand-blue text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-600 transition flex items-center gap-2 shadow-lg shadow-blue-500/30">
                Book a Free Trial <ArrowRight size={20} />
              </Link>
              <a href="#video-showcase" className="bg-white/10 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/20 transition border border-white/20 flex items-center gap-2">
                <PlayCircle size={20} /> Watch Video
              </a>
            </div>
          </div>
          <div className="relative">
            {/* Hero Image/Video Placeholder */}
            <div className="aspect-video bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Students learning" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full cursor-pointer hover:bg-white/30 transition">
                  <PlayCircle size={48} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR (Overlapping the Hero) */}
      <section className="-mt-16 relative z-20 max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
          <div>
            <h3 className="text-4xl font-bold text-slate-800 mb-1">1000+</h3>
            <p className="text-slate-500 font-medium text-sm">Happy Students</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-slate-800 mb-1">50+</h3>
            <p className="text-slate-500 font-medium text-sm">Expert Tutors</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-slate-800 mb-1">98%</h3>
            <p className="text-slate-500 font-medium text-sm">Success Rate</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-slate-800 mb-1">15+</h3>
            <p className="text-slate-500 font-medium text-sm">Years Experience</p>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-2">What We Offer</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Education Services</h3>
          <p className="text-slate-600">We provide tailored learning experiences to suit every student's unique requirements, from basic concepts to advanced competitive exams.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Users size={32} />, title: "Home Tuition", desc: "One-on-one personalized learning at the comfort of your home for maximum focus." },
            { icon: <MonitorPlay size={32} />, title: "Online Classes", desc: "Interactive digital classes with recorded sessions and modern whiteboard tools." },
            { icon: <BookOpen size={32} />, title: "Board Exam Prep", desc: "Specialized crash courses and test series for CBSE, ICSE, and State Boards." },
          ].map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="bg-blue-50 text-brand-blue w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 mb-6">{service.desc}</p>
              <Link to="/subjects" className="text-brand-blue font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VIDEO SHOWCASE */}
      <section id="video-showcase" className="bg-slate-900 py-24 px-4 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Our Teaching Methodology</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">Take a glimpse into our interactive classrooms and see how our expert faculty simplifies complex concepts.</p>
          
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 aspect-video flex items-center justify-center group cursor-pointer">
             <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Video Thumbnail" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition"
              />
             <div className="relative z-10 bg-brand-blue w-20 h-20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)] group-hover:scale-110 transition duration-300">
                <PlayCircle size={40} className="text-white ml-1" />
             </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (Expanded Layout) */}
      <section className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-blue-100 rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Why choose us" 
              className="rounded-3xl shadow-xl w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-2">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">We Don't Just Teach, We Inspire.</h3>
            <p className="text-slate-600 mb-8">We believe that every student has immense potential. Our goal is to unlock that potential through dedicated mentorship and a proven curriculum.</p>
            
            <div className="space-y-6">
              {[
                { title: "Concept-Driven Approach", desc: "No rote learning. We focus on deep understanding." },
                { title: "Weekly Assessments", desc: "Regular tests to track progress and identify weak areas." },
                { title: "24/7 Doubt Clearing", desc: "Students can reach out to tutors anytime via our portal." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1"><CheckCircle className="text-brand-blue" size={24} /></div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MEET THE TEAM PREVIEW */}
      <section className="py-24 px-4 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-2">Our Faculty</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Learn from Industry Experts</h3>
            </div>
            <Link to="/faculty" className="text-brand-blue font-semibold flex items-center gap-2 hover:underline">
              View All Members <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Arvind Sharma", subject: "Mathematics", image: "https://ui-avatars.com/api/?name=Arvind+Sharma&background=2563eb&color=fff&size=256" },
              { name: "Mrs. Sneha Patel", subject: "Physics", image: "https://ui-avatars.com/api/?name=Sneha+Patel&background=1e293b&color=fff&size=256" },
              { name: "Mr. Rohan Verma", subject: "English Literature", image: "https://ui-avatars.com/api/?name=Rohan+Verma&background=2563eb&color=fff&size=256" }
            ].map((teacher, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group">
                <img src={teacher.image} alt={teacher.name} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-slate-900">{teacher.name}</h4>
                  <p className="text-brand-blue font-medium">{teacher.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">What Parents & Students Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Rahul Deshmukh", role: "Class 10 Student", text: "My math scores improved from 65% to 92% in just 6 months. The teachers here explain concepts so beautifully." },
            { name: "Priya Menon", role: "Parent", text: "Finding a good home tutor was difficult until we found EduTutors. Extremely professional and dedicated faculty." },
            { name: "Aman Gupta", role: "Class 12 Student", text: "The online classes are just as good as offline ones. The doubt clearing sessions before board exams were a lifesaver." }
          ].map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <Quote size={40} className="text-blue-100 absolute top-6 right-6" />
              <div className="flex text-yellow-400 mb-4">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{review.name}</h4>
                <p className="text-sm text-slate-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <section className="py-20 px-4 bg-brand-blue">
        <div className="max-w-4xl mx-auto text-center bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Boost Your Grades?</h2>
          <p className="text-blue-100 mb-10 text-lg">Join thousands of successful students. Enroll today and experience the difference in your learning journey.</p>
          <Link to="/contact" className="inline-block bg-white text-brand-blue px-10 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition shadow-xl">
            Schedule a Callback
          </Link>
        </div>
      </section>

    </div>
  );
}