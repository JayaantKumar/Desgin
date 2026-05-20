import { Monitor, Home as HomeIcon, Calculator, Microscope, Globe, PenTool } from "lucide-react";

export default function Subjects() {
  const courses = [
    {
      category: "Mathematics",
      icon: <Calculator size={32} />,
      classes: "Class 6th to 12th",
      details: "Algebra, Calculus, Geometry, Trigonometry, and competitive exam preparation."
    },
    {
      category: "Science",
      icon: <Microscope size={32} />,
      classes: "Class 6th to 12th",
      details: "Physics, Chemistry, and Biology. Focus on conceptual clarity and practical applications."
    },
    {
      category: "English",
      icon: <PenTool size={32} />,
      classes: "Class 1st to 12th",
      details: "Grammar, Literature, Creative Writing, and spoken English fluency."
    },
    {
      category: "Social Studies",
      icon: <Globe size={32} />,
      classes: "Class 6th to 10th",
      details: "History, Geography, Civics, and Economics taught through storytelling and maps."
    }
  ];

  return (
    <div className="bg-brand-light min-h-screen animate-in fade-in duration-500">
      
      {/* HEADER SECTION
        The pt-32 (padding-top) class here is what fixes the overlap issue! 
        It pushes the blue background and text down below the fixed navbar.
      */}
      <div className="bg-brand-blue text-white pt-32 pb-24 px-4 text-center relative overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 relative z-10">Subjects & Courses</h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto relative z-10">
          Comprehensive tutoring programs designed for CBSE, ICSE, and State Board curriculums.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24 -mt-10 relative z-20">
        
        {/* Mode of Teaching Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Home Tuition Card */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-2xl text-brand-blue">
                <HomeIcon size={32} />
              </div>
              <h2 className="text-2xl font-bold text-brand-dark">Home Tuition</h2>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Get 1-on-1 personalized attention in the comfort of your home. Ideal for students who need a customized pace and distraction-free learning environment.
            </p>
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex items-center gap-3">
                <span className="text-brand-yellow text-lg">●</span> Flexible timings
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-yellow text-lg">●</span> Direct face-to-face interaction
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-yellow text-lg">●</span> Customized study plans
              </li>
            </ul>
          </div>

          {/* Online Classes Card */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-2xl text-brand-blue">
                <Monitor size={32} />
              </div>
              <h2 className="text-2xl font-bold text-brand-dark">Online Classes</h2>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Interactive live online classes using modern digital whiteboards. Learn from our top faculty regardless of your geographical location.
            </p>
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex items-center gap-3">
                <span className="text-brand-yellow text-lg">●</span> Recorded session availability
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-yellow text-lg">●</span> Interactive digital tools
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-yellow text-lg">●</span> Small batch sizes (Max 5 students)
              </li>
            </ul>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="text-center mb-12">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-3">Our Curriculum</h2>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark">Subjects Offered</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-6 p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-brand-blue bg-blue-50 p-5 rounded-2xl h-fit w-fit group-hover:scale-110 transition-transform flex-shrink-0">
                {course.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">{course.category}</h3>
                <p className="text-sm font-bold text-brand-yellow uppercase tracking-wider mb-3">{course.classes}</p>
                <p className="text-slate-600 leading-relaxed">{course.details}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}