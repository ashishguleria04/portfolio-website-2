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
} from "react-icons/si";
import avatar from "@/assets/avatar.jpg";
import { useRef } from "react";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs";
import { ProjectCard } from "@/components/ProjectCard";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const SOCIALS = [
	{
		href: "mailto:guleriaashish85@gmail.com",
		label: "Email",
		icon: <Mail className="size-5" />,
	},
	{
		href: "https://www.linkedin.com/in/ashish-guleria04/",
		label: "LinkedIn",
		icon: <Linkedin className="size-5" />,
	},
	{
		href: "https://github.com/ashishguleria04",
		label: "GitHub",
		icon: <Github className="size-5" />,
	},
	{
		href: "https://x.com/ashishguleria_",
		label: "X (Twitter)",
		icon: <FaXTwitter className="size-5" />,
	},
	{
		href: "https://leetcode.com/u/aashiishh_/",
		label: "LeetCode",
		icon: <SiLeetcode className="size-5" />,
	},
	{
		href: "https://www.geeksforgeeks.org/user/ashishguleria04/",
		label: "GeeksforGeeks",
		icon: <SiGeeksforgeeks className="size-5" />,
	},
];

const ADVANCED_PROJECTS = [
	{
		name: "Curio",
		desc: "A modern knowledge-sharing platform for curious minds to ask, answer, and discover.",
		url: "https://github.com/ashishguleria04/Curio",
		tags: ["React", "Node.js"],
		image: project1,
	},
	{
		name: "Multimodal Vision Language Model",
		desc: "Combines vision and language models for advanced AI applications.",
		url: "https://github.com/ashishguleria04/Multimodal-Vision-Language-Model",
		tags: ["Python", "AI"],
		image: project2,
	},
	{
		name: "Project Certify",
		desc: "A certificate generator and management tool for events and organizations.",
		url: "https://github.com/ashishguleria04/Project-Certify",
		tags: ["Python", "Flask"],
		image: project3,
	},
	{
		name: "IdeaLab",
		desc: "A collaborative platform for brainstorming and sharing innovative ideas.",
		url: "https://github.com/ashishguleria04/IdeaLab",
		tags: ["React", "Node.js"],
		image: project1,
	},
	{
		name: "SHEild – Women Safety at Workplaces",
		desc: "A platform to report and address workplace safety concerns for women.",
		url: "https://github.com/ashishguleria04/sexual-harassment",
		tags: ["React", "Node.js"],
		image: project2,
	},
];

const INTERMEDIATE_PROJECTS = [
	{
		name: "Login Page (Tailwind CSS)",
		desc: "A beautiful, responsive login page built with Tailwind CSS and React.",
		url: "https://github.com/ashishguleria04/loginpage-tailwindcss",
		tags: ["React", "Tailwind"],
		image: project3,
	},
	{
		name: "Website Performance Analyzer Extension",
		desc: "A browser extension to analyze and improve website performance metrics.",
		url: "https://github.com/ashishguleria04/Website-Performance-Analyzer-Extension",
		tags: ["JavaScript", "Extension"],
		image: project1,
	},
	{
		name: "HeySpeakers",
		desc: "A web app for organizing and managing speaker sessions and events.",
		url: "https://github.com/ashishguleria04/heyspeakers",
		tags: ["React"],
		image: project2,
	},
	{
		name: "Editro Flask Image Editor",
		desc: "A simple image editor built with Flask for quick edits and filters.",
		url: "https://github.com/ashishguleria04/Editro-Flask-Img-Editor",
		tags: ["Python", "Flask"],
		image: project3,
	},
	{
		name: "Simple Ad Blocker",
		desc: "A lightweight browser extension to block intrusive ads.",
		url: "https://github.com/ashishguleria04/simple-ad-blocker",
		tags: ["JavaScript", "Extension"],
		image: project1,
	},
];

const BASIC_PROJECTS = [
	{
		name: "Straight Line in Python",
		desc: "A Python tool to plot and analyze straight lines and their equations.",
		url: "https://github.com/ashishguleria04/Straight-Line-In-Python",
		tags: ["Python"],
		image: project2,
	},
	{
		name: "Python QR Code Generator",
		desc: "Generate QR codes easily with this Python-based tool.",
		url: "https://github.com/ashishguleria04/python-QR-Code-Generator",
		tags: ["Python"],
		image: project3,
	},
	{
		name: "Python Chatbot",
		desc: "An interactive chatbot built in Python for basic conversations.",
		url: "https://github.com/ashishguleria04/Python-Chatbot",
		tags: ["Python"],
		image: project1,
	},
	{
		name: "Snake Game",
		desc: "Classic snake game recreated in Python with a modern UI.",
		url: "https://github.com/ashishguleria04/snake-game",
		tags: ["Python"],
		image: project2,
	},
	{
		name: "Odin Landing Page",
		desc: "A clean and responsive landing page project for The Odin Project curriculum.",
		url: "https://github.com/ashishguleria04/odin-landing-page",
		tags: ["HTML", "CSS"],
		image: project3,
	},
];

const SKILLS = [
	{ name: "React", icon: <SiReact size={28} /> },
	{ name: "Node.js", icon: <SiNodedotjs size={28} /> },
	{ name: "TypeScript", icon: <SiTypescript size={28} /> },
	{ name: "Python", icon: <SiPython size={28} /> },
	{ name: "Flask", icon: <SiFlask size={28} /> },
	{ name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
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
				className="container mx-auto pt-16 pb-20 flex flex-col-reverse md:flex-row items-center gap-12"
			>
				{/* Left: Content */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="w-full md:w-1/2"
				>
					<span className="inline-block px-3 py-1 mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide border border-blue-200 dark:border-blue-700 shadow-sm">
						Open for freelance, internships, and full-time roles
					</span>
					<h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight font-display mb-2 break-words whitespace-normal">
						Hi, I'm{" "}
						<span className="text-primary">
							Ashish Guleria
						</span>
					</h1>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.7 }}
						className="text-lg sm:text-xl font-semibold text-primary mb-2"
					>
						Building digital experiences that matter.
					</motion.p>
					<h2 className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-6">
						Software Engineer & Full Stack Web Developer
					</h2>
					<div className="flex flex-wrap gap-3 mb-8">
						<Button asChild>
							<Link to="/blog">
								<BookOpen className="size-4 mr-2" />
								Read the Blog
							</Link>
						</Button>
						<Button asChild variant="secondary">
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
					<p className="text-base sm:text-lg text-muted-foreground max-w-prose mb-8">
						I’m Ashish Guleria, a Software Engineer and Full Stack Web Developer passionate about building impactful, user-friendly, and visually appealing digital experiences. I love turning ideas into reality through clean code, creative design, and constant learning.
					</p>
					{/* Social Icons */}
					<div className="flex flex-wrap items-center gap-2 mt-2">
						{SOCIALS.map((s) => (
							<Button
								asChild
								variant="outline"
								size="icon"
								aria-label={s.label}
								title={s.label}
								className="transition-all hover:scale-110 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary"
								key={s.label}
							>
								<a href={s.href} target="_blank" rel="noopener">
									{s.icon}
								</a>
							</Button>
						))}
					</div>
				</motion.div>
				{/* Right: Avatar */}
				<motion.div
					initial={{ opacity: 0, x: 24 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="w-full md:w-1/2 flex justify-center items-center"
				>
					<div className="relative size-40 sm:size-56 md:size-64 rounded-full overflow-hidden shadow-lg">
						<img
							src={avatar}
							alt="Portrait of Ashish Guleria"
							loading="eager"
							className="h-full w-full object-cover rounded-full"
						/>
					</div>
				</motion.div>
			</section>

			{/* Projects */}
			<section id="projects" className="container mx-auto py-16">
				<header className="mb-8 text-center">
					<h2 className="text-3xl font-bold tracking-tight font-display">
						Featured Projects
					</h2>
					<p className="text-muted-foreground mt-2">
						A selection of my favorite work.
					</p>
				</header>
				<Tabs defaultValue="advanced" className="w-full">
					<TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
						<TabsTrigger value="advanced">Advanced</TabsTrigger>
						<TabsTrigger value="intermediate">Intermediate</TabsTrigger>
						<TabsTrigger value="basic">Basic</TabsTrigger>
					</TabsList>
					<TabsContent value="advanced" className="py-6">
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{ADVANCED_PROJECTS.map((proj) => (
								<ProjectCard
									key={proj.name}
									title={proj.name}
									description={proj.desc}
									tags={proj.tags}
									image={proj.image}
									href={proj.url}
								/>
							))}
						</div>
					</TabsContent>
					<TabsContent value="intermediate" className="py-6">
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{INTERMEDIATE_PROJECTS.map((proj) => (
								<ProjectCard
									key={proj.name}
									title={proj.name}
									description={proj.desc}
									tags={proj.tags}
									image={proj.image}
									href={proj.url}
								/>
							))}
						</div>
					</TabsContent>
					<TabsContent value="basic" className="py-6">
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{BASIC_PROJECTS.map((proj) => (
								<ProjectCard
									key={proj.name}
									title={proj.name}
									description={proj.desc}
									tags={proj.tags}
									image={proj.image}
									href={proj.url}
								/>
							))}
						</div>
					</TabsContent>
				</Tabs>
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
