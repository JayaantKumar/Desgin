import { Target, Lightbulb, BookOpen, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="animate-in fade-in duration-500 pb-16">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">About EduTutors</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Empowering students to achieve academic excellence through personalized and innovative teaching methodologies.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <Target className="text-brand-blue mb-4" size={40} />
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To provide high-quality, accessible, and personalized education that caters to the unique learning pace of every student, ensuring they not only score well but truly understand the core concepts.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <Lightbulb className="text-brand-blue mb-4" size={40} />
            <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be the most trusted educational partner for parents and students, fostering a love for learning and building a foundation for lifelong success and intellectual curiosity.
            </p>
          </div>
        </div>

        {/* Methodology */}
        <h2 className="text-3xl font-bold text-center mb-10">Our Teaching Methodology</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <BookOpen size={32} />,
              title: "Concept-Driven",
              desc: "We focus on clearing fundamental concepts rather than rote learning, making advanced topics easier to grasp."
            },
            {
              icon: <Users size={32} />,
              title: "Personalized Focus",
              desc: "Every student has a different learning curve. We adapt our teaching style to match individual student needs."
            },
            {
              icon: <Award size={32} />,
              title: "Regular Assessments",
              desc: "Weekly tests and performance tracking ensure continuous improvement and board exam readiness."
            }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4 text-brand-blue">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}