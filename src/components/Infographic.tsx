import React from "react";

const steps = [
  {
    title: "Identify",
    icon: (
      <svg className="w-12 h-12 text-[#001F3F] mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke="#001F3F" strokeWidth="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#4682B4" strokeWidth="2" strokeLinecap="round"/><circle cx="11" cy="11" r="5" stroke="#4682B4" strokeWidth="2"/></svg>
    ),
    description: "Analyze your business and uncover the best automation opportunities."
  },
  {
    title: "Educate",
    icon: (
      <svg className="w-12 h-12 text-[#4682B4] mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3L2 9l10 6 10-6-10-6z" stroke="#4682B4" strokeWidth="2"/><path d="M2 17l10 6 10-6" stroke="#001F3F" strokeWidth="2"/><path d="M2 9v8" stroke="#001F3F" strokeWidth="2"/><path d="M22 9v8" stroke="#001F3F" strokeWidth="2"/></svg>
    ),
    description: "Train and support your team to confidently use AI tools."
  },
  {
    title: "Develop",
    icon: (
      <svg className="w-12 h-12 text-[#001F3F] mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#001F3F" strokeWidth="2"/><path d="M12 6v6l4 2" stroke="#4682B4" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    description: "Build and integrate custom AI systems for real results."
  }
];

const Infographic: React.FC = () => (
  <section className="bg-[#F8F9FA] py-12 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#001F3F] mb-10">Client Transformation Journey</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
        {steps.map((step, idx) => (
          <div key={step.title} className="flex flex-col items-center bg-white rounded-2xl shadow-md px-6 py-8 flex-1 min-w-[220px] max-w-xs border border-[#E0E6ED] relative">
            {step.icon}
            <h3 className="text-xl font-semibold mb-2 text-[#001F3F]">{step.title}</h3>
            <p className="text-gray-700 text-center text-base mb-0">{step.description}</p>
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute right-[-32px] top-1/2 transform -translate-y-1/2">
                <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 12h56m0 0l-6-6m6 6l-6 6" stroke="#4682B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
            {idx < steps.length - 1 && (
              <div className="md:hidden mt-6">
                <svg width="24" height="64" viewBox="0 0 24 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0v56m0 0l-6-6m6 6l6-6" stroke="#4682B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Infographic;
