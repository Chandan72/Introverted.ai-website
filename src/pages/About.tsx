import React from "react";
import myPic from "../assets/team/mypic.png";

const values = [
	{
		name: "Trust",
		icon: (
			<svg
				className="w-8 h-8 text-[#001F3F]"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					d="M12 21c-4.97-3.5-8-6.5-8-10V7l8-4 8 4v4c0 3.5-3.03 6.5-8 10z"
					stroke="#001F3F"
					strokeWidth="2"
				/>
				<path
					d="M9 11l2 2 4-4"
					stroke="#4682B4"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		),
		desc: "We build lasting partnerships through reliability and care.",
	},
	{
		name: "Simplicity",
		icon: (
			<svg
				className="w-8 h-8 text-[#4682B4]"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<circle cx="12" cy="12" r="8" stroke="#4682B4" strokeWidth="2" />
				<path
					d="M8 12h8"
					stroke="#001F3F"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		),
		desc: "We make AI easy to understand and use.",
	},
	{
		name: "Empowerment",
		icon: (
			<svg
				className="w-8 h-8 text-[#001F3F]"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<circle cx="12" cy="8" r="4" stroke="#001F3F" strokeWidth="2" />
				<path
					d="M4 20c0-4 4-7 8-7s8 3 8 7"
					stroke="#4682B4"
					strokeWidth="2"
				/>
			</svg>
		),
		desc: "We help clients and teams achieve more with AI.",
	},
	{
		name: "Innovation",
		icon: (
			<svg
				className="w-8 h-8 text-[#4682B4]"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path
					d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3.5 6v2a1.5 1.5 0 0 1-3 0v-2C6.5 13.5 5 11.5 5 9a7 7 0 0 1 7-7z"
					stroke="#4682B4"
					strokeWidth="2"
				/>
				<circle cx="12" cy="20" r="1" fill="#001F3F" />
			</svg>
		),
		desc: "We create new solutions and push boundaries.",
	},
	{
		name: "Integrity",
		icon: (
			<svg
				className="w-8 h-8 text-[#001F3F]"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<rect
					x="4"
					y="4"
					width="16"
					height="16"
					rx="4"
					stroke="#001F3F"
					strokeWidth="2"
				/>
				<path
					d="M8 12h8"
					stroke="#4682B4"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		),
		desc: "We act with honesty and transparency in all we do.",
	},
	{
		name: "Quiet Excellence",
		icon: (
			<svg
				className="w-8 h-8 text-[#4682B4]"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<circle cx="12" cy="12" r="10" stroke="#4682B4" strokeWidth="2" />
				<path
					d="M8 16l4-8 4 8"
					stroke="#001F3F"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
		),
		desc: "We deliver outstanding results without the noise.",
	},
];

const About: React.FC = () => (
	<section className="bg-[#F8F9FA] min-h-screen py-12 px-4 flex flex-col items-center">
		{/* Headshot and Bio */}
		<div className="flex flex-col items-center mb-10">
			<img
				src={myPic}
				alt="Chandan Kumar headshot"
				className="w-32 h-32 rounded-full shadow-lg border-4 border-[#001F3F] object-cover mb-4"
			/>
			<h1 className="text-2xl md:text-3xl font-bold text-[#001F3F] mb-1">
				CHANDAN
			</h1>
			<span className="text-base text-[#4682B4] font-semibold mb-2">
				Founder
			</span>
			<p className="text-gray-700 text-center max-w-xl mb-4">
				Founder of INTROVERTED.AI. Passionate about making advanced AI
				accessible, practical, and empowering for every business. With a
				background in automation, product, and client success, I help
				organizations unlock new value with confidence and clarity.
			</p>
		</div>
		{/* Brand Pillars */}
		<div className="w-full max-w-4xl mb-10">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{values.map((pillar) => (
					<div
						key={pillar.name}
						className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 border border-[#E0E6ED]"
					>
						{pillar.icon}
						<h3 className="text-lg font-semibold text-[#001F3F] mt-2 mb-1">
							{pillar.name}
						</h3>
						<p className="text-gray-700 text-sm text-center">
							{pillar.desc}
						</p>
					</div>
				))}
			</div>
		</div>
		{/* Mission Statement */}
		<div className="max-w-2xl text-center mt-6">
			<h2 className="text-xl md:text-2xl font-bold text-[#4682B4] mb-2">
				Our Mission
			</h2>
			<p className="text-gray-800 text-lg">
				Empowering organizations to thrive quietly and confidently with
				AI—through trust, simplicity, and innovation.
			</p>
		</div>
	</section>
);

export default About;
