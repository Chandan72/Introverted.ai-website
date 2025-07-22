import React from "react";
import HeroSection from "../components/HeroSection";

const projects = [
	{
		name: "Acme Corp",
		logo: "https://via.placeholder.com/64x64?text=Acme",
		summary:
			"Automated internal workflows, reducing manual effort by 60% and improving data accuracy.",
		tech: ["Node.js", "React", "AI Workflow Engine"],
		caseStudy: "#",
	},
	{
		name: "HealthSync",
		logo: "https://via.placeholder.com/64x64?text=HS",
		summary:
			"Developed a HIPAA-compliant chatbot for patient engagement and appointment scheduling.",
		tech: ["Python", "FastAPI", "GPT-4", "Twilio"],
		caseStudy: "#",
	},
	{
		name: "FinSight Analytics",
		logo: "https://via.placeholder.com/64x64?text=FS",
		summary:
			"Fine-tuned LLMs for financial document analysis, enabling rapid insights for analysts.",
		tech: ["LLM Fine-Tuning", "AWS", "TypeScript"],
		caseStudy: "#",
	},
];

const Portfolio: React.FC = () => (
	<div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
		<HeroSection
			title="Our Portfolio"
			subtitle="See how we've transformed businesses with custom AI solutions."
		/>
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{projects.map((project) => (
				<div
					key={project.name}
					className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50 duration-200"
				>
					<img
						src={project.logo}
						alt={project.name + " logo"}
						className="w-16 h-16 mb-4 rounded-full object-cover border border-gray-200"
					/>
					<h3 className="text-xl font-semibold mb-2 text-gray-900">
						{project.name}
					</h3>
					<p className="text-gray-600 mb-4">{project.summary}</p>
					<ul className="flex flex-wrap justify-center gap-2 mb-4">
						{project.tech.map((tech) => (
							<li
								key={tech}
								className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
							>
								{tech}
							</li>
						))}
					</ul>
					<a
						href={project.caseStudy}
						className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
					>
						Read Case Study
					</a>
				</div>
			))}
		</div>
	</div>
);

export default Portfolio;
