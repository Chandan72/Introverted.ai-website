import React from "react";
import { Link } from "react-router-dom";
import {
	ChevronRight,
	Zap,
	Bot,
	Brain,
	Target,
	CheckCircle,
	ArrowRight,
	Play,
} from "lucide-react";

const Home: React.FC = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Animated Background */}
				<div className="absolute inset-0 opacity-20">
					<div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
					<div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
					<div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
					<div className="text-center">
						{/* Badge */}
						<div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8 animate-fadeIn">
							<Zap className="w-4 h-4 mr-2" />
							AI Automation Agency
						</div>

						{/* Main Headline */}
						<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-slideUp">
							Transform Your Business with
							<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block mt-2">
								Intelligent Automation
							</span>
						</h1>

						{/* Subheadline */}
						<p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slideUp delay-200">
							We help businesses automate workflows, deploy intelligent chatbots,
							and implement AI solutions that reduce costs by up to 70% while
							increasing efficiency exponentially.
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slideUp delay-400">
							<Link
								to="/services"
								className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
							>
								Get Started Today
								<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</Link>

							<button className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
								<Play className="mr-2 w-5 h-5" />
								Watch Demo
							</button>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slideUp delay-600">
							<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
								<div className="text-3xl font-bold text-white mb-2">70%</div>
								<div className="text-gray-400">Cost Reduction</div>
							</div>
							<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
								<div className="text-3xl font-bold text-white mb-2">50+</div>
								<div className="text-gray-400">Successful Projects</div>
							</div>
							<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
								<div className="text-3xl font-bold text-white mb-2">24/7</div>
								<div className="text-gray-400">AI Support</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Preview */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Our AI Solutions
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							From workflow automation to custom AI models, we deliver
							cutting-edge solutions tailored to your business needs.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								icon: <Zap className="w-6 h-6" />,
								title: "Workflow Automation",
								description: "Streamline processes with intelligent automation",
								color: "from-blue-500 to-cyan-500",
							},
							{
								icon: <Bot className="w-6 h-6" />,
								title: "Chatbot Development",
								description: "24/7 customer support with AI assistants",
								color: "from-purple-500 to-pink-500",
							},
							{
								icon: <Brain className="w-6 h-6" />,
								title: "AI Consulting",
								description: "Strategic guidance for AI transformation",
								color: "from-green-500 to-emerald-500",
							},
							{
								icon: <Target className="w-6 h-6" />,
								title: "Custom AI Models",
								description: "Domain-specific LLM fine-tuning",
								color: "from-orange-500 to-red-500",
							},
						].map((service, index) => (
							<div
								key={service.title}
								className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
							>
								<div
									className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6`}
								>
									{service.icon}
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									{service.title}
								</h3>
								<p className="text-gray-600 mb-6">{service.description}</p>
								<Link
									to="/services"
									className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group-hover:translate-x-1 transition-transform"
								>
									Learn More
									<ChevronRight className="ml-1 w-4 h-4" />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="py-24 bg-gradient-to-br from-purple-900 to-indigo-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-4xl font-bold text-white mb-8">
								Why Choose INTROVERTED.AI?
							</h2>
							<div className="space-y-6">
								{[
									"Proven track record with 50+ successful implementations",
									"Custom solutions tailored to your specific industry",
									"24/7 ongoing support and maintenance",
									"ROI-focused approach with measurable results",
									"Cutting-edge AI technologies and best practices",
								].map((benefit, index) => (
									<div key={index} className="flex items-center space-x-4">
										<CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
										<span className="text-gray-300 text-lg">{benefit}</span>
									</div>
								))}
							</div>

							<Link
								to="/about"
								className="inline-flex items-center px-6 py-3 mt-8 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
							>
								Learn About Our Process
								<ArrowRight className="ml-2 w-5 h-5" />
							</Link>
						</div>

						<div className="relative">
							<div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
								<div className="space-y-6">
									<div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
										<span className="text-white">Process Efficiency</span>
										<span className="text-green-400 font-bold">+150%</span>
									</div>
									<div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
										<span className="text-white">Cost Savings</span>
										<span className="text-green-400 font-bold">-70%</span>
									</div>
									<div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
										<span className="text-white">Response Time</span>
										<span className="text-green-400 font-bold">24/7</span>
									</div>
									<div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
										<span className="text-white">Error Reduction</span>
										<span className="text-green-400 font-bold">-95%</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 bg-white">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-gray-900 mb-6">
						Ready to Transform Your Business?
					</h2>
					<p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
						Join hundreds of businesses that have revolutionized their operations
						with our AI solutions.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							to="/pricing"
							className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
						>
							View Pricing Plans
							<ArrowRight className="ml-2 w-5 h-5" />
						</Link>

						<Link
							to="/portfolio"
							className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
						>
							See Case Studies
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
