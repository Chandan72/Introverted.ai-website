import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";

const services = [
	{
		title: "Workflow Automation",
		description:
			"Streamline your business processes with custom AI-powered automation solutions that save time and reduce errors.",
		icon: (
			<svg
				className="w-10 h-10 text-blue-600 mb-4"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9 17v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m-6 4h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm6-10V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"
				/>
			</svg>
		),
	},
	{
		title: "Chatbot Development",
		description:
			"Engage your customers 24/7 with intelligent, conversational chatbots tailored to your brand and needs.",
		icon: (
			<svg
				className="w-10 h-10 text-green-600 mb-4"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M17 8h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2m4-4v4m0 0l-2-2m2 2l2-2"
				/>
			</svg>
		),
	},
	{
		title: "AI Consulting",
		description:
			"Get expert advice on integrating AI into your business, from strategy to implementation and optimization.",
		icon: (
			<svg
				className="w-10 h-10 text-purple-600 mb-4"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M13 16h-1v-4h-1m4 0h-1v-4h-1m-4 0h-1v-4h-1m4 0h-1v-4h-1"
				/>
			</svg>
		),
	},
	{
		title: "Domain-Specific LLM Fine-Tuning",
		description:
			"Enhance language models for your unique industry or use case with expert fine-tuning and deployment.",
		icon: (
			<svg
				className="w-10 h-10 text-yellow-600 mb-4"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
				/>
			</svg>
		),
	},
];

const Services: React.FC = () => (
	<div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
		<HeroSection
			title="Our Services"
			subtitle="Explore our full suite of AI-powered automation and consulting services."
		/>
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
			{services.map((service, idx) => (
				<motion.div
					key={service.title}
					className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl duration-200"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					whileHover={{
						scale: 1.05,
						boxShadow: "0 8px 32px 0 rgba(70,130,180,0.15)",
					}}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: idx * 0.1 }}
				>
					{service.icon}
					<h3 className="text-xl font-semibold mb-2 text-gray-900">
						{service.title}
					</h3>
					<p className="text-gray-600 mb-4">{service.description}</p>
					<motion.button
						className="mt-auto px-4 py-2 bg-gradient-to-r from-[#001F3F] to-[#4682B4] text-white rounded-lg font-semibold shadow hover:scale-105 hover:shadow-blue-400/40 transition-all"
						whileHover={{ scale: 1.07 }}
						whileTap={{ scale: 0.97 }}
					>
						Learn More
					</motion.button>
				</motion.div>
			))}
		</div>
	</div>
);

export default Services;
