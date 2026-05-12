import { Monitor, Home, Calculator, Microscope, Globe, PenTool } from "lucide-react";

export default function Subjects() {
  const courses = [
    {
      category: "Mathematics",
      icon: <Calculator size={24} />,
      classes: "Class 6th to 12th",
      details: "Algebra, Calculus, Geometry, Trigonometry, and competitive exam preparation."
    },
    {
      category: "Science",
      icon: <Microscope size={24} />,
      classes: "Class 6th to 12th",
      details: "Physics, Chemistry, and Biology. Focus on conceptual clarity and practical applications."
    },
    {
      category: "English",
      icon: <PenTool size={24} />,
      classes: "Class 1st to 12th",
      details: "Grammar, Literature, Creative Writing, and spoken English fluency."
    },
    {
      category: "Social Studies",
      icon: <Globe size={24} />,
      classes: "Class 6th to 10th",
      details: "History, Geography, Civics, and Economics taught through storytelling and maps."
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      {/* Header */}
      <div className="bg-brand-blue text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Subjects & Courses</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          Comprehensive tutoring programs designed for CBSE, ICSE, and State Board curriculums.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        {/* Tuition Modes */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-brand-blue">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg text-brand-blue">
                <Home size={28} />
              </div>
              <h2 className="text-2xl font-bold">Home Tuition</h2>
            </div>
            <p className="text-slate-600 mb-4">
              Get 1-on-1 personalized attention in the comfort of your home. Ideal for students who need a customized pace and distraction-free learning environment.
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Flexible timings</li>
              <li>Direct face-to-face interaction</li>
              <li>Customized study plans</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-slate-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-slate-100 p-3 rounded-lg text-slate-800">
                <Monitor size={28} />
              </div>
              <h2 className="text-2xl font-bold">Online Classes</h2>
            </div>
            <p className="text-slate-600 mb-4">
              Interactive live online classes using modern digital whiteboards. Learn from our top faculty regardless of your geographical location.
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Recorded session availability</li>
              <li>Interactive digital tools</li>
              <li>Small batch sizes (Max 5 students)</li>
            </ul>
          </div>
        </div>

        {/* Course Cards */}
        <h2 className="text-3xl font-bold text-center mb-10">Subjects Offered</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-brand-blue transition-colors">
              <div className="text-brand-blue bg-slate-50 p-4 rounded-full h-fit">
                {course.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{course.category}</h3>
                <p className="text-sm font-semibold text-slate-500 mb-2">{course.classes}</p>
                <p className="text-slate-600">{course.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}