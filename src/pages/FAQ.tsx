import React, { useState } from "react";

const faqs = [
  {
    question: "How much does an AI automation project cost?",
    answer:
      "Pricing depends on project scope, complexity, and required integrations. We offer transparent packages and custom quotes after an initial consultation.",
  },
  {
    question: "How long does it take to implement a solution?",
    answer:
      "Most projects take 2–8 weeks from ideation to deployment, depending on requirements and client feedback cycles.",
  },
  {
    question: "How do you ensure data privacy and security?",
    answer:
      "We follow industry best practices for data handling, encryption, and compliance. Your data is never shared and is protected at every stage.",
  },
  {
    question: "Can you integrate with our existing tools and systems?",
    answer:
      "Yes! We specialize in seamless integration with CRMs, ERPs, chat platforms, and other business software.",
  },
  {
    question: "What kind of support do you provide after launch?",
    answer:
      "We offer ongoing support, monitoring, and optimization packages to ensure your AI solution continues to deliver value.",
  },
  {
    question: "Do I need technical expertise to work with you?",
    answer:
      "No technical background is required. We guide you through every step and handle all technical details for you.",
  },
  {
    question: "Can you fine-tune AI models for my industry?",
    answer:
      "Absolutely. We specialize in domain-specific LLM fine-tuning and custom AI solutions for unique business needs.",
  },
  {
    question: "What is your process for starting a new project?",
    answer:
      "We begin with a discovery call, followed by needs assessment, proposal, development, and deployment. Our onboarding is smooth and transparent.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 md:px-0">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={faq.question} className="border border-gray-200 rounded-lg bg-white shadow-sm">
            <button
              className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <span className="ml-4 text-blue-600">{openIndex === idx ? "-" : "+"}</span>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-4 text-gray-700 animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
