import React from "react";

const steps = [
  {
    title: "Identify",
    icon: (
      <svg className="w-10 h-10 text-blue-700 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
    ),
    desc: "Pinpoint automation opportunities in your business workflows."
  },
  {
    title: "Educate",
    icon: (
      <svg className="w-10 h-10 text-blue-700 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6"/></svg>
    ),
    desc: "Empower your team with AI knowledge and best practices."
  },
  {
    title: "Develop",
    icon: (
      <svg className="w-10 h-10 text-blue-700 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3m10-5h3a1 1 0 011 1v4m-1 4v4a1 1 0 01-1 1h-3m-10-5H4a1 1 0 01-1-1v-4m1 9h3a1 1 0 001-1v-3m10 5h3a1 1 0 001-1v-3"/></svg>
    ),
    desc: "Build and deploy custom AI-powered automation solutions."
  }
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full min-h-[60vh] flex flex-col justify-center items-center text-center py-16 px-4 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          We put AI at the center of everything we automate
        </h1>
        <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Your trusted partner in transforming startups, enterprises, and solo entrepreneurs through intelligent workflow automation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition-colors">
            Start Your AI Transformation
          </button>
          <button className="bg-white border border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-50 transition-colors">
            Schedule Free Consultation
          </button>
        </div>
      </section>
      {/* 3-Step Section */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {steps.map((step) => (
            <div key={step.title} className="flex-1 flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow">
              {step.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 text-base">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
