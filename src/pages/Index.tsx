import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, FileText, BookOpen } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import {
	SiLeetcode,
	SiGeeksforgeeks,
	SiReact,
	SiNodedotjs,
	SiTypescript,
	SiPython,
	SiFlask,
	SiTailwindcss,
	SiFramer,
	SiGit,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiPostgresql,
	SiMongodb,
} from "react-icons/si";
import avatar from "@/assets/avatar.jpg";
import { useRef } from "react";
import { ProjectCard } from "@/components/ProjectCard";

const SOCIALS = [
	{
		href: "mailto:guleriaashish85@gmail.com",
		label: "Email",
		icon: <Mail className="size-6" />,
	},
	{
		href: "https://www.linkedin.com/in/ashish-guleria04/",
		label: "LinkedIn",
		icon: <Linkedin className="size-6" />,
	},
	{
		href: "https://github.com/ashishguleria04",
		label: "GitHub",
		icon: <Github className="size-6" />,
	},
	{
		href: "https://x.com/ashishguleria_",
		label: "X (Twitter)",
		icon: <FaXTwitter className="size-6" />,
	},
	{
		href: "https://leetcode.com/u/aashiishh_/",
		label: "LeetCode",
		icon: <SiLeetcode className="size-6" />,
	},
	{
		href: "https://www.geeksforgeeks.org/user/ashishguleria04/",
		label: "GeeksforGeeks",
		icon: <SiGeeksforgeeks className="size-6" />,
	},
];

const ADVANCED_PROJECTS = [
	{
		name: "Advanced B2B Billing",
		desc: "A robust, production-ready starter kit for building B2B SaaS applications with advanced billing patterns, multi-tenancy, and team management.",
		url: "https://github.com/ashishguleria04/Advanced-B2B-Billing",
		tags: ["Next.js", "Stripe", "Drizzle", "Tailwind"],
	},
	{
		name: "MockSocial",
		desc: "A powerful tool designed to create high-fidelity social media and chat mockups for developers and designers.",
		url: "https://github.com/ashishguleria04/MockSocial",
		tags: ["Next.js", "Tailwind", "Framer Motion"],
	},
	{
		name: "Quantalyze Habit Tracker",
		desc: "A minimalistic habit tracker designed to optimize vitality, focus, discipline, and social connection.",
		url: "https://github.com/ashishguleria04/quantalyze-habit-tracker",
		tags: ["React", "TypeScript", "Tailwind"],
	},
	{
		name: "Curio",
		desc: "A modern knowledge-sharing platform for curious minds to ask, answer, and discover.",
		url: "https://github.com/ashishguleria04/Curio",
		tags: ["React", "Node.js"],
	},
	{
		name: "Multimodal Vision Language Model",
		desc: "Combines vision and language models for advanced AI applications.",
		url: "https://github.com/ashishguleria04/Multimodal-Vision-Language-Model",
		tags: ["Python", "AI"],
	},
	{
		name: "Project Certify",
		desc: "A certificate generator and management tool for events and organizations.",
		url: "https://github.com/ashishguleria04/Project-Certify",
		tags: ["Python", "Flask"],
	},
	{
		name: "IdeaLab",
		desc: "A collaborative platform for brainstorming and sharing innovative ideas.",
		url: "https://github.com/ashishguleria04/IdeaLab",
		tags: ["React", "Node.js"],
	},
	{
		name: "SHEild – Women Safety at Workplaces",
		desc: "A platform to report and address workplace safety concerns for women.",
		url: "https://github.com/ashishguleria04/sexual-harassment",
		tags: ["React", "Node.js"],
	},
];

const INTERMEDIATE_PROJECTS = [
	{
		name: "Login Page (Tailwind CSS)",
		desc: "A beautiful, responsive login page built with Tailwind CSS and React.",
		url: "https://github.com/ashishguleria04/loginpage-tailwindcss",
		tags: ["React", "Tailwind"],
	},
	{
		name: "Website Performance Analyzer Extension",
		desc: "A browser extension to analyze and improve website performance metrics.",
		url: "https://github.com/ashishguleria04/Website-Performance-Analyzer-Extension",
		tags: ["JavaScript", "Extension"],
	},
	{
		name: "HeySpeakers",
		desc: "A web app for organizing and managing speaker sessions and events.",
		url: "https://github.com/ashishguleria04/heyspeakers",
		tags: ["React"],
	},
	{
		name: "Editro Flask Image Editor",
		desc: "A simple image editor built with Flask for quick edits and filters.",
		url: "https://github.com/ashishguleria04/Editro-Flask-Img-Editor",
		tags: ["Python", "Flask"],
	},
	{
		name: "Simple Ad Blocker",
		desc: "A lightweight browser extension to block intrusive ads.",
		url: "https://github.com/ashishguleria04/simple-ad-blocker",
		tags: ["JavaScript", "Extension"],
	},
];

const BASIC_PROJECTS = [
	{
		name: "Straight Line in Python",
		desc: "A Python tool to plot and analyze straight lines and their equations.",
		url: "https://github.com/ashishguleria04/Straight-Line-In-Python",
		tags: ["Python"],
	},
	{
		name: "Python QR Code Generator",
		desc: "Generate QR codes easily with this Python-based tool.",
		url: "https://github.com/ashishguleria04/python-QR-Code-Generator",
		tags: ["Python"],
	},
	{
		name: "Python Chatbot",
		desc: "An interactive chatbot built in Python for basic conversations.",
		url: "https://github.com/ashishguleria04/Python-Chatbot",
		tags: ["Python"],
	},
	{
		name: "Snake Game",
		desc: "Classic snake game recreated in Python with a modern UI.",
		url: "https://github.com/ashishguleria04/snake-game",
		tags: ["Python"],
	},
	{
		name: "Odin Landing Page",
		desc: "A clean and responsive landing page project for The Odin Project curriculum.",
		url: "https://github.com/ashishguleria04/odin-landing-page",
		tags: ["HTML", "CSS"],
	},
];

const SKILLS = [
	{ name: "React", icon: <SiReact size={28} /> },
	{ name: "Node.js", icon: <SiNodedotjs size={28} /> },
	{ name: "TypeScript", icon: <SiTypescript size={28} /> },
	{ name: "Python", icon: <SiPython size={28} /> },
	{ name: "Flask", icon: <SiFlask size={28} /> },
	{ name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
	{ name: "PostgreSQL", icon: <SiPostgresql size={28} /> },
	{ name: "MongoDB", icon: <SiMongodb size={28} /> },
	{ name: "Framer Motion", icon: <SiFramer size={28} /> },
	{ name: "Git", icon: <SiGit size={28} /> },
	{ name: "HTML5", icon: <SiHtml5 size={28} /> },
	{ name: "CSS3", icon: <SiCss3 size={28} /> },
	{ name: "JavaScript", icon: <SiJavascript size={28} /> },
];

const Index = () => {
	const emailRef = useRef<HTMLAnchorElement>(null);

	const handleCopyEmail = () => {
		navigator.clipboard.writeText("guleriaashish85@gmail.com");
		if (emailRef.current) {
			emailRef.current.innerText = "Copied!";
			setTimeout(() => {
				if (emailRef.current)
					emailRef.current.innerText = "guleriaashish85@gmail.com";
			}, 1200);
		}
	};

	return (
		<main className="min-h-screen bg-grid-light dark:bg-grid-dark overflow-x-hidden">
			<SEO
				title="Ashish Guleria | Software Engineer & Full Stack Developer"
				description="Portfolio of Ashish Guleria: Software Engineer & Full Stack Web Developer. Projects, about, contact, and blog."
				type="website"
			/>

			{/* Hero */}
			<section
				id="home"
				className="container mx-auto pt-24 pb-24 text-center relative"
			>
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-primary/80">Available for new projects</span>
                </motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
				>
					<div className="relative inline-block mb-10 group">
                        {/* Soft Glow */}
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
						<motion.div
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.4 }}
                            className="relative z-10"
						>
							<img
								src={avatar}
								alt="Portrait of Ashish Guleria"
								loading="eager"
								className="h-40 w-40 sm:h-48 sm:w-48 rounded-full object-cover shadow-2xl ring-4 ring-background/50"
							/>
						</motion.div>
					</div>

					<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-display mb-6 whitespace-nowrap">
						Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-primary bg-300% animate-gradient">Ashish Guleria</span>
					</h1>

					<p className="text-xl sm:text-2xl font-light text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
						Software Engineer & Full Stack Web Developer crafting <span className="text-foreground font-medium">exceptional digital experiences</span> with precision and passion.
					</p>

					<div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14">
						<Button asChild size="lg" className="h-12 px-8 rounded-full text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
							<Link to="/blog">
								<BookOpen className="size-4 mr-2" />
								Read The Blog
							</Link>
						</Button>
						<Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-full text-base bg-background/50 backdrop-blur-sm hover:bg-background/80">
							<a
								href="https://drive.google.com/file/d/1AfCCeVgSXvhjuefcNG3TWm5yYhpFj8uv/view"
								target="_blank"
								rel="noopener"
							>
								<FileText className="size-4 mr-2" />
								Download Resume
							</a>
						</Button>
					</div>

					<div className="flex justify-center flex-wrap items-center gap-3 mb-12">
						{SOCIALS.map((s) => (
							<Button
								asChild
								variant="ghost"
								size="icon"
								aria-label={s.label}
								title={s.label}
								className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors h-12 w-12"
								key={s.label}
							>
								<a href={s.href} target="_blank" rel="noopener">
									{s.icon}
								</a>
							</Button>
						))}
					</div>
				</motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-muted-foreground/50 to-transparent"></div>
                </motion.div>
			</section>

			{/* Projects */}
			<section id="projects" className="container mx-auto py-16 px-4">
				<header className="mb-12 text-center">
					<h2 className="text-3xl font-bold tracking-tight font-display">
						Featured Projects
					</h2>
					<p className="text-muted-foreground mt-2">
						A selection of my favorite work, from advanced to basic.
					</p>
				</header>
				
				<div className="space-y-16">
					{/* Advanced Projects */}
					<div>
						<h3 className="text-2xl font-bold mb-6 border-b pb-2 inline-block">Advanced</h3>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{ADVANCED_PROJECTS.map((proj) => (
								<ProjectCard
									key={proj.name}
									title={proj.name}
									description={proj.desc}
									tags={proj.tags}
									href={proj.url}
								/>
							))}
						</div>
					</div>

					{/* Intermediate Projects */}
					<div>
						<h3 className="text-2xl font-bold mb-6 border-b pb-2 inline-block">Intermediate</h3>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{INTERMEDIATE_PROJECTS.map((proj) => (
								<ProjectCard
									key={proj.name}
									title={proj.name}
									description={proj.desc}
									tags={proj.tags}
									href={proj.url}
								/>
							))}
						</div>
					</div>

					{/* Basic Projects */}
					<div>
						<h3 className="text-2xl font-bold mb-6 border-b pb-2 inline-block">Basic</h3>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{BASIC_PROJECTS.map((proj) => (
								<ProjectCard
									key={proj.name}
									title={proj.name}
									description={proj.desc}
									tags={proj.tags}
									href={proj.url}
								/>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Skills */}
			<section id="skills" className="container mx-auto py-16">
				<header className="mb-8 text-center">
					<h2 className="text-3xl font-bold tracking-tight font-display">
						Skills & Expertise
					</h2>
					<p className="text-muted-foreground mt-2">
						The tools and technologies I use to build things.
					</p>
				</header>
				<div className="flex flex-wrap justify-center gap-4">
					{SKILLS.map((skill) => (
						<div
							key={skill.name}
							className="flex items-center gap-3 rounded-lg border bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 p-4 shadow-elevated hover:shadow-lg transition-shadow"
						>
							{skill.icon}
							<span className="font-medium">{skill.name}</span>
						</div>
					))}
				</div>
			</section>

			{/* About */}
			<section id="about" className="container mx-auto py-16">
				<div className="grid gap-12 md:grid-cols-3 items-center">
					<div className="md:col-span-2">
						<h2 className="text-3xl font-bold tracking-tight font-display mb-4">
							About Me
						</h2>
						<div className="space-y-4 text-muted-foreground max-w-prose">
							<p>
								I’m a passionate Software Engineer and Full Stack Web Developer dedicated to building impactful, user-centric digital solutions. My journey spans a diverse range of projects, from performance-focused browser extensions to collaborative platforms and creative tools.
							</p>
							<p>
								I thrive on solving real-world problems with clean code and thoughtful design. Whether it's developing robust back-end systems or crafting beautiful, responsive UIs, I enjoy every step of the development process.
							</p>
							<p>
								My work blends technical expertise with creativity to deliver solutions that make a difference. I'm always eager to take on new challenges and contribute to projects that push the boundaries of what's possible on the web.
							</p>
						</div>
					</div>
					<div className="rounded-lg border bg-card/70 backdrop-blur p-6 shadow-elevated supports-[backdrop-filter]:bg-card/50 space-y-4">
						<h3 className="text-lg font-semibold font-display">Quick Facts</h3>
						<ul className="space-y-3 text-sm">
							<li className="flex items-center gap-2">
								<span className="text-muted-foreground font-semibold w-20">Focus:</span>
								<span>Full Stack Development, UI/UX</span>
							</li>
							<li className="flex items-center gap-2">
								<span className="text-muted-foreground font-semibold w-20">Stack:</span>
								<span>React, TS, Python, Tailwind</span>
							</li>
							<li className="flex items-center gap-2">
								<span className="text-muted-foreground font-semibold w-20">Location:</span>
								<span>Remote</span>
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Contact */}
			<section id="contact" className="container mx-auto py-16 text-center">
				<header className="mb-6">
					<h2 className="text-4xl font-bold tracking-tight font-display">
						Let's Connect
					</h2>
					<p className="text-muted-foreground mt-2 max-w-lg mx-auto">
						Have a project in mind, or just want to say hi? I'd love to hear from you.
					</p>
				</header>
				<div className="flex flex-col items-center gap-4">
					<a
						ref={emailRef}
						href="mailto:guleriaashish85@gmail.com"
						className="text-lg font-semibold underline-offset-4 hover:underline hover:text-primary transition-colors cursor-pointer"
						aria-label="Email Ashish Guleria"
						title="Email Ashish Guleria"
						onClick={(e) => {
							e.preventDefault();
							handleCopyEmail();
						}}
					>
						guleriaashish85@gmail.com
					</a>
					<Button
						size="sm"
						variant="outline"
						onClick={handleCopyEmail}
						aria-label="Copy email to clipboard"
						title="Copy email to clipboard"
					>
						Copy Email
					</Button>
				</div>
				<div className="text-sm text-muted-foreground mt-6">
					I usually respond within 24 hours.
				</div>
			</section>

			<footer className="border-t py-8">
				<div className="container mx-auto text-sm text-muted-foreground flex justify-between items-center">
					<span>
						© {new Date().getFullYear()} Ashish Guleria. All rights reserved.
					</span>
					<div className="flex flex-wrap items-center gap-4">
						{SOCIALS.map((s) => (
							<a
								href={s.href}
								target="_blank"
								rel="noopener"
								aria-label={s.label}
								title={s.label}
								key={s.label}
								className="hover:text-primary transition-colors"
							>
								{s.icon}
							</a>
						))}
					</div>
				</div>
			</footer>
		</main>
	);
};

export default Index;
