import React from "react";

const problems = [
  {
    icon: (
      <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#e3342f" strokeWidth="2"/><path d="M8 12h8" stroke="#e3342f" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    text: "Manual data entry"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#f59e42" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="#f59e42" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    text: "Inconsistent customer support"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10l-4-4m4 4l4-4" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    text: "Slow, error-prone processes"
  }
];

const solutions = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#4682B4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#4682B4" strokeWidth="2"/><path d="M8 12h8" stroke="#001F3F" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    text: "AI-powered automation for fast, accurate data handling"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#001F3F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="5" stroke="#001F3F" strokeWidth="2"/><circle cx="8" cy="12" r="1" fill="#4682B4"/><circle cx="16" cy="12" r="1" fill="#4682B4"/></svg>
    ),
    text: "24/7 chatbots for consistent, instant support"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    text: "Streamlined workflows with fewer errors and faster results"
  }
];

const ProblemsSolutionsInfographic: React.FC = () => (
  <section className="bg-[#F8F9FA] py-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#001F3F] mb-10">Problems vs. Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Problems Column */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-[#E0E6ED] flex flex-col items-center">
          <h3 className="text-xl font-semibold text-red-500 mb-4">Common Pain Points</h3>
          {problems.map((item, idx) => (
            <div key={idx} className="flex items-center mb-6">
              {item.icon}
              <span className="ml-3 text-gray-700 text-base">{item.text}</span>
            </div>
          ))}
        </div>
        {/* Solutions Column */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-[#E0E6ED] flex flex-col items-center">
          <h3 className="text-xl font-semibold text-[#001F3F] mb-4">AI-Powered Solutions</h3>
          {solutions.map((item, idx) => (
            <div key={idx} className="flex items-center mb-6">
              {item.icon}
              <span className="ml-3 text-gray-700 text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProblemsSolutionsInfographic;
