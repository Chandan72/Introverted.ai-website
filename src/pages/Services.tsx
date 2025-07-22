import React, { useState } from "react";
import {
	Zap,
	Bot,
	Brain,
	Target,
	CheckCircle,
	ArrowRight,
	Clock,
	DollarSign,
	Users,
	TrendingUp,
	Settings,
	MessageSquare,
	Lightbulb,
	Code,
} from "lucide-react";
import HeroSection from "../components/HeroSection";

const Services: React.FC = () => {
	const [activeService, setActiveService] = useState(0);

	const services = [
		{
			id: 0,
			icon: <Zap className="w-8 h-8" />,
			title: "Workflow Automation",
			shortDescription:
				"Streamline your business processes with intelligent automation",
			fullDescription:
				"Transform repetitive tasks into automated workflows that save time, reduce errors, and increase productivity. Our AI-powered automation solutions integrate seamlessly with your existing systems.",
			features: [
				"Document Processing & Data Entry Automation",
				"Email & Communication Automation",
				"Inventory & Supply Chain Management",
				"Financial Process Automation",
				"Customer Onboarding Workflows",
				"Report Generation & Analytics",
			],
			benefits: [
				{
					icon: <Clock className="w-5 h-5" />,
					text: "70% time savings on repetitive tasks",
				},
				{
					icon: <DollarSign className="w-5 h-5" />,
					text: "Reduce operational costs by 50%",
				},
				{
					icon: <TrendingUp className="w-5 h-5" />,
					text: "95% accuracy improvement",
				},
			],
			color: "from-blue-500 to-cyan-500",
			bgColor: "from-blue-50 to-cyan-50",
		},
		{
			id: 1,
			icon: <Bot className="w-8 h-8" />,
			title: "Chatbot Development",
			shortDescription:
				"24/7 intelligent customer support that scales with your business",
			fullDescription:
				"Deploy sophisticated AI chatbots that understand context, handle complex queries, and provide personalized responses. Our chatbots integrate with your knowledge base and can escalate to human agents when needed.",
			features: [
				"Multi-language Customer Support",
				"E-commerce Shopping Assistance",
				"Lead Qualification & Generation",
				"Technical Support & Troubleshooting",
				"Appointment Scheduling",
				"FAQ & Knowledge Base Integration",
			],
			benefits: [
				{
					icon: <Users className="w-5 h-5" />,
					text: "Handle 1000+ conversations simultaneously",
				},
				{
					icon: <Clock className="w-5 h-5" />,
					text: "24/7 availability without downtime",
				},
				{
					icon: <DollarSign className="w-5 h-5" />,
					text: "80% reduction in support costs",
				},
			],
			color: "from-purple-500 to-pink-500",
			bgColor: "from-purple-50 to-pink-50",
		},
		{
			id: 2,
			icon: <Brain className="w-8 h-8" />,
			title: "AI Consulting",
			shortDescription: "Strategic guidance for successful AI transformation",
			fullDescription:
				"Our experts help you identify AI opportunities, develop implementation roadmaps, and ensure successful adoption across your organization. From strategy to execution, we guide your AI journey.",
			features: [
				"AI Readiness Assessment",
				"Custom AI Strategy Development",
				"Technology Stack Recommendations",
				"ROI Analysis & Business Case Development",
				"Change Management & Training",
				"Performance Monitoring & Optimization",
			],
			benefits: [
				{
					icon: <Lightbulb className="w-5 h-5" />,
					text: "Identify 10+ automation opportunities",
				},
				{
					icon: <TrendingUp className="w-5 h-5" />,
					text: "Average 300% ROI within 12 months",
				},
				{
					icon: <Settings className="w-5 h-5" />,
					text: "Seamless integration with existing systems",
				},
			],
			color: "from-green-500 to-emerald-500",
			bgColor: "from-green-50 to-emerald-50",
		},
		{
			id: 3,
			icon: <Target className="w-8 h-8" />,
			title: "Custom AI Models",
			shortDescription:
				"Domain-specific LLM fine-tuning for specialized applications",
			fullDescription:
				"Develop and deploy custom AI models trained on your specific data and use cases. Our fine-tuned models understand your industry, terminology, and business context for superior performance.",
			features: [
				"Industry-Specific Model Training",
				"Private Data Integration",
				"Custom API Development",
				"Model Performance Optimization",
				"Scalable Deployment Solutions",
				"Continuous Learning & Updates",
			],
			benefits: [
				{
					icon: <Code className="w-5 h-5" />,
					text: "90% accuracy on domain-specific tasks",
				},
				{
					icon: <Settings className="w-5 h-5" />,
					text: "Full control over your AI models",
				},
				{
					icon: <TrendingUp className="w-5 h-5" />,
					text: "Competitive advantage through AI",
				},
			],
			color: "from-orange-500 to-red-500",
			bgColor: "from-orange-50 to-red-50",
		},
	];

	const processSteps = [
		{
			step: "01",
			title: "Discovery & Analysis",
			description:
				"We analyze your current processes and identify automation opportunities",
			icon: <Lightbulb className="w-6 h-6" />,
		},
		{
			step: "02",
			title: "Strategy & Planning",
			description:
				"Develop a comprehensive AI implementation roadmap tailored to your needs",
			icon: <Target className="w-6 h-6" />,
		},
		{
			step: "03",
			title: "Development & Testing",
			description: "Build, test, and refine AI solutions with continuous feedback loops",
			icon: <Code className="w-6 h-6" />,
		},
		{
			step: "04",
			title: "Deployment & Support",
			description:
				"Seamless deployment with ongoing monitoring and optimization",
			icon: <Settings className="w-6 h-6" />,
		},
	];

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
				{/* Background Animation */}
				<div className="absolute inset-0 opacity-20">
					<div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
					<div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8">
						<Brain className="w-4 h-4 mr-2" />
						AI-Powered Solutions
					</div>

					<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
						Our{" "}
						<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
							AI Services
						</span>
					</h1>

					<p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
						From workflow automation to custom AI models, we deliver cutting-edge
						solutions that transform how your business operates and competes in the
						digital age.
					</p>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
						{services.map((service, index) => (
							<div
								key={service.id}
								className={`cursor-pointer transition-all duration-300 ${
									activeService === index
										? "transform -translate-y-2"
										: "hover:transform hover:-translate-y-1"
								}`}
								onClick={() => setActiveService(index)}
							>
								<div
									className={`h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
										activeService === index
											? "border-purple-500"
											: "border-gray-100 hover:border-gray-200"
									}`}
								>
									<div
										className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6`}
									>
										{service.icon}
									</div>
									<h3 className="text-2xl font-bold text-gray-900 mb-4">
										{service.title}
									</h3>
									<p className="text-gray-600 mb-6">
										{service.shortDescription}
									</p>
									<button className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors">
										Learn More
										<ArrowRight className="ml-2 w-4 h-4" />
									</button>
								</div>
							</div>
						))}
					</div>

					{/* Active Service Details */}
					<div
						className={`bg-gradient-to-br ${services[activeService].bgColor} rounded-3xl p-12 shadow-2xl`}
					>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
							<div>
								<div className="flex items-center mb-6">
									<div
										className={`p-3 rounded-xl bg-gradient-to-r ${services[activeService].color} text-white mr-4`}
									>
										{services[activeService].icon}
									</div>
									<h2 className="text-3xl font-bold text-gray-900">
										{services[activeService].title}
									</h2>
								</div>

								<p className="text-lg text-gray-700 mb-8 leading-relaxed">
									{services[activeService].fullDescription}
								</p>

								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									Key Features:
								</h3>
								<ul className="space-y-3 mb-8">
									{services[activeService].features.map((feature, index) => (
										<li key={index} className="flex items-center">
											<CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
											<span className="text-gray-700">{feature}</span>
										</li>
									))}
								</ul>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-6">
									Business Impact:
								</h3>
								<div className="space-y-6 mb-8">
									{services[activeService].benefits.map((benefit, index) => (
										<div
											key={index}
											className="flex items-start bg-white/50 rounded-xl p-4"
										>
											<div
												className={`p-2 rounded-lg bg-gradient-to-r ${services[activeService].color} text-white mr-4 flex-shrink-0`}
											>
												{benefit.icon}
											</div>
											<span className="text-gray-800 font-medium">
												{benefit.text}
											</span>
										</div>
									))}
								</div>

								<button
									className={`w-full py-4 px-8 bg-gradient-to-r ${services[activeService].color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
								>
									Get Started with {services[activeService].title}
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Our Proven Process
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							We follow a systematic approach to ensure successful AI implementation
							and maximum ROI for your investment.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{processSteps.map((step, index) => (
							<div key={index} className="relative">
								{/* Connector Line */}
								{index < processSteps.length - 1 && (
									<div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent transform translate-x-4"></div>
								)}

								<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
									<div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-xl inline-flex mb-6">
										{step.icon}
									</div>
									<div className="text-2xl font-bold text-purple-600 mb-2">
										{step.step}
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										{step.title}
									</h3>
									<p className="text-gray-600">{step.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 bg-gradient-to-br from-purple-900 to-indigo-900">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-white mb-6">
						Ready to Start Your AI Journey?
					</h2>
					<p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
						Let's discuss how our AI solutions can transform your business
						operations and give you a competitive edge in your industry.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
							Schedule Free Consultation
							<MessageSquare className="ml-2 w-5 h-5" />
						</button>

						<button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300">
							View Our Portfolio
							<ArrowRight className="ml-2 w-5 h-5" />
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Services;
