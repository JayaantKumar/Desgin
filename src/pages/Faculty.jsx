import { GraduationCap, Mail, Briefcase, Award } from "lucide-react";

export default function Faculty() {
  // Extracted data from the ID cards (Name, Role, Qualification, Email, Experience)
  const facultyMembers = [
    {
      name: "Mrs. Dasari Swati",
      role: "Mentor",
      qualification: "M.SC In Maths & B.ED",
      email: "dasari_swati@mentee2mentor.in",
      experience: "10+ Years", // Update this with real data
      image: "/faculty/swati.jpg"
    },
    {
      name: "Mr. Abhishek Choudhary",
      role: "Mentor",
      qualification: "Computer Science Engineer",
      email: "abhishek@mentee2mentor.in",
      experience: "5+ Years", // Update this with real data
      image: "/faculty/abhishek.jpg"
    },
    {
      name: "Miss. Afsa Anjum",
      role: "Mentor",
      qualification: "Graduate (CS)",
      email: "afsa_anjum@mentee2mentor.in",
      experience: "4+ Years", // Update this with real data
      image: "/faculty/afsa.jpg"
    },
    {
      name: "Mohd. Sarfaraz Khan",
      role: "Mentor",
      qualification: "Post Graduate In M.COM",
      email: "sarfaraz@mentee2mentor.in",
      experience: "6+ Years", // Update this with real data
      image: "/faculty/sarfaraz.jpg"
    },
    {
      name: "Miss. Monika Sahu",
      role: "Mentor",
      qualification: "B.sc",
      email: "monika_sahu@mentee2mentor.in",
      experience: "3+ Years", // Update this with real data
      image: "/faculty/monika.jpg"
    },
    {
      name: "Miss. Nisha Prajapati",
      role: "Mentor",
      qualification: "B.SC Graduated",
      email: "nisha_prajapati@mentee2mentor.in",
      experience: "2+ Years", // Update this with real data
      image: "/faculty/nisha.jpg"
    },
    {
      name: "Mohd. Zaffer",
      role: "Mentor",
      qualification: "Graduated",
      email: "m_zaffer@mentee2mentor.in",
      experience: "5+ Years", // Update this with real data
      image: "/faculty/zaffer.jpg"
    },
    {
      name: "Mr. Krishna Kant Garhe",
      role: "Mentor",
      qualification: "Graduated in Electronics and Telecommunication",
      email: "krishna@mentee2mentor.in",
      experience: "7+ Years", // Update this with real data
      image: "/faculty/krishna.jpg"
    }
  ];

  return (
    <div className="bg-brand-light min-h-screen pt-32 pb-24 px-4 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-3 flex items-center justify-center gap-2">
            <Award size={18} /> Our Mentors
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">Learn from Industry Experts</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Our highly qualified and experienced educators are dedicated to providing individual attention, concept-clearing techniques, and comprehensive academic support.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {facultyMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              
              {/* Top Blue Accent Background */}
              <div className="bg-brand-blue h-24 w-full relative">
                {/* Overlapping Profile Image */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-28 h-28 bg-white p-1.5 rounded-full shadow-md">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover rounded-full bg-slate-100"
                      onError={(e) => {
                        // Fallback if image path is wrong
                        e.target.src = `https://ui-avatars.com/api/?name=${member.name.replace(/ /g, '+')}&background=F6BC14&color=1e293b&size=256&font-size=0.33`;
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="pt-16 pb-8 px-6 text-center">
                <span className="inline-block bg-blue-50 text-brand-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  {member.role}
                </span>
                
                <h3 className="text-xl font-bold text-brand-dark mb-4 line-clamp-1" title={member.name}>
                  {member.name}
                </h3>
                
                <div className="space-y-3 mt-4 border-t border-slate-50 pt-4">
                  {/* Qualification */}
                  <div className="flex items-center justify-center gap-2 text-slate-600 text-sm">
                    <GraduationCap size={16} className="text-brand-yellow shrink-0" />
                    <span className="font-medium line-clamp-1" title={member.qualification}>{member.qualification}</span>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-center justify-center gap-2 text-slate-500 text-xs">
                    <Mail size={14} className="text-brand-blue shrink-0" />
                    <span className="truncate" title={member.email}>{member.email}</span>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center justify-center gap-2 text-slate-500 text-xs">
                    <Briefcase size={14} className="text-green-500 shrink-0" />
                    <span className="truncate" title={`${member.experience} Experience`}>
                      {member.experience} Experience
                    </span>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}