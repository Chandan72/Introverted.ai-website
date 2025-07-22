import React from "react";

const phases = [
  {
    title: "Ideation",
    icon: (
      <svg className="w-8 h-8 text-[#001F3F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3.5 6v2a1.5 1.5 0 0 1-3 0v-2C6.5 13.5 5 11.5 5 9a7 7 0 0 1 7-7z" stroke="#001F3F" strokeWidth="2"/><circle cx="12" cy="20" r="1" fill="#4682B4"/></svg>
    ),
    desc: "Brainstorm AI ideas"
  },
  {
    title: "Discovery",
    icon: (
      <svg className="w-8 h-8 text-[#4682B4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke="#4682B4" strokeWidth="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#001F3F" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    desc: "Analyze needs & data"
  },
  {
    title: "Prototyping",
    icon: (
      <svg className="w-8 h-8 text-[#001F3F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#001F3F" strokeWidth="2"/><path d="M8 12h8" stroke="#4682B4" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    desc: "Build & test solutions"
  },
  {
    title: "Implementation",
    icon: (
      <svg className="w-8 h-8 text-[#4682B4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="#4682B4" strokeWidth="2"/><path d="M12 6v6l4 2" stroke="#001F3F" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    desc: "Deploy AI in production"
  },
  {
    title: "Monitoring & Support",
    icon: (
      <svg className="w-8 h-8 text-[#001F3F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10l-4-4m4 4l4-4" stroke="#001F3F" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    desc: "Track, improve, assist"
  }
];

const ProjectLifecycleInfographic: React.FC = () => (
  <section className="bg-[#F8F9FA] py-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#001F3F] mb-10">AI Project Lifecycle</h2>
      <div className="hidden md:flex items-center justify-between relative">
        {phases.map((phase, idx) => (
          <div key={phase.title} className="flex flex-col items-center flex-1 min-w-[120px] max-w-xs">
            <div className="bg-white rounded-full shadow-md p-4 border border-[#E0E6ED] mb-2">
              {phase.icon}
            </div>
            <h3 className="text-base font-semibold text-[#001F3F] mb-1">{phase.title}</h3>
            <p className="text-gray-700 text-center text-xs mb-0">{phase.desc}</p>
            {idx < phases.length - 1 && (
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-0" style={{ left: `calc(100% * ${idx + 1} / ${phases.length})`, width: 48 }}>
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 12h40m0 0l-6-6m6 6l-6 6" stroke="#4682B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Mobile: Circular flow */}
      <div className="md:hidden flex flex-col items-center relative mt-8">
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <circle cx="120" cy="120" r="100" stroke="#E0E6ED" strokeWidth="2" />
        </svg>
        {phases.map((phase, idx) => (
          <div key={phase.title} className="flex flex-col items-center z-10 mb-6">
            <div className="bg-white rounded-full shadow-md p-4 border border-[#E0E6ED] mb-2">
              {phase.icon}
            </div>
            <h3 className="text-base font-semibold text-[#001F3F] mb-1">{phase.title}</h3>
            <p className="text-gray-700 text-center text-xs mb-0">{phase.desc}</p>
            {idx < phases.length - 1 && (
              <svg width="24" height="48" viewBox="0 0 24 48" fill="none" className="my-2">
                <path d="M12 0v40m0 0l-6-6m6 6l6-6" stroke="#4682B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectLifecycleInfographic;
