import React from "react";

const values = [
  {
    name: "Trust",
    icon: (
      <svg className="w-10 h-10 text-[#001F3F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21c-4.97-3.5-8-6.5-8-10V7l8-4 8 4v4c0 3.5-3.03 6.5-8 10z" stroke="#001F3F" strokeWidth="2"/><path d="M9 11l2 2 4-4" stroke="#4682B4" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    desc: "We build lasting partnerships through reliability and care."
  },
  {
    name: "Simplicity",
    icon: (
      <svg className="w-10 h-10 text-[#4682B4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke="#4682B4" strokeWidth="2"/><path d="M8 12h8" stroke="#001F3F" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    desc: "We make AI easy to understand and use."
  },
  {
    name: "Empowerment",
    icon: (
      <svg className="w-10 h-10 text-[#001F3F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="#001F3F" strokeWidth="2"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="#4682B4" strokeWidth="2"/></svg>
    ),
    desc: "We help clients and teams achieve more with AI."
  },
  {
    name: "Innovation",
    icon: (
      <svg className="w-10 h-10 text-[#4682B4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3.5 6v2a1.5 1.5 0 0 1-3 0v-2C6.5 13.5 5 11.5 5 9a7 7 0 0 1 7-7z" stroke="#4682B4" strokeWidth="2"/><circle cx="12" cy="20" r="1" fill="#001F3F"/></svg>
    ),
    desc: "We create new solutions and push boundaries."
  },
  {
    name: "Integrity",
    icon: (
      <svg className="w-10 h-10 text-[#001F3F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#001F3F" strokeWidth="2"/><path d="M8 12h8" stroke="#4682B4" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    desc: "We act with honesty and transparency in all we do."
  },
  {
    name: "Quiet Excellence",
    icon: (
      <svg className="w-10 h-10 text-[#4682B4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#4682B4" strokeWidth="2"/><path d="M8 16l4-8 4 8" stroke="#001F3F" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    desc: "We deliver outstanding results without the noise."
  }
];

const BrandValuesInfographic: React.FC = () => (
  <section className="bg-[#F8F9FA] py-12 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#001F3F] mb-10">Our Core Values</h2>
      <div className="flex flex-col items-center mb-10">
        <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-[#001F3F] mb-8">
          {/* Brand icon */}
          <svg className="w-14 h-14" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="26" stroke="#001F3F" strokeWidth="4" fill="#F8F9FA"/>
            <path d="M18 36c2-4 6-8 10-8s8 4 10 8" stroke="#4682B4" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="22" cy="24" r="2.5" fill="#001F3F"/>
            <circle cx="34" cy="24" r="2.5" fill="#001F3F"/>
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, idx) => (
          <div
            key={value.name}
            className={`flex flex-col items-center text-center rounded-2xl shadow-md p-8 border-2 transition-all duration-200 relative overflow-hidden ${
              idx % 2 === 0 ? "bg-white border-[#E0E6ED]" : "bg-[#eaf2fa] border-[#4682B4]"
            }`}
          >
            <div className="absolute top-0 left-0 w-full h-2" style={{ background: idx % 2 === 0 ? '#4682B4' : '#001F3F', opacity: 0.12 }}></div>
            {value.icon}
            <h3 className="text-lg font-semibold text-[#001F3F] mb-2 z-10">{value.name}</h3>
            <p className="text-gray-700 text-sm mb-0 z-10">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandValuesInfographic;
