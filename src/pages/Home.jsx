import { useState, useEffect, useRef } from "react";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  BookOpen, 
  MonitorPlay,
  Camera,
  MapPin,
  Award,
  Star,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";

// --- CUSTOM ZERO-DEPENDENCY COUNT UP ANIMATION ---
const StatCounter = ({ end, duration = 2500, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const currentElement = countRef.current; 

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp = null;
          
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            const easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOut * end));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [end, duration, hasAnimated]);

  return <span ref={countRef}>{count}{suffix}</span>;
};
// -------------------------------------------------

export default function Home() {
  return (
    <div className="animate-in fade-in duration-500 bg-white">
      
      {/* 1. HERO SECTION (Light & Airy) - Desktop & Mobile Optimized */}
      <section className="bg-brand-light pt-28 md:pt-32 pb-12 md:pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
          <div className="pt-2 md:pt-4">
            <div className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm mb-6 md:mb-8 shadow-sm border border-blue-100">
              <MapPin size={16} className="text-brand-yellow shrink-0" />
              <span>Trusted Home Tutors for CBSE, ICSE & State Boards in Bhilai</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight text-brand-dark">
              Knowledge doesn't come but <br className="hidden md:block" />
              <span className="text-brand-blue relative">
                you have to go to it!
                <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-brand-yellow opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 max-w-xl leading-relaxed">
              Expert faculty, personalized study plans, and interactive learning methodologies designed to help students score top grades and build strong fundamentals.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-brand-blue text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold hover:bg-blue-700 transition flex items-center gap-2 shadow-lg shadow-blue-500/30">
                Book a Free Trial <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video lg:aspect-auto lg:h-[450px]">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Students learning" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-3 md:p-5 rounded-2xl shadow-xl flex items-center gap-3 md:gap-4 border border-slate-50 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="bg-brand-yellow p-2 md:p-3 rounded-full text-brand-dark">
                <Award size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <p className="font-extrabold text-lg md:text-xl text-brand-dark">10+ Years</p>
                <p className="text-xs md:text-sm text-slate-500 font-medium">Teaching Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-12 relative z-20 max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
          <div>
            <h3 className="text-4xl font-extrabold text-brand-blue mb-2">
              <StatCounter end={1000} suffix="+" />
            </h3>
            <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">Happy Students</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-brand-blue mb-2">
              <StatCounter end={50} suffix="+" />
            </h3>
            <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">Expert Tutors</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-brand-blue mb-2">
              <StatCounter end={98} suffix="%" />
            </h3>
            <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">Success Rate</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-brand-blue mb-2">
              <StatCounter end={15} suffix="+" />
            </h3>
            <p className="text-slate-500 font-medium text-sm uppercase tracking-wider">Years Experience</p>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-3">What We Offer</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6">Comprehensive Education</h3>
          <p className="text-slate-600 text-lg">We provide tailored learning experiences to suit every student's unique requirements in Bhilai.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Users size={32} />, title: "Home Tuition", desc: "One-on-one personalized learning at the comfort of your home for maximum focus." },
            { icon: <MonitorPlay size={32} />, title: "Classroom Coaching", desc: "Interactive group classes focusing on peer learning and competitive spirit." },
            { icon: <BookOpen size={32} />, title: "Board Exam Prep", desc: "Specialized crash courses and test series for CBSE, ICSE, and State Boards." },
          ].map((service, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition duration-300 group">
              <div className="bg-blue-50 text-brand-blue w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-brand-dark mb-4">{service.title}</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">{service.desc}</p>
              <Link to="/subjects" className="text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn more <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-24 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-brand-yellow rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Why choose us" 
              className="rounded-3xl shadow-xl w-full object-cover border-8 border-white"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6">We Don't Just Teach, We Inspire.</h3>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">We believe that every student has immense potential. Our goal is to unlock that potential through dedicated mentorship and a proven curriculum.</p>
            
            <div className="space-y-8">
              {[
                { title: "Concept-Driven Approach", desc: "No rote learning. We focus on deep understanding." },
                { title: "Weekly Assessments", desc: "Regular tests to track progress and identify weak areas." },
                { title: "24/7 Doubt Clearing", desc: "Students can reach out to tutors anytime via our portal." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 bg-white p-5 rounded-2xl shadow-sm border border-slate-50">
                  <div className="mt-1"><CheckCircle className="text-brand-yellow" size={28} /></div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEET THE TEAM PREVIEW (Re-added) */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-3">Our Faculty</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-brand-dark">Learn from Industry Experts</h3>
            </div>
            <Link to="/faculty" className="text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Members <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Arvind Sharma", subject: "Mathematics", image: "https://ui-avatars.com/api/?name=Arvind+Sharma&background=0B67C2&color=fff&size=256&font-size=0.4" },
              { name: "Mrs. Sneha Patel", subject: "Physics", image: "https://ui-avatars.com/api/?name=Sneha+Patel&background=1e293b&color=fff&size=256&font-size=0.4" },
              { name: "Mr. Rohan Verma", subject: "English Literature", image: "https://ui-avatars.com/api/?name=Rohan+Verma&background=0B67C2&color=fff&size=256&font-size=0.4" }
            ].map((teacher, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 group border border-slate-100">
                <img src={teacher.image} alt={teacher.name} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-8 text-center bg-white relative z-10">
                  <h4 className="text-xl font-bold text-brand-dark mb-1">{teacher.name}</h4>
                  <p className="text-brand-blue font-medium">{teacher.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS (Re-added) */}
      <section className="py-24 px-4 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-brand-dark">What Parents & Students Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rahul Deshmukh", role: "Class 10 Student", text: "My math scores improved from 65% to 92% in just 6 months. The teachers here explain concepts so beautifully." },
              { name: "Priya Menon", role: "Parent", text: "Finding a good home tutor was difficult until we found Mentee to Mentor. Extremely professional and dedicated faculty." },
              { name: "Aman Gupta", role: "Class 12 Student", text: "The online classes are just as good as offline ones. The doubt clearing sessions before board exams were a lifesaver." }
            ].map((review, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition duration-300 border border-slate-100 relative group">
                <Quote size={48} className="text-blue-50 absolute top-6 right-6 group-hover:text-blue-100 transition-colors" />
                <div className="flex text-brand-yellow mb-6">
                  <Star size={20} fill="currentColor" stroke="none" />
                  <Star size={20} fill="currentColor" stroke="none" />
                  <Star size={20} fill="currentColor" stroke="none" />
                  <Star size={20} fill="currentColor" stroke="none" />
                  <Star size={20} fill="currentColor" stroke="none" />
                </div>
                <p className="text-slate-600 mb-8 italic leading-relaxed relative z-10">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">{review.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLASSROOM GALLERY */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-3 flex items-center gap-2">
                <Camera size={16} /> Image Gallery
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-brand-dark">Inside Our Classrooms</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[250px]">
            <div className="overflow-hidden rounded-3xl md:col-span-2 md:row-span-2 shadow-lg">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" alt="Classroom" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=500&q=80" alt="Students" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80" alt="Study Group" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
            </div>
            <div className="overflow-hidden rounded-3xl md:col-span-2 shadow-lg">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" alt="Online Class" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <section className="py-24 px-4 bg-brand-light">
        <div className="max-w-5xl mx-auto text-center bg-brand-blue rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">Ready to Boost Your Grades?</h2>
          <p className="text-blue-100 mb-10 text-lg md:text-xl max-w-2xl mx-auto relative z-10">Join thousands of successful students in Bhilai. Enroll today and experience the difference in your learning journey.</p>
          <Link to="/contact" className="inline-block bg-brand-yellow text-brand-dark px-10 py-4 rounded-xl font-extrabold text-lg hover:bg-white hover:text-brand-blue transition-all shadow-xl relative z-10">
            Schedule a Callback
          </Link>
        </div>
      </section>

    </div>
  );
}