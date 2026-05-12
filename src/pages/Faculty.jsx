import { GraduationCap, Briefcase, } from "lucide-react";

export default function Faculty() {
  const teachers = [
    {
      name: "Dr. Arvind Sharma",
      subject: "Mathematics",
      qualification: "Ph.D. in Applied Mathematics",
      experience: "15+ Years",
      image: "https://ui-avatars.com/api/?name=Arvind+Sharma&background=2563eb&color=fff&size=256"
    },
    {
      name: "Mrs. Sneha Patel",
      subject: "Physics & Chemistry",
      qualification: "M.Sc. Physics, B.Ed",
      experience: "10+ Years",
      image: "https://ui-avatars.com/api/?name=Sneha+Patel&background=1e293b&color=fff&size=256"
    },
    {
      name: "Mr. Rohan Verma",
      subject: "English Literature",
      qualification: "M.A. English, TEFL Certified",
      experience: "8+ Years",
      image: "https://ui-avatars.com/api/?name=Rohan+Verma&background=2563eb&color=fff&size=256"
    },
    {
      name: "Ms. Priya Singh",
      subject: "Biology",
      qualification: "M.Sc. Zoology",
      experience: "6+ Years",
      image: "https://ui-avatars.com/api/?name=Priya+Singh&background=1e293b&color=fff&size=256"
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Meet Our Expert Faculty</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Learn from highly qualified educators dedicated to bringing out the best in every student.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teachers.map((teacher, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src={teacher.image} 
              alt={teacher.name} 
              className="w-full aspect-square object-cover bg-slate-100"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{teacher.name}</h3>
              <p className="text-brand-blue font-medium mb-4">{teacher.subject}</p>
              
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-slate-400" />
                  <span>{teacher.qualification}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="text-slate-400" />
                  <span>{teacher.experience} Experience</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}