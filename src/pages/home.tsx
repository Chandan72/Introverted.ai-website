import React from "react";
import { motion } from "framer-motion";

const steps = [
	{
		title: "Identify",
		icon: (
			<svg
				className="w-10 h-10 text-blue-700 mb-2"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
				/>
			</svg>
		),
		desc: "Pinpoint automation opportunities in your business workflows.",
	},
	{
		title: "Educate",
		icon: (
			<svg
				className="w-10 h-10 text-blue-700 mb-2"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6"
				/>
			</svg>
		),
		desc: "Empower your team with AI knowledge and best practices.",
	},
	{
		title: "Develop",
		icon: (
			<svg
				className="w-10 h-10 text-blue-700 mb-2"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3 7v4a1 1 0 001 1h3m10-5h3a1 1 0 011 1v4m-1 4v4a1 1 0 01-1 1h-3m-10-5H4a1 1 0 01-1-1v-4m1 9h3a1 1 0 001-1v-3m10 5h3a1 1 0 001-1v-3"
				/>
			</svg>
		),
		desc: "Build and deploy custom AI-powered automation solutions.",
	},
];

const Home: React.FC = () => {
	return (
		<div className="w-full min-h-screen bg-gradient-to-br from-[#001F3F] via-[#4682B4] to-white flex flex-col">
			{/* Hero Section */}
			<section className="w-full flex flex-col justify-center items-center text-center py-16 md:py-24 px-4">
				<motion.h1
					className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, type: "spring" }}
				>
					We put AI at the center of everything we automate
				</motion.h1>
				<motion.p
					className="text-white/90 text-lg md:text-2xl max-w-2xl mx-auto mb-10"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.7 }}
				>
					Your trusted partner in transforming startups, enterprises, and solo
					entrepreneurs through intelligent workflow automation
				</motion.p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<motion.button
						className="bg-gradient-to-r from-[#001F3F] to-[#4682B4] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-blue-400/40 transition-all text-lg"
						whileHover={{ scale: 1.07 }}
						whileTap={{ scale: 0.97 }}
					>
						Start Your AI Transformation
					</motion.button>
					<motion.button
						className="bg-white/90 border border-blue-700 text-blue-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-50 hover:scale-105 transition-all text-lg"
						whileHover={{ scale: 1.07 }}
						whileTap={{ scale: 0.97 }}
					>
						Schedule Free Consultation
					</motion.button>
				</div>
			</section>
			{/* 3-Step Section */}
			<section className="w-full max-w-7xl mx-auto py-16 px-4 mb-12">
				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.15 } },
					}}
				>
					{steps.map((step, idx) => (
						<motion.div
							key={step.title}
							className="flex flex-col items-center text-center p-8 bg-white/80 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: idx * 0.1 }}
						>
							{step.icon}
							<h3 className="text-2xl font-bold mb-2 text-[#001F3F]">
								{step.title}
							</h3>
							<p className="text-gray-700 text-base">{step.desc}</p>
						</motion.div>
					))}
				</motion.div>
			</section>
		</div>
	);
};

export default Home;
