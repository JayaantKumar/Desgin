import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    { question: "How can I find the best home tuition services in Bhilai for CBSE students?", answer: "Mentee to Mentor is recognized as a top-rated tuition academy in Bhilai Chhattisgarh. We provide personalized study plans specifically tailored for CBSE, ICSE, and State Board curriculums to ensure maximum academic growth." },
    { question: "Do you have an experienced maths tutor in Bhilai for Class 10 and 12?", answer: "Yes! We provide highly qualified faculty, including experienced maths tutors in Bhilai for Class 10 and 12, ensuring deep concept clarity for critical board exams." },
    { question: "Can I get a home tutor near me in Bhilai for science subjects?", answer: "Absolutely. We offer a private tuition teacher in Bhilai for all subjects, specializing in Physics, Chemistry, and Biology to help students excel in their science courses right at home." },
    { question: "Do you offer affordable tuition classes in Bhilai for school students?", answer: "Yes, our mission is to provide high-quality education at reasonable fees. We offer affordable tuition classes in Bhilai for school students without ever compromising on teaching excellence." },
    { question: "Are there online tuition classes in Bhilai with expert teachers?", answer: "Along with home and classroom coaching, we provide interactive online tuition classes in Bhilai with expert teachers, ensuring learning continues safely and effectively from anywhere." },
    { question: "Do you provide a personal home tutor in Bhilai for JEE preparation or NEET?", answer: "Yes, we offer specialized mentoring. Whether you need a personal home tutor in Bhilai for JEE preparation or the best NEET coaching and home tuition in Bhilai, our expert faculty has you covered." },
    { question: "Do you provide English speaking and grammar classes in Bhilai?", answer: "Yes, we focus on overall student development, which includes dedicated English speaking and grammar classes in Bhilai to build strong communication skills and confidence." }
  ];

  return (
    <div className="bg-brand-light min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-600 text-lg">Everything you need to know about our tuition services in Bhilai.</p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-4 items-start">
              <HelpCircle className="text-brand-yellow shrink-0 mt-1" size={24} />
              <div>
                <h2 className="text-xl font-bold text-brand-dark mb-3">{faq.question}</h2>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}