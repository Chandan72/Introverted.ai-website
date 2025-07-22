import React from "react";

const industries = [
  {
    name: "Healthcare",
    icon: (
      <svg className="w-10 h-10 text-[#4682B4] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#4682B4" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="#001F3F" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    useCase: "Automated patient intake and appointment scheduling."
  },
  {
    name: "Finance",
    icon: (
      <svg className="w-10 h-10 text-[#001F3F] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#001F3F" strokeWidth="2"/><path d="M8 16l4-8 4 8" stroke="#4682B4" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    useCase: "Fraud detection and real-time transaction monitoring."
  },
  {
    name: "E-commerce",
    icon: (
      <svg className="w-10 h-10 text-[#4682B4] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="5" stroke="#4682B4" strokeWidth="2"/><circle cx="8" cy="12" r="1" fill="#001F3F"/><circle cx="16" cy="12" r="1" fill="#001F3F"/></svg>
    ),
    useCase: "Personalized product recommendations and chatbots."
  },
  {
    name: "Education",
    icon: (
      <svg className="w-10 h-10 text-[#001F3F] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3L2 9l10 6 10-6-10-6z" stroke="#001F3F" strokeWidth="2"/><path d="M2 17l10 6 10-6" stroke="#4682B4" strokeWidth="2"/></svg>
    ),
    useCase: "AI-driven grading and student engagement analytics."
  },
  {
    name: "Real Estate",
    icon: (
      <svg className="w-10 h-10 text-[#4682B4] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="10" rx="2" stroke="#4682B4" strokeWidth="2"/><path d="M2 12l10-8 10 8" stroke="#001F3F" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    useCase: "Automated lead qualification and virtual property tours."
  }
];

const IndustryInfographic: React.FC = () => (
  <section className="bg-[#F8F9FA] py-12 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#001F3F] mb-10">AI Automation Across Industries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, idx) => (
          <div
            key={industry.name}
            className={`flex flex-col items-center text-center rounded-2xl shadow-md p-8 border-2 transition-all duration-200 relative overflow-hidden ${
              idx % 2 === 0 ? "bg-white border-[#E0E6ED]" : "bg-[#eaf2fa] border-[#4682B4]"
            }`}
          >
            <div className="absolute top-0 left-0 w-full h-2" style={{ background: idx % 2 === 0 ? '#4682B4' : '#001F3F', opacity: 0.12 }}></div>
            {industry.icon}
            <h3 className="text-lg font-semibold text-[#001F3F] mb-2 z-10">{industry.name}</h3>
            <p className="text-gray-700 text-sm mb-0 z-10">{industry.useCase}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustryInfographic;
