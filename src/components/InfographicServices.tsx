import React from "react";

const services = [
  {
    title: "Workflow Automation",
    icon: (
      <svg className="w-10 h-10 text-[#001F3F] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="7" height="7" rx="2" stroke="#001F3F" strokeWidth="2"/><rect x="14" y="10" width="7" height="7" rx="2" stroke="#4682B4" strokeWidth="2"/><path d="M10 10h4" stroke="#4682B4" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    description: "Automate repetitive tasks to save time and reduce errors."
  },
  {
    title: "Chatbot Development",
    icon: (
      <svg className="w-10 h-10 text-[#4682B4] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="5" stroke="#4682B4" strokeWidth="2"/><circle cx="8" cy="12" r="1" fill="#001F3F"/><circle cx="16" cy="12" r="1" fill="#001F3F"/><path d="M12 17v2" stroke="#001F3F" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    description: "Engage customers 24/7 with intelligent chatbots."
  },
  {
    title: "AI Consulting",
    icon: (
      <svg className="w-10 h-10 text-[#001F3F] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="#001F3F" strokeWidth="2"/><path d="M12 6v6l4 2" stroke="#4682B4" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    description: "Get expert guidance to unlock AI’s full potential."
  },
  {
    title: "Domain-Specific LLM Fine-Tuning",
    icon: (
      <svg className="w-10 h-10 text-[#4682B4] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#4682B4" strokeWidth="2"/><path d="M8 12h8" stroke="#001F3F" strokeWidth="2" strokeLinecap="round"/><path d="M12 8v8" stroke="#001F3F" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    description: "Tailor language models for your unique industry needs."
  }
];

const InfographicServices: React.FC = () => (
  <section className="bg-[#F8F9FA] py-12 px-4">
    <div className="max-w-4xl mx-auto flex flex-col items-center">
      {/* Central Logo/Icon */}
      <div className="relative flex items-center justify-center mb-12">
        <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-[#001F3F]">
          {/* Simple logo icon for INTROVERTED.AI */}
          <svg className="w-14 h-14" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="26" stroke="#001F3F" strokeWidth="4" fill="#F8F9FA"/>
            <path d="M18 36c2-4 6-8 10-8s8 4 10 8" stroke="#4682B4" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="22" cy="24" r="2.5" fill="#001F3F"/>
            <circle cx="34" cy="24" r="2.5" fill="#001F3F"/>
          </svg>
        </div>
        {/* Branch lines */}
        <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
            <path d="M210 40v60" stroke="#4682B4" strokeWidth="2"/>
            <path d="M210 380v-60" stroke="#4682B4" strokeWidth="2"/>
            <path d="M40 210h60" stroke="#4682B4" strokeWidth="2"/>
            <path d="M380 210h-60" stroke="#4682B4" strokeWidth="2"/>
          </svg>
        </div>
      </div>
      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        {/* Top (Workflow Automation) */}
        <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 border border-[#E0E6ED] relative" style={{ top: '-40px' }}>
          {services[0].icon}
          <h3 className="text-lg font-semibold text-[#001F3F] mb-1">{services[0].title}</h3>
          <p className="text-gray-700 text-sm mb-0">{services[0].description}</p>
        </div>
        {/* Right (Chatbot Development) */}
        <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 border border-[#E0E6ED] relative md:col-start-2 md:row-start-1" style={{ left: '40px' }}>
          {services[1].icon}
          <h3 className="text-lg font-semibold text-[#001F3F] mb-1">{services[1].title}</h3>
          <p className="text-gray-700 text-sm mb-0">{services[1].description}</p>
        </div>
        {/* Left (AI Consulting) */}
        <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 border border-[#E0E6ED] relative md:col-start-1 md:row-start-2" style={{ left: '-40px' }}>
          {services[2].icon}
          <h3 className="text-lg font-semibold text-[#001F3F] mb-1">{services[2].title}</h3>
          <p className="text-gray-700 text-sm mb-0">{services[2].description}</p>
        </div>
        {/* Bottom (Domain-Specific LLM Fine-Tuning) */}
        <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 border border-[#E0E6ED] relative" style={{ top: '40px' }}>
          {services[3].icon}
          <h3 className="text-lg font-semibold text-[#001F3F] mb-1">{services[3].title}</h3>
          <p className="text-gray-700 text-sm mb-0">{services[3].description}</p>
        </div>
      </div>
    </div>
  </section>
);

export default InfographicServices;
