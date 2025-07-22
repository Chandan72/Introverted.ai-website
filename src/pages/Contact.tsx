import React, { useState } from "react";

const serviceOptions = [
  "Workflow Automation",
  "Chatbot Development",
  "AI Consulting",
  "Domain-Specific LLM Fine-Tuning",
];

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! We'll be in touch soon.`);
    // Or use: console.log(form);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Contact Form */}
      <div className="md:col-span-2 bg-white rounded-xl shadow-md p-8 flex flex-col">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Service Interest</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Sidebar Info */}
      <div className="flex flex-col gap-8 justify-between">
        <div className="bg-blue-50 rounded-xl p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-blue-900">Contact Information</h3>
          <p className="text-gray-700 mb-1">INTROVERTED.AI</p>
          <p className="text-gray-700 mb-1">123 Quiet Lane, Suite 100</p>
          <p className="text-gray-700 mb-1">San Francisco, CA 94101</p>
          <p className="text-gray-700 mb-1">Phone: <a href="tel:+1234567890" className="text-blue-700 hover:underline">(123) 456-7890</a></p>
          <p className="text-gray-700">Email: <a href="mailto:hello@introverted.ai" className="text-blue-700 hover:underline">hello@introverted.ai</a></p>
        </div>
        {/* Google Maps Embed or Placeholder */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019019019019!2d-122.4194151846812!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2f8e8e8f%3A0x8e8e8e8e8e8e8e8e!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
