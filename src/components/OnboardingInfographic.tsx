import React from "react";

const steps = [
  {
    title: "Initial Consult",
    icon: (
      <svg className="w-8 h-8 text-[#001F3F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#001F3F" strokeWidth="2"/><path d="M8 15h8M8 11h8M8 7h8" stroke="#4682B4" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    desc: "Meet to discuss your goals and vision."
  },
  {
    title: "Needs Assessment",
    icon: (
      <svg className="w-8 h-8 text-[#4682B4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#4682B4" strokeWidth="2"/><path d="M8 12h8" stroke="#001F3F" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    desc: "Analyze your business needs and challenges."
  },
  {
    title: "Proposal",
    icon: (
      <svg className="w-8 h-8 text-[#001F3F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 4h12v16H6z" stroke="#001F3F" strokeWidth="2"/><path d="M6 8h12" stroke="#4682B4" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    desc: "Present a tailored solution and plan."
  },
  {
    title: "Development",
    icon: (
      <svg className="w-8 h-8 text-[#4682B4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="7" height="7" rx="2" stroke="#4682B4" strokeWidth="2"/><rect x="14" y="10" width="7" height="7" rx="2" stroke="#001F3F" strokeWidth="2"/></svg>
    ),
    desc: "Build and test your custom AI solution."
  },
  {
    title: "Launch",
    icon: (
      <svg className="w-8 h-8 text-[#001F3F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" stroke="#001F3F" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    desc: "Deploy your solution and go live."
  },
  {
    title: "Support",
    icon: (
      <svg className="w-8 h-8 text-[#4682B4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#4682B4" strokeWidth="2"/><path d="M12 16v-4m0 0V8m0 4l-4-4m4 4l4-4" stroke="#001F3F" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    desc: "Ongoing help and optimization."
  }
];

const OnboardingInfographic: React.FC = () => (
  <section className="bg-[#F8F9FA] py-12 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#001F3F] mb-10">Client Onboarding Process</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
        {steps.map((step, idx) => (
          <div key={step.title} className="flex flex-col items-center flex-1 min-w-[120px] max-w-xs">
            <div className="bg-white rounded-full shadow-md p-4 border border-[#E0E6ED] mb-2">
              {step.icon}
            </div>
            <h3 className="text-base font-semibold text-[#001F3F] mb-1">{step.title}</h3>
            <p className="text-gray-700 text-center text-xs mb-0">{step.desc}</p>
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute right-[-32px] top-1/2 transform -translate-y-1/2">
                <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 12h56m0 0l-6-6m6 6l-6 6" stroke="#4682B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
            {idx < steps.length - 1 && (
              <div className="md:hidden mt-4">
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

export default OnboardingInfographic;
