import React from "react";
import { motion } from "framer-motion";

const steps = [
	{
		title: "Identify",
		icon: (
			<svg
				className="w-10 h-10 text-[#001F3F] mb-3"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<circle
					cx="11"
					cy="11"
					r="8"
					stroke="#001F3F"
					strokeWidth="2"
				/>
				<line
					x1="21"
					y1="21"
					x2="16.65"
					y2="16.65"
					stroke="#4682B4"
					strokeWidth="2"
					strokeLinecap="round"
				/>
				<circle cx="11" cy="11" r="5" stroke="#4682B4" strokeWidth="2" />
			</svg>
		),
		description:
			"Analyze your business and uncover the best automation opportunities.",
	},
	{
		title: "Educate",
		icon: (
			<svg
				className="w-10 h-10 text-[#4682B4] mb-3"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					d="M12 3L2 9l10 6 10-6-10-6z"
					stroke="#4682B4"
					strokeWidth="2"
				/>
				<path
					d="M2 17l10 6 10-6"
					stroke="#001F3F"
					strokeWidth="2"
				/>
				<path d="M2 9v8" stroke="#001F3F" strokeWidth="2" />
				<path d="M22 9v8" stroke="#001F3F" strokeWidth="2" />
			</svg>
		),
		description: "Train and support your team to confidently use AI tools.",
	},
	{
		title: "Develop",
		icon: (
			<svg
				className="w-10 h-10 text-[#001F3F] mb-3"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<circle cx="12" cy="12" r="10" stroke="#001F3F" strokeWidth="2" />
				<path
					d="M12 6v6l4 2"
					stroke="#4682B4"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		),
		description: "Build and integrate custom AI systems for real results.",
	},
];

const Infographic: React.FC = () => (
	<section className="relative bg-gradient-to-br from-[#F8F9FA] via-[#eaf3fa] to-white py-14 px-2 sm:px-4 overflow-hidden">
		{/* Hero Section */}
		<div className="max-w-4xl mx-auto mb-12">
			<div className="bg-gradient-to-r from-[#001F3F]/90 via-[#4682B4]/80 to-white/80 rounded-2xl shadow-2xl px-6 sm:px-12 py-10 sm:py-14 flex flex-col items-center text-center">
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
					Client Transformation Journey
				</h2>
				<p className="text-white/90 text-base sm:text-lg max-w-2xl mb-6">
					See how we guide clients from discovery to AI-powered success.
				</p>
				<motion.button
					className="bg-gradient-to-r from-[#001F3F] to-[#4682B4] text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-blue-400/40 transition-all text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
					whileHover={{ scale: 1.06 }}
					whileTap={{ scale: 0.97 }}
				>
					Start Your Journey
				</motion.button>
			</div>
		</div>
		{/* Steps Grid */}
		<div className="max-w-4xl mx-auto">
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
				{steps.map((step, idx) => (
					<motion.div
						key={step.title}
						className="flex flex-col items-center bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl px-4 py-8 sm:px-6 sm:py-10 border border-[#E0E6ED] relative transition-all duration-200 group hover:shadow-2xl hover:-translate-y-2"
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						whileHover={{ scale: 1.05 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: idx * 0.12 }}
					>
						<motion.div
							className="bg-gradient-to-br from-[#001F3F]/10 to-[#4682B4]/10 rounded-full p-2 mb-2 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-200"
							whileHover={{ rotate: 8, scale: 1.1 }}
							transition={{ type: "spring", stiffness: 200 }}
						>
							{step.icon}
						</motion.div>
						<h3 className="text-base sm:text-lg font-bold mb-2 text-[#001F3F] tracking-tight">
							{step.title}
						</h3>
						<p className="text-gray-700 text-center text-xs sm:text-sm mb-0 leading-snug">
							{step.description}
						</p>
						{idx < steps.length - 1 && (
							<div className="hidden sm:block absolute right-[-20px] top-1/2 transform -translate-y-1/2">
								<svg
									width="36"
									height="16"
									viewBox="0 0 36 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0 8h28m0 0l-4-4m4 4l-4 4"
										stroke="#4682B4"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						)}
						{idx < steps.length - 1 && (
							<div className="sm:hidden mt-3">
								<svg
									width="16"
									height="36"
									viewBox="0 0 16 36"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8 0v28m0 0l-4-4m4 4l4-4"
										stroke="#4682B4"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						)}
					</motion.div>
				))}
			</div>
		</div>
	</section>
);

export default Infographic;
