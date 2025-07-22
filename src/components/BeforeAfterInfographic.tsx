import React from "react";

const beforePoints = [
  {
    icon: (
      <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke="#e3342f" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    text: "Manual data entry & paperwork"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" stroke="#f59e42" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="10" stroke="#f59e42" strokeWidth="2"/></svg>
    ),
    text: "Delays & slow approvals"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10l-4-4m4 4l4-4" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    text: "Frequent errors & rework"
  }
];

const afterPoints = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#4682B4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#4682B4" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    text: "Automated, accurate data processing"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#001F3F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#001F3F" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="#4682B4" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    text: "Faster approvals & real-time insights"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    text: "Fewer errors, more productivity"
  }
];

const BeforeAfterInfographic: React.FC = () => (
  <section className="bg-[#F8F9FA] py-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#001F3F] mb-10">Before vs. After AI Automation</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Before */}
        <div className="flex-1 bg-white rounded-2xl shadow-md p-8 border border-[#E0E6ED] flex flex-col items-center">
          <h3 className="text-xl font-semibold text-red-500 mb-4">Manual Workflow</h3>
          {beforePoints.map((point, idx) => (
            <div key={idx} className="flex items-center mb-4">
              {point.icon}
              <span className="ml-3 text-gray-700 text-base">{point.text}</span>
            </div>
          ))}
        </div>
        {/* Arrow */}
        <div className="my-8 md:my-0 md:mx-4 flex-shrink-0">
          <svg className="hidden md:block" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 32h48m0 0l-8-8m8 8l-8 8" stroke="#4682B4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg className="md:hidden" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 8v32m0 0l-8-8m8 8l8-8" stroke="#4682B4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* After */}
        <div className="flex-1 bg-white rounded-2xl shadow-md p-8 border border-[#E0E6ED] flex flex-col items-center">
          <h3 className="text-xl font-semibold text-[#001F3F] mb-4">AI-Automated Workflow</h3>
          {afterPoints.map((point, idx) => (
            <div key={idx} className="flex items-center mb-4">
              {point.icon}
              <span className="ml-3 text-gray-700 text-base">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfterInfographic;
