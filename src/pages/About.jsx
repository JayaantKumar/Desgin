import { Target, Lightbulb, ShieldCheck, CheckCircle2, FileText, UserCheck, Calendar } from "lucide-react";

export default function About() {
  return (
    <div className="animate-in fade-in duration-500 bg-brand-light min-h-screen pb-20">
      
      {/* Header Section */}
      <div className="bg-brand-blue text-white pt-32 pb-24 px-4 text-center relative overflow-hidden">
        {/* Decorative elements to match brochure shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 transform translate-x-1/2 translate-y-1/2"></div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 relative z-10">About Us</h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-medium relative z-10">
          "Building Confidence, Shaping Futures."
        </p>
        <p className="text-lg text-brand-yellow mt-2 font-bold relative z-10">
          Unlocking Potential Through Personalized Teaching
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        
        {/* About Us Full Text */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 mb-16 text-center max-w-4xl mx-auto relative">
          <ShieldCheck className="text-brand-yellow w-16 h-16 mx-auto mb-6" />
          <p className="text-lg text-slate-700 leading-relaxed font-medium">
            MENTEE TO MENTOR offers personalized home tuition and academic consulting services designed to bring out the best in every student and to give a peace of mind to parents. 
          </p>
          <p className="text-lg text-slate-700 leading-relaxed font-medium mt-4">
            Our experienced and compassionate tutors, led by Education experts and Social Workers, create tailored learning strategies that cater to each student's unique needs and aspirations. With a particular focus on building confidence in students and comprehensive academic and exam preparation, MENTEE TO MENTOR is the trusted choice for parents seeking exceptional support and guidance for their children.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <Lightbulb className="text-brand-blue mb-6" size={48} />
            <h2 className="text-3xl font-extrabold text-brand-dark mb-4">School Vision</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              To be the leading educational platform dedicated to <strong>Building Confidence</strong> and <strong>Shaping Futures</strong> by unlocking every student's true potential through highly personalized teaching methodologies.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <Target className="text-brand-yellow mb-6" size={48} />
            <h2 className="text-3xl font-extrabold text-brand-dark mb-6">Our Mission</h2>
            <ul className="space-y-4">
              {[
                "Providing high-quality education.",
                "Developing student potential in various fields.",
                "Forming the character of students with good morals."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-blue shrink-0 mt-1" size={24} />
                  <span className="text-slate-700 text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Institutional Policies */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-3">Guidelines</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-brand-dark">Mentee to Mentor Policies</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <UserCheck />, title: "Leave Policy (Students)", desc: "Classes missed due to student leave (initiated by parents) will not be compensated." },
              { icon: <UserCheck />, title: "Leave Policy (Teachers)", desc: "If a teacher takes leave, missed classes will be compensated with additional sessions." },
              { icon: <ShieldCheck />, title: "Staff Dress Code", desc: "All teachers are required to wear an ID card and a sky-blue apron during school hours." },
              { icon: <FileText />, title: "Communication", desc: "A dedicated website and Google Forms are used to facilitate feedback, queries, and communication." },
              { icon: <Target />, title: "Student Engagement", desc: "Continuous strategies will be implemented to improve student focus and interest in studies." },
              { icon: <Calendar />, title: "Vacation Calendar", desc: "A yearly calendar outlining holidays and vacation periods will be shared in advance." },
            ].map((policy, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4">
                <div className="bg-brand-light w-12 h-12 rounded-full flex items-center justify-center text-brand-blue">
                  {policy.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-dark mb-2">{policy.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{policy.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Curriculum Notes */}
          <div className="mt-8 bg-brand-blue text-white p-6 md:p-8 rounded-3xl shadow-lg flex flex-col md:flex-row gap-8 justify-between items-center">
            <div className="flex-1">
              <h4 className="font-bold text-brand-yellow mb-2 uppercase tracking-wide text-sm">Note: 11th & 12th CBSE</h4>
              <p className="text-blue-50 text-sm">The standard fee covers only the 11th & 12th CBSE syllabus. Additional charges apply for extra preparation per subject.</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-blue-400"></div>
            <div className="flex-1">
              <h4 className="font-bold text-brand-yellow mb-2 uppercase tracking-wide text-sm">Note: 9th & 10th Grade</h4>
              <p className="text-blue-50 text-sm">Additional subjects, including the inclusion of social studies, will result in an additional fee.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}