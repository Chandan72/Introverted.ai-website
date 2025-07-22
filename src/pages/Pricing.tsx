import React from "react";
import HeroSection from "../components/HeroSection";

const packages = [
	{
		title: "Starter",
		price: "$49/mo",
		features: ["Basic workflow automation", "Email support", "Up to 2 projects"],
		recommended: false,
	},
	{
		title: "Pro",
		price: "$99/mo",
		features: [
			"Advanced automation & chatbots",
			"Priority support",
			"Up to 10 projects",
			"AI consulting session",
		],
		recommended: true,
	},
	{
		title: "Enterprise",
		price: "Contact Us",
		features: [
			"Custom solutions",
			"Dedicated account manager",
			"Unlimited projects",
			"Domain-specific LLM fine-tuning",
		],
		recommended: false,
	},
];

const Pricing: React.FC = () => (
	<div className="max-w-5xl mx-auto py-12 px-4 md:px-8">
		<HeroSection
			title="Pricing Plans"
			subtitle="Flexible packages for every stage of your AI journey."
		/>
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
			{packages.map((pkg) => (
				<div
					key={pkg.title}
					className={`flex flex-col items-center bg-white rounded-xl shadow-md p-8 border-2 transition-all duration-200 ${
						pkg.recommended
							? "border-blue-600 bg-blue-50 scale-105 z-10"
							: "border-gray-200"
					} hover:shadow-xl`}
				>
					<h3 className="text-xl font-semibold mb-2 text-gray-900">
						{pkg.title}
					</h3>
					<div className="text-3xl font-bold mb-4 text-blue-700">
						{pkg.price}
					</div>
					<ul className="mb-6 space-y-2">
						{pkg.features.map((feature) => (
							<li key={feature} className="text-gray-700 flex items-center">
								<span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
								{feature}
							</li>
						))}
					</ul>
					<button
						className={`mt-auto px-6 py-2 rounded-lg font-medium transition-colors w-full ${
							pkg.recommended
								? "bg-blue-600 text-white hover:bg-blue-700"
								: "bg-gray-100 text-blue-700 hover:bg-blue-100"
						}`}
					>
						{pkg.recommended ? "Get Started" : "Contact Sales"}
					</button>
				</div>
			))}
		</div>
	</div>
);

export default Pricing;
